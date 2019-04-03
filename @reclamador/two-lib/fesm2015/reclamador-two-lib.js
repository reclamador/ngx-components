import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MyButtonComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MyButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'reclamador-my-button',
                template: "<p>\n  my-button works!\n</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
MyButtonComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TwoLibModule {
}
TwoLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [MyButtonComponent],
                exports: [MyButtonComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TwoLibModule, MyButtonComponent as ɵa };

//# sourceMappingURL=reclamador-two-lib.js.map