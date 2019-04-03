(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@reclamador/two-lib', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global.reclamador = global.reclamador || {}, global.reclamador['two-lib'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MyButtonComponent = /** @class */ (function () {
        function MyButtonComponent() {
        }
        /**
         * @return {?}
         */
        MyButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        MyButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'reclamador-my-button',
                        template: "<p>\n  my-button works!\n</p>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        MyButtonComponent.ctorParameters = function () { return []; };
        return MyButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TwoLibModule = /** @class */ (function () {
        function TwoLibModule() {
        }
        TwoLibModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [MyButtonComponent],
                        exports: [MyButtonComponent]
                    },] }
        ];
        return TwoLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.TwoLibModule = TwoLibModule;
    exports.ɵa = MyButtonComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=reclamador-two-lib.umd.js.map