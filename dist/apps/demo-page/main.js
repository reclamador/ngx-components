(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../libs/reclamitux/src/reclamitux.module.ts":
/*!***********************************************************************************!*\
  !*** /home/serxius/devel/ngx-components/libs/reclamitux/src/reclamitux.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ReclamituxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReclamituxModule", function() { return ReclamituxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "../../node_modules/@nebular/theme/index.js");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spinner/spinner.component */ "../../libs/reclamitux/src/spinner/spinner.component.ts");
/* harmony import */ var _spinner_spinner_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spinner/spinner.directive */ "../../libs/reclamitux/src/spinner/spinner.directive.ts");
/* harmony import */ var _switch_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./switch/index */ "../../libs/reclamitux/src/switch/index.ts");







var ReclamituxModule = /** @class */ (function () {
    function ReclamituxModule() {
    }
    ReclamituxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionModule"],
                _switch_index__WEBPACK_IMPORTED_MODULE_6__["SwitchModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectModule"]
            ],
            declarations: [
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"],
                _spinner_spinner_directive__WEBPACK_IMPORTED_MODULE_5__["SpinnerDirective"]
            ],
            exports: [
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectModule"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"],
                _spinner_spinner_directive__WEBPACK_IMPORTED_MODULE_5__["SpinnerDirective"]
            ],
            entryComponents: [
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"]
            ]
        })
    ], ReclamituxModule);
    return ReclamituxModule;
}());



/***/ }),

