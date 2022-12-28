import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemElementComponent } from './list-item-element.component';

describe('ListItemElementComponent', () => {
  let component: ListItemElementComponent;
  let fixture: ComponentFixture<ListItemElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListItemElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
