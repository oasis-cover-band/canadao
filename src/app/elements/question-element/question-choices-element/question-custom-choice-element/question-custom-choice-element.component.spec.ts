import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCustomChoiceElementComponent } from './question-custom-choice-element.component';

describe('QuestionCustomChoiceElementComponent', () => {
  let component: QuestionCustomChoiceElementComponent;
  let fixture: ComponentFixture<QuestionCustomChoiceElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionCustomChoiceElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionCustomChoiceElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
