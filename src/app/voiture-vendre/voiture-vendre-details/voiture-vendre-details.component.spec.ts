import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureVendreDetailsComponent } from './voiture-vendre-details.component';

describe('VoitureVendreDetailsComponent', () => {
  let component: VoitureVendreDetailsComponent;
  let fixture: ComponentFixture<VoitureVendreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoitureVendreDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoitureVendreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
