import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-topic-image-element',
  templateUrl: './topic-image-element.component.html',
  styleUrls: ['./topic-image-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicImageElementComponent {
  @Input() src!: string;
}
