import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupHeaderElementComponent } from './group-header-element.component';

describe('GroupHeaderElementComponent', () => {
  let component: GroupHeaderElementComponent;
  let fixture: ComponentFixture<GroupHeaderElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupHeaderElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupHeaderElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
