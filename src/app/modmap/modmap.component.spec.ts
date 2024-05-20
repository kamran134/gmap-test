import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModmapComponent } from './modmap.component';

describe('ModmapComponent', () => {
  let component: ModmapComponent;
  let fixture: ComponentFixture<ModmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModmapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