/***/ "../../libs/reclamitux/src/spinner/spinner.component.scss":
/*!*********************************************************************************************!*\
  !*** /home/serxius/devel/ngx-components/libs/reclamitux/src/spinner/spinner.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: 100; }\n  :host.faded .home-spinner {\n    opacity: 0.48; }\n  :host.fixed .home-spinner, :host.fixed .message {\n    position: fixed; }\n  :host .home-spinner {\n    opacity: 1;\n    background: white;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n  :host .home-spinner span {\n      display: block;\n      width: 14px;\n      height: 26px;\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      margin-top: -13px;\n      margin-left: -8px;\n      border-radius: 5px;\n      opacity: 0;\n      -webkit-animation: fade 3s linear infinite;\n              animation: fade 3s linear infinite; }\n  :host .home-spinner span:nth-child(0) {\n      -webkit-transform: rotate(0deg) translateY(56px);\n              transform: rotate(0deg) translateY(56px);\n      -webkit-animation-delay: 0s;\n              animation-delay: 0s; }\n  :host .home-spinner span:nth-child(1) {\n      -webkit-transform: rotate(30deg) translateY(56px);\n              transform: rotate(30deg) translateY(56px);\n      -webkit-animation-delay: 0.25s;\n              animation-delay: 0.25s; }\n  :host .home-spinner span:nth-child(2) {\n      -webkit-transform: rotate(60deg) translateY(56px);\n              transform: rotate(60deg) translateY(56px);\n      -webkit-animation-delay: 0.5s;\n              animation-delay: 0.5s; }\n  :host .home-spinner span:nth-child(3) {\n      -webkit-transform: rotate(90deg) translateY(56px);\n              transform: rotate(90deg) translateY(56px);\n      -webkit-animation-delay: 0.75s;\n              animation-delay: 0.75s; }\n  :host .home-spinner span:nth-child(4) {\n      -webkit-transform: rotate(120deg) translateY(56px);\n              transform: rotate(120deg) translateY(56px);\n      -webkit-animation-delay: 1s;\n              animation-delay: 1s; }\n  :host .home-spinner span:nth-child(5) {\n      -webkit-transform: rotate(150deg) translateY(56px);\n              transform: rotate(150deg) translateY(56px);\n      -webkit-animation-delay: 1.25s;\n              animation-delay: 1.25s; }\n  :host .home-spinner span:nth-child(6) {\n      -webkit-transform: rotate(180deg) translateY(56px);\n              transform: rotate(180deg) translateY(56px);\n      -webkit-animation-delay: 1.5s;\n              animation-delay: 1.5s; }\n  :host .home-spinner span:nth-child(7) {\n      -webkit-transform: rotate(210deg) translateY(56px);\n              transform: rotate(210deg) translateY(56px);\n      -webkit-animation-delay: 1.75s;\n              animation-delay: 1.75s; }\n  :host .home-spinner span:nth-child(8) {\n      -webkit-transform: rotate(240deg) translateY(56px);\n              transform: rotate(240deg) translateY(56px);\n      -webkit-animation-delay: 2s;\n              animation-delay: 2s; }\n  :host .home-spinner span:nth-child(9) {\n      -webkit-transform: rotate(270deg) translateY(56px);\n              transform: rotate(270deg) translateY(56px);\n      -webkit-animation-delay: 2.25s;\n              animation-delay: 2.25s; }\n  :host .home-spinner span:nth-child(10) {\n      -webkit-transform: rotate(300deg) translateY(56px);\n              transform: rotate(300deg) translateY(56px);\n      -webkit-animation-delay: 2.5s;\n              animation-delay: 2.5s; }\n  :host .home-spinner span:nth-child(11) {\n      -webkit-transform: rotate(330deg) translateY(56px);\n              transform: rotate(330deg) translateY(56px);\n      -webkit-animation-delay: 2.75s;\n              animation-delay: 2.75s; }\n  :host .home-spinner span:nth-child(12) {\n      -webkit-transform: rotate(360deg) translateY(56px);\n              transform: rotate(360deg) translateY(56px);\n      -webkit-animation-delay: 3s;\n              animation-delay: 3s; }\n  :host .message {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    width: 100%;\n    margin-top: 90px;\n    overflow: hidden;\n    z-index: 100;\n    text-align: center; }\n  @-webkit-keyframes fade {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n  @keyframes fade {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlcnhpdXMvZGV2ZWwvbmd4LWNvbXBvbmVudHMvbGlicy9yZWNsYW1pdHV4L3NyYy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7RUFQZDtJQVVJLGFBQ0YsRUFBQTtFQVhGO0lBZU0sZUFBZSxFQUFBO0VBZnJCO0lBb0JJLFVBQVU7SUFDVixpQkFBaUI7SUFFakIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVksRUFBQTtFQTNCaEI7TUE4Qk0sY0FBYztNQUNkLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxRQUFRO01BQ1IsaUJBQWlCO01BQ2pCLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLDBDQUFrRDtjQUFsRCxrQ0FBa0QsRUFBQTtFQXhDeEQ7TUE2Q1EsZ0RBQXFFO2NBQXJFLHdDQUFxRTtNQUNyRSwyQkFBaUI7Y0FBakIsbUJBQWlCLEVBQUE7RUE5Q3pCO01BNkNRLGlEQUFxRTtjQUFyRSx5Q0FBcUU7TUFDckUsOEJBQWlCO2NBQWpCLHNCQUFpQixFQUFBO0VBOUN6QjtNQTZDUSxpREFBcUU7Y0FBckUseUNBQXFFO01BQ3JFLDZCQUFpQjtjQUFqQixxQkFBaUIsRUFBQTtFQTlDekI7TUE2Q1EsaURBQXFFO2NBQXJFLHlDQUFxRTtNQUNyRSw4QkFBaUI7Y0FBakIsc0JBQWlCLEVBQUE7RUE5Q3pCO01BNkNRLGtEQUFxRTtjQUFyRSwwQ0FBcUU7TUFDckUsMkJBQWlCO2NBQWpCLG1CQUFpQixFQUFBO0VBOUN6QjtNQTZDUSxrREFBcUU7Y0FBckUsMENBQXFFO01BQ3JFLDhCQUFpQjtjQUFqQixzQkFBaUIsRUFBQTtFQTlDekI7TUE2Q1Esa0RBQXFFO2NBQXJFLDBDQUFxRTtNQUNyRSw2QkFBaUI7Y0FBakIscUJBQWlCLEVBQUE7RUE5Q3pCO01BNkNRLGtEQUFxRTtjQUFyRSwwQ0FBcUU7TUFDckUsOEJBQWlCO2NBQWpCLHNCQUFpQixFQUFBO0VBOUN6QjtNQTZDUSxrREFBcUU7Y0FBckUsMENBQXFFO01BQ3JFLDJCQUFpQjtjQUFqQixtQkFBaUIsRUFBQTtFQTlDekI7TUE2Q1Esa0RBQXFFO2NBQXJFLDBDQUFxRTtNQUNyRSw4QkFBaUI7Y0FBakIsc0JBQWlCLEVBQUE7RUE5Q3pCO01BNkNRLGtEQUFxRTtjQUFyRSwwQ0FBcUU7TUFDckUsNkJBQWlCO2NBQWpCLHFCQUFpQixFQUFBO0VBOUN6QjtNQTZDUSxrREFBcUU7Y0FBckUsMENBQXFFO01BQ3JFLDhCQUFpQjtjQUFqQixzQkFBaUIsRUFBQTtFQTlDekI7TUE2Q1Esa0RBQXFFO2NBQXJFLDBDQUFxRTtNQUNyRSwyQkFBaUI7Y0FBakIsbUJBQWlCLEVBQUE7RUE5Q3pCO0lBb0RJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsT0FBTztJQUNQLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0IsRUFBQTtFQUl0QjtFQUNFO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxVQUFVLEVBQUEsRUFBQTtFQUxkO0VBQ0U7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQSxFQUFBIiwiZmlsZSI6ImxpYnMvcmVjbGFtaXR1eC9zcmMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBpcyBpbmNsdWRlZCBpbmxpbmUgaW4gaW5kZXguaHRtbCwgaGVyZSBhcyBhIHJlZmVyZW5jZSB0byBjaGFuZ2VpdFxuJHNwaW5uZXItZWxlbWVudHM6IDEyO1xuJHNwaW5uZXItdGltZTogMztcblxuOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMTAwO1xuXG4gICYuZmFkZWQgLmhvbWUtc3Bpbm5lciB7XG4gICAgb3BhY2l0eTogMC40OFxuICB9XG5cbiAgJi5maXhlZCB7XG4gICAgLmhvbWUtc3Bpbm5lciwgLm1lc3NhZ2Uge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgIH1cbiAgfVxuXG4gIC5ob21lLXNwaW5uZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgc3BhbiB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBtYXJnaW4tdG9wOiAtMTNweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIGFuaW1hdGlvbjogZmFkZSAjeyRzcGlubmVyLXRpbWV9cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgfVxuXG4gICAgQGZvciAkaSBmcm9tIDAgdGhyb3VnaCAkc3Bpbm5lci1lbGVtZW50cyB7XG4gICAgICBzcGFuOm50aC1jaGlsZCgjeyRpfSkge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgjezM2MCokaS8kc3Bpbm5lci1lbGVtZW50c31kZWcpIHRyYW5zbGF0ZVkoNTZweCk7XG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogI3skaSokc3Bpbm5lci10aW1lLyRzcGlubmVyLWVsZW1lbnRzfXM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1lc3NhZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "../../libs/reclamitux/src/spinner/spinner.component.ts":
/*!*******************************************************************************************!*\
  !*** /home/serxius/devel/ngx-components/libs/reclamitux/src/spinner/spinner.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

/**
 * Simple html spinner
 */

