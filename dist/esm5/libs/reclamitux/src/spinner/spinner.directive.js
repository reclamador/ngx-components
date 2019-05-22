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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYnMvcmVjbGFtaXR1eC9zcmMvc3Bpbm5lci9zcGlubmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUNMLHdCQUF3QixFQUd4QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RDtJQTBCRSwwQkFDVSxhQUErQixFQUMvQix3QkFBa0QsRUFDbEQsUUFBbUIsRUFDbkIsZ0JBQTRCO1FBSDVCLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUMvQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFZO1FBMUI5QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRWdCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBMEJsRSxDQUFDO0lBckJELHNCQUF5QixxQ0FBTzs7Ozs7UUFBaEMsVUFBaUMsR0FBWTtZQUMzQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDekIsSUFBSSxHQUFHLEVBQUU7b0JBQ1AsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNiO3FCQUFNO29CQUNMLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDYjthQUNGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO2FBQ3ZCO1FBQ0gsQ0FBQzs7O09BQUE7Ozs7SUFhRCxtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDaEcsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQzs7OztJQUVELCtCQUFJOzs7SUFBSjtRQUNFLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7OztJQUVELCtCQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBbUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDcEcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCw0Q0FBaUI7Ozs7SUFBakIsVUFBa0IsUUFBMEI7UUFDMUMsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxXQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRSxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDaEMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQzlCLENBQUM7O2dCQS9ERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCOzs7O2dCQVJDLGdCQUFnQjtnQkFSaEIsd0JBQXdCO2dCQU94QixTQUFTO2dCQUhULFVBQVU7OztpQ0FnQlQsV0FBVyxTQUFDLDRCQUE0QjswQkFDeEMsS0FBSyxTQUFDLGdCQUFnQjt3QkFDdEIsS0FBSyxTQUFDLGNBQWM7MEJBQ3BCLEtBQUssU0FBQyxhQUFhO3dCQUNuQixLQUFLLFNBQUMsY0FBYzswQkFDcEIsS0FBSyxTQUFDLFlBQVk7O0lBcURyQix1QkFBQztDQUFBLEFBaEVELElBZ0VDO1NBN0RZLGdCQUFnQjs7Ozs7O0lBQzNCLHNDQUEyQjs7SUFFM0IsMENBQWtFOztJQUNsRSxtQ0FBeUM7O0lBQ3pDLGlDQUFxQzs7SUFDckMsbUNBQXVDOztJQUN2QyxpQ0FBc0M7O0lBYXRDLDRDQUFpRDs7SUFDakQsNENBQXFEOzs7OztJQUduRCx5Q0FBdUM7Ozs7O0lBQ3ZDLG9EQUEwRDs7Ozs7SUFDMUQsb0NBQTJCOzs7OztJQUMzQiw0Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlwYXN0ZWQgZnJvbSBuZWJ1bGFyIG5iU3Bpbm5lciBzbyB3ZSBjYW4gdXNlIG91ciBvd24gaHRtbFxuICovXG5pbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudEZhY3RvcnksXG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIEhvc3RCaW5kaW5nLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3Bpbm5lckNvbXBvbmVudCB9IGZyb20gJy4vc3Bpbm5lci5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4U3Bpbm5lcl0nXG59KVxuZXhwb3J0IGNsYXNzIFNwaW5uZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIHNob3VsZFNob3cgPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm5iLXNwaW5uZXItY29udGFpbmVyJykgaXNTcGlubmVyRXhpc3QgPSBmYWxzZTtcbiAgQElucHV0KCdzcGlubmVyTWVzc2FnZScpIG1lc3NhZ2U6IHN0cmluZztcbiAgQElucHV0KCdzcGlubmVyQ29sb3InKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoJ3NwaW5uZXJGYWRlJykgb3BhY2l0eTogYm9vbGVhbjtcbiAgQElucHV0KCdzcGlubmVyRml4ZWQnKSBmaXhlZDogYm9vbGVhbjtcbiAgQElucHV0KCduZ3hTcGlubmVyJykgc2V0IHNwaW5uZXIodmFsOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuY29tcG9uZW50RmFjdG9yeSkge1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3VsZFNob3cgPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgc3Bpbm5lckNvbXBvbmVudDogQ29tcG9uZW50UmVmPFNwaW5uZXJDb21wb25lbnQ+O1xuICBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PFNwaW5uZXJDb21wb25lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGlyZWN0aXZlVmlldzogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGRpcmVjdGl2ZUVsZW1lbnQ6IEVsZW1lbnRSZWZcbiAgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShTcGlubmVyQ29tcG9uZW50KTtcbiAgICBpZiAodGhpcy5zaG91bGRTaG93KSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLmlzU3Bpbm5lckV4aXN0KSB7XG4gICAgICB0aGlzLmRpcmVjdGl2ZVZpZXcucmVtb3ZlKCk7XG4gICAgICB0aGlzLmlzU3Bpbm5lckV4aXN0ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAoIXRoaXMuaXNTcGlubmVyRXhpc3QpIHtcbiAgICAgIHRoaXMuc3Bpbm5lckNvbXBvbmVudCA9IHRoaXMuZGlyZWN0aXZlVmlldy5jcmVhdGVDb21wb25lbnQ8U3Bpbm5lckNvbXBvbmVudD4odGhpcy5jb21wb25lbnRGYWN0b3J5KTtcbiAgICAgIHRoaXMuc2V0SW5zdGFuY2VJbnB1dHModGhpcy5zcGlubmVyQ29tcG9uZW50Lmluc3RhbmNlKTtcbiAgICAgIHRoaXMuc3Bpbm5lckNvbXBvbmVudC5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZGlyZWN0aXZlRWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnNwaW5uZXJDb21wb25lbnQubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgICB0aGlzLmlzU3Bpbm5lckV4aXN0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBzZXRJbnN0YW5jZUlucHV0cyhpbnN0YW5jZTogU3Bpbm5lckNvbXBvbmVudCkge1xuICAgIHR5cGVvZiB0aGlzLm1lc3NhZ2UgIT09ICd1bmRlZmluZWQnICYmIChpbnN0YW5jZS5tZXNzYWdlID0gdGhpcy5tZXNzYWdlKTtcbiAgICB0eXBlb2YgdGhpcy5jb2xvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKGluc3RhbmNlLmNvbG9yID0gdGhpcy5jb2xvcik7XG4gICAgaW5zdGFuY2Uub3BhY2l0eSA9IHRoaXMub3BhY2l0eTtcbiAgICBpbnN0YW5jZS5maXhlZCA9IHRoaXMuZml4ZWQ7XG4gIH1cbn1cbiJdfQ==