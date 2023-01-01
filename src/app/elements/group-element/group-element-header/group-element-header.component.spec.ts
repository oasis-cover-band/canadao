import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupElementHeaderComponent } from './group-element-header.component';

describe('GroupElementHeaderComponent', () => {
  let component: GroupElementHeaderComponent;
  let fixture: ComponentFixture<GroupElementHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupElementHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupElementHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
