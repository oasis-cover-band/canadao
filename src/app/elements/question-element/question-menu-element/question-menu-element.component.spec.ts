import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMenuElementComponent } from './question-menu-element.component';

describe('QuestionMenuElementComponent', () => {
  let component: QuestionMenuElementComponent;
  let fixture: ComponentFixture<QuestionMenuElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionMenuElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionMenuElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
