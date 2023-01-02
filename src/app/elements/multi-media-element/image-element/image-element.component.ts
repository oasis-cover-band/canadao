import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-element',
  templateUrl: './image-element.component.html',
  styleUrls: ['./image-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageElementComponent {
  @Input() src!: string;
}
