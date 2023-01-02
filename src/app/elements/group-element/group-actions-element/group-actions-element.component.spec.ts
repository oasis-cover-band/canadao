import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupActionsElementComponent } from './group-actions-element.component';

describe('GroupActionsElementComponent', () => {
  let component: GroupActionsElementComponent;
  let fixture: ComponentFixture<GroupActionsElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupActionsElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupActionsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
