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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY29tcG9uZW50cy9saWJzL3JlY2xhbWl0dXgvIiwic291cmNlcyI6WyJzcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQ7SUFBQTtRQWtCUyxRQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsc0NBQXNDOztRQUNuRCxhQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsd0RBQXdEOztRQUVyRSxVQUFLLEdBQVcsU0FBUyxDQUFDO1FBRTFCLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDdkIsWUFBTyxHQUFZLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBZEMsc0JBQWdDLGtDQUFJOzs7O1FBQXBDO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBQUEsQ0FBQztJQUNGLHNCQUFnQyxpQ0FBRzs7OztRQUFuQztZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUFBLENBQUM7O2dCQWhCSCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSwwTkFLVDs7aUJBRUY7Ozt1QkFFRSxXQUFXLFNBQUMsYUFBYTtzQkFHekIsV0FBVyxTQUFDLGFBQWE7d0JBT3pCLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7O0lBQ1IsdUJBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQWZZLGdCQUFnQjs7O0lBUTNCLCtCQUFtQjs7SUFDbkIsb0NBQXFCOztJQUVyQixpQ0FBbUM7O0lBQ25DLG1DQUF5Qjs7SUFDekIsaUNBQWdDOztJQUNoQyxtQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNpbXBsZSBodG1sIHNwaW5uZXJcbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXNwaW5uZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJob21lLXNwaW5uZXJcIj5cbiAgICAgIDxzcGFuICpuZ0Zvcj1cImxldCBlbG0gb2YgQXJyKGVsZW1lbnRzKS5maWxsKDEpXCIgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiY29sb3JcIj48L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2VcIiAqbmdJZj1cIm1lc3NhZ2VcIj57eyBtZXNzYWdlIH19PC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL3NwaW5uZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTcGlubmVyQ29tcG9uZW50IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mYWRlZCcpIGdldCBmYWRlKCkge1xuICAgIHJldHVybiB0aGlzLm9wYWNpdHk7XG4gIH07XG4gIEBIb3N0QmluZGluZygnY2xhc3MuZml4ZWQnKSBnZXQgZml4KCkge1xuICAgIHJldHVybiB0aGlzLmZpeGVkO1xuICB9O1xuXG4gIHB1YmxpYyBBcnIgPSBBcnJheTsgLy8gYWNjZXNvciB0byBodG1sIGdsb2JhbCBBcnJheSBvYmplY3RcbiAgcHVibGljIGVsZW1lbnRzID0gMTI7IC8vIGhhcmRjb2RlZCBpbiBzY3NzLCBjaGFuZ2VzIHNob3VsZCBiZSBtYWRlIGJvdGggcGxhY2VzXG5cbiAgQElucHV0KCkgY29sb3I6IHN0cmluZyA9ICcjNjY5OWZmJztcbiAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSBmaXhlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBvcGFjaXR5OiBib29sZWFuID0gdHJ1ZTtcbn1cbiJdfQ==