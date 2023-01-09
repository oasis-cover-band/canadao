import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-user-name-element',
  templateUrl: './user-name-element.component.html',
  styleUrls: ['./user-name-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserNameElementComponent {
  @Input() name!: string;
  @Input() @HostBinding('class.large') large: boolean = false;
}
