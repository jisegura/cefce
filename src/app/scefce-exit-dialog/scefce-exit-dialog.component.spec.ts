import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScefceExitDialogComponent } from './scefce-exit-dialog.component';

describe('ScefceExitDialogComponent', () => {
  let component: ScefceExitDialogComponent;
  let fixture: ComponentFixture<ScefceExitDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScefceExitDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScefceExitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
