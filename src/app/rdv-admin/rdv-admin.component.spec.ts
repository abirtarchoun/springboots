import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvAdminComponent } from './rdv-admin.component';

describe('RdvAdminComponent', () => {
  let component: RdvAdminComponent;
  let fixture: ComponentFixture<RdvAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdvAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdvAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
