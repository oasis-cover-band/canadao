import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMenuItemElementComponent } from './question-menu-item-element.component';

describe('QuestionMenuItemElementComponent', () => {
  let component: QuestionMenuItemElementComponent;
  let fixture: ComponentFixture<QuestionMenuItemElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionMenuItemElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionMenuItemElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
