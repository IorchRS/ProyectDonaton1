import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaratulaDComponent } from './caratula-d.component';

describe('CaratulaDComponent', () => {
  let component: CaratulaDComponent;
  let fixture: ComponentFixture<CaratulaDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaratulaDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaratulaDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
