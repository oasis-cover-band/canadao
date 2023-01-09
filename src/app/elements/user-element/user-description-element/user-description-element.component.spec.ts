import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDescriptionElementComponent } from './user-description-element.component';

describe('UserDescriptionElementComponent', () => {
  let component: UserDescriptionElementComponent;
  let fixture: ComponentFixture<UserDescriptionElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDescriptionElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDescriptionElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