var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
        this.Arr = Array; // accesor to html global Array object
        this.elements = 12; // hardcoded in scss, changes should be made both places
        this.color = '#6699ff';
        this.fixed = false;
        this.opacity = true;
    }
    Object.defineProperty(SpinnerComponent.prototype, "fade", {
        get: function () {
            return this.opacity;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(SpinnerComponent.prototype, "fix", {
        get: function () {
            return this.fixed;
        },
        enumerable: true,
        configurable: true
    });
    ;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.faded'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpinnerComponent.prototype, "fade", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.fixed'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpinnerComponent.prototype, "fix", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SpinnerComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SpinnerComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SpinnerComponent.prototype, "fixed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SpinnerComponent.prototype, "opacity", void 0);
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-spinner',
            template: "\n    <div class=\"home-spinner\">\n      <span *ngFor=\"let elm of Arr(elements).fill(1)\" [style.background-color]=\"color\"></span>\n    </div>\n    <div class=\"message\" *ngIf=\"message\">{{ message }}</div>\n  ",
            styles: [__webpack_require__(/*! ./spinner.component.scss */ "../../libs/reclamitux/src/spinner/spinner.component.scss")]
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "../../libs/reclamitux/src/spinner/spinner.directive.ts":
/*!*******************************************************************************************!*\
  !*** /home/serxius/devel/ngx-components/libs/reclamitux/src/spinner/spinner.directive.ts ***!
  \*******************************************************************************************/
/*! exports provided: SpinnerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerDirective", function() { return SpinnerDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner.component */ "../../libs/reclamitux/src/spinner/spinner.component.ts");

/**
 * Copypasted from nebular nbSpinner so we can use our own html
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
        set: function (val) {
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
    SpinnerDirective.prototype.ngOnInit = function () {
        this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]);
        if (this.shouldShow) {
            this.show();
        }
    };
    SpinnerDirective.prototype.hide = function () {
        if (this.isSpinnerExist) {
            this.directiveView.remove();
            this.isSpinnerExist = false;
        }
    };
    SpinnerDirective.prototype.show = function () {
        if (!this.isSpinnerExist) {
            this.spinnerComponent = this.directiveView.createComponent(this.componentFactory);
            this.setInstanceInputs(this.spinnerComponent.instance);
            this.spinnerComponent.changeDetectorRef.detectChanges();
            this.renderer.appendChild(this.directiveElement.nativeElement, this.spinnerComponent.location.nativeElement);
            this.isSpinnerExist = true;
        }
    };
    SpinnerDirective.prototype.setInstanceInputs = function (instance) {
        typeof this.message !== 'undefined' && (instance.message = this.message);
        typeof this.color !== 'undefined' && (instance.color = this.color);
        instance.opacity = this.opacity;
        instance.fixed = this.fixed;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.nb-spinner-container'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpinnerDirective.prototype, "isSpinnerExist", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('spinnerMessage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SpinnerDirective.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('spinnerColor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SpinnerDirective.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('spinnerFade'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SpinnerDirective.prototype, "opacity", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('spinnerFixed'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SpinnerDirective.prototype, "fixed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngxSpinner'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SpinnerDirective.prototype, "spinner", null);
    SpinnerDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[ngxSpinner]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SpinnerDirective);
    return SpinnerDirective;
}());



/***/ }),

