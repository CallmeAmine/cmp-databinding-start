import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CockpitServerComponent } from './cockpit-server.component';

describe('CockpitServerComponent', () => {
  let component: CockpitServerComponent;
  let fixture: ComponentFixture<CockpitServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CockpitServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CockpitServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
