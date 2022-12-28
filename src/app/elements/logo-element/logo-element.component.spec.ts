import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoElementComponent } from './logo-element.component';

describe('LogoElementComponent', () => {
  let component: LogoElementComponent;
  let fixture: ComponentFixture<LogoElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
