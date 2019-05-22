/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Copypasted from nebular nbSpinner so we can use our own html
 */
import { ComponentFactoryResolver, Directive, ElementRef, Input, Renderer2, ViewContainerRef, HostBinding, } from '@angular/core';
import { SpinnerComponent } from './spinner.component';
var SpinnerDirective = /** @class */ (function () {
    function SpinnerDirective(directiveView, componentFactoryResolver, renderer, directiveElement) {
        this.directiveView = directiveView;
        this.componentFactoryResolver = componentFactoryResolver;
        this.renderer = renderer;
        this.directiveElement = directiveElement;
        this.shouldShow = false;
        this.isSpinnerExist = false;
    }
    Object.defineProperty(SpinnerDirective.prototype, "spinner", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SpinnerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(SpinnerComponent);
        if (this.shouldShow) {
            this.show();
        }
    };
    /**
     * @return {?}
     */
    SpinnerDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        if (this.isSpinnerExist) {
            this.directiveView.remove();
            this.isSpinnerExist = false;
        }
    };
    /**
     * @return {?}
     */
    SpinnerDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        if (!this.isSpinnerExist) {
            this.spinnerComponent = this.directiveView.createComponent(this.componentFactory);
            this.setInstanceInputs(this.spinnerComponent.instance);
            this.spinnerComponent.changeDetectorRef.detectChanges();
            this.renderer.appendChild(this.directiveElement.nativeElement, this.spinnerComponent.location.nativeElement);
            this.isSpinnerExist = true;
        }
    };
    /**
     * @param {?} instance
     * @return {?}
     */
    SpinnerDirective.prototype.setInstanceInputs = /**
     * @param {?} instance
     * @return {?}
     */
    function (instance) {
        typeof this.message !== 'undefined' && (instance.message = this.message);
        typeof this.color !== 'undefined' && (instance.color = this.color);
        instance.opacity = this.opacity;
        instance.fixed = this.fixed;
    };
    SpinnerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngxSpinner]'
                },] }
    ];
    /** @nocollapse */
    SpinnerDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    SpinnerDirective.propDecorators = {
        isSpinnerExist: [{ type: HostBinding, args: ['class.nb-spinner-container',] }],
        message: [{ type: Input, args: ['spinnerMessage',] }],
        color: [{ type: Input, args: ['spinnerColor',] }],
        opacity: [{ type: Input, args: ['spinnerFade',] }],
        fixed: [{ type: Input, args: ['spinnerFixed',] }],
        spinner: [{ type: Input, args: ['ngxSpinner',] }]
    };
    return SpinnerDirective;
}());
export { SpinnerDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY29tcG9uZW50cy9saWJzL3JlY2xhbWl0dXgvIiwic291cmNlcyI6WyJzcGlubmVyL3NwaW5uZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQ0wsd0JBQXdCLEVBR3hCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZEO0lBMEJFLDBCQUNVLGFBQStCLEVBQy9CLHdCQUFrRCxFQUNsRCxRQUFtQixFQUNuQixnQkFBNEI7UUFINUIsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQy9CLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVk7UUExQjlCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFZ0IsbUJBQWMsR0FBRyxLQUFLLENBQUM7SUEwQmxFLENBQUM7SUFyQkQsc0JBQXlCLHFDQUFPOzs7OztRQUFoQyxVQUFpQyxHQUFZO1lBQzNDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUN6QixJQUFJLEdBQUcsRUFBRTtvQkFDUCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ2I7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNiO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7YUFDdkI7UUFDSCxDQUFDOzs7T0FBQTs7OztJQWFELG1DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNoRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDOzs7O0lBRUQsK0JBQUk7OztJQUFKO1FBQ0UsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7O0lBRUQsK0JBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFtQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNwRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0csSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7OztJQUVELDRDQUFpQjs7OztJQUFqQixVQUFrQixRQUEwQjtRQUMxQyxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssV0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekUsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25FLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNoQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7Z0JBL0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztpQkFDekI7Ozs7Z0JBUkMsZ0JBQWdCO2dCQVJoQix3QkFBd0I7Z0JBT3hCLFNBQVM7Z0JBSFQsVUFBVTs7O2lDQWdCVCxXQUFXLFNBQUMsNEJBQTRCOzBCQUN4QyxLQUFLLFNBQUMsZ0JBQWdCO3dCQUN0QixLQUFLLFNBQUMsY0FBYzswQkFDcEIsS0FBSyxTQUFDLGFBQWE7d0JBQ25CLEtBQUssU0FBQyxjQUFjOzBCQUNwQixLQUFLLFNBQUMsWUFBWTs7SUFxRHJCLHVCQUFDO0NBQUEsQUFoRUQsSUFnRUM7U0E3RFksZ0JBQWdCOzs7Ozs7SUFDM0Isc0NBQTJCOztJQUUzQiwwQ0FBa0U7O0lBQ2xFLG1DQUF5Qzs7SUFDekMsaUNBQXFDOztJQUNyQyxtQ0FBdUM7O0lBQ3ZDLGlDQUFzQzs7SUFhdEMsNENBQWlEOztJQUNqRCw0Q0FBcUQ7Ozs7O0lBR25ELHlDQUF1Qzs7Ozs7SUFDdkMsb0RBQTBEOzs7OztJQUMxRCxvQ0FBMkI7Ozs7O0lBQzNCLDRDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXBhc3RlZCBmcm9tIG5lYnVsYXIgbmJTcGlubmVyIHNvIHdlIGNhbiB1c2Ugb3VyIG93biBodG1sXG4gKi9cbmltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50UmVmLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgSG9zdEJpbmRpbmcsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zcGlubmVyLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ3hTcGlubmVyXSdcbn0pXG5leHBvcnQgY2xhc3MgU3Bpbm5lckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgc2hvdWxkU2hvdyA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubmItc3Bpbm5lci1jb250YWluZXInKSBpc1NwaW5uZXJFeGlzdCA9IGZhbHNlO1xuICBASW5wdXQoJ3NwaW5uZXJNZXNzYWdlJykgbWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoJ3NwaW5uZXJDb2xvcicpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgnc3Bpbm5lckZhZGUnKSBvcGFjaXR5OiBib29sZWFuO1xuICBASW5wdXQoJ3NwaW5uZXJGaXhlZCcpIGZpeGVkOiBib29sZWFuO1xuICBASW5wdXQoJ25neFNwaW5uZXInKSBzZXQgc3Bpbm5lcih2YWw6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5jb21wb25lbnRGYWN0b3J5KSB7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdWxkU2hvdyA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBzcGlubmVyQ29tcG9uZW50OiBDb21wb25lbnRSZWY8U3Bpbm5lckNvbXBvbmVudD47XG4gIGNvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8U3Bpbm5lckNvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaXJlY3RpdmVWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZGlyZWN0aXZlRWxlbWVudDogRWxlbWVudFJlZlxuICApIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFNwaW5uZXJDb21wb25lbnQpO1xuICAgIGlmICh0aGlzLnNob3VsZFNob3cpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuaXNTcGlubmVyRXhpc3QpIHtcbiAgICAgIHRoaXMuZGlyZWN0aXZlVmlldy5yZW1vdmUoKTtcbiAgICAgIHRoaXMuaXNTcGlubmVyRXhpc3QgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICghdGhpcy5pc1NwaW5uZXJFeGlzdCkge1xuICAgICAgdGhpcy5zcGlubmVyQ29tcG9uZW50ID0gdGhpcy5kaXJlY3RpdmVWaWV3LmNyZWF0ZUNvbXBvbmVudDxTcGlubmVyQ29tcG9uZW50Pih0aGlzLmNvbXBvbmVudEZhY3RvcnkpO1xuICAgICAgdGhpcy5zZXRJbnN0YW5jZUlucHV0cyh0aGlzLnNwaW5uZXJDb21wb25lbnQuaW5zdGFuY2UpO1xuICAgICAgdGhpcy5zcGlubmVyQ29tcG9uZW50LmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5kaXJlY3RpdmVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuc3Bpbm5lckNvbXBvbmVudC5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHRoaXMuaXNTcGlubmVyRXhpc3QgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHNldEluc3RhbmNlSW5wdXRzKGluc3RhbmNlOiBTcGlubmVyQ29tcG9uZW50KSB7XG4gICAgdHlwZW9mIHRoaXMubWVzc2FnZSAhPT0gJ3VuZGVmaW5lZCcgJiYgKGluc3RhbmNlLm1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UpO1xuICAgIHR5cGVvZiB0aGlzLmNvbG9yICE9PSAndW5kZWZpbmVkJyAmJiAoaW5zdGFuY2UuY29sb3IgPSB0aGlzLmNvbG9yKTtcbiAgICBpbnN0YW5jZS5vcGFjaXR5ID0gdGhpcy5vcGFjaXR5O1xuICAgIGluc3RhbmNlLmZpeGVkID0gdGhpcy5maXhlZDtcbiAgfVxufVxuIl19