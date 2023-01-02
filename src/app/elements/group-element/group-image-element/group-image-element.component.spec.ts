import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupImageElementComponent } from './group-image-element.component';

describe('GroupImageElementComponent', () => {
  let component: GroupImageElementComponent;
  let fixture: ComponentFixture<GroupImageElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupImageElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupImageElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
