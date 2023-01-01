import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from 'src/app/interfaces/question';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-question-element',
  templateUrl: './question-element.component.html',
  styleUrls: ['./question-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionElementComponent implements OnInit {
  @Input() question!: Question;
  @Input() loggedInAs!: User;

  alreadyVoted: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  ngOnInit(): void {
    if (this.question.votedUsers.indexOf(this.loggedInAs.id) === -1) {
      this.alreadyVoted.next(false);
    } else {
      this.alreadyVoted.next(true);
    }
  }

  vote(choiceIndex: number): void {
    if (this.alreadyVoted.getValue() === false) {
      this.alreadyVoted.next(true);
      this.question.votedUsers.push(this.loggedInAs.id);
      this.question.votes.push({
        id: '',
        userId: this.loggedInAs.id,
        questionType: this.question.type,
        voteOption: choiceIndex
      });
      // add vote logic here
    }
  }
}
