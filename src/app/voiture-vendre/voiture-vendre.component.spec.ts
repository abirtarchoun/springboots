import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureVendreComponent } from './voiture-vendre.component';

describe('VoitureVendreComponent', () => {
  let component: VoitureVendreComponent;
  let fixture: ComponentFixture<VoitureVendreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoitureVendreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoitureVendreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
