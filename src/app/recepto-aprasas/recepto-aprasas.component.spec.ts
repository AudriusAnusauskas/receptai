import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptoAprasasComponent } from './recepto-aprasas.component';

describe('ReceptoAprasasComponent', () => {
  let component: ReceptoAprasasComponent;
  let fixture: ComponentFixture<ReceptoAprasasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptoAprasasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptoAprasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
