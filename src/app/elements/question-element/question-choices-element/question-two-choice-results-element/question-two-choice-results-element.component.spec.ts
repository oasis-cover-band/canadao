import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTwoChoiceResultsElementComponent } from './question-two-choice-results-element.component';

describe('QuestionTwoChoiceResultsElementComponent', () => {
  let component: QuestionTwoChoiceResultsElementComponent;
  let fixture: ComponentFixture<QuestionTwoChoiceResultsElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionTwoChoiceResultsElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionTwoChoiceResultsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
