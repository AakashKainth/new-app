import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inline3Component } from './inline3.component';

describe('Inline3Component', () => {
  let component: Inline3Component;
  let fixture: ComponentFixture<Inline3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inline3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Inline3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
