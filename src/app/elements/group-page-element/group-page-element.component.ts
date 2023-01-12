import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Group } from 'src/app/interfaces/group';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-group-page-element',
  templateUrl: './group-page-element.component.html',
  styleUrls: ['./group-page-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupPageElementComponent {
  @Input() group!: Group;
  @Input() loggedInAs!: User;
}
