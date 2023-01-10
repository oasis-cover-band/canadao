import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Vote } from 'src/app/interfaces/vote';

@Component({
  selector: 'app-user-page-voting-record-element',
  templateUrl: './user-page-voting-record-element.component.html',
  styleUrls: ['./user-page-voting-record-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPageVotingRecordElementComponent {

  @Input() votes!: Vote[];
  @Input() questionNames!: string[];

  voteTrackBy(index: number, vote: Vote): string {
    return vote.id;
  }
}
