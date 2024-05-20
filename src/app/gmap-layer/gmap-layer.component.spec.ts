import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmapLayerComponent } from './gmap-layer.component';

describe('GmapLayerComponent', () => {
  let component: GmapLayerComponent;
  let fixture: ComponentFixture<GmapLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GmapLayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GmapLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
