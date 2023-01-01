import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupElementActionComponent } from './group-element-action.component';

describe('GroupElementActionComponent', () => {
  let component: GroupElementActionComponent;
  let fixture: ComponentFixture<GroupElementActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupElementActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupElementActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
