import { ChangeDetectionStrategy, Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { DataService } from 'src/app/services/data.service';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersPageComponent {
  users: BehaviorSubject<User[]> = this.dataService.users;

  
  @ViewChildren("userElement", { read: ElementRef })
  public set userElements(value: QueryList<ElementRef>) {
    for(let index = 0; index < value.length; index++) {
      this.registerScrollTrigger(value.get(index)?.nativeElement);
      this.renderer.setStyle(value.get(index)?.nativeElement, 'opacity', 0);
    }
  }
  public get userElements(): QueryList<ElementRef> {
    return this._userElements;
  }
  private _userElements!: QueryList<ElementRef>;
  constructor(
    private dataService: DataService,
    private router: Router,
    private renderer: Renderer2,
    private scrollService: ScrollService
  ) {}

  userTrackBy(index: number, user: User): string {
    return user.id;
  }

  goToProfile(userId: string) {
    this.router.navigate([{outlets: {main: ['user', userId]}}]);
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
