import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Vote } from 'src/app/interfaces/vote';
import { VotingResultPipe } from 'src/app/pipes/voting-result.pipe';

@Component({
  selector: 'app-user-page-voting-record-element',
  templateUrl: './user-page-voting-record-element.component.html',
  styleUrls: ['./user-page-voting-record-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPageVotingRecordElementComponent {

  style = getComputedStyle(document.body);
  blue = this.style.getPropertyValue('--blue');
  lightBlue = this.style.getPropertyValue('--light-blue');
  yellow = this.style.getPropertyValue('--yellow');
  red = this.style.getPropertyValue('--red');
  lightRed = this.style.getPropertyValue('--light-red');
  white = this.style.getPropertyValue('--white');

  @Input()
  public set votes(value: Vote[]) {
    this._votes = value;
    for(let index = 0; index < value.length; index++) {
      this.voteResultColors.push(this.getVotingResultColor(value[index].voteOption, value[index].questionType));
    }
  }

  public get votes(): Vote[] {
    return this._votes;
  }

  private _votes!: Vote[];

  @Input() questionNames!: string[];

  voteResultColors: string[] = [];

  constructor(
    private votingResultPipe: VotingResultPipe
  ) {

  }

  getVotingResultColor(voteOption: number, questionType: Vote['questionType']): string {
    const result = this.votingResultPipe.transform(voteOption, questionType);
    if (result === 'No' || result === 'Strongly Disagree') {
      return this.red;
    } else if (result === 'Disagree') {
      return this.lightRed;
    } else if (result === 'Neutral') {
      return this.yellow;
    } else if (result === 'Agree') {
      return this.lightBlue;
    } else if (result === 'Yes' || result === 'Strongly Agree') {
      return this.lightBlue;
    } else {
      return this.white;
    }
  }

  voteTrackBy(index: number, vote: Vote): string {
    return vote.id;
  }

}
