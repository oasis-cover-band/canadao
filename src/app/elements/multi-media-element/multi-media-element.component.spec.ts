import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiMediaElementComponent } from './multi-media-element.component';

describe('MultiMediaElementComponent', () => {
  let component: MultiMediaElementComponent;
  let fixture: ComponentFixture<MultiMediaElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiMediaElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiMediaElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