/***/ "../../libs/reclamitux/src/switch/index.ts":
/*!******************************************************************************!*\
  !*** /home/serxius/devel/ngx-components/libs/reclamitux/src/switch/index.ts ***!
  \******************************************************************************/
/*! exports provided: SwitchModule, SwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _switch_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switch.module */ "../../libs/reclamitux/src/switch/switch.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchModule", function() { return _switch_module__WEBPACK_IMPORTED_MODULE_0__["SwitchModule"]; });

/* harmony import */ var _switch_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switch.component */ "../../libs/reclamitux/src/switch/switch.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return _switch_component__WEBPACK_IMPORTED_MODULE_1__["SwitchComponent"]; });





/***/ }),

/***/ "../../libs/reclamitux/src/switch/switch.component.scss":
/*!*******************************************************************************************!*\
  !*** /home/serxius/devel/ngx-components/libs/reclamitux/src/switch/switch.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".switch.switch-small {\n  min-width: 33px; }\n\n.switch.switch-medium {\n  min-width: 50px; }\n\n.switch.switch-large {\n  min-width: 60px; }\n\n.switch.switch-small > .switch-pane > span {\n  font-size: 9px; }\n\n.switch.switch-medium > .switch-pane > span {\n  font-size: 16px; }\n\n.switch.switch-large > .switch-pane > span {\n  font-size: 16px; }\n\n.switch {\n  border: 1px solid #dfdfdf;\n  position: relative;\n  display: inline-block;\n  box-sizing: content-box;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n  box-shadow: #dfdfdf 0 0 0 0 inset;\n  transition: 0.3s ease-out all;\n  -webkit-transition: 0.3s ease-out all;\n  white-space: nowrap; }\n\n.switch small {\n    border-radius: 100%;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n    position: absolute;\n    top: 0;\n    right: calc(100% - 30px);\n    transition: 0.3s ease-out all;\n    -webkit-transition: 0.3s ease-out all;\n    background: #fff; }\n\n.switch.switch-small {\n    height: 20px;\n    border-radius: 20px; }\n\n.switch.switch-small small {\n      width: 20px;\n      height: 20px;\n      right: calc(100% - 20px); }\n\n.switch.switch-small > .switch-pane > span {\n      line-height: 20px; }\n\n.switch.switch-small > .switch-pane .switch-label-checked {\n      padding-right: 25px;\n      padding-left: 10px; }\n\n.switch.switch-small > .switch-pane .switch-label-unchecked {\n      padding-left: 25px;\n      padding-right: 10px; }\n\n.switch.switch-medium {\n    height: 30px;\n    border-radius: 30px; }\n\n.switch.switch-medium small {\n      width: 30px;\n      height: 30px;\n      right: calc(100% - 30px); }\n\n.switch.switch-medium > .switch-pane > span {\n      line-height: 30px; }\n\n.switch.switch-medium > .switch-pane .switch-label-checked {\n      padding-right: 35px;\n      padding-left: 15px; }\n\n.switch.switch-medium > .switch-pane .switch-label-unchecked {\n      padding-left: 35px;\n      padding-right: 15px; }\n\n.switch.switch-large {\n    height: 40px;\n    border-radius: 40px; }\n\n.switch.switch-large small {\n      width: 40px;\n      height: 40px;\n      right: calc(100% - 40px); }\n\n.switch.switch-large > .switch-pane > span {\n      line-height: 40px; }\n\n.switch.switch-large > .switch-pane .switch-label-checked {\n      padding-right: 45px;\n      padding-left: 20px; }\n\n.switch.switch-large > .switch-pane .switch-label-unchecked {\n      padding-left: 45px;\n      padding-right: 20px; }\n\n.switch.checked {\n    background: #64bd63; }\n\n.switch.checked small {\n      right: 0;\n      left: auto; }\n\n.switch.checked .switch-pane {\n      top: 0; }\n\n.switch.checked .switch-pane .switch-label-checked {\n        opacity: 1; }\n\n.switch.checked .switch-pane .switch-label-unchecked {\n        opacity: 0; }\n\n.switch.disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n\n.switch .switch-pane {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    min-height: 100%;\n    justify-content: flex-start;\n    align-items: center;\n    top: -100%;\n    position: relative;\n    pointer-events: none; }\n\n.switch .switch-pane > span {\n      display: block;\n      min-height: 100%; }\n\n.switch .switch-pane .switch-label-checked {\n      opacity: 0; }\n\n.switch .switch-pane .switch-label-unchecked {\n      opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlcnhpdXMvZGV2ZWwvbmd4LWNvbXBvbmVudHMvbGlicy9yZWNsYW1pdHV4L3NyYy9zd2l0Y2gvc3dpdGNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBO0VBQ0UsZUFMb0IsRUFBQTs7QUFPdEI7RUFDRSxlQVBvQixFQUFBOztBQVN0QjtFQUNFLGVBVG9CLEVBQUE7O0FBWXRCO0VBQ0UsY0FuQm1CLEVBQUE7O0FBcUJyQjtFQUNFLGVBckJvQixFQUFBOztBQXVCdEI7RUFDRSxlQXZCb0IsRUFBQTs7QUEyRHRCO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGlDQUE0QztFQUM1Qyw2QkFBNkI7RUFDN0IscUNBQXFDO0VBQ3JDLG1CQUFtQixFQUFBOztBQVhyQjtJQWNJLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTix3QkFBd0I7SUFDeEIsNkJBQTZCO0lBQzdCLHFDQUFxQztJQUNyQyxnQkFBZ0IsRUFBQTs7QUFwRGhCO0lBR0UsWUFyQ2dCO0lBc0NoQixtQkF0Q2dCLEVBQUE7O0FBdUNoQjtNQUNFLFdBeENjO01BeUNkLFlBekNjO01BMENkLHdCQUFpQyxFQUFBOztBQUdqQztNQUdFLGlCQWhEWSxFQUFBOztBQW1EWjtNQUNFLG1CQUErQjtNQUMvQixrQkFBb0MsRUFBQTs7QUFFdEM7TUFDRSxrQkFBOEI7TUFDOUIsbUJBQXFDLEVBQUE7O0FBdkI3QztJQUdFLFlBcENnQjtJQXFDaEIsbUJBckNnQixFQUFBOztBQXNDaEI7TUFDRSxXQXZDYztNQXdDZCxZQXhDYztNQXlDZCx3QkFBaUMsRUFBQTs7QUFHakM7TUFHRSxpQkEvQ1ksRUFBQTs7QUFrRFo7TUFDRSxtQkFBK0I7TUFDL0Isa0JBQW9DLEVBQUE7O0FBRXRDO01BQ0Usa0JBQThCO01BQzlCLG1CQUFxQyxFQUFBOztBQXZCN0M7SUFHRSxZQW5DZ0I7SUFvQ2hCLG1CQXBDZ0IsRUFBQTs7QUFxQ2hCO01BQ0UsV0F0Q2M7TUF1Q2QsWUF2Q2M7TUF3Q2Qsd0JBQWlDLEVBQUE7O0FBR2pDO01BR0UsaUJBOUNZLEVBQUE7O0FBaURaO01BQ0UsbUJBQStCO01BQy9CLGtCQUFvQyxFQUFBOztBQUV0QztNQUNFLGtCQUE4QjtNQUM5QixtQkFBcUMsRUFBQTs7QUFRakQ7SUFpQ0ksbUJBQTZCLEVBQUE7O0FBakNqQztNQW1DTSxRQUFRO01BQ1IsVUFBVSxFQUFBOztBQXBDaEI7TUF1Q00sTUFBTSxFQUFBOztBQXZDWjtRQTBDVSxVQUFVLEVBQUE7O0FBMUNwQjtRQTZDVSxVQUFVLEVBQUE7O0FBN0NwQjtJQW9ESSxZQUFZO0lBQ1osbUJBQW1CLEVBQUE7O0FBckR2QjtJQXlESSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG9CQUFvQixFQUFBOztBQWpFeEI7TUFtRU0sY0FBYztNQUNkLGdCQUFnQixFQUFBOztBQXBFdEI7TUF5RVEsVUFBVSxFQUFBOztBQXpFbEI7TUE0RVEsVUFBVSxFQUFBIiwiZmlsZSI6ImxpYnMvcmVjbGFtaXR1eC9zcmMvc3dpdGNoL3N3aXRjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzdy1zbS1rbm9iLXNpemU6IDIwcHggIWRlZmF1bHQ7XG4kc3ctbWQta25vYi1zaXplOiAzMHB4ICFkZWZhdWx0O1xuJHN3LWxnLWtub2Itc2l6ZTogNDBweCAhZGVmYXVsdDtcblxuJHN3LXNtLWZvbnQtc2l6ZTogOXB4ICFkZWZhdWx0O1xuJHN3LW1kLWZvbnQtc2l6ZTogMTZweCAhZGVmYXVsdDtcbiRzdy1sZy1mb250LXNpemU6IDE2cHggIWRlZmF1bHQ7XG5cbiRzdy1zbS1taW4td2lkdGg6IDMzcHg7XG4kc3ctbWQtbWluLXdpZHRoOiA1MHB4O1xuJHN3LWxnLW1pbi13aWR0aDogNjBweDtcblxuJXNtYWxsLXN3aXRjaC1taW4td2lkdGgge1xuICBtaW4td2lkdGg6ICRzdy1zbS1taW4td2lkdGg7XG59XG4lbWVkaXVtLXN3aXRjaC1taW4td2lkdGgge1xuICBtaW4td2lkdGg6ICRzdy1tZC1taW4td2lkdGg7XG59XG4lbGFyZ2Utc3dpdGNoLW1pbi13aWR0aCB7XG4gIG1pbi13aWR0aDogJHN3LWxnLW1pbi13aWR0aDtcbn1cblxuJXNtYWxsLWxhYmVsLWZvbnQtc2l6ZSB7XG4gIGZvbnQtc2l6ZTogJHN3LXNtLWZvbnQtc2l6ZTtcbn1cbiVtZWRpdW0tbGFiZWwtZm9udC1zaXplIHtcbiAgZm9udC1zaXplOiAkc3ctbWQtZm9udC1zaXplO1xufVxuJWxhcmdlLWxhYmVsLWZvbnQtc2l6ZSB7XG4gIGZvbnQtc2l6ZTogJHN3LWxnLWZvbnQtc2l6ZTtcbn1cblxuQG1peGluIGNvbmZpZy1zd2l0Y2gtc2l6ZXMoJHByZWZpeCwgJHNpemVzLi4uKSB7XG4gIEBlYWNoICRpIGluICRzaXplcyB7XG4gICAgJi4jeyRwcmVmaXh9I3tudGgoJGksIDEpfSB7XG4gICAgICAvLyBtaW4td2lkdGggdmlhIHBsYWNlaG9sZGVyXG4gICAgICBAZXh0ZW5kICUjeyBudGgoJGksIDEpIH0tc3dpdGNoLW1pbi13aWR0aDtcbiAgICAgIGhlaWdodDogbnRoKCRpLCAyKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IG50aCgkaSwgMik7XG4gICAgICBzbWFsbCB7XG4gICAgICAgIHdpZHRoOiBudGgoJGksIDIpO1xuICAgICAgICBoZWlnaHQ6IG50aCgkaSwgMik7XG4gICAgICAgIHJpZ2h0OiBjYWxjKDEwMCUgLSAje250aCgkaSwgMil9KTtcbiAgICAgIH1cbiAgICAgID4gLnN3aXRjaC1wYW5lIHtcbiAgICAgICAgPiBzcGFuIHtcbiAgICAgICAgICAvLyBmb250LXNpemUgdmlhIHBsYWNlaG9sZGVyXG4gICAgICAgICAgQGV4dGVuZCAlI3sgbnRoKCRpLCAxKSB9LWxhYmVsLWZvbnQtc2l6ZTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogbnRoKCRpLCAyKTtcbiAgICAgICAgfVxuICAgICAgICAuc3dpdGNoLWxhYmVsIHtcbiAgICAgICAgICAmLWNoZWNrZWQge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogbnRoKCRpLCAyKSArIDVweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogKG50aCgkaSwgMikgLyAzKSAqIDEuNTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJi11bmNoZWNrZWQge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiBudGgoJGksIDIpICsgNXB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogKG50aCgkaSwgMikgLyAzKSAqIDEuNTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnN3aXRjaCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZmRmZGY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IHJnYigyMjMsIDIyMywgMjIzKSAwIDAgMCAwIGluc2V0O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0IGFsbDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0IGFsbDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICBzbWFsbCB7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQgYWxsO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dCBhbGw7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxuXG4gIC8vIHBvcHVsYXRlICYuc21hbGwsICYubWVkaXVtLCAmLmxhcmdlIGNsYXNzZXNcbiAgQGluY2x1ZGUgY29uZmlnLXN3aXRjaC1zaXplcyhcbiAgICAnc3dpdGNoLScsXG4gICAgJ3NtYWxsJyAkc3ctc20ta25vYi1zaXplLFxuICAgICdtZWRpdW0nICRzdy1tZC1rbm9iLXNpemUsXG4gICAgJ2xhcmdlJyAkc3ctbGcta25vYi1zaXplXG4gICk7XG5cbiAgJi5jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTAwLCAxODksIDk5KTtcbiAgICBzbWFsbCB7XG4gICAgICByaWdodDogMDtcbiAgICAgIGxlZnQ6IGF1dG87XG4gICAgfVxuICAgIC5zd2l0Y2gtcGFuZSB7XG4gICAgICB0b3A6IDA7XG4gICAgICAuc3dpdGNoLWxhYmVsIHtcbiAgICAgICAgJi1jaGVja2VkIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICAgICYtdW5jaGVja2VkIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5kaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cblxuICAuc3dpdGNoLXBhbmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0b3A6IC0xMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICA+IHNwYW4ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5zd2l0Y2gtbGFiZWwge1xuICAgICAgJi1jaGVja2VkIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICAgICYtdW5jaGVja2VkIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "../../libs/reclamitux/src/switch/switch.component.ts":
/*!*****************************************************************************************!*\
  !*** /home/serxius/devel/ngx-components/libs/reclamitux/src/switch/switch.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return SwitchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _switch_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./switch.token */ "../../libs/reclamitux/src/switch/switch.token.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");






