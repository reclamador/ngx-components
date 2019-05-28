import { Component, OnInit, OnChanges, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';


@Component({
  selector: 'ngx-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MultiselectComponent),
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MultiselectComponent),
    multi: true
  }]
})
export class MultiselectComponent implements OnInit, OnChanges, ControlValueAccessor {
  @Input() options: [];
  @Input() groupField: string;
  @Input() groupDict: [];
  @Input() tttleSelected: string;
  @Input() tttleUnselected: string;

  public _state = [];
  @Input() set state(val) {
    this._state = val;
    this.propagateChange(this._state);
  }
  get state() {
    return this._state;
  }

  // boolean attributes
  public _disabled: boolean = false;
  @Input() set disabled(val) {
    this._disabled = this.checkBoolAttributes(val);
  }

  public _multiple: boolean = false;
  @Input() set multiple(val) {
    this._multiple = this.checkBoolAttributes(val);
  }

  public _required: boolean = false;
  @Input() set required(val) {
    this._required = this.checkBoolAttributes(val);
  }

  public groupedOptions = [];

  constructor() {}

  // ControlValueAccessor Interface
  writeValue(state: any[]) {
    this.state = state;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn) {
    this.propagateTouch = fn;
  }

  // Validation Interface
  validate(c: FormControl) {
    return this.validateFn(c);
  }

  // Change detention Interface
  ngOnChanges(inputs) {
    /** recalculate grouped options */
    if (this.groupField && this.options) {
      this.groupedOptions = this.options.reduce((state, e) => {
        const val = e[this.groupField];
        return state.indexOf(val) === -1 ? [...state, val] : state;
      }, []);
    }

    /** update validate method */
    this.validateFn = (c: FormControl) => {
      if (!this._required) return null;

      if (this._multiple) {
        return (this._required && c.value && c.value.length === 0) ? new Error('Field required') : null;
      }

      return (this._required && !c.value) ? new Error('Field required') : null;
    };
  }

  // OnInit Interface
  ngOnInit() {}

  // Internal methods
  toggle(elm: any) {
    if (this._disabled) return;

    // notify form touch
    this.propagateTouch(true);

    if (this._multiple) {
      if (this._state.indexOf(elm.id) !== -1) {
        this.state = this.state.filter(e => e !== elm.id);
      } else {
        this.state = [...this.state, elm.id];
      }
    } else {
      if (this._state === elm.id) {
        this.state = null;
      } else {
        this.state = elm.id;
      }
    }
  }

  addAll() {
    this.state = this.options.map((e: any) => e.id);
  }

  clearAll() {
    this.state = [];
  }

  /** methods overwritten dinamically */
  propagateChange = (_: any) => {};
  propagateTouch = (_: any) => {};
  validateFn: any = () => {};

  private checkBoolAttributes(val) {
    /**
     * Fix broken boolean attribute values, p.e.:
     * <div required></div> is translated to required='' and this is falsy in js
     */
    if (typeof val === 'string' && val === '') {
      return true;
    }
    return !!val;
  }
}
