import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCustomChoiceResultsElementComponent } from './question-custom-choice-results-element.component';

describe('QuestionCustomChoiceResultsElementComponent', () => {
  let component: QuestionCustomChoiceResultsElementComponent;
  let fixture: ComponentFixture<QuestionCustomChoiceResultsElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionCustomChoiceResultsElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionCustomChoiceResultsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
