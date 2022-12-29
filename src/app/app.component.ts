import { ChangeDetectionStrategy, Component } from '@angular/core';
import { asideRouterAnimations, mainRouterAnimations, navRouterAnimations, topRouterAnimations } from './animations';

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
  title = 'canadao';
}
