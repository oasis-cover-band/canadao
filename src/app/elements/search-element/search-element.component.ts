import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search-element',
  templateUrl: './search-element.component.html',
  styleUrls: ['./search-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchElementComponent {
  placeholder: BehaviorSubject<string> = new BehaviorSubject<string>('Search');
}
