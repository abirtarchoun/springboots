import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesRentComponent } from './favorites-rent.component';

describe('FavoritesRentComponent', () => {
  let component: FavoritesRentComponent;
  let fixture: ComponentFixture<FavoritesRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