var UI_SWITCH_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return SwitchComponent; }),
    multi: true
};
var SwitchComponent = /** @class */ (function () {
    function SwitchComponent(config, cdr) {
        if (config === void 0) { config = {}; }
        this.cdr = cdr;
        this.interceptActionCallback = function () { return true; };
        /**
         * Emits changed value
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits DOM event
         */
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits changed value
         */
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /* Debounce toggle action for posible prevent */
        this.clicks = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.onTouchedCallback = function (v) { };
        this.onChangeCallback = function (v) { };
        this.size = (config && config.size) || 'medium';
        this.color = config && config.color;
        this.switchOffColor = config && config.switchOffColor;
        this.switchColor = config && config.switchColor;
        this.defaultBgColor = config && config.defaultBgColor;
        this.defaultBoColor = config && config.defaultBoColor;
        this.checkedLabel = config && config.checkedLabel;
        this.uncheckedLabel = config && config.uncheckedLabel;
    }
    Object.defineProperty(SwitchComponent.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (v) {
            this._checked = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwitchComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (v) {
            this._disabled = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwitchComponent.prototype, "reverse", {
        get: function () {
            return this._reverse;
        },
        set: function (v) {
            this._reverse = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    SwitchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clicks.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(this.interceptActionCallback)).subscribe(function (event) {
            if (_this.disabled) {
                return;
            }
            _this.checked = !_this.checked;
            // Component events
            _this.changeEvent.emit(event);
            _this.change.emit(_this.checked);
            _this.valueChange.emit(_this.checked);
            // value accessor callbacks
            _this.onChangeCallback(_this.checked);
            _this.onTouchedCallback(_this.checked);
            _this.cdr.markForCheck();
        });
    };
    SwitchComponent.prototype.getColor = function (flag) {
        if (flag === void 0) { flag = ''; }
        if (flag === 'borderColor') {
            return this.defaultBoColor;
        }
        if (flag === 'switchColor') {
            if (this.reverse) {
                return !this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
            }
            return this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
        }
        if (this.reverse) {
            return !this.checked ? this.color : this.defaultBgColor;
        }
        return this.checked ? this.color : this.defaultBgColor;
    };
    SwitchComponent.prototype.onToggle = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.clicks.next(event);
    };
    SwitchComponent.prototype.writeValue = function (obj) {
        if (obj !== this.checked) {
            this.checked = !!obj;
        }
        if (this.cdr) {
            this.cdr.markForCheck();
        }
    };
    SwitchComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    SwitchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    SwitchComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SwitchComponent.prototype, "size", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SwitchComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SwitchComponent.prototype, "switchOffColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SwitchComponent.prototype, "switchColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SwitchComponent.prototype, "defaultBgColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SwitchComponent.prototype, "defaultBoColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SwitchComponent.prototype, "checkedLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SwitchComponent.prototype, "uncheckedLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SwitchComponent.prototype, "interceptActionCallback", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SwitchComponent.prototype, "checked", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SwitchComponent.prototype, "disabled", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SwitchComponent.prototype, "reverse", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SwitchComponent.prototype, "change", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SwitchComponent.prototype, "changeEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SwitchComponent.prototype, "valueChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SwitchComponent.prototype, "onToggle", null);
    SwitchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'rclm-switch',
            template: "\n    <span\n      class=\"switch\"\n      [class.checked]=\"checked\"\n      [class.disabled]=\"disabled\"\n      [class.switch-large]=\"size === 'large'\"\n      [class.switch-medium]=\"size === 'medium'\"\n      [class.switch-small]=\"size === 'small'\"\n      [style.background-color]=\"getColor()\"\n      [style.border-color]=\"getColor('borderColor')\"\n    >\n      <span class=\"switch-pane\" *ngIf=\"checkedLabel || uncheckedLabel\">\n        <span class=\"switch-label-checked\">{{ this.checkedLabel }}</span>\n        <span class=\"switch-label-unchecked\">{{ this.uncheckedLabel }}</span>\n      </span>\n      <small [style.background]=\"getColor('switchColor')\">\n        <ng-content></ng-content>\n      </small>\n    </span>\n  ",
            providers: [UI_SWITCH_CONTROL_VALUE_ACCESSOR],
            styles: [__webpack_require__(/*! ./switch.component.scss */ "../../libs/reclamitux/src/switch/switch.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_switch_token__WEBPACK_IMPORTED_MODULE_3__["UI_SWITCH_OPTIONS"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], SwitchComponent);
    return SwitchComponent;
}());



/***/ }),

/***/ "../../libs/reclamitux/src/switch/switch.module.ts":
/*!**************************************************************************************!*\
  !*** /home/serxius/devel/ngx-components/libs/reclamitux/src/switch/switch.module.ts ***!
  \**************************************************************************************/
/*! exports provided: SwitchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchModule", function() { return SwitchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _switch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./switch.component */ "../../libs/reclamitux/src/switch/switch.component.ts");
/* harmony import */ var _switch_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./switch.token */ "../../libs/reclamitux/src/switch/switch.token.ts");






