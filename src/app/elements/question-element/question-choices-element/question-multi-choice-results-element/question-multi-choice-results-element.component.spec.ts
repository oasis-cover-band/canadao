import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMultiChoiceResultsElementComponent } from './question-multi-choice-results-element.component';

describe('QuestionMultiChoiceResultsElementComponent', () => {
  let component: QuestionMultiChoiceResultsElementComponent;
  let fixture: ComponentFixture<QuestionMultiChoiceResultsElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionMultiChoiceResultsElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionMultiChoiceResultsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
