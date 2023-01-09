import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-element',
  templateUrl: './user-element.component.html',
  styleUrls: ['./user-element.component.scss']
})
export class UserElementComponent {
  @Input() user!: User;
}
