/**
 * Copypasted from nebular nbSpinner so we can use our own html
 */
import {
  ComponentFactoryResolver,
  ComponentFactory,
  ComponentRef,
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewContainerRef,
  HostBinding,
} from '@angular/core';

import { SpinnerComponent } from './spinner.component';

@Directive({
  selector: '[ngxSpinner]'
})
export class SpinnerDirective implements OnInit {
  private shouldShow = false;

  @HostBinding('class.nb-spinner-container') isSpinnerExist = false;
  @Input('spinnerMessage') spinnerMessage: string;
  @Input('ngxSpinner') set spinner(val: boolean) {
    if (this.componentFactory) {
      if (val) {
        this.show();
      } else {
        this.hide();
      }
    } else {
      this.shouldShow = val;
    }
  }

  spinnerComponent: ComponentRef<SpinnerComponent>;
  componentFactory: ComponentFactory<SpinnerComponent>;

  constructor(
    private directiveView: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private renderer: Renderer2,
    private directiveElement: ElementRef
  ) {
  }

  ngOnInit() {
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(SpinnerComponent);
    if (this.shouldShow) {
      this.show();
    }
  }

  hide() {
    if (this.isSpinnerExist) {
      this.directiveView.remove();
      this.isSpinnerExist = false;
    }
  }

  show() {
    if (!this.isSpinnerExist) {
      this.spinnerComponent = this.directiveView.createComponent<SpinnerComponent>(this.componentFactory);
      this.setInstanceInputs(this.spinnerComponent.instance);
      this.spinnerComponent.changeDetectorRef.detectChanges();
      this.renderer.appendChild(this.directiveElement.nativeElement, this.spinnerComponent.location.nativeElement);
      this.isSpinnerExist = true;
    }
  }

  setInstanceInputs(instance: SpinnerComponent) {
    typeof this.spinnerMessage !== 'undefined' && (instance.message = this.spinnerMessage);
  }
}
