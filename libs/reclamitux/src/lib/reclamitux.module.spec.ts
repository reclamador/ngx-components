import { async, TestBed } from '@angular/core/testing';
import { reclamituxModule } from './reclamitux.module';

describe('reclamituxModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [reclamituxModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(reclamituxModule).toBeDefined();
  });
});
