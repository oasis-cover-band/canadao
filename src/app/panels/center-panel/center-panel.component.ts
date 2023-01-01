import { ChangeDetectionStrategy, Component } from '@angular/core';
import { centerPanelRouterAnimations } from 'src/app/animations';

@Component({
  selector: 'app-center-panel',
  templateUrl: './center-panel.component.html',
  styleUrls: ['./center-panel.component.scss'],
  animations: [
    centerPanelRouterAnimations
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CenterPanelComponent {

}
