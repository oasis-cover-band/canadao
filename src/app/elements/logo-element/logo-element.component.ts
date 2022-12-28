import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-logo-element',
  templateUrl: './logo-element.component.html',
  styleUrls: ['./logo-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoElementComponent {

}
