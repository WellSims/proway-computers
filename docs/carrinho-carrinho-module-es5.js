function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carrinho-carrinho-module"], {
  /***/
  "./src/app/carrinho/carrinho-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/carrinho/carrinho-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: CarrinhoRoutingModule */

  /***/
  function srcAppCarrinhoCarrinhoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarrinhoRoutingModule", function () {
      return CarrinhoRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _carrinho_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./carrinho.component */
    "./src/app/carrinho/carrinho.component.ts");

    var routes = [{
      path: '',
      component: _carrinho_component__WEBPACK_IMPORTED_MODULE_2__["CarrinhoComponent"]
    }];

    var CarrinhoRoutingModule = /*#__PURE__*/_createClass(function CarrinhoRoutingModule() {
      _classCallCheck(this, CarrinhoRoutingModule);
    });

    CarrinhoRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: CarrinhoRoutingModule
    });
    CarrinhoRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function CarrinhoRoutingModule_Factory(t) {
        return new (t || CarrinhoRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CarrinhoRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CarrinhoRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/carrinho/carrinho.component.ts":
  /*!************************************************!*\
    !*** ./src/app/carrinho/carrinho.component.ts ***!
    \************************************************/

  /*! exports provided: CarrinhoComponent */

  /***/
  function srcAppCarrinhoCarrinhoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarrinhoComponent", function () {
      return CarrinhoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _carrinho_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../carrinho.service */
    "./src/app/carrinho.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    function CarrinhoComponent_div_1_li_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](6, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Quantidade: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CarrinhoComponent_div_1_li_2_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6);

          var itemCarrinho_r4 = ctx.$implicit;
          return itemCarrinho_r4.quantidade = $event;
        })("change", function CarrinhoComponent_div_1_li_2_Template_input_change_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r7.calculaTotal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CarrinhoComponent_div_1_li_2_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6);

          var itemCarrinho_r4 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r8.removerProdutoCarrinho(itemCarrinho_r4.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var itemCarrinho_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", itemCarrinho_r4.imagem, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](itemCarrinho_r4.descricao);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](6, 4, itemCarrinho_r4.preco, "BRL"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", itemCarrinho_r4.quantidade);
      }
    }

    function CarrinhoComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CarrinhoComponent_div_1_li_2_Template, 12, 7, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CarrinhoComponent_div_1_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r9.comprar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Comprar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.itensCarrinho);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](5, 2, ctx_r0.total, "BRL"), "");
      }
    }

    function CarrinhoComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, "Nenhum produto foi adicionado ao carrinho");
      }
    }

    var CarrinhoComponent = /*#__PURE__*/function () {
      function CarrinhoComponent(carrinhoService, router) {
        _classCallCheck(this, CarrinhoComponent);

        this.carrinhoService = carrinhoService;
        this.router = router;
        this.itensCarrinho = [];
        this.total = 0;
      }

      _createClass(CarrinhoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.itensCarrinho = this.carrinhoService.obtemCarrinho();
          this.calculaTotal();
        }
      }, {
        key: "calculaTotal",
        value: function calculaTotal() {
          this.total = this.itensCarrinho.reduce(function (prev, curr) {
            return prev + curr.preco * curr.quantidade;
          }, 0);
        }
      }, {
        key: "removerProdutoCarrinho",
        value: function removerProdutoCarrinho(idProduto) {
          this.itensCarrinho = this.itensCarrinho.filter(function (item) {
            return item.id !== idProduto;
          });
          this.carrinhoService.removerProdutoCarrinho(idProduto);
          this.calculaTotal();
        }
      }, {
        key: "comprar",
        value: function comprar() {
          alert("Parab??ns voc?? finalizou a sua compra!!");
          this.carrinhoService.limparCarrinho();
          this.router.navigate(["produtos"]);
        }
      }]);

      return CarrinhoComponent;
    }();

    CarrinhoComponent.??fac = function CarrinhoComponent_Factory(t) {
      return new (t || CarrinhoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_carrinho_service__WEBPACK_IMPORTED_MODULE_1__["CarrinhoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    CarrinhoComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: CarrinhoComponent,
      selectors: [["app-carrinho"]],
      decls: 4,
      vars: 2,
      consts: [[1, "carrinho__title"], [4, "ngIf", "ngIfElse"], ["semProduto", ""], [4, "ngFor", "ngForOf"], [1, "cart-total"], [1, "buy-button", 3, "click"], [3, "src"], ["type", "number", 3, "ngModel", "ngModelChange", "change"], [1, "remove-button", 3, "click"], [1, "fa-solid", "fa-xmark"]],
      template: function CarrinhoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CarrinhoComponent_div_1_Template, 8, 5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CarrinhoComponent_ng_template_2_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.itensCarrinho.length > 0)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]],
      styles: [".cart-title[_ngcontent-%COMP%] {\r\n  font-size: 44px;\r\n  color: var(--gray);\r\n  font-weight: 700;\r\n  padding: 8px 0;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n  margin: 10px 0;\r\n  height: 100px;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: 100px;\r\n  display: block;\r\n}\r\n\r\n.remove-button[_ngcontent-%COMP%] {\r\n  background-color: red;\r\n  border: none;\r\n  color: white;\r\n  padding: 20px;\r\n  height: 100%;\r\n  transition: .2s all;\r\n}\r\n\r\n.remove-button[_ngcontent-%COMP%]:hover {\r\n  filter: brightness(0.9);\r\n}\r\n\r\n.cart-total[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  color: var(--gray);\r\n  font-weight: 700;\r\n  padding: 8px 0;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  text-align: center;\r\n}\r\n\r\n.buy-button[_ngcontent-%COMP%] {\r\n  background-color: var(--blue);\r\n  border: none;\r\n  color: white;\r\n  padding: 10px;\r\n  font-size: 22px;\r\n  margin-bottom: 10px;\r\n  transition: .3s all;\r\n}\r\n\r\n.buy-button[_ngcontent-%COMP%]:hover {\r\n  filter: brightness(0.9);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FycmluaG8vY2FycmluaG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscURBQXFEO0VBQ3JELGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NhcnJpbmhvL2NhcnJpbmhvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiA0NHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1ncmF5KTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmc6IDhweCAwO1xyXG59XHJcblxyXG5saSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucmVtb3ZlLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogLjJzIGFsbDtcclxufVxyXG5cclxuLnJlbW92ZS1idXR0b246aG92ZXIge1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xyXG59XHJcblxyXG4uY2FydC10b3RhbCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1ncmF5KTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmc6IDhweCAwO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnV5LWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHRyYW5zaXRpb246IC4zcyBhbGw7XHJcbn1cclxuXHJcbi5idXktYnV0dG9uOmhvdmVyIHtcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CarrinhoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-carrinho',
          templateUrl: './carrinho.component.html',
          styleUrls: ['./carrinho.component.css']
        }]
      }], function () {
        return [{
          type: _carrinho_service__WEBPACK_IMPORTED_MODULE_1__["CarrinhoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/carrinho/carrinho.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/carrinho/carrinho.module.ts ***!
    \*********************************************/

  /*! exports provided: CarrinhoModule */

  /***/
  function srcAppCarrinhoCarrinhoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarrinhoModule", function () {
      return CarrinhoModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _carrinho_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./carrinho-routing.module */
    "./src/app/carrinho/carrinho-routing.module.ts");
    /* harmony import */


    var _carrinho_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./carrinho.component */
    "./src/app/carrinho/carrinho.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var CarrinhoModule = /*#__PURE__*/_createClass(function CarrinhoModule() {
      _classCallCheck(this, CarrinhoModule);
    });

    CarrinhoModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: CarrinhoModule
    });
    CarrinhoModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function CarrinhoModule_Factory(t) {
        return new (t || CarrinhoModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _carrinho_routing_module__WEBPACK_IMPORTED_MODULE_2__["CarrinhoRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CarrinhoModule, {
        declarations: [_carrinho_component__WEBPACK_IMPORTED_MODULE_3__["CarrinhoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _carrinho_routing_module__WEBPACK_IMPORTED_MODULE_2__["CarrinhoRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CarrinhoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_carrinho_component__WEBPACK_IMPORTED_MODULE_3__["CarrinhoComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _carrinho_routing_module__WEBPACK_IMPORTED_MODULE_2__["CarrinhoRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=carrinho-carrinho-module-es5.js.map