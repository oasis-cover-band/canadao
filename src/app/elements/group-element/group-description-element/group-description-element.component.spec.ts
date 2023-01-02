import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDescriptionElementComponent } from './group-description-element.component';

describe('GroupDescriptionElementComponent', () => {
  let component: GroupDescriptionElementComponent;
  let fixture: ComponentFixture<GroupDescriptionElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupDescriptionElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupDescriptionElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
