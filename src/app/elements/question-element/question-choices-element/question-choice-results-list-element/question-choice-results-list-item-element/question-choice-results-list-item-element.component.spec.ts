import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionChoiceResultsListItemElementComponent } from './question-choice-results-list-item-element.component';

describe('QuestionChoiceResultsListItemElementComponent', () => {
  let component: QuestionChoiceResultsListItemElementComponent;
  let fixture: ComponentFixture<QuestionChoiceResultsListItemElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionChoiceResultsListItemElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionChoiceResultsListItemElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
