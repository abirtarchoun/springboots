import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvBuyComponent } from './rdv-buy.component';

describe('RdvBuyComponent', () => {
  let component: RdvBuyComponent;
  let fixture: ComponentFixture<RdvBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdvBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdvBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
