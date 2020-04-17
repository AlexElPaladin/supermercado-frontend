import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloRegistroComponent } from './solo-registro.component';

describe('SoloRegistroComponent', () => {
  let component: SoloRegistroComponent;
  let fixture: ComponentFixture<SoloRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
