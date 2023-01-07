import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionChoiceResultsListElementComponent } from './question-choice-results-list-element.component';

describe('QuestionChoiceResultsListElementComponent', () => {
  let component: QuestionChoiceResultsListElementComponent;
  let fixture: ComponentFixture<QuestionChoiceResultsListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionChoiceResultsListElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionChoiceResultsListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
