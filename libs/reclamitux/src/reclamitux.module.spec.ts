import { async, TestBed } from '@angular/core/testing';
import { ReclamituxModule } from './reclamitux.module';

describe('reclamituxModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReclamituxModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ReclamituxModule).toBeDefined();
  });
});
