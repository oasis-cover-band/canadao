import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionElementComponent } from './question-element.component';

describe('QuestionElementComponent', () => {
  let component: QuestionElementComponent;
  let fixture: ComponentFixture<QuestionElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
