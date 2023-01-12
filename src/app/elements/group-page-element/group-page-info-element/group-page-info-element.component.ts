import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Group } from 'src/app/interfaces/group';

@Component({
  selector: 'app-group-page-info-element',
  templateUrl: './group-page-info-element.component.html',
  styleUrls: ['./group-page-info-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupPageInfoElementComponent {
  @Input() group!: Group;
}
