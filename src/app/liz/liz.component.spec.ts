import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LizComponent } from './liz.component';

describe('LizComponent', () => {
  let component: LizComponent;
  let fixture: ComponentFixture<LizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
