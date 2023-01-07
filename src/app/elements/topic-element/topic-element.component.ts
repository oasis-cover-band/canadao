import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Topic } from 'src/app/interfaces/topic';

@Component({
  selector: 'app-topic-element',
  templateUrl: './topic-element.component.html',
  styleUrls: ['./topic-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicElementComponent {
  @Input() topic!: Topic;
}
