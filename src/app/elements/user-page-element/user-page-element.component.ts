import { ChangeDetectionStrategy, Component, ElementRef, Input, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Vote } from 'src/app/interfaces/vote';
import { DataService } from 'src/app/services/data.service';
import { ScrollService } from 'src/app/services/scroll.service';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Group } from 'src/app/interfaces/group';

@Component({
  selector: 'app-user-page-element',
  templateUrl: './user-page-element.component.html',
  styleUrls: ['./user-page-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPageElementComponent {
  @Input() user!: User;
  @Input() loggedInAs!: User;
  votes!: Vote[];
  groups!: Group[];
  questionNames!: string[];

  
  @ViewChildren("sectionElement", { read: ElementRef })
  public set sectionElements(value: QueryList<ElementRef>) {
    for(let index = 0; index < value.length; index++) {
      this.registerScrollTrigger(value.get(index)?.nativeElement);
      this.renderer.setStyle(value.get(index)?.nativeElement, 'opacity', 0);
    }
  }
  public get sectionElements(): QueryList<ElementRef> {
    return this._sectionElements;
  }
  private _sectionElements!: QueryList<ElementRef>;
  
  constructor(
    private renderer: Renderer2,
    private dataService: DataService,
    private scrollService: ScrollService
  ) {

  }

  ngOnInit(): void {
    this.getVotes();
    this.getGroups();
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

  getVotes(): void {
    [this.votes, this.questionNames] = this.dataService.getVotes(this.user.id);
  }
  getGroups(): void {
    this.groups = this.dataService.getGroups(this.user.groupIds);
  }
}
