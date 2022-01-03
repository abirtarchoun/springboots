import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetmapComponent } from './streetmap.component';

describe('StreetmapComponent', () => {
  let component: StreetmapComponent;
  let fixture: ComponentFixture<StreetmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreetmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
