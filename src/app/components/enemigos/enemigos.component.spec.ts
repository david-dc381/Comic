import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemigosComponent } from './enemigos.component';

describe('EnemigosComponent', () => {
  let component: EnemigosComponent;
  let fixture: ComponentFixture<EnemigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnemigosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
