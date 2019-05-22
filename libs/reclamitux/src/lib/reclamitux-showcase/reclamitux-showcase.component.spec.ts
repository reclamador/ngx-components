import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamituxShowcaseComponent } from './reclamitux-showcase.component';

describe('ReclamituxShowcaseComponent', () => {
  let component: ReclamituxShowcaseComponent;
  let fixture: ComponentFixture<ReclamituxShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamituxShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamituxShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
