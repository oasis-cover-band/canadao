import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-image-element',
  templateUrl: './user-image-element.component.html',
  styleUrls: ['./user-image-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserImageElementComponent {
  @Input() src!: string;
}
