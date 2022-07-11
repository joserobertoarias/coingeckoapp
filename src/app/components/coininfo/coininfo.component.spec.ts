import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoininfoComponent } from './coininfo.component';

describe('CoininfoComponent', () => {
  let component: CoininfoComponent;
  let fixture: ComponentFixture<CoininfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoininfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoininfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
