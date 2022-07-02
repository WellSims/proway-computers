function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["produtos-produtos-module"], {
  /***/
  "./src/app/notificacao.service.ts":
  /*!****************************************!*\
    !*** ./src/app/notificacao.service.ts ***!
    \****************************************/

  /*! exports provided: NotificacaoService */

  /***/
  function srcAppNotificacaoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificacaoService", function () {
      return NotificacaoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/fesm2015/snack-bar.js");

    var NotificacaoService = /*#__PURE__*/function () {
      function NotificacaoService(snackBar) {
        _classCallCheck(this, NotificacaoService);

        this.snackBar = snackBar;
      }

      _createClass(NotificacaoService, [{
        key: "notificar",
        value: function notificar(mensagem) {
          this.snackBar.open(mensagem, "Ok", {
            duration: 2000,
            verticalPosition: "top",
            horizontalPosition: "center"
          });
        }
      }]);

      return NotificacaoService;
    }();

    NotificacaoService.ɵfac = function NotificacaoService_Factory(t) {
      return new (t || NotificacaoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]));
    };

    NotificacaoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NotificacaoService,
      factory: NotificacaoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificacaoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/produtos.service.ts":
  /*!*************************************!*\
    !*** ./src/app/produtos.service.ts ***!
    \*************************************/

  /*! exports provided: ProdutosService */

  /***/
  function srcAppProdutosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProdutosService", function () {
      return ProdutosService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _produtos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./produtos */
    "./src/app/produtos.ts");

    var ProdutosService = /*#__PURE__*/function () {
      function ProdutosService() {
        _classCallCheck(this, ProdutosService);

        this.produtos = _produtos__WEBPACK_IMPORTED_MODULE_1__["produtos"];
      }

      _createClass(ProdutosService, [{
        key: "getAll",
        value: function getAll() {
          return this.produtos;
        }
      }, {
        key: "getOne",
        value: function getOne(idProduto) {
          return this.produtos.find(function (produto) {
            return produto.id == idProduto;
          });
        }
      }]);

      return ProdutosService;
    }();

    ProdutosService.ɵfac = function ProdutosService_Factory(t) {
      return new (t || ProdutosService)();
    };

    ProdutosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProdutosService,
      factory: ProdutosService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/produtos.ts":
  /*!*****************************!*\
    !*** ./src/app/produtos.ts ***!
    \*****************************/

  /*! exports provided: produtos */

  /***/
  function srcAppProdutosTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "produtos", function () {
      return produtos;
    });

    var produtos = [{
      id: 1,
      descricao: "Mouse gamer",
      preco: 439.00,
      descricaoPreco: "À vista no PIX",
      imagem: "./assets/mouse-3.jpg",
      quantidadeEstoque: 20
    }, {
      id: 2,
      descricao: "Monitor muito bom",
      preco: 1200.50,
      descricaoPreco: "À vista no PIX",
      desconto: 2000.00,
      imagem: "./assets/monitor-1.jpg",
      quantidadeEstoque: 10
    }, {
      id: 3,
      descricao: "Teclado excelente",
      preco: 749.99,
      descricaoPreco: "À vista no PIX",
      imagem: "./assets/teclado-1.jpg",
      quantidadeEstoque: 10
    }, {
      id: 4,
      descricao: "Fone para quem joga FPS",
      preco: 599.99,
      descricaoPreco: "À vista no PIX",
      imagem: "./assets/fone-de-ouvido-2.jpg",
      quantidadeEstoque: 10
    }, {
      id: 5,
      descricao: "Fone de ouvido",
      preco: 299.99,
      descricaoPreco: "À vista no PIX",
      imagem: "./assets/fone-de-ouvido-1.jpg",
      quantidadeEstoque: 10
    }, {
      id: 6,
      descricao: "Fone de ouvido bom",
      preco: 399.99,
      descricaoPreco: "À vista no PIX",
      imagem: "./assets/fone-de-ouvido-3.jpg",
      quantidadeEstoque: 10
    }, {
      id: 7,
      descricao: "HD 1TB",
      preco: 499.99,
      descricaoPreco: "À vista no PIX",
      imagem: "./assets/hd.jpg",
      quantidadeEstoque: 10
    }, {
      id: 8,
      descricao: "Combo de placa de vídeos",
      preco: 18449.99,
      descricaoPreco: "À vista no PIX",
      imagem: "./assets/placa-video.jpg",
      quantidadeEstoque: 10
    }, {
      id: 9,
      descricao: "Processador Ryzen",
      preco: 1000,
      descricaoPreco: "À vista no PIX",
      imagem: "./assets/processador.jpg",
      quantidadeEstoque: 10
    }, {
      id: 10,
      descricao: "Notebook bom",
      preco: 2500,
      descricaoPreco: "À vista no PIX",
      imagem: "./assets/laptop-1.jpg",
      quantidadeEstoque: 10
    }, {
      id: 11,
      descricao: "Notebook excelente",
      preco: 4500,
      descricaoPreco: "À vista no PIX",
      imagem: "./assets/laptop-2.jpg",
      quantidadeEstoque: 10
    }, {
      id: 12,
      descricao: "Mouse barato",
      preco: 20,
      descricaoPreco: "À vista no PIX",
      imagem: "./assets/mouse-1.png",
      quantidadeEstoque: 10
    }, {
      id: 13,
      descricao: "Mouse ótimo",
      preco: 200,
      descricaoPreco: "À vista no PIX",
      imagem: "./assets/mouse-2.jpg",
      quantidadeEstoque: 10
    }, {
      id: 14,
      descricao: "Mouse pequeno",
      preco: 50,
      descricaoPreco: "À vista no PIX",
      imagem: "./assets/mouse-4.jpg",
      quantidadeEstoque: 10
    }, {
      id: 15,
      descricao: "Teclado bom",
      preco: 159.99,
      descricaoPreco: "À vista no PIX",
      imagem: "./assets/teclado-2.jpg",
      quantidadeEstoque: 10
    }];
    /***/
  },

  /***/
  "./src/app/produtos/detalhes-produto/detalhes-produto.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/produtos/detalhes-produto/detalhes-produto.component.ts ***!
    \*************************************************************************/

  /*! exports provided: DetalhesProdutoComponent */

  /***/
  function srcAppProdutosDetalhesProdutoDetalhesProdutoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetalhesProdutoComponent", function () {
      return DetalhesProdutoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _produtos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../produtos.service */
    "./src/app/produtos.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_notificacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/notificacao.service */
    "./src/app/notificacao.service.ts");
    /* harmony import */


    var src_app_carrinho_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/carrinho.service */
    "./src/app/carrinho.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var DetalhesProdutoComponent = /*#__PURE__*/function () {
      function DetalhesProdutoComponent(produtosService, route, notificacaoService, carrinhoService) {
        _classCallCheck(this, DetalhesProdutoComponent);

        this.produtosService = produtosService;
        this.route = route;
        this.notificacaoService = notificacaoService;
        this.carrinhoService = carrinhoService;
        this.quantidade = 1;
      }

      _createClass(DetalhesProdutoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var routeParam = this.route.snapshot.paramMap;
          var produtoId = Number(routeParam.get("id"));
          this.produto = this.produtosService.getOne(produtoId);
        }
      }, {
        key: "adicionarAoCarrinho",
        value: function adicionarAoCarrinho() {
          this.notificacaoService.notificar("O produto foi adicionado ao carrinho");
          var produto = Object.assign(Object.assign({}, this.produto), {
            quantidade: this.quantidade
          });
          this.carrinhoService.adicionarAoCarrinho(produto);
        }
      }]);

      return DetalhesProdutoComponent;
    }();

    DetalhesProdutoComponent.ɵfac = function DetalhesProdutoComponent_Factory(t) {
      return new (t || DetalhesProdutoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_produtos_service__WEBPACK_IMPORTED_MODULE_1__["ProdutosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_notificacao_service__WEBPACK_IMPORTED_MODULE_3__["NotificacaoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_carrinho_service__WEBPACK_IMPORTED_MODULE_4__["CarrinhoService"]));
    };

    DetalhesProdutoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DetalhesProdutoComponent,
      selectors: [["app-detalhes-produto"]],
      decls: 19,
      vars: 8,
      consts: [[1, "product__container"], [1, "product-image__container"], ["alt", "", 3, "src"], [1, "product-description__container"], [1, "product__name"], [1, "product__price"], ["type", "number", "min", "1", 3, "ngModel", "ngModelChange"], [1, "product__avaiability"], [3, "click"]],
      template: function DetalhesProdutoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Estoque dispon\xEDvel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Quantidade: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DetalhesProdutoComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.quantidade = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "unidade(s) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetalhesProdutoComponent_Template_button_click_17_listener() {
            return ctx.adicionarAoCarrinho();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Adicionar ao carrinho");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.produto == null ? null : ctx.produto.imagem, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.produto == null ? null : ctx.produto.descricao);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, ctx.produto == null ? null : ctx.produto.preco, "BRL"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quantidade);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.produto == null ? null : ctx.produto.quantidadeEstoque, " unidade(s) em estoque");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]],
      styles: [".product__container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  -moz-column-gap: 20px;\r\n       column-gap: 20px;\r\n  margin: 20px 0;\r\n}\r\n\r\n.product-image__container[_ngcontent-%COMP%] {\r\n  align-self: center;\r\n}\r\n\r\n.product__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 350px;\r\n  height: 350px;\r\n}\r\n\r\n.product__name[_ngcontent-%COMP%] {\r\n  font-size: 36px;\r\n}\r\n\r\n.product__price[_ngcontent-%COMP%] {\r\n  font-size: 28px;\r\n  font-weight: 400;\r\n  margin: 20px 0 20px;\r\n}\r\n\r\n.product-description__container[_ngcontent-%COMP%] {\r\n  border: 1px solid var(--light-gray);\r\n  border-radius: 8px;\r\n  padding: 15px;\r\n  flex: 1;\r\n}\r\n\r\n.product__avaiability[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  margin: 20px 0;\r\n  display: block;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  padding: 5px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n-webkit-appearance: none;\r\nmargin: 0;\r\n}\r\n\r\n\r\n\r\ninput[type=number][_ngcontent-%COMP%] {\r\n-moz-appearance: textfield;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  background-color: var(--blue);\r\n  border: none;\r\n  padding: 10px;\r\n  color: white;\r\n  font-size: 24px;\r\n  transition: .3s all;\r\n  margin: 20px 0;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  filter: brightness(1.3);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHV0b3MvZGV0YWxoZXMtcHJvZHV0by9kZXRhbGhlcy1wcm9kdXRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IscUJBQWdCO09BQWhCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLE9BQU87QUFDVDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7O0FBRUEsd0JBQXdCO0FBQ3hCLFNBQVM7QUFDVDs7QUFFQSxZQUFZOztBQUNaO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdXRvcy9kZXRhbGhlcy1wcm9kdXRvL2RldGFsaGVzLXByb2R1dG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0X19jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sdW1uLWdhcDogMjBweDtcclxuICBtYXJnaW46IDIwcHggMDtcclxufVxyXG5cclxuLnByb2R1Y3QtaW1hZ2VfX2NvbnRhaW5lciB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvZHVjdF9fY29udGFpbmVyIGltZyB7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19uYW1lIHtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19wcmljZSB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luOiAyMHB4IDAgMjBweDtcclxufVxyXG5cclxuLnByb2R1Y3QtZGVzY3JpcHRpb25fX2NvbnRhaW5lciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JheSk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnByb2R1Y3RfX2F2YWlhYmlsaXR5IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5tYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIEZpcmVmb3ggKi9cclxuaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICB0cmFuc2l0aW9uOiAuM3MgYWxsO1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4zKTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalhesProdutoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-detalhes-produto',
          templateUrl: './detalhes-produto.component.html',
          styleUrls: ['./detalhes-produto.component.css']
        }]
      }], function () {
        return [{
          type: _produtos_service__WEBPACK_IMPORTED_MODULE_1__["ProdutosService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_notificacao_service__WEBPACK_IMPORTED_MODULE_3__["NotificacaoService"]
        }, {
          type: src_app_carrinho_service__WEBPACK_IMPORTED_MODULE_4__["CarrinhoService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/produtos/produtos-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/produtos/produtos-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ProdutosRoutingModule */

  /***/
  function srcAppProdutosProdutosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProdutosRoutingModule", function () {
      return ProdutosRoutingModule;
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


    var _detalhes_produto_detalhes_produto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./detalhes-produto/detalhes-produto.component */
    "./src/app/produtos/detalhes-produto/detalhes-produto.component.ts");
    /* harmony import */


    var _produtos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./produtos.component */
    "./src/app/produtos/produtos.component.ts");

    var routes = [{
      path: '',
      component: _produtos_component__WEBPACK_IMPORTED_MODULE_3__["ProdutosComponent"]
    }, {
      path: ':id',
      component: _detalhes_produto_detalhes_produto_component__WEBPACK_IMPORTED_MODULE_2__["DetalhesProdutoComponent"]
    }];

    var ProdutosRoutingModule = /*#__PURE__*/_createClass(function ProdutosRoutingModule() {
      _classCallCheck(this, ProdutosRoutingModule);
    });

    ProdutosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProdutosRoutingModule
    });
    ProdutosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProdutosRoutingModule_Factory(t) {
        return new (t || ProdutosRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProdutosRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutosRoutingModule, [{
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
  "./src/app/produtos/produtos.component.ts":
  /*!************************************************!*\
    !*** ./src/app/produtos/produtos.component.ts ***!
    \************************************************/

  /*! exports provided: ProdutosComponent */

  /***/
  function srcAppProdutosProdutosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProdutosComponent", function () {
      return ProdutosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _produtos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../produtos.service */
    "./src/app/produtos.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    function ProdutosComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Comprar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var produto_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/produtos/", produto_r1.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", produto_r1.imagem, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", produto_r1.descricao, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, produto_r1.preco, "BRL"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", produto_r1.descricaoPreco, " ");
      }
    }

    var ProdutosComponent = /*#__PURE__*/function () {
      function ProdutosComponent(produtosService, route) {
        _classCallCheck(this, ProdutosComponent);

        this.produtosService = produtosService;
        this.route = route;
      }

      _createClass(ProdutosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var produtos = this.produtosService.getAll();
          this.route.queryParamMap.subscribe(function (params) {
            var _a;

            var descricao = (_a = params.get("descricao")) === null || _a === void 0 ? void 0 : _a.toLowerCase();

            if (descricao) {
              _this.produtos = produtos.filter(function (produto) {
                return produto.descricao.toLowerCase().includes(descricao);
              });
              return;
            }

            _this.produtos = produtos;
          });
        }
      }]);

      return ProdutosComponent;
    }();

    ProdutosComponent.ɵfac = function ProdutosComponent_Factory(t) {
      return new (t || ProdutosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_produtos_service__WEBPACK_IMPORTED_MODULE_1__["ProdutosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    ProdutosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProdutosComponent,
      selectors: [["app-produtos"]],
      decls: 2,
      vars: 1,
      consts: [[1, "product-list"], ["class", "product-list__card", 4, "ngFor", "ngForOf"], [1, "product-list__card"], [1, "product-list__link", 3, "routerLink"], [3, "src"], [1, "product-item__name"], [1, "product-item__price"], [1, "product-item__price-description"], ["type", "button", 1, "product-item__buy-button"]],
      template: function ProdutosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProdutosComponent_div_1_Template, 12, 8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.produtos);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]],
      styles: [".product-list[_ngcontent-%COMP%] {\r\n  padding: 40px 0;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  display: flex;\r\n  gap: 20px;\r\n  flex-flow: row wrap;\r\n  justify-content: space-evenly;\r\n  align-content: center;\r\n}\r\n\r\n.product-list__card[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  padding: 10px;\r\n  border-radius: 4px;\r\n  flex: 0 1 270px;\r\n  height: 450px;\r\n  background-color: white;\r\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\r\n}\r\n\r\n.product-list__card[_ngcontent-%COMP%]:hover {\r\n  outline: 1px solid var(--blue);\r\n  transform: scale(1.1, 1.1);\r\n  cursor: pointer;\r\n}\r\n\r\n.product-list__link[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  row-gap: 10px;\r\n  text-decoration: none;\r\n}\r\n\r\n.product-list__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 250px;\r\n  width: 250px;\r\n  display: block;\r\n  border-radius: 4px;\r\n}\r\n\r\n.product-item__name[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  color: var(--blue);\r\n}\r\n\r\n.product-item__price[_ngcontent-%COMP%] {\r\n  color: var(--orange);\r\n  font-size: 32px;\r\n  font-weight: bold;\r\n}\r\n\r\n.product-item__price-deion[_ngcontent-%COMP%] {\r\n  color: var(--gray);\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n}\r\n\r\n.product-item__buy-button[_ngcontent-%COMP%] {\r\n  background-color: var(--blue);\r\n  border: none;\r\n  color: white;\r\n  font-size: 20px;\r\n  padding: 6px 12px;\r\n}\r\n\r\n.product-item__buy-button[_ngcontent-%COMP%]:hover {\r\n  filter: brightness(1.1);\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHV0b3MvcHJvZHV0b3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHV0b3MvcHJvZHV0b3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWxpc3Qge1xyXG4gIHBhZGRpbmc6IDQwcHggMDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDIwcHg7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWxpc3RfX2NhcmQge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZmxleDogMCAxIDI3MHB4O1xyXG4gIGhlaWdodDogNDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogcmdiYSg5OSwgOTksIDk5LCAwLjIpIDBweCAycHggOHB4IDBweDtcclxufVxyXG5cclxuLnByb2R1Y3QtbGlzdF9fY2FyZDpob3ZlciB7XHJcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByb2R1Y3QtbGlzdF9fbGluayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcm93LWdhcDogMTBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWxpc3RfX2NhcmQgaW1nIHtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWl0ZW1fX25hbWUge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWl0ZW1fX3ByaWNlIHtcclxuICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWl0ZW1fX3ByaWNlLWRlaW9uIHtcclxuICBjb2xvcjogdmFyKC0tZ3JheSk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucHJvZHVjdC1pdGVtX19idXktYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxufVxyXG5cclxuLnByb2R1Y3QtaXRlbV9fYnV5LWJ1dHRvbjpob3ZlciB7XHJcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-produtos',
          templateUrl: './produtos.component.html',
          styleUrls: ['./produtos.component.css']
        }]
      }], function () {
        return [{
          type: _produtos_service__WEBPACK_IMPORTED_MODULE_1__["ProdutosService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/produtos/produtos.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/produtos/produtos.module.ts ***!
    \*********************************************/

  /*! exports provided: ProdutosModule */

  /***/
  function srcAppProdutosProdutosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProdutosModule", function () {
      return ProdutosModule;
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


    var _produtos_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./produtos-routing.module */
    "./src/app/produtos/produtos-routing.module.ts");
    /* harmony import */


    var _produtos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./produtos.component */
    "./src/app/produtos/produtos.component.ts");
    /* harmony import */


    var _detalhes_produto_detalhes_produto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./detalhes-produto/detalhes-produto.component */
    "./src/app/produtos/detalhes-produto/detalhes-produto.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ProdutosModule = /*#__PURE__*/_createClass(function ProdutosModule() {
      _classCallCheck(this, ProdutosModule);
    });

    ProdutosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProdutosModule
    });
    ProdutosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProdutosModule_Factory(t) {
        return new (t || ProdutosModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _produtos_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProdutosRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProdutosModule, {
        declarations: [_produtos_component__WEBPACK_IMPORTED_MODULE_3__["ProdutosComponent"], _detalhes_produto_detalhes_produto_component__WEBPACK_IMPORTED_MODULE_4__["DetalhesProdutoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _produtos_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProdutosRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_produtos_component__WEBPACK_IMPORTED_MODULE_3__["ProdutosComponent"], _detalhes_produto_detalhes_produto_component__WEBPACK_IMPORTED_MODULE_4__["DetalhesProdutoComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _produtos_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProdutosRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=produtos-produtos-module-es5.js.map