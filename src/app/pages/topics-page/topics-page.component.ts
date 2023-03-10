import { ChangeDetectionStrategy, Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Topic } from 'src/app/interfaces/topic';
import { DataService } from 'src/app/services/data.service';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-topics-page',
  templateUrl: './topics-page.component.html',
  styleUrls: ['./topics-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicsPageComponent {
  topics: BehaviorSubject<Topic[]> = this.dataService.topics;

  
  @ViewChildren("topicElement", { read: ElementRef })
  public set topicElements(value: QueryList<ElementRef>) {
    for(let index = 0; index < value.length; index++) {
      this.registerScrollTrigger(value.get(index)?.nativeElement);
      this.renderer.setStyle(value.get(index)?.nativeElement, 'opacity', 0);
    }
  }
  public get topicElements(): QueryList<ElementRef> {
    return this._topicElements;
  }
  private _topicElements!: QueryList<ElementRef>;
  constructor(
    private dataService: DataService,
    private renderer: Renderer2,
    private scrollService: ScrollService
  ) {}

  topicTrackBy(index: number, topic: Topic): string {
    return topic.id;
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
