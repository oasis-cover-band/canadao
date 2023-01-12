import { ChangeDetectionStrategy, Component, ElementRef, Input, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { Vote } from 'src/app/interfaces/vote';
import { ScrollService } from 'src/app/services/scroll.service';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { VotingResultPipe } from 'src/app/pipes/voting-result.pipe';

@Component({
  selector: 'app-user-page-voting-record-element',
  templateUrl: './user-page-voting-record-element.component.html',
  styleUrls: ['./user-page-voting-record-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPageVotingRecordElementComponent {

  style = getComputedStyle(document.body);
  blue = this.style.getPropertyValue('--blue');
  lightBlue = this.style.getPropertyValue('--light-blue');
  yellow = this.style.getPropertyValue('--yellow');
  red = this.style.getPropertyValue('--red');
  lightRed = this.style.getPropertyValue('--light-red');
  white = this.style.getPropertyValue('--white');

  currentPage = 1;
  maxPerPage = 4;
  paginators: number[] = [];

  viewAll = false;
  toggleText = 'View All';

  @Input()
  public set votes(value: Vote[]) {
    this._votes = value;
    for(let index = 0; index < value.length; index++) {
      this.voteResultColors.push(this.getVotingResultColor(value[index].voteOption, value[index].questionType));
      if (index % this.maxPerPage === 0) {
        this.paginators.push(this.paginators.length + 1);
      }
    }
  }

  public get votes(): Vote[] {
    return this._votes;
  }

  private _votes!: Vote[];

  @Input() questionNames!: string[];

  voteResultColors: string[] = [];

  
  @ViewChildren("voteElement", { read: ElementRef })
  public set voteElements(value: QueryList<ElementRef>) {
    for(let index = 0; index < value.length; index++) {
      this.registerScrollTrigger(value.get(index)?.nativeElement);
      this.renderer.setStyle(value.get(index)?.nativeElement, 'opacity', 0);
    }
  }
  public get voteElements(): QueryList<ElementRef> {
    return this._voteElements;
  }
  private _voteElements!: QueryList<ElementRef>;
  

  constructor(
    private renderer: Renderer2,
    private scrollService: ScrollService,
    private votingResultPipe: VotingResultPipe
  ) {

  }

  toggle(): void {
    this.viewAll = !this.viewAll;
    if (this.viewAll) {
      this.toggleText = 'Hide';
    } else {
      this.toggleText = 'View All';
    }
    this.scrollService.refresh();
  }

  nextPage(): void {
    if (this.currentPage * this.maxPerPage < this.votes.length) {
      this.currentPage++;
    }
    this.scrollService.refresh();
  }

  previousPage(): void {
    if ((this.currentPage - 1) * this.maxPerPage > 0) {
      this.currentPage--;
    }
    this.scrollService.refresh();
  }

  goToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.scrollService.refresh();
  }

  paginatorTrackBy(index: number, paginator: number): number {
    return paginator;
  }

  getVotingResultColor(voteOption: number, questionType: Vote['questionType']): string {
    const result = this.votingResultPipe.transform(voteOption, questionType);
    if (result === 'No' || result === 'Strongly Disagree') {
      return this.red;
    } else if (result === 'Disagree') {
      return this.lightRed;
    } else if (result === 'Neutral') {
      return this.yellow;
    } else if (result === 'Agree') {
      return this.lightBlue;
    } else if (result === 'Yes' || result === 'Strongly Agree') {
      return this.lightBlue;
    } else {
      return this.white;
    }
  }

  voteTrackBy(index: number, vote: Vote): string {
    return vote.id;
  }

  registerScrollTrigger(element: Element): void {
    ScrollTrigger.create({
      trigger: element,
      scroller: this.scrollService.mainElement.getValue()!.nativeElement,
      scrub: 0.5,
      onEnter: () => { this.animateFrom(element); }, 
      onEnterBack: () => { this.animateFrom(element); },
      onLeave: () => { this.hide(element); },
      onLeaveBack: () => { this.hide(element); }
    });
  }

  hide(element: Element): void {
    gsap.to(element, {
      duration: 0.25, 
      autoAlpha: 0, 
      ease: "circ", 
      overwrite: "auto"
    });
  }

  animateFrom(element: Element): void {
    gsap.fromTo(element, {autoAlpha: 0}, {
      duration: 0.25,
      autoAlpha: 1, 
      ease: "circ", 
      overwrite: "auto"
    });
  }
}
