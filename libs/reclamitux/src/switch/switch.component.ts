import {
  ChangeDetectorRef,
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
  forwardRef,
  Inject,
  Optional,
  OnInit
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { UI_SWITCH_OPTIONS } from './switch.token';
import { UiSwitchModuleConfig } from './switch.config';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

const UI_SWITCH_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  /* tslint:disable-next-line: no-use-before-declare */
  useExisting: forwardRef(() => SwitchComponent),
  multi: true
};

@Component({
  selector: 'rclm-switch',
  styleUrls: ['./switch.component.scss'],
  template: `
    <span
      class="switch"
      [class.checked]="checked"
      [class.disabled]="disabled"
      [class.switch-large]="size === 'large'"
      [class.switch-medium]="size === 'medium'"
      [class.switch-small]="size === 'small'"
      [style.background-color]="getColor()"
      [style.border-color]="getColor('borderColor')"
    >
      <span class="switch-pane" *ngIf="checkedLabel || uncheckedLabel">
        <span class="switch-label-checked">{{ this.checkedLabel }}</span>
        <span class="switch-label-unchecked">{{ this.uncheckedLabel }}</span>
      </span>
      <small [style.background]="getColor('switchColor')">
        <ng-content></ng-content>
      </small>
    </span>
  `,
  providers: [UI_SWITCH_CONTROL_VALUE_ACCESSOR]
})
export class SwitchComponent implements ControlValueAccessor, OnInit {
  private _checked: boolean;
  private _disabled: boolean;
  private _reverse: boolean;

  @Input() size;
  @Input() color;
  @Input() switchOffColor;
  @Input() switchColor;
  @Input() defaultBgColor;
  @Input() defaultBoColor;
  @Input() checkedLabel;
  @Input() uncheckedLabel;
  @Input() interceptActionCallback = () => true;

  @Input()
  set checked(v: boolean) {
    this._checked = v !== false;
  }

  get checked() {
    return this._checked;
  }

  @Input()
  set disabled(v: boolean) {
    this._disabled = v !== false;
  }

  get disabled() {
    return this._disabled;
  }

  @Input()
  set reverse(v: boolean) {
    this._reverse = v !== false;
  }

  get reverse() {
    return this._reverse;
  }

  /**
   * Emits changed value
   */
  @Output() change = new EventEmitter<boolean>();

  /**
   * Emits DOM event
   */
  @Output() changeEvent = new EventEmitter<MouseEvent>();

  /**
   * Emits changed value
   */
  @Output() valueChange = new EventEmitter<boolean>();

  /* Debounce toggle action for posible prevent */
  private clicks = new Subject();

  constructor(
    @Inject(UI_SWITCH_OPTIONS) @Optional() config: UiSwitchModuleConfig = {},
    private cdr: ChangeDetectorRef
  ) {
    this.size = (config && config.size) || 'medium';
    this.color = config && config.color;
    this.switchOffColor = config && config.switchOffColor;
    this.switchColor = config && config.switchColor;
    this.defaultBgColor = config && config.defaultBgColor;
    this.defaultBoColor = config && config.defaultBoColor;
    this.checkedLabel = config && config.checkedLabel;
    this.uncheckedLabel = config && config.uncheckedLabel;
  }

  ngOnInit() {
    this.clicks.pipe(
      filter(this.interceptActionCallback),
    ).subscribe((event: MouseEvent) => {
      if (this.disabled) {
        return;
      }
      this.checked = !this.checked;

      // Component events
      this.changeEvent.emit(event);
      this.change.emit(this.checked);
      this.valueChange.emit(this.checked);

      // value accessor callbacks
      this.onChangeCallback(this.checked);
      this.onTouchedCallback(this.checked);
      this.cdr.markForCheck();
    });
  }

  getColor(flag = '') {
    if (flag === 'borderColor') {
      return this.defaultBoColor;
    }
    if (flag === 'switchColor') {
      if (this.reverse) {
        return !this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
      }
      return this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
    }
    if (this.reverse) {
      return !this.checked ? this.color : this.defaultBgColor;
    }
    return this.checked ? this.color : this.defaultBgColor;
  }

  @HostListener('click', ['$event'])
  onToggle(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }

  writeValue(obj: any): void {
    if (obj !== this.checked) {
      this.checked = !!obj;
    }
    if (this.cdr) {
      this.cdr.markForCheck();
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  private onTouchedCallback = (v: any) => {};
  private onChangeCallback = (v: any) => {};
}
