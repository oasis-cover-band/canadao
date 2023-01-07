import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { asideRouterAnimations, mainRouterAnimations, navRouterAnimations, topRouterAnimations } from './animations';
import { MenuService } from './services/menu.service';

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
  
  constructor(
    private menuService: MenuService
  ) {
  }
}
