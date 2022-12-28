import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nav-panel',
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavPanelComponent {
  selection: BehaviorSubject<number> = new BehaviorSubject<number>(0);
}
