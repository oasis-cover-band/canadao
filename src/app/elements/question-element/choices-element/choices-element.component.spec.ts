import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoicesElementComponent } from './choices-element.component';

describe('ChoicesElementComponent', () => {
  let component: ChoicesElementComponent;
  let fixture: ComponentFixture<ChoicesElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoicesElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoicesElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
