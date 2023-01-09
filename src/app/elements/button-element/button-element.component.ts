import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-button-element',
  templateUrl: './button-element.component.html',
  styleUrls: ['./button-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonElementComponent {
  @Input() @HostBinding('class.black') black: boolean = false;
}
