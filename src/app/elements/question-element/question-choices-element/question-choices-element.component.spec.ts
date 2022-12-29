import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionChoicesElementComponent } from './question-choices-element.component';

describe('QuestionChoicesElementComponent', () => {
  let component: QuestionChoicesElementComponent;
  let fixture: ComponentFixture<QuestionChoicesElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionChoicesElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionChoicesElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
