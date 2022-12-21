import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionElementComponent } from './discussion-element.component';

describe('DiscussionElementComponent', () => {
  let component: DiscussionElementComponent;
  let fixture: ComponentFixture<DiscussionElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscussionElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscussionElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
