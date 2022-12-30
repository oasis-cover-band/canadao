import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-element',
  templateUrl: './svg-element.component.html',
  styleUrls: ['./svg-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgElementComponent {

  uri: string = 'assets/icons/';
  @Input() icon!: string;
  @Input() fill!: string;
  @Input() width: string = '24px';
  @Input() height: string = '24px';
}
