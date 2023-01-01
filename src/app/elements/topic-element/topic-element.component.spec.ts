import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicElementComponent } from './topic-element.component';

describe('TopicElementComponent', () => {
  let component: TopicElementComponent;
  let fixture: ComponentFixture<TopicElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
