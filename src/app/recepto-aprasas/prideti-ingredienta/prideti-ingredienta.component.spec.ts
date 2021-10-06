import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PridetiIngredientaComponent } from './prideti-ingredienta.component';

describe('PridetiIngredientaComponent', () => {
  let component: PridetiIngredientaComponent;
  let fixture: ComponentFixture<PridetiIngredientaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PridetiIngredientaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PridetiIngredientaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
