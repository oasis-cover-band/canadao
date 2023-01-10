import { ChangeDetectionStrategy, Component, ElementRef, Input, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { Group } from 'src/app/interfaces/group';
import { User } from 'src/app/interfaces/user';
import { ScrollService } from 'src/app/services/scroll.service';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-user-page-groups-element',
  templateUrl: './user-page-groups-element.component.html',
  styleUrls: ['./user-page-groups-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPageGroupsElementComponent {

  @Input() loggedInAs!: User;
  @Input() groups!: Group[];
  
  @ViewChildren("groupElement", { read: ElementRef })
  public set groupElements(value: QueryList<ElementRef>) {
    for(let index = 0; index < value.length; index++) {
      this.registerScrollTrigger(value.get(index)?.nativeElement);
      this.renderer.setStyle(value.get(index)?.nativeElement, 'opacity', 0);
    }
  }
  public get groupElements(): QueryList<ElementRef> {
    return this._groupElements;
  }
  private _groupElements!: QueryList<ElementRef>;
  

  constructor(
    private renderer: Renderer2,
    private scrollService: ScrollService
  ) {

  }

  groupTrackBy(index: number, group: Group): string {
    return group.id;
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
