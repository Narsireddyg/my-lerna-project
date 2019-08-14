(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('common-register', ['exports', '@angular/core'], factory) :
    (factory((global['common-register'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CommonRegisterService = /** @class */ (function () {
        function CommonRegisterService() {
        }
        CommonRegisterService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CommonRegisterService.ctorParameters = function () { return []; };
        /** @nocollapse */ CommonRegisterService.ngInjectableDef = i0.defineInjectable({ factory: function CommonRegisterService_Factory() { return new CommonRegisterService(); }, token: CommonRegisterService, providedIn: "root" });
        return CommonRegisterService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CommonRegisterComponent = /** @class */ (function () {
        function CommonRegisterComponent() {
        }
        /**
         * @return {?}
         */
        CommonRegisterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        CommonRegisterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'common-register',
                        template: "\n    <p>\n      common-register will be Implemented Soon!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        CommonRegisterComponent.ctorParameters = function () { return []; };
        return CommonRegisterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CommonRegisterModule = /** @class */ (function () {
        function CommonRegisterModule() {
        }
        CommonRegisterModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [CommonRegisterComponent],
                        imports: [],
                        exports: [CommonRegisterComponent]
                    },] }
        ];
        return CommonRegisterModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CommonRegisterService = CommonRegisterService;
    exports.CommonRegisterComponent = CommonRegisterComponent;
    exports.CommonRegisterModule = CommonRegisterModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=common-register.umd.js.map