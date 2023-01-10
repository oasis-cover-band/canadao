import { ChangeDetectionStrategy, Component, ElementRef, Input, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Vote } from 'src/app/interfaces/vote';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-page-element',
  templateUrl: './user-page-element.component.html',
  styleUrls: ['./user-page-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPageElementComponent {
  @Input() user!: User;
  votes!: Vote[];
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
    private elRef: ElementRef,
    private dataService: DataService
  ) {

  }

  ngOnInit(): void {
    this.getVotes();
  }

  registerScrollTrigger(element: Element): void {
    ScrollTrigger.create({
      trigger: element,
      scroller: this.elRef.nativeElement,
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
}
