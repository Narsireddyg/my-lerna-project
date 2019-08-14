import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CommonLoginService = /** @class */ (function () {
    function CommonLoginService() {
    }
    CommonLoginService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CommonLoginService.ctorParameters = function () { return []; };
    /** @nocollapse */ CommonLoginService.ngInjectableDef = defineInjectable({ factory: function CommonLoginService_Factory() { return new CommonLoginService(); }, token: CommonLoginService, providedIn: "root" });
    return CommonLoginService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CommonLoginComponent = /** @class */ (function () {
    function CommonLoginComponent() {
    }
    /**
     * @return {?}
     */
    CommonLoginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CommonLoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'common-login',
                    template: "\n    <p>\n      common-login will be Implemented Soon!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    CommonLoginComponent.ctorParameters = function () { return []; };
    return CommonLoginComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CommonLoginModule = /** @class */ (function () {
    function CommonLoginModule() {
    }
    CommonLoginModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CommonLoginComponent],
                    imports: [],
                    exports: [CommonLoginComponent]
                },] }
    ];
    return CommonLoginModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CommonLoginService, CommonLoginComponent, CommonLoginModule };

//# sourceMappingURL=common-login.js.map