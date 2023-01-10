import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-vote-header-element',
  templateUrl: './vote-header-element.component.html',
  styleUrls: ['./vote-header-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoteHeaderElementComponent {
  @Input() name!: string;
}
