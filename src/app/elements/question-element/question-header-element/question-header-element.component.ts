import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-header-element',
  templateUrl: './question-header-element.component.html',
  styleUrls: ['./question-header-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionHeaderElementComponent {
  @Input() questionText!: string;
}
