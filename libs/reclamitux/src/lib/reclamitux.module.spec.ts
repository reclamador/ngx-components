import { async, TestBed } from '@angular/core/testing';
import { ReclamituxModule } from './reclamitux.module';

describe('ReclamituxModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReclamituxModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ReclamituxModule).toBeDefined();
  });
});
