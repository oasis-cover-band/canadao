import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-group-description-element',
  templateUrl: './group-description-element.component.html',
  styleUrls: ['./group-description-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupDescriptionElementComponent {
  @Input() description!: string;
}
