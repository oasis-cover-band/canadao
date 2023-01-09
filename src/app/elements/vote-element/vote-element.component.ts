import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-vote-element',
  templateUrl: './vote-element.component.html',
  styleUrls: ['./vote-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoteElementComponent {

}
