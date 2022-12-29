import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-category-item-element',
  templateUrl: './question-category-item-element.component.html',
  styleUrls: ['./question-category-item-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionCategoryItemElementComponent {
  @Input() category!: string;
}
