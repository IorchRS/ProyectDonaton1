import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDonatonComponent } from './footer-donaton.component';

describe('FooterDonatonComponent', () => {
  let component: FooterDonatonComponent;
  let fixture: ComponentFixture<FooterDonatonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterDonatonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterDonatonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
