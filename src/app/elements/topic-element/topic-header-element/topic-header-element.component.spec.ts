import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicHeaderElementComponent } from './topic-header-element.component';

describe('TopicHeaderElementComponent', () => {
  let component: TopicHeaderElementComponent;
  let fixture: ComponentFixture<TopicHeaderElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicHeaderElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicHeaderElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
