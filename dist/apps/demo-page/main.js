(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../libs/reclamitux/src/lib/reclamitux-showcase/reclamitux-showcase.component.html":
/*!**********************************************************************************************************!*\
  !*** /srv/ngx-components/libs/reclamitux/src/lib/reclamitux-showcase/reclamitux-showcase.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"content-main\">\n  <nb-card>\n    <nb-card-header>\n      <h2>Ejemplos de componentes de Docket</h2>\n    </nb-card-header>\n    <nb-card-body>\n      <nb-accordion>\n        <nb-accordion-item>\n          <nb-accordion-item-header>Headings:</nb-accordion-item-header>\n          <nb-accordion-item-body>\n            <h1>Title h1: Capítulo III. Donde se cuenta la graciosa manera que tuvo don Quijote en armarse caballero</h1>\n            <h2>Title h2: Capítulo IV. De lo que le sucedió a nuestro caballero cuando salió de la venta</h2>\n            <h3>Title h3: Capítulo XIX. De las discretas razones que Sancho pasaba con su amo, y de la aventura que le sucedió con un cuerpo muerto, con otros acontecimientos famosos</h3>\n            <h4>Title h4: Capítulo XX. De la jamás vista ni oída aventura que con más poco peligro fue acabada de famoso caballero en el mundo, como la que acabó el valeroso don Quijote de la Mancha</h4>\n            <h5>Title h5: Capítulo XXI. Que trata de la alta aventura y rica ganancia del yelmo de Mambrino, con otras cosas sucedidas a nuestro invencible caballero</h5>\n            <h6>Title h6: Capítulo XXII. De la libertad que dio don Quijote a muchos desdichados que, mal de su grado, los llevaban donde no quisieran ir</h6>\n            <p>Párrafo</p>\n            <p>El ventero, que vio a su huésped a sus pies y oyó <strong>semejantes razones</strong>, estaba <em>confuso mirándole</em>, sin saber qué hacerse ni decirle, y porfiaba con él que se levantase, y jamás quiso, hasta que le hubo de decir que él le otorgaba el don que le pedía.</p>\n          </nb-accordion-item-body>\n        </nb-accordion-item>\n        <nb-accordion-item>\n          <nb-accordion-item-header>Componentes de formularios:</nb-accordion-item-header>\n          <nb-accordion-item-body>\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Email address</label>\n              <input type=\"email\"\n                  nbInput\n                  class=\"form-control\"\n                  id=\"exampleInputEmail1\"\n                  placeholder=\"Enter email\">\n              <small class=\"form-text\">We'll never share your email with anyone else.</small>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Disabled input</label>\n              <input type=\"email\"\n                  nbInput\n                  disabled\n                  value=\"Valor disabled\"\n                  class=\"form-control\"\n                  id=\"exampleInputEmail1\"\n                  placeholder=\"Enter email\">\n              <small class=\"form-text\">We'll never share your email with anyone else.</small>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Password</label>\n              <input type=\"password\"\n                  nbInput\n                  id=\"exampleInputPassword1\"\n                  class=\"form-control\"\n                  placeholder=\"Password\">\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-12 mb-2\">\n                <h3>Columnas</h3>\n              </div>\n              <div class=\"form-group col-md-4\">\n                <label for=\"sampleSelect\">Un select</label>\n                <!--nb-select\n                    name=\"sampleSelect\"\n                    class=\"form-control\"\n                    placeholder=\"Selecciona algo\"\n                    [(ngModel)]=\"unselect\">\n                  <nb-option [value]=\"somethig\">Una opción</nb-option>\n                  <nb-option [value]=\"somethig2\">Otra opción</nb-option>\n                </nb-select-->\n              </div>\n\n              <div class=\"form-group col-md-4\">\n                <label for=\"exampleInputEmail1\">Readonly input</label>\n                <input type=\"email\"\n                    nbInput\n                    readonly\n                    value=\"Valor Readonly\"\n                    class=\"form-control\"\n                    id=\"exampleInputEmail1\"\n                    placeholder=\"Enter email\">\n                <small class=\"form-text\">We'll never share your email with anyone else.</small>\n              </div>\n            </div>\n\n            <!--h3>Checkboxes</h3>\n\n            <div class=\"form-group\">\n              <nb-checkbox>Un checkbox</nb-checkbox>\n            </div>\n            <div class=\"form-group\">\n              <nb-checkbox disabled\n                  value=\"true\">Un checkbox disbled</nb-checkbox>\n            </div>\n            <div class=\"form-group\">\n              <nb-checkbox>Unos</nb-checkbox>\n              <nb-checkbox\n                  value=\"true\">cuantos</nb-checkbox>\n              <nb-checkbox\n                  value=\"true\">checkbox</nb-checkbox>\n              <nb-checkbox\n                  status=\"warning\">inline</nb-checkbox>\n              <nb-checkbox\n                  status=\"danger\">y</nb-checkbox>\n              <nb-checkbox\n                  status=\"sucess\">con colores</nb-checkbox>\n            </div>\n\n            <h3>Radios</h3>\n            <div class=\"form-group\">\n              <label>Opciones inline:</label>\n              <div>\n                <nb-radio-group [(ngModel)]=\"radio1\">\n                  <nb-radio class=\"d-inline\"\n                      [value]=\"1\">Opción 1</nb-radio>\n                  <nb-radio class=\"d-inline\"\n                      [value]=\"2\">Opción 2</nb-radio>\n                </nb-radio-group>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label>Opciones vertical:</label>\n              <nb-radio-group [(ngModel)]=\"radio2\">\n                <nb-radio [value]=\"1\">Opción 1</nb-radio>\n                <nb-radio [value]=\"2\"\n                    disabled>Opción disabled</nb-radio>\n              </nb-radio-group>\n            </div>\n\n            <h3>Butones</h3>\n            <p>No he conseguido ver las ventajas de nbButton sobre un botón sin más, pero anyway.</p>\n            <div class=\"row\">\n              <div class=\"md-col-6\">\n                <button class=\"mb-2 mr-2 btn btn-outline-primary btn-round\">Active</button>\n\n                <button class=\"mb-2 mr-2 btn btn-outline-primary btn-round\"\n                    disabled>Disabled</button>\n\n                <button class=\"mb-2 mr-2 btn btn-primary btn-round\"\n                    disabled>Disabled fille</button>\n\n                <button class=\"mb-2 mr-2 btn btn-secondary btn-round\">Disabled</button>\n\n                <button class=\"mb-2 mr-2 btn btn-danger btn-round\">Disabled</button>\n\n                <button class=\"mb-2 mr-2 btn btn-warning btn-round\">Warning</button>\n\n                <button class=\"mb-2 mr-2 btn btn-primary btn-round\">Disabled fille</button>\n\n                <button class=\"mb-2 mr-2 btn btn-outline-danger btn-round\">Disabled</button>\n\n                <button class=\"mb-2 mr-2 btn btn-outline-secondary btn-round\">Secondary fille</button>\n\n                <button disabled\n                    class=\"mb-2 mr-2 btn btn-danger btn-round\">Disabled</button>\n\n                <button class=\"mb-2 mr-2 btn btn-warning btn-round\">Warning</button>\n\n                <button type=\"submit\"\n                    outline\n                    shape=\"round\"\n                    class=\"btn btn-primary mb-2 mr-2\">Submit</button>\n              </div>\n            </div>\n\n            <p>Tenemos la clase <strong>btn-icon</strong> para poner los iconos grande como en los bocetos y <strong>btn-icon-round</strong> para hacerlos completamente redondos.</p>\n\n            <div class=\"row\">\n              <div class=\"md-col-6\">\n\n                <button class=\"mb-2 mr-2 btn btn-outline-warning btn-round btn-icon\">\n                  <i class=\"icon pe-7s-bandaid\"></i>\n                </button>\n\n                <button class=\"mb-2 mr-2 btn btn-outline-primary btn-round\">\n                  <i class=\"icon pe-7s-piggy\"></i>\n                </button>\n              </div>\n            </div-->\n\n          </nb-accordion-item-body>\n        </nb-accordion-item>\n        <!--nb-accordion-item>\n          <nb-accordion-item-header>Ejemplos Toast:</nb-accordion-item-header>\n          <nb-accordion-item-body>\n            <button class=\"btn btn-primary mr-2 mb-2\" (click)=\"showModal('Prueba modal base')\">Modal basico</button>\n            <button class=\"btn btn-primary mr-2 mb-2\" (click)=\"showModal('Prueba modal base', 'danger')\">Modal 'danger'</button>\n            <button class=\"btn btn-primary mr-2 mb-2\" (click)=\"showModal('Prueba modal base', undefined, 'pe-7s-bandaid')\">Modal con icono <span>(pe-icon font)</span></button>\n            <button class=\"btn btn-primary mr-2 mb-2\" (click)=\"showModal('Prueba modal base', undefined, 'fa fa-plane')\">Modal con icono <span>(font awesome)</span></button>\n            <button class=\"btn btn-primary mr-2 mb-2\" (click)=\"showModal('Prueba modal base', 'TypeError')\">Tipo no soportado</button>\n          </nb-accordion-item-body>\n        </nb-accordion-item-->\n        <nb-accordion-item>\n          <nb-accordion-item-header>Chuletas de iconos:</nb-accordion-item-header>\n          <nb-accordion-item-body>\n            <ul>\n              <li>Nebular: <a target=\"_blank\" href=\"http://akveo.com/ngx-admin/pages/ui-features/icons\">http://akveo.com/ngx-admin/pages/ui-features/icons</a></li>\n              <li>Font awesome: <a target=\"_blank\" href=\"https://fontawesome.com/icons?d=gallery\">https://fontawesome.com/icons?d=gallery</a></li>\n              <li>icon font pack: <a target=\"_blank\" href=\"https://themes-pixeden.com/font-demos/7-stroke/\">https://themes-pixeden.com/font-demos/7-stroke/</a></li>\n            </ul>\n          </nb-accordion-item-body>\n        </nb-accordion-item>\n      </nb-accordion>\n    </nb-card-body>\n  </nb-card>\n</div>\n"

/***/ }),

