(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../libs/reclamitux/src/lib/reclamitux-showcase/reclamitux-showcase.component.html":
/*!**********************************************************************************************************!*\
  !*** /srv/ngx-components/libs/reclamitux/src/lib/reclamitux-showcase/reclamitux-showcase.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-accordion>\n  <nb-accordion-item>\n    <nb-accordion-item-header>Headings:</nb-accordion-item-header>\n    <nb-accordion-item-body>\n      <h1>Title h1: Capítulo III. Donde se cuenta la graciosa manera que tuvo don Quijote en armarse caballero</h1>\n      <h2>Title h2: Capítulo IV. De lo que le sucedió a nuestro caballero cuando salió de la venta</h2>\n      <h3>Title h3: Capítulo XIX. De las discretas razones que Sancho pasaba con su amo, y de la aventura que le sucedió con un cuerpo muerto, con otros acontecimientos famosos</h3>\n      <h4>Title h4: Capítulo XX. De la jamás vista ni oída aventura que con más poco peligro fue acabada de famoso caballero en el mundo, como la que acabó el valeroso don Quijote de la Mancha</h4>\n      <h5>Title h5: Capítulo XXI. Que trata de la alta aventura y rica ganancia del yelmo de Mambrino, con otras cosas sucedidas a nuestro invencible caballero</h5>\n      <h6>Title h6: Capítulo XXII. De la libertad que dio don Quijote a muchos desdichados que, mal de su grado, los llevaban donde no quisieran ir</h6>\n      <p>Párrafo</p>\n      <p>El ventero, que vio a su huésped a sus pies y oyó <strong>semejantes razones</strong>, estaba <em>confuso mirándole</em>, sin saber qué hacerse ni decirle, y porfiaba con él que se levantase, y jamás quiso, hasta que le hubo de decir que él le otorgaba el don que le pedía.</p>\n    </nb-accordion-item-body>\n  </nb-accordion-item>\n  <nb-accordion-item>\n    <nb-accordion-item-header>Componentes de formularios:</nb-accordion-item-header>\n    <nb-accordion-item-body>\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Email address</label>\n        <input type=\"email\"\n            nbInput\n            class=\"form-control\"\n            id=\"exampleInputEmail1\"\n            placeholder=\"Enter email\">\n        <small class=\"form-text\">We'll never share your email with anyone else.</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Disabled input</label>\n        <input type=\"email\"\n            nbInput\n            disabled\n            value=\"Valor disabled\"\n            class=\"form-control\"\n            id=\"exampleInputEmail1\"\n            placeholder=\"Enter email\">\n        <small class=\"form-text\">We'll never share your email with anyone else.</small>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Password</label>\n        <input type=\"password\"\n            nbInput\n            id=\"exampleInputPassword1\"\n            class=\"form-control\"\n            placeholder=\"Password\">\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-12 mb-2\">\n          <h3>Columnas</h3>\n        </div>\n        <div class=\"form-group col-md-4\">\n          <label for=\"sampleSelect\">Un select</label>\n          <!--nb-select\n              name=\"sampleSelect\"\n              class=\"form-control\"\n              placeholder=\"Selecciona algo\"\n              [(ngModel)]=\"unselect\">\n            <nb-option [value]=\"somethig\">Una opción</nb-option>\n            <nb-option [value]=\"somethig2\">Otra opción</nb-option>\n          </nb-select-->\n        </div>\n\n        <div class=\"form-group col-md-4\">\n          <label for=\"exampleInputEmail1\">Readonly input</label>\n          <input type=\"email\"\n              nbInput\n              readonly\n              value=\"Valor Readonly\"\n              class=\"form-control\"\n              id=\"exampleInputEmail1\"\n              placeholder=\"Enter email\">\n          <small class=\"form-text\">We'll never share your email with anyone else.</small>\n        </div>\n      </div>\n\n      <!--h3>Checkboxes</h3>\n\n      <div class=\"form-group\">\n        <nb-checkbox>Un checkbox</nb-checkbox>\n      </div>\n      <div class=\"form-group\">\n        <nb-checkbox disabled\n            value=\"true\">Un checkbox disbled</nb-checkbox>\n      </div>\n      <div class=\"form-group\">\n        <nb-checkbox>Unos</nb-checkbox>\n        <nb-checkbox\n            value=\"true\">cuantos</nb-checkbox>\n        <nb-checkbox\n            value=\"true\">checkbox</nb-checkbox>\n        <nb-checkbox\n            status=\"warning\">inline</nb-checkbox>\n        <nb-checkbox\n            status=\"danger\">y</nb-checkbox>\n        <nb-checkbox\n            status=\"sucess\">con colores</nb-checkbox>\n      </div>\n\n      <h3>Radios</h3>\n      <div class=\"form-group\">\n        <label>Opciones inline:</label>\n        <div>\n          <nb-radio-group [(ngModel)]=\"radio1\">\n            <nb-radio class=\"d-inline\"\n                [value]=\"1\">Opción 1</nb-radio>\n            <nb-radio class=\"d-inline\"\n                [value]=\"2\">Opción 2</nb-radio>\n          </nb-radio-group>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Opciones vertical:</label>\n        <nb-radio-group [(ngModel)]=\"radio2\">\n          <nb-radio [value]=\"1\">Opción 1</nb-radio>\n          <nb-radio [value]=\"2\"\n              disabled>Opción disabled</nb-radio>\n        </nb-radio-group>\n      </div>\n\n      <h3>Butones</h3>\n      <p>No he conseguido ver las ventajas de nbButton sobre un botón sin más, pero anyway.</p>\n      <div class=\"row\">\n        <div class=\"md-col-6\">\n          <button class=\"mb-2 mr-2 btn btn-outline-primary btn-round\">Active</button>\n\n          <button class=\"mb-2 mr-2 btn btn-outline-primary btn-round\"\n              disabled>Disabled</button>\n\n          <button class=\"mb-2 mr-2 btn btn-primary btn-round\"\n              disabled>Disabled fille</button>\n\n          <button class=\"mb-2 mr-2 btn btn-secondary btn-round\">Disabled</button>\n\n          <button class=\"mb-2 mr-2 btn btn-danger btn-round\">Disabled</button>\n\n          <button class=\"mb-2 mr-2 btn btn-warning btn-round\">Warning</button>\n\n          <button class=\"mb-2 mr-2 btn btn-primary btn-round\">Disabled fille</button>\n\n          <button class=\"mb-2 mr-2 btn btn-outline-danger btn-round\">Disabled</button>\n\n          <button class=\"mb-2 mr-2 btn btn-outline-secondary btn-round\">Secondary fille</button>\n\n          <button disabled\n              class=\"mb-2 mr-2 btn btn-danger btn-round\">Disabled</button>\n\n          <button class=\"mb-2 mr-2 btn btn-warning btn-round\">Warning</button>\n\n          <button type=\"submit\"\n              outline\n              shape=\"round\"\n              class=\"btn btn-primary mb-2 mr-2\">Submit</button>\n        </div>\n      </div>\n\n      <p>Tenemos la clase <strong>btn-icon</strong> para poner los iconos grande como en los bocetos y <strong>btn-icon-round</strong> para hacerlos completamente redondos.</p>\n\n      <div class=\"row\">\n        <div class=\"md-col-6\">\n\n          <button class=\"mb-2 mr-2 btn btn-outline-warning btn-round btn-icon\">\n            <i class=\"icon pe-7s-bandaid\"></i>\n          </button>\n\n          <button class=\"mb-2 mr-2 btn btn-outline-primary btn-round\">\n            <i class=\"icon pe-7s-piggy\"></i>\n          </button>\n        </div>\n      </div-->\n\n    </nb-accordion-item-body>\n  </nb-accordion-item>\n  <!--nb-accordion-item>\n    <nb-accordion-item-header>Ejemplos Toast:</nb-accordion-item-header>\n    <nb-accordion-item-body>\n      <button class=\"btn btn-primary mr-2 mb-2\" (click)=\"showModal('Prueba modal base')\">Modal basico</button>\n      <button class=\"btn btn-primary mr-2 mb-2\" (click)=\"showModal('Prueba modal base', 'danger')\">Modal 'danger'</button>\n      <button class=\"btn btn-primary mr-2 mb-2\" (click)=\"showModal('Prueba modal base', undefined, 'pe-7s-bandaid')\">Modal con icono <span>(pe-icon font)</span></button>\n      <button class=\"btn btn-primary mr-2 mb-2\" (click)=\"showModal('Prueba modal base', undefined, 'fa fa-plane')\">Modal con icono <span>(font awesome)</span></button>\n      <button class=\"btn btn-primary mr-2 mb-2\" (click)=\"showModal('Prueba modal base', 'TypeError')\">Tipo no soportado</button>\n    </nb-accordion-item-body>\n  </nb-accordion-item-->\n  <nb-accordion-item>\n    <nb-accordion-item-header>Chuletas de iconos:</nb-accordion-item-header>\n    <nb-accordion-item-body>\n      <ul>\n        <li>Nebular: <a target=\"_blank\" href=\"http://akveo.com/ngx-admin/pages/ui-features/icons\">http://akveo.com/ngx-admin/pages/ui-features/icons</a></li>\n        <li>Font awesome: <a target=\"_blank\" href=\"https://fontawesome.com/icons?d=gallery\">https://fontawesome.com/icons?d=gallery</a></li>\n        <li>icon font pack: <a target=\"_blank\" href=\"https://themes-pixeden.com/font-demos/7-stroke/\">https://themes-pixeden.com/font-demos/7-stroke/</a></li>\n      </ul>\n    </nb-accordion-item-body>\n  </nb-accordion-item>\n</nb-accordion>"

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

module.exports = ":host {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: 100; }\n  :host.faded .home-spinner {\n    opacity: 0.48; }\n  :host.fixed .home-spinner, :host.fixed .message {\n    position: fixed; }\n  :host .home-spinner {\n    opacity: 1;\n    background: white;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n  :host .home-spinner span {\n      display: block;\n      width: 14px;\n      height: 26px;\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      margin-top: -13px;\n      margin-left: -8px;\n      border-radius: 5px;\n      opacity: 0;\n      -webkit-animation: fade 3s linear infinite;\n              animation: fade 3s linear infinite; }\n  :host .home-spinner span:nth-child(0) {\n      -webkit-transform: rotate(0deg) translateY(56px);\n              transform: rotate(0deg) translateY(56px);\n      -webkit-animation-delay: 0s;\n              animation-delay: 0s; }\n  :host .home-spinner span:nth-child(1) {\n      -webkit-transform: rotate(30deg) translateY(56px);\n              transform: rotate(30deg) translateY(56px);\n      -webkit-animation-delay: 0.25s;\n              animation-delay: 0.25s; }\n  :host .home-spinner span:nth-child(2) {\n      -webkit-transform: rotate(60deg) translateY(56px);\n              transform: rotate(60deg) translateY(56px);\n      -webkit-animation-delay: 0.5s;\n              animation-delay: 0.5s; }\n  :host .home-spinner span:nth-child(3) {\n      -webkit-transform: rotate(90deg) translateY(56px);\n              transform: rotate(90deg) translateY(56px);\n      -webkit-animation-delay: 0.75s;\n              animation-delay: 0.75s; }\n  :host .home-spinner span:nth-child(4) {\n      -webkit-transform: rotate(120deg) translateY(56px);\n              transform: rotate(120deg) translateY(56px);\n      -webkit-animation-delay: 1s;\n              animation-delay: 1s; }\n  :host .home-spinner span:nth-child(5) {\n      -webkit-transform: rotate(150deg) translateY(56px);\n              transform: rotate(150deg) translateY(56px);\n      -webkit-animation-delay: 1.25s;\n              animation-delay: 1.25s; }\n  :host .home-spinner span:nth-child(6) {\n      -webkit-transform: rotate(180deg) translateY(56px);\n              transform: rotate(180deg) translateY(56px);\n      -webkit-animation-delay: 1.5s;\n              animation-delay: 1.5s; }\n  :host .home-spinner span:nth-child(7) {\n      -webkit-transform: rotate(210deg) translateY(56px);\n              transform: rotate(210deg) translateY(56px);\n      -webkit-animation-delay: 1.75s;\n              animation-delay: 1.75s; }\n  :host .home-spinner span:nth-child(8) {\n      -webkit-transform: rotate(240deg) translateY(56px);\n              transform: rotate(240deg) translateY(56px);\n      -webkit-animation-delay: 2s;\n              animation-delay: 2s; }\n  :host .home-spinner span:nth-child(9) {\n      -webkit-transform: rotate(270deg) translateY(56px);\n              transform: rotate(270deg) translateY(56px);\n      -webkit-animation-delay: 2.25s;\n              animation-delay: 2.25s; }\n  :host .home-spinner span:nth-child(10) {\n      -webkit-transform: rotate(300deg) translateY(56px);\n              transform: rotate(300deg) translateY(56px);\n      -webkit-animation-delay: 2.5s;\n              animation-delay: 2.5s; }\n  :host .home-spinner span:nth-child(11) {\n      -webkit-transform: rotate(330deg) translateY(56px);\n              transform: rotate(330deg) translateY(56px);\n      -webkit-animation-delay: 2.75s;\n              animation-delay: 2.75s; }\n  :host .home-spinner span:nth-child(12) {\n      -webkit-transform: rotate(360deg) translateY(56px);\n              transform: rotate(360deg) translateY(56px);\n      -webkit-animation-delay: 3s;\n              animation-delay: 3s; }\n  :host .message {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    width: 100%;\n    margin-top: 90px;\n    overflow: hidden;\n    z-index: 100;\n    text-align: center; }\n  @-webkit-keyframes fade {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n  @keyframes fade {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zcnYvbmd4LWNvbXBvbmVudHMvbGlicy9yZWNsYW1pdHV4L3NyYy9saWIvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBO0VBUGQ7SUFVSSxhQUNGLEVBQUE7RUFYRjtJQWVNLGVBQWUsRUFBQTtFQWZyQjtJQW9CSSxVQUFVO0lBQ1YsaUJBQWlCO0lBRWpCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUEzQmhCO01BOEJNLGNBQWM7TUFDZCxXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsUUFBUTtNQUNSLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLFVBQVU7TUFDViwwQ0FBa0Q7Y0FBbEQsa0NBQWtELEVBQUE7RUF4Q3hEO01BNkNRLGdEQUFxRTtjQUFyRSx3Q0FBcUU7TUFDckUsMkJBQWlCO2NBQWpCLG1CQUFpQixFQUFBO0VBOUN6QjtNQTZDUSxpREFBcUU7Y0FBckUseUNBQXFFO01BQ3JFLDhCQUFpQjtjQUFqQixzQkFBaUIsRUFBQTtFQTlDekI7TUE2Q1EsaURBQXFFO2NBQXJFLHlDQUFxRTtNQUNyRSw2QkFBaUI7Y0FBakIscUJBQWlCLEVBQUE7RUE5Q3pCO01BNkNRLGlEQUFxRTtjQUFyRSx5Q0FBcUU7TUFDckUsOEJBQWlCO2NBQWpCLHNCQUFpQixFQUFBO0VBOUN6QjtNQTZDUSxrREFBcUU7Y0FBckUsMENBQXFFO01BQ3JFLDJCQUFpQjtjQUFqQixtQkFBaUIsRUFBQTtFQTlDekI7TUE2Q1Esa0RBQXFFO2NBQXJFLDBDQUFxRTtNQUNyRSw4QkFBaUI7Y0FBakIsc0JBQWlCLEVBQUE7RUE5Q3pCO01BNkNRLGtEQUFxRTtjQUFyRSwwQ0FBcUU7TUFDckUsNkJBQWlCO2NBQWpCLHFCQUFpQixFQUFBO0VBOUN6QjtNQTZDUSxrREFBcUU7Y0FBckUsMENBQXFFO01BQ3JFLDhCQUFpQjtjQUFqQixzQkFBaUIsRUFBQTtFQTlDekI7TUE2Q1Esa0RBQXFFO2NBQXJFLDBDQUFxRTtNQUNyRSwyQkFBaUI7Y0FBakIsbUJBQWlCLEVBQUE7RUE5Q3pCO01BNkNRLGtEQUFxRTtjQUFyRSwwQ0FBcUU7TUFDckUsOEJBQWlCO2NBQWpCLHNCQUFpQixFQUFBO0VBOUN6QjtNQTZDUSxrREFBcUU7Y0FBckUsMENBQXFFO01BQ3JFLDZCQUFpQjtjQUFqQixxQkFBaUIsRUFBQTtFQTlDekI7TUE2Q1Esa0RBQXFFO2NBQXJFLDBDQUFxRTtNQUNyRSw4QkFBaUI7Y0FBakIsc0JBQWlCLEVBQUE7RUE5Q3pCO01BNkNRLGtEQUFxRTtjQUFyRSwwQ0FBcUU7TUFDckUsMkJBQWlCO2NBQWpCLG1CQUFpQixFQUFBO0VBOUN6QjtJQW9ESSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87SUFDUCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCLEVBQUE7RUFJdEI7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsVUFBVSxFQUFBLEVBQUE7RUFMZDtFQUNFO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxVQUFVLEVBQUEsRUFBQSIsImZpbGUiOiJsaWJzL3JlY2xhbWl0dXgvc3JjL2xpYi9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGlzIGluY2x1ZGVkIGlubGluZSBpbiBpbmRleC5odG1sLCBoZXJlIGFzIGEgcmVmZXJlbmNlIHRvIGNoYW5nZWl0XG4kc3Bpbm5lci1lbGVtZW50czogMTI7XG4kc3Bpbm5lci10aW1lOiAzO1xuXG46aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxMDA7XG5cbiAgJi5mYWRlZCAuaG9tZS1zcGlubmVyIHtcbiAgICBvcGFjaXR5OiAwLjQ4XG4gIH1cblxuICAmLmZpeGVkIHtcbiAgICAuaG9tZS1zcGlubmVyLCAubWVzc2FnZSB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgfVxuICB9XG5cbiAgLmhvbWUtc3Bpbm5lciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBzcGFuIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIG1hcmdpbi10b3A6IC0xM3B4O1xuICAgICAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgYW5pbWF0aW9uOiBmYWRlICN7JHNwaW5uZXItdGltZX1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICBAZm9yICRpIGZyb20gMCB0aHJvdWdoICRzcGlubmVyLWVsZW1lbnRzIHtcbiAgICAgIHNwYW46bnRoLWNoaWxkKCN7JGl9KSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKCN7MzYwKiRpLyRzcGlubmVyLWVsZW1lbnRzfWRlZykgdHJhbnNsYXRlWSg1NnB4KTtcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAjeyRpKiRzcGlubmVyLXRpbWUvJHNwaW5uZXItZWxlbWVudHN9cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWVzc2FnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogOTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuIl19 */"

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