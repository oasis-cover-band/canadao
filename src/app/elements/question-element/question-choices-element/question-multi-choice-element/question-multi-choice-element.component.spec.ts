import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMultiChoiceElementComponent } from './question-multi-choice-element.component';

describe('QuestionMultiChoiceElementComponent', () => {
  let component: QuestionMultiChoiceElementComponent;
  let fixture: ComponentFixture<QuestionMultiChoiceElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionMultiChoiceElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionMultiChoiceElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
