import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosComponent } from './choos.component';

describe('ChoosComponent', () => {
  let component: ChoosComponent;
  let fixture: ComponentFixture<ChoosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChoosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
