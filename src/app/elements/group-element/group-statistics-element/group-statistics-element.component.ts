import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-group-statistics-element',
  templateUrl: './group-statistics-element.component.html',
  styleUrls: ['./group-statistics-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupStatisticsElementComponent {
  @Input() userCount!: number;
  @Input() questionCount!: number;
}
