import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/menu-item';

@Component({
  selector: 'app-question-menu-item-element',
  templateUrl: './question-menu-item-element.component.html',
  styleUrls: ['./question-menu-item-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionMenuItemElementComponent {
  @Input() menuItem!: MenuItem;
  @Input() @HostBinding('class') hoverClass!: string;
}
