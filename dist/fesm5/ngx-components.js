import { CommonModule } from '@angular/common';
import { NbCardModule, NbAccordionModule, NbSelectModule } from '@nebular/theme';
import { Component, Input, HostBinding, ComponentFactoryResolver, Directive, ElementRef, Renderer2, ViewContainerRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
        this.Arr = Array; // accesor to html global Array object
        // accesor to html global Array object
        this.elements = 12; // hardcoded in scss, changes should be made both places
        // hardcoded in scss, changes should be made both places
        this.color = '#6699ff';
        this.fixed = false;
        this.opacity = true;
    }
    Object.defineProperty(SpinnerComponent.prototype, "fade", {
        get: /**
         * @return {?}
         */
        function () {
            return this.opacity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpinnerComponent.prototype, "fix", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fixed;
        },
        enumerable: true,
        configurable: true
    });
    SpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-spinner',
                    template: "\n    <div class=\"home-spinner\">\n      <span *ngFor=\"let elm of Arr(elements).fill(1)\" [style.background-color]=\"color\"></span>\n    </div>\n    <div class=\"message\" *ngIf=\"message\">{{ message }}</div>\n  ",
                    styles: [":host{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;z-index:100}:host.faded .home-spinner{opacity:.48}:host.fixed .home-spinner,:host.fixed .message{position:fixed}:host .home-spinner{opacity:1;background:#fff;position:absolute;top:0;left:0;width:100%;height:100%}:host .home-spinner span{display:block;width:14px;height:26px;position:absolute;left:50%;top:50%;margin-top:-13px;margin-left:-8px;border-radius:5px;opacity:0;-webkit-animation:3s linear infinite fade;animation:3s linear infinite fade}:host .home-spinner span:nth-child(0){-webkit-transform:rotate(0) translateY(56px);transform:rotate(0) translateY(56px);-webkit-animation-delay:0s;animation-delay:0s}:host .home-spinner span:nth-child(1){-webkit-transform:rotate(30deg) translateY(56px);transform:rotate(30deg) translateY(56px);-webkit-animation-delay:.25s;animation-delay:.25s}:host .home-spinner span:nth-child(2){-webkit-transform:rotate(60deg) translateY(56px);transform:rotate(60deg) translateY(56px);-webkit-animation-delay:.5s;animation-delay:.5s}:host .home-spinner span:nth-child(3){-webkit-transform:rotate(90deg) translateY(56px);transform:rotate(90deg) translateY(56px);-webkit-animation-delay:.75s;animation-delay:.75s}:host .home-spinner span:nth-child(4){-webkit-transform:rotate(120deg) translateY(56px);transform:rotate(120deg) translateY(56px);-webkit-animation-delay:1s;animation-delay:1s}:host .home-spinner span:nth-child(5){-webkit-transform:rotate(150deg) translateY(56px);transform:rotate(150deg) translateY(56px);-webkit-animation-delay:1.25s;animation-delay:1.25s}:host .home-spinner span:nth-child(6){-webkit-transform:rotate(180deg) translateY(56px);transform:rotate(180deg) translateY(56px);-webkit-animation-delay:1.5s;animation-delay:1.5s}:host .home-spinner span:nth-child(7){-webkit-transform:rotate(210deg) translateY(56px);transform:rotate(210deg) translateY(56px);-webkit-animation-delay:1.75s;animation-delay:1.75s}:host .home-spinner span:nth-child(8){-webkit-transform:rotate(240deg) translateY(56px);transform:rotate(240deg) translateY(56px);-webkit-animation-delay:2s;animation-delay:2s}:host .home-spinner span:nth-child(9){-webkit-transform:rotate(270deg) translateY(56px);transform:rotate(270deg) translateY(56px);-webkit-animation-delay:2.25s;animation-delay:2.25s}:host .home-spinner span:nth-child(10){-webkit-transform:rotate(300deg) translateY(56px);transform:rotate(300deg) translateY(56px);-webkit-animation-delay:2.5s;animation-delay:2.5s}:host .home-spinner span:nth-child(11){-webkit-transform:rotate(330deg) translateY(56px);transform:rotate(330deg) translateY(56px);-webkit-animation-delay:2.75s;animation-delay:2.75s}:host .home-spinner span:nth-child(12){-webkit-transform:rotate(360deg) translateY(56px);transform:rotate(360deg) translateY(56px);-webkit-animation-delay:3s;animation-delay:3s}:host .message{position:absolute;top:50%;left:0;width:100%;margin-top:90px;overflow:hidden;z-index:100;text-align:center}@-webkit-keyframes fade{from{opacity:1}to{opacity:0}}@keyframes fade{from{opacity:1}to{opacity:0}}"]
                }] }
    ];
    SpinnerComponent.propDecorators = {
        fade: [{ type: HostBinding, args: ['class.faded',] }],
        fix: [{ type: HostBinding, args: ['class.fixed',] }],
        color: [{ type: Input }],
        message: [{ type: Input }],
        fixed: [{ type: Input }],
        opacity: [{ type: Input }]
    };
    return SpinnerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ReclamituxModule = /** @class */ (function () {
    function ReclamituxModule() {
    }
    ReclamituxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        NbCardModule,
                        NbAccordionModule,
                        NbSelectModule
                    ],
                    declarations: [
                        SpinnerComponent,
                        SpinnerDirective
                    ],
                    exports: [
                        NbCardModule,
                        NbAccordionModule,
                        NbSelectModule,
                        SpinnerComponent,
                        SpinnerDirective
                    ],
                    entryComponents: [
                        SpinnerComponent
                    ]
                },] }
    ];
    return ReclamituxModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ReclamituxModule, SpinnerComponent, SpinnerDirective };

//# sourceMappingURL=ngx-components.js.map