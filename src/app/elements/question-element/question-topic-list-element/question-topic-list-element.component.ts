import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-topic-list-element',
  templateUrl: './question-topic-list-element.component.html',
  styleUrls: ['./question-topic-list-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionTopicListElementComponent {
  @Input() topics!: string[];

  topicTrackBy(index: number, topic: string): string {
    return topic;
  }
}
