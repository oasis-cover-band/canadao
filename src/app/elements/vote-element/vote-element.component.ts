import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Vote } from 'src/app/interfaces/vote';

@Component({
  selector: 'app-vote-element',
  templateUrl: './vote-element.component.html',
  styleUrls: ['./vote-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoteElementComponent {
  @Input() questionName!: string;
  @Input() vote!: Vote;
  @Input() voteResultColor!: string;
}
