import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-group-image-element',
  templateUrl: './group-image-element.component.html',
  styleUrls: ['./group-image-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupImageElementComponent {
  @Input() src!: string;
}
