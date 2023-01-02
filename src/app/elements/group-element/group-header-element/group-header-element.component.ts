import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-group-header-element',
  templateUrl: './group-header-element.component.html',
  styleUrls: ['./group-header-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupHeaderElementComponent {
  @Input() name!: string;
}