var SwitchModule = /** @class */ (function () {
    function SwitchModule() {
    }
    SwitchModule_1 = SwitchModule;
    SwitchModule.forRoot = function (config) {
        return {
            ngModule: SwitchModule_1,
            providers: [
                { provide: _switch_token__WEBPACK_IMPORTED_MODULE_5__["UI_SWITCH_OPTIONS"], useValue: config || {} }
            ]
        };
    };
    var SwitchModule_1;
    SwitchModule = SwitchModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _switch_component__WEBPACK_IMPORTED_MODULE_4__["SwitchComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _switch_component__WEBPACK_IMPORTED_MODULE_4__["SwitchComponent"]
            ]
        })
    ], SwitchModule);
    return SwitchModule;
}());



/***/ }),

/***/ "../../libs/reclamitux/src/switch/switch.token.ts":
/*!*************************************************************************************!*\
  !*** /home/serxius/devel/ngx-components/libs/reclamitux/src/switch/switch.token.ts ***!
  \*************************************************************************************/
/*! exports provided: UI_SWITCH_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_SWITCH_OPTIONS", function() { return UI_SWITCH_OPTIONS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

var UI_SWITCH_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('UI_SWITCH_OPTIONS');


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-layout>\n  <nb-layout-column>\n    <nb-card>\n      <nb-card-header>\n        <h1 class=\"mb-2\" style=\"line-height: 1.2em;\">\n          <img style=\"width: 300px;\" class=\"mb-4\"\n            src=\"https://reclamador-static.s3.amazonaws.com/static/web/images/logo-reclamador.692ed3f5445c.svg\"/> component library</h1>\n        <h6>Built with Angular CLI app and Nrwl Nx!</h6>\n      </nb-card-header>\n      <nb-card-body>\n\n        <!--ngx-reclamitux-showcase></ngx-reclamitux-showcase-->\n\n        <h2>Spinner component:</h2>\n        <p class=\"mb-1\">Configurable options:</p>\n        <ul>\n          <li>Message text.</li>\n          <li>Spinner color.</li>\n          <li>Fixed full page or block contained layout.</li>\n          <li>Use it as component or directive.</li>\n        </ul>\n\n        <div class=\"row\">\n          <div class=\"col\"\n            style=\"height:300px\"\n            [ngxSpinner]=\"true\"\n            [spinnerFade]=\"false\"\n            [spinnerFixed]=\"false\"\n            spinnerColor=\"red\"\n            spinnerMessage=\"Spinner opaco\">\n          </div>\n\n          <div class=\"col\"\n            style=\"height: 300px;\"\n            [ngxSpinner]=\"true\"\n            [spinnerFade]=\"true\"\n            [spinnerFixed]=\"false\"\n            spinnerColor=\"red\"\n            spinnerMessage=\"Some spinner here\">\n            <p class=\"mt-5 pt-5 h2\">Spinner con transparencia</p>\n          </div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </nb-layout-column>\n</nb-layout>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2RlbW8tcGFnZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "../../node_modules/@nebular/theme/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _libs_reclamitux_src_reclamitux_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../libs/reclamitux/src/reclamitux.module */ "../../libs/reclamitux/src/reclamitux.module.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _libs_reclamitux_src_reclamitux_module__WEBPACK_IMPORTED_MODULE_7__["ReclamituxModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbThemeModule"].forRoot({ name: 'default' }),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/serxius/devel/ngx-components/apps/demo-page/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map