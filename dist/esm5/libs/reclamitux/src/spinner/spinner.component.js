/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Simple html spinner
 */
import { Component, Input, HostBinding } from '@angular/core';
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
    ;
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
    ;
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
export { SpinnerComponent };
if (false) {
    /** @type {?} */
    SpinnerComponent.prototype.Arr;
    /** @type {?} */
    SpinnerComponent.prototype.elements;
    /** @type {?} */
    SpinnerComponent.prototype.color;
    /** @type {?} */
    SpinnerComponent.prototype.message;
    /** @type {?} */
    SpinnerComponent.prototype.fixed;
    /** @type {?} */
    SpinnerComponent.prototype.opacity;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYnMvcmVjbGFtaXR1eC9zcmMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlEO0lBQUE7UUFrQlMsUUFBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLHNDQUFzQzs7UUFDbkQsYUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLHdEQUF3RDs7UUFFckUsVUFBSyxHQUFXLFNBQVMsQ0FBQztRQUUxQixVQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLFlBQU8sR0FBWSxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQWRDLHNCQUFnQyxrQ0FBSTs7OztRQUFwQztZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUFBLENBQUM7SUFDRixzQkFBZ0MsaUNBQUc7Ozs7UUFBbkM7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFBQSxDQUFDOztnQkFoQkgsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsME5BS1Q7O2lCQUVGOzs7dUJBRUUsV0FBVyxTQUFDLGFBQWE7c0JBR3pCLFdBQVcsU0FBQyxhQUFhO3dCQU96QixLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLOztJQUNSLHVCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0FmWSxnQkFBZ0I7OztJQVEzQiwrQkFBbUI7O0lBQ25CLG9DQUFxQjs7SUFFckIsaUNBQW1DOztJQUNuQyxtQ0FBeUI7O0lBQ3pCLGlDQUFnQzs7SUFDaEMsbUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTaW1wbGUgaHRtbCBzcGlubmVyXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1zcGlubmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiaG9tZS1zcGlubmVyXCI+XG4gICAgICA8c3BhbiAqbmdGb3I9XCJsZXQgZWxtIG9mIEFycihlbGVtZW50cykuZmlsbCgxKVwiIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImNvbG9yXCI+PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlXCIgKm5nSWY9XCJtZXNzYWdlXCI+e3sgbWVzc2FnZSB9fTwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9zcGlubmVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3Bpbm5lckNvbXBvbmVudCB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuZmFkZWQnKSBnZXQgZmFkZSgpIHtcbiAgICByZXR1cm4gdGhpcy5vcGFjaXR5O1xuICB9O1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZpeGVkJykgZ2V0IGZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXhlZDtcbiAgfTtcblxuICBwdWJsaWMgQXJyID0gQXJyYXk7IC8vIGFjY2Vzb3IgdG8gaHRtbCBnbG9iYWwgQXJyYXkgb2JqZWN0XG4gIHB1YmxpYyBlbGVtZW50cyA9IDEyOyAvLyBoYXJkY29kZWQgaW4gc2NzcywgY2hhbmdlcyBzaG91bGQgYmUgbWFkZSBib3RoIHBsYWNlc1xuXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSAnIzY2OTlmZic7XG4gIEBJbnB1dCgpIG1lc3NhZ2U6IHN0cmluZztcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgb3BhY2l0eTogYm9vbGVhbiA9IHRydWU7XG59XG4iXX0=