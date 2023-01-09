import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserImageElementComponent } from './user-image-element.component';

describe('UserImageElementComponent', () => {
  let component: UserImageElementComponent;
  let fixture: ComponentFixture<UserImageElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserImageElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserImageElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
