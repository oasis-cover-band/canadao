import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-question-two-choice-element',
  templateUrl: './question-two-choice-element.component.html',
  styleUrls: ['./question-two-choice-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionTwoChoiceElementComponent {
  @Input() loggedInAs!: User;
  @Output() voted: EventEmitter<number> = new EventEmitter<number>();

  vote(choiceIndex: number) {
    this.voted.emit(choiceIndex);
  }
}
