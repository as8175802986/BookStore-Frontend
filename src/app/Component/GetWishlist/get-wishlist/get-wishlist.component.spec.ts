import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetWishlistComponent } from './get-wishlist.component';

describe('GetWishlistComponent', () => {
  let component: GetWishlistComponent;
  let fixture: ComponentFixture<GetWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetWishlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
