import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Vote } from 'src/app/interfaces/vote';

@Component({
  selector: 'app-vote-result-element',
  templateUrl: './vote-result-element.component.html',
  styleUrls: ['./vote-result-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoteResultElementComponent {
  @Input() vote!: Vote;
  @Input() voteResultColor!: string;
}
