/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Simple html spinner
 */
import { Component, Input, HostBinding } from '@angular/core';
export class SpinnerComponent {
    constructor() {
        this.Arr = Array; // accesor to html global Array object
        // accesor to html global Array object
        this.elements = 12; // hardcoded in scss, changes should be made both places
        // hardcoded in scss, changes should be made both places
        this.color = '#6699ff';
        this.fixed = false;
        this.opacity = true;
    }
    /**
     * @return {?}
     */
    get fade() {
        return this.opacity;
    }
    ;
    /**
     * @return {?}
     */
    get fix() {
        return this.fixed;
    }
    ;
}
SpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-spinner',
                template: `
    <div class="home-spinner">
      <span *ngFor="let elm of Arr(elements).fill(1)" [style.background-color]="color"></span>
    </div>
    <div class="message" *ngIf="message">{{ message }}</div>
  `,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY29tcG9uZW50cy9saWJzL3JlY2xhbWl0dXgvIiwic291cmNlcyI6WyJzcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFZOUQsTUFBTSxPQUFPLGdCQUFnQjtJQVY3QjtRQWtCUyxRQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsc0NBQXNDOztRQUNuRCxhQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsd0RBQXdEOztRQUVyRSxVQUFLLEdBQVcsU0FBUyxDQUFDO1FBRTFCLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDdkIsWUFBTyxHQUFZLElBQUksQ0FBQztJQUNuQyxDQUFDOzs7O0lBZEMsSUFBZ0MsSUFBSTtRQUNsQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUFBLENBQUM7Ozs7SUFDRixJQUFnQyxHQUFHO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQUEsQ0FBQzs7O1lBaEJILFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7OztHQUtUOzthQUVGOzs7bUJBRUUsV0FBVyxTQUFDLGFBQWE7a0JBR3pCLFdBQVcsU0FBQyxhQUFhO29CQU96QixLQUFLO3NCQUNMLEtBQUs7b0JBQ0wsS0FBSztzQkFDTCxLQUFLOzs7O0lBTk4sK0JBQW1COztJQUNuQixvQ0FBcUI7O0lBRXJCLGlDQUFtQzs7SUFDbkMsbUNBQXlCOztJQUN6QixpQ0FBZ0M7O0lBQ2hDLG1DQUFpQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU2ltcGxlIGh0bWwgc3Bpbm5lclxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtc3Bpbm5lcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImhvbWUtc3Bpbm5lclwiPlxuICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IGVsbSBvZiBBcnIoZWxlbWVudHMpLmZpbGwoMSlcIiBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJjb2xvclwiPjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZVwiICpuZ0lmPVwibWVzc2FnZVwiPnt7IG1lc3NhZ2UgfX08L2Rpdj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vc3Bpbm5lci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNwaW5uZXJDb21wb25lbnQge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZhZGVkJykgZ2V0IGZhZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMub3BhY2l0eTtcbiAgfTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5maXhlZCcpIGdldCBmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZml4ZWQ7XG4gIH07XG5cbiAgcHVibGljIEFyciA9IEFycmF5OyAvLyBhY2Nlc29yIHRvIGh0bWwgZ2xvYmFsIEFycmF5IG9iamVjdFxuICBwdWJsaWMgZWxlbWVudHMgPSAxMjsgLy8gaGFyZGNvZGVkIGluIHNjc3MsIGNoYW5nZXMgc2hvdWxkIGJlIG1hZGUgYm90aCBwbGFjZXNcblxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nID0gJyM2Njk5ZmYnO1xuICBASW5wdXQoKSBtZXNzYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG9wYWNpdHk6IGJvb2xlYW4gPSB0cnVlO1xufVxuIl19