/***/ "../../libs/reclamitux/src/lib/reclamitux-showcase/reclamitux-showcase.component.ts":
/*!********************************************************************************************************!*\
  !*** /srv/ngx-components/libs/reclamitux/src/lib/reclamitux-showcase/reclamitux-showcase.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ReclamituxShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReclamituxShowcaseComponent", function() { return ReclamituxShowcaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ReclamituxShowcaseComponent = /** @class */ (function () {
    function ReclamituxShowcaseComponent() {
    }
    ReclamituxShowcaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-reclamitux-showcase',
            template: __webpack_require__(/*! ./reclamitux-showcase.component.html */ "../../libs/reclamitux/src/lib/reclamitux-showcase/reclamitux-showcase.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReclamituxShowcaseComponent);
    return ReclamituxShowcaseComponent;
}());



/***/ }),

/***/ "../../libs/reclamitux/src/lib/reclamitux.module.ts":
/*!************************************************************************!*\
  !*** /srv/ngx-components/libs/reclamitux/src/lib/reclamitux.module.ts ***!
  \************************************************************************/
/*! exports provided: ReclamituxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReclamituxModule", function() { return ReclamituxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "../../node_modules/@nebular/theme/index.js");
/* harmony import */ var _reclamitux_showcase_reclamitux_showcase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reclamitux-showcase/reclamitux-showcase.component */ "../../libs/reclamitux/src/lib/reclamitux-showcase/reclamitux-showcase.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spinner/spinner.component */ "../../libs/reclamitux/src/lib/spinner/spinner.component.ts");
/* harmony import */ var _spinner_spinner_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spinner/spinner.directive */ "../../libs/reclamitux/src/lib/spinner/spinner.directive.ts");







var ReclamituxModule = /** @class */ (function () {
    function ReclamituxModule() {
    }
    ReclamituxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectModule"]
            ],
            declarations: [
                _reclamitux_showcase_reclamitux_showcase_component__WEBPACK_IMPORTED_MODULE_4__["ReclamituxShowcaseComponent"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__["SpinnerComponent"],
                _spinner_spinner_directive__WEBPACK_IMPORTED_MODULE_6__["SpinnerDirective"]
            ],
            exports: [
                _reclamitux_showcase_reclamitux_showcase_component__WEBPACK_IMPORTED_MODULE_4__["ReclamituxShowcaseComponent"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectModule"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__["SpinnerComponent"],
                _spinner_spinner_directive__WEBPACK_IMPORTED_MODULE_6__["SpinnerDirective"]
            ],
            entryComponents: [
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__["SpinnerComponent"]
            ]
        })
    ], ReclamituxModule);
    return ReclamituxModule;
}());



/***/ }),

/***/ "../../libs/reclamitux/src/lib/spinner/spinner.component.scss":
/*!**********************************************************************************!*\
  !*** /srv/ngx-components/libs/reclamitux/src/lib/spinner/spinner.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-spinner {\n  opacity: 0.48;\n  background: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: 100; }\n  .home-spinner span {\n    display: block;\n    width: 14px;\n    height: 26px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    margin-top: -13px;\n    margin-left: -8px;\n    border-radius: 5px;\n    background-color: #6699ff;\n    opacity: 0;\n    -webkit-animation: fade 3s linear infinite;\n            animation: fade 3s linear infinite; }\n  .home-spinner span:nth-child(0) {\n    -webkit-transform: rotate(0deg) translateY(56px);\n            transform: rotate(0deg) translateY(56px);\n    -webkit-animation-delay: 0s;\n            animation-delay: 0s; }\n  .home-spinner span:nth-child(1) {\n    -webkit-transform: rotate(30deg) translateY(56px);\n            transform: rotate(30deg) translateY(56px);\n    -webkit-animation-delay: 0.25s;\n            animation-delay: 0.25s; }\n  .home-spinner span:nth-child(2) {\n    -webkit-transform: rotate(60deg) translateY(56px);\n            transform: rotate(60deg) translateY(56px);\n    -webkit-animation-delay: 0.5s;\n            animation-delay: 0.5s; }\n  .home-spinner span:nth-child(3) {\n    -webkit-transform: rotate(90deg) translateY(56px);\n            transform: rotate(90deg) translateY(56px);\n    -webkit-animation-delay: 0.75s;\n            animation-delay: 0.75s; }\n  .home-spinner span:nth-child(4) {\n    -webkit-transform: rotate(120deg) translateY(56px);\n            transform: rotate(120deg) translateY(56px);\n    -webkit-animation-delay: 1s;\n            animation-delay: 1s; }\n  .home-spinner span:nth-child(5) {\n    -webkit-transform: rotate(150deg) translateY(56px);\n            transform: rotate(150deg) translateY(56px);\n    -webkit-animation-delay: 1.25s;\n            animation-delay: 1.25s; }\n  .home-spinner span:nth-child(6) {\n    -webkit-transform: rotate(180deg) translateY(56px);\n            transform: rotate(180deg) translateY(56px);\n    -webkit-animation-delay: 1.5s;\n            animation-delay: 1.5s; }\n  .home-spinner span:nth-child(7) {\n    -webkit-transform: rotate(210deg) translateY(56px);\n            transform: rotate(210deg) translateY(56px);\n    -webkit-animation-delay: 1.75s;\n            animation-delay: 1.75s; }\n  .home-spinner span:nth-child(8) {\n    -webkit-transform: rotate(240deg) translateY(56px);\n            transform: rotate(240deg) translateY(56px);\n    -webkit-animation-delay: 2s;\n            animation-delay: 2s; }\n  .home-spinner span:nth-child(9) {\n    -webkit-transform: rotate(270deg) translateY(56px);\n            transform: rotate(270deg) translateY(56px);\n    -webkit-animation-delay: 2.25s;\n            animation-delay: 2.25s; }\n  .home-spinner span:nth-child(10) {\n    -webkit-transform: rotate(300deg) translateY(56px);\n            transform: rotate(300deg) translateY(56px);\n    -webkit-animation-delay: 2.5s;\n            animation-delay: 2.5s; }\n  .home-spinner span:nth-child(11) {\n    -webkit-transform: rotate(330deg) translateY(56px);\n            transform: rotate(330deg) translateY(56px);\n    -webkit-animation-delay: 2.75s;\n            animation-delay: 2.75s; }\n  .home-spinner span:nth-child(12) {\n    -webkit-transform: rotate(360deg) translateY(56px);\n            transform: rotate(360deg) translateY(56px);\n    -webkit-animation-delay: 3s;\n            animation-delay: 3s; }\n  .message {\n  position: fixed;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  margin-top: 90px;\n  overflow: hidden;\n  z-index: 100;\n  text-align: center; }\n  @-webkit-keyframes fade {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n  @keyframes fade {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zcnYvbmd4LWNvbXBvbmVudHMvbGlicy9yZWNsYW1pdHV4L3NyYy9saWIvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUVqQixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7RUFWZDtJQWFJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQXhCZTtJQXlCZixVQUFVO0lBQ1YsMENBQWtEO1lBQWxELGtDQUFrRCxFQUFBO0VBeEJ0RDtJQTZCTSxnREFBcUU7WUFBckUsd0NBQXFFO0lBQ3JFLDJCQUFpQjtZQUFqQixtQkFBaUIsRUFBQTtFQTlCdkI7SUE2Qk0saURBQXFFO1lBQXJFLHlDQUFxRTtJQUNyRSw4QkFBaUI7WUFBakIsc0JBQWlCLEVBQUE7RUE5QnZCO0lBNkJNLGlEQUFxRTtZQUFyRSx5Q0FBcUU7SUFDckUsNkJBQWlCO1lBQWpCLHFCQUFpQixFQUFBO0VBOUJ2QjtJQTZCTSxpREFBcUU7WUFBckUseUNBQXFFO0lBQ3JFLDhCQUFpQjtZQUFqQixzQkFBaUIsRUFBQTtFQTlCdkI7SUE2Qk0sa0RBQXFFO1lBQXJFLDBDQUFxRTtJQUNyRSwyQkFBaUI7WUFBakIsbUJBQWlCLEVBQUE7RUE5QnZCO0lBNkJNLGtEQUFxRTtZQUFyRSwwQ0FBcUU7SUFDckUsOEJBQWlCO1lBQWpCLHNCQUFpQixFQUFBO0VBOUJ2QjtJQTZCTSxrREFBcUU7WUFBckUsMENBQXFFO0lBQ3JFLDZCQUFpQjtZQUFqQixxQkFBaUIsRUFBQTtFQTlCdkI7SUE2Qk0sa0RBQXFFO1lBQXJFLDBDQUFxRTtJQUNyRSw4QkFBaUI7WUFBakIsc0JBQWlCLEVBQUE7RUE5QnZCO0lBNkJNLGtEQUFxRTtZQUFyRSwwQ0FBcUU7SUFDckUsMkJBQWlCO1lBQWpCLG1CQUFpQixFQUFBO0VBOUJ2QjtJQTZCTSxrREFBcUU7WUFBckUsMENBQXFFO0lBQ3JFLDhCQUFpQjtZQUFqQixzQkFBaUIsRUFBQTtFQTlCdkI7SUE2Qk0sa0RBQXFFO1lBQXJFLDBDQUFxRTtJQUNyRSw2QkFBaUI7WUFBakIscUJBQWlCLEVBQUE7RUE5QnZCO0lBNkJNLGtEQUFxRTtZQUFyRSwwQ0FBcUU7SUFDckUsOEJBQWlCO1lBQWpCLHNCQUFpQixFQUFBO0VBOUJ2QjtJQTZCTSxrREFBcUU7WUFBckUsMENBQXFFO0lBQ3JFLDJCQUFpQjtZQUFqQixtQkFBaUIsRUFBQTtFQUt2QjtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsT0FBTztFQUNQLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0IsRUFBQTtFQUdwQjtFQUNFO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxVQUFVLEVBQUEsRUFBQTtFQUxkO0VBQ0U7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQSxFQUFBIiwiZmlsZSI6ImxpYnMvcmVjbGFtaXR1eC9zcmMvbGliL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgaXMgaW5jbHVkZWQgaW5saW5lIGluIGluZGV4Lmh0bWwsIGhlcmUgYXMgYSByZWZlcmVuY2UgdG8gY2hhbmdlaXRcbiRzcGlubmVyLWVsZW1lbnRzOiAxMjtcbiRzcGlubmVyLXRpbWU6IDM7XG4kc29mdC1ibHVlOiAjNjY5OWZmOyAvLyDDsWFwZWRcblxuLmhvbWUtc3Bpbm5lciB7XG4gIG9wYWNpdHk6IDAuNDg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxMDA7XG5cbiAgc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDE0cHg7XG4gICAgaGVpZ2h0OiAyNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTEzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzb2Z0LWJsdWU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb246IGZhZGUgI3skc3Bpbm5lci10aW1lfXMgbGluZWFyIGluZmluaXRlO1xuICB9XG5cbiAgQGZvciAkaSBmcm9tIDAgdGhyb3VnaCAkc3Bpbm5lci1lbGVtZW50cyB7XG4gICAgc3BhbjpudGgtY2hpbGQoI3skaX0pIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKCN7MzYwKiRpLyRzcGlubmVyLWVsZW1lbnRzfWRlZykgdHJhbnNsYXRlWSg1NnB4KTtcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogI3skaSokc3Bpbm5lci10aW1lLyRzcGlubmVyLWVsZW1lbnRzfXM7XG4gICAgfVxuICB9XG59XG5cbi5tZXNzYWdlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDkwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDEwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "../../libs/reclamitux/src/lib/spinner/spinner.component.ts":
/*!********************************************************************************!*\
  !*** /srv/ngx-components/libs/reclamitux/src/lib/spinner/spinner.component.ts ***!
  \********************************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");

/**
 * Copypasted from nebular nbSpinner so we can use our own html
 */

