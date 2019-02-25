import { async, TestBed } from '@angular/core/testing';
import { TwoLibModule } from './two-lib.module';

describe('LibsTwoLibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TwoLibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TwoLibModule).toBeDefined();
  });
});
