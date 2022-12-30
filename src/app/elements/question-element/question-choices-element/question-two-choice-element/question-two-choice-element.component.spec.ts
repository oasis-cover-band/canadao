import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTwoChoiceElementComponent } from './question-two-choice-element.component';

describe('QuestionTwoChoiceElementComponent', () => {
  let component: QuestionTwoChoiceElementComponent;
  let fixture: ComponentFixture<QuestionTwoChoiceElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionTwoChoiceElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionTwoChoiceElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
