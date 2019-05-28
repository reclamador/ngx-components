// tslint:disable
import { Component, ViewChild } from '@angular/core';
import { TestBed, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ThemeModule } from '../theme.module';

const BASE_OPTIONS = [{
    id: 1,
    name: 'element 1'
  }, {
    id: 2,
    name: 'element 2'
  }, {
    id: 3,
    name: 'element 3'
  }];

describe('MultiselectComponent Form test', () => {
  let fixture, formComponent, leftPanel, rightPanel; //, componentElm, component;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormMockComponent
      ],
      imports: [
        ThemeModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMockComponent);
    formComponent = fixture.componentInstance;

    fixture.detectChanges();
  });

  describe('minimal initialization', () => {
    it('should bootstrap component', () => {
      expect(formComponent).toBeTruthy();
    });

    it('should not display anything on the available panel', () => {
      const leftPanel = fixture.debugElement.query(By.css('.card-left'));
      expect(leftPanel.children.length).toBe(0);
    });

    it('should not display anything on the selected panel', () => {
      const rightPanel = fixture.debugElement.query(By.css('.card-right'));
      expect(rightPanel.children.length).toBe(0);
    });
  });

  describe('basic options initialization', () => {
    beforeEach(() => {
      formComponent.setOptions(BASE_OPTIONS, 'select_1');

      leftPanel = fixture.debugElement.query(By.css('.card-left'));
      rightPanel = fixture.debugElement.query(By.css('.card-right'));

      // componentElm = fixture.debugElement.query(By.css('[name=select_1]'));
      // component = componentElm.componentInstance;

      fixture.detectChanges();
    });

    it('should display the available options in its panel', () => {
      expect(leftPanel.children.length).toBe(3);
      expect(leftPanel.children[0].nativeElement.textContent.trim()).toBe(BASE_OPTIONS[0].name);
      expect(leftPanel.children[1].nativeElement.textContent.trim()).toBe(BASE_OPTIONS[1].name);
      expect(leftPanel.children[2].nativeElement.textContent.trim()).toBe(BASE_OPTIONS[2].name);
    })

    it('should not display any options in the selected panel', () => {
      expect(rightPanel.children.length).toBe(0);
    });

    it('clicking an option should set it as selected and display it', () => {

      const firstOption = leftPanel.children[0];
      firstOption.triggerEventHandler('click', null);

      fixture.detectChanges();

      // the dom changes but the model don't :(
        // tick();
        // console.log(formComponent);
      expect(leftPanel.children.length).toBe(2);
      expect(leftPanel.children[0].nativeElement.textContent.trim()).toBe(BASE_OPTIONS[1].name);
      expect(leftPanel.children[1].nativeElement.textContent.trim()).toBe(BASE_OPTIONS[2].name);
      expect(rightPanel.children.length).toBe(1);
      expect(rightPanel.children[0].nativeElement.textContent.trim()).toBe(BASE_OPTIONS[0].name);
    });
  });
});

@Component({
  template: `
    <form #select_1_Form="ngForm"
        name="formMock">
      <ngx-multiselect
        name="select_1"
        [(ngModel)]="select_1_Value"
        [options]="select_1_Options">
      </ngx-multiselect>
    </form>`
})
class FormMockComponent {
  @ViewChild('select_1_Form') select_1_Form;

  select_1_Options = [];
  select_1_Value = null;

  public setOptions(opts, select) {
    this[select + '_Options'] = [...opts];
  }
}
