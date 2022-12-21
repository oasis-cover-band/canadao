import { ChangeDetectionStrategy, Component } from '@angular/core';
import { leftRouterAnimations, mainRouterAnimations, navRouterAnimations, rightRouterAnimations, searchRouterAnimations } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    navRouterAnimations,
    mainRouterAnimations,
    leftRouterAnimations,
    rightRouterAnimations,
    searchRouterAnimations
  ]
})
export class AppComponent {
  title = 'canadao';
}
