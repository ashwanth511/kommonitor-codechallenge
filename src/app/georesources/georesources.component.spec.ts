import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoresourcesComponent } from './georesources.component';

describe('GeoresourcesComponent', () => {
  let component: GeoresourcesComponent;
  let fixture: ComponentFixture<GeoresourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoresourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeoresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
