import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-multi-media-element',
  templateUrl: './multi-media-element.component.html',
  styleUrls: ['./multi-media-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiMediaElementComponent {
  @Input() src!: string;
  @Input() @HostBinding('class.fade') fade!: boolean;
}
