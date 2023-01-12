import { ChangeDetectionStrategy, Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Group } from 'src/app/interfaces/group';
import { User } from 'src/app/interfaces/user';
import { DataService } from 'src/app/services/data.service';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollService } from 'src/app/services/scroll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupsPageComponent {
  groups: BehaviorSubject<Group[]> = this.dataService.groups;
  loggedInAs: BehaviorSubject<User> = this.dataService.loggedInAs;
  togglingMembership: boolean = false;

  
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
    private dataService: DataService,
    private renderer: Renderer2,
    private scrollService: ScrollService,
    private router: Router
  ) {}

  toggling(event: boolean): void {
    this.togglingMembership = true;
    setTimeout(() => {
      this.togglingMembership = false;
    }, 10);
  }

  goToGroup(groupId: string) {
    if (!this.togglingMembership) {
      this.router.navigate([{outlets: {main: ['group', groupId]}}]);
    }
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
