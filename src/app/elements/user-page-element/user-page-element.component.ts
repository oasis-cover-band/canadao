import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-page-element',
  templateUrl: './user-page-element.component.html',
  styleUrls: ['./user-page-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPageElementComponent {
  @Input() user!: User;
}
