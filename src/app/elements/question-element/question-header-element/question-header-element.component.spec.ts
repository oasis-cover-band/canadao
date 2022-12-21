import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionHeaderElementComponent } from './question-header-element.component';

describe('QuestionHeaderElementComponent', () => {
  let component: QuestionHeaderElementComponent;
  let fixture: ComponentFixture<QuestionHeaderElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionHeaderElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionHeaderElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
