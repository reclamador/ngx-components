(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('@reclamador/one-lib', ['exports'], factory) :
    (factory((global.reclamador = global.reclamador || {}, global.reclamador['one-lib'] = {})));
}(this, (function (exports) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OneLib = /** @class */ (function () {
        function OneLib() {
        }
        /**
         * @return {?}
         */
        OneLib.prototype.foo = /**
         * @return {?}
         */
            function () {
                return "bar";
            };
        return OneLib;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.OneLib = OneLib;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=reclamador-one-lib.umd.js.map