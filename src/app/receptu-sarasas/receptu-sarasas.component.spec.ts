import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptuSarasasComponent } from './receptu-sarasas.component';

describe('ReceptuSarasasComponent', () => {
  let component: ReceptuSarasasComponent;
  let fixture: ComponentFixture<ReceptuSarasasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptuSarasasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptuSarasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