var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
        this.message = 'Cargando...';
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SpinnerComponent.prototype, "message", void 0);
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-spinner',
            template: "\n    <div class=\"home-spinner\">\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n    <div class=\"message\" *ngIf=\"message\">{{ message }}</div>\n  ",
            styles: [__webpack_require__(/*! ./spinner.component.scss */ "../../libs/reclamitux/src/lib/spinner/spinner.component.scss")]
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "../../libs/reclamitux/src/lib/spinner/spinner.directive.ts":
/*!********************************************************************************!*\
  !*** /srv/ngx-components/libs/reclamitux/src/lib/spinner/spinner.directive.ts ***!
  \********************************************************************************/
/*! exports provided: SpinnerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerDirective", function() { return SpinnerDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner.component */ "../../libs/reclamitux/src/lib/spinner/spinner.component.ts");

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
        typeof this.spinnerMessage !== 'undefined' && (instance.message = this.spinnerMessage);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.nb-spinner-container'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpinnerDirective.prototype, "isSpinnerExist", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('spinnerMessage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SpinnerDirective.prototype, "spinnerMessage", void 0);
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

module.exports = "<nb-layout>\n\n  <nb-layout-header fixed>\n  <!-- Insert header here -->\n  </nb-layout-header>\n\n  <nb-layout-column>\n\n    <div style=\"text-align:center\">\n      <h1>Welcome to {{ title }}!</h1>\n      <img\n        width=\"300\"\n        src=\"https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png\"\n      />\n    </div>\n    \n    <h2>This is an Angular CLI app built with Nrwl Nx!</h2>\n    \n    An open source toolkit for enterprise Angular applications. Nx is designed to\n    help you create and build enterprise grade Angular applications. It provides an\n    opinionated approach to application project structure and patterns.\n    \n    <h2>Quick Start & Documentation</h2>\n    \n    <a href=\"https://nrwl.io/nx\"\n      >Watch a 5-minute video on how to get started with Nx.</a\n    >\n    \n    <ngx-reclamitux-showcase></ngx-reclamitux-showcase>\n    <div style=\"height:300px\"\n      ngxSpinner=\"True\"\n      spinnerMessage=\"Some spinner here\">\n    </div>\n  </nb-layout-column>\n\n  <nb-layout-footer fixed>\n  <!-- Insert footer here -->\n  </nb-layout-footer>\n\n</nb-layout>\n"

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
        this.title = 'demo-page';
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
/* harmony import */ var _libs_reclamitux_src_lib_reclamitux_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../libs/reclamitux/src/lib/reclamitux.module */ "../../libs/reclamitux/src/lib/reclamitux.module.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _libs_reclamitux_src_lib_reclamitux_module__WEBPACK_IMPORTED_MODULE_7__["ReclamituxModule"],
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

module.exports = __webpack_require__(/*! /srv/ngx-components/apps/demo-page/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map