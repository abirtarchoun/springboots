import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencysAdminComponent } from './agencys-admin.component';

describe('AgencysAdminComponent', () => {
  let component: AgencysAdminComponent;
  let fixture: ComponentFixture<AgencysAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencysAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencysAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
