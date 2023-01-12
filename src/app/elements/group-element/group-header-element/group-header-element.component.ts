import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-group-header-element',
  templateUrl: './group-header-element.component.html',
  styleUrls: ['./group-header-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupHeaderElementComponent {
  @Input() name!: string;
  @Input() @HostBinding('class.large') large: boolean = false;
}
