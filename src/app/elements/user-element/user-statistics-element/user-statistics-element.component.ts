import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-statistics-element',
  templateUrl: './user-statistics-element.component.html',
  styleUrls: ['./user-statistics-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserStatisticsElementComponent {
  @Input() voteCount!: number;
  @Input() votePower!: number;
}
