import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTopicItemElementComponent } from './question-topic-item-element.component';

describe('QuestionTopicItemElementComponent', () => {
  let component: QuestionTopicItemElementComponent;
  let fixture: ComponentFixture<QuestionTopicItemElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionTopicItemElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionTopicItemElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
