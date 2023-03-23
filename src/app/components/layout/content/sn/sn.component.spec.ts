import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SNComponent } from './sn.component';

describe('SNComponent', () => {
  let component: SNComponent;
  let fixture: ComponentFixture<SNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
