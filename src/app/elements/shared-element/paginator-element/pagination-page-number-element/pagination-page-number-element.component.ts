import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-pagination-page-number-element',
  templateUrl: './pagination-page-number-element.component.html',
  styleUrls: ['./pagination-page-number-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationPageNumberElementComponent {
  @Input() page!: number;
  @Input() @HostBinding('class.active') active!: boolean;
}
