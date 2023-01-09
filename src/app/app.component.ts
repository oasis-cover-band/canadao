import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { asideRouterAnimations, mainRouterAnimations, navRouterAnimations, topRouterAnimations } from './animations';
import { MenuService } from './services/menu.service';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    navRouterAnimations,
    mainRouterAnimations,
    asideRouterAnimations,
    topRouterAnimations
  ]
})
export class AppComponent {

  opened: BehaviorSubject<boolean> = this.menuService.opened;
  @ViewChild('mainElement') mainElement!: ElementRef;
  
  constructor(
    private menuService: MenuService,
    private router: Router
  ) {
    gsap.registerPlugin(ScrollTrigger);
    this.router.events.subscribe((event: Event) => {
      // console.log(event);
      if (event instanceof NavigationStart) {
        this.mainElement.nativeElement.scroll({top: 0, behavior: 'smooth'})
      }
    });
  }
}
