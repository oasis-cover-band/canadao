import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupElementDescriptionComponent } from './group-element-description.component';

describe('GroupElementDescriptionComponent', () => {
  let component: GroupElementDescriptionComponent;
  let fixture: ComponentFixture<GroupElementDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupElementDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupElementDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
