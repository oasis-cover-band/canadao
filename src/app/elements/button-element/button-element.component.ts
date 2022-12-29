import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-button-element',
  templateUrl: './button-element.component.html',
  styleUrls: ['./button-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonElementComponent {

}
