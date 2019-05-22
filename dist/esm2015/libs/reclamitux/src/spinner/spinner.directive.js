/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Copypasted from nebular nbSpinner so we can use our own html
 */
import { ComponentFactoryResolver, Directive, ElementRef, Input, Renderer2, ViewContainerRef, HostBinding, } from '@angular/core';
import { SpinnerComponent } from './spinner.component';
export class SpinnerDirective {
    /**
     * @param {?} directiveView
     * @param {?} componentFactoryResolver
     * @param {?} renderer
     * @param {?} directiveElement
     */
    constructor(directiveView, componentFactoryResolver, renderer, directiveElement) {
        this.directiveView = directiveView;
        this.componentFactoryResolver = componentFactoryResolver;
        this.renderer = renderer;
        this.directiveElement = directiveElement;
        this.shouldShow = false;
        this.isSpinnerExist = false;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set spinner(val) {
        if (this.componentFactory) {
            if (val) {
                this.show();
            }
            else {
                this.hide();
            }
        }
        else {
            this.shouldShow = val;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(SpinnerComponent);
        if (this.shouldShow) {
            this.show();
        }
    }
    /**
     * @return {?}
     */
    hide() {
        if (this.isSpinnerExist) {
            this.directiveView.remove();
            this.isSpinnerExist = false;
        }
    }
    /**
     * @return {?}
     */
    show() {
        if (!this.isSpinnerExist) {
            this.spinnerComponent = this.directiveView.createComponent(this.componentFactory);
            this.setInstanceInputs(this.spinnerComponent.instance);
            this.spinnerComponent.changeDetectorRef.detectChanges();
            this.renderer.appendChild(this.directiveElement.nativeElement, this.spinnerComponent.location.nativeElement);
            this.isSpinnerExist = true;
        }
    }
    /**
     * @param {?} instance
     * @return {?}
     */
    setInstanceInputs(instance) {
        typeof this.message !== 'undefined' && (instance.message = this.message);
        typeof this.color !== 'undefined' && (instance.color = this.color);
        instance.opacity = this.opacity;
        instance.fixed = this.fixed;
    }
}
SpinnerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxSpinner]'
            },] }
];
/** @nocollapse */
SpinnerDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: ElementRef }
];
SpinnerDirective.propDecorators = {
    isSpinnerExist: [{ type: HostBinding, args: ['class.nb-spinner-container',] }],
    message: [{ type: Input, args: ['spinnerMessage',] }],
    color: [{ type: Input, args: ['spinnerColor',] }],
    opacity: [{ type: Input, args: ['spinnerFade',] }],
    fixed: [{ type: Input, args: ['spinnerFixed',] }],
    spinner: [{ type: Input, args: ['ngxSpinner',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    SpinnerDirective.prototype.shouldShow;
    /** @type {?} */
    SpinnerDirective.prototype.isSpinnerExist;
    /** @type {?} */
    SpinnerDirective.prototype.message;
    /** @type {?} */
    SpinnerDirective.prototype.color;
    /** @type {?} */
    SpinnerDirective.prototype.opacity;
    /** @type {?} */
    SpinnerDirective.prototype.fixed;
    /** @type {?} */
    SpinnerDirective.prototype.spinnerComponent;
    /** @type {?} */
    SpinnerDirective.prototype.componentFactory;
    /**
     * @type {?}
     * @private
     */
    SpinnerDirective.prototype.directiveView;
    /**
     * @type {?}
     * @private
     */
    SpinnerDirective.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    SpinnerDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    SpinnerDirective.prototype.directiveElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYnMvcmVjbGFtaXR1eC9zcmMvc3Bpbm5lci9zcGlubmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUNMLHdCQUF3QixFQUd4QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUt2RCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7O0lBdUIzQixZQUNVLGFBQStCLEVBQy9CLHdCQUFrRCxFQUNsRCxRQUFtQixFQUNuQixnQkFBNEI7UUFINUIsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQy9CLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVk7UUExQjlCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFZ0IsbUJBQWMsR0FBRyxLQUFLLENBQUM7SUEwQmxFLENBQUM7Ozs7O0lBckJELElBQXlCLE9BQU8sQ0FBQyxHQUFZO1FBQzNDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNiO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNiO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7OztJQWFELFFBQVE7UUFDTixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDaEcsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFtQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNwRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0csSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLFFBQTBCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssV0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkUsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2hDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUM5QixDQUFDOzs7WUEvREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2FBQ3pCOzs7O1lBUkMsZ0JBQWdCO1lBUmhCLHdCQUF3QjtZQU94QixTQUFTO1lBSFQsVUFBVTs7OzZCQWdCVCxXQUFXLFNBQUMsNEJBQTRCO3NCQUN4QyxLQUFLLFNBQUMsZ0JBQWdCO29CQUN0QixLQUFLLFNBQUMsY0FBYztzQkFDcEIsS0FBSyxTQUFDLGFBQWE7b0JBQ25CLEtBQUssU0FBQyxjQUFjO3NCQUNwQixLQUFLLFNBQUMsWUFBWTs7Ozs7OztJQVBuQixzQ0FBMkI7O0lBRTNCLDBDQUFrRTs7SUFDbEUsbUNBQXlDOztJQUN6QyxpQ0FBcUM7O0lBQ3JDLG1DQUF1Qzs7SUFDdkMsaUNBQXNDOztJQWF0Qyw0Q0FBaUQ7O0lBQ2pELDRDQUFxRDs7Ozs7SUFHbkQseUNBQXVDOzs7OztJQUN2QyxvREFBMEQ7Ozs7O0lBQzFELG9DQUEyQjs7Ozs7SUFDM0IsNENBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cGFzdGVkIGZyb20gbmVidWxhciBuYlNwaW5uZXIgc28gd2UgY2FuIHVzZSBvdXIgb3duIGh0bWxcbiAqL1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRGYWN0b3J5LFxuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBIb3N0QmluZGluZyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNwaW5uZXJDb21wb25lbnQgfSBmcm9tICcuL3NwaW5uZXIuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neFNwaW5uZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBTcGlubmVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBzaG91bGRTaG93ID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5uYi1zcGlubmVyLWNvbnRhaW5lcicpIGlzU3Bpbm5lckV4aXN0ID0gZmFsc2U7XG4gIEBJbnB1dCgnc3Bpbm5lck1lc3NhZ2UnKSBtZXNzYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgnc3Bpbm5lckNvbG9yJykgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCdzcGlubmVyRmFkZScpIG9wYWNpdHk6IGJvb2xlYW47XG4gIEBJbnB1dCgnc3Bpbm5lckZpeGVkJykgZml4ZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgnbmd4U3Bpbm5lcicpIHNldCBzcGlubmVyKHZhbDogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudEZhY3RvcnkpIHtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG91bGRTaG93ID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIHNwaW5uZXJDb21wb25lbnQ6IENvbXBvbmVudFJlZjxTcGlubmVyQ29tcG9uZW50PjtcbiAgY29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxTcGlubmVyQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRpcmVjdGl2ZVZpZXc6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBkaXJlY3RpdmVFbGVtZW50OiBFbGVtZW50UmVmXG4gICkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoU3Bpbm5lckNvbXBvbmVudCk7XG4gICAgaWYgKHRoaXMuc2hvdWxkU2hvdykge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAodGhpcy5pc1NwaW5uZXJFeGlzdCkge1xuICAgICAgdGhpcy5kaXJlY3RpdmVWaWV3LnJlbW92ZSgpO1xuICAgICAgdGhpcy5pc1NwaW5uZXJFeGlzdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKCF0aGlzLmlzU3Bpbm5lckV4aXN0KSB7XG4gICAgICB0aGlzLnNwaW5uZXJDb21wb25lbnQgPSB0aGlzLmRpcmVjdGl2ZVZpZXcuY3JlYXRlQ29tcG9uZW50PFNwaW5uZXJDb21wb25lbnQ+KHRoaXMuY29tcG9uZW50RmFjdG9yeSk7XG4gICAgICB0aGlzLnNldEluc3RhbmNlSW5wdXRzKHRoaXMuc3Bpbm5lckNvbXBvbmVudC5pbnN0YW5jZSk7XG4gICAgICB0aGlzLnNwaW5uZXJDb21wb25lbnQuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmRpcmVjdGl2ZUVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5zcGlubmVyQ29tcG9uZW50LmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgdGhpcy5pc1NwaW5uZXJFeGlzdCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgc2V0SW5zdGFuY2VJbnB1dHMoaW5zdGFuY2U6IFNwaW5uZXJDb21wb25lbnQpIHtcbiAgICB0eXBlb2YgdGhpcy5tZXNzYWdlICE9PSAndW5kZWZpbmVkJyAmJiAoaW5zdGFuY2UubWVzc2FnZSA9IHRoaXMubWVzc2FnZSk7XG4gICAgdHlwZW9mIHRoaXMuY29sb3IgIT09ICd1bmRlZmluZWQnICYmIChpbnN0YW5jZS5jb2xvciA9IHRoaXMuY29sb3IpO1xuICAgIGluc3RhbmNlLm9wYWNpdHkgPSB0aGlzLm9wYWNpdHk7XG4gICAgaW5zdGFuY2UuZml4ZWQgPSB0aGlzLmZpeGVkO1xuICB9XG59XG4iXX0=