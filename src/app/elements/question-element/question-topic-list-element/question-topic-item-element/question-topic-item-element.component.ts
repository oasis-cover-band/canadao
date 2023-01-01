import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-topic-item-element',
  templateUrl: './question-topic-item-element.component.html',
  styleUrls: ['./question-topic-item-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionTopicItemElementComponent {
  @Input() topic!: string;
}
