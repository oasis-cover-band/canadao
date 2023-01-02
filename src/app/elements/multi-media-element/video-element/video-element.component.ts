import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-element',
  templateUrl: './video-element.component.html',
  styleUrls: ['./video-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoElementComponent {
  @Input() src!: string;
}
