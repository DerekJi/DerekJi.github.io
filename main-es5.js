function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_scroll_spy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @core/scroll-spy.service */
    "./src/app/core/scroll-spy.service.ts");
    /* harmony import */


    var _pages_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/header/header.component */
    "./src/app/pages/header/header.component.ts");
    /* harmony import */


    var _pages_hero_hero_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/hero/hero.component */
    "./src/app/pages/hero/hero.component.ts");
    /* harmony import */


    var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/about/about.component */
    "./src/app/pages/about/about.component.ts");
    /* harmony import */


    var _pages_expertise_expertise_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/expertise/expertise.component */
    "./src/app/pages/expertise/expertise.component.ts");
    /* harmony import */


    var _pages_education_education_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/education/education.component */
    "./src/app/pages/education/education.component.ts");
    /* harmony import */


    var _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/experience/experience.component */
    "./src/app/pages/experience/experience.component.ts");
    /* harmony import */


    var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/contact/contact.component */
    "./src/app/pages/contact/contact.component.ts");
    /* harmony import */


    var _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/footer/footer.component */
    "./src/app/pages/footer/footer.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(spyService) {
        _classCallCheck(this, AppComponent);

        this.spyService = spyService;
      }

      _createClass(AppComponent, [{
        key: "onSectionChange",
        value: function onSectionChange(sectionId) {
          this.spyService.onSectionChange(sectionId);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_scroll_spy_service__WEBPACK_IMPORTED_MODULE_1__["ScrollService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 9,
      vars: 0,
      consts: [["id", "d-scroll-spy"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-hero");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-expertise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-footer");
        }
      },
      directives: [_pages_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _pages_hero_hero_component__WEBPACK_IMPORTED_MODULE_3__["HeroComponent"], _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _pages_expertise_expertise_component__WEBPACK_IMPORTED_MODULE_5__["ExpertiseComponent"], _pages_education_education_component__WEBPACK_IMPORTED_MODULE_6__["EducationComponent"], _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"], _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"], _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _core_scroll_spy_service__WEBPACK_IMPORTED_MODULE_1__["ScrollService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _pages_header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @pages/header/header.module */
    "./src/app/pages/header/header.module.ts");
    /* harmony import */


    var _pages_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @pages/footer/footer.module */
    "./src/app/pages/footer/footer.module.ts");
    /* harmony import */


    var _pages_hero_hero_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @pages/hero/hero.module */
    "./src/app/pages/hero/hero.module.ts");
    /* harmony import */


    var _pages_about_about_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @pages/about/about.module */
    "./src/app/pages/about/about.module.ts");
    /* harmony import */


    var _pages_expertise_expertise_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @pages/expertise/expertise.module */
    "./src/app/pages/expertise/expertise.module.ts");
    /* harmony import */


    var _pages_education_education_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @pages/education/education.module */
    "./src/app/pages/education/education.module.ts");
    /* harmony import */


    var _pages_experience_experience_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @pages/experience/experience.module */
    "./src/app/pages/experience/experience.module.ts");
    /* harmony import */


    var _pages_contact_contact_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @pages/contact/contact.module */
    "./src/app/pages/contact/contact.module.ts");

    var AppModules = [_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _pages_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"], _pages_hero_hero_module__WEBPACK_IMPORTED_MODULE_6__["HeroModule"], _pages_about_about_module__WEBPACK_IMPORTED_MODULE_7__["AboutModule"], _pages_expertise_expertise_module__WEBPACK_IMPORTED_MODULE_8__["ExpertiseModule"], _pages_education_education_module__WEBPACK_IMPORTED_MODULE_9__["EducationModule"], _pages_experience_experience_module__WEBPACK_IMPORTED_MODULE_10__["ExperienceModule"], _pages_contact_contact_module__WEBPACK_IMPORTED_MODULE_11__["ContactModule"], _pages_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"]];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]].concat(AppModules)]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _pages_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"], _pages_hero_hero_module__WEBPACK_IMPORTED_MODULE_6__["HeroModule"], _pages_about_about_module__WEBPACK_IMPORTED_MODULE_7__["AboutModule"], _pages_expertise_expertise_module__WEBPACK_IMPORTED_MODULE_8__["ExpertiseModule"], _pages_education_education_module__WEBPACK_IMPORTED_MODULE_9__["EducationModule"], _pages_experience_experience_module__WEBPACK_IMPORTED_MODULE_10__["ExperienceModule"], _pages_contact_contact_module__WEBPACK_IMPORTED_MODULE_11__["ContactModule"], _pages_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]].concat(AppModules),
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/scroll-spy.service.ts":
  /*!********************************************!*\
    !*** ./src/app/core/scroll-spy.service.ts ***!
    \********************************************/

  /*! exports provided: ScrollService */

  /***/
  function srcAppCoreScrollSpyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollService", function () {
      return ScrollService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ScrollService = /*#__PURE__*/function () {
      function ScrollService() {
        _classCallCheck(this, ScrollService);

        this.currentSection = 'hero';
      }

      _createClass(ScrollService, [{
        key: "onSectionChange",
        value: function onSectionChange(sectionId) {
          this.currentSection = sectionId;
        }
      }, {
        key: "scrollTo",
        value: function scrollTo(section) {
          document.querySelector('#' + section).scrollIntoView();
        }
      }]);

      return ScrollService;
    }();

    ScrollService.ɵfac = function ScrollService_Factory(t) {
      return new (t || ScrollService)();
    };

    ScrollService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ScrollService,
      factory: ScrollService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollService, [{
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
  "./src/app/pages/about/about.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/about/about.component.ts ***!
    \************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppPagesAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 34,
      vars: 0,
      consts: [["id", "about", 1, "bg-light"], [1, "container"], [1, "mb-5"], [1, "font-weight-bold", "text-primary", "text-uppercase", "letter-spacing-3"], [1, "h3", "lined", "text-uppercase"], [1, ""]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enthusiastic & Self-Motivated");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "To boost your business");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Main Technology Stack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "ASP.NET Core (C#), RESTful WebAPI, Entity Framework, LINQ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Building front-end with Typescript, Angular or React");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Database administration and scripting (SQL Server & Postgres);");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Git (Bitbucket & Github)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "DevOps & PaaS (Azure, AWS)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Core Strengths");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Great problem-solving skills & Can-Do attitudes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Having an approachable and professional manner at all times.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Able to work on and support several projects simultaneously.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Continuously striving to improve all practices, routines and systems.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/about/about.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/about/about.module.ts ***!
    \*********************************************/

  /*! exports provided: AboutModule */

  /***/
  function srcAppPagesAboutAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutModule", function () {
      return AboutModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../about/about.component */
    "./src/app/pages/about/about.component.ts");

    var AboutModule = function AboutModule() {
      _classCallCheck(this, AboutModule);
    };

    AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AboutModule
    });
    AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AboutModule_Factory(t) {
        return new (t || AboutModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutModule, {
        declarations: [_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]],
          exports: [_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/contact/contact.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/contact/contact.component.ts ***!
    \****************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppPagesContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      } // Anti crawlers


      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "phone",
        get: function get() {
          var num = '0';
          var d = 4;
          num += (d--).toString();
          num += d.toString();
          num += d.toString();
          num += ' ';
          d = 7;
          num += (d++).toString();
          num += (d--).toString();
          num += d.toString();
          num += ' ';
          d = 2;
          num += d.toString();
          num += (d + 6).toString();
          num += d.toString();
          return num;
        }
      }, {
        key: "email",
        get: function get() {
          var s = 'sy';
          s += 'fool';
          s += '@';
          s += 'hot';
          s += 'mail';
          s += '.';
          s += 'com';
          return s;
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 37,
      vars: 3,
      consts: [["id", "contact", 1, "bg-light"], [1, "container"], [1, "mb-5", "pb-4"], [1, "font-weight-bold", "text-primary", "text-uppercase", "letter-spacing-3"], [1, "text-uppercase", "lined"], [1, "row"], [1, "col-lg-3", "col-md-6", "mb-4", "mb-lg-0"], [1, "px-4", "py-5", "text-center", "contact-item", "shadow-sm"], [1, "fa", "fa-map-marker", "fa-2x", "mb-4"], [1, "contact-item-title", "h5", "text-uppercase"], [1, "text-small", "mb-0"], [1, "fa", "fa-mobile", "fa-2x", "mb-4"], ["href", "https://derekji.github.io", 1, "px-4", "py-5", "text-center", "contact-item", "shadow-sm", "d-block", "reset-anchor"], [1, "fa", "fa-globe", "fa-2x", "mb-4"], [1, "px-4", "py-5", "text-center", "contact-item", "shadow-sm", "d-block", "reset-anchor"], [1, "fa", "fa-envelope", "fa-2x", "mb-4"], [3, "href"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Call me, maybe.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Adelaide, South Australia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Website");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "derekji.github.io");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.phone, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.email);
        }
      },
      styles: [".contact-item[_ngcontent-%COMP%] {\n  background: #fff;\n  position: relative;\n  transition: all 0.4s;\n}\n\n.contact-item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  width: calc(100% - 8px);\n  height: calc(100% - 8px);\n  background: none;\n  border: 2px solid #fff;\n  transform: scale(1.1);\n  opacity: 0;\n  transition: all 0.3s;\n}\n\n.contact-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fbd214;\n  transition: all 0.3s;\n}\n\n.contact-item[_ngcontent-%COMP%]:hover {\n  background: #fbd214;\n  color: #fff;\n}\n\n.contact-item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .contact-item[_ngcontent-%COMP%]:hover   .contact-item-title[_ngcontent-%COMP%], .contact-item[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.contact-item[_ngcontent-%COMP%]:hover::before {\n  transform: none;\n  opacity: 1;\n}\n\na.contact-item[_ngcontent-%COMP%]   .contact-item-title[_ngcontent-%COMP%], a.contact-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIvZ2l0aHViL3dvcmtzcGFjZS9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFFQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQ0RGOztBRElBO0VBQ0UsY0V6QmM7RUYwQmQsb0JBQUE7QUNERjs7QURJQTtFQUNFLG1CRTlCYztFRitCZCxXQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0FDREY7O0FESUE7RUFFRSxlQUFBO0VBQ0EsVUFBQTtBQ0RGOztBRElBO0VBQ0Usb0JBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ192YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4uY29udGFjdC1pdGVtIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxufVxyXG5cclxuLmNvbnRhY3QtaXRlbTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0cHg7XHJcbiAgbGVmdDogNHB4O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA4cHgpO1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gOHB4KTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5jb250YWN0LWl0ZW0gaSB7XHJcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4uY29udGFjdC1pdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNvbnRhY3QtaXRlbTpob3ZlciBpLCAuY29udGFjdC1pdGVtOmhvdmVyIC5jb250YWN0LWl0ZW0tdGl0bGUsIC5jb250YWN0LWl0ZW06aG92ZXIgcCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jb250YWN0LWl0ZW06aG92ZXI6OmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgdHJhbnNmb3JtOiBub25lO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbmEuY29udGFjdC1pdGVtIC5jb250YWN0LWl0ZW0tdGl0bGUsIGEuY29udGFjdC1pdGVtIHAge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcbiIsIi5jb250YWN0LWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuXG4uY29udGFjdC1pdGVtOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDRweDtcbiAgbGVmdDogNHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gOHB4KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4cHgpO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmNvbnRhY3QtaXRlbSBpIHtcbiAgY29sb3I6ICNmYmQyMTQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4uY29udGFjdC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZiZDIxNDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jb250YWN0LWl0ZW06aG92ZXIgaSwgLmNvbnRhY3QtaXRlbTpob3ZlciAuY29udGFjdC1pdGVtLXRpdGxlLCAuY29udGFjdC1pdGVtOmhvdmVyIHAge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNvbnRhY3QtaXRlbTpob3Zlcjo6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gIHRyYW5zZm9ybTogbm9uZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuYS5jb250YWN0LWl0ZW0gLmNvbnRhY3QtaXRlbS10aXRsZSwgYS5jb250YWN0LWl0ZW0gcCB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufSIsIiRwcmltYXJ5LWNvbG9yOiAjZmJkMjE0O1xyXG4kcHJpbWFyeS1ob3Zlci1jb2xvcjogI2Q4YjMwNDtcclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/contact/contact.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/contact/contact.module.ts ***!
    \*************************************************/

  /*! exports provided: ContactModule */

  /***/
  function srcAppPagesContactContactModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactModule", function () {
      return ContactModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../contact/contact.component */
    "./src/app/pages/contact/contact.component.ts");
    /* harmony import */


    var _lcd_number_lcd_number_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lcd-number/lcd-number.component */
    "./src/app/pages/contact/lcd-number/lcd-number.component.ts");

    var ContactModule = function ContactModule() {
      _classCallCheck(this, ContactModule);
    };

    ContactModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ContactModule
    });
    ContactModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ContactModule_Factory(t) {
        return new (t || ContactModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactModule, {
        declarations: [_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"], _lcd_number_lcd_number_component__WEBPACK_IMPORTED_MODULE_3__["LcdNumberComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"], _lcd_number_lcd_number_component__WEBPACK_IMPORTED_MODULE_3__["LcdNumberComponent"]],
          exports: [_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/contact/lcd-number/lcd-number.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/contact/lcd-number/lcd-number.component.ts ***!
    \******************************************************************/

  /*! exports provided: LcdNumberComponent */

  /***/
  function srcAppPagesContactLcdNumberLcdNumberComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LcdNumberComponent", function () {
      return LcdNumberComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LcdNumberComponent = /*#__PURE__*/function () {
      function LcdNumberComponent() {
        _classCallCheck(this, LcdNumberComponent);
      }

      _createClass(LcdNumberComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LcdNumberComponent;
    }();

    LcdNumberComponent.ɵfac = function LcdNumberComponent_Factory(t) {
      return new (t || LcdNumberComponent)();
    };

    LcdNumberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LcdNumberComponent,
      selectors: [["app-lcd-number"]],
      decls: 11,
      vars: 0,
      consts: [[1, ""], [1, "number-sprite", "number-0"], [1, "number-sprite", "number-4"], [1, "number-sprite", "number-3"], [1, "number-sprite", "number-7"], [1, "number-sprite", "number-8"], [1, "number-sprite", "number-2"]],
      template: function LcdNumberComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".number-sprite[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 12px;\n  background: url('lcd-numbers.jpg') no-repeat;\n  margin: 0 1px;\n}\n\n.number-0[_ngcontent-%COMP%] {\n  background-position: 0px 0;\n}\n\n.number-4[_ngcontent-%COMP%] {\n  background-position: -31px 0;\n}\n\n.number-2[_ngcontent-%COMP%] {\n  background-position: -16px 0;\n}\n\n.number-3[_ngcontent-%COMP%] {\n  background-position: -24px 0;\n}\n\n.number-7[_ngcontent-%COMP%] {\n  background-position: -55px 0;\n}\n\n.number-8[_ngcontent-%COMP%] {\n  background-position: -62px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvcGFnZXMvY29udGFjdC9sY2QtbnVtYmVyL2xjZC1udW1iZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvbGNkLW51bWJlci9sY2QtbnVtYmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtBQ0NGOztBRENBO0VBQ0UsNEJBQUE7QUNFRjs7QURBQTtFQUNFLDRCQUFBO0FDR0Y7O0FEREE7RUFDRSw0QkFBQTtBQ0lGOztBREZBO0VBQ0UsNEJBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvbGNkLW51bWJlci9sY2QtbnVtYmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm51bWJlci1zcHJpdGUge1xyXG4gIHdpZHRoOiA4cHg7XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sY2QtbnVtYmVycy5qcGcnKSBuby1yZXBlYXQ7XHJcbiAgbWFyZ2luOiAwIDFweDtcclxufVxyXG5cclxuLm51bWJlci0wIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggMDtcclxufVxyXG5cclxuLm51bWJlci00IHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzFweCAwO1xyXG59XHJcbi5udW1iZXItMiB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggMDtcclxufVxyXG4ubnVtYmVyLTMge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yNHB4IDA7XHJcbn1cclxuLm51bWJlci03IHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNTVweCAwO1xyXG59XHJcbi5udW1iZXItOCB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTYycHggMDtcclxufVxyXG5cclxuXHJcbiIsIi5udW1iZXItc3ByaXRlIHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xjZC1udW1iZXJzLmpwZ1wiKSBuby1yZXBlYXQ7XG4gIG1hcmdpbjogMCAxcHg7XG59XG5cbi5udW1iZXItMCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAwO1xufVxuXG4ubnVtYmVyLTQge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzFweCAwO1xufVxuXG4ubnVtYmVyLTIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAwO1xufVxuXG4ubnVtYmVyLTMge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjRweCAwO1xufVxuXG4ubnVtYmVyLTcge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNTVweCAwO1xufVxuXG4ubnVtYmVyLTgge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjJweCAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LcdNumberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lcd-number',
          templateUrl: './lcd-number.component.html',
          styleUrls: ['./lcd-number.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/education/education.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/education/education.component.ts ***!
    \********************************************************/

  /*! exports provided: EducationComponent */

  /***/
  function srcAppPagesEducationEducationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EducationComponent", function () {
      return EducationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EducationComponent = /*#__PURE__*/function () {
      function EducationComponent() {
        _classCallCheck(this, EducationComponent);
      }

      _createClass(EducationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EducationComponent;
    }();

    EducationComponent.ɵfac = function EducationComponent_Factory(t) {
      return new (t || EducationComponent)();
    };

    EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EducationComponent,
      selectors: [["app-education"]],
      decls: 42,
      vars: 0,
      consts: [["id", "education", 1, "bg-light"], [1, "container"], [1, "mb-5", "pb-4"], [1, "font-weight-bold", "text-primary", "text-uppercase", "letter-spacing-3"], [1, "text-uppercase", "lined"], [1, "timeline"], [1, "timeline-item", "ml-3", "pb-4"], [1, "timeline-arrow"], [1, "row", "no-gutter"], [1, "col-lg-5", "mb-4", "mb-lg-0"], [1, "font-weight-bold", "mb-2", "cv-text-primary", "text-small"], [1, "h5", "mb-0"], [1, "h5", "mb-0", "text-uppercase"], [1, "text-small", "mb-0"], ["href", "https://english.jnu.edu.cn/about_jnu/list.htm", "target", "_blank"], [1, "small", "text-muted"], [1, "col-lg-7"], [1, "text-muted"], ["href", "http://english.neu.edu.cn/3544/list.htm", "target", "_blank"]],
      template: function EducationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Always doing my best.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "2001 - 2004 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Master Degree of");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Computer Science");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Ji'nan University");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Guangzhou, China");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "1996 - 2000 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Bachelor Degree of");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Mining Engineering");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Northeastern University");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Shenyang, China");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["ul.timeline[_ngcontent-%COMP%] {\n  list-style-type: none;\n  position: relative;\n  padding-left: 1.5rem;\n}\n\nul.timeline[_ngcontent-%COMP%]:before {\n  content: \" \";\n  background: #EDEDED;\n  display: inline-block;\n  position: absolute;\n  left: 16px;\n  width: 4px;\n  height: 100%;\n  z-index: 400;\n  border-radius: 1rem;\n}\nul.timeline[_ngcontent-%COMP%]:after {\n  content: \" \";\n  background: #fbd214;\n  display: inline-block;\n  position: absolute;\n  bottom: 0;\n  left: 9px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 3px solid #fff;\n  z-index: 400;\n}\nli.timeline-item[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n\nli.timeline-item[_ngcontent-%COMP%]::before {\n  content: \" \";\n  background: #fbd214;\n  display: inline-block;\n  position: absolute;\n  left: 10px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 3px solid #fff;\n  z-index: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9zdHlsZXMvdGltZWxpbmUuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsIi9naXRodWIvd29ya3NwYWNlL3NyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLG9CQUFBO0FBQ0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNGRjtBREtBLDJCQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDRkY7QURLQTtFQUNFLFlBQUE7RUFDQSxtQkV6QmM7RUYwQmQscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0ZGO0FES0E7RUFDRSxjQUFBO0FDRkY7QURLQSxnQ0FBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLG1CRTVDYztFRjZDZCxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdfdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuXHJcbi8qIFRpbWVsaW5lIGhvbGRlciAqL1xyXG51bC50aW1lbGluZSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxufVxyXG5cclxuLyogVGltZWxpbmUgdmVydGljYWwgbGluZSAqL1xyXG51bC50aW1lbGluZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcgJztcclxuICBiYWNrZ3JvdW5kOiAjRURFREVEO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMTZweDtcclxuICB3aWR0aDogNHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiA0MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG5cclxudWwudGltZWxpbmU6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcgJztcclxuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiA5cHg7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xyXG4gIHotaW5kZXg6IDQwMDtcclxufVxyXG5cclxubGkudGltZWxpbmUtaXRlbSB7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbi8qIFRpbWVsaW5lIGl0ZW0gY2lyY2xlIG1hcmtlciAqL1xyXG5saS50aW1lbGluZS1pdGVtOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcgJztcclxuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xyXG4gIHotaW5kZXg6IDQwMDtcclxufVxyXG4iLCIvKiBUaW1lbGluZSBob2xkZXIgKi9cbnVsLnRpbWVsaW5lIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xufVxuXG4vKiBUaW1lbGluZSB2ZXJ0aWNhbCBsaW5lICovXG51bC50aW1lbGluZTpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgYmFja2dyb3VuZDogI0VERURFRDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE2cHg7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogNDAwO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuXG51bC50aW1lbGluZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBiYWNrZ3JvdW5kOiAjZmJkMjE0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA5cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgei1pbmRleDogNDAwO1xufVxuXG5saS50aW1lbGluZS1pdGVtIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi8qIFRpbWVsaW5lIGl0ZW0gY2lyY2xlIG1hcmtlciAqL1xubGkudGltZWxpbmUtaXRlbTo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGJhY2tncm91bmQ6ICNmYmQyMTQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG4gIHotaW5kZXg6IDQwMDtcbn0iLCIkcHJpbWFyeS1jb2xvcjogI2ZiZDIxNDtcclxuJHByaW1hcnktaG92ZXItY29sb3I6ICNkOGIzMDQ7XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-education',
          templateUrl: './education.component.html',
          styleUrls: ['./education.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/education/education.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/education/education.module.ts ***!
    \*****************************************************/

  /*! exports provided: EducationModule */

  /***/
  function srcAppPagesEducationEducationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EducationModule", function () {
      return EducationModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _education_education_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../education/education.component */
    "./src/app/pages/education/education.component.ts");

    var EducationModule = function EducationModule() {
      _classCallCheck(this, EducationModule);
    };

    EducationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EducationModule
    });
    EducationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EducationModule_Factory(t) {
        return new (t || EducationModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EducationModule, {
        declarations: [_education_education_component__WEBPACK_IMPORTED_MODULE_2__["EducationComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_education_education_component__WEBPACK_IMPORTED_MODULE_2__["EducationComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_education_education_component__WEBPACK_IMPORTED_MODULE_2__["EducationComponent"]],
          exports: [_education_education_component__WEBPACK_IMPORTED_MODULE_2__["EducationComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/experience/experience.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/experience/experience.component.ts ***!
    \**********************************************************/

  /*! exports provided: ExperienceComponent */

  /***/
  function srcAppPagesExperienceExperienceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function () {
      return ExperienceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ExperienceComponent = /*#__PURE__*/function () {
      function ExperienceComponent() {
        _classCallCheck(this, ExperienceComponent);
      }

      _createClass(ExperienceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExperienceComponent;
    }();

    ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) {
      return new (t || ExperienceComponent)();
    };

    ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExperienceComponent,
      selectors: [["app-experience"]],
      decls: 78,
      vars: 0,
      consts: [["id", "experience"], [1, "container"], [1, "mb-5", "pb-4"], [1, "font-weight-bold", "text-primary", "text-uppercase", "letter-spacing-3"], [1, "text-uppercase", "lined"], [1, "timeline"], [1, "timeline-item", "ml-3", "pb-4"], [1, "timeline-arrow"], [1, "row", "no-gutter"], [1, "col-lg-5", "mb-4", "mb-lg-0"], [1, "font-weight-bold", "mb-2", "cv-text-primary", "text-small"], [1, "h5", "mb-0", "text-uppercase"], [1, "text-small", "mb-0"], [1, "small", "text-muted"], [1, "col-lg-7"], [1, "text-muted"], ["href", "https://www.youtube.com/channel/UC0KIY8YgsJYaCR4shqtzT_A", "target", "_blank"]],
      template: function ExperienceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Yes, we can!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "June 2019 \u2013 Present ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Department for Infrastructure and Transport, SA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Senior Web Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Adelaide, South Australia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Develop and support web applications with Angular 8+ and .NET Core. It was pretty much a success so the contract got extended again and again for several other projects.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Feb 2018 - June 2019 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Novaworks inc.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Software Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Adelaide, South Australia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Develop and support PIMS for parliaments (state & federal) in Australia, involved in the whole software life cycle as a full stack developer. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Build RESTful Web APIs with .NET Core 2.0 + SQL Server");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "SharePoint Development");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "DevOps & Azure PaaS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Build front-end UI with React or KendoUI (for AngularJS) + Typescript + jQuery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Scrum & Test driven development");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "June 2017 - Feb 2018 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Toop & Toop Real Estate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Software Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Adelaide, South Australia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Build and maintain ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "VAFIX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, ", a powerful property management system, which provides services to more than 10 real estate companies across from Australia. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, ".NET MVC5 & WebAPI + SQL Server 2015");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Front-end with jQuery & ReactJS & Bootstrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Scrum & Test-driven development");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Integrated with popular industry systems like REX and payment methods");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Covers all aspects in the real-estate industry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["ul.timeline[_ngcontent-%COMP%] {\n  list-style-type: none;\n  position: relative;\n  padding-left: 1.5rem;\n}\n\nul.timeline[_ngcontent-%COMP%]:before {\n  content: \" \";\n  background: #EDEDED;\n  display: inline-block;\n  position: absolute;\n  left: 16px;\n  width: 4px;\n  height: 100%;\n  z-index: 400;\n  border-radius: 1rem;\n}\nul.timeline[_ngcontent-%COMP%]:after {\n  content: \" \";\n  background: #fbd214;\n  display: inline-block;\n  position: absolute;\n  bottom: 0;\n  left: 9px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 3px solid #fff;\n  z-index: 400;\n}\nli.timeline-item[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n\nli.timeline-item[_ngcontent-%COMP%]::before {\n  content: \" \";\n  background: #fbd214;\n  display: inline-block;\n  position: absolute;\n  left: 10px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 3px solid #fff;\n  z-index: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9zdHlsZXMvdGltZWxpbmUuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwiL2dpdGh1Yi93b3Jrc3BhY2Uvc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0Esb0JBQUE7QUFDQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0ZGO0FES0EsMkJBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNGRjtBREtBO0VBQ0UsWUFBQTtFQUNBLG1CRXpCYztFRjBCZCxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDRkY7QURLQTtFQUNFLGNBQUE7QUNGRjtBREtBLGdDQUFBO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsbUJFNUNjO0VGNkNkLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnX3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcblxyXG4vKiBUaW1lbGluZSBob2xkZXIgKi9cclxudWwudGltZWxpbmUge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XHJcbn1cclxuXHJcbi8qIFRpbWVsaW5lIHZlcnRpY2FsIGxpbmUgKi9cclxudWwudGltZWxpbmU6YmVmb3JlIHtcclxuICBjb250ZW50OiAnICc7XHJcbiAgYmFja2dyb3VuZDogI0VERURFRDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDE2cHg7XHJcbiAgd2lkdGg6IDRweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogNDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbn1cclxuXHJcbnVsLnRpbWVsaW5lOmFmdGVyIHtcclxuICBjb250ZW50OiAnICc7XHJcbiAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogOXB4O1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcclxuICB6LWluZGV4OiA0MDA7XHJcbn1cclxuXHJcbmxpLnRpbWVsaW5lLWl0ZW0ge1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG59XHJcblxyXG4vKiBUaW1lbGluZSBpdGVtIGNpcmNsZSBtYXJrZXIgKi9cclxubGkudGltZWxpbmUtaXRlbTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnICc7XHJcbiAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcclxuICB6LWluZGV4OiA0MDA7XHJcbn1cclxuIiwiLyogVGltZWxpbmUgaG9sZGVyICovXG51bC50aW1lbGluZSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbn1cblxuLyogVGltZWxpbmUgdmVydGljYWwgbGluZSAqL1xudWwudGltZWxpbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGJhY2tncm91bmQ6ICNFREVERUQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNnB4O1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDQwMDtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxudWwudGltZWxpbmU6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgYmFja2dyb3VuZDogI2ZiZDIxNDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogOXB4O1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG4gIHotaW5kZXg6IDQwMDtcbn1cblxubGkudGltZWxpbmUtaXRlbSB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4vKiBUaW1lbGluZSBpdGVtIGNpcmNsZSBtYXJrZXIgKi9cbmxpLnRpbWVsaW5lLWl0ZW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBiYWNrZ3JvdW5kOiAjZmJkMjE0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xuICB6LWluZGV4OiA0MDA7XG59IiwiJHByaW1hcnktY29sb3I6ICNmYmQyMTQ7XHJcbiRwcmltYXJ5LWhvdmVyLWNvbG9yOiAjZDhiMzA0O1xyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-experience',
          templateUrl: './experience.component.html',
          styleUrls: ['./experience.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/experience/experience.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/experience/experience.module.ts ***!
    \*******************************************************/

  /*! exports provided: ExperienceModule */

  /***/
  function srcAppPagesExperienceExperienceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienceModule", function () {
      return ExperienceModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _experience_experience_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../experience/experience.component */
    "./src/app/pages/experience/experience.component.ts");

    var ExperienceModule = function ExperienceModule() {
      _classCallCheck(this, ExperienceModule);
    };

    ExperienceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ExperienceModule
    });
    ExperienceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ExperienceModule_Factory(t) {
        return new (t || ExperienceModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExperienceModule, {
        declarations: [_experience_experience_component__WEBPACK_IMPORTED_MODULE_2__["ExperienceComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_experience_experience_component__WEBPACK_IMPORTED_MODULE_2__["ExperienceComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_experience_experience_component__WEBPACK_IMPORTED_MODULE_2__["ExperienceComponent"]],
          exports: [_experience_experience_component__WEBPACK_IMPORTED_MODULE_2__["ExperienceComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/expertise/expertise.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/expertise/expertise.component.ts ***!
    \********************************************************/

  /*! exports provided: ExpertiseComponent */

  /***/
  function srcAppPagesExpertiseExpertiseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpertiseComponent", function () {
      return ExpertiseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ExpertiseComponent = /*#__PURE__*/function () {
      function ExpertiseComponent() {
        _classCallCheck(this, ExpertiseComponent);
      }

      _createClass(ExpertiseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExpertiseComponent;
    }();

    ExpertiseComponent.ɵfac = function ExpertiseComponent_Factory(t) {
      return new (t || ExpertiseComponent)();
    };

    ExpertiseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExpertiseComponent,
      selectors: [["app-expertise"]],
      decls: 62,
      vars: 0,
      consts: [["id", "expertise"], [1, "container"], [1, "mb-5", "pb-4"], [1, "font-weight-bold", "text-primary", "text-uppercase", "letter-spacing-3"], [1, "text-uppercase", "lined"], [1, "row"], [1, "col-md-6", "mb-5"], [1, "h4"], [1, "text-primary", "mr-2"], [1, "text-muted", "text-small", "ml-4", "pl-3"], [1, "mb-2"], [1, "m-0"], [1, "col-md-6", "mb-5", "mb-md-0"], [1, "col-md-6"]],
      template: function ExpertiseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Provide you complete solutions.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Expertise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "01");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ASP.NET Core");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "dl", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "dt", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ASP.NET Core (C#), EntityFramwork/Linq, RESTful & Graph APIs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "dd", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "- Strive to excel in building secure, robust and flexible applications.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "dd", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "- OOP & SOLID principles.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "dd", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "- High quality & performance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "02");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Angular 8+ / React");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "dl", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "dt", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Building SPAs with Typescript, Angular/React and Bootstrap.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "dd", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "- Solid knowledge of HTML/CSS3 and Bootstrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "dd", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "- Reactive programming with RxJS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "dd", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "- State management with redux (React), NgRx (Angular)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "03");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Relational Databases");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "dl", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "dt", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "MS SQL Server, Postgres, MySQL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "dd", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "- Proficient in SQL scripting");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "dd", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "- Store Procedures & functions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "04");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Cloud, DevOps & Others");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "dl", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "dd", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "- GIT as Version Control with Github or Bitbucket");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "dd", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "- Agile & Scrum with JIRA or Zenhub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "dd", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "- Dockerized development");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "dd", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "- DevOps & Cloud-based Deployments on Azure, Aws, Github, Bamboo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGVydGlzZS9leHBlcnRpc2UuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpertiseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-expertise',
          templateUrl: './expertise.component.html',
          styleUrls: ['./expertise.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/expertise/expertise.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/expertise/expertise.module.ts ***!
    \*****************************************************/

  /*! exports provided: ExpertiseModule */

  /***/
  function srcAppPagesExpertiseExpertiseModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpertiseModule", function () {
      return ExpertiseModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _expertise_expertise_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../expertise/expertise.component */
    "./src/app/pages/expertise/expertise.component.ts");

    var ExpertiseModule = function ExpertiseModule() {
      _classCallCheck(this, ExpertiseModule);
    };

    ExpertiseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ExpertiseModule
    });
    ExpertiseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ExpertiseModule_Factory(t) {
        return new (t || ExpertiseModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExpertiseModule, {
        declarations: [_expertise_expertise_component__WEBPACK_IMPORTED_MODULE_2__["ExpertiseComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_expertise_expertise_component__WEBPACK_IMPORTED_MODULE_2__["ExpertiseComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpertiseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_expertise_expertise_component__WEBPACK_IMPORTED_MODULE_2__["ExpertiseComponent"]],
          exports: [_expertise_expertise_component__WEBPACK_IMPORTED_MODULE_2__["ExpertiseComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/footer/footer.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/footer/footer.component.ts ***!
    \**************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppPagesFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 30,
      vars: 0,
      consts: [[1, "container", "text-center", "section-padding-y"], [1, "row", "px-4"], [1, "col-lg-7", "mx-auto"], [1, "text-uppercase", "mb-0"], [1, "cv-text-primary", "text-uppercase", "mb-0", "letter-spacing-3"], [1, "text-muted", "my-4"], [1, "list-inline", "mb-0"], [1, "list-inline-item"], ["href", "https://www.facebook.com/zhigangji", 1, "social-link"], [1, "fa", "fa-facebook-f"], ["href", "https://twitter.com/zil_ji", 1, "social-link"], [1, "fa", "fa-twitter"], ["href", "https://www.linkedin.com/in/derek-ji-114004168/", 1, "social-link"], [1, "fa", "fa-linkedin"], ["href", "https://medium.com/@derek_ji", 1, "social-link"], [1, "fa", "fa-medium"], [1, "copyrights", "px-4"], [1, "container", "py-4", "border-top", "text-center"], [1, "mb-0", "text-muted", "py-2"], ["href", "https://bootstraptemple.com"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Derek Ji");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Full Stack Web Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ASP.NET Core | Angular | React | Bootstrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\xA9 All rights reserved. Template inspired by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Bootstrap Temple");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".social-link[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  border: 2px solid #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #aaa;\n  transition: all 0.3s;\n  font-size: 0.8rem;\n}\n\n.social-link[_ngcontent-%COMP%]:hover, .social-link[_ngcontent-%COMP%]:focus {\n  background: #fbd214;\n  color: #fff;\n  text-decoration: none;\n  border-color: #fbd214;\n}\n\n.section-padding-y[_ngcontent-%COMP%] {\n  padding-top: 6.5rem;\n  padding-bottom: 6.5rem;\n}\n\n.copyrights[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9zdHlsZXMvc29jaWFsLWxpbmsuc2NzcyIsInNyYy9hcHAvcGFnZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsIi9naXRodWIvd29ya3NwYWNlL3NyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiL2dpdGh1Yi93b3Jrc3BhY2Uvc3JjL2FwcC9wYWdlcy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBRUEsYUFBQTtFQUVBLG1CQUFBO0VBRUEsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJFakJjO0VGa0JkLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHFCRXBCYztBRHFCaEI7O0FFbEJBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBRnFCRjs7QUVsQkE7RUFDRSxnQkFBQTtBRnFCRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29jaWFsLWxpbmsge1xyXG4gIHdpZHRoOiAzNHB4O1xyXG4gIGhlaWdodDogMzRweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6ICNhYWE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuXHJcbi5zb2NpYWwtbGluazpob3ZlciwgLnNvY2lhbC1saW5rOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxufVxyXG4iLCIuc29jaWFsLWxpbmsge1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogI2FhYTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uc29jaWFsLWxpbms6aG92ZXIsIC5zb2NpYWwtbGluazpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICNmYmQyMTQ7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogI2ZiZDIxNDtcbn1cblxuLnNlY3Rpb24tcGFkZGluZy15IHtcbiAgcGFkZGluZy10b3A6IDYuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDYuNXJlbTtcbn1cblxuLmNvcHlyaWdodHMge1xuICBmb250LXNpemU6IDAuN2VtO1xufSIsIiRwcmltYXJ5LWNvbG9yOiAjZmJkMjE0O1xyXG4kcHJpbWFyeS1ob3Zlci1jb2xvcjogI2Q4YjMwNDtcclxuIiwiQGltcG9ydCAnX3ZhcmlhYmxlcy5zY3NzJztcclxuQGltcG9ydCAnc29jaWFsLWxpbmsuc2Nzcyc7XHJcblxyXG4uc2VjdGlvbi1wYWRkaW5nLXkge1xyXG4gIHBhZGRpbmctdG9wOiA2LjVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDYuNXJlbTtcclxufVxyXG5cclxuLmNvcHlyaWdodHMge1xyXG4gIGZvbnQtc2l6ZTogMC43ZW07XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/footer/footer.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/footer/footer.module.ts ***!
    \***********************************************/

  /*! exports provided: FooterModule */

  /***/
  function srcAppPagesFooterFooterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterModule", function () {
      return FooterModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/pages/footer/footer.component.ts");

    var FooterModule = function FooterModule() {
      _classCallCheck(this, FooterModule);
    };

    FooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FooterModule
    });
    FooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FooterModule_Factory(t) {
        return new (t || FooterModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FooterModule, {
        declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
          exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/header/header.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/header/header.component.ts ***!
    \**************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppPagesHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_scroll_spy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @core/scroll-spy.service */
    "./src/app/core/scroll-spy.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    function HeaderComponent_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var item_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.scrollTo(item_r1.section);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(current)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#", item_r1.section, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r0.isCurrentSection(item_r1.section)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.displayName, " ");
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(scroll) {
        var _this = this;

        _classCallCheck(this, HeaderComponent);

        this.scroll = scroll;
        this.navItems = [{
          section: 'hero',
          displayName: 'Home'
        }, {
          section: 'about',
          displayName: 'About'
        }, {
          section: 'expertise',
          displayName: 'Expertise'
        }, {
          section: 'education',
          displayName: 'Education'
        }, {
          section: 'experience',
          displayName: 'Experience'
        }, {
          section: 'contact',
          displayName: 'Contact'
        }];

        this.onScroll = function (event) {
          var scrollTop = event.srcElement.scrollingElement.scrollTop;
          _this.navActive = scrollTop > 5 ? 'active' : '';
        };
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.addEventListener('scroll', this.onScroll, true);
        }
      }, {
        key: "scrollTo",
        value: function scrollTo(section) {
          this.scroll.scrollTo(section);
        }
      }, {
        key: "isCurrentSection",
        value: function isCurrentSection(section) {
          return this.scroll.currentSection === section;
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_scroll_spy_service__WEBPACK_IMPORTED_MODULE_1__["ScrollService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 10,
      vars: 4,
      consts: [[1, "header"], [1, "container"], ["href", "#", 1, "navbar-brand"], ["src", "assets/images/DJ.PNG", "width", "32"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "navbar-toggler-right"], [1, "fa", "fa-bars"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], [1, "nav-link", "link-scroll", 3, "href", "ngClass", "click"], [1, "sr-only"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_li_9_Template, 5, 5, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("navbar navbar-expand-lg fixed-top ", ctx.navActive, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navItems);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: [".nav-link[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-weight: 400;\n  color: #2E3349;\n  text-transform: uppercase;\n  font-size: 0.85rem;\n  font-weight: bold;\n  letter-spacing: 0.1em;\n  transition: all 0.3s;\n}\n\n.nav-link.disabled[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\n.nav-link.active[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%]:hover, .nav-link[_ngcontent-%COMP%]:focus {\n  color: #fbd214;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  margin-bottom: -1px;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus {\n  border-color: #e9ecef #e9ecef #dee2e6;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.disabled[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%]   .nav-item.show[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #495057;\n  background-color: #fff;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  margin-top: -1px;\n}\n\n.nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n}\n\n.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #fbd214;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important;\n  background: #fff;\n}\n\n.navbar.active[_ngcontent-%COMP%] {\n  background: #fff;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);\n}\n\n@media (max-width: 991.98px) {\n  .navbar[_ngcontent-%COMP%] {\n    background: #fff;\n    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);\n  }\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  color: #2E3349;\n}\n\n.sp-logo-name[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 24px;\n  color: #fbd214;\n  font-weight: bold;\n}\n\n.i-logo-dot[_ngcontent-%COMP%] {\n  font-size: 0.4em;\n  color: grey;\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9zdHlsZXMvYnQtbmF2LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvZ2l0aHViL3dvcmtzcGFjZS9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvcGFnZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtBQ0RGOztBRElBO0VBQ0UsY0VsQmM7QURpQmhCOztBRElBO0VBQ0UsbUJBQUE7QUNERjs7QURJQTtFQUNFLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQ0RGOztBRElBO0VBQ0UscUNBQUE7QUNERjs7QURJQTtFQUNFLGNBQUE7QUNERjs7QURJQTs7RUFFRSxjQUFBO0VBQ0Esc0JBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0FDREY7O0FESUE7RUFDRSxzQkFBQTtBQ0RGOztBRElBOztFQUVFLFdBQUE7RUFDQSx5QkV4RGM7QUR1RGhCOztBRXBEQTtFQUNFLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FGdURGOztBRXBEQTtFQUNFLGdCQUFBO0VBQ0Esd0NBQUE7QUZ1REY7O0FFcERBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLHdDQUFBO0VGdURGO0FBQ0Y7O0FFcERBO0VBQ0UsY0FBQTtBRnNERjs7QUVuREE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjRDdCYztFQzhCZCxpQkFBQTtBRnNERjs7QUVuREE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRnNERiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdfdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLm5hdi1saW5rIHtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjMkUzMzQ5O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLm5hdi1saW5rLmRpc2FibGVkIHtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxufVxyXG5cclxuLm5hdi1saW5rLmFjdGl2ZSwgLm5hdi1saW5rOmhvdmVyLCAubmF2LWxpbms6Zm9jdXMge1xyXG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxufVxyXG5cclxuLm5hdi10YWJzIC5uYXYtaXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxufVxyXG5cclxuLm5hdi10YWJzIC5uYXYtbGluayB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4yNXJlbTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4yNXJlbTtcclxufVxyXG5cclxuLm5hdi10YWJzIC5uYXYtbGluazpob3ZlciwgLm5hdi10YWJzIC5uYXYtbGluazpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZTllY2VmICNlOWVjZWYgI2RlZTJlNjtcclxufVxyXG5cclxuLm5hdi10YWJzIC5uYXYtbGluay5kaXNhYmxlZCB7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbn1cclxuXHJcbi5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlLFxyXG4ubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rIHtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubmF2LXRhYnMgLmRyb3Bkb3duLW1lbnUge1xyXG4gIG1hcmdpbi10b3A6IC0xcHg7XHJcbn1cclxuXHJcbi5uYXYtcGlsbHMgLm5hdi1saW5rIHtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG59XHJcblxyXG4ubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUsXHJcbi5uYXYtcGlsbHMgLnNob3cgPiAubmF2LWxpbmsge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG59XHJcbiIsIi5uYXYtbGluayB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzJFMzM0OTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLm5hdi1saW5rLmRpc2FibGVkIHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi5uYXYtbGluay5hY3RpdmUsIC5uYXYtbGluazpob3ZlciwgLm5hdi1saW5rOmZvY3VzIHtcbiAgY29sb3I6ICNmYmQyMTQ7XG59XG5cbi5uYXYtdGFicyAubmF2LWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xufVxuXG4ubmF2LXRhYnMgLm5hdi1saW5rIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4ubmF2LXRhYnMgLm5hdi1saW5rOmhvdmVyLCAubmF2LXRhYnMgLm5hdi1saW5rOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjZTllY2VmICNlOWVjZWYgI2RlZTJlNjtcbn1cblxuLm5hdi10YWJzIC5uYXYtbGluay5kaXNhYmxlZCB7XG4gIGNvbG9yOiAjNmM3NTdkO1xufVxuXG4ubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSxcbi5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmsge1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLm5hdi10YWJzIC5kcm9wZG93bi1tZW51IHtcbiAgbWFyZ2luLXRvcDogLTFweDtcbn1cblxuLm5hdi1waWxscyAubmF2LWxpbmsge1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4ubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUsXG4ubmF2LXBpbGxzIC5zaG93ID4gLm5hdi1saW5rIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmQyMTQ7XG59XG5cbi5uYXZiYXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5uYXZiYXIuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5uYXZiYXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxufVxuLm5hdmJhci10b2dnbGVyIHtcbiAgY29sb3I6ICMyRTMzNDk7XG59XG5cbi5zcC1sb2dvLW5hbWUge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjZmJkMjE0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmktbG9nby1kb3Qge1xuICBmb250LXNpemU6IDAuNGVtO1xuICBjb2xvcjogZ3JleTtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn0iLCIkcHJpbWFyeS1jb2xvcjogI2ZiZDIxNDtcclxuJHByaW1hcnktaG92ZXItY29sb3I6ICNkOGIzMDQ7XHJcbiIsIkBpbXBvcnQgJ192YXJpYWJsZXMuc2Nzcyc7XHJcbkBpbXBvcnQgJ2J0LW5hdi5zY3NzJztcclxuXHJcbi5uYXZiYXIge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHBhZGRpbmctdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLm5hdmJhci5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgLm5hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlciB7XHJcbiAgY29sb3I6ICMyRTMzNDk7XHJcbn1cclxuXHJcbi5zcC1sb2dvLW5hbWUge1xyXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmktbG9nby1kb3Qge1xyXG4gIGZvbnQtc2l6ZTogMC40ZW07XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _core_scroll_spy_service__WEBPACK_IMPORTED_MODULE_1__["ScrollService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/header/header.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/header/header.module.ts ***!
    \***********************************************/

  /*! exports provided: HeaderModule */

  /***/
  function srcAppPagesHeaderHeaderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderModule", function () {
      return HeaderModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/pages/header/header.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var HeaderModule = function HeaderModule() {
      _classCallCheck(this, HeaderModule);
    };

    HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HeaderModule
    });
    HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HeaderModule_Factory(t) {
        return new (t || HeaderModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderModule, {
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
          exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/hero/hero.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/hero/hero.component.ts ***!
    \**********************************************/

  /*! exports provided: HeroComponent */

  /***/
  function srcAppPagesHeroHeroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroComponent", function () {
      return HeroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeroComponent = /*#__PURE__*/function () {
      function HeroComponent() {
        _classCallCheck(this, HeroComponent);
      }

      _createClass(HeroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeroComponent;
    }();

    HeroComponent.ɵfac = function HeroComponent_Factory(t) {
      return new (t || HeroComponent)();
    };

    HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeroComponent,
      selectors: [["app-hero"]],
      decls: 28,
      vars: 0,
      consts: [["id", "hero", 1, "hero", "bg-cover", "bg-center", "mt-5", 2, "background", "url(assets/images/bg-developing.jpg)"], [1, "container", "py-5", "my-5", "index-forward"], [1, "row"], [1, "col-md-8", "text-white"], [1, "h4", "text-primary", "font-weight-normal", "mb-0"], [1, "text-uppercase", "text-xl", "mb-0"], [1, "cv-text-primary"], [1, "text-uppercase", "h4", "font-weight-normal"], [1, "font-weight-normal", "mb-5", "text-light"], [1, "text-shadow"], ["href", "https://www.youracclaim.com/badges/ab2a2250-c8f3-4877-b844-9f0cdf102fa3/linked_in_profile", "target", "_blank", 1, "text-white"], ["href", "https://www.youracclaim.com/badges/0001167c-06e8-4949-834e-5b7191a01547/linked_in_profile", "target", "_blank", 1, "text-white"]],
      template: function HeroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hi, I am");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Derek ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ji");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Full Stack Web Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ".NET Core (C#) | Angular | React | Bootstrap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Turn your business into successful solutions and web applications.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "10+ years experience on commercial application development");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Practical on relational database like SQL Server, Postgres");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " MCSA: Web Applications - Certified 2018 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " MCSD: App Builder \u2014 Certified 2018 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 800;\n  line-height: 1.2;\n  color: inherit;\n}\n\n.hero[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 40%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: rgba(46, 51, 73, 0.75);\n}\n\n@media (max-width: 991.98px) {\n  .hero[_ngcontent-%COMP%]::before {\n    background: rgba(46, 51, 73, 0.5);\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9zdHlsZXMvYnQtdHlwZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9oZXJvL2hlcm8uY29tcG9uZW50LnNjc3MiLCIvZ2l0aHViL3dvcmtzcGFjZS9zcmMvYXBwL3BhZ2VzL2hlcm8vaGVyby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7RUFFRSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNERjs7QUNMQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxrQ0FBQTtBRFFGOztBQ0xBO0VBQ0U7SUFDRSxpQ0FBQTtJQUNBLFdBQUE7RURRRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGVyby9oZXJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnX3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsXHJcbi5oMSwgLmgyLCAuaDMsLmg0LCAuaDUsIC5oNiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG4iLCJoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LFxuLmgxLCAuaDIsIC5oMywgLmg0LCAuaDUsIC5oNiB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4uaGVybzo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSg0NiwgNTEsIDczLCAwLjc1KTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5oZXJvOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNDYsIDUxLCA3MywgMC41KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSIsIkBpbXBvcnQgJ2J0LXR5cGUuc2Nzcyc7XHJcblxyXG4uaGVybzo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDogNDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg0NiwgNTEsIDczLCAwLjc1KTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgLmhlcm86OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ2LCA1MSwgNzMsIDAuNSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hero',
          templateUrl: './hero.component.html',
          styleUrls: ['./hero.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/hero/hero.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/hero/hero.module.ts ***!
    \*******************************************/

  /*! exports provided: HeroModule */

  /***/
  function srcAppPagesHeroHeroModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroModule", function () {
      return HeroModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _hero_hero_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../hero/hero.component */
    "./src/app/pages/hero/hero.component.ts");

    var HeroModule = function HeroModule() {
      _classCallCheck(this, HeroModule);
    };

    HeroModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HeroModule
    });
    HeroModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HeroModule_Factory(t) {
        return new (t || HeroModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeroModule, {
        declarations: [_hero_hero_component__WEBPACK_IMPORTED_MODULE_2__["HeroComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_hero_hero_component__WEBPACK_IMPORTED_MODULE_2__["HeroComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_hero_hero_component__WEBPACK_IMPORTED_MODULE_2__["HeroComponent"]],
          exports: [_hero_hero_component__WEBPACK_IMPORTED_MODULE_2__["HeroComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          exports: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /github/workspace/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map