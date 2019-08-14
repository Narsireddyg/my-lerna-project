import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CommonRegisterService = /** @class */ (function () {
    function CommonRegisterService() {
    }
    CommonRegisterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CommonRegisterService.ctorParameters = function () { return []; };
    /** @nocollapse */ CommonRegisterService.ngInjectableDef = defineInjectable({ factory: function CommonRegisterService_Factory() { return new CommonRegisterService(); }, token: CommonRegisterService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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

export { CommonRegisterService, CommonRegisterComponent, CommonRegisterModule };

//# sourceMappingURL=common-register.js.map