import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicImageElementComponent } from './topic-image-element.component';

describe('TopicImageElementComponent', () => {
  let component: TopicImageElementComponent;
  let fixture: ComponentFixture<TopicImageElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicImageElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicImageElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
