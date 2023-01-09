import { ChangeDetectionStrategy, Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from 'src/app/interfaces/question';
import { User } from 'src/app/interfaces/user';
import { DataService } from 'src/app/services/data.service';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionsPageComponent {
  questions: BehaviorSubject<Question[]> = this.dataService.questions;
  loggedInAs: BehaviorSubject<User> = this.dataService.loggedInAs;
  @ViewChild('gridElement', {read: ElementRef}) grid!: ElementRef;

  
  @ViewChildren("questionElement", { read: ElementRef })
  public set questionElements(value: QueryList<ElementRef>) {
    for(let index = 0; index < value.length; index++) {
      this.registerScrollTrigger(value.get(index)?.nativeElement);
      this.renderer.setStyle(value.get(index)?.nativeElement, 'opacity', 0);
    }
  }
  public get questionElements(): QueryList<ElementRef> {
    return this._questionElements;
  }
  private _questionElements!: QueryList<ElementRef>;

  constructor(
    private dataService: DataService,
    private renderer: Renderer2
  ) {
  }

  questionTrackBy(index: number, question: Question): string {
    return question.id;
  }

  registerScrollTrigger(element: Element): void {
    ScrollTrigger.create({
      trigger: element,
      scroller: this.grid.nativeElement,
      scrub: 0.5,
      onEnter: () => { this.animateFrom(element, 'e'); }, 
      onEnterBack: () => { this.animateFrom(element, 'eb'); },
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

  animateFrom(element: Element, type: string): void {
    gsap.fromTo(element, {autoAlpha: 0}, {
      duration: 0.25,
      autoAlpha: 1, 
      ease: "circ", 
      overwrite: "auto"
    });
  }
}
