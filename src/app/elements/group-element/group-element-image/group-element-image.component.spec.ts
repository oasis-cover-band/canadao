import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupElementImageComponent } from './group-element-image.component';

describe('GroupElementImageComponent', () => {
  let component: GroupElementImageComponent;
  let fixture: ComponentFixture<GroupElementImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupElementImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupElementImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
