import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraOnlineComponent } from './compra-online.component';

describe('CompraOnlineComponent', () => {
  let component: CompraOnlineComponent;
  let fixture: ComponentFixture<CompraOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
