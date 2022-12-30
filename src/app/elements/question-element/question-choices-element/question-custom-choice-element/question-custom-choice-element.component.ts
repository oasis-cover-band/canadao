import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-question-custom-choice-element',
  templateUrl: './question-custom-choice-element.component.html',
  styleUrls: ['./question-custom-choice-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionCustomChoiceElementComponent {
  @Input() loggedInAs!: User;
  @Output() voted: EventEmitter<number> = new EventEmitter<number>();

  vote(choiceIndex: number) {
    this.voted.emit(choiceIndex);
  }
}
