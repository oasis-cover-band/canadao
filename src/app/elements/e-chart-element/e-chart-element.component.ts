import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-e-chart-element',
  templateUrl: './e-chart-element.component.html',
  styleUrls: ['./e-chart-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EChartElementComponent {
  @Input() options: any;
  onChartEvent(event: any, type: string) {
    console.log('chart event:', type, event);
  }
}
