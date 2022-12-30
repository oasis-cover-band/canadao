import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ngIfHeightAnimations } from 'src/app/animations';
import { Question } from 'src/app/interfaces/question';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-question-choices-element',
  templateUrl: './question-choices-element.component.html',
  styleUrls: ['./question-choices-element.component.scss'],
  animations: [
    ngIfHeightAnimations
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionChoicesElementComponent {
  @Input() type!: Question['type'];
  @Input() alreadyVoted!: boolean;
  @Input() loggedInAs!: User;
  @Output() voted: EventEmitter<number> = new EventEmitter<number>();

  constructor(
  ) {

  }

  vote(choiceIndex: number) {
    this.voted.emit(choiceIndex);
  }
}
