(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/@cloudinary/angular-5.x/__ivy_ngcc__/fesm2015/cloudinary-angular-5.x.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@cloudinary/angular-5.x/__ivy_ngcc__/fesm2015/cloudinary-angular-5.x.js ***!
  \**********************************************************************************************/
/*! exports provided: CLOUDINARY_CONFIGURATION, CLOUDINARY_LIB, Cloudinary, CloudinaryBackgroundImageDirective, CloudinaryImage, CloudinaryImageSourceDirective, CloudinaryModule, CloudinaryPlaceHolder, CloudinaryTransformationDirective, CloudinaryVideo, LazyLoadDirective, createCloudinary, isBrowser, isJsonLikeString, isNamedNodeMap, namedNodeMapToObject, provideCloudinary, transformKeyNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOUDINARY_CONFIGURATION", function() { return CLOUDINARY_CONFIGURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOUDINARY_LIB", function() { return CLOUDINARY_LIB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cloudinary", function() { return Cloudinary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudinaryBackgroundImageDirective", function() { return CloudinaryBackgroundImageDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudinaryImage", function() { return CloudinaryImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudinaryImageSourceDirective", function() { return CloudinaryImageSourceDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudinaryModule", function() { return CloudinaryModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudinaryPlaceHolder", function() { return CloudinaryPlaceHolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudinaryTransformationDirective", function() { return CloudinaryTransformationDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudinaryVideo", function() { return CloudinaryVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadDirective", function() { return LazyLoadDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCloudinary", function() { return createCloudinary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJsonLikeString", function() { return isJsonLikeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNamedNodeMap", function() { return isNamedNodeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namedNodeMapToObject", function() { return namedNodeMapToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideCloudinary", function() { return provideCloudinary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformKeyNames", function() { return transformKeyNames; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns true if the given string begins with a left curly brace and ends with a right curly brace, e.g.
 * "{asdas d}" will return true, "asdasd}" will return false.
 *
 * this function does not validate the correctness of the string content other than the first and last character
 * \@param str
 * \@return boolean
 * @type {?}
 */



function CloudinaryImage_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r0.shouldShowPlaceHolder ? "inline" : "none");
} }
const _c0 = ["*"];
const isJsonLikeString = function (str) {
    // [\s\S] allows the string to contain new lines
    return str && typeof str === 'string' && (str.trim().match(/^{[\s\S]*?}$/) !== null);
};
const ɵ0 = isJsonLikeString;
/** @type {?} */
const isArrayLikeString = function (str) {
    return str && typeof str === 'string' && (str.trim().match(/^\[[\s\S]*?]$/) !== null);
};
const ɵ1 = isArrayLikeString;
/** @type {?} */
const isNamedNodeMap = function (obj) {
    return obj && (obj.constructor.name === 'NamedNodeMap' || obj instanceof NamedNodeMap);
};
const ɵ2 = isNamedNodeMap;
/** @type {?} */
const namedNodeMapToObject = function (source) {
    /** @type {?} */
    let target = {};
    Object.keys(source).forEach(index => {
        /** @type {?} */
        const name = source[index].name;
        /** @type {?} */
        const value = source[index].value;
        target[name] = value;
    });
    return target;
};
const ɵ3 = namedNodeMapToObject;
/** @type {?} */
const transformKeyNames = function (obj) {
    /** @type {?} */
    let _obj = obj;
    if (isJsonLikeString(obj) || isArrayLikeString(obj)) {
        // Given attribute value is in the form of a JSON object -
        // Transforms the string into an object or array, as the Javascript API expects
        if (isArrayLikeString(obj)) {
            obj = obj.replace(/'/g, '"');
        }
        _obj = JSON.parse(obj);
    }
    else if (isNamedNodeMap(obj)) {
        _obj = namedNodeMapToObject(obj);
    }
    if (Array.isArray(_obj)) {
        // Transform all the array values (e.g. transformation array)
        _obj = _obj.map(currentValue => {
            return transformKeyNames(currentValue);
        });
    }
    else if (typeof _obj === 'object') {
        Object.keys(_obj).forEach(key => {
            // Replace the key name with the snake_case
            // Then strip cld prefix if it exists (with an optional dash or underscore)
            /** @type {?} */
            const kebabKey = key.replace(/-/g, '_').toLocaleLowerCase().replace(/^cld(-|_)?/, '');
            /** @type {?} */
            const kebabValue = transformKeyNames(_obj[key]);
            delete _obj[key];
            _obj[kebabKey] = kebabValue;
        });
    }
    return _obj;
};
const ɵ4 = transformKeyNames;
class Cloudinary {
    /**
     * @param {?} cloudinaryJsLib
     * @param {?} configuration
     */
    constructor(cloudinaryJsLib, configuration) {
        // Cloudinary JS already clones the given configuration so no need to clone it here too
        if (cloudinaryJsLib.CloudinaryJQuery) {
            this._cloudinaryInstance = new cloudinaryJsLib.CloudinaryJQuery(configuration);
        }
        else {
            this._cloudinaryInstance = new cloudinaryJsLib.Cloudinary(configuration);
        }
    }
    /**
     * @return {?}
     */
    get cloudinaryInstance() {
        return this._cloudinaryInstance;
    }
    /**
     * @return {?}
     */
    config() {
        return this._cloudinaryInstance.config();
    }
    /**
     * @param {...?} parameters
     * @return {?}
     */
    url(...parameters) {
        return this._cloudinaryInstance.url(...parameters);
    }
    /**
     * @param {...?} parameters
     * @return {?}
     */
    imageTag(...parameters) {
        return this._cloudinaryInstance.imageTag(...parameters);
    }
    /**
     * @param {...?} parameters
     * @return {?}
     */
    videoTag(...parameters) {
        return this._cloudinaryInstance.videoTag(...parameters);
    }
    /**
     * @param {?} img
     * @param {?} options
     * @return {?}
     */
    responsive(img, options) {
        // Cloudinary underlying JS library will handle responsive behavior
        this._cloudinaryInstance.cloudinary_update(img, options);
        this._cloudinaryInstance.responsive(options, false);
    }
    /**
     * Transforms a set of attributes and chained transformations to an options object that can be consumed by Cloudinary JS API
     * @param {?} attributes HTML element attributes
     * @param {?=} childTransformations QueryList with the element's <cl-transformation> children for chained transformations
     * @return {?} An options object that can be consumed by Cloudinary JS API
     */
    toCloudinaryAttributes(attributes, childTransformations) {
        /** @type {?} */
        const options = transformKeyNames(attributes);
        // Add chained transformations
        if (childTransformations && childTransformations.length > 0) {
            options.transformation = [];
            // Support chained transformations
            childTransformations.forEach(transformation => {
                options.transformation.push(this.toCloudinaryAttributes(transformation.getAttributes()));
            });
        }
        // Add responsiveness
        if (options.responsive === '' || options.responsive === 'true' || options.responsive === true) {
            options.responsive = true;
        }
        return options;
    }
    ;
}
if (false) {}
/* Return a provider object that creates our configurable service */
/**
 * @param {?} cloudinaryJsLib
 * @param {?} configuration
 * @return {?}
 */
function provideCloudinary(cloudinaryJsLib, configuration) {
    return { provide: Cloudinary, useFactory: () => new Cloudinary(cloudinaryJsLib, configuration) };
}
;
/** @type {?} */
const isBrowser = function () {
    return typeof window !== 'undefined';
}
// For unit tests
;
const ɵ5 = isBrowser;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CloudinaryTransformationDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    getAttributes() {
        return this.el.nativeElement.attributes;
    }
}
CloudinaryTransformationDirective.ɵfac = function CloudinaryTransformationDirective_Factory(t) { return new (t || CloudinaryTransformationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
CloudinaryTransformationDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CloudinaryTransformationDirective, selectors: [["cl-transformation"]] });
/** @nocollapse */
CloudinaryTransformationDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CloudinaryTransformationDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'cl-transformation'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CloudinaryPlaceHolder {
    /**
     * @param {?} cloudinary
     * @param {?} renderer
     * @param {?} el
     */
    constructor(cloudinary, renderer, el) {
        this.cloudinary = cloudinary;
        this.renderer = renderer;
        this.el = el;
        this.options = {};
    }
    /**
     * @param {?} width
     * @return {?}
     */
    setWidth(width) {
        this.itemWidth = width;
    }
    /**
     * @param {?} height
     * @return {?}
     */
    setHeight(height) {
        this.itemHeight = height;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    setPublicId(id) {
        this.publicId = id;
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        /** @type {?} */
        const imageTag = this.cloudinary.imageTag(this.publicId, this.options);
        this.setElementAttributes(this.el.nativeElement.children[0], imageTag.attributes());
        this.placeholderImg = this.getPlaceholderImage();
    }
    /**
     * @return {?}
     */
    getPlaceholderImage() {
        if (this.type === 'predominant-color' && this.itemHeight && this.itemWidth) {
            return this.cloudinary.url(this.publicId, Object.assign({ placeholder: 'predominant-color-pixel' || false }, this.options));
        }
        else {
            return this.cloudinary.url(this.publicId, Object.assign({ placeholder: this.type || true }, this.options));
        }
    }
    /**
     * @param {?} element
     * @param {?} attributesLiteral
     * @return {?}
     */
    setElementAttributes(element, attributesLiteral) {
        Object.keys(attributesLiteral).forEach(attrName => {
            if (attrName !== 'src' && attrName !== 'style') {
                this.renderer.setAttribute(element, attrName, attributesLiteral[attrName]);
            }
        });
    }
}
CloudinaryPlaceHolder.ɵfac = function CloudinaryPlaceHolder_Factory(t) { return new (t || CloudinaryPlaceHolder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Cloudinary), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
CloudinaryPlaceHolder.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CloudinaryPlaceHolder, selectors: [["cl-placeholder"]], hostVars: 5, hostBindings: function CloudinaryPlaceHolder_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("public-id", ctx.publicId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.itemWidth)("height", ctx.itemHeight);
    } }, inputs: { type: "type" }, decls: 1, vars: 1, consts: [[3, "src"]], template: function CloudinaryPlaceHolder_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.placeholderImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, encapsulation: 2 });
/** @nocollapse */
CloudinaryPlaceHolder.ctorParameters = () => [
    { type: Cloudinary },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
CloudinaryPlaceHolder.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['type',] }],
    itemWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width',] }],
    itemHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height',] }],
    publicId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.public-id',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CloudinaryPlaceHolder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cl-placeholder',
                template: `<img [src]="this.placeholderImg">`
            }]
    }], function () { return [{ type: Cloudinary }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { itemWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width']
        }], itemHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.height']
        }], publicId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.public-id']
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['type']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let APP_VERSION = '1.3.4';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let SDKAnalyticsConstants = {
    sdkSemver: APP_VERSION,
    techVersion: _angular_core__WEBPACK_IMPORTED_MODULE_0__["VERSION"].full,
    sdkCode: 'K',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CloudinaryImage {
    /**
     * @param {?} el
     * @param {?} cloudinary
     * @param {?} renderer
     */
    constructor(el, cloudinary, renderer) {
        this.el = el;
        this.cloudinary = cloudinary;
        this.renderer = renderer;
        this.onLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // Callback when an image is loaded successfully
        // Callback when an image is loaded successfully
        this.onError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // Callback when an image is loaded with error
        this.shouldShowPlaceHolder = true;
        this.options = {};
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (isBrowser()) {
            // Create an observer instance
            this.observer = new MutationObserver(() => {
                this.loadImage();
            });
            // Observe changes to attributes or child transformations to re-render the image
            /** @type {?} */
            const config = { attributes: true, childList: true };
            // pass in the target node, as well as the observer options
            this.observer.observe(this.el.nativeElement, config);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // Listen to changes on the data-bound property 'publicId'.
        // Update component unless this is the first value assigned.
        if (changes.publicId && !changes.publicId.isFirstChange()) {
            this.loadImage();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.observer && this.observer.disconnect) {
            this.observer.disconnect();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.loadImage();
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        if (this.width && this.placeholderComponent) {
            this.placeholderComponent.setWidth(this.width);
        }
        if (this.height && this.placeholderComponent) {
            this.placeholderComponent.setHeight(this.height);
        }
        if (this.placeholderComponent) {
            this.placeholderComponent.setPublicId(this.publicId);
        }
    }
    /**
     * appends opacity and position to cl-img->img when placeholder is displayed
     * removes styling from cl-img->img when placeholder does not display
     * @return {?}
     */
    setPlaceHolderStyle() {
        if (this.shouldShowPlaceHolder) {
            this.renderer.setStyle(this.el.nativeElement.children[0], 'opacity', '0');
            this.renderer.setStyle(this.el.nativeElement.children[0], 'position', 'absolute');
        }
        else {
            // note this only removes styling from cl-img->img and not cl-img
            this.renderer.removeAttribute(this.el.nativeElement.children[0], 'style');
        }
    }
    /**
     * @return {?}
     */
    hasLoaded() {
        this.shouldShowPlaceHolder = false;
    }
    /**
     * @return {?}
     */
    loadImage() {
        // https://github.com/angular/universal#universal-gotchas
        // Fetch the image only for client side rendering by the browser
        if (isBrowser()) {
            if (!this.publicId) {
                throw new Error('You must set the public id of the image to load, e.g. <cl-image public-id={{photo.public_id}}...></cl-image>');
            }
            /** @type {?} */
            const nativeElement = this.el.nativeElement;
            /** @type {?} */
            const image = nativeElement.children[0];
            // Add onload and onerror handlers
            image.onload = e => {
                this.onLoad.emit(e);
            };
            image.onerror = e => {
                this.onError.emit(e);
            };
            this.options = this.cloudinary.toCloudinaryAttributes(nativeElement.attributes, this.transformations);
            if (this.clientHints || (typeof this.clientHints === 'undefined' && this.cloudinary.config().client_hints)) {
                delete this.options['class'];
                delete this.options['data-src'];
                delete this.options['responsive'];
            }
            if (this.cloudinary.config().urlAnalytics) {
                this.options = Object.assign({}, SDKAnalyticsConstants, this.options);
            }
            if (this.placeholderComponent) {
                this.placeholderHandler(this.options, image);
            }
            if (this.accessibility) {
                this.options['src'] = this.accessibilityModeHandler();
            }
            /** @type {?} */
            const imageTag = this.cloudinary.imageTag(this.publicId, this.options);
            this.setElementAttributes(image, imageTag.attributes());
            if (this.options['responsive']) {
                this.cloudinary.responsive(image, this.options);
            }
        }
    }
    /**
     * @param {?} element
     * @param {?} attributesLiteral
     * @return {?}
     */
    setElementAttributes(element, attributesLiteral) {
        Object.keys(attributesLiteral).forEach(attrName => {
            /** @type {?} */
            const attr = attrName === 'src' && this.loading === 'lazy' ? 'data-src' : attrName;
            this.renderer.setAttribute(element, attr, attributesLiteral[attrName]);
        });
        // Enforcing placeholder style
        if (this.placeholderComponent) {
            this.setPlaceHolderStyle();
        }
    }
    /**
     * Handles placeholder options
     * In case of responsive sets width from resize
     * In case width or height is known takes 10% of original dimension
     * @param {?} options
     * @param {?} image
     * @return {?}
     */
    placeholderHandler(options, image) {
        /** @type {?} */
        const placeholderOptions = Object.assign({}, options);
        if (placeholderOptions['width']) {
            if (placeholderOptions['width'] === 'auto') {
                placeholderOptions['width'] = image.getAttribute('data-width');
            }
        }
        this.placeholderComponent.options = placeholderOptions;
    }
    /**
     * @return {?}
     */
    accessibilityModeHandler() {
        return this.cloudinary.url(this.publicId, Object.assign({ accessibility: this.accessibility }, this.options));
    }
}
CloudinaryImage.ɵfac = function CloudinaryImage_Factory(t) { return new (t || CloudinaryImage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Cloudinary), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
CloudinaryImage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CloudinaryImage, selectors: [["cl-image"]], contentQueries: function CloudinaryImage_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CloudinaryPlaceHolder, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CloudinaryTransformationDirective, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.placeholderComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.transformations = _t);
    } }, inputs: { publicId: ["public-id", "publicId"], clientHints: ["client-hints", "clientHints"], loading: "loading", width: "width", height: "height", accessibility: "accessibility" }, outputs: { onLoad: "onLoad", onError: "onError" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[3, "load"], [3, "display", 4, "ngIf"]], template: function CloudinaryImage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function CloudinaryImage_Template_img_load_0_listener() { return ctx.hasLoaded(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CloudinaryImage_div_1_Template, 2, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.placeholderComponent && ctx.shouldShowPlaceHolder);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], encapsulation: 2 });
/** @nocollapse */
CloudinaryImage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: Cloudinary },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
CloudinaryImage.propDecorators = {
    publicId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['public-id',] }],
    clientHints: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['client-hints',] }],
    loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['loading',] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['width',] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['height',] }],
    accessibility: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['accessibility',] }],
    transformations: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [CloudinaryTransformationDirective,] }],
    placeholderComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [CloudinaryPlaceHolder,] }],
    onLoad: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CloudinaryImage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cl-image',
                template: `<img (load)="hasLoaded()">
  <div *ngIf="placeholderComponent && shouldShowPlaceHolder" [style.display]="shouldShowPlaceHolder ? 'inline' : 'none'">
    <ng-content></ng-content>
  </div>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: Cloudinary }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { onLoad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], publicId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['public-id']
        }], clientHints: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['client-hints']
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['loading']
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['width']
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['height']
        }], accessibility: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['accessibility']
        }], transformations: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [CloudinaryTransformationDirective]
        }], placeholderComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [CloudinaryPlaceHolder]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// See also video reference - http://cloudinary.com/documentation/video_manipulation_and_delivery#video_transformations_reference
class CloudinaryVideo {
    /**
     * @param {?} el
     * @param {?} cloudinary
     * @param {?} platformId
     */
    constructor(el, cloudinary, platformId) {
        this.el = el;
        this.cloudinary = cloudinary;
        this.platformId = platformId;
        this.play = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadstart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.playing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (typeof MutationObserver !== 'undefined') {
            // Create an observer instance
            this.observer = new MutationObserver(() => {
                this.loadVideo(this.publicId);
            });
            // Observe changes to attributes or child transformations to re-render the image
            /** @type {?} */
            const config = { attributes: true, childList: true };
            // pass in the target node, as well as the observer options
            this.observer.observe(this.el.nativeElement, config);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // Listen to changes on the data-bound property 'publicId'.
        // Update component unless this is the first value assigned.
        if (changes.publicId && !changes.publicId.isFirstChange()) {
            this.loadVideo(changes.publicId.currentValue);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.observer && this.observer.disconnect) {
            this.observer.disconnect();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.publicId) {
            throw new Error('You must set the public id of the video to load, e.g. <cl-video public-id={{video.public_id}}...></cl-video>');
        }
        this.loadVideo(this.publicId);
    }
    /**
     * @param {?} publicId
     * @return {?}
     */
    loadVideo(publicId) {
        // https://github.com/angular/universal#universal-gotchas
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            /** @type {?} */
            const nativeElement = this.el.nativeElement;
            /** @type {?} */
            const video = nativeElement.children[0];
            /** @type {?} */
            const options = this.cloudinary.toCloudinaryAttributes(nativeElement.attributes, this.transformations);
            /** @type {?} */
            const videoTag = this.cloudinary.videoTag(publicId, options);
            // Replace template with the custom video tag created by Cloudinary
            this.appendSourceElements(video, videoTag.content());
            // Add attributes
            this.setElementAttributes(video, videoTag.attributes());
        }
    }
    /**
     * @param {?} element
     * @param {?} attributesLiteral
     * @return {?}
     */
    setElementAttributes(element, attributesLiteral) {
        Object.keys(attributesLiteral).forEach(attrName => {
            element.setAttribute(attrName, attributesLiteral[attrName]);
        });
    }
    /**
     * @param {?} element
     * @param {?} html
     * @return {?}
     */
    appendSourceElements(element, html) {
        /** @type {?} */
        const fragment = document.createDocumentFragment();
        element.innerHTML = html;
        while (element.childNodes[0]) {
            fragment.appendChild(element.childNodes[0]);
        }
        element.appendChild(fragment);
    }
    /**
     * @return {?}
     */
    emitPlayEvent() {
        this.play.emit();
    }
    /**
     * @return {?}
     */
    emitLoadstartEvent() {
        this.loadstart.emit();
    }
    /**
     * @return {?}
     */
    emitPlayingEvent() {
        this.playing.emit();
    }
    /**
     * @return {?}
     */
    emitErrorEvent() {
        this.error.emit();
    }
    /**
     * @return {?}
     */
    emitEndedEvent() {
        this.ended.emit();
    }
}
CloudinaryVideo.ɵfac = function CloudinaryVideo_Factory(t) { return new (t || CloudinaryVideo)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Cloudinary), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
CloudinaryVideo.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CloudinaryVideo, selectors: [["cl-video"]], contentQueries: function CloudinaryVideo_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CloudinaryTransformationDirective, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.transformations = _t);
    } }, inputs: { publicId: ["public-id", "publicId"] }, outputs: { play: "play", loadstart: "loadstart", playing: "playing", error: "error", ended: "ended" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 0, consts: [[3, "play", "loadstart", "playing", "error", "ended"]], template: function CloudinaryVideo_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("play", function CloudinaryVideo_Template_video_play_0_listener() { return ctx.emitPlayEvent(); })("loadstart", function CloudinaryVideo_Template_video_loadstart_0_listener() { return ctx.emitLoadstartEvent(); })("playing", function CloudinaryVideo_Template_video_playing_0_listener() { return ctx.emitPlayingEvent(); })("error", function CloudinaryVideo_Template_video_error_0_listener() { return ctx.emitErrorEvent; })("ended", function CloudinaryVideo_Template_video_ended_0_listener() { return ctx.emitEndedEvent; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/** @nocollapse */
CloudinaryVideo.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: Cloudinary },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
];
CloudinaryVideo.propDecorators = {
    publicId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['public-id',] }],
    play: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    loadstart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    playing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    ended: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    transformations: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [CloudinaryTransformationDirective,] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CloudinaryVideo, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cl-video',
                template: '<video (play)="emitPlayEvent()" (loadstart)="emitLoadstartEvent()" (playing)="emitPlayingEvent()" (error)="emitErrorEvent" (ended)="emitEndedEvent"></video>'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: Cloudinary }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, { play: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], loadstart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], playing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], ended: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], publicId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['public-id']
        }], transformations: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [CloudinaryTransformationDirective]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CloudinaryImageSourceDirective {
    /**
     * @param {?} el
     * @param {?} cloudinary
     */
    constructor(el, cloudinary) {
        this.el = el;
        this.cloudinary = cloudinary;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (isBrowser()) {
            /** @type {?} */
            let attrName;
            /** @type {?} */
            let propertyValue;
            if (this.clHref) {
                attrName = 'href';
                propertyValue = this.clHref;
            }
            else if (this.clSrc) {
                attrName = 'src';
                propertyValue = this.clSrc;
            }
            else if (this.clSrcset) {
                attrName = 'srcset';
                propertyValue = this.clSrcset;
            }
            /** @type {?} */
            let isSvg = false;
            if (this.clHref &&
                toString.call(this.el.nativeElement['href'] === '[object SVGAnimatedString]')) {
                this.el.nativeElement.setAttribute('xlinkHref', 'xlink:href');
                isSvg = true;
            }
            if (!attrName || !propertyValue) {
                throw new Error('Directive value is missing for clHref/clSrc/clSrcset');
            }
            /** @type {?} */
            const nativeElement = this.el.nativeElement;
            /** @type {?} */
            const options = this.cloudinary.toCloudinaryAttributes(nativeElement.attributes, this.transformations);
            /** @type {?} */
            const attrValue = this.cloudinary.url(propertyValue, options);
            this.el.nativeElement.setAttribute(attrName, attrValue);
            /*
                     on IE, if "ngSrc" directive declaration is used and "src" attribute doesn't exist
                     then calling element.setAttribute('src', 'foo') doesn't do anything, so we need
                     to set the property as well to achieve the desired effect.
            
                     Check for IE: http://stackoverflow.com/a/32139375/198095
                     if is IE then documentMode contains IE version
                     */
            /** @type {?} */
            const msie = this.el.nativeElement.ownerDocument.documentMode;
            if (msie && !isSvg) {
                // IE logic here
                this.el.nativeElement[attrName] = attrValue;
            }
        }
    }
    ;
}
CloudinaryImageSourceDirective.ɵfac = function CloudinaryImageSourceDirective_Factory(t) { return new (t || CloudinaryImageSourceDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Cloudinary)); };
CloudinaryImageSourceDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CloudinaryImageSourceDirective, selectors: [["", "clHref", ""], ["", "clSrc", ""], ["", "clSrcset", ""]], contentQueries: function CloudinaryImageSourceDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CloudinaryTransformationDirective, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.transformations = _t);
    } }, inputs: { clHref: "clHref", clSrc: "clSrc", clSrcset: "clSrcset" } });
/** @nocollapse */
CloudinaryImageSourceDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: Cloudinary }
];
CloudinaryImageSourceDirective.propDecorators = {
    clHref: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    clSrc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    clSrcset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    transformations: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [CloudinaryTransformationDirective,] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CloudinaryImageSourceDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[clHref], [clSrc], [clSrcset]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: Cloudinary }]; }, { clHref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clSrc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clSrcset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], transformations: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [CloudinaryTransformationDirective]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CloudinaryBackgroundImageDirective {
    /**
     * @param {?} renderer
     * @param {?} el
     * @param {?} cloudinary
     */
    constructor(renderer, el, cloudinary) {
        this.renderer = renderer;
        this.el = el;
        this.cloudinary = cloudinary;
    }
    /**
     * @return {?}
     */
    isBrowser() {
        return typeof window !== 'undefined';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.isBrowser()) {
            /** @type {?} */
            const nativeElement = this.el.nativeElement;
            /** @type {?} */
            const options = this.cloudinary.toCloudinaryAttributes(nativeElement.attributes, this.transformations);
            /** @type {?} */
            const imageUrl = this.cloudinary.url(this.clBackgroundImage, options);
            this.renderer.setStyle(nativeElement, 'background-image', `url('${imageUrl}')`);
            this.renderer.setStyle(nativeElement, 'background-repeat', 'no-repeat');
            this.renderer.setStyle(nativeElement, 'background-position', 'center');
        }
    }
}
CloudinaryBackgroundImageDirective.ɵfac = function CloudinaryBackgroundImageDirective_Factory(t) { return new (t || CloudinaryBackgroundImageDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Cloudinary)); };
CloudinaryBackgroundImageDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CloudinaryBackgroundImageDirective, selectors: [["", "clBackgroundImage", ""]], contentQueries: function CloudinaryBackgroundImageDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CloudinaryTransformationDirective, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.transformations = _t);
    } }, inputs: { clBackgroundImage: "clBackgroundImage" } });
/** @nocollapse */
CloudinaryBackgroundImageDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: Cloudinary }
];
CloudinaryBackgroundImageDirective.propDecorators = {
    clBackgroundImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    transformations: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [CloudinaryTransformationDirective,] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CloudinaryBackgroundImageDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[clBackgroundImage]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: Cloudinary }]; }, { clBackgroundImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], transformations: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [CloudinaryTransformationDirective]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LazyLoadDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.isNativeLazyLoadSupported() && this.isLazyLoadSupported()) {
            this.lazyLoad();
        }
        else {
            this.loadImage();
        }
    }
    /**
     * @return {?}
     */
    loadImage() {
        /** @type {?} */
        const nativeElement = this.el.nativeElement;
        /** @type {?} */
        const image = nativeElement.children[0];
        image.setAttribute('src', image.dataset.src);
    }
    /**
     * @return {?}
     */
    isLazyLoadSupported() {
        return window && 'IntersectionObserver' in window;
    }
    /**
     * @return {?}
     */
    isNativeLazyLoadSupported() {
        return 'loading' in HTMLImageElement.prototype; // check loading property is defined on image or iframe
    }
    /**
     * @return {?}
     */
    lazyLoad() {
        /** @type {?} */
        const options = {
            rootMargin: `0px 0px -50% 0px`,
        };
        /** @type {?} */
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadImage();
                    observer.unobserve(entry.target);
                }
            }, options);
        });
        observer.observe(this.el.nativeElement);
    }
}
LazyLoadDirective.ɵfac = function LazyLoadDirective_Factory(t) { return new (t || LazyLoadDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
LazyLoadDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LazyLoadDirective, selectors: [["cl-image", "loading", "lazy"]] });
/** @nocollapse */
LazyLoadDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LazyLoadDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'cl-image[loading=lazy]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
'use strict';
/** @type {?} */
const CLOUDINARY_LIB = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CLOUDINARY_LIB');
/** @type {?} */
const CLOUDINARY_CONFIGURATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CLOUDINARY_CONFIGURATION');
// Export this function to Angular's AOT to work
/**
 * @param {?} cloudinaryJsLib
 * @param {?} configuration
 * @return {?}
 */
function createCloudinary(cloudinaryJsLib, configuration) {
    return new Cloudinary(cloudinaryJsLib, configuration);
}
;
class CloudinaryModule {
    /**
     * @param {?} cloudinaryJsLib
     * @param {?} cloudinaryConfiguration
     * @return {?}
     */
    static forRoot(cloudinaryJsLib, cloudinaryConfiguration) {
        return {
            ngModule: CloudinaryModule,
            providers: [
                { provide: CLOUDINARY_LIB, useValue: cloudinaryJsLib },
                { provide: CLOUDINARY_CONFIGURATION, useValue: cloudinaryConfiguration },
                {
                    provide: Cloudinary,
                    useFactory: createCloudinary,
                    deps: [CLOUDINARY_LIB, CLOUDINARY_CONFIGURATION]
                }
            ]
        };
    }
}
CloudinaryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CloudinaryModule });
CloudinaryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CloudinaryModule_Factory(t) { return new (t || CloudinaryModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CloudinaryModule, { declarations: function () { return [CloudinaryImageSourceDirective,
        CloudinaryBackgroundImageDirective,
        CloudinaryImage,
        CloudinaryVideo,
        CloudinaryTransformationDirective,
        LazyLoadDirective,
        CloudinaryPlaceHolder]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [CloudinaryImageSourceDirective,
        CloudinaryBackgroundImageDirective,
        CloudinaryImage,
        CloudinaryVideo,
        CloudinaryTransformationDirective,
        LazyLoadDirective,
        CloudinaryPlaceHolder]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CloudinaryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                declarations: [
                    CloudinaryImageSourceDirective,
                    CloudinaryBackgroundImageDirective,
                    CloudinaryImage,
                    CloudinaryVideo,
                    CloudinaryTransformationDirective,
                    LazyLoadDirective,
                    CloudinaryPlaceHolder,
                ],
                exports: [
                    CloudinaryImageSourceDirective,
                    CloudinaryBackgroundImageDirective,
                    CloudinaryImage,
                    CloudinaryVideo,
                    CloudinaryTransformationDirective,
                    LazyLoadDirective,
                    CloudinaryPlaceHolder
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=cloudinary-angular-5.x.js.map

/***/ }),

/***/ "./node_modules/cloudinary-core/cloudinary-core.js":
/*!*********************************************************!*\
  !*** ./node_modules/cloudinary-core/cloudinary-core.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
   * cloudinary-core.js
   * Cloudinary's JavaScript library - Version 2.11.3
   * Copyright Cloudinary
   * see https://github.com/cloudinary/cloudinary_js
   *
   */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! lodash/assign */ "./node_modules/lodash/assign.js"), __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js"), __webpack_require__(/*! lodash/compact */ "./node_modules/lodash/compact.js"), __webpack_require__(/*! lodash/difference */ "./node_modules/lodash/difference.js"), __webpack_require__(/*! lodash/functions */ "./node_modules/lodash/functions.js"), __webpack_require__(/*! lodash/identity */ "./node_modules/lodash/identity.js"), __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js"), __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js"), __webpack_require__(/*! lodash/isElement */ "./node_modules/lodash/isElement.js"), __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js"), __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js"), __webpack_require__(/*! lodash/isString */ "./node_modules/lodash/isString.js"), __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js"), __webpack_require__(/*! lodash/trim */ "./node_modules/lodash/trim.js"));
	else {}
})(this, function(__WEBPACK_EXTERNAL_MODULE_lodash_assign__, __WEBPACK_EXTERNAL_MODULE_lodash_cloneDeep__, __WEBPACK_EXTERNAL_MODULE_lodash_compact__, __WEBPACK_EXTERNAL_MODULE_lodash_difference__, __WEBPACK_EXTERNAL_MODULE_lodash_functions__, __WEBPACK_EXTERNAL_MODULE_lodash_identity__, __WEBPACK_EXTERNAL_MODULE_lodash_includes__, __WEBPACK_EXTERNAL_MODULE_lodash_isArray__, __WEBPACK_EXTERNAL_MODULE_lodash_isElement__, __WEBPACK_EXTERNAL_MODULE_lodash_isFunction__, __WEBPACK_EXTERNAL_MODULE_lodash_isPlainObject__, __WEBPACK_EXTERNAL_MODULE_lodash_isString__, __WEBPACK_EXTERNAL_MODULE_lodash_merge__, __WEBPACK_EXTERNAL_MODULE_lodash_trim__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/namespace/cloudinary-core.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/namespace/cloudinary-core.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "ClientHintsMetaTag", function() { return /* reexport */ clienthintsmetatag; });
__webpack_require__.d(__webpack_exports__, "Cloudinary", function() { return /* reexport */ cloudinary; });
__webpack_require__.d(__webpack_exports__, "Condition", function() { return /* reexport */ condition; });
__webpack_require__.d(__webpack_exports__, "Configuration", function() { return /* reexport */ src_configuration; });
__webpack_require__.d(__webpack_exports__, "crc32", function() { return /* reexport */ src_crc32; });
__webpack_require__.d(__webpack_exports__, "FetchLayer", function() { return /* reexport */ fetchlayer; });
__webpack_require__.d(__webpack_exports__, "HtmlTag", function() { return /* reexport */ htmltag; });
__webpack_require__.d(__webpack_exports__, "ImageTag", function() { return /* reexport */ imagetag; });
__webpack_require__.d(__webpack_exports__, "Layer", function() { return /* reexport */ layer_layer; });
__webpack_require__.d(__webpack_exports__, "PictureTag", function() { return /* reexport */ picturetag; });
__webpack_require__.d(__webpack_exports__, "SubtitlesLayer", function() { return /* reexport */ subtitleslayer; });
__webpack_require__.d(__webpack_exports__, "TextLayer", function() { return /* reexport */ textlayer; });
__webpack_require__.d(__webpack_exports__, "Transformation", function() { return /* reexport */ src_transformation; });
__webpack_require__.d(__webpack_exports__, "utf8_encode", function() { return /* reexport */ src_utf8_encode; });
__webpack_require__.d(__webpack_exports__, "Util", function() { return /* reexport */ lodash_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "VideoTag", function() { return /* reexport */ videotag; });

// NAMESPACE OBJECT: ./src/constants.js
var constants_namespaceObject = {};
__webpack_require__.r(constants_namespaceObject);
__webpack_require__.d(constants_namespaceObject, "VERSION", function() { return VERSION; });
__webpack_require__.d(constants_namespaceObject, "CF_SHARED_CDN", function() { return CF_SHARED_CDN; });
__webpack_require__.d(constants_namespaceObject, "OLD_AKAMAI_SHARED_CDN", function() { return OLD_AKAMAI_SHARED_CDN; });
__webpack_require__.d(constants_namespaceObject, "AKAMAI_SHARED_CDN", function() { return AKAMAI_SHARED_CDN; });
__webpack_require__.d(constants_namespaceObject, "SHARED_CDN", function() { return SHARED_CDN; });
__webpack_require__.d(constants_namespaceObject, "DEFAULT_TIMEOUT_MS", function() { return DEFAULT_TIMEOUT_MS; });
__webpack_require__.d(constants_namespaceObject, "DEFAULT_POSTER_OPTIONS", function() { return DEFAULT_POSTER_OPTIONS; });
__webpack_require__.d(constants_namespaceObject, "DEFAULT_VIDEO_SOURCE_TYPES", function() { return DEFAULT_VIDEO_SOURCE_TYPES; });
__webpack_require__.d(constants_namespaceObject, "SEO_TYPES", function() { return SEO_TYPES; });
__webpack_require__.d(constants_namespaceObject, "DEFAULT_IMAGE_PARAMS", function() { return DEFAULT_IMAGE_PARAMS; });
__webpack_require__.d(constants_namespaceObject, "DEFAULT_VIDEO_PARAMS", function() { return DEFAULT_VIDEO_PARAMS; });
__webpack_require__.d(constants_namespaceObject, "DEFAULT_VIDEO_SOURCES", function() { return DEFAULT_VIDEO_SOURCES; });
__webpack_require__.d(constants_namespaceObject, "DEFAULT_EXTERNAL_LIBRARIES", function() { return DEFAULT_EXTERNAL_LIBRARIES; });
__webpack_require__.d(constants_namespaceObject, "PLACEHOLDER_IMAGE_MODES", function() { return PLACEHOLDER_IMAGE_MODES; });
__webpack_require__.d(constants_namespaceObject, "ACCESSIBILITY_MODES", function() { return ACCESSIBILITY_MODES; });
__webpack_require__.d(constants_namespaceObject, "URL_KEYS", function() { return URL_KEYS; });

// NAMESPACE OBJECT: ./src/util/lodash.js
var lodash_namespaceObject = {};
__webpack_require__.r(lodash_namespaceObject);
__webpack_require__.d(lodash_namespaceObject, "getSDKAnalyticsSignature", function() { return getSDKAnalyticsSignature; });
__webpack_require__.d(lodash_namespaceObject, "getAnalyticsOptions", function() { return getAnalyticsOptions; });
__webpack_require__.d(lodash_namespaceObject, "assign", function() { return assign_root_assign_default.a; });
__webpack_require__.d(lodash_namespaceObject, "cloneDeep", function() { return cloneDeep_root_cloneDeep_default.a; });
__webpack_require__.d(lodash_namespaceObject, "compact", function() { return compact_root_compact_default.a; });
__webpack_require__.d(lodash_namespaceObject, "difference", function() { return difference_root_difference_default.a; });
__webpack_require__.d(lodash_namespaceObject, "functions", function() { return functions_root_functions_default.a; });
__webpack_require__.d(lodash_namespaceObject, "identity", function() { return identity_root_identity_default.a; });
__webpack_require__.d(lodash_namespaceObject, "includes", function() { return includes_root_includes_default.a; });
__webpack_require__.d(lodash_namespaceObject, "isArray", function() { return isArray_root_isArray_default.a; });
__webpack_require__.d(lodash_namespaceObject, "isPlainObject", function() { return isPlainObject_root_isPlainObject_default.a; });
__webpack_require__.d(lodash_namespaceObject, "isString", function() { return isString_root_isString_default.a; });
__webpack_require__.d(lodash_namespaceObject, "merge", function() { return merge_root_merge_default.a; });
__webpack_require__.d(lodash_namespaceObject, "contains", function() { return includes_root_includes_default.a; });
__webpack_require__.d(lodash_namespaceObject, "isIntersectionObserverSupported", function() { return isIntersectionObserverSupported; });
__webpack_require__.d(lodash_namespaceObject, "isNativeLazyLoadSupported", function() { return isNativeLazyLoadSupported; });
__webpack_require__.d(lodash_namespaceObject, "detectIntersection", function() { return detectIntersection; });
__webpack_require__.d(lodash_namespaceObject, "omit", function() { return omit; });
__webpack_require__.d(lodash_namespaceObject, "allStrings", function() { return baseutil_allStrings; });
__webpack_require__.d(lodash_namespaceObject, "without", function() { return without; });
__webpack_require__.d(lodash_namespaceObject, "isNumberLike", function() { return isNumberLike; });
__webpack_require__.d(lodash_namespaceObject, "smartEscape", function() { return smartEscape; });
__webpack_require__.d(lodash_namespaceObject, "defaults", function() { return defaults; });
__webpack_require__.d(lodash_namespaceObject, "objectProto", function() { return objectProto; });
__webpack_require__.d(lodash_namespaceObject, "objToString", function() { return objToString; });
__webpack_require__.d(lodash_namespaceObject, "isObject", function() { return isObject; });
__webpack_require__.d(lodash_namespaceObject, "funcTag", function() { return funcTag; });
__webpack_require__.d(lodash_namespaceObject, "reWords", function() { return reWords; });
__webpack_require__.d(lodash_namespaceObject, "camelCase", function() { return camelCase; });
__webpack_require__.d(lodash_namespaceObject, "snakeCase", function() { return snakeCase; });
__webpack_require__.d(lodash_namespaceObject, "convertKeys", function() { return convertKeys; });
__webpack_require__.d(lodash_namespaceObject, "withCamelCaseKeys", function() { return withCamelCaseKeys; });
__webpack_require__.d(lodash_namespaceObject, "withSnakeCaseKeys", function() { return withSnakeCaseKeys; });
__webpack_require__.d(lodash_namespaceObject, "base64Encode", function() { return base64Encode; });
__webpack_require__.d(lodash_namespaceObject, "base64EncodeURL", function() { return base64EncodeURL; });
__webpack_require__.d(lodash_namespaceObject, "extractUrlParams", function() { return extractUrlParams; });
__webpack_require__.d(lodash_namespaceObject, "patchFetchFormat", function() { return patchFetchFormat; });
__webpack_require__.d(lodash_namespaceObject, "optionConsume", function() { return optionConsume; });
__webpack_require__.d(lodash_namespaceObject, "isEmpty", function() { return isEmpty; });
__webpack_require__.d(lodash_namespaceObject, "isElement", function() { return isElement_root_isElement_default.a; });
__webpack_require__.d(lodash_namespaceObject, "isFunction", function() { return isFunction_root_isFunction_default.a; });
__webpack_require__.d(lodash_namespaceObject, "trim", function() { return trim_root_trim_default.a; });
__webpack_require__.d(lodash_namespaceObject, "getData", function() { return lodash_getData; });
__webpack_require__.d(lodash_namespaceObject, "setData", function() { return lodash_setData; });
__webpack_require__.d(lodash_namespaceObject, "getAttribute", function() { return lodash_getAttribute; });
__webpack_require__.d(lodash_namespaceObject, "setAttribute", function() { return lodash_setAttribute; });
__webpack_require__.d(lodash_namespaceObject, "removeAttribute", function() { return lodash_removeAttribute; });
__webpack_require__.d(lodash_namespaceObject, "setAttributes", function() { return setAttributes; });
__webpack_require__.d(lodash_namespaceObject, "hasClass", function() { return lodash_hasClass; });
__webpack_require__.d(lodash_namespaceObject, "addClass", function() { return lodash_addClass; });
__webpack_require__.d(lodash_namespaceObject, "getStyles", function() { return getStyles; });
__webpack_require__.d(lodash_namespaceObject, "cssExpand", function() { return cssExpand; });
__webpack_require__.d(lodash_namespaceObject, "domStyle", function() { return domStyle; });
__webpack_require__.d(lodash_namespaceObject, "curCSS", function() { return curCSS; });
__webpack_require__.d(lodash_namespaceObject, "cssValue", function() { return cssValue; });
__webpack_require__.d(lodash_namespaceObject, "augmentWidthOrHeight", function() { return augmentWidthOrHeight; });
__webpack_require__.d(lodash_namespaceObject, "getWidthOrHeight", function() { return getWidthOrHeight; });
__webpack_require__.d(lodash_namespaceObject, "width", function() { return lodash_width; });

// CONCATENATED MODULE: ./src/utf8_encode.js
/**
 * UTF8 encoder
 * @private
 */
var utf8_encode;
/* harmony default export */ var src_utf8_encode = (utf8_encode = function utf8_encode(argString) {
  var c1, enc, end, n, start, string, stringl, utftext; // http://kevin.vanzonneveld.net
  // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: sowberry
  // +    tweaked by: Jack
  // +   bugfixed by: Onno Marsman
  // +   improved by: Yves Sucaet
  // +   bugfixed by: Onno Marsman
  // +   bugfixed by: Ulrich
  // +   bugfixed by: Rafal Kukawski
  // +   improved by: kirilloid
  // *     example 1: utf8_encode('Kevin van Zonneveld');
  // *     returns 1: 'Kevin van Zonneveld'

  if (argString === null || typeof argString === 'undefined') {
    return '';
  }

  string = argString + ''; // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  utftext = '';
  start = void 0;
  end = void 0;
  stringl = 0;
  start = end = 0;
  stringl = string.length;
  n = 0;

  while (n < stringl) {
    c1 = string.charCodeAt(n);
    enc = null;

    if (c1 < 128) {
      end++;
    } else if (c1 > 127 && c1 < 2048) {
      enc = String.fromCharCode(c1 >> 6 | 192, c1 & 63 | 128);
    } else {
      enc = String.fromCharCode(c1 >> 12 | 224, c1 >> 6 & 63 | 128, c1 & 63 | 128);
    }

    if (enc !== null) {
      if (end > start) {
        utftext += string.slice(start, end);
      }

      utftext += enc;
      start = end = n + 1;
    }

    n++;
  }

  if (end > start) {
    utftext += string.slice(start, stringl);
  }

  return utftext;
});
// CONCATENATED MODULE: ./src/crc32.js

/**
 * CRC32 calculator
 * Depends on 'utf8_encode'
 * @private
 * @param {string} str - The string to calculate the CRC32 for.
 * @return {number}
 */

function crc32(str) {
  var crc, i, iTop, table, x, y; // http://kevin.vanzonneveld.net
  // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
  // +   improved by: T0bsn
  // +   improved by: http://stackoverflow.com/questions/2647935/javascript-crc32-function-and-php-crc32-not-matching
  // -    depends on: utf8_encode
  // *     example 1: crc32('Kevin van Zonneveld');
  // *     returns 1: 1249991249

  str = src_utf8_encode(str);
  table = '00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D';
  crc = 0;
  x = 0;
  y = 0;
  crc = crc ^ -1;
  i = 0;
  iTop = str.length;

  while (i < iTop) {
    y = (crc ^ str.charCodeAt(i)) & 0xFF;
    x = '0x' + table.substr(y * 9, 8);
    crc = crc >>> 8 ^ x;
    i++;
  }

  crc = crc ^ -1; //convert to unsigned 32-bit int if needed

  if (crc < 0) {
    crc += 4294967296;
  }

  return crc;
}

/* harmony default export */ var src_crc32 = (crc32);
// CONCATENATED MODULE: ./src/sdkAnalytics/stringPad.js
function stringPad(value, targetLength, padString) {
  targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;

  padString = String(typeof padString !== 'undefined' ? padString : ' ');

  if (value.length > targetLength) {
    return String(value);
  } else {
    targetLength = targetLength - value.length;

    if (targetLength > padString.length) {
      padString += repeatStringNumTimes(padString, targetLength / padString.length);
    }

    return padString.slice(0, targetLength) + String(value);
  }
}

function repeatStringNumTimes(string, times) {
  var repeatedString = "";

  while (times > 0) {
    repeatedString += string;
    times--;
  }

  return repeatedString;
}
// CONCATENATED MODULE: ./src/sdkAnalytics/base64Map.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
var base64Map_num = 0;
var map = {};

_toConsumableArray(chars).forEach(function (_char) {
  var key = base64Map_num.toString(2);
  key = stringPad(key, 6, '0');
  map[key] = _char;
  base64Map_num++;
});
/**
 * Map of six-bit binary codes to Base64 characters
 */


/* harmony default export */ var base64Map = (map);
// CONCATENATED MODULE: ./src/sdkAnalytics/reverseVersion.js

/**
 * @description A semVer like string, x.y.z or x.y is allowed
 *              Reverses the version positions, x.y.z turns to z.y.x
 *              Pads each segment with '0' so they have length of 2
 *              Example: 1.2.3 -> 03.02.01
 * @param {string} semVer Input can be either x.y.z or x.y
 * @return {string} in the form of zz.yy.xx (
 */

function reverseVersion(semVer) {
  if (semVer.split('.').length < 2) {
    throw new Error('invalid semVer, must have at least two segments');
  } // Split by '.', reverse, create new array with padded values and concat it together


  return semVer.split('.').reverse().map(function (segment) {
    return stringPad(segment, 2, '0');
  }).join('.');
}
// CONCATENATED MODULE: ./src/sdkAnalytics/encodeVersion.js



/**
 * @description Encodes a semVer-like version string
 * @param {string} semVer Input can be either x.y.z or x.y
 * @return {string} A string built from 3 characters of the base64 table that encode the semVer
 */

function encodeVersion(semVer) {
  var strResult = ''; // support x.y or x.y.z by using 'parts' as a variable

  var parts = semVer.split('.').length;
  var paddedStringLength = parts * 6; // we pad to either 12 or 18 characters
  // reverse (but don't mirror) the version. 1.5.15 -> 15.5.1
  // Pad to two spaces, 15.5.1 -> 15.05.01

  var paddedReversedSemver = reverseVersion(semVer); // turn 15.05.01 to a string '150501' then to a number 150501

  var num = parseInt(paddedReversedSemver.split('.').join('')); // Represent as binary, add left padding to 12 or 18 characters.
  // 150,501 -> 100100101111100101

  var paddedBinary = num.toString(2);
  paddedBinary = stringPad(paddedBinary, paddedStringLength, '0'); // Stop in case an invalid version number was provided
  // paddedBinary must be built from sections of 6 bits

  if (paddedBinary.length % 6 !== 0) {
    throw 'Version must be smaller than 43.21.26)';
  } // turn every 6 bits into a character using the base64Map


  paddedBinary.match(/.{1,6}/g).forEach(function (bitString) {
    // console.log(bitString);
    strResult += base64Map[bitString];
  });
  return strResult;
}
// CONCATENATED MODULE: ./src/sdkAnalytics/getSDKAnalyticsSignature.js

/**
 * @description Gets the SDK signature by encoding the SDK version and tech version
 * @param {{
 *    [techVersion]:string,
 *    [sdkSemver]: string,
 *    [sdkCode]: string,
 *    [feature]: string
 * }} analyticsOptions
 * @return {string} sdkAnalyticsSignature
 */

function getSDKAnalyticsSignature() {
  var analyticsOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  try {
    var twoPartVersion = removePatchFromSemver(analyticsOptions.techVersion);
    var encodedSDKVersion = encodeVersion(analyticsOptions.sdkSemver);
    var encodedTechVersion = encodeVersion(twoPartVersion);
    var featureCode = analyticsOptions.feature;
    var SDKCode = analyticsOptions.sdkCode;
    var algoVersion = 'A'; // The algo version is determined here, it should not be an argument

    return "".concat(algoVersion).concat(SDKCode).concat(encodedSDKVersion).concat(encodedTechVersion).concat(featureCode);
  } catch (e) {
    // Either SDK or Node versions were unparsable
    return 'E';
  }
}
/**
 * @description Removes patch version from the semver if it exists
 *              Turns x.y.z OR x.y into x.y
 * @param {'x.y.z' || 'x.y' || string} semVerStr
 */

function removePatchFromSemver(semVerStr) {
  var parts = semVerStr.split('.');
  return "".concat(parts[0], ".").concat(parts[1]);
}
// CONCATENATED MODULE: ./src/sdkAnalytics/getAnalyticsOptions.js
/**
 * @description Gets the analyticsOptions from options- should include sdkSemver, techVersion, sdkCode, and feature
 * @param options
 * @returns {{sdkSemver: (string), sdkCode, feature: string, techVersion: (string)} || {}}
 */
function getAnalyticsOptions(options) {
  var analyticsOptions = {
    sdkSemver: options.sdkSemver,
    techVersion: options.techVersion,
    sdkCode: options.sdkCode,
    feature: '0'
  };

  if (options.urlAnalytics) {
    if (options.accessibility) {
      analyticsOptions.feature = 'D';
    }

    if (options.loading === 'lazy') {
      analyticsOptions.feature = 'C';
    }

    if (options.responsive) {
      analyticsOptions.feature = 'A';
    }

    if (options.placeholder) {
      analyticsOptions.feature = 'B';
    }

    return analyticsOptions;
  } else {
    return {};
  }
}
// EXTERNAL MODULE: external {"commonjs":"lodash/assign","commonjs2":"lodash/assign","amd":"lodash/assign","root":["_","assign"]}
var assign_root_assign_ = __webpack_require__("lodash/assign");
var assign_root_assign_default = /*#__PURE__*/__webpack_require__.n(assign_root_assign_);

// EXTERNAL MODULE: external {"commonjs":"lodash/cloneDeep","commonjs2":"lodash/cloneDeep","amd":"lodash/cloneDeep","root":["_","cloneDeep"]}
var cloneDeep_root_cloneDeep_ = __webpack_require__("lodash/cloneDeep");
var cloneDeep_root_cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep_root_cloneDeep_);

// EXTERNAL MODULE: external {"commonjs":"lodash/compact","commonjs2":"lodash/compact","amd":"lodash/compact","root":["_","compact"]}
var compact_root_compact_ = __webpack_require__("lodash/compact");
var compact_root_compact_default = /*#__PURE__*/__webpack_require__.n(compact_root_compact_);

// EXTERNAL MODULE: external {"commonjs":"lodash/difference","commonjs2":"lodash/difference","amd":"lodash/difference","root":["_","difference"]}
var difference_root_difference_ = __webpack_require__("lodash/difference");
var difference_root_difference_default = /*#__PURE__*/__webpack_require__.n(difference_root_difference_);

// EXTERNAL MODULE: external {"commonjs":"lodash/functions","commonjs2":"lodash/functions","amd":"lodash/functions","root":["_","functions"]}
var functions_root_functions_ = __webpack_require__("lodash/functions");
var functions_root_functions_default = /*#__PURE__*/__webpack_require__.n(functions_root_functions_);

// EXTERNAL MODULE: external {"commonjs":"lodash/identity","commonjs2":"lodash/identity","amd":"lodash/identity","root":["_","identity"]}
var identity_root_identity_ = __webpack_require__("lodash/identity");
var identity_root_identity_default = /*#__PURE__*/__webpack_require__.n(identity_root_identity_);

// EXTERNAL MODULE: external {"commonjs":"lodash/includes","commonjs2":"lodash/includes","amd":"lodash/includes","root":["_","includes"]}
var includes_root_includes_ = __webpack_require__("lodash/includes");
var includes_root_includes_default = /*#__PURE__*/__webpack_require__.n(includes_root_includes_);

// EXTERNAL MODULE: external {"commonjs":"lodash/isArray","commonjs2":"lodash/isArray","amd":"lodash/isArray","root":["_","isArray"]}
var isArray_root_isArray_ = __webpack_require__("lodash/isArray");
var isArray_root_isArray_default = /*#__PURE__*/__webpack_require__.n(isArray_root_isArray_);

// EXTERNAL MODULE: external {"commonjs":"lodash/isPlainObject","commonjs2":"lodash/isPlainObject","amd":"lodash/isPlainObject","root":["_","isPlainObject"]}
var isPlainObject_root_isPlainObject_ = __webpack_require__("lodash/isPlainObject");
var isPlainObject_root_isPlainObject_default = /*#__PURE__*/__webpack_require__.n(isPlainObject_root_isPlainObject_);

// EXTERNAL MODULE: external {"commonjs":"lodash/isString","commonjs2":"lodash/isString","amd":"lodash/isString","root":["_","isString"]}
var isString_root_isString_ = __webpack_require__("lodash/isString");
var isString_root_isString_default = /*#__PURE__*/__webpack_require__.n(isString_root_isString_);

// EXTERNAL MODULE: external {"commonjs":"lodash/merge","commonjs2":"lodash/merge","amd":"lodash/merge","root":["_","merge"]}
var merge_root_merge_ = __webpack_require__("lodash/merge");
var merge_root_merge_default = /*#__PURE__*/__webpack_require__.n(merge_root_merge_);

// EXTERNAL MODULE: external {"commonjs":"lodash/isElement","commonjs2":"lodash/isElement","amd":"lodash/isElement","root":["_","isElement"]}
var isElement_root_isElement_ = __webpack_require__("lodash/isElement");
var isElement_root_isElement_default = /*#__PURE__*/__webpack_require__.n(isElement_root_isElement_);

// EXTERNAL MODULE: external {"commonjs":"lodash/isFunction","commonjs2":"lodash/isFunction","amd":"lodash/isFunction","root":["_","isFunction"]}
var isFunction_root_isFunction_ = __webpack_require__("lodash/isFunction");
var isFunction_root_isFunction_default = /*#__PURE__*/__webpack_require__.n(isFunction_root_isFunction_);

// EXTERNAL MODULE: external {"commonjs":"lodash/trim","commonjs2":"lodash/trim","amd":"lodash/trim","root":["_","trim"]}
var trim_root_trim_ = __webpack_require__("lodash/trim");
var trim_root_trim_default = /*#__PURE__*/__webpack_require__.n(trim_root_trim_);

// CONCATENATED MODULE: ./src/util/lazyLoad.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * Includes utility methods for lazy loading media
 */

/**
 * Check if IntersectionObserver is supported
 * @return {boolean} true if window.IntersectionObserver is defined
 */
function isIntersectionObserverSupported() {
  // Check that 'IntersectionObserver' property is defined on window
  return (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.IntersectionObserver;
}
/**
 * Check if native lazy loading is supported
 * @return {boolean} true if 'loading' property is defined for HTMLImageElement
 */

function isNativeLazyLoadSupported() {
  return (typeof HTMLImageElement === "undefined" ? "undefined" : _typeof(HTMLImageElement)) === "object" && HTMLImageElement.prototype.loading;
}
/**
 * Calls onIntersect() when intersection is detected, or when
 * no native lazy loading or when IntersectionObserver isn't supported.
 * @param {Element} el - the element to observe
 * @param {function} onIntersect - called when the given element is in view
 */

function detectIntersection(el, onIntersect) {
  try {
    if (isNativeLazyLoadSupported() || !isIntersectionObserverSupported()) {
      // Return if there's no need or possibility to detect intersection
      onIntersect();
      return;
    } // Detect intersection with given element using IntersectionObserver


    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          onIntersect();
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: [0, 0.01]
    });
    observer.observe(el);
  } catch (e) {
    onIntersect();
  }
}
// CONCATENATED MODULE: ./src/constants.js
var VERSION = "2.5.0";
var CF_SHARED_CDN = "d3jpl91pxevbkh.cloudfront.net";
var OLD_AKAMAI_SHARED_CDN = "cloudinary-a.akamaihd.net";
var AKAMAI_SHARED_CDN = "res.cloudinary.com";
var SHARED_CDN = AKAMAI_SHARED_CDN;
var DEFAULT_TIMEOUT_MS = 10000;
var DEFAULT_POSTER_OPTIONS = {
  format: 'jpg',
  resource_type: 'video'
};
var DEFAULT_VIDEO_SOURCE_TYPES = ['webm', 'mp4', 'ogv'];
var SEO_TYPES = {
  "image/upload": "images",
  "image/private": "private_images",
  "image/authenticated": "authenticated_images",
  "raw/upload": "files",
  "video/upload": "videos"
};
/**
* @const {Object} Cloudinary.DEFAULT_IMAGE_PARAMS
* Defaults values for image parameters.
*
* (Previously defined using option_consume() )
 */

var DEFAULT_IMAGE_PARAMS = {
  resource_type: "image",
  transformation: [],
  type: 'upload'
};
/**
* Defaults values for video parameters.
* @const {Object} Cloudinary.DEFAULT_VIDEO_PARAMS
* (Previously defined using option_consume() )
 */

var DEFAULT_VIDEO_PARAMS = {
  fallback_content: '',
  resource_type: "video",
  source_transformation: {},
  source_types: DEFAULT_VIDEO_SOURCE_TYPES,
  transformation: [],
  type: 'upload'
};
/**
 * Recommended sources for video tag
 * @const {Object} Cloudinary.DEFAULT_VIDEO_SOURCES
 */

var DEFAULT_VIDEO_SOURCES = [{
  type: "mp4",
  codecs: "hev1",
  transformations: {
    video_codec: "h265"
  }
}, {
  type: "webm",
  codecs: "vp9",
  transformations: {
    video_codec: "vp9"
  }
}, {
  type: "mp4",
  transformations: {
    video_codec: "auto"
  }
}, {
  type: "webm",
  transformations: {
    video_codec: "auto"
  }
}];
var DEFAULT_EXTERNAL_LIBRARIES = {
  seeThru: 'https://unpkg.com/seethru@4/dist/seeThru.min.js'
};
/**
 * Predefined placeholder transformations
 * @const {Object} Cloudinary.PLACEHOLDER_IMAGE_MODES
 */

var PLACEHOLDER_IMAGE_MODES = {
  'blur': [{
    effect: 'blur:2000',
    quality: 1,
    fetch_format: 'auto'
  }],
  // Default
  'pixelate': [{
    effect: 'pixelate',
    quality: 1,
    fetch_format: 'auto'
  }],
  // Generates a pixel size image which color is the predominant color of the original image.
  'predominant-color-pixel': [{
    width: 'iw_div_2',
    aspect_ratio: 1,
    crop: 'pad',
    background: 'auto'
  }, {
    crop: 'crop',
    width: 1,
    height: 1,
    gravity: 'north_east'
  }, {
    fetch_format: 'auto',
    quality: 'auto'
  }],
  // Generates an image which color is the predominant color of the original image.
  'predominant-color': [{
    variables: [['$currWidth', 'w'], ['$currHeight', 'h']]
  }, {
    width: 'iw_div_2',
    aspect_ratio: 1,
    crop: 'pad',
    background: 'auto'
  }, {
    crop: 'crop',
    width: 10,
    height: 10,
    gravity: 'north_east'
  }, {
    width: '$currWidth',
    height: '$currHeight',
    crop: 'fill'
  }, {
    fetch_format: 'auto',
    quality: 'auto'
  }],
  'vectorize': [{
    effect: 'vectorize:3:0.1',
    fetch_format: 'svg'
  }]
};
/**
 * Predefined accessibility transformations
 * @const {Object} Cloudinary.ACCESSIBILITY_MODES
 */

var ACCESSIBILITY_MODES = {
  darkmode: 'tint:75:black',
  brightmode: 'tint:50:white',
  monochrome: 'grayscale',
  colorblind: 'assist_colorblind'
};
/**
 * A list of keys used by the url() function.
 * @private
 */

var URL_KEYS = ['accessibility', 'api_secret', 'auth_token', 'cdn_subdomain', 'cloud_name', 'cname', 'format', 'placeholder', 'private_cdn', 'resource_type', 'secure', 'secure_cdn_subdomain', 'secure_distribution', 'shorten', 'sign_url', 'signature', 'ssl_detected', 'type', 'url_suffix', 'use_root_path', 'version'];
/**
 * The resource storage type
 * @typedef type
 * @enum {string}
 * @property  {string} 'upload' A resource uploaded directly to Cloudinary
 * @property  {string} 'fetch' A resource fetched by Cloudinary from a 3rd party storage
 * @property  {string} 'private'
 * @property  {string} 'authenticated'
 * @property  {string} 'sprite'
 * @property  {string} 'facebook'
 * @property  {string} 'twitter'
 * @property  {string} 'youtube'
 * @property  {string} 'vimeo'
 *
 */

/**
 * The resource type
 * @typedef resourceType
 * @enum {string}
 * @property {string} 'image' An image file
 * @property {string} 'video' A video file
 * @property {string} 'raw'   A raw file
 */
// CONCATENATED MODULE: ./src/util/baseutil.js
function baseutil_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { baseutil_typeof = function _typeof(obj) { return typeof obj; }; } else { baseutil_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return baseutil_typeof(obj); }

/*
 * Includes common utility methods and shims
 */


function omit(obj, keys) {
  obj = obj || {};
  var srcKeys = Object.keys(obj).filter(function (key) {
    return !includes_root_includes_default()(keys, key);
  });
  var filtered = {};
  srcKeys.forEach(function (key) {
    return filtered[key] = obj[key];
  });
  return filtered;
}
/**
 * Return true if all items in list are strings
 * @function Util.allString
 * @param {Array} list - an array of items
 */

var baseutil_allStrings = function allStrings(list) {
  return list.length && list.every(isString_root_isString_default.a);
};
/**
* Creates a new array without the given item.
* @function Util.without
* @param {Array} array - original array
* @param {*} item - the item to exclude from the new array
* @return {Array} a new array made of the original array's items except for `item`
 */

var without = function without(array, item) {
  return array.filter(function (v) {
    return v !== item;
  });
};
/**
* Return true is value is a number or a string representation of a number.
* @function Util.isNumberLike
* @param {*} value
* @returns {boolean} true if value is a number
* @example
*    Util.isNumber(0) // true
*    Util.isNumber("1.3") // true
*    Util.isNumber("") // false
*    Util.isNumber(undefined) // false
 */

var isNumberLike = function isNumberLike(value) {
  return value != null && !isNaN(parseFloat(value));
};
/**
 * Escape all characters matching unsafe in the given string
 * @function Util.smartEscape
 * @param {string} string - source string to escape
 * @param {RegExp} unsafe - characters that must be escaped
 * @return {string} escaped string
 */

var smartEscape = function smartEscape(string) {
  var unsafe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /([^a-zA-Z0-9_.\-\/:]+)/g;
  return string.replace(unsafe, function (match) {
    return match.split("").map(function (c) {
      return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    }).join("");
  });
};
/**
 * Assign values from sources if they are not defined in the destination.
 * Once a value is set it does not change
 * @function Util.defaults
 * @param {Object} destination - the object to assign defaults to
 * @param {...Object} source - the source object(s) to assign defaults from
 * @return {Object} destination after it was modified
 */

var defaults = function defaults(destination) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  return sources.reduce(function (dest, source) {
    var key, value;

    for (key in source) {
      value = source[key];

      if (dest[key] === void 0) {
        dest[key] = value;
      }
    }

    return dest;
  }, destination);
};
/*********** lodash functions */

var objectProto = Object.prototype;
/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */

var objToString = objectProto.toString;
/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
#isObject({});
 * // => true
 *
#isObject([1, 2, 3]);
 * // => true
 *
#isObject(1);
 * // => false
 */

var isObject = function isObject(value) {
  var type; // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.

  type = baseutil_typeof(value);
  return !!value && (type === 'object' || type === 'function');
};
var funcTag = '[object Function]';
/**
* Checks if `value` is classified as a `Function` object.
* @function Util.isFunction
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
* @example
*
* function Foo(){};
* isFunction(Foo);
* // => true
*
* isFunction(/abc/);
* // => false
 */

var isFunction = function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 which returns 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) === funcTag;
};
/*********** lodash functions */

/** Used to match words to create compound words. */

var reWords = function () {
  var lower, upper;
  upper = '[A-Z]';
  lower = '[a-z]+';
  return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
}();
/**
* Convert string to camelCase
* @function Util.camelCase
* @param {string} source - the string to convert
* @return {string} in camelCase format
 */

var camelCase = function camelCase(source) {
  var words = source.match(reWords);
  words = words.map(function (word) {
    return word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase();
  });
  words[0] = words[0].toLocaleLowerCase();
  return words.join('');
};
/**
 * Convert string to snake_case
 * @function Util.snakeCase
 * @param {string} source - the string to convert
 * @return {string} in snake_case format
 */

var snakeCase = function snakeCase(source) {
  var words = source.match(reWords);
  words = words.map(function (word) {
    return word.toLocaleLowerCase();
  });
  return words.join('_');
};
/**
 * Creates a new object from source, with the keys transformed using the converter.
 * @param {object} source
 * @param {function|null} converter
 * @returns {object}
 */

var convertKeys = function convertKeys(source, converter) {
  var result, value;
  result = {};

  for (var key in source) {
    value = source[key];

    if (converter) {
      key = converter(key);
    }

    if (!isEmpty(key)) {
      result[key] = value;
    }
  }

  return result;
};
/**
 * Create a copy of the source object with all keys in camelCase
 * @function Util.withCamelCaseKeys
 * @param {Object} value - the object to copy
 * @return {Object} a new object
 */

var withCamelCaseKeys = function withCamelCaseKeys(source) {
  return convertKeys(source, camelCase);
};
/**
 * Create a copy of the source object with all keys in snake_case
 * @function Util.withSnakeCaseKeys
 * @param {Object} value - the object to copy
 * @return {Object} a new object
 */

var withSnakeCaseKeys = function withSnakeCaseKeys(source) {
  return convertKeys(source, snakeCase);
}; // Browser
// Node.js

var base64Encode = typeof btoa !== 'undefined' && isFunction(btoa) ? btoa : typeof Buffer !== 'undefined' && isFunction(Buffer) ? function (input) {
  if (!(input instanceof Buffer)) {
    input = new Buffer.from(String(input), 'binary');
  }

  return input.toString('base64');
} : function (input) {
  throw new Error("No base64 encoding function found");
};
/**
* Returns the Base64-decoded version of url.<br>
* This method delegates to `btoa` if present. Otherwise it tries `Buffer`.
* @function Util.base64EncodeURL
* @param {string} url - the url to encode. the value is URIdecoded and then re-encoded before converting to base64 representation
* @return {string} the base64 representation of the URL
 */

var base64EncodeURL = function base64EncodeURL(url) {
  try {
    url = decodeURI(url);
  } finally {
    url = encodeURI(url);
  }

  return base64Encode(url);
};
/**
 * Create a new object with only URL parameters
 * @param {object} options The source object
 * @return {Object} An object containing only URL parameters
 */

function extractUrlParams(options) {
  return URL_KEYS.reduce(function (obj, key) {
    if (options[key] != null) {
      obj[key] = options[key];
    }

    return obj;
  }, {});
}
/**
 * Handle the format parameter for fetch urls
 * @private
 * @param options url and transformation options. This argument may be changed by the function!
 */

function patchFetchFormat(options) {
  if (options == null) {
    options = {};
  }

  if (options.type === "fetch") {
    if (options.fetch_format == null) {
      options.fetch_format = optionConsume(options, "format");
    }
  }
}
/**
 * Deletes `option_name` from `options` and return the value if present.
 * If `options` doesn't contain `option_name` the default value is returned.
 * @param {Object} options a collection
 * @param {String} option_name the name (key) of the desired value
 * @param {*} [default_value] the value to return is option_name is missing
 */

function optionConsume(options, option_name, default_value) {
  var result = options[option_name];
  delete options[option_name];

  if (result != null) {
    return result;
  } else {
    return default_value;
  }
}
/**
 * Returns true if value is empty:
 * <ul>
 *   <li>value is null or undefined</li>
 *   <li>value is an array or string of length 0</li>
 *   <li>value is an object with no keys</li>
 * </ul>
 * @function Util.isEmpty
 * @param value
 * @returns {boolean} true if value is empty
 */

function isEmpty(value) {
  if (value == null) {
    return true;
  }

  if (typeof value.length == "number") {
    return value.length === 0;
  }

  if (typeof value.size == "number") {
    return value.size === 0;
  }

  if (baseutil_typeof(value) == "object") {
    for (var key in value) {
      if (value.hasOwnProperty(key)) {
        return false;
      }
    }

    return true;
  }

  return true;
}
// CONCATENATED MODULE: ./src/util/lodash.js
var nodeContains;





















/*
 * Includes utility methods and lodash / jQuery shims
 */

/**
 * Get data from the DOM element.
 *
 * This method will use jQuery's `data()` method if it is available, otherwise it will get the `data-` attribute
 * @param {Element} element - the element to get the data from
 * @param {string} name - the name of the data item
 * @returns the value associated with the `name`
 * @function Util.getData
 */

var lodash_getData = function getData(element, name) {
  switch (false) {
    case !(element == null):
      return void 0;

    case !isFunction_root_isFunction_default()(element.getAttribute):
      return element.getAttribute("data-".concat(name));

    case !isFunction_root_isFunction_default()(element.getAttr):
      return element.getAttr("data-".concat(name));

    case !isFunction_root_isFunction_default()(element.data):
      return element.data(name);

    case !(isFunction_root_isFunction_default()(typeof jQuery !== "undefined" && jQuery.fn && jQuery.fn.data) && isElement_root_isElement_default()(element)):
      return jQuery(element).data(name);
  }
};
/**
 * Set data in the DOM element.
 *
 * This method will use jQuery's `data()` method if it is available, otherwise it will set the `data-` attribute
 * @function Util.setData
 * @param {Element} element - the element to set the data in
 * @param {string} name - the name of the data item
 * @param {*} value - the value to be set
 *
 */

var lodash_setData = function setData(element, name, value) {
  switch (false) {
    case !(element == null):
      return void 0;

    case !isFunction_root_isFunction_default()(element.setAttribute):
      return element.setAttribute("data-".concat(name), value);

    case !isFunction_root_isFunction_default()(element.setAttr):
      return element.setAttr("data-".concat(name), value);

    case !isFunction_root_isFunction_default()(element.data):
      return element.data(name, value);

    case !(isFunction_root_isFunction_default()(typeof jQuery !== "undefined" && jQuery.fn && jQuery.fn.data) && isElement_root_isElement_default()(element)):
      return jQuery(element).data(name, value);
  }
};
/**
 * Get attribute from the DOM element.
 *
 * @function Util.getAttribute
 * @param {Element} element - the element to set the attribute for
 * @param {string} name - the name of the attribute
 * @returns {*} the value of the attribute
 *
 */

var lodash_getAttribute = function getAttribute(element, name) {
  switch (false) {
    case !(element == null):
      return void 0;

    case !isFunction_root_isFunction_default()(element.getAttribute):
      return element.getAttribute(name);

    case !isFunction_root_isFunction_default()(element.attr):
      return element.attr(name);

    case !isFunction_root_isFunction_default()(element.getAttr):
      return element.getAttr(name);
  }
};
/**
 * Set attribute in the DOM element.
 *
 * @function Util.setAttribute
 * @param {Element} element - the element to set the attribute for
 * @param {string} name - the name of the attribute
 * @param {*} value - the value to be set
 */

var lodash_setAttribute = function setAttribute(element, name, value) {
  switch (false) {
    case !(element == null):
      return void 0;

    case !isFunction_root_isFunction_default()(element.setAttribute):
      return element.setAttribute(name, value);

    case !isFunction_root_isFunction_default()(element.attr):
      return element.attr(name, value);

    case !isFunction_root_isFunction_default()(element.setAttr):
      return element.setAttr(name, value);
  }
};
/**
 * Remove an attribute in the DOM element.
 *
 * @function Util.removeAttribute
 * @param {Element} element - the element to set the attribute for
 * @param {string} name - the name of the attribute
 */

var lodash_removeAttribute = function removeAttribute(element, name) {
  switch (false) {
    case !(element == null):
      return void 0;

    case !isFunction_root_isFunction_default()(element.removeAttribute):
      return element.removeAttribute(name);

    default:
      return lodash_setAttribute(element, void 0);
  }
};
/**
 * Set a group of attributes to the element
 * @function Util.setAttributes
 * @param {Element} element - the element to set the attributes for
 * @param {Object} attributes - a hash of attribute names and values
 */

var setAttributes = function setAttributes(element, attributes) {
  var name, results, value;
  results = [];

  for (name in attributes) {
    value = attributes[name];

    if (value != null) {
      results.push(lodash_setAttribute(element, name, value));
    } else {
      results.push(lodash_removeAttribute(element, name));
    }
  }

  return results;
};
/**
 * Checks if element has a css class
 * @function Util.hasClass
 * @param {Element} element - the element to check
 * @param {string} name - the class name
 @returns {boolean} true if the element has the class
 */

var lodash_hasClass = function hasClass(element, name) {
  if (isElement_root_isElement_default()(element)) {
    return element.className.match(new RegExp("\\b".concat(name, "\\b")));
  }
};
/**
 * Add class to the element
 * @function Util.addClass
 * @param {Element} element - the element
 * @param {string} name - the class name to add
 */

var lodash_addClass = function addClass(element, name) {
  if (!element.className.match(new RegExp("\\b".concat(name, "\\b")))) {
    return element.className = trim_root_trim_default()("".concat(element.className, " ").concat(name));
  }
}; // The following code is taken from jQuery

var getStyles = function getStyles(elem) {
  // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
  // IE throws on elements created in popups
  // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
  if (elem.ownerDocument.defaultView.opener) {
    return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
  }

  return window.getComputedStyle(elem, null);
};
var cssExpand = ["Top", "Right", "Bottom", "Left"];

nodeContains = function nodeContains(a, b) {
  var adown, bup;
  adown = a.nodeType === 9 ? a.documentElement : a;
  bup = b && b.parentNode;
  return a === bup || !!(bup && bup.nodeType === 1 && adown.contains(bup));
}; // Truncated version of jQuery.style(elem, name)


var domStyle = function domStyle(elem, name) {
  if (!(!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style)) {
    return elem.style[name];
  }
};
var curCSS = function curCSS(elem, name, computed) {
  var maxWidth, minWidth, ret, rmargin, style, width;
  rmargin = /^margin/;
  width = void 0;
  minWidth = void 0;
  maxWidth = void 0;
  ret = void 0;
  style = elem.style;
  computed = computed || getStyles(elem);

  if (computed) {
    // Support: IE9
    // getPropertyValue is only needed for .css('filter') (#12537)
    ret = computed.getPropertyValue(name) || computed[name];
  }

  if (computed) {
    if (ret === "" && !nodeContains(elem.ownerDocument, elem)) {
      ret = domStyle(elem, name);
    } // Support: iOS < 6
    // A tribute to the "awesome hack by Dean Edwards"
    // iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
    // this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values


    if (rnumnonpx.test(ret) && rmargin.test(name)) {
      // Remember the original values
      width = style.width;
      minWidth = style.minWidth;
      maxWidth = style.maxWidth; // Put in the new values to get a computed value out

      style.minWidth = style.maxWidth = style.width = ret;
      ret = computed.width; // Revert the changed values

      style.width = width;
      style.minWidth = minWidth;
      style.maxWidth = maxWidth;
    }
  } // Support: IE
  // IE returns zIndex value as an integer.


  if (ret !== undefined) {
    return ret + "";
  } else {
    return ret;
  }
};
var cssValue = function cssValue(elem, name, convert, styles) {
  var val;
  val = curCSS(elem, name, styles);

  if (convert) {
    return parseFloat(val);
  } else {
    return val;
  }
};
var augmentWidthOrHeight = function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
  var i, len, side, sides, val; // If we already have the right measurement, avoid augmentation
  // Otherwise initialize for horizontal or vertical properties

  if (extra === (isBorderBox ? "border" : "content")) {
    return 0;
  } else {
    sides = name === "width" ? ["Right", "Left"] : ["Top", "Bottom"];
    val = 0;

    for (i = 0, len = sides.length; i < len; i++) {
      side = sides[i];

      if (extra === "margin") {
        // Both box models exclude margin, so add it if we want it
        val += cssValue(elem, extra + side, true, styles);
      }

      if (isBorderBox) {
        if (extra === "content") {
          // border-box includes padding, so remove it if we want content
          val -= cssValue(elem, "padding".concat(side), true, styles);
        }

        if (extra !== "margin") {
          // At this point, extra isn't border nor margin, so remove border
          val -= cssValue(elem, "border".concat(side, "Width"), true, styles);
        }
      } else {
        // At this point, extra isn't content, so add padding
        val += cssValue(elem, "padding".concat(side), true, styles);

        if (extra !== "padding") {
          // At this point, extra isn't content nor padding, so add border
          val += cssValue(elem, "border".concat(side, "Width"), true, styles);
        }
      }
    }

    return val;
  }
};
var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
var getWidthOrHeight = function getWidthOrHeight(elem, name, extra) {
  var isBorderBox, styles, val, valueIsBorderBox; // Start with offset property, which is equivalent to the border-box value

  valueIsBorderBox = true;
  val = name === "width" ? elem.offsetWidth : elem.offsetHeight;
  styles = getStyles(elem);
  isBorderBox = cssValue(elem, "boxSizing", false, styles) === "border-box"; // Some non-html elements return undefined for offsetWidth, so check for null/undefined
  // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
  // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668

  if (val <= 0 || val == null) {
    // Fall back to computed then uncomputed css if necessary
    val = curCSS(elem, name, styles);

    if (val < 0 || val == null) {
      val = elem.style[name];
    }

    if (rnumnonpx.test(val)) {
      // Computed unit is not pixels. Stop here and return.
      return val;
    } // Check for style in case a browser which returns unreliable values
    // for getComputedStyle silently falls back to the reliable elem.style
    //    valueIsBorderBox = isBorderBox and (support.boxSizingReliable() or val is elem.style[name])


    valueIsBorderBox = isBorderBox && val === elem.style[name]; // Normalize "", auto, and prepare for extra

    val = parseFloat(val) || 0;
  } // Use the active box-sizing model to add/subtract irrelevant styles


  return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles);
};
var lodash_width = function width(element) {
  return getWidthOrHeight(element, "width", "content");
};
/**
 * @class Util
 */

/**
 * Returns true if item is a string
 * @function Util.isString
 * @param item
 * @returns {boolean} true if item is a string
 */

/**
 * Returns true if item is empty:
 * <ul>
 *   <li>item is null or undefined</li>
 *   <li>item is an array or string of length 0</li>
 *   <li>item is an object with no keys</li>
 * </ul>
 * @function Util.isEmpty
 * @param item
 * @returns {boolean} true if item is empty
 */

/**
 * Assign source properties to destination.
 * If the property is an object it is assigned as a whole, overriding the destination object.
 * @function Util.assign
 * @param {Object} destination - the object to assign to
 */

/**
 * Recursively assign source properties to destination
 * @function Util.merge
 * @param {Object} destination - the object to assign to
 * @param {...Object} [sources] The source objects.
 */

/**
 * Create a new copy of the given object, including all internal objects.
 * @function Util.cloneDeep
 * @param {Object} value - the object to clone
 * @return {Object} a new deep copy of the object
 */

/**
 * Creates a new array from the parameter with "falsey" values removed
 * @function Util.compact
 * @param {Array} array - the array to remove values from
 * @return {Array} a new array without falsey values
 */

/**
 * Check if a given item is included in the given array
 * @function Util.contains
 * @param {Array} array - the array to search in
 * @param {*} item - the item to search for
 * @return {boolean} true if the item is included in the array
 */

/**
 * Returns values in the given array that are not included in the other array
 * @function Util.difference
 * @param {Array} arr - the array to select from
 * @param {Array} values - values to filter from arr
 * @return {Array} the filtered values
 */

/**
 * Returns a list of all the function names in obj
 * @function Util.functions
 * @param {Object} object - the object to inspect
 * @return {Array} a list of functions of object
 */

/**
 * Returns the provided value. This functions is used as a default predicate function.
 * @function Util.identity
 * @param {*} value
 * @return {*} the provided value
 */

/**
 * Remove leading or trailing spaces from text
 * @function Util.trim
 * @param {string} text
 * @return {string} the `text` without leading or trailing spaces
 */
// CONCATENATED MODULE: ./src/expression.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Represents a transformation expression.
 * @param {string} expressionStr - An expression in string format.
 * @class Expression
 *
 */
var Expression = /*#__PURE__*/function () {
  function Expression(expressionStr) {
    _classCallCheck(this, Expression);

    /**
     * @protected
     * @inner Expression-expressions
     */
    this.expressions = [];

    if (expressionStr != null) {
      this.expressions.push(Expression.normalize(expressionStr));
    }
  }
  /**
   * Convenience constructor method
   * @function Expression.new
   */


  _createClass(Expression, [{
    key: "serialize",

    /**
     * Serialize the expression
     * @return {string} the expression as a string
     */
    value: function serialize() {
      return Expression.normalize(this.expressions.join("_"));
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.serialize();
    }
    /**
     * Get the parent transformation of this expression
     * @return Transformation
     */

  }, {
    key: "getParent",
    value: function getParent() {
      return this.parent;
    }
    /**
     * Set the parent transformation of this expression
     * @param {Transformation} the parent transformation
     * @return {Expression} this expression
     */

  }, {
    key: "setParent",
    value: function setParent(parent) {
      this.parent = parent;
      return this;
    }
    /**
     * Add a expression
     * @function Expression#predicate
     * @internal
     */

  }, {
    key: "predicate",
    value: function predicate(name, operator, value) {
      if (Expression.OPERATORS[operator] != null) {
        operator = Expression.OPERATORS[operator];
      }

      this.expressions.push("".concat(name, "_").concat(operator, "_").concat(value));
      return this;
    }
    /**
     * @function Expression#and
     */

  }, {
    key: "and",
    value: function and() {
      this.expressions.push("and");
      return this;
    }
    /**
     * @function Expression#or
     */

  }, {
    key: "or",
    value: function or() {
      this.expressions.push("or");
      return this;
    }
    /**
     * Conclude expression
     * @function Expression#then
     * @return {Transformation} the transformation this expression is defined for
     */

  }, {
    key: "then",
    value: function then() {
      return this.getParent()["if"](this.toString());
    }
    /**
     * @function Expression#height
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Expression} this expression
     */

  }, {
    key: "height",
    value: function height(operator, value) {
      return this.predicate("h", operator, value);
    }
    /**
     * @function Expression#width
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Expression} this expression
     */

  }, {
    key: "width",
    value: function width(operator, value) {
      return this.predicate("w", operator, value);
    }
    /**
     * @function Expression#aspectRatio
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Expression} this expression
     */

  }, {
    key: "aspectRatio",
    value: function aspectRatio(operator, value) {
      return this.predicate("ar", operator, value);
    }
    /**
     * @function Expression#pages
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Expression} this expression
     */

  }, {
    key: "pageCount",
    value: function pageCount(operator, value) {
      return this.predicate("pc", operator, value);
    }
    /**
     * @function Expression#faces
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Expression} this expression
     */

  }, {
    key: "faceCount",
    value: function faceCount(operator, value) {
      return this.predicate("fc", operator, value);
    }
  }, {
    key: "value",
    value: function value(_value) {
      this.expressions.push(_value);
      return this;
    }
    /**
     */

  }], [{
    key: "new",
    value: function _new(expressionStr) {
      return new this(expressionStr);
    }
    /**
     * Normalize a string expression
     * @function Cloudinary#normalize
     * @param {string} expression a expression, e.g. "w gt 100", "width_gt_100", "width > 100"
     * @return {string} the normalized form of the value expression, e.g. "w_gt_100"
     */

  }, {
    key: "normalize",
    value: function normalize(expression) {
      var operators, operatorsPattern, operatorsReplaceRE, predefinedVarsPattern, predefinedVarsReplaceRE;

      if (expression == null) {
        return expression;
      }

      expression = String(expression);
      operators = "\\|\\||>=|<=|&&|!=|>|=|<|/|-|\\+|\\*|\\^"; // operators

      operatorsPattern = "((" + operators + ")(?=[ _]))";
      operatorsReplaceRE = new RegExp(operatorsPattern, "g");
      expression = expression.replace(operatorsReplaceRE, function (match) {
        return Expression.OPERATORS[match];
      }); // predefined variables

      predefinedVarsPattern = "(" + Object.keys(Expression.PREDEFINED_VARS).join("|") + ")";
      predefinedVarsReplaceRE = new RegExp(predefinedVarsPattern, "g");
      expression = expression.replace(predefinedVarsReplaceRE, function (match, p1, offset) {
        return expression[offset - 1] === '$' ? match : Expression.PREDEFINED_VARS[match];
      });
      return expression.replace(/[ _]+/g, '_');
    }
  }, {
    key: "variable",
    value: function variable(name, value) {
      return new this(name).value(value);
    }
    /**
     * @returns Expression a new expression with the predefined variable "width"
     * @function Expression.width
     */

  }, {
    key: "width",
    value: function width() {
      return new this("width");
    }
    /**
     * @returns Expression a new expression with the predefined variable "height"
     * @function Expression.height
     */

  }, {
    key: "height",
    value: function height() {
      return new this("height");
    }
    /**
     * @returns Expression a new expression with the predefined variable "initialWidth"
     * @function Expression.initialWidth
     */

  }, {
    key: "initialWidth",
    value: function initialWidth() {
      return new this("initialWidth");
    }
    /**
     * @returns Expression a new expression with the predefined variable "initialHeight"
     * @function Expression.initialHeight
     */

  }, {
    key: "initialHeight",
    value: function initialHeight() {
      return new this("initialHeight");
    }
    /**
     * @returns Expression a new expression with the predefined variable "aspectRatio"
     * @function Expression.aspectRatio
     */

  }, {
    key: "aspectRatio",
    value: function aspectRatio() {
      return new this("aspectRatio");
    }
    /**
     * @returns Expression a new expression with the predefined variable "initialAspectRatio"
     * @function Expression.initialAspectRatio
     */

  }, {
    key: "initialAspectRatio",
    value: function initialAspectRatio() {
      return new this("initialAspectRatio");
    }
    /**
     * @returns Expression a new expression with the predefined variable "pageCount"
     * @function Expression.pageCount
     */

  }, {
    key: "pageCount",
    value: function pageCount() {
      return new this("pageCount");
    }
    /**
     * @returns Expression new expression with the predefined variable "faceCount"
     * @function Expression.faceCount
     */

  }, {
    key: "faceCount",
    value: function faceCount() {
      return new this("faceCount");
    }
    /**
     * @returns Expression a new expression with the predefined variable "currentPage"
     * @function Expression.currentPage
     */

  }, {
    key: "currentPage",
    value: function currentPage() {
      return new this("currentPage");
    }
    /**
     * @returns Expression a new expression with the predefined variable "tags"
     * @function Expression.tags
     */

  }, {
    key: "tags",
    value: function tags() {
      return new this("tags");
    }
    /**
     * @returns Expression a new expression with the predefined variable "pageX"
     * @function Expression.pageX
     */

  }, {
    key: "pageX",
    value: function pageX() {
      return new this("pageX");
    }
    /**
     * @returns Expression a new expression with the predefined variable "pageY"
     * @function Expression.pageY
     */

  }, {
    key: "pageY",
    value: function pageY() {
      return new this("pageY");
    }
  }]);

  return Expression;
}();
/**
 * @internal
 */


Expression.OPERATORS = {
  "=": 'eq',
  "!=": 'ne',
  "<": 'lt',
  ">": 'gt',
  "<=": 'lte',
  ">=": 'gte',
  "&&": 'and',
  "||": 'or',
  "*": "mul",
  "/": "div",
  "+": "add",
  "-": "sub",
  "^": "pow"
};
/**
 * @internal
 */

Expression.PREDEFINED_VARS = {
  "aspect_ratio": "ar",
  "aspectRatio": "ar",
  "current_page": "cp",
  "currentPage": "cp",
  "preview:duration": "preview:duration",
  "duration": "du",
  "face_count": "fc",
  "faceCount": "fc",
  "height": "h",
  "initial_aspect_ratio": "iar",
  "initial_duration": "idu",
  "initial_height": "ih",
  "initial_width": "iw",
  "initialAspectRatio": "iar",
  "initialDuration": "idu",
  "initialHeight": "ih",
  "initialWidth": "iw",
  "page_count": "pc",
  "page_x": "px",
  "page_y": "py",
  "pageCount": "pc",
  "pageX": "px",
  "pageY": "py",
  "tags": "tags",
  "width": "w"
};
/**
 * @internal
 */

Expression.BOUNDRY = "[ _]+";
/* harmony default export */ var expression = (Expression);
// CONCATENATED MODULE: ./src/condition.js
function condition_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { condition_typeof = function _typeof(obj) { return typeof obj; }; } else { condition_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return condition_typeof(obj); }

function condition_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function condition_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function condition_createClass(Constructor, protoProps, staticProps) { if (protoProps) condition_defineProperties(Constructor.prototype, protoProps); if (staticProps) condition_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (condition_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/**
 * Represents a transformation condition.
 * @param {string} conditionStr - a condition in string format
 * @class Condition
 * @example
 * // normally this class is not instantiated directly
 * var tr = cloudinary.Transformation.new()
 *    .if().width( ">", 1000).and().aspectRatio("<", "3:4").then()
 *      .width(1000)
 *      .crop("scale")
 *    .else()
 *      .width(500)
 *      .crop("scale")
 *
 * var tr = cloudinary.Transformation.new()
 *    .if("w > 1000 and aspectRatio < 3:4")
 *      .width(1000)
 *      .crop("scale")
 *    .else()
 *      .width(500)
 *      .crop("scale")
 *
 */

var Condition = /*#__PURE__*/function (_Expression) {
  _inherits(Condition, _Expression);

  var _super = _createSuper(Condition);

  function Condition(conditionStr) {
    condition_classCallCheck(this, Condition);

    return _super.call(this, conditionStr);
  }
  /**
   * @function Condition#height
   * @param {string} operator the comparison operator (e.g. "<", "lt")
   * @param {string|number} value the right hand side value
   * @return {Condition} this condition
   */


  condition_createClass(Condition, [{
    key: "height",
    value: function height(operator, value) {
      return this.predicate("h", operator, value);
    }
    /**
     * @function Condition#width
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Condition} this condition
     */

  }, {
    key: "width",
    value: function width(operator, value) {
      return this.predicate("w", operator, value);
    }
    /**
     * @function Condition#aspectRatio
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Condition} this condition
     */

  }, {
    key: "aspectRatio",
    value: function aspectRatio(operator, value) {
      return this.predicate("ar", operator, value);
    }
    /**
     * @function Condition#pages
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Condition} this condition
     */

  }, {
    key: "pageCount",
    value: function pageCount(operator, value) {
      return this.predicate("pc", operator, value);
    }
    /**
     * @function Condition#faces
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Condition} this condition
     */

  }, {
    key: "faceCount",
    value: function faceCount(operator, value) {
      return this.predicate("fc", operator, value);
    }
    /**
     * @function Condition#duration
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Condition} this condition
     */

  }, {
    key: "duration",
    value: function duration(operator, value) {
      return this.predicate("du", operator, value);
    }
    /**
     * @function Condition#initialDuration
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Condition} this condition
     */

  }, {
    key: "initialDuration",
    value: function initialDuration(operator, value) {
      return this.predicate("idu", operator, value);
    }
  }]);

  return Condition;
}(expression);

/* harmony default export */ var condition = (Condition);
// CONCATENATED MODULE: ./src/configuration.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || configuration_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function configuration_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return configuration_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return configuration_arrayLikeToArray(o, minLen); }

function configuration_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function configuration_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function configuration_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function configuration_createClass(Constructor, protoProps, staticProps) { if (protoProps) configuration_defineProperties(Constructor.prototype, protoProps); if (staticProps) configuration_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Class for defining account configuration options.
 * Depends on 'utils'
 */

/**
 * Class for defining account configuration options.
 * @constructor Configuration
 * @param {Object} options - The account configuration parameters to set.
 * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
 *  target="_new">Available configuration options</a>
 */

var configuration_Configuration = /*#__PURE__*/function () {
  function Configuration(options) {
    configuration_classCallCheck(this, Configuration);

    this.configuration = options == null ? {} : cloneDeep_root_cloneDeep_default()(options);
    defaults(this.configuration, DEFAULT_CONFIGURATION_PARAMS);
  }
  /**
   * Initializes the configuration. This method is a convenience method that invokes both
   *  {@link Configuration#fromEnvironment|fromEnvironment()} (Node.js environment only)
   *  and {@link Configuration#fromDocument|fromDocument()}.
   *  It first tries to retrieve the configuration from the environment variable.
   *  If not available, it tries from the document meta tags.
   * @function Configuration#init
   * @return {Configuration} returns `this` for chaining
   * @see fromDocument
   * @see fromEnvironment
   */


  configuration_createClass(Configuration, [{
    key: "init",
    value: function init() {
      this.fromEnvironment();
      this.fromDocument();
      return this;
    }
    /**
     * Set a new configuration item
     * @function Configuration#set
     * @param {string} name - the name of the item to set
     * @param {*} value - the value to be set
     * @return {Configuration}
     *
     */

  }, {
    key: "set",
    value: function set(name, value) {
      this.configuration[name] = value;
      return this;
    }
    /**
     * Get the value of a configuration item
     * @function Configuration#get
     * @param {string} name - the name of the item to set
     * @return {*} the configuration item
     */

  }, {
    key: "get",
    value: function get(name) {
      return this.configuration[name];
    }
  }, {
    key: "merge",
    value: function merge(config) {
      assign_root_assign_default()(this.configuration, cloneDeep_root_cloneDeep_default()(config));
      return this;
    }
    /**
     * Initialize Cloudinary from HTML meta tags.
     * @function Configuration#fromDocument
     * @return {Configuration}
     * @example <meta name="cloudinary_cloud_name" content="mycloud">
     *
     */

  }, {
    key: "fromDocument",
    value: function fromDocument() {
      var el, i, len, meta_elements;
      meta_elements = typeof document !== "undefined" && document !== null ? document.querySelectorAll('meta[name^="cloudinary_"]') : void 0;

      if (meta_elements) {
        for (i = 0, len = meta_elements.length; i < len; i++) {
          el = meta_elements[i];
          this.configuration[el.getAttribute('name').replace('cloudinary_', '')] = el.getAttribute('content');
        }
      }

      return this;
    }
    /**
     * Initialize Cloudinary from the `CLOUDINARY_URL` environment variable.
     *
     * This function will only run under Node.js environment.
     * @function Configuration#fromEnvironment
     * @requires Node.js
     */

  }, {
    key: "fromEnvironment",
    value: function fromEnvironment() {
      var _this = this;

      var cloudinary_url, query, uri, uriRegex;

      if (typeof process !== "undefined" && process !== null && process.env && process.env.CLOUDINARY_URL) {
        cloudinary_url = process.env.CLOUDINARY_URL;
        uriRegex = /cloudinary:\/\/(?:(\w+)(?:\:([\w-]+))?@)?([\w\.-]+)(?:\/([^?]*))?(?:\?(.+))?/;
        uri = uriRegex.exec(cloudinary_url);

        if (uri) {
          if (uri[3] != null) {
            this.configuration['cloud_name'] = uri[3];
          }

          if (uri[1] != null) {
            this.configuration['api_key'] = uri[1];
          }

          if (uri[2] != null) {
            this.configuration['api_secret'] = uri[2];
          }

          if (uri[4] != null) {
            this.configuration['private_cdn'] = uri[4] != null;
          }

          if (uri[4] != null) {
            this.configuration['secure_distribution'] = uri[4];
          }

          query = uri[5];

          if (query != null) {
            query.split('&').forEach(function (value) {
              var _value$split = value.split('='),
                  _value$split2 = _slicedToArray(_value$split, 2),
                  k = _value$split2[0],
                  v = _value$split2[1];

              if (v == null) {
                v = true;
              }

              _this.configuration[k] = v;
            });
          }
        }
      }

      return this;
    }
    /**
     * Create or modify the Cloudinary client configuration
     *
     * Warning: `config()` returns the actual internal configuration object. modifying it will change the configuration.
     *
     * This is a backward compatibility method. For new code, use get(), merge() etc.
     * @function Configuration#config
     * @param {hash|string|boolean} new_config
     * @param {string} new_value
     * @returns {*} configuration, or value
     *
     * @see {@link fromEnvironment} for initialization using environment variables
     * @see {@link fromDocument} for initialization using HTML meta tags
     */

  }, {
    key: "config",
    value: function config(new_config, new_value) {
      switch (false) {
        case new_value === void 0:
          this.set(new_config, new_value);
          return this.configuration;

        case !isString_root_isString_default()(new_config):
          return this.get(new_config);

        case !isPlainObject_root_isPlainObject_default()(new_config):
          this.merge(new_config);
          return this.configuration;

        default:
          // Backward compatibility - return the internal object
          return this.configuration;
      }
    }
    /**
     * Returns a copy of the configuration parameters
     * @function Configuration#toOptions
     * @returns {Object} a key:value collection of the configuration parameters
     */

  }, {
    key: "toOptions",
    value: function toOptions() {
      return cloneDeep_root_cloneDeep_default()(this.configuration);
    }
  }]);

  return Configuration;
}();

var DEFAULT_CONFIGURATION_PARAMS = {
  responsive_class: 'cld-responsive',
  responsive_use_breakpoints: true,
  round_dpr: true,
  secure: (typeof window !== "undefined" && window !== null ? window.location ? window.location.protocol : void 0 : void 0) === 'https:'
};
configuration_Configuration.CONFIG_PARAMS = ["api_key", "api_secret", "callback", "cdn_subdomain", "cloud_name", "cname", "private_cdn", "protocol", "resource_type", "responsive", "responsive_class", "responsive_use_breakpoints", "responsive_width", "round_dpr", "secure", "secure_cdn_subdomain", "secure_distribution", "shorten", "type", "upload_preset", "url_suffix", "use_root_path", "version", "externalLibraries", "max_timeout_ms"];
/* harmony default export */ var src_configuration = (configuration_Configuration);
// CONCATENATED MODULE: ./src/layer/layer.js
function layer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function layer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function layer_createClass(Constructor, protoProps, staticProps) { if (protoProps) layer_defineProperties(Constructor.prototype, protoProps); if (staticProps) layer_defineProperties(Constructor, staticProps); return Constructor; }



var layer_Layer = /*#__PURE__*/function () {
  /**
   * Layer
   * @constructor Layer
   * @param {Object} options - layer parameters
   */
  function Layer(options) {
    var _this = this;

    layer_classCallCheck(this, Layer);

    this.options = {};

    if (options != null) {
      ["resourceType", "type", "publicId", "format"].forEach(function (key) {
        var ref;
        return _this.options[key] = (ref = options[key]) != null ? ref : options[snakeCase(key)];
      });
    }
  }

  layer_createClass(Layer, [{
    key: "resourceType",
    value: function resourceType(value) {
      this.options.resourceType = value;
      return this;
    }
  }, {
    key: "type",
    value: function type(value) {
      this.options.type = value;
      return this;
    }
  }, {
    key: "publicId",
    value: function publicId(value) {
      this.options.publicId = value;
      return this;
    }
    /**
     * Get the public ID, formatted for layer parameter
     * @function Layer#getPublicId
     * @return {String} public ID
     */

  }, {
    key: "getPublicId",
    value: function getPublicId() {
      var ref;
      return (ref = this.options.publicId) != null ? ref.replace(/\//g, ":") : void 0;
    }
    /**
     * Get the public ID, with format if present
     * @function Layer#getFullPublicId
     * @return {String} public ID
     */

  }, {
    key: "getFullPublicId",
    value: function getFullPublicId() {
      if (this.options.format != null) {
        return this.getPublicId() + "." + this.options.format;
      } else {
        return this.getPublicId();
      }
    }
  }, {
    key: "format",
    value: function format(value) {
      this.options.format = value;
      return this;
    }
    /**
     * generate the string representation of the layer
     * @function Layer#toString
     */

  }, {
    key: "toString",
    value: function toString() {
      var components;
      components = [];

      if (this.options.publicId == null) {
        throw "Must supply publicId";
      }

      if (!(this.options.resourceType === "image")) {
        components.push(this.options.resourceType);
      }

      if (!(this.options.type === "upload")) {
        components.push(this.options.type);
      }

      components.push(this.getFullPublicId());
      return compact_root_compact_default()(components).join(":");
    }
  }, {
    key: "clone",
    value: function clone() {
      return new this.constructor(this.options);
    }
  }]);

  return Layer;
}();

/* harmony default export */ var layer_layer = (layer_Layer);
// CONCATENATED MODULE: ./src/layer/textlayer.js
function textlayer_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { textlayer_typeof = function _typeof(obj) { return typeof obj; }; } else { textlayer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return textlayer_typeof(obj); }

function textlayer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function textlayer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function textlayer_createClass(Constructor, protoProps, staticProps) { if (protoProps) textlayer_defineProperties(Constructor.prototype, protoProps); if (staticProps) textlayer_defineProperties(Constructor, staticProps); return Constructor; }

function textlayer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) textlayer_setPrototypeOf(subClass, superClass); }

function textlayer_setPrototypeOf(o, p) { textlayer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return textlayer_setPrototypeOf(o, p); }

function textlayer_createSuper(Derived) { var hasNativeReflectConstruct = textlayer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = textlayer_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = textlayer_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return textlayer_possibleConstructorReturn(this, result); }; }

function textlayer_possibleConstructorReturn(self, call) { if (call && (textlayer_typeof(call) === "object" || typeof call === "function")) { return call; } return textlayer_assertThisInitialized(self); }

function textlayer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function textlayer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function textlayer_getPrototypeOf(o) { textlayer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return textlayer_getPrototypeOf(o); }




var textlayer_TextLayer = /*#__PURE__*/function (_Layer) {
  textlayer_inherits(TextLayer, _Layer);

  var _super = textlayer_createSuper(TextLayer);

  /**
   * @constructor TextLayer
   * @param {Object} options - layer parameters
   */
  function TextLayer(options) {
    var _this;

    textlayer_classCallCheck(this, TextLayer);

    var keys;
    _this = _super.call(this, options);
    keys = ["resourceType", "resourceType", "fontFamily", "fontSize", "fontWeight", "fontStyle", "textDecoration", "textAlign", "stroke", "letterSpacing", "lineSpacing", "fontHinting", "fontAntialiasing", "text"];

    if (options != null) {
      keys.forEach(function (key) {
        var ref;
        return _this.options[key] = (ref = options[key]) != null ? ref : options[snakeCase(key)];
      });
    }

    _this.options.resourceType = "text";
    return _this;
  }

  textlayer_createClass(TextLayer, [{
    key: "resourceType",
    value: function resourceType(_resourceType) {
      throw "Cannot modify resourceType for text layers";
    }
  }, {
    key: "type",
    value: function type(_type) {
      throw "Cannot modify type for text layers";
    }
  }, {
    key: "format",
    value: function format(_format) {
      throw "Cannot modify format for text layers";
    }
  }, {
    key: "fontFamily",
    value: function fontFamily(_fontFamily) {
      this.options.fontFamily = _fontFamily;
      return this;
    }
  }, {
    key: "fontSize",
    value: function fontSize(_fontSize) {
      this.options.fontSize = _fontSize;
      return this;
    }
  }, {
    key: "fontWeight",
    value: function fontWeight(_fontWeight) {
      this.options.fontWeight = _fontWeight;
      return this;
    }
  }, {
    key: "fontStyle",
    value: function fontStyle(_fontStyle) {
      this.options.fontStyle = _fontStyle;
      return this;
    }
  }, {
    key: "textDecoration",
    value: function textDecoration(_textDecoration) {
      this.options.textDecoration = _textDecoration;
      return this;
    }
  }, {
    key: "textAlign",
    value: function textAlign(_textAlign) {
      this.options.textAlign = _textAlign;
      return this;
    }
  }, {
    key: "stroke",
    value: function stroke(_stroke) {
      this.options.stroke = _stroke;
      return this;
    }
  }, {
    key: "letterSpacing",
    value: function letterSpacing(_letterSpacing) {
      this.options.letterSpacing = _letterSpacing;
      return this;
    }
  }, {
    key: "lineSpacing",
    value: function lineSpacing(_lineSpacing) {
      this.options.lineSpacing = _lineSpacing;
      return this;
    }
  }, {
    key: "fontHinting",
    value: function fontHinting(_fontHinting) {
      this.options.fontHinting = _fontHinting;
      return this;
    }
  }, {
    key: "fontAntialiasing",
    value: function fontAntialiasing(_fontAntialiasing) {
      this.options.fontAntialiasing = _fontAntialiasing;
      return this;
    }
  }, {
    key: "text",
    value: function text(_text) {
      this.options.text = _text;
      return this;
    }
    /**
     * generate the string representation of the layer
     * @function TextLayer#toString
     * @return {String}
     */

  }, {
    key: "toString",
    value: function toString() {
      var components, hasPublicId, hasStyle, publicId, re, res, start, style, text, textSource;
      style = this.textStyleIdentifier();

      if (this.options.publicId != null) {
        publicId = this.getFullPublicId();
      }

      if (this.options.text != null) {
        hasPublicId = !isEmpty(publicId);
        hasStyle = !isEmpty(style);

        if (hasPublicId && hasStyle || !hasPublicId && !hasStyle) {
          throw "Must supply either style parameters or a public_id when providing text parameter in a text overlay/underlay, but not both!";
        }

        re = /\$\([a-zA-Z]\w*\)/g;
        start = 0; //        textSource = text.replace(new RegExp("[,/]", 'g'), (c)-> "%#{c.charCodeAt(0).toString(16).toUpperCase()}")

        textSource = smartEscape(this.options.text, /[,\/]/g);
        text = "";

        while (res = re.exec(textSource)) {
          text += smartEscape(textSource.slice(start, res.index));
          text += res[0];
          start = res.index + res[0].length;
        }

        text += smartEscape(textSource.slice(start));
      }

      components = [this.options.resourceType, style, publicId, text];
      return compact_root_compact_default()(components).join(":");
    }
  }, {
    key: "textStyleIdentifier",
    value: function textStyleIdentifier() {
      var components;
      components = [];

      if (this.options.fontWeight !== "normal") {
        components.push(this.options.fontWeight);
      }

      if (this.options.fontStyle !== "normal") {
        components.push(this.options.fontStyle);
      }

      if (this.options.textDecoration !== "none") {
        components.push(this.options.textDecoration);
      }

      components.push(this.options.textAlign);

      if (this.options.stroke !== "none") {
        components.push(this.options.stroke);
      }

      if (!(isEmpty(this.options.letterSpacing) && !isNumberLike(this.options.letterSpacing))) {
        components.push("letter_spacing_" + this.options.letterSpacing);
      }

      if (!(isEmpty(this.options.lineSpacing) && !isNumberLike(this.options.lineSpacing))) {
        components.push("line_spacing_" + this.options.lineSpacing);
      }

      if (!isEmpty(this.options.fontAntialiasing)) {
        components.push("antialias_" + this.options.fontAntialiasing);
      }

      if (!isEmpty(this.options.fontHinting)) {
        components.push("hinting_" + this.options.fontHinting);
      }

      if (!isEmpty(compact_root_compact_default()(components))) {
        if (isEmpty(this.options.fontFamily)) {
          throw "Must supply fontFamily. ".concat(components);
        }

        if (isEmpty(this.options.fontSize) && !isNumberLike(this.options.fontSize)) {
          throw "Must supply fontSize.";
        }
      }

      components.unshift(this.options.fontFamily, this.options.fontSize);
      components = compact_root_compact_default()(components).join("_");
      return components;
    }
  }]);

  return TextLayer;
}(layer_layer);

;
/* harmony default export */ var textlayer = (textlayer_TextLayer);
// CONCATENATED MODULE: ./src/layer/subtitleslayer.js
function subtitleslayer_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { subtitleslayer_typeof = function _typeof(obj) { return typeof obj; }; } else { subtitleslayer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return subtitleslayer_typeof(obj); }

function subtitleslayer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function subtitleslayer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) subtitleslayer_setPrototypeOf(subClass, superClass); }

function subtitleslayer_setPrototypeOf(o, p) { subtitleslayer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return subtitleslayer_setPrototypeOf(o, p); }

function subtitleslayer_createSuper(Derived) { var hasNativeReflectConstruct = subtitleslayer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = subtitleslayer_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = subtitleslayer_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return subtitleslayer_possibleConstructorReturn(this, result); }; }

function subtitleslayer_possibleConstructorReturn(self, call) { if (call && (subtitleslayer_typeof(call) === "object" || typeof call === "function")) { return call; } return subtitleslayer_assertThisInitialized(self); }

function subtitleslayer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function subtitleslayer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function subtitleslayer_getPrototypeOf(o) { subtitleslayer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return subtitleslayer_getPrototypeOf(o); }



var SubtitlesLayer = /*#__PURE__*/function (_TextLayer) {
  subtitleslayer_inherits(SubtitlesLayer, _TextLayer);

  var _super = subtitleslayer_createSuper(SubtitlesLayer);

  /**
   * Represent a subtitles layer
   * @constructor SubtitlesLayer
   * @param {Object} options - layer parameters
   */
  function SubtitlesLayer(options) {
    var _this;

    subtitleslayer_classCallCheck(this, SubtitlesLayer);

    _this = _super.call(this, options);
    _this.options.resourceType = "subtitles";
    return _this;
  }

  return SubtitlesLayer;
}(textlayer);

/* harmony default export */ var subtitleslayer = (SubtitlesLayer);
// CONCATENATED MODULE: ./src/layer/fetchlayer.js
function fetchlayer_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { fetchlayer_typeof = function _typeof(obj) { return typeof obj; }; } else { fetchlayer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return fetchlayer_typeof(obj); }

function fetchlayer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function fetchlayer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function fetchlayer_createClass(Constructor, protoProps, staticProps) { if (protoProps) fetchlayer_defineProperties(Constructor.prototype, protoProps); if (staticProps) fetchlayer_defineProperties(Constructor, staticProps); return Constructor; }

function fetchlayer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) fetchlayer_setPrototypeOf(subClass, superClass); }

function fetchlayer_setPrototypeOf(o, p) { fetchlayer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return fetchlayer_setPrototypeOf(o, p); }

function fetchlayer_createSuper(Derived) { var hasNativeReflectConstruct = fetchlayer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = fetchlayer_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = fetchlayer_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return fetchlayer_possibleConstructorReturn(this, result); }; }

function fetchlayer_possibleConstructorReturn(self, call) { if (call && (fetchlayer_typeof(call) === "object" || typeof call === "function")) { return call; } return fetchlayer_assertThisInitialized(self); }

function fetchlayer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function fetchlayer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function fetchlayer_getPrototypeOf(o) { fetchlayer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return fetchlayer_getPrototypeOf(o); }




var fetchlayer_FetchLayer = /*#__PURE__*/function (_Layer) {
  fetchlayer_inherits(FetchLayer, _Layer);

  var _super = fetchlayer_createSuper(FetchLayer);

  /**
   * @class FetchLayer
   * @classdesc Creates an image layer using a remote URL.
   * @param {Object|string} options - layer parameters or a url
   * @param {string} options.url the url of the image to fetch
   */
  function FetchLayer(options) {
    var _this;

    fetchlayer_classCallCheck(this, FetchLayer);

    _this = _super.call(this, options);

    if (isString_root_isString_default()(options)) {
      _this.options.url = options;
    } else if (options != null ? options.url : void 0) {
      _this.options.url = options.url;
    }

    return _this;
  }

  fetchlayer_createClass(FetchLayer, [{
    key: "url",
    value: function url(_url) {
      this.options.url = _url;
      return this;
    }
    /**
     * generate the string representation of the layer
     * @function FetchLayer#toString
     * @return {String}
     */

  }, {
    key: "toString",
    value: function toString() {
      return "fetch:".concat(base64EncodeURL(this.options.url));
    }
  }]);

  return FetchLayer;
}(layer_layer);

/* harmony default export */ var fetchlayer = (fetchlayer_FetchLayer);
// CONCATENATED MODULE: ./src/parameters.js
function parameters_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { parameters_typeof = function _typeof(obj) { return typeof obj; }; } else { parameters_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return parameters_typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = parameters_getPrototypeOf(object); if (object === null) break; } return object; }

function parameters_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) parameters_setPrototypeOf(subClass, superClass); }

function parameters_setPrototypeOf(o, p) { parameters_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return parameters_setPrototypeOf(o, p); }

function parameters_createSuper(Derived) { var hasNativeReflectConstruct = parameters_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = parameters_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = parameters_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return parameters_possibleConstructorReturn(this, result); }; }

function parameters_possibleConstructorReturn(self, call) { if (call && (parameters_typeof(call) === "object" || typeof call === "function")) { return call; } return parameters_assertThisInitialized(self); }

function parameters_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function parameters_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function parameters_getPrototypeOf(o) { parameters_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return parameters_getPrototypeOf(o); }

function parameters_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function parameters_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function parameters_createClass(Constructor, protoProps, staticProps) { if (protoProps) parameters_defineProperties(Constructor.prototype, protoProps); if (staticProps) parameters_defineProperties(Constructor, staticProps); return Constructor; }








/**
 * Transformation parameters
 * Depends on 'util', 'transformation'
 */

var parameters_Param = /*#__PURE__*/function () {
  /**
   * Represents a single parameter.
   * @class Param
   * @param {string} name - The name of the parameter in snake_case
   * @param {string} shortName - The name of the serialized form of the parameter.
   *                         If a value is not provided, the parameter will not be serialized.
   * @param {function} [process=Util.identity ] - Manipulate origValue when value is called
   * @ignore
   */
  function Param(name, shortName) {
    var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : identity_root_identity_default.a;

    parameters_classCallCheck(this, Param);

    /**
     * The name of the parameter in snake_case
     * @member {string} Param#name
     */
    this.name = name;
    /**
     * The name of the serialized form of the parameter
     * @member {string} Param#shortName
     */

    this.shortName = shortName;
    /**
     * Manipulate origValue when value is called
     * @member {function} Param#process
     */

    this.process = process;
  }
  /**
   * Set a (unprocessed) value for this parameter
   * @function Param#set
   * @param {*} origValue - the value of the parameter
   * @return {Param} self for chaining
   */


  parameters_createClass(Param, [{
    key: "set",
    value: function set(origValue) {
      this.origValue = origValue;
      return this;
    }
    /**
     * Generate the serialized form of the parameter
     * @function Param#serialize
     * @return {string} the serialized form of the parameter
     */

  }, {
    key: "serialize",
    value: function serialize() {
      var val, valid;
      val = this.value();
      valid = isArray_root_isArray_default()(val) || isPlainObject_root_isPlainObject_default()(val) || isString_root_isString_default()(val) ? !isEmpty(val) : val != null;

      if (this.shortName != null && valid) {
        return "".concat(this.shortName, "_").concat(val);
      } else {
        return '';
      }
    }
    /**
     * Return the processed value of the parameter
     * @function Param#value
     */

  }, {
    key: "value",
    value: function value() {
      return this.process(this.origValue);
    }
  }], [{
    key: "norm_color",
    value: function norm_color(value) {
      return value != null ? value.replace(/^#/, 'rgb:') : void 0;
    }
  }, {
    key: "build_array",
    value: function build_array(arg) {
      if (arg == null) {
        return [];
      } else if (isArray_root_isArray_default()(arg)) {
        return arg;
      } else {
        return [arg];
      }
    }
    /**
    * Covert value to video codec string.
    *
    * If the parameter is an object,
    * @param {(string|Object)} param - the video codec as either a String or a Hash
    * @return {string} the video codec string in the format codec:profile:level
    * @example
    * vc_[ :profile : [level]]
    * or
      { codec: 'h264', profile: 'basic', level: '3.1' }
    * @ignore
     */

  }, {
    key: "process_video_params",
    value: function process_video_params(param) {
      var video;

      switch (param.constructor) {
        case Object:
          video = "";

          if ('codec' in param) {
            video = param.codec;

            if ('profile' in param) {
              video += ":" + param.profile;

              if ('level' in param) {
                video += ":" + param.level;
              }
            }
          }

          return video;

        case String:
          return param;

        default:
          return null;
      }
    }
  }]);

  return Param;
}();

var parameters_ArrayParam = /*#__PURE__*/function (_Param) {
  parameters_inherits(ArrayParam, _Param);

  var _super = parameters_createSuper(ArrayParam);

  /**
   * A parameter that represents an array.
   * @param {string} name - The name of the parameter in snake_case.
   * @param {string} shortName - The name of the serialized form of the parameter
   *                         If a value is not provided, the parameter will not be serialized.
   * @param {string} [sep='.'] - The separator to use when joining the array elements together
   * @param {function} [process=Util.identity ] - Manipulate origValue when value is called
   * @class ArrayParam
   * @extends Param
   * @ignore
   */
  function ArrayParam(name, shortName) {
    var _this;

    var sep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
    var process = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

    parameters_classCallCheck(this, ArrayParam);

    _this = _super.call(this, name, shortName, process);
    _this.sep = sep;
    return _this;
  }

  parameters_createClass(ArrayParam, [{
    key: "serialize",
    value: function serialize() {
      if (this.shortName != null) {
        var arrayValue = this.value();

        if (isEmpty(arrayValue)) {
          return '';
        } else if (isString_root_isString_default()(arrayValue)) {
          return "".concat(this.shortName, "_").concat(arrayValue);
        } else {
          var flat = arrayValue.map(function (t) {
            return isFunction_root_isFunction_default()(t.serialize) ? t.serialize() : t;
          }).join(this.sep);
          return "".concat(this.shortName, "_").concat(flat);
        }
      } else {
        return '';
      }
    }
  }, {
    key: "value",
    value: function value() {
      var _this2 = this;

      if (isArray_root_isArray_default()(this.origValue)) {
        return this.origValue.map(function (v) {
          return _this2.process(v);
        });
      } else {
        return this.process(this.origValue);
      }
    }
  }, {
    key: "set",
    value: function set(origValue) {
      if (origValue == null || isArray_root_isArray_default()(origValue)) {
        return _get(parameters_getPrototypeOf(ArrayParam.prototype), "set", this).call(this, origValue);
      } else {
        return _get(parameters_getPrototypeOf(ArrayParam.prototype), "set", this).call(this, [origValue]);
      }
    }
  }]);

  return ArrayParam;
}(parameters_Param);

var parameters_TransformationParam = /*#__PURE__*/function (_Param2) {
  parameters_inherits(TransformationParam, _Param2);

  var _super2 = parameters_createSuper(TransformationParam);

  /**
   * A parameter that represents a transformation
   * @param {string} name - The name of the parameter in snake_case
   * @param {string} [shortName='t'] - The name of the serialized form of the parameter
   * @param {string} [sep='.'] - The separator to use when joining the array elements together
   * @param {function} [process=Util.identity ] - Manipulate origValue when value is called
   * @class TransformationParam
   * @extends Param
   * @ignore
   */
  function TransformationParam(name) {
    var _this3;

    var shortName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "t";
    var sep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
    var process = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

    parameters_classCallCheck(this, TransformationParam);

    _this3 = _super2.call(this, name, shortName, process);
    _this3.sep = sep;
    return _this3;
  }
  /**
   * Generate string representations of the transformation.
   * @returns {*} Returns either the transformation as a string, or an array of string representations.
   */


  parameters_createClass(TransformationParam, [{
    key: "serialize",
    value: function serialize() {
      var _this4 = this;

      var result = '';
      var val = this.value();

      if (isEmpty(val)) {
        return result;
      } // val is an array of strings so join them


      if (baseutil_allStrings(val)) {
        var joined = val.join(this.sep); // creates t1.t2.t3 in case multiple named transformations were configured

        if (!isEmpty(joined)) {
          // in case options.transformation was not set with an empty string (val != ['']);
          result = "".concat(this.shortName, "_").concat(joined);
        }
      } else {
        // Convert val to an array of strings
        result = val.map(function (t) {
          if (isString_root_isString_default()(t) && !isEmpty(t)) {
            return "".concat(_this4.shortName, "_").concat(t);
          }

          if (isFunction_root_isFunction_default()(t.serialize)) {
            return t.serialize();
          }

          if (isPlainObject_root_isPlainObject_default()(t) && !isEmpty(t)) {
            return new src_transformation(t).serialize();
          }

          return undefined;
        }).filter(function (t) {
          return t;
        });
      }

      return result;
    }
  }, {
    key: "set",
    value: function set(origValue1) {
      this.origValue = origValue1;

      if (isArray_root_isArray_default()(this.origValue)) {
        return _get(parameters_getPrototypeOf(TransformationParam.prototype), "set", this).call(this, this.origValue);
      } else {
        return _get(parameters_getPrototypeOf(TransformationParam.prototype), "set", this).call(this, [this.origValue]);
      }
    }
  }]);

  return TransformationParam;
}(parameters_Param);

var number_pattern = "([0-9]*)\\.([0-9]+)|([0-9]+)";
var offset_any_pattern = "(" + number_pattern + ")([%pP])?";

var RangeParam = /*#__PURE__*/function (_Param3) {
  parameters_inherits(RangeParam, _Param3);

  var _super3 = parameters_createSuper(RangeParam);

  /**
   * A parameter that represents a range
   * @param {string} name - The name of the parameter in snake_case
   * @param {string} shortName - The name of the serialized form of the parameter
   *                         If a value is not provided, the parameter will not be serialized.
   * @param {function} [process=norm_range_value ] - Manipulate origValue when value is called
   * @class RangeParam
   * @extends Param
   * @ignore
   */
  function RangeParam(name, shortName) {
    var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : RangeParam.norm_range_value;

    parameters_classCallCheck(this, RangeParam);

    return _super3.call(this, name, shortName, process);
  }

  parameters_createClass(RangeParam, null, [{
    key: "norm_range_value",
    value: function norm_range_value(value) {
      var offset = String(value).match(new RegExp('^' + offset_any_pattern + '$'));

      if (offset) {
        var modifier = offset[5] != null ? 'p' : '';
        value = (offset[1] || offset[4]) + modifier;
      }

      return value;
    }
  }]);

  return RangeParam;
}(parameters_Param);

var parameters_RawParam = /*#__PURE__*/function (_Param4) {
  parameters_inherits(RawParam, _Param4);

  var _super4 = parameters_createSuper(RawParam);

  function RawParam(name, shortName) {
    var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : identity_root_identity_default.a;

    parameters_classCallCheck(this, RawParam);

    return _super4.call(this, name, shortName, process);
  }

  parameters_createClass(RawParam, [{
    key: "serialize",
    value: function serialize() {
      return this.value();
    }
  }]);

  return RawParam;
}(parameters_Param);

var parameters_LayerParam = /*#__PURE__*/function (_Param5) {
  parameters_inherits(LayerParam, _Param5);

  var _super5 = parameters_createSuper(LayerParam);

  function LayerParam() {
    parameters_classCallCheck(this, LayerParam);

    return _super5.apply(this, arguments);
  }

  parameters_createClass(LayerParam, [{
    key: "value",
    // Parse layer options
    // @return [string] layer transformation string
    // @private
    value: function value() {
      if (this.origValue == null) {
        return '';
      }

      var result;

      if (this.origValue instanceof layer_layer) {
        result = this.origValue;
      } else if (isPlainObject_root_isPlainObject_default()(this.origValue)) {
        var layerOptions = withCamelCaseKeys(this.origValue);

        if (layerOptions.resourceType === "text" || layerOptions.text != null) {
          result = new textlayer(layerOptions);
        } else if (layerOptions.resourceType === "subtitles") {
          result = new subtitleslayer(layerOptions);
        } else if (layerOptions.resourceType === "fetch" || layerOptions.url != null) {
          result = new fetchlayer(layerOptions);
        } else {
          result = new layer_layer(layerOptions);
        }
      } else if (isString_root_isString_default()(this.origValue)) {
        if (/^fetch:.+/.test(this.origValue)) {
          result = new fetchlayer(this.origValue.substr(6));
        } else {
          result = this.origValue;
        }
      } else {
        result = '';
      }

      return result.toString();
    }
  }], [{
    key: "textStyle",
    value: function textStyle(layer) {
      return new textlayer(layer).textStyleIdentifier();
    }
  }]);

  return LayerParam;
}(parameters_Param);

var parameters_ExpressionParam = /*#__PURE__*/function (_Param6) {
  parameters_inherits(ExpressionParam, _Param6);

  var _super6 = parameters_createSuper(ExpressionParam);

  function ExpressionParam() {
    parameters_classCallCheck(this, ExpressionParam);

    return _super6.apply(this, arguments);
  }

  parameters_createClass(ExpressionParam, [{
    key: "serialize",
    value: function serialize() {
      return expression.normalize(_get(parameters_getPrototypeOf(ExpressionParam.prototype), "serialize", this).call(this));
    }
  }]);

  return ExpressionParam;
}(parameters_Param);


// CONCATENATED MODULE: ./src/transformation.js
function transformation_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { transformation_typeof = function _typeof(obj) { return typeof obj; }; } else { transformation_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return transformation_typeof(obj); }

function transformation_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) transformation_setPrototypeOf(subClass, superClass); }

function transformation_setPrototypeOf(o, p) { transformation_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return transformation_setPrototypeOf(o, p); }

function transformation_createSuper(Derived) { var hasNativeReflectConstruct = transformation_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = transformation_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = transformation_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return transformation_possibleConstructorReturn(this, result); }; }

function transformation_possibleConstructorReturn(self, call) { if (call && (transformation_typeof(call) === "object" || typeof call === "function")) { return call; } return transformation_assertThisInitialized(self); }

function transformation_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function transformation_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function transformation_getPrototypeOf(o) { transformation_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return transformation_getPrototypeOf(o); }

function transformation_slicedToArray(arr, i) { return transformation_arrayWithHoles(arr) || transformation_iterableToArrayLimit(arr, i) || transformation_unsupportedIterableToArray(arr, i) || transformation_nonIterableRest(); }

function transformation_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function transformation_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return transformation_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return transformation_arrayLikeToArray(o, minLen); }

function transformation_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function transformation_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function transformation_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function transformation_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function transformation_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function transformation_createClass(Constructor, protoProps, staticProps) { if (protoProps) transformation_defineProperties(Constructor.prototype, protoProps); if (staticProps) transformation_defineProperties(Constructor, staticProps); return Constructor; }







/**
 * Assign key, value to target, when value is not null.<br>
 *   This function mutates the target!
 * @param {object} target the object to assign the values to
 * @param {object} sources one or more objects to get values from
 * @returns {object} the target after the assignment
 */

function assignNotNull(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  sources.forEach(function (source) {
    Object.keys(source).forEach(function (key) {
      if (source[key] != null) {
        target[key] = source[key];
      }
    });
  });
  return target;
}
/**
 * TransformationBase
 * Depends on 'configuration', 'parameters','util'
 * @internal
 */


var transformation_TransformationBase = /*#__PURE__*/function () {
  /**
   * The base class for transformations.
   * Members of this class are documented as belonging to the {@link Transformation} class for convenience.
   * @class TransformationBase
   */
  function TransformationBase(options) {
    transformation_classCallCheck(this, TransformationBase);

    /** @private */

    /** @private */
    var parent, trans;
    parent = void 0;
    trans = {};
    /**
     * Return an options object that can be used to create an identical Transformation
     * @function Transformation#toOptions
     * @return {Object} Returns a plain object representing this transformation
     */

    this.toOptions = function (withChain) {
      var opt = {};

      if (withChain == null) {
        withChain = true;
      }

      Object.keys(trans).forEach(function (key) {
        return opt[key] = trans[key].origValue;
      });
      assignNotNull(opt, this.otherOptions);

      if (withChain && !isEmpty(this.chained)) {
        var list = this.chained.map(function (tr) {
          return tr.toOptions();
        });
        list.push(opt);
        opt = {};
        assignNotNull(opt, this.otherOptions);
        opt.transformation = list;
      }

      return opt;
    };
    /**
     * Set a parent for this object for chaining purposes.
     *
     * @function Transformation#setParent
     * @param {Object} object - the parent to be assigned to
     * @returns {Transformation} Returns this instance for chaining purposes.
     */


    this.setParent = function (object) {
      parent = object;

      if (object != null) {
        this.fromOptions(typeof object.toOptions === "function" ? object.toOptions() : void 0);
      }

      return this;
    };
    /**
     * Returns the parent of this object in the chain
     * @function Transformation#getParent
     * @protected
     * @return {Object} Returns the parent of this object if there is any
     */


    this.getParent = function () {
      return parent;
    }; // Helper methods to create parameter methods
    // These methods are defined here because they access `trans` which is
    // a private member of `TransformationBase`

    /** @protected */


    this.param = function (value, name, abbr, defaultValue, process) {
      if (process == null) {
        if (isFunction_root_isFunction_default()(defaultValue)) {
          process = defaultValue;
        } else {
          process = identity_root_identity_default.a;
        }
      }

      trans[name] = new parameters_Param(name, abbr, process).set(value);
      return this;
    };
    /** @protected */


    this.rawParam = function (value, name, abbr, defaultValue, process) {
      process = lastArgCallback(arguments);
      trans[name] = new parameters_RawParam(name, abbr, process).set(value);
      return this;
    };
    /** @protected */


    this.rangeParam = function (value, name, abbr, defaultValue, process) {
      process = lastArgCallback(arguments);
      trans[name] = new RangeParam(name, abbr, process).set(value);
      return this;
    };
    /** @protected */


    this.arrayParam = function (value, name, abbr) {
      var sep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ":";
      var defaultValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
      var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;
      process = lastArgCallback(arguments);
      trans[name] = new parameters_ArrayParam(name, abbr, sep, process).set(value);
      return this;
    };
    /** @protected */


    this.transformationParam = function (value, name, abbr) {
      var sep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ".";
      var defaultValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
      var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;
      process = lastArgCallback(arguments);
      trans[name] = new parameters_TransformationParam(name, abbr, sep, process).set(value);
      return this;
    };

    this.layerParam = function (value, name, abbr) {
      trans[name] = new parameters_LayerParam(name, abbr).set(value);
      return this;
    }; // End Helper methods

    /**
     * Get the value associated with the given name.
     * @function Transformation#getValue
     * @param {string} name - the name of the parameter
     * @return {*} the processed value associated with the given name
     * @description Use {@link get}.origValue for the value originally provided for the parameter
     */


    this.getValue = function (name) {
      var value = trans[name] && trans[name].value();
      return value != null ? value : this.otherOptions[name];
    };
    /**
     * Get the parameter object for the given parameter name
     * @function Transformation#get
     * @param {string} name the name of the transformation parameter
     * @returns {Param} the param object for the given name, or undefined
     */


    this.get = function (name) {
      return trans[name];
    };
    /**
     * Remove a transformation option from the transformation.
     * @function Transformation#remove
     * @param {string} name - the name of the option to remove
     * @return {*} Returns the option that was removed or null if no option by that name was found. The type of the
     *              returned value depends on the value.
     */


    this.remove = function (name) {
      var temp;

      switch (false) {
        case trans[name] == null:
          temp = trans[name];
          delete trans[name];
          return temp.origValue;

        case this.otherOptions[name] == null:
          temp = this.otherOptions[name];
          delete this.otherOptions[name];
          return temp;

        default:
          return null;
      }
    };
    /**
     * Return an array of all the keys (option names) in the transformation.
     * @return {Array<string>} the keys in snakeCase format
     */


    this.keys = function () {
      var key;
      return function () {
        var results;
        results = [];

        for (key in trans) {
          if (key != null) {
            results.push(key.match(VAR_NAME_RE) ? key : snakeCase(key));
          }
        }

        return results;
      }().sort();
    };
    /**
     * Returns a plain object representation of the transformation. Values are processed.
     * @function Transformation#toPlainObject
     * @return {Object} the transformation options as plain object
     */


    this.toPlainObject = function () {
      var hash, key, list;
      hash = {};

      for (key in trans) {
        hash[key] = trans[key].value();

        if (isPlainObject_root_isPlainObject_default()(hash[key])) {
          hash[key] = cloneDeep_root_cloneDeep_default()(hash[key]);
        }
      }

      if (!isEmpty(this.chained)) {
        list = this.chained.map(function (tr) {
          return tr.toPlainObject();
        });
        list.push(hash);
        hash = {
          transformation: list
        };
      }

      return hash;
    };
    /**
     * Complete the current transformation and chain to a new one.
     * In the URL, transformations are chained together by slashes.
     * @function Transformation#chain
     * @return {Transformation} Returns this transformation for chaining
     * @example
     * var tr = cloudinary.Transformation.new();
     * tr.width(10).crop('fit').chain().angle(15).serialize()
     * // produces "c_fit,w_10/a_15"
     */


    this.chain = function () {
      var names, tr;
      names = Object.getOwnPropertyNames(trans);

      if (names.length !== 0) {
        tr = new this.constructor(this.toOptions(false));
        this.resetTransformations();
        this.chained.push(tr);
      }

      return this;
    };

    this.resetTransformations = function () {
      trans = {};
      return this;
    };

    this.otherOptions = {};
    this.chained = [];
    this.fromOptions(options);
  }
  /**
   * Merge the provided options with own's options
   * @param {Object} [options={}] key-value list of options
   * @returns {Transformation} Returns this instance for chaining
   */


  transformation_createClass(TransformationBase, [{
    key: "fromOptions",
    value: function fromOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options instanceof TransformationBase) {
        this.fromTransformation(options);
      } else {
        if (isString_root_isString_default()(options) || isArray_root_isArray_default()(options)) {
          options = {
            transformation: options
          };
        }

        options = cloneDeep_root_cloneDeep_default()(options, function (value) {
          if (value instanceof TransformationBase || value instanceof Layer) {
            return new value.clone();
          }
        }); // Handling of "if" statements precedes other options as it creates a chained transformation

        if (options["if"]) {
          this.set("if", options["if"]);
          delete options["if"];
        }

        for (var key in options) {
          var opt = options[key];

          if (opt != null) {
            if (key.match(VAR_NAME_RE)) {
              if (key !== '$attr') {
                this.set('variable', key, opt);
              }
            } else {
              this.set(key, opt);
            }
          }
        }
      }

      return this;
    }
  }, {
    key: "fromTransformation",
    value: function fromTransformation(other) {
      var _this = this;

      if (other instanceof TransformationBase) {
        other.keys().forEach(function (key) {
          return _this.set(key, other.get(key).origValue);
        });
      }

      return this;
    }
    /**
     * Set a parameter.
     * The parameter name `key` is converted to
     * @param {string} key - the name of the parameter
     * @param {*} values - the value of the parameter
     * @returns {Transformation} Returns this instance for chaining
     */

  }, {
    key: "set",
    value: function set(key) {
      var camelKey;
      camelKey = camelCase(key);

      for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        values[_key2 - 1] = arguments[_key2];
      }

      if (includes_root_includes_default()(transformation_Transformation.methods, camelKey)) {
        this[camelKey].apply(this, values);
      } else {
        this.otherOptions[key] = values[0];
      }

      return this;
    }
  }, {
    key: "hasLayer",
    value: function hasLayer() {
      return this.getValue("overlay") || this.getValue("underlay");
    }
    /**
     * Generate a string representation of the transformation.
     * @function Transformation#serialize
     * @return {string} Returns the transformation as a string
     */

  }, {
    key: "serialize",
    value: function serialize() {
      var ifParam, j, len, paramList, ref, ref1, ref2, ref3, ref4, resultArray, t, transformationList, transformationString, transformations, value, variables, vars;
      resultArray = this.chained.map(function (tr) {
        return tr.serialize();
      });
      paramList = this.keys();
      transformations = (ref = this.get("transformation")) != null ? ref.serialize() : void 0;
      ifParam = (ref1 = this.get("if")) != null ? ref1.serialize() : void 0;
      variables = processVar((ref2 = this.get("variables")) != null ? ref2.value() : void 0);
      paramList = difference_root_difference_default()(paramList, ["transformation", "if", "variables"]);
      vars = [];
      transformationList = [];

      for (j = 0, len = paramList.length; j < len; j++) {
        t = paramList[j];

        if (t.match(VAR_NAME_RE)) {
          vars.push(t + "_" + expression.normalize((ref3 = this.get(t)) != null ? ref3.value() : void 0));
        } else {
          transformationList.push((ref4 = this.get(t)) != null ? ref4.serialize() : void 0);
        }
      }

      switch (false) {
        case !isString_root_isString_default()(transformations):
          transformationList.push(transformations);
          break;

        case !isArray_root_isArray_default()(transformations):
          resultArray = resultArray.concat(transformations);
      }

      transformationList = function () {
        var k, len1, results;
        results = [];

        for (k = 0, len1 = transformationList.length; k < len1; k++) {
          value = transformationList[k];

          if (isArray_root_isArray_default()(value) && !isEmpty(value) || !isArray_root_isArray_default()(value) && value) {
            results.push(value);
          }
        }

        return results;
      }();

      transformationList = vars.sort().concat(variables).concat(transformationList.sort());

      if (ifParam === "if_end") {
        transformationList.push(ifParam);
      } else if (!isEmpty(ifParam)) {
        transformationList.unshift(ifParam);
      }

      transformationString = compact_root_compact_default()(transformationList).join(this.param_separator);

      if (!isEmpty(transformationString)) {
        resultArray.push(transformationString);
      }

      return compact_root_compact_default()(resultArray).join(this.trans_separator);
    }
    /**
     * Provide a list of all the valid transformation option names
     * @function Transformation#listNames
     * @private
     * @return {Array<string>} a array of all the valid option names
     */

  }, {
    key: "toHtmlAttributes",

    /**
     * Returns the attributes for an HTML tag.
     * @function Cloudinary.toHtmlAttributes
     * @return PlainObject
     */
    value: function toHtmlAttributes() {
      var _this2 = this;

      var attrName, height, options, ref2, ref3, value, width;
      options = {};
      var snakeCaseKey;
      Object.keys(this.otherOptions).forEach(function (key) {
        value = _this2.otherOptions[key];
        snakeCaseKey = snakeCase(key);

        if (!includes_root_includes_default()(transformation_Transformation.PARAM_NAMES, snakeCaseKey) && !includes_root_includes_default()(URL_KEYS, snakeCaseKey)) {
          attrName = /^html_/.test(key) ? key.slice(5) : key;
          options[attrName] = value;
        }
      }); // convert all "html_key" to "key" with the same value

      this.keys().forEach(function (key) {
        if (/^html_/.test(key)) {
          options[camelCase(key.slice(5))] = _this2.getValue(key);
        }
      });

      if (!(this.hasLayer() || this.getValue("angle") || includes_root_includes_default()(["fit", "limit", "lfill"], this.getValue("crop")))) {
        width = (ref2 = this.get("width")) != null ? ref2.origValue : void 0;
        height = (ref3 = this.get("height")) != null ? ref3.origValue : void 0;

        if (parseFloat(width) >= 1.0) {
          if (options.width == null) {
            options.width = width;
          }
        }

        if (parseFloat(height) >= 1.0) {
          if (options.height == null) {
            options.height = height;
          }
        }
      }

      return options;
    }
  }, {
    key: "toHtml",

    /**
     * Delegate to the parent (up the call chain) to produce HTML
     * @function Transformation#toHtml
     * @return {string} HTML representation of the parent if possible.
     * @example
     * tag = cloudinary.ImageTag.new("sample", {cloud_name: "demo"})
     * // ImageTag {name: "img", publicId: "sample"}
     * tag.toHtml()
     * // <img src="http://res.cloudinary.com/demo/image/upload/sample">
     * tag.transformation().crop("fit").width(300).toHtml()
     * // <img src="http://res.cloudinary.com/demo/image/upload/c_fit,w_300/sample">
     */
    value: function toHtml() {
      var ref;
      return (ref = this.getParent()) != null ? typeof ref.toHtml === "function" ? ref.toHtml() : void 0 : void 0;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.serialize();
    }
  }, {
    key: "clone",
    value: function clone() {
      return new this.constructor(this.toOptions(true));
    }
  }], [{
    key: "listNames",
    value: function listNames() {
      return transformation_Transformation.methods;
    }
  }, {
    key: "isValidParamName",
    value: function isValidParamName(name) {
      return transformation_Transformation.methods.indexOf(camelCase(name)) >= 0;
    }
  }]);

  return TransformationBase;
}();

var VAR_NAME_RE = /^\$[a-zA-Z0-9]+$/;
transformation_TransformationBase.prototype.trans_separator = '/';
transformation_TransformationBase.prototype.param_separator = ',';

function lastArgCallback(args) {
  var callback;
  callback = args != null ? args[args.length - 1] : void 0;

  if (isFunction_root_isFunction_default()(callback)) {
    return callback;
  } else {
    return void 0;
  }
}

function processVar(varArray) {
  var j, len, name, results, v;

  if (isArray_root_isArray_default()(varArray)) {
    results = [];

    for (j = 0, len = varArray.length; j < len; j++) {
      var _varArray$j = transformation_slicedToArray(varArray[j], 2);

      name = _varArray$j[0];
      v = _varArray$j[1];
      results.push("".concat(name, "_").concat(expression.normalize(v)));
    }

    return results;
  } else {
    return varArray;
  }
}

function processCustomFunction(_ref) {
  var function_type = _ref.function_type,
      source = _ref.source;

  if (function_type === 'remote') {
    return [function_type, btoa(source)].join(":");
  } else if (function_type === 'wasm') {
    return [function_type, source].join(":");
  }
}
/**
 * Transformation Class methods.
 * This is a list of the parameters defined in Transformation.
 * Values are camelCased.
 * @const Transformation.methods
 * @private
 * @ignore
 * @type {Array<string>}
 */

/**
 * Parameters that are filtered out before passing the options to an HTML tag.
 *
 * The list of parameters is a combination of `Transformation::methods` and `Configuration::CONFIG_PARAMS`
 * @const {Array<string>} Transformation.PARAM_NAMES
 * @private
 * @ignore
 * @see toHtmlAttributes
 */


var transformation_Transformation = /*#__PURE__*/function (_TransformationBase) {
  transformation_inherits(Transformation, _TransformationBase);

  var _super = transformation_createSuper(Transformation);

  /**
   * Represents a single transformation.
   * @class Transformation
   * @example
   * t = new cloudinary.Transformation();
   * t.angle(20).crop("scale").width("auto");
   *
   * // or
   *
   * t = new cloudinary.Transformation( {angle: 20, crop: "scale", width: "auto"});
   * @see <a href="https://cloudinary.com/documentation/image_transformation_reference"
   *  target="_blank">Available image transformations</a>
   * @see <a href="https://cloudinary.com/documentation/video_transformation_reference"
   *  target="_blank">Available video transformations</a>
   */
  function Transformation(options) {
    transformation_classCallCheck(this, Transformation);

    return _super.call(this, options);
  }
  /**
   * Convenience constructor
   * @param {Object} options
   * @return {Transformation}
   * @example cl = cloudinary.Transformation.new( {angle: 20, crop: "scale", width: "auto"})
   */


  transformation_createClass(Transformation, [{
    key: "angle",

    /*
      Transformation Parameters
    */
    value: function angle(value) {
      return this.arrayParam(value, "angle", "a", ".", expression.normalize);
    }
  }, {
    key: "audioCodec",
    value: function audioCodec(value) {
      return this.param(value, "audio_codec", "ac");
    }
  }, {
    key: "audioFrequency",
    value: function audioFrequency(value) {
      return this.param(value, "audio_frequency", "af");
    }
  }, {
    key: "aspectRatio",
    value: function aspectRatio(value) {
      return this.param(value, "aspect_ratio", "ar", expression.normalize);
    }
  }, {
    key: "background",
    value: function background(value) {
      return this.param(value, "background", "b", parameters_Param.norm_color);
    }
  }, {
    key: "bitRate",
    value: function bitRate(value) {
      return this.param(value, "bit_rate", "br");
    }
  }, {
    key: "border",
    value: function border(value) {
      return this.param(value, "border", "bo", function (border) {
        if (isPlainObject_root_isPlainObject_default()(border)) {
          border = assign_root_assign_default()({}, {
            color: "black",
            width: 2
          }, border);
          return "".concat(border.width, "px_solid_").concat(parameters_Param.norm_color(border.color));
        } else {
          return border;
        }
      });
    }
  }, {
    key: "color",
    value: function color(value) {
      return this.param(value, "color", "co", parameters_Param.norm_color);
    }
  }, {
    key: "colorSpace",
    value: function colorSpace(value) {
      return this.param(value, "color_space", "cs");
    }
  }, {
    key: "crop",
    value: function crop(value) {
      return this.param(value, "crop", "c");
    }
  }, {
    key: "customFunction",
    value: function customFunction(value) {
      return this.param(value, "custom_function", "fn", function () {
        return processCustomFunction(value);
      });
    }
  }, {
    key: "customPreFunction",
    value: function customPreFunction(value) {
      if (this.get('custom_function')) {
        return;
      }

      return this.rawParam(value, "custom_function", "", function () {
        value = processCustomFunction(value);
        return value ? "fn_pre:".concat(value) : value;
      });
    }
  }, {
    key: "defaultImage",
    value: function defaultImage(value) {
      return this.param(value, "default_image", "d");
    }
  }, {
    key: "delay",
    value: function delay(value) {
      return this.param(value, "delay", "dl");
    }
  }, {
    key: "density",
    value: function density(value) {
      return this.param(value, "density", "dn");
    }
  }, {
    key: "duration",
    value: function duration(value) {
      return this.rangeParam(value, "duration", "du");
    }
  }, {
    key: "dpr",
    value: function dpr(value) {
      return this.param(value, "dpr", "dpr", function (dpr) {
        dpr = dpr.toString();

        if (dpr != null ? dpr.match(/^\d+$/) : void 0) {
          return dpr + ".0";
        } else {
          return expression.normalize(dpr);
        }
      });
    }
  }, {
    key: "effect",
    value: function effect(value) {
      return this.arrayParam(value, "effect", "e", ":", expression.normalize);
    }
  }, {
    key: "else",
    value: function _else() {
      return this["if"]('else');
    }
  }, {
    key: "endIf",
    value: function endIf() {
      return this["if"]('end');
    }
  }, {
    key: "endOffset",
    value: function endOffset(value) {
      return this.rangeParam(value, "end_offset", "eo");
    }
  }, {
    key: "fallbackContent",
    value: function fallbackContent(value) {
      return this.param(value, "fallback_content");
    }
  }, {
    key: "fetchFormat",
    value: function fetchFormat(value) {
      return this.param(value, "fetch_format", "f");
    }
  }, {
    key: "format",
    value: function format(value) {
      return this.param(value, "format");
    }
  }, {
    key: "flags",
    value: function flags(value) {
      return this.arrayParam(value, "flags", "fl", ".");
    }
  }, {
    key: "gravity",
    value: function gravity(value) {
      return this.param(value, "gravity", "g");
    }
  }, {
    key: "fps",
    value: function fps(value) {
      return this.param(value, "fps", "fps", function (fps) {
        if (isString_root_isString_default()(fps)) {
          return fps;
        } else if (isArray_root_isArray_default()(fps)) {
          return fps.join("-");
        } else {
          return fps;
        }
      });
    }
  }, {
    key: "height",
    value: function height(value) {
      var _this3 = this;

      return this.param(value, "height", "h", function () {
        if (_this3.getValue("crop") || _this3.getValue("overlay") || _this3.getValue("underlay")) {
          return expression.normalize(value);
        } else {
          return null;
        }
      });
    }
  }, {
    key: "htmlHeight",
    value: function htmlHeight(value) {
      return this.param(value, "html_height");
    }
  }, {
    key: "htmlWidth",
    value: function htmlWidth(value) {
      return this.param(value, "html_width");
    }
  }, {
    key: "if",
    value: function _if() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var i, ifVal, j, ref, trIf, trRest;

      switch (value) {
        case "else":
          this.chain();
          return this.param(value, "if", "if");

        case "end":
          this.chain();

          for (i = j = ref = this.chained.length - 1; j >= 0; i = j += -1) {
            ifVal = this.chained[i].getValue("if");

            if (ifVal === "end") {
              break;
            } else if (ifVal != null) {
              trIf = Transformation["new"]()["if"](ifVal);
              this.chained[i].remove("if");
              trRest = this.chained[i];
              this.chained[i] = Transformation["new"]().transformation([trIf, trRest]);

              if (ifVal !== "else") {
                break;
              }
            }
          }

          return this.param(value, "if", "if");

        case "":
          return condition["new"]().setParent(this);

        default:
          return this.param(value, "if", "if", function (value) {
            return condition["new"](value).toString();
          });
      }
    }
  }, {
    key: "keyframeInterval",
    value: function keyframeInterval(value) {
      return this.param(value, "keyframe_interval", "ki");
    }
  }, {
    key: "ocr",
    value: function ocr(value) {
      return this.param(value, "ocr", "ocr");
    }
  }, {
    key: "offset",
    value: function offset(value) {
      var end_o, start_o;

      var _ref2 = isFunction_root_isFunction_default()(value != null ? value.split : void 0) ? value.split('..') : isArray_root_isArray_default()(value) ? value : [null, null];

      var _ref3 = transformation_slicedToArray(_ref2, 2);

      start_o = _ref3[0];
      end_o = _ref3[1];

      if (start_o != null) {
        this.startOffset(start_o);
      }

      if (end_o != null) {
        return this.endOffset(end_o);
      }
    }
  }, {
    key: "opacity",
    value: function opacity(value) {
      return this.param(value, "opacity", "o", expression.normalize);
    }
  }, {
    key: "overlay",
    value: function overlay(value) {
      return this.layerParam(value, "overlay", "l");
    }
  }, {
    key: "page",
    value: function page(value) {
      return this.param(value, "page", "pg");
    }
  }, {
    key: "poster",
    value: function poster(value) {
      return this.param(value, "poster");
    }
  }, {
    key: "prefix",
    value: function prefix(value) {
      return this.param(value, "prefix", "p");
    }
  }, {
    key: "quality",
    value: function quality(value) {
      return this.param(value, "quality", "q", expression.normalize);
    }
  }, {
    key: "radius",
    value: function radius(value) {
      return this.arrayParam(value, "radius", "r", ":", expression.normalize);
    }
  }, {
    key: "rawTransformation",
    value: function rawTransformation(value) {
      return this.rawParam(value, "raw_transformation");
    }
  }, {
    key: "size",
    value: function size(value) {
      var height, width;

      if (isFunction_root_isFunction_default()(value != null ? value.split : void 0)) {
        var _value$split = value.split('x');

        var _value$split2 = transformation_slicedToArray(_value$split, 2);

        width = _value$split2[0];
        height = _value$split2[1];
        this.width(width);
        return this.height(height);
      }
    }
  }, {
    key: "sourceTypes",
    value: function sourceTypes(value) {
      return this.param(value, "source_types");
    }
  }, {
    key: "sourceTransformation",
    value: function sourceTransformation(value) {
      return this.param(value, "source_transformation");
    }
  }, {
    key: "startOffset",
    value: function startOffset(value) {
      return this.rangeParam(value, "start_offset", "so");
    }
  }, {
    key: "streamingProfile",
    value: function streamingProfile(value) {
      return this.param(value, "streaming_profile", "sp");
    }
  }, {
    key: "transformation",
    value: function transformation(value) {
      return this.transformationParam(value, "transformation", "t");
    }
  }, {
    key: "underlay",
    value: function underlay(value) {
      return this.layerParam(value, "underlay", "u");
    }
  }, {
    key: "variable",
    value: function variable(name, value) {
      return this.param(value, name, name);
    }
  }, {
    key: "variables",
    value: function variables(values) {
      return this.arrayParam(values, "variables");
    }
  }, {
    key: "videoCodec",
    value: function videoCodec(value) {
      return this.param(value, "video_codec", "vc", parameters_Param.process_video_params);
    }
  }, {
    key: "videoSampling",
    value: function videoSampling(value) {
      return this.param(value, "video_sampling", "vs");
    }
  }, {
    key: "width",
    value: function width(value) {
      var _this4 = this;

      return this.param(value, "width", "w", function () {
        if (_this4.getValue("crop") || _this4.getValue("overlay") || _this4.getValue("underlay")) {
          return expression.normalize(value);
        } else {
          return null;
        }
      });
    }
  }, {
    key: "x",
    value: function x(value) {
      return this.param(value, "x", "x", expression.normalize);
    }
  }, {
    key: "y",
    value: function y(value) {
      return this.param(value, "y", "y", expression.normalize);
    }
  }, {
    key: "zoom",
    value: function zoom(value) {
      return this.param(value, "zoom", "z", expression.normalize);
    }
  }], [{
    key: "new",
    value: function _new(options) {
      return new Transformation(options);
    }
  }]);

  return Transformation;
}(transformation_TransformationBase);
/**
 * Transformation Class methods.
 * This is a list of the parameters defined in Transformation.
 * Values are camelCased.
 */


transformation_Transformation.methods = ["angle", "audioCodec", "audioFrequency", "aspectRatio", "background", "bitRate", "border", "color", "colorSpace", "crop", "customFunction", "customPreFunction", "defaultImage", "delay", "density", "duration", "dpr", "effect", "else", "endIf", "endOffset", "fallbackContent", "fetchFormat", "format", "flags", "gravity", "fps", "height", "htmlHeight", "htmlWidth", "if", "keyframeInterval", "ocr", "offset", "opacity", "overlay", "page", "poster", "prefix", "quality", "radius", "rawTransformation", "size", "sourceTypes", "sourceTransformation", "startOffset", "streamingProfile", "transformation", "underlay", "variable", "variables", "videoCodec", "videoSampling", "width", "x", "y", "zoom"];
/**
 * Parameters that are filtered out before passing the options to an HTML tag.
 *
 * The list of parameters is a combination of `Transformation::methods` and `Configuration::CONFIG_PARAMS`
 */

transformation_Transformation.PARAM_NAMES = transformation_Transformation.methods.map(snakeCase).concat(src_configuration.CONFIG_PARAMS);
/* harmony default export */ var src_transformation = (transformation_Transformation);
// CONCATENATED MODULE: ./src/tags/htmltag.js
function htmltag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function htmltag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function htmltag_createClass(Constructor, protoProps, staticProps) { if (protoProps) htmltag_defineProperties(Constructor.prototype, protoProps); if (staticProps) htmltag_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Generic HTML tag
 * Depends on 'transformation', 'util'
 */


/**
 * Represents an HTML (DOM) tag
 * @constructor HtmlTag
 * @param {string} name - the name of the tag
 * @param {string} [publicId]
 * @param {Object} options
 * @example tag = new HtmlTag( 'div', { 'width': 10})
 */

var htmltag_HtmlTag = /*#__PURE__*/function () {
  function HtmlTag(name, publicId, options) {
    htmltag_classCallCheck(this, HtmlTag);

    var transformation;
    this.name = name;
    this.publicId = publicId;

    if (options == null) {
      if (isPlainObject_root_isPlainObject_default()(publicId)) {
        options = publicId;
        this.publicId = void 0;
      } else {
        options = {};
      }
    }

    transformation = new src_transformation(options);
    transformation.setParent(this);

    this.transformation = function () {
      return transformation;
    };
  }
  /**
   * Convenience constructor
   * Creates a new instance of an HTML (DOM) tag
   * @function HtmlTag.new
   * @param {string} name - the name of the tag
   * @param {string} [publicId]
   * @param {Object} options
   * @return {HtmlTag}
   * @example tag = HtmlTag.new( 'div', { 'width': 10})
   */


  htmltag_createClass(HtmlTag, [{
    key: "htmlAttrs",

    /**
     * combine key and value from the `attr` to generate an HTML tag attributes string.
     * `Transformation::toHtmlTagOptions` is used to filter out transformation and configuration keys.
     * @protected
     * @param {Object} attrs
     * @return {string} the attributes in the format `'key1="value1" key2="value2"'`
     * @ignore
     */
    value: function htmlAttrs(attrs) {
      var key, pairs, value;
      return pairs = function () {
        var results;
        results = [];

        for (key in attrs) {
          value = escapeQuotes(attrs[key]);

          if (value) {
            results.push(htmltag_toAttribute(key, value));
          }
        }

        return results;
      }().sort().join(' ');
    }
    /**
     * Get all options related to this tag.
     * @function HtmlTag#getOptions
     * @returns {Object} the options
     *
     */

  }, {
    key: "getOptions",
    value: function getOptions() {
      return this.transformation().toOptions();
    }
    /**
     * Get the value of option `name`
     * @function HtmlTag#getOption
     * @param {string} name - the name of the option
     * @returns {*} Returns the value of the option
     *
     */

  }, {
    key: "getOption",
    value: function getOption(name) {
      return this.transformation().getValue(name);
    }
    /**
     * Get the attributes of the tag.
     * @function HtmlTag#attributes
     * @returns {Object} attributes
     */

  }, {
    key: "attributes",
    value: function attributes() {
      // The attributes are be computed from the options every time this method is invoked.
      var htmlAttributes = this.transformation().toHtmlAttributes();
      Object.keys(htmlAttributes).forEach(function (key) {
        if (isPlainObject_root_isPlainObject_default()(htmlAttributes[key])) {
          delete htmlAttributes[key];
        }
      });

      if (htmlAttributes.attributes) {
        // Currently HTML attributes are defined both at the top level and under 'attributes'
        merge_root_merge_default()(htmlAttributes, htmlAttributes.attributes);
        delete htmlAttributes.attributes;
      }

      return htmlAttributes;
    }
    /**
     * Set a tag attribute named `name` to `value`
     * @function HtmlTag#setAttr
     * @param {string} name - the name of the attribute
     * @param {string} value - the value of the attribute
     */

  }, {
    key: "setAttr",
    value: function setAttr(name, value) {
      this.transformation().set("html_".concat(name), value);
      return this;
    }
    /**
     * Get the value of the tag attribute `name`
     * @function HtmlTag#getAttr
     * @param {string} name - the name of the attribute
     * @returns {*}
     */

  }, {
    key: "getAttr",
    value: function getAttr(name) {
      return this.attributes()["html_".concat(name)] || this.attributes()[name];
    }
    /**
     * Remove the tag attributed named `name`
     * @function HtmlTag#removeAttr
     * @param {string} name - the name of the attribute
     * @returns {*}
     */

  }, {
    key: "removeAttr",
    value: function removeAttr(name) {
      var ref;
      return (ref = this.transformation().remove("html_".concat(name))) != null ? ref : this.transformation().remove(name);
    }
    /**
     * @function HtmlTag#content
     * @protected
     * @ignore
     */

  }, {
    key: "content",
    value: function content() {
      return "";
    }
    /**
     * @function HtmlTag#openTag
     * @protected
     * @ignore
     */

  }, {
    key: "openTag",
    value: function openTag() {
      var tag = "<" + this.name;
      var htmlAttrs = this.htmlAttrs(this.attributes());

      if (htmlAttrs && htmlAttrs.length > 0) {
        tag += " " + htmlAttrs;
      }

      return tag + ">";
    }
    /**
     * @function HtmlTag#closeTag
     * @protected
     * @ignore
     */

  }, {
    key: "closeTag",
    value: function closeTag() {
      return "</".concat(this.name, ">");
    }
    /**
     * Generates an HTML representation of the tag.
     * @function HtmlTag#toHtml
     * @returns {string} Returns HTML in string format
     */

  }, {
    key: "toHtml",
    value: function toHtml() {
      return this.openTag() + this.content() + this.closeTag();
    }
    /**
     * Creates a DOM object representing the tag.
     * @function HtmlTag#toDOM
     * @returns {Element}
     */

  }, {
    key: "toDOM",
    value: function toDOM() {
      var element, name, ref, value;

      if (!isFunction_root_isFunction_default()(typeof document !== "undefined" && document !== null ? document.createElement : void 0)) {
        throw "Can't create DOM if document is not present!";
      }

      element = document.createElement(this.name);
      ref = this.attributes();

      for (name in ref) {
        value = ref[name];
        element.setAttribute(name, value);
      }

      return element;
    }
  }], [{
    key: "new",
    value: function _new(name, publicId, options) {
      return new this(name, publicId, options);
    }
  }, {
    key: "isResponsive",
    value: function isResponsive(tag, responsiveClass) {
      var dataSrc;
      dataSrc = lodash_getData(tag, 'src-cache') || lodash_getData(tag, 'src');
      return lodash_hasClass(tag, responsiveClass) && /\bw_auto\b/.exec(dataSrc);
    }
  }]);

  return HtmlTag;
}();

;
/**
 * Represent the given key and value as an HTML attribute.
 * @function toAttribute
 * @protected
 * @param {string} key - attribute name
 * @param {*|boolean} value - the value of the attribute. If the value is boolean `true`, return the key only.
 * @returns {string} the attribute
 *
 */

function htmltag_toAttribute(key, value) {
  if (!value) {
    return void 0;
  } else if (value === true) {
    return key;
  } else {
    return "".concat(key, "=\"").concat(value, "\"");
  }
}
/**
 * If given value is a string, replaces quotes with character entities (&#34;, &#39;)
 * @param value - value to change
 * @returns {*} changed value
 */


function escapeQuotes(value) {
  return isString_root_isString_default()(value) ? value.replace('"', '&#34;').replace("'", '&#39;') : value;
}

/* harmony default export */ var htmltag = (htmltag_HtmlTag);
// CONCATENATED MODULE: ./src/url.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







/**
 * Adds protocol, host, pathname prefixes to given string
 * @param str
 * @returns {string}
 */

function makeUrl(str) {
  var prefix = document.location.protocol + '//' + document.location.host;

  if (str[0] === '?') {
    prefix += document.location.pathname;
  } else if (str[0] !== '/') {
    prefix += document.location.pathname.replace(/\/[^\/]*$/, '/');
  }

  return prefix + str;
}
/**
 * Check is given string is a url
 * @param str
 * @returns {boolean}
 */


function isUrl(str) {
  return str ? !!str.match(/^https?:\//) : false;
} // Produce a number between 1 and 5 to be used for cdn sub domains designation


function cdnSubdomainNumber(publicId) {
  return src_crc32(publicId) % 5 + 1;
}
/**
 * Removes signature from options and returns the signature
 * Makes sure signature is empty or of this format: s--signature--
 * @param {object} options
 * @returns {string} the formatted signature
 */


function handleSignature(options) {
  var signature = options.signature;
  var isFormatted = !signature || signature.indexOf('s--') === 0 && signature.substr(-2) === '--';
  delete options.signature;
  return isFormatted ? signature : "s--".concat(signature, "--");
}
/**
 * Create the URL prefix for Cloudinary resources.
 * @param {string} publicId the resource public ID
 * @param {object} options additional options
 * @param {string} options.cloud_name - the cloud name.
 * @param {boolean} [options.cdn_subdomain=false] - Whether to automatically build URLs with
 *  multiple CDN sub-domains.
 * @param {string} [options.private_cdn] - Boolean (default: false). Should be set to true for Advanced plan's users
 *  that have a private CDN distribution.
 * @param {string} [options.protocol="http://"] - the URI protocol to use. If options.secure is true,
 *  the value is overridden to "https://"
 * @param {string} [options.secure_distribution] - The domain name of the CDN distribution to use for building HTTPS URLs.
 *  Relevant only for Advanced plan's users that have a private CDN distribution.
 * @param {string} [options.cname] - Custom domain name to use for building HTTP URLs.
 *  Relevant only for Advanced plan's users that have a private CDN distribution and a custom CNAME.
 * @param {boolean} [options.secure_cdn_subdomain=true] - When options.secure is true and this parameter is false,
 *  the subdomain is set to "res".
 * @param {boolean} [options.secure=false] - Force HTTPS URLs of images even if embedded in non-secure HTTP pages.
 *  When this value is true, options.secure_distribution will be used as host if provided, and options.protocol is set
 *  to "https://".
 * @returns {string} the URL prefix for the resource.
 * @private
 */


function handlePrefix(publicId, options) {
  if (options.cloud_name && options.cloud_name[0] === '/') {
    return '/res' + options.cloud_name;
  } // defaults


  var protocol = "http://";
  var cdnPart = "";
  var subdomain = "res";
  var host = ".cloudinary.com";
  var path = "/" + options.cloud_name; // modifications

  if (options.protocol) {
    protocol = options.protocol + '//';
  }

  if (options.private_cdn) {
    cdnPart = options.cloud_name + "-";
    path = "";
  }

  if (options.cdn_subdomain) {
    subdomain = "res-" + cdnSubdomainNumber(publicId);
  }

  if (options.secure) {
    protocol = "https://";

    if (options.secure_cdn_subdomain === false) {
      subdomain = "res";
    }

    if (options.secure_distribution != null && options.secure_distribution !== OLD_AKAMAI_SHARED_CDN && options.secure_distribution !== SHARED_CDN) {
      cdnPart = "";
      subdomain = "";
      host = options.secure_distribution;
    }
  } else if (options.cname) {
    protocol = "http://";
    cdnPart = "";
    subdomain = options.cdn_subdomain ? 'a' + (src_crc32(publicId) % 5 + 1) + '.' : '';
    host = options.cname;
  }

  return [protocol, cdnPart, subdomain, host, path].join("");
}
/**
 * Return the resource type and action type based on the given configuration
 * @function Cloudinary#handleResourceType
 * @param {Object|string} resource_type
 * @param {string} [type='upload']
 * @param {string} [url_suffix]
 * @param {boolean} [use_root_path]
 * @param {boolean} [shorten]
 * @returns {string} resource_type/type
 * @ignore
 */


function handleResourceType(_ref) {
  var _ref$resource_type = _ref.resource_type,
      resource_type = _ref$resource_type === void 0 ? "image" : _ref$resource_type,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "upload" : _ref$type,
      url_suffix = _ref.url_suffix,
      use_root_path = _ref.use_root_path,
      shorten = _ref.shorten;
  var options,
      resourceType = resource_type;

  if (isPlainObject_root_isPlainObject_default()(resourceType)) {
    options = resourceType;
    resourceType = options.resource_type;
    type = options.type;
    shorten = options.shorten;
  }

  if (type == null) {
    type = 'upload';
  }

  if (url_suffix != null) {
    resourceType = SEO_TYPES["".concat(resourceType, "/").concat(type)];
    type = null;

    if (resourceType == null) {
      throw new Error("URL Suffix only supported for ".concat(Object.keys(SEO_TYPES).join(', ')));
    }
  }

  if (use_root_path) {
    if (resourceType === 'image' && type === 'upload' || resourceType === "images") {
      resourceType = null;
      type = null;
    } else {
      throw new Error("Root path only supported for image/upload");
    }
  }

  if (shorten && resourceType === 'image' && type === 'upload') {
    resourceType = 'iu';
    type = null;
  }

  return [resourceType, type].join("/");
}
/**
 * Encode publicId
 * @param publicId
 * @returns {string} encoded publicId
 */


function encodePublicId(publicId) {
  return encodeURIComponent(publicId).replace(/%3A/g, ':').replace(/%2F/g, '/');
}
/**
 * Encode and format publicId
 * @param publicId
 * @param options
 * @returns {string} publicId
 */


function formatPublicId(publicId, options) {
  if (isUrl(publicId)) {
    publicId = encodePublicId(publicId);
  } else {
    try {
      // Make sure publicId is URI encoded.
      publicId = decodeURIComponent(publicId);
    } catch (error) {}

    publicId = encodePublicId(publicId);

    if (options.url_suffix) {
      publicId = publicId + '/' + options.url_suffix;
    }

    if (options.format) {
      if (!options.trust_public_id) {
        publicId = publicId.replace(/\.(jpg|png|gif|webp)$/, '');
      }

      publicId = publicId + '.' + options.format;
    }
  }

  return publicId;
}
/**
 * Get any error with url options
 * @param options
 * @returns {string} if error, otherwise return undefined
 */


function validate(options) {
  var cloud_name = options.cloud_name,
      url_suffix = options.url_suffix;

  if (!cloud_name) {
    return 'Unknown cloud_name';
  }

  if (url_suffix && url_suffix.match(/[\.\/]/)) {
    return 'url_suffix should not include . or /';
  }
}
/**
 * Get version part of the url
 * @param publicId
 * @param options
 * @returns {string}
 */


function handleVersion(publicId, options) {
  // force_version param means to make sure there is a version in the url (Default is true)
  var isForceVersion = options.force_version || typeof options.force_version === 'undefined'; // Is version included in publicId or in options, or publicId is a url (doesn't need version)

  var isVersionExist = publicId.indexOf('/') < 0 || publicId.match(/^v[0-9]+/) || isUrl(publicId) || options.version;

  if (isForceVersion && !isVersionExist) {
    options.version = 1;
  }

  return options.version ? "v".concat(options.version) : '';
}
/**
 * Get final transformation component for url string
 * @param options
 * @returns {string}
 */


function handleTransformation(options) {
  var _ref2 = options || {},
      placeholder = _ref2.placeholder,
      accessibility = _ref2.accessibility,
      otherOptions = _objectWithoutProperties(_ref2, ["placeholder", "accessibility"]);

  var result = new src_transformation(otherOptions); // Append accessibility transformations

  if (accessibility && ACCESSIBILITY_MODES[accessibility]) {
    result.chain().effect(ACCESSIBILITY_MODES[accessibility]);
  } // Append placeholder transformations


  if (placeholder) {
    if (placeholder === "predominant-color" && result.getValue('width') && result.getValue('height')) {
      placeholder += '-pixel';
    }

    var placeholderTransformations = PLACEHOLDER_IMAGE_MODES[placeholder] || PLACEHOLDER_IMAGE_MODES.blur;
    placeholderTransformations.forEach(function (t) {
      return result.chain().transformation(t);
    });
  }

  return result.serialize();
}
/**
 * If type is 'fetch', update publicId to be a url
 * @param publicId
 * @param type
 * @returns {string}
 */


function preparePublicId(publicId, _ref3) {
  var type = _ref3.type;
  return !isUrl(publicId) && type === 'fetch' ? makeUrl(publicId) : publicId;
}
/**
 * Generate url string
 * @param publicId
 * @param options
 * @returns {string} final url
 */


function urlString(publicId, options) {
  if (isUrl(publicId) && (options.type === 'upload' || options.type === 'asset')) {
    return publicId;
  }

  var version = handleVersion(publicId, options);
  var transformationString = handleTransformation(options);
  var prefix = handlePrefix(publicId, options);
  var signature = handleSignature(options);
  var resourceType = handleResourceType(options);
  publicId = formatPublicId(publicId, options);
  return compact_root_compact_default()([prefix, resourceType, signature, transformationString, version, publicId]).join('/').replace(/([^:])\/+/g, '$1/') // replace '///' with '//'
  .replace(' ', '%20');
}
/**
 * Merge options and config with defaults
 * update options fetch_format according to 'type' param
 * @param options
 * @param config
 * @returns {*} updated options
 */


function prepareOptions(options, config) {
  if (options instanceof src_transformation) {
    options = options.toOptions();
  }

  options = defaults({}, options, config, DEFAULT_IMAGE_PARAMS);

  if (options.type === 'fetch') {
    options.fetch_format = options.fetch_format || options.format;
  }

  return options;
}
/**
 * Generates a URL for any asset in your Media library.
 * @function url
 * @ignore
 * @param {string} publicId - The public ID of the media asset.
 * @param {Object} [options={}] - The {@link Transformation} parameters to include in the URL.
 * @param {object} [config={}] - URL configuration parameters
 * @param {type} [options.type='upload'] - The asset's storage type.
 *  For details on all fetch types, see
 * <a href="https://cloudinary.com/documentation/image_transformations#fetching_images_from_remote_locations"
 *  target="_blank">Fetch types</a>.
 * @param {Object} [options.resource_type='image'] - The type of asset. <p>Possible values:<br/>
 *  - `image`<br/>
 *  - `video`<br/>
 *  - `raw`
 * @param {signature} [options.signature='s--12345678--'] - The signature component of a
 *  signed delivery URL of the format: /s--SIGNATURE--/.
 *  For details on signatures, see
 * <a href="https://cloudinary.com/documentation/signatures" target="_blank">Signatures</a>.
 * @return {string} The media asset URL.
 * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
 *  Available image transformations</a>
 * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
 *  Available video transformations</a>
 */


function url_url(publicId) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!publicId) {
    return publicId;
  }

  options = prepareOptions(options, config);
  publicId = preparePublicId(publicId, options);
  var error = validate(options);

  if (error) {
    throw error;
  }

  var resultUrl = urlString(publicId, options);

  if (options.urlAnalytics) {
    var analyticsOptions = getAnalyticsOptions(options);
    var sdkAnalyticsSignature = getSDKAnalyticsSignature(analyticsOptions); // url might already have a '?' query param

    var appender = '?';

    if (resultUrl.indexOf('?') >= 0) {
      appender = '&';
    }

    resultUrl = "".concat(resultUrl).concat(appender, "_a=").concat(sdkAnalyticsSignature);
  }

  return resultUrl;
}
;
// CONCATENATED MODULE: ./src/util/generateBreakpoints.js
function generateBreakpoints_slicedToArray(arr, i) { return generateBreakpoints_arrayWithHoles(arr) || generateBreakpoints_iterableToArrayLimit(arr, i) || generateBreakpoints_unsupportedIterableToArray(arr, i) || generateBreakpoints_nonIterableRest(); }

function generateBreakpoints_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function generateBreakpoints_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return generateBreakpoints_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return generateBreakpoints_arrayLikeToArray(o, minLen); }

function generateBreakpoints_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function generateBreakpoints_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function generateBreakpoints_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Helper function. Gets or populates srcset breakpoints using provided parameters
 * Either the breakpoints or min_width, max_width, max_images must be provided.
 *
 * @private
 * @param {srcset} srcset Options with either `breakpoints` or `min_width`, `max_width`, and `max_images`
 *
 * @return {number[]} Array of breakpoints
 *
 */
function generateBreakpoints(srcset) {
  var breakpoints = srcset.breakpoints || [];

  if (breakpoints.length) {
    return breakpoints;
  }

  var _map = [srcset.min_width, srcset.max_width, srcset.max_images].map(Number),
      _map2 = generateBreakpoints_slicedToArray(_map, 3),
      min_width = _map2[0],
      max_width = _map2[1],
      max_images = _map2[2];

  if ([min_width, max_width, max_images].some(isNaN)) {
    throw 'Either (min_width, max_width, max_images) ' + 'or breakpoints must be provided to the image srcset attribute';
  }

  if (min_width > max_width) {
    throw 'min_width must be less than max_width';
  }

  if (max_images <= 0) {
    throw 'max_images must be a positive integer';
  } else if (max_images === 1) {
    min_width = max_width;
  }

  var stepSize = Math.ceil((max_width - min_width) / Math.max(max_images - 1, 1));

  for (var current = min_width; current < max_width; current += stepSize) {
    breakpoints.push(current);
  }

  breakpoints.push(max_width);
  return breakpoints;
}
// CONCATENATED MODULE: ./src/util/srcsetUtils.js

var srcsetUtils_isEmpty = isEmpty;



/**
 * Options used to generate the srcset attribute.
 * @typedef {object} srcset
 * @property {(number[]|string[])}   [breakpoints] An array of breakpoints.
 * @property {number}                [min_width]   Minimal width of the srcset images.
 * @property {number}                [max_width]   Maximal width of the srcset images.
 * @property {number}                [max_images]  Number of srcset images to generate.
 * @property {object|string}         [transformation] The transformation to use in the srcset urls.
 * @property {boolean}               [sizes] Whether to calculate and add the sizes attribute.
 */

/**
 * Helper function. Generates a single srcset item url
 *
 * @private
 * @param {string} public_id  Public ID of the resource.
 * @param {number} width      Width in pixels of the srcset item.
 * @param {object|string} transformation
 * @param {object} options    Additional options.
 *
 * @return {string} Resulting URL of the item
 */

function scaledUrl(public_id, width, transformation) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var configParams = extractUrlParams(options);
  transformation = transformation || options;
  configParams.raw_transformation = new src_transformation([merge_root_merge_default.a({}, transformation), {
    crop: 'scale',
    width: width
  }]).toString();
  return url_url(public_id, configParams);
}
/**
 * If cache is enabled, get the breakpoints from the cache. If the values were not found in the cache,
 * or cache is not enabled, generate the values.
 * @param {srcset} srcset The srcset configuration parameters
 * @param {string} public_id
 * @param {object} options
 * @return {*|Array}
 */

function getOrGenerateBreakpoints(public_id) {
  var srcset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return generateBreakpoints(srcset);
}
/**
 * Helper function. Generates srcset attribute value of the HTML img tag
 * @private
 *
 * @param {string} public_id  Public ID of the resource
 * @param {number[]} breakpoints An array of breakpoints (in pixels)
 * @param {object} transformation The transformation
 * @param {object} options Includes html tag options, transformation options
 * @return {string} Resulting srcset attribute value
 */

function generateSrcsetAttribute(public_id, breakpoints, transformation, options) {
  options = cloneDeep_root_cloneDeep_default.a(options);
  patchFetchFormat(options);
  return breakpoints.map(function (width) {
    return "".concat(scaledUrl(public_id, width, transformation, options), " ").concat(width, "w");
  }).join(', ');
}
/**
 * Helper function. Generates sizes attribute value of the HTML img tag
 * @private
 * @param {number[]} breakpoints An array of breakpoints.
 * @return {string} Resulting sizes attribute value
 */

function generateSizesAttribute(breakpoints) {
  if (breakpoints == null) {
    return '';
  }

  return breakpoints.map(function (width) {
    return "(max-width: ".concat(width, "px) ").concat(width, "px");
  }).join(', ');
}
/**
 * Helper function. Generates srcset and sizes attributes of the image tag
 *
 * Generated attributes are added to attributes argument
 *
 * @private
 * @param {string}    publicId  The public ID of the resource
 * @param {object}    attributes Existing HTML attributes.
 * @param {srcset}    srcsetData
 * @param {object}    options    Additional options.
 *
 * @return array The responsive attributes
 */

function generateImageResponsiveAttributes(publicId) {
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var srcsetData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // Create both srcset and sizes here to avoid fetching breakpoints twice
  var responsiveAttributes = {};

  if (srcsetUtils_isEmpty(srcsetData)) {
    return responsiveAttributes;
  }

  var generateSizes = !attributes.sizes && srcsetData.sizes === true;
  var generateSrcset = !attributes.srcset;

  if (generateSrcset || generateSizes) {
    var breakpoints = getOrGenerateBreakpoints(publicId, srcsetData, options);

    if (generateSrcset) {
      var transformation = srcsetData.transformation;
      var srcsetAttr = generateSrcsetAttribute(publicId, breakpoints, transformation, options);

      if (!srcsetUtils_isEmpty(srcsetAttr)) {
        responsiveAttributes.srcset = srcsetAttr;
      }
    }

    if (generateSizes) {
      var sizesAttr = generateSizesAttribute(breakpoints);

      if (!srcsetUtils_isEmpty(sizesAttr)) {
        responsiveAttributes.sizes = sizesAttr;
      }
    }
  }

  return responsiveAttributes;
}
/**
 * Generate a media query
 *
 * @private
 * @param {object} options configuration options
 * @param {number|string} options.min_width
 * @param {number|string} options.max_width
 * @return {string} a media query string
 */

function generateMediaAttr(options) {
  var mediaQuery = [];

  if (options != null) {
    if (options.min_width != null) {
      mediaQuery.push("(min-width: ".concat(options.min_width, "px)"));
    }

    if (options.max_width != null) {
      mediaQuery.push("(max-width: ".concat(options.max_width, "px)"));
    }
  }

  return mediaQuery.join(' and ');
}
var srcsetUrl = scaledUrl;
// CONCATENATED MODULE: ./src/tags/imagetag.js
function imagetag_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { imagetag_typeof = function _typeof(obj) { return typeof obj; }; } else { imagetag_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return imagetag_typeof(obj); }

function imagetag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function imagetag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function imagetag_createClass(Constructor, protoProps, staticProps) { if (protoProps) imagetag_defineProperties(Constructor.prototype, protoProps); if (staticProps) imagetag_defineProperties(Constructor, staticProps); return Constructor; }

function imagetag_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { imagetag_get = Reflect.get; } else { imagetag_get = function _get(target, property, receiver) { var base = imagetag_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return imagetag_get(target, property, receiver || target); }

function imagetag_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = imagetag_getPrototypeOf(object); if (object === null) break; } return object; }

function imagetag_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) imagetag_setPrototypeOf(subClass, superClass); }

function imagetag_setPrototypeOf(o, p) { imagetag_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return imagetag_setPrototypeOf(o, p); }

function imagetag_createSuper(Derived) { var hasNativeReflectConstruct = imagetag_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = imagetag_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = imagetag_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return imagetag_possibleConstructorReturn(this, result); }; }

function imagetag_possibleConstructorReturn(self, call) { if (call && (imagetag_typeof(call) === "object" || typeof call === "function")) { return call; } return imagetag_assertThisInitialized(self); }

function imagetag_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function imagetag_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function imagetag_getPrototypeOf(o) { imagetag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return imagetag_getPrototypeOf(o); }

/**
 * Image Tag
 * Depends on 'tags/htmltag', 'cloudinary'
 */




/**
 * Creates an HTML (DOM) Image tag using Cloudinary as the source.
 * @constructor ImageTag
 * @extends HtmlTag
 * @param {string} [publicId]
 * @param {Object} [options]
 */

var imagetag_ImageTag = /*#__PURE__*/function (_HtmlTag) {
  imagetag_inherits(ImageTag, _HtmlTag);

  var _super = imagetag_createSuper(ImageTag);

  function ImageTag(publicId) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    imagetag_classCallCheck(this, ImageTag);

    return _super.call(this, "img", publicId, options);
  }
  /** @override */


  imagetag_createClass(ImageTag, [{
    key: "closeTag",
    value: function closeTag() {
      return "";
    }
    /** @override */

  }, {
    key: "attributes",
    value: function attributes() {
      var attr, options, srcAttribute;
      attr = imagetag_get(imagetag_getPrototypeOf(ImageTag.prototype), "attributes", this).call(this) || {};
      options = this.getOptions();
      var srcsetParam = this.getOption('srcset');
      var attributes = this.getOption('attributes') || {};
      var responsiveAttributes = {};

      if (isString_root_isString_default()(srcsetParam)) {
        responsiveAttributes.srcset = srcsetParam;
      } else {
        responsiveAttributes = generateImageResponsiveAttributes(this.publicId, attributes, srcsetParam, options);
      }

      if (!isEmpty(responsiveAttributes)) {
        delete options.width;
        delete options.height;
      }

      merge_root_merge_default()(attr, responsiveAttributes);
      srcAttribute = options.responsive && !options.client_hints ? 'data-src' : 'src';

      if (attr[srcAttribute] == null) {
        attr[srcAttribute] = url_url(this.publicId, this.getOptions());
      }

      return attr;
    }
  }]);

  return ImageTag;
}(htmltag);

;
/* harmony default export */ var imagetag = (imagetag_ImageTag);
// CONCATENATED MODULE: ./src/tags/sourcetag.js
function sourcetag_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { sourcetag_typeof = function _typeof(obj) { return typeof obj; }; } else { sourcetag_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return sourcetag_typeof(obj); }

function sourcetag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function sourcetag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function sourcetag_createClass(Constructor, protoProps, staticProps) { if (protoProps) sourcetag_defineProperties(Constructor.prototype, protoProps); if (staticProps) sourcetag_defineProperties(Constructor, staticProps); return Constructor; }

function sourcetag_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { sourcetag_get = Reflect.get; } else { sourcetag_get = function _get(target, property, receiver) { var base = sourcetag_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return sourcetag_get(target, property, receiver || target); }

function sourcetag_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = sourcetag_getPrototypeOf(object); if (object === null) break; } return object; }

function sourcetag_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) sourcetag_setPrototypeOf(subClass, superClass); }

function sourcetag_setPrototypeOf(o, p) { sourcetag_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return sourcetag_setPrototypeOf(o, p); }

function sourcetag_createSuper(Derived) { var hasNativeReflectConstruct = sourcetag_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = sourcetag_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = sourcetag_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return sourcetag_possibleConstructorReturn(this, result); }; }

function sourcetag_possibleConstructorReturn(self, call) { if (call && (sourcetag_typeof(call) === "object" || typeof call === "function")) { return call; } return sourcetag_assertThisInitialized(self); }

function sourcetag_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function sourcetag_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function sourcetag_getPrototypeOf(o) { sourcetag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return sourcetag_getPrototypeOf(o); }

/**
 * Image Tag
 * Depends on 'tags/htmltag', 'cloudinary'
 */




/**
 * Creates an HTML (DOM) Image tag using Cloudinary as the source.
 * @constructor SourceTag
 * @extends HtmlTag
 * @param {string} [publicId]
 * @param {Object} [options]
 */

var sourcetag_SourceTag = /*#__PURE__*/function (_HtmlTag) {
  sourcetag_inherits(SourceTag, _HtmlTag);

  var _super = sourcetag_createSuper(SourceTag);

  function SourceTag(publicId) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    sourcetag_classCallCheck(this, SourceTag);

    return _super.call(this, "source", publicId, options);
  }
  /** @override */


  sourcetag_createClass(SourceTag, [{
    key: "closeTag",
    value: function closeTag() {
      return "";
    }
    /** @override */

  }, {
    key: "attributes",
    value: function attributes() {
      var srcsetParam = this.getOption('srcset');
      var attr = sourcetag_get(sourcetag_getPrototypeOf(SourceTag.prototype), "attributes", this).call(this) || {};
      var options = this.getOptions();
      merge_root_merge_default()(attr, generateImageResponsiveAttributes(this.publicId, attr, srcsetParam, options));

      if (!attr.srcset) {
        attr.srcset = url_url(this.publicId, options);
      }

      if (!attr.media && options.media) {
        attr.media = generateMediaAttr(options.media);
      }

      return attr;
    }
  }]);

  return SourceTag;
}(htmltag);

;
/* harmony default export */ var sourcetag = (sourcetag_SourceTag);
// CONCATENATED MODULE: ./src/tags/picturetag.js
function picturetag_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { picturetag_typeof = function _typeof(obj) { return typeof obj; }; } else { picturetag_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return picturetag_typeof(obj); }

function picturetag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function picturetag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function picturetag_createClass(Constructor, protoProps, staticProps) { if (protoProps) picturetag_defineProperties(Constructor.prototype, protoProps); if (staticProps) picturetag_defineProperties(Constructor, staticProps); return Constructor; }

function picturetag_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { picturetag_get = Reflect.get; } else { picturetag_get = function _get(target, property, receiver) { var base = picturetag_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return picturetag_get(target, property, receiver || target); }

function picturetag_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = picturetag_getPrototypeOf(object); if (object === null) break; } return object; }

function picturetag_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) picturetag_setPrototypeOf(subClass, superClass); }

function picturetag_setPrototypeOf(o, p) { picturetag_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return picturetag_setPrototypeOf(o, p); }

function picturetag_createSuper(Derived) { var hasNativeReflectConstruct = picturetag_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = picturetag_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = picturetag_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return picturetag_possibleConstructorReturn(this, result); }; }

function picturetag_possibleConstructorReturn(self, call) { if (call && (picturetag_typeof(call) === "object" || typeof call === "function")) { return call; } return picturetag_assertThisInitialized(self); }

function picturetag_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function picturetag_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function picturetag_getPrototypeOf(o) { picturetag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return picturetag_getPrototypeOf(o); }







var picturetag_PictureTag = /*#__PURE__*/function (_HtmlTag) {
  picturetag_inherits(PictureTag, _HtmlTag);

  var _super = picturetag_createSuper(PictureTag);

  function PictureTag(publicId) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var sources = arguments.length > 2 ? arguments[2] : undefined;

    picturetag_classCallCheck(this, PictureTag);

    _this = _super.call(this, 'picture', publicId, options);
    _this.widthList = sources;
    return _this;
  }
  /** @override */


  picturetag_createClass(PictureTag, [{
    key: "content",
    value: function content() {
      var _this2 = this;

      return this.widthList.map(function (_ref) {
        var min_width = _ref.min_width,
            max_width = _ref.max_width,
            transformation = _ref.transformation;

        var options = _this2.getOptions();

        var sourceTransformation = new src_transformation(options);
        sourceTransformation.chain().fromOptions(typeof transformation === 'string' ? {
          raw_transformation: transformation
        } : transformation);
        options = extractUrlParams(options);
        options.media = {
          min_width: min_width,
          max_width: max_width
        };
        options.transformation = sourceTransformation;
        return new sourcetag(_this2.publicId, options).toHtml();
      }).join('') + new imagetag(this.publicId, this.getOptions()).toHtml();
    }
    /** @override */

  }, {
    key: "attributes",
    value: function attributes() {
      var attr = picturetag_get(picturetag_getPrototypeOf(PictureTag.prototype), "attributes", this).call(this);

      delete attr.width;
      delete attr.height;
      return attr;
    }
    /** @override */

  }, {
    key: "closeTag",
    value: function closeTag() {
      return "</" + this.name + ">";
    }
  }]);

  return PictureTag;
}(htmltag);

;
/* harmony default export */ var picturetag = (picturetag_PictureTag);
// CONCATENATED MODULE: ./src/tags/videotag.js
function videotag_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { videotag_typeof = function _typeof(obj) { return typeof obj; }; } else { videotag_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return videotag_typeof(obj); }

function videotag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function videotag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function videotag_createClass(Constructor, protoProps, staticProps) { if (protoProps) videotag_defineProperties(Constructor.prototype, protoProps); if (staticProps) videotag_defineProperties(Constructor, staticProps); return Constructor; }

function videotag_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { videotag_get = Reflect.get; } else { videotag_get = function _get(target, property, receiver) { var base = videotag_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return videotag_get(target, property, receiver || target); }

function videotag_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = videotag_getPrototypeOf(object); if (object === null) break; } return object; }

function videotag_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) videotag_setPrototypeOf(subClass, superClass); }

function videotag_setPrototypeOf(o, p) { videotag_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return videotag_setPrototypeOf(o, p); }

function videotag_createSuper(Derived) { var hasNativeReflectConstruct = videotag_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = videotag_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = videotag_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return videotag_possibleConstructorReturn(this, result); }; }

function videotag_possibleConstructorReturn(self, call) { if (call && (videotag_typeof(call) === "object" || typeof call === "function")) { return call; } return videotag_assertThisInitialized(self); }

function videotag_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function videotag_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function videotag_getPrototypeOf(o) { videotag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return videotag_getPrototypeOf(o); }

/**
 * Video Tag
 * Depends on 'tags/htmltag', 'util', 'cloudinary'
 */




var VIDEO_TAG_PARAMS = ['source_types', 'source_transformation', 'fallback_content', 'poster', 'sources'];
var videotag_DEFAULT_VIDEO_SOURCE_TYPES = ['webm', 'mp4', 'ogv'];
var videotag_DEFAULT_POSTER_OPTIONS = {
  format: 'jpg',
  resource_type: 'video'
};
/**
 * Creates an HTML (DOM) Video tag using Cloudinary as the source.
 * @constructor VideoTag
 * @extends HtmlTag
 * @param {string} [publicId]
 * @param {Object} [options]
 */

var videotag_VideoTag = /*#__PURE__*/function (_HtmlTag) {
  videotag_inherits(VideoTag, _HtmlTag);

  var _super = videotag_createSuper(VideoTag);

  function VideoTag(publicId) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    videotag_classCallCheck(this, VideoTag);

    options = defaults({}, options, DEFAULT_VIDEO_PARAMS);
    return _super.call(this, "video", publicId.replace(/\.(mp4|ogv|webm)$/, ''), options);
  }
  /**
   * Set the transformation to apply on each source
   * @function VideoTag#setSourceTransformation
   * @param {Object} an object with pairs of source type and source transformation
   * @returns {VideoTag} Returns this instance for chaining purposes.
   */


  videotag_createClass(VideoTag, [{
    key: "setSourceTransformation",
    value: function setSourceTransformation(value) {
      this.transformation().sourceTransformation(value);
      return this;
    }
    /**
     * Set the source types to include in the video tag
     * @function VideoTag#setSourceTypes
     * @param {Array<string>} an array of source types
     * @returns {VideoTag} Returns this instance for chaining purposes.
     */

  }, {
    key: "setSourceTypes",
    value: function setSourceTypes(value) {
      this.transformation().sourceTypes(value);
      return this;
    }
    /**
     * Set the poster to be used in the video tag
     * @function VideoTag#setPoster
     * @param {string|Object} value
     * - string: a URL to use for the poster
     * - Object: transformation parameters to apply to the poster. May optionally include a public_id to use instead of the video public_id.
     * @returns {VideoTag} Returns this instance for chaining purposes.
     */

  }, {
    key: "setPoster",
    value: function setPoster(value) {
      this.transformation().poster(value);
      return this;
    }
    /**
     * Set the content to use as fallback in the video tag
     * @function VideoTag#setFallbackContent
     * @param {string} value - the content to use, in HTML format
     * @returns {VideoTag} Returns this instance for chaining purposes.
     */

  }, {
    key: "setFallbackContent",
    value: function setFallbackContent(value) {
      this.transformation().fallbackContent(value);
      return this;
    }
  }, {
    key: "content",
    value: function content() {
      var _this = this;

      var sourceTypes = this.transformation().getValue('source_types');
      var sourceTransformation = this.transformation().getValue('source_transformation');
      var fallback = this.transformation().getValue('fallback_content');
      var sources = this.getOption('sources');
      var innerTags = [];

      if (isArray_root_isArray_default()(sources) && !isEmpty(sources)) {
        innerTags = sources.map(function (source) {
          var src = url_url(_this.publicId, defaults({}, source.transformations || {}, {
            resource_type: 'video',
            format: source.type
          }), _this.getOptions());
          return _this.createSourceTag(src, source.type, source.codecs);
        });
      } else {
        if (isEmpty(sourceTypes)) {
          sourceTypes = videotag_DEFAULT_VIDEO_SOURCE_TYPES;
        }

        if (isArray_root_isArray_default()(sourceTypes)) {
          innerTags = sourceTypes.map(function (srcType) {
            var src = url_url(_this.publicId, defaults({}, sourceTransformation[srcType] || {}, {
              resource_type: 'video',
              format: srcType
            }), _this.getOptions());
            return _this.createSourceTag(src, srcType);
          });
        }
      }

      return innerTags.join('') + fallback;
    }
  }, {
    key: "attributes",
    value: function attributes() {
      var sourceTypes = this.getOption('source_types');
      var poster = this.getOption('poster');

      if (poster === undefined) {
        poster = {};
      }

      if (isPlainObject_root_isPlainObject_default()(poster)) {
        var defaultOptions = poster.public_id != null ? DEFAULT_IMAGE_PARAMS : videotag_DEFAULT_POSTER_OPTIONS;
        poster = url_url(poster.public_id || this.publicId, defaults({}, poster, defaultOptions, this.getOptions()));
      }

      var attr = videotag_get(videotag_getPrototypeOf(VideoTag.prototype), "attributes", this).call(this) || {};
      attr = omit(attr, VIDEO_TAG_PARAMS);
      var sources = this.getOption('sources'); // In case of empty sourceTypes - fallback to default source types is used.

      var hasSourceTags = !isEmpty(sources) || isEmpty(sourceTypes) || isArray_root_isArray_default()(sourceTypes);

      if (!hasSourceTags) {
        attr["src"] = url_url(this.publicId, this.getOptions(), {
          resource_type: 'video',
          format: sourceTypes
        });
      }

      if (poster != null) {
        attr["poster"] = poster;
      }

      return attr;
    }
  }, {
    key: "createSourceTag",
    value: function createSourceTag(src, sourceType) {
      var codecs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var mimeType = null;

      if (!isEmpty(sourceType)) {
        var videoType = sourceType === 'ogv' ? 'ogg' : sourceType;
        mimeType = 'video/' + videoType;

        if (!isEmpty(codecs)) {
          var codecsStr = isArray_root_isArray_default()(codecs) ? codecs.join(', ') : codecs;
          mimeType += '; codecs=' + codecsStr;
        }
      }

      return "<source " + this.htmlAttrs({
        src: src,
        type: mimeType
      }) + ">";
    }
  }]);

  return VideoTag;
}(htmltag);

/* harmony default export */ var videotag = (videotag_VideoTag);
// CONCATENATED MODULE: ./src/tags/clienthintsmetatag.js
function clienthintsmetatag_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { clienthintsmetatag_typeof = function _typeof(obj) { return typeof obj; }; } else { clienthintsmetatag_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return clienthintsmetatag_typeof(obj); }

function clienthintsmetatag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function clienthintsmetatag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function clienthintsmetatag_createClass(Constructor, protoProps, staticProps) { if (protoProps) clienthintsmetatag_defineProperties(Constructor.prototype, protoProps); if (staticProps) clienthintsmetatag_defineProperties(Constructor, staticProps); return Constructor; }

function clienthintsmetatag_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) clienthintsmetatag_setPrototypeOf(subClass, superClass); }

function clienthintsmetatag_setPrototypeOf(o, p) { clienthintsmetatag_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return clienthintsmetatag_setPrototypeOf(o, p); }

function clienthintsmetatag_createSuper(Derived) { var hasNativeReflectConstruct = clienthintsmetatag_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = clienthintsmetatag_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = clienthintsmetatag_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return clienthintsmetatag_possibleConstructorReturn(this, result); }; }

function clienthintsmetatag_possibleConstructorReturn(self, call) { if (call && (clienthintsmetatag_typeof(call) === "object" || typeof call === "function")) { return call; } return clienthintsmetatag_assertThisInitialized(self); }

function clienthintsmetatag_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function clienthintsmetatag_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function clienthintsmetatag_getPrototypeOf(o) { clienthintsmetatag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return clienthintsmetatag_getPrototypeOf(o); }

/**
 * Image Tag
 * Depends on 'tags/htmltag', 'cloudinary'
 */


/**
 * Creates an HTML (DOM) Meta tag that enables Client-Hints for the HTML page. <br/>
 *  See
 *  <a href="https://cloudinary.com/documentation/responsive_images#automating_responsive_images_with_client_hints"
 *  target="_new">Automating responsive images with Client Hints</a> for more details.
 * @constructor ClientHintsMetaTag
 * @extends HtmlTag
 * @param {object} options
 * @example
 * tag = new ClientHintsMetaTag()
 * //returns: <meta http-equiv="Accept-CH" content="DPR, Viewport-Width, Width">
 */

var clienthintsmetatag_ClientHintsMetaTag = /*#__PURE__*/function (_HtmlTag) {
  clienthintsmetatag_inherits(ClientHintsMetaTag, _HtmlTag);

  var _super = clienthintsmetatag_createSuper(ClientHintsMetaTag);

  function ClientHintsMetaTag(options) {
    clienthintsmetatag_classCallCheck(this, ClientHintsMetaTag);

    return _super.call(this, 'meta', void 0, assign_root_assign_default()({
      "http-equiv": "Accept-CH",
      content: "DPR, Viewport-Width, Width"
    }, options));
  }
  /** @override */


  clienthintsmetatag_createClass(ClientHintsMetaTag, [{
    key: "closeTag",
    value: function closeTag() {
      return "";
    }
  }]);

  return ClientHintsMetaTag;
}(htmltag);

;
/* harmony default export */ var clienthintsmetatag = (clienthintsmetatag_ClientHintsMetaTag);
// CONCATENATED MODULE: ./src/util/parse/normalizeToArray.js
function normalizeToArray_toConsumableArray(arr) { return normalizeToArray_arrayWithoutHoles(arr) || normalizeToArray_iterableToArray(arr) || normalizeToArray_unsupportedIterableToArray(arr) || normalizeToArray_nonIterableSpread(); }

function normalizeToArray_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function normalizeToArray_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return normalizeToArray_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return normalizeToArray_arrayLikeToArray(o, minLen); }

function normalizeToArray_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function normalizeToArray_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return normalizeToArray_arrayLikeToArray(arr); }

function normalizeToArray_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/**
 * @desc normalize elements, support a single element, array or nodelist, always outputs array
 * @param elements<HTMLElement[]>
 * @returns {[]}
 */

function normalizeToArray(elements) {
  if (isArray_root_isArray_default()(elements)) {
    return elements;
  } else if (elements.constructor.name === "NodeList") {
    return normalizeToArray_toConsumableArray(elements); // ensure an array is always returned, even if nodelist
  } else if (isString_root_isString_default()(elements)) {
    return Array.prototype.slice.call(document.querySelectorAll(elements), 0);
  } else {
    return [elements];
  }
}
// CONCATENATED MODULE: ./src/util/features/transparentVideo/mountCloudinaryVideoTag.js
/**
 * @param {HTMLElement} htmlElContainer
 * @param {object} clInstance cloudinary instance
 * @param {string} publicId
 * @param {object} options - TransformationOptions
 * @returns Promise<HTMLElement>
 */
function mountCloudinaryVideoTag(htmlElContainer, clInstance, publicId, options) {
  return new Promise(function (resolve, reject) {
    htmlElContainer.innerHTML = clInstance.videoTag(publicId, options).toHtml(); // All videos under the html container must have a width of 100%, or they might overflow from the container

    var cloudinaryVideoElement = htmlElContainer.querySelector('.cld-transparent-video');
    cloudinaryVideoElement.style.width = '100%';
    resolve(htmlElContainer);
  });
}

/* harmony default export */ var transparentVideo_mountCloudinaryVideoTag = (mountCloudinaryVideoTag);
// CONCATENATED MODULE: ./src/util/transformations/addFlag.js
/**
 * @description - Function will push a flag to incoming options
 * @param {{transformation} | {...transformation}} options - These options are the same options provided to all our SDK methods
 *                           We expect options to either be the transformation itself, or an object containing
 *                           an array of transformations
 *
 * @param {string} flag
 * @returns the mutated options object
 */
function addFlagToOptions(options, flag) {
  // Do we have transformation
  if (options.transformation) {
    options.transformation.push({
      flags: [flag]
    });
  } else {
    // no transformation
    // ensure the flags are extended
    if (!options.flags) {
      options.flags = [];
    }

    if (typeof options.flags === 'string') {
      options.flags = [options.flags];
    }

    options.flags.push(flag);
  }
}

/* harmony default export */ var addFlag = (addFlagToOptions);
// CONCATENATED MODULE: ./src/util/features/transparentVideo/enforceOptionsForTransparentVideo.js


/**
 * @description - Enforce option structure, sets defaults and ensures alpha flag exists
 * @param options {TransformationOptions}
 */

function enforceOptionsForTransparentVideo(options) {
  options.autoplay = true;
  options.muted = true;
  options.controls = false;
  options.max_timeout_ms = options.max_timeout_ms || DEFAULT_TIMEOUT_MS;
  options["class"] = options["class"] || '';
  options["class"] += ' cld-transparent-video';
  options.externalLibraries = options.externalLibraries || {};

  if (!options.externalLibraries.seeThru) {
    options.externalLibraries.seeThru = DEFAULT_EXTERNAL_LIBRARIES.seeThru;
  } // ensure there's an alpha transformation present
  // this is a non documented internal flag


  addFlag(options, 'alpha');
}

/* harmony default export */ var transparentVideo_enforceOptionsForTransparentVideo = (enforceOptionsForTransparentVideo);
// CONCATENATED MODULE: ./src/util/xhr/loadScript.js
/**
 * @description - Given a string URL, this function will load the script and resolve the promise.
 *                The function doesn't resolve any value,
 *                this is not a UMD loader where you can get your library name back.
 * @param scriptURL {string}
 * @param {number} max_timeout_ms - Time to elapse before promise is rejected
 * @param isAlreadyLoaded {boolean} if true, the loadScript resolves immediately
 *                                  this is used for multiple invocations - prevents the script from being loaded multiple times
 * @return {Promise<any | {status:string, message:string}>}
 */
function loadScript(scriptURL, max_timeout_ms, isAlreadyLoaded) {
  return new Promise(function (resolve, reject) {
    if (isAlreadyLoaded) {
      resolve();
    } else {
      var scriptTag = document.createElement('script');
      scriptTag.src = scriptURL;
      var timerID = setTimeout(function () {
        reject({
          status: 'error',
          message: "Timeout loading script ".concat(scriptURL)
        });
      }, max_timeout_ms); // 10 seconds for timeout

      scriptTag.onerror = function () {
        clearTimeout(timerID); // clear timeout reject error

        reject({
          status: 'error',
          message: "Error loading ".concat(scriptURL)
        });
      };

      scriptTag.onload = function () {
        clearTimeout(timerID); // clear timeout reject error

        resolve();
      };

      document.head.appendChild(scriptTag);
    }
  });
}

/* harmony default export */ var xhr_loadScript = (loadScript);
// CONCATENATED MODULE: ./src/util/xhr/getBlobFromURL.js
/**
 * @description Converts a URL to a BLOB URL
 * @param {string} urlToLoad
 * @param {number} max_timeout_ms - Time to elapse before promise is rejected
 * @return {Promise<{
 *   status: 'success' | 'error'
 *   message?: string,
 *    payload: {
 *      url: string
 *    }
 * }>}
 */
function getBlobFromURL(urlToLoad, max_timeout_ms) {
  return new Promise(function (resolve, reject) {
    var timerID = setTimeout(function () {
      reject({
        status: 'error',
        message: 'Timeout loading Blob URL'
      });
    }, max_timeout_ms);
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';

    xhr.onload = function (response) {
      clearTimeout(timerID); // clear timeout reject error

      resolve({
        status: 'success',
        payload: {
          blobURL: URL.createObjectURL(xhr.response)
        }
      });
    };

    xhr.onerror = function () {
      clearTimeout(timerID); // clear timeout reject error

      reject({
        status: 'error',
        message: 'Error loading Blob URL'
      });
    };

    xhr.open('GET', urlToLoad, true);
    xhr.send();
  });
}

/* harmony default export */ var xhr_getBlobFromURL = (getBlobFromURL);
// CONCATENATED MODULE: ./src/util/features/transparentVideo/createHiddenVideoTag.js
/**
 * @description Creates a hidden HTMLVideoElement with the specified videoOptions
 * @param {{autoplay, playsinline, loop, muted, poster, blobURL, videoURL }} videoOptions
 * @param {boolean} videoOptions.autoplay - autoplays the video if true
 * @param {string} videoOptions.blobURL - the blobURL to set as video.src
 * @param {string} videoOptions.videoURL - the original videoURL the user created (with transformations)
 * @return {HTMLVideoElement}
 */
function createHiddenVideoTag(videoOptions) {
  var autoplay = videoOptions.autoplay,
      playsinline = videoOptions.playsinline,
      loop = videoOptions.loop,
      muted = videoOptions.muted,
      poster = videoOptions.poster,
      blobURL = videoOptions.blobURL,
      videoURL = videoOptions.videoURL;
  var el = document.createElement('video');
  el.style.visibility = 'hidden';
  el.position = 'absolute';
  el.x = 0;
  el.y = 0;
  el.src = blobURL;
  el.setAttribute('data-video-url', videoURL); // for debugging/testing

  autoplay && el.setAttribute('autoplay', autoplay);
  playsinline && el.setAttribute('playsinline', playsinline);
  loop && el.setAttribute('loop', loop);
  muted && el.setAttribute('muted', muted);
  muted && (el.muted = muted); // this is also needed for autoplay, on top of setAttribute

  poster && el.setAttribute('poster', poster); // Free memory at the end of the file loading.

  el.onload = function () {
    URL.revokeObjectURL(blobURL);
  };

  return el;
}

/* harmony default export */ var transparentVideo_createHiddenVideoTag = (createHiddenVideoTag);
// CONCATENATED MODULE: ./src/util/features/transparentVideo/instantiateSeeThru.js
/**
 * @description This function creates a new instanc eof seeThru (seeThru.create()) and returns a promise of the seeThru instance
 * @param {HTMLVideoElement} videoElement
 * @param {number} max_timeout_ms - Time to elapse before promise is rejected
 * @param {string} customClass - A classname to be added to the canvas element created by seeThru
 * @param {boolean} autoPlay
 * @return {Promise<any>} SeeThru instance or rejection error
 */
function instantiateSeeThru(videoElement, max_timeout_ms, customClass, autoPlay) {
  var _window = window,
      seeThru = _window.seeThru,
      setTimeout = _window.setTimeout,
      clearTimeout = _window.clearTimeout;
  return new Promise(function (resolve, reject) {
    var timerID = setTimeout(function () {
      reject({
        status: 'error',
        message: 'Timeout instantiating seeThru instance'
      });
    }, max_timeout_ms);

    if (seeThru) {
      var seeThruInstance = seeThru.create(videoElement).ready(function () {
        // clear timeout reject error
        clearTimeout(timerID); // force container width, else the canvas can overflow out

        var canvasElement = seeThruInstance.getCanvas();
        canvasElement.style.width = '100%';
        canvasElement.className += ' ' + customClass; // start the video if autoplay is set

        if (autoPlay) {
          seeThruInstance.play();
        }

        resolve(seeThruInstance);
      });
    } else {
      reject({
        status: 'error',
        message: 'Error instantiating seeThru instance'
      });
    }
  });
}

/* harmony default export */ var transparentVideo_instantiateSeeThru = (instantiateSeeThru);
// CONCATENATED MODULE: ./src/util/features/transparentVideo/mountSeeThruCanvasTag.js




/**
 *
 * @param {HTMLElement} htmlElContainer
 * @param {string} videoURL
 * @param {TransformationOptions} options
 * @return {Promise<any>}
 */

function mountSeeThruCanvasTag(htmlElContainer, videoURL, options) {
  var poster = options.poster,
      autoplay = options.autoplay,
      playsinline = options.playsinline,
      loop = options.loop,
      muted = options.muted;
  videoURL = videoURL + '.mp4'; // seeThru always uses mp4

  return new Promise(function (resolve, reject) {
    xhr_loadScript(options.externalLibraries.seeThru, options.max_timeout_ms, window.seeThru).then(function () {
      xhr_getBlobFromURL(videoURL, options.max_timeout_ms).then(function (_ref) {
        var payload = _ref.payload;
        var videoElement = transparentVideo_createHiddenVideoTag({
          blobURL: payload.blobURL,
          videoURL: videoURL,
          // for debugging/testing
          poster: poster,
          autoplay: autoplay,
          playsinline: playsinline,
          loop: loop,
          muted: muted
        });
        htmlElContainer.appendChild(videoElement);
        transparentVideo_instantiateSeeThru(videoElement, options.max_timeout_ms, options["class"], options.autoplay).then(function () {
          resolve(htmlElContainer);
        })["catch"](function (err) {
          reject(err);
        }); // catch for getBlobFromURL()
      })["catch"](function (_ref2) {
        var status = _ref2.status,
            message = _ref2.message;
        reject({
          status: status,
          message: message
        });
      }); // catch for loadScript()
    })["catch"](function (_ref3) {
      var status = _ref3.status,
          message = _ref3.message;
      reject({
        status: status,
        message: message
      });
    });
  });
}

/* harmony default export */ var transparentVideo_mountSeeThruCanvasTag = (mountSeeThruCanvasTag);
// CONCATENATED MODULE: ./src/util/features/transparentVideo/checkSupportForTransparency.js
/**
 * @return {Promise<boolean>} - Whether the browser supports transparent videos or not
 */
function checkSupportForTransparency() {
  return new Promise(function (resolve, reject) {
    var video = document.createElement('video');
    var canPlay = video.canPlayType && video.canPlayType('video/webm; codecs="vp9"');
    resolve(canPlay === 'maybe' || canPlay === 'probably');
  });
}

/* harmony default export */ var transparentVideo_checkSupportForTransparency = (checkSupportForTransparency);
// CONCATENATED MODULE: ./src/cloudinary.js
function cloudinary_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function cloudinary_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function cloudinary_createClass(Constructor, protoProps, staticProps) { if (protoProps) cloudinary_defineProperties(Constructor.prototype, protoProps); if (staticProps) cloudinary_defineProperties(Constructor, staticProps); return Constructor; }


var applyBreakpoints, closestAbove, defaultBreakpoints, cloudinary_findContainerWidth, cloudinary_maxWidth, updateDpr;









 //






defaultBreakpoints = function defaultBreakpoints(width) {
  var steps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  return steps * Math.ceil(width / steps);
};

closestAbove = function closestAbove(list, value) {
  var i;
  i = list.length - 2;

  while (i >= 0 && list[i] >= value) {
    i--;
  }

  return list[i + 1];
};

applyBreakpoints = function applyBreakpoints(tag, width, steps, options) {
  var ref, ref1, ref2, responsive_use_breakpoints;
  responsive_use_breakpoints = (ref = (ref1 = (ref2 = options['responsive_use_breakpoints']) != null ? ref2 : options['responsive_use_stoppoints']) != null ? ref1 : this.config('responsive_use_breakpoints')) != null ? ref : this.config('responsive_use_stoppoints');

  if (!responsive_use_breakpoints || responsive_use_breakpoints === 'resize' && !options.resizing) {
    return width;
  } else {
    return this.calc_breakpoint(tag, width, steps);
  }
};

cloudinary_findContainerWidth = function findContainerWidth(element) {
  var containerWidth, style;
  containerWidth = 0;

  while ((element = element != null ? element.parentNode : void 0) instanceof Element && !containerWidth) {
    style = window.getComputedStyle(element);

    if (!/^inline/.test(style.display)) {
      containerWidth = lodash_width(element);
    }
  }

  return containerWidth;
};

updateDpr = function updateDpr(dataSrc, roundDpr) {
  return dataSrc.replace(/\bdpr_(1\.0|auto)\b/g, 'dpr_' + this.device_pixel_ratio(roundDpr));
};

cloudinary_maxWidth = function maxWidth(requiredWidth, tag) {
  var imageWidth;
  imageWidth = lodash_getData(tag, 'width') || 0;

  if (requiredWidth > imageWidth) {
    imageWidth = requiredWidth;
    lodash_setData(tag, 'width', requiredWidth);
  }

  return imageWidth;
};

var cloudinary_Cloudinary = /*#__PURE__*/function () {
  /**
   * Creates a new Cloudinary instance.
   * @class Cloudinary
   * @classdesc Main class for accessing Cloudinary functionality.
   * @param {Object} options - A {@link Configuration} object for globally configuring Cloudinary account settings.
   * @example<br/>
   *  var cl = new cloudinary.Cloudinary( { cloud_name: "mycloud"});<br/>
   *  var imgTag = cl.image("myPicID");
   * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters" target="_blank">
   *  Available configuration options</a>
   */
  function Cloudinary(options) {
    cloudinary_classCallCheck(this, Cloudinary);

    var configuration;
    this.devicePixelRatioCache = {};
    this.responsiveConfig = {};
    this.responsiveResizeInitialized = false;
    configuration = new src_configuration(options); // Provided for backward compatibility

    this.config = function (newConfig, newValue) {
      return configuration.config(newConfig, newValue);
    };
    /**
     * Use \<meta\> tags in the document to configure this `cloudinary` instance.
     * @return This {Cloudinary} instance for chaining.
     */


    this.fromDocument = function () {
      configuration.fromDocument();
      return this;
    };
    /**
     * Use environment variables to configure this `cloudinary` instance.
     * @return This {Cloudinary} instance for chaining.
     */


    this.fromEnvironment = function () {
      configuration.fromEnvironment();
      return this;
    };
    /**
     * Initializes the configuration of this `cloudinary` instance.
     *  This is a convenience method that invokes both {@link Configuration#fromEnvironment|fromEnvironment()}
     *  (Node.js environment only) and {@link Configuration#fromDocument|fromDocument()}.
     *  It first tries to retrieve the configuration from the environment variable.
     *  If not available, it tries from the document meta tags.
     * @function Cloudinary#init
     * @see Configuration#init
     * @return This {Cloudinary} instance for chaining.
     */


    this.init = function () {
      configuration.init();
      return this;
    };
  }
  /**
   * Convenience constructor
   * @param {Object} options
   * @return {Cloudinary}
   * @example cl = cloudinary.Cloudinary.new( { cloud_name: "mycloud"})
   */


  cloudinary_createClass(Cloudinary, [{
    key: "url",

    /**
     * Generates a URL for any asset in your Media library.
     * @function Cloudinary#url
     * @param {string} publicId - The public ID of the media asset.
     * @param {Object} [options] - The {@link Transformation} parameters to include in the URL.
     * @param {type} [options.type='upload'] - The asset's storage type.
     *  For details on all fetch types, see
     * <a href="https://cloudinary.com/documentation/image_transformations#fetching_images_from_remote_locations"
     *  target="_blank">Fetch types</a>.
     * @param {resourceType} [options.resource_type='image'] - The type of asset. Possible values:<br/>
     *  - `image`<br/>
     *  - `video`<br/>
     *  - `raw`
     * @return {string} The media asset URL.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
     *  Available video transformations</a>
     */
    value: function url(publicId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return url_url(publicId, options, this.config());
    }
    /**
     * Generates a video asset URL.
     * @function Cloudinary#video_url
     * @param {string} publicId - The public ID of the video.
     * @param {Object} [options] - The {@link Transformation} parameters to include in the URL.
     * @param {type} [options.type='upload'] - The asset's storage type.
     *  For details on all fetch types, see
     *  <a href="https://cloudinary.com/documentation/image_transformations#fetching_images_from_remote_locations"
     *  target="_blank">Fetch types</a>.
     * @return {string} The video URL.
     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference"
     *  target="_blank">Available video transformations</a>
     */

  }, {
    key: "video_url",
    value: function video_url(publicId, options) {
      options = assign_root_assign_default()({
        resource_type: 'video'
      }, options);
      return this.url(publicId, options);
    }
    /**
     * Generates a URL for an image intended to be used as a thumbnail for the specified video.
     *  Identical to {@link Cloudinary#url|url}, except that the `resource_type` is `video`
     *  and the default `format` is `jpg`.
     * @function Cloudinary#video_thumbnail_url
     * @param {string} publicId -  The unique identifier of the video from which you want to generate a thumbnail image.
     * @param {Object} [options] - The image {@link Transformation} parameters to apply to the thumbnail.
     * In addition to standard image transformations, you can also use the `start_offset` transformation parameter
     * to instruct Cloudinary to generate the thumbnail from a frame other than the middle frame of the video.
     * For details, see
     * <a href="https://cloudinary.com/documentation/video_manipulation_and_delivery#generating_video_thumbnails"
     * target="_blank">Generating video thumbnails</a> in the Cloudinary documentation.
     * @param {type} [options.type='upload'] - The asset's storage type.
     * @return {string} The URL of the video thumbnail image.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     */

  }, {
    key: "video_thumbnail_url",
    value: function video_thumbnail_url(publicId, options) {
      options = assign_root_assign_default()({}, DEFAULT_POSTER_OPTIONS, options);
      return this.url(publicId, options);
    }
    /**
     * Generates a string representation of the specified transformation options.
     * @function Cloudinary#transformation_string
     * @param {Object} options - The {@link Transformation} options.
     * @returns {string} The transformation string.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
     *  Available video transformations</a>
     */

  }, {
    key: "transformation_string",
    value: function transformation_string(options) {
      return new src_transformation(options).serialize();
    }
    /**
     * Generates an image tag.
     * @function Cloudinary#image
     * @param {string} publicId - The public ID of the image.
     * @param {Object} options - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {HTMLImageElement} An image tag DOM element.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "image",
    value: function image(publicId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var client_hints, img, ref;
      img = this.imageTag(publicId, options);
      client_hints = (ref = options.client_hints != null ? options.client_hints : this.config('client_hints')) != null ? ref : false;

      if (options.src == null && !client_hints) {
        // src must be removed before creating the DOM element to avoid loading the image
        img.setAttr("src", '');
      }

      img = img.toDOM();

      if (!client_hints) {
        // cache the image src
        lodash_setData(img, 'src-cache', this.url(publicId, options)); // set image src taking responsiveness in account

        this.cloudinary_update(img, options);
      }

      return img;
    }
    /**
     * Creates a new ImageTag instance using the configuration defined for this `cloudinary` instance.
     * @function Cloudinary#imageTag
     * @param {string} publicId - The public ID of the image.
     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {ImageTag} An ImageTag instance that is attached (chained) to this Cloudinary instance.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "imageTag",
    value: function imageTag(publicId, options) {
      var tag;
      tag = new imagetag(publicId, this.config());
      tag.transformation().fromOptions(options);
      return tag;
    }
    /**
     * Creates a new PictureTag instance, configured using this `cloudinary` instance.
     * @function Cloudinary#PictureTag
     * @param {string} publicId - the public ID of the resource
     * @param {Object} options - additional options to pass to the new ImageTag instance
     * @return {PictureTag} A PictureTag that is attached (chained) to this Cloudinary instance
     */

  }, {
    key: "pictureTag",
    value: function pictureTag(publicId, options) {
      var tag;
      tag = new picturetag(publicId, this.config());
      tag.transformation().fromOptions(options);
      return tag;
    }
    /**
     * Creates a new SourceTag instance, configured using this `cloudinary` instance.
     * @function Cloudinary#SourceTag
     * @param {string} publicId - the public ID of the resource.
     * @param {Object} options - additional options to pass to the new instance.
     * @return {SourceTag} A SourceTag that is attached (chained) to this Cloudinary instance
     */

  }, {
    key: "sourceTag",
    value: function sourceTag(publicId, options) {
      var tag;
      tag = new sourcetag(publicId, this.config());
      tag.transformation().fromOptions(options);
      return tag;
    }
    /**
     * Generates a video thumbnail URL from the specified remote video and includes it in an image tag.
     * @function Cloudinary#video_thumbnail
     * @param {string} publicId - The unique identifier of the video from the relevant video site.
     *  Additionally, either append the image extension type to the identifier value or set
     *  the image delivery format in the 'options' parameter using the 'format' transformation option.
     *  For example, a YouTube video might have the identifier: 'o-urnlaJpOA.jpg'.
     * @param {Object} [options] - The {@link Transformation} parameters to apply.
     * @return {HTMLImageElement} An HTML image tag element
     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
     *  Available video transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "video_thumbnail",
    value: function video_thumbnail(publicId, options) {
      return this.image(publicId, merge_root_merge_default()({}, DEFAULT_POSTER_OPTIONS, options));
    }
    /**
     * Fetches a facebook profile image and delivers it in an image tag element.
     * @function Cloudinary#facebook_profile_image
     * @param {string} publicId - The Facebook numeric ID. Additionally, either append the image extension type
     *  to the ID or set the image delivery format in the 'options' parameter using the 'format' transformation option.
     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {HTMLImageElement} An image tag element.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "facebook_profile_image",
    value: function facebook_profile_image(publicId, options) {
      return this.image(publicId, assign_root_assign_default()({
        type: 'facebook'
      }, options));
    }
    /**
     * Fetches a Twitter profile image by ID and delivers it in an image tag element.
     * @function Cloudinary#twitter_profile_image
     * @param {string} publicId - The Twitter numeric ID. Additionally, either append the image extension type
     *  to the ID or set the image delivery format in the 'options' parameter using the 'format' transformation option.
     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {HTMLImageElement} An image tag element.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "twitter_profile_image",
    value: function twitter_profile_image(publicId, options) {
      return this.image(publicId, assign_root_assign_default()({
        type: 'twitter'
      }, options));
    }
    /**
     * Fetches a Twitter profile image by name and delivers it in an image tag element.
     * @function Cloudinary#twitter_name_profile_image
     * @param {string} publicId - The Twitter screen name. Additionally, either append the image extension type
     *  to the screen name or set the image delivery format in the 'options' parameter using the 'format' transformation option.
     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {HTMLImageElement} An image tag element.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "twitter_name_profile_image",
    value: function twitter_name_profile_image(publicId, options) {
      return this.image(publicId, assign_root_assign_default()({
        type: 'twitter_name'
      }, options));
    }
    /**
     * Fetches a Gravatar profile image and delivers it in an image tag element.
     * @function Cloudinary#gravatar_image
     * @param {string} publicId - The calculated hash for the Gravatar email address.
     *  Additionally, either append the image extension type to the screen name or set the image delivery format
     *  in the 'options' parameter using the 'format' transformation option.
     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {HTMLImageElement} An image tag element.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "gravatar_image",
    value: function gravatar_image(publicId, options) {
      return this.image(publicId, assign_root_assign_default()({
        type: 'gravatar'
      }, options));
    }
    /**
     * Fetches an image from a remote URL and delivers it in an image tag element.
     * @function Cloudinary#fetch_image
     * @param {string} publicId - The full URL of the image to fetch, including the extension.
     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {HTMLImageElement} An image tag element.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "fetch_image",
    value: function fetch_image(publicId, options) {
      return this.image(publicId, assign_root_assign_default()({
        type: 'fetch'
      }, options));
    }
    /**
     * Generates a video tag.
     * @function Cloudinary#video
     * @param {string} publicId - The public ID of the video.
     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {HTMLVideoElement} A video tag DOM element.
     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
     *  Available video transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "video",
    value: function video(publicId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.videoTag(publicId, options).toHtml();
    }
    /**
     * Creates a new VideoTag instance using the configuration defined for this `cloudinary` instance.
     * @function Cloudinary#videoTag
     * @param {string} publicId - The public ID of the video.
     * @param {Object} options - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {VideoTag} A VideoTag that is attached (chained) to this `cloudinary` instance.
     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
     *  Available video transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "videoTag",
    value: function videoTag(publicId, options) {
      options = defaults({}, options, this.config());
      return new videotag(publicId, options);
    }
    /**
     * Generates a sprite PNG image that contains all images with the specified tag and the corresponding css file.
     * @function Cloudinary#sprite_css
     * @param {string} publicId - The tag on which to base the sprite image.
     * @param {Object} [options] - The {@link Transformation} parameters to include in the URL.
     * @return {string} The URL of the generated CSS file. The sprite image has the same URL, but with a PNG extension.
     * @see <a href="https://cloudinary.com/documentation/sprite_generation" target="_blank">
     *  Sprite generation</a>
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     */

  }, {
    key: "sprite_css",
    value: function sprite_css(publicId, options) {
      options = assign_root_assign_default()({
        type: 'sprite'
      }, options);

      if (!publicId.match(/.css$/)) {
        options.format = 'css';
      }

      return this.url(publicId, options);
    }
    /**
     * Initializes responsive image behavior for all image tags with the 'cld-responsive'
     *  (or other defined {@link Cloudinary#responsive|responsive} class).<br/>
     *  This method should be invoked after the page has loaded.<br/>
     *  <b>Note</b>: Calls {@link Cloudinary#cloudinary_update|cloudinary_update} to modify image tags.
     * @function Cloudinary#responsive
     * @param {Object} options
     * @param {String} [options.responsive_class='cld-responsive'] - An alternative class
     *  to locate the relevant &lt;img&gt; tags.
     * @param {number} [options.responsive_debounce=100] - The debounce interval in milliseconds.
     * @param {boolean} [bootstrap=true] If true, processes the &lt;img&gt; tags by calling
     *  {@link Cloudinary#cloudinary_update|cloudinary_update}. When false, the tags are processed
     *  only after a resize event.
     * @see {@link Cloudinary#cloudinary_update|cloudinary_update} for additional configuration parameters
     * @see <a href="https://cloudinary.com/documentation/responsive_images#automating_responsive_images_with_javascript"
     *  target="_blank">Automating responsive images with JavaScript</a>
     * @return {function} that when called, removes the resize EventListener added by this function
     */

  }, {
    key: "responsive",
    value: function responsive(options) {
      var _this = this;

      var bootstrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var ref, ref1, ref2, responsiveClass, responsiveResize, timeout;
      this.responsiveConfig = merge_root_merge_default()(this.responsiveConfig || {}, options);
      responsiveClass = (ref = this.responsiveConfig.responsive_class) != null ? ref : this.config('responsive_class');

      if (bootstrap) {
        this.cloudinary_update("img.".concat(responsiveClass, ", img.cld-hidpi"), this.responsiveConfig);
      }

      responsiveResize = (ref1 = (ref2 = this.responsiveConfig.responsive_resize) != null ? ref2 : this.config('responsive_resize')) != null ? ref1 : true;

      if (responsiveResize && !this.responsiveResizeInitialized) {
        this.responsiveConfig.resizing = this.responsiveResizeInitialized = true;
        timeout = null;

        var makeResponsive = function makeResponsive() {
          var debounce, ref3, ref4, reset, run, wait, waitFunc;
          debounce = (ref3 = (ref4 = _this.responsiveConfig.responsive_debounce) != null ? ref4 : _this.config('responsive_debounce')) != null ? ref3 : 100;

          reset = function reset() {
            if (timeout) {
              clearTimeout(timeout);
              timeout = null;
            }
          };

          run = function run() {
            return _this.cloudinary_update("img.".concat(responsiveClass), _this.responsiveConfig);
          };

          waitFunc = function waitFunc() {
            reset();
            return run();
          };

          wait = function wait() {
            reset();
            timeout = setTimeout(waitFunc, debounce);
          };

          if (debounce) {
            return wait();
          } else {
            return run();
          }
        };

        window.addEventListener('resize', makeResponsive);
        return function () {
          return window.removeEventListener('resize', makeResponsive);
        };
      }
    }
    /**
     * @function Cloudinary#calc_breakpoint
     * @private
     * @ignore
     */

  }, {
    key: "calc_breakpoint",
    value: function calc_breakpoint(element, width, steps) {
      var breakpoints = lodash_getData(element, 'breakpoints') || lodash_getData(element, 'stoppoints') || this.config('breakpoints') || this.config('stoppoints') || defaultBreakpoints;

      if (isFunction_root_isFunction_default()(breakpoints)) {
        return breakpoints(width, steps);
      } else {
        if (isString_root_isString_default()(breakpoints)) {
          breakpoints = breakpoints.split(',').map(function (point) {
            return parseInt(point);
          }).sort(function (a, b) {
            return a - b;
          });
        }

        return closestAbove(breakpoints, width);
      }
    }
    /**
     * @function Cloudinary#calc_stoppoint
     * @deprecated Use {@link calc_breakpoint} instead.
     * @private
     * @ignore
     */

  }, {
    key: "calc_stoppoint",
    value: function calc_stoppoint(element, width, steps) {
      return this.calc_breakpoint(element, width, steps);
    }
    /**
     * @function Cloudinary#device_pixel_ratio
     * @private
     */

  }, {
    key: "device_pixel_ratio",
    value: function device_pixel_ratio(roundDpr) {
      roundDpr = roundDpr == null ? true : roundDpr;
      var dpr = (typeof window !== "undefined" && window !== null ? window.devicePixelRatio : void 0) || 1;

      if (roundDpr) {
        dpr = Math.ceil(dpr);
      }

      if (dpr <= 0 || dpr === 0 / 0) {
        dpr = 1;
      }

      var dprString = dpr.toString();

      if (dprString.match(/^\d+$/)) {
        dprString += '.0';
      }

      return dprString;
    }
    /**
    * Applies responsiveness to all <code>&lt;img&gt;</code> tags under each relevant node
    *  (regardless of whether the tag contains the {@link Cloudinary#responsive|responsive} class).
    * @param {Element[]} nodes The parent nodes where you want to search for &lt;img&gt; tags.
    * @param {Object} [options] The {@link Cloudinary#cloudinary_update|cloudinary_update} options to apply.
    * @see <a href="https://cloudinary.com/documentation/image_transformation_reference"
    *  target="_blank">Available image transformations</a>
    * @function Cloudinary#processImageTags
    */

  }, {
    key: "processImageTags",
    value: function processImageTags(nodes, options) {
      if (isEmpty(nodes)) {
        // similar to `$.fn.cloudinary`
        return this;
      }

      options = defaults({}, options || {}, this.config());
      var images = nodes.filter(function (node) {
        return /^img$/i.test(node.tagName);
      }).map(function (node) {
        var imgOptions = assign_root_assign_default()({
          width: node.getAttribute('width'),
          height: node.getAttribute('height'),
          src: node.getAttribute('src')
        }, options);
        var publicId = imgOptions['source'] || imgOptions['src'];
        delete imgOptions['source'];
        delete imgOptions['src'];
        var attr = new src_transformation(imgOptions).toHtmlAttributes();
        lodash_setData(node, 'src-cache', url_url(publicId, imgOptions));
        node.setAttribute('width', attr.width);
        node.setAttribute('height', attr.height);
        return node;
      });
      this.cloudinary_update(images, options);
      return this;
    }
    /**
    * Updates the dpr (for `dpr_auto`) and responsive (for `w_auto`) fields according to
    *  the current container size and the device pixel ratio.<br/>
    *  <b>Note</b>:`w_auto` is updated only for images marked with the `cld-responsive`
    *  (or other defined {@link Cloudinary#responsive|responsive}) class.
    * @function Cloudinary#cloudinary_update
    * @param {(Array|string|NodeList)} elements - The HTML image elements to modify.
    * @param {Object} options
    * @param {boolean|string} [options.responsive_use_breakpoints=true]
    * Possible values:<br/>
    *  - `true`: Always use breakpoints for width.<br/>
    *  - `resize`: Use exact width on first render and breakpoints on resize.<br/>
    *  - `false`: Always use exact width.
    * @param {boolean} [options.responsive] - If `true`, enable responsive on all specified elements.
    *  Alternatively, you can define specific HTML elements to modify by adding the `cld-responsive`
    *  (or other custom-defined {@link Cloudinary#responsive|responsive_class}) class to those elements.
    * @param {boolean} [options.responsive_preserve_height] - If `true`, original css height is preserved.
    *  Should be used only if the transformation supports different aspect ratios.
    */

  }, {
    key: "cloudinary_update",
    value: function cloudinary_update(elements, options) {
      var _this2 = this;

      var containerWidth, dataSrc, match, ref4, requiredWidth;

      if (elements === null) {
        return this;
      }

      if (options == null) {
        options = {};
      }

      var responsive = options.responsive != null ? options.responsive : this.config('responsive');
      elements = normalizeToArray(elements);
      var responsiveClass;

      if (this.responsiveConfig && this.responsiveConfig.responsive_class != null) {
        responsiveClass = this.responsiveConfig.responsive_class;
      } else if (options.responsive_class != null) {
        responsiveClass = options.responsive_class;
      } else {
        responsiveClass = this.config('responsive_class');
      }

      var roundDpr = options.round_dpr != null ? options.round_dpr : this.config('round_dpr');
      elements.forEach(function (tag) {
        if (/img/i.test(tag.tagName)) {
          var setUrl = true;

          if (responsive) {
            lodash_addClass(tag, responsiveClass);
          }

          dataSrc = lodash_getData(tag, 'src-cache') || lodash_getData(tag, 'src');

          if (!isEmpty(dataSrc)) {
            // Update dpr according to the device's devicePixelRatio
            dataSrc = updateDpr.call(_this2, dataSrc, roundDpr);

            if (htmltag.isResponsive(tag, responsiveClass)) {
              containerWidth = cloudinary_findContainerWidth(tag);

              if (containerWidth !== 0) {
                switch (false) {
                  case !/w_auto:breakpoints/.test(dataSrc):
                    requiredWidth = cloudinary_maxWidth(containerWidth, tag);
                    dataSrc = dataSrc.replace(/w_auto:breakpoints([_0-9]*)(:[0-9]+)?/, "w_auto:breakpoints$1:".concat(requiredWidth));
                    break;

                  case !(match = /w_auto(:(\d+))?/.exec(dataSrc)):
                    requiredWidth = applyBreakpoints.call(_this2, tag, containerWidth, match[2], options);
                    requiredWidth = cloudinary_maxWidth(requiredWidth, tag);
                    dataSrc = dataSrc.replace(/w_auto[^,\/]*/g, "w_".concat(requiredWidth));
                }

                lodash_removeAttribute(tag, 'width');

                if (!options.responsive_preserve_height) {
                  lodash_removeAttribute(tag, 'height');
                }
              } else {
                // Container doesn't know the size yet - usually because the image is hidden or outside the DOM.
                setUrl = false;
              }
            }

            var isLazyLoading = options.loading === 'lazy' && !_this2.isNativeLazyLoadSupported() && _this2.isLazyLoadSupported() && !elements[0].getAttribute('src');

            if (setUrl || isLazyLoading) {
              // If data-width exists, set width to be data-width
              _this2.setAttributeIfExists(elements[0], 'width', 'data-width');
            }

            if (setUrl && !isLazyLoading) {
              lodash_setAttribute(tag, 'src', dataSrc);
            }
          }
        }
      });
      return this;
    }
    /**
     * Sets element[toAttribute] = element[fromAttribute] if element[fromAttribute] is set
     * @param element
     * @param toAttribute
     * @param fromAttribute
     */

  }, {
    key: "setAttributeIfExists",
    value: function setAttributeIfExists(element, toAttribute, fromAttribute) {
      var attributeValue = element.getAttribute(fromAttribute);

      if (attributeValue != null) {
        lodash_setAttribute(element, toAttribute, attributeValue);
      }
    }
    /**
     * Returns true if Intersection Observer API is supported
     * @returns {boolean}
     */

  }, {
    key: "isLazyLoadSupported",
    value: function isLazyLoadSupported() {
      return window && 'IntersectionObserver' in window;
    }
    /**
     * Returns true if using Chrome
     * @returns {boolean}
     */

  }, {
    key: "isNativeLazyLoadSupported",
    value: function isNativeLazyLoadSupported() {
      return 'loading' in HTMLImageElement.prototype;
    }
    /**
     * Returns a {@link Transformation} object, initialized with the specified options, for chaining purposes.
     * @function Cloudinary#transformation
     * @param {Object} options The {@link Transformation} options to apply.
     * @return {Transformation}
     * @see Transformation
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
     *  Available video transformations</a>
     */

  }, {
    key: "transformation",
    value: function transformation(options) {
      return src_transformation["new"](this.config()).fromOptions(options).setParent(this);
    }
    /**
     * @description This function will append a TransparentVideo element to the htmlElContainer passed to it.
     *              TransparentVideo can either be an HTML Video tag, or an HTML Canvas Tag.
     * @param {HTMLElement} htmlElContainer
     * @param {string} publicId
     * @param {object} options The {@link TransparentVideoOptions} options to apply - Extends TransformationOptions
     *                 options.playsinline    - HTML Video Tag's native playsinline - passed to video element.
     *                 options.poster         - HTML Video Tag's native poster - passed to video element.
     *                 options.loop           - HTML Video Tag's native loop - passed to video element.
     *                 options?.externalLibraries = { [key: string]: string} - map of external libraries to be loaded
     * @return {Promise<HTMLElement | {status:string, message:string}>}
     */

  }, {
    key: "injectTransparentVideoElement",
    value: function injectTransparentVideoElement(htmlElContainer, publicId) {
      var _this3 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        if (!htmlElContainer) {
          reject({
            status: 'error',
            message: 'Expecting htmlElContainer to be HTMLElement'
          });
        }

        transparentVideo_enforceOptionsForTransparentVideo(options);

        var videoURL = _this3.video_url(publicId, options);

        transparentVideo_checkSupportForTransparency().then(function (isNativelyTransparent) {
          var mountPromise;

          if (isNativelyTransparent) {
            mountPromise = transparentVideo_mountCloudinaryVideoTag(htmlElContainer, _this3, publicId, options);
            resolve(htmlElContainer);
          } else {
            mountPromise = transparentVideo_mountSeeThruCanvasTag(htmlElContainer, videoURL, options);
          }

          mountPromise.then(function () {
            resolve(htmlElContainer);
          })["catch"](function (_ref) {
            var status = _ref.status,
                message = _ref.message;
            reject({
              status: status,
              message: message
            });
          }); // catch for checkSupportForTransparency()
        })["catch"](function (_ref2) {
          var status = _ref2.status,
              message = _ref2.message;
          reject({
            status: status,
            message: message
          });
        });
      });
    }
  }], [{
    key: "new",
    value: function _new(options) {
      return new this(options);
    }
  }]);

  return Cloudinary;
}();

assign_root_assign_default()(cloudinary_Cloudinary, constants_namespaceObject);
/* harmony default export */ var cloudinary = (cloudinary_Cloudinary);
// CONCATENATED MODULE: ./src/namespace/cloudinary-core.js
/**
 * Creates the namespace for Cloudinary
 */
















/* harmony default export */ var cloudinary_core = __webpack_exports__["default"] = ({
  ClientHintsMetaTag: clienthintsmetatag,
  Cloudinary: cloudinary,
  Condition: condition,
  Configuration: src_configuration,
  crc32: src_crc32,
  FetchLayer: fetchlayer,
  HtmlTag: htmltag,
  ImageTag: imagetag,
  Layer: layer_layer,
  PictureTag: picturetag,
  SubtitlesLayer: subtitleslayer,
  TextLayer: textlayer,
  Transformation: src_transformation,
  utf8_encode: src_utf8_encode,
  Util: lodash_namespaceObject,
  VideoTag: videotag
});


/***/ }),

/***/ "lodash/assign":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_assign__;

/***/ }),

/***/ "lodash/cloneDeep":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_cloneDeep__;

/***/ }),

/***/ "lodash/compact":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_compact__;

/***/ }),

/***/ "lodash/difference":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_difference__;

/***/ }),

/***/ "lodash/functions":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_functions__;

/***/ }),

/***/ "lodash/identity":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_identity__;

/***/ }),

/***/ "lodash/includes":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_includes__;

/***/ }),

/***/ "lodash/isArray":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isArray__;

/***/ }),

/***/ "lodash/isElement":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isElement__;

/***/ }),

/***/ "lodash/isFunction":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isFunction__;

/***/ }),

/***/ "lodash/isPlainObject":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isPlainObject__;

/***/ }),

/***/ "lodash/isString":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isString__;

/***/ }),

/***/ "lodash/merge":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_merge__;

/***/ }),

/***/ "lodash/trim":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_trim__;

/***/ })

/******/ });
});
//# sourceMappingURL=cloudinary-core.js.map

/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludes.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayIncludes.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludesWith.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash/_arrayIncludesWith.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_asciiToArray.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_asciiToArray.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),

/***/ "./node_modules/lodash/_assignMergeValue.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_assignMergeValue.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssign.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseAssign.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseAssignIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseClone.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ "./node_modules/lodash/_baseAssign.js"),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ "./node_modules/lodash/_baseAssignIn.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ "./node_modules/lodash/_copySymbols.js"),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ "./node_modules/lodash/_copySymbolsIn.js"),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ "./node_modules/lodash/_initCloneArray.js"),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ "./node_modules/lodash/_initCloneByTag.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isMap = __webpack_require__(/*! ./isMap */ "./node_modules/lodash/isMap.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSet = __webpack_require__(/*! ./isSet */ "./node_modules/lodash/isSet.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseDifference.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseDifference.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "./node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ "./node_modules/lodash/_arrayIncludesWith.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "./node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseFunctions.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFunctions.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js");

/**
 * The base implementation of `_.functions` which creates an array of
 * `object` function property names filtered from `props`.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Array} props The property names to filter.
 * @returns {Array} Returns the function names.
 */
function baseFunctions(object, props) {
  return arrayFilter(props, function(key) {
    return isFunction(object[key]);
  });
}

module.exports = baseFunctions;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIndexOf.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIndexOf.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/lodash/_baseFindIndex.js"),
    baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ "./node_modules/lodash/_baseIsNaN.js"),
    strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ "./node_modules/lodash/_strictIndexOf.js");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMap.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsMap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNaN.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsNaN.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseMerge.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseMerge.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ "./node_modules/lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ "./node_modules/lodash/_baseMergeDeep.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseMergeDeep.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js"),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ "./node_modules/lodash/toPlainObject.js");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_baseValues.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseValues.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js");

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_castSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(/*! ./_baseSlice */ "./node_modules/lodash/_baseSlice.js");

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),

/***/ "./node_modules/lodash/_charsEndIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_charsEndIndex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/lodash/_baseIndexOf.js");

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the last unmatched string symbol.
 */
function charsEndIndex(strSymbols, chrSymbols) {
  var index = strSymbols.length;

  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

module.exports = charsEndIndex;


/***/ }),

/***/ "./node_modules/lodash/_charsStartIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_charsStartIndex.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/lodash/_baseIndexOf.js");

/**
 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the first unmatched string symbol.
 */
function charsStartIndex(strSymbols, chrSymbols) {
  var index = -1,
      length = strSymbols.length;

  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

module.exports = charsStartIndex;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_cloneDataView.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_cloneDataView.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "./node_modules/lodash/_cloneRegExp.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneRegExp.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "./node_modules/lodash/_cloneSymbol.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneSymbol.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_copySymbols.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_copySymbols.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "./node_modules/lodash/_copySymbolsIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_copySymbolsIn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasUnicode.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hasUnicode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "./node_modules/lodash/_initCloneByTag.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneByTag.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js"),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ "./node_modules/lodash/_cloneDataView.js"),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "./node_modules/lodash/_cloneRegExp.js"),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ "./node_modules/lodash/_cloneSymbol.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_safeGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_safeGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_strictIndexOf.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_strictIndexOf.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_stringToArray.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_stringToArray.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(/*! ./_asciiToArray */ "./node_modules/lodash/_asciiToArray.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    unicodeToArray = __webpack_require__(/*! ./_unicodeToArray */ "./node_modules/lodash/_unicodeToArray.js");

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/_unicodeToArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_unicodeToArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),

/***/ "./node_modules/lodash/assign.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/assign.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),

/***/ "./node_modules/lodash/cloneDeep.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/cloneDeep.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ "./node_modules/lodash/compact.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/compact.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact(array) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = compact;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/difference.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/difference.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(/*! ./_baseDifference */ "./node_modules/lodash/_baseDifference.js"),
    baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js"),
    baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js");

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

module.exports = difference;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/functions.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/functions.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFunctions = __webpack_require__(/*! ./_baseFunctions */ "./node_modules/lodash/_baseFunctions.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of function property names from own enumerable properties
 * of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns the function names.
 * @see _.functionsIn
 * @example
 *
 * function Foo() {
 *   this.a = _.constant('a');
 *   this.b = _.constant('b');
 * }
 *
 * Foo.prototype.c = _.constant('c');
 *
 * _.functions(new Foo);
 * // => ['a', 'b']
 */
function functions(object) {
  return object == null ? [] : baseFunctions(object, keys(object));
}

module.exports = functions;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/includes.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/includes.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/lodash/_baseIndexOf.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isString = __webpack_require__(/*! ./isString */ "./node_modules/lodash/isString.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js"),
    values = __webpack_require__(/*! ./values */ "./node_modules/lodash/values.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

module.exports = includes;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isElement.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/isElement.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js");

/**
 * Checks if `value` is likely a DOM element.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
 * @example
 *
 * _.isElement(document.body);
 * // => true
 *
 * _.isElement('<body>');
 * // => false
 */
function isElement(value) {
  return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
}

module.exports = isElement;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isMap.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isMap.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ "./node_modules/lodash/_baseIsMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "./node_modules/lodash/isSet.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isSet.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ "./node_modules/lodash/_baseIsSet.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "./node_modules/lodash/isString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/merge.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/merge.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "./node_modules/lodash/_baseMerge.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js");

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/lodash/toPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/toPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/lodash/trim.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/trim.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js"),
    castSlice = __webpack_require__(/*! ./_castSlice */ "./node_modules/lodash/_castSlice.js"),
    charsEndIndex = __webpack_require__(/*! ./_charsEndIndex */ "./node_modules/lodash/_charsEndIndex.js"),
    charsStartIndex = __webpack_require__(/*! ./_charsStartIndex */ "./node_modules/lodash/_charsStartIndex.js"),
    stringToArray = __webpack_require__(/*! ./_stringToArray */ "./node_modules/lodash/_stringToArray.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */
function trim(string, chars, guard) {
  string = toString(string);
  if (string && (guard || chars === undefined)) {
    return string.replace(reTrim, '');
  }
  if (!string || !(chars = baseToString(chars))) {
    return string;
  }
  var strSymbols = stringToArray(string),
      chrSymbols = stringToArray(chars),
      start = charsStartIndex(strSymbols, chrSymbols),
      end = charsEndIndex(strSymbols, chrSymbols) + 1;

  return castSlice(strSymbols, start, end).join('');
}

module.exports = trim;


/***/ }),

/***/ "./node_modules/lodash/values.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/values.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__(/*! ./_baseValues */ "./node_modules/lodash/_baseValues.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/auth/forgot/forgot.component.ts");







const routes = [
    {
        path: "",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
    },
    {
        path: "register",
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
    },
    {
        path: "forgot",
        component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_4__["ForgotComponent"],
    },
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "**", redirectTo: "login" },
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm2015/ng2-smart-table.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/__ivy_ngcc__/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @cloudinary/angular-5.x */ "./node_modules/@cloudinary/angular-5.x/__ivy_ngcc__/fesm2015/cloudinary-angular-5.x.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
/* harmony import */ var cloudinary_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! cloudinary-core */ "./node_modules/cloudinary-core/cloudinary-core.js");
/* harmony import */ var cloudinary_core__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(cloudinary_core__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth/auth.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/auth/forgot/forgot.component.ts");





















class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, providers: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSpinnerService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDialogService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbRadioModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbLayoutModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbMenuModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbUserModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbActionsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSearchModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSidebarModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbContextMenuModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbIconModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_8__["NbEvaIconsModule"],
            _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_11__["CloudinaryModule"].forRoot(cloudinary_core__WEBPACK_IMPORTED_MODULE_13__, { cloud_name: "dkhfz1aco" }),
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__["FileUploadModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDialogModule"].forChild(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDatepickerModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbLayoutModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSidebarModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbActionsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbTabsetModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCheckboxModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCalendarModule"],
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["Ng2SmartTableModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbStepperModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSpinnerModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCalendarRangeModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbListModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbAccordionModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbBadgeModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbAlertModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbTreeGridModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbUserModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbContextMenuModule"],
            angular2_chartjs__WEBPACK_IMPORTED_MODULE_10__["ChartModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        _auth_auth_component__WEBPACK_IMPORTED_MODULE_14__["AuthComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
        _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_16__["ForgotComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
        _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbRadioModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbLayoutModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbMenuModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbUserModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbActionsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSearchModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSidebarModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbContextMenuModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSelectModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbIconModule"],
        _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_8__["NbEvaIconsModule"], _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_11__["CloudinaryModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__["FileUploadModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDialogModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDatepickerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbLayoutModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSidebarModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbActionsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSelectModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbTabsetModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCheckboxModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCalendarModule"],
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["Ng2SmartTableModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbStepperModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSpinnerModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCalendarRangeModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbListModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbAccordionModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbBadgeModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbAlertModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbTreeGridModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbUserModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbContextMenuModule"],
        angular2_chartjs__WEBPACK_IMPORTED_MODULE_10__["ChartModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                    _auth_auth_component__WEBPACK_IMPORTED_MODULE_14__["AuthComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                    _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_16__["ForgotComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
                    _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbRadioModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbLayoutModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbMenuModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbUserModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbActionsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSearchModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSidebarModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbContextMenuModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSelectModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbIconModule"],
                    _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_8__["NbEvaIconsModule"],
                    _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_11__["CloudinaryModule"].forRoot(cloudinary_core__WEBPACK_IMPORTED_MODULE_13__, { cloud_name: "dkhfz1aco" }),
                    ng2_file_upload__WEBPACK_IMPORTED_MODULE_12__["FileUploadModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDialogModule"].forChild(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDatepickerModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbLayoutModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSidebarModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbActionsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSelectModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbTabsetModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCheckboxModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCalendarModule"],
                    ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["Ng2SmartTableModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbStepperModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSpinnerModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCalendarRangeModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbListModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbAccordionModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbBadgeModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbAlertModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbTreeGridModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbUserModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbContextMenuModule"],
                    angular2_chartjs__WEBPACK_IMPORTED_MODULE_10__["ChartModule"],
                ],
                providers: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSpinnerService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDialogService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/auth/auth.component.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth/auth.component.ts ***!
  \*********************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AuthComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["ngx-auth"]], decls: 2, vars: 0, template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "auth works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/auth/forgot/forgot.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/forgot/forgot.component.ts ***!
  \*************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _public_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/services/auth.service */ "./src/app/public/services/auth.service.ts");
/* harmony import */ var _public_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/services/general.service */ "./src/app/public/services/general.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









function ForgotComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function ForgotComponent_ng_template_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function ForgotComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotComponent_ng_template_4_Template_nb_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ForgotComponent_ng_template_4_ng_container_4_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function ForgotComponent_ng_template_6_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A1Es necesario un correo electr\u00F3nico v\u00E1lido! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ForgotComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00BFOlvidaste tu clave?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u00A1No te preocupes! Ingresa tu correo electr\u00F3nico para contactarte. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Correo electr\u00F3nico:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgotComponent_ng_template_6_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.bin.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ForgotComponent_ng_template_6_p_11_Template, 2, 0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotComponent_ng_template_6_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Solicitar cambio de clave ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.bin.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.bin.email && ctx_r4.bin.email.length && ctx_r4.bin.email.includes("@") && _r8.invalid && (_r8.dirty || _r8.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx_r4.bin.email && ctx_r4.bin.email.length && ctx_r4.bin.email.includes("@")))("status", !(ctx_r4.bin.email && ctx_r4.bin.email.length && ctx_r4.bin.email.includes("@")) ? ctx_r4.primary - ctx_r4.transparent : ctx_r4.primary);
} }
class ForgotComponent {
    constructor(authService, generalService) {
        this.authService = authService;
        this.generalService = generalService;
        /** Binding */
        this.bin = {};
        this.loading = false;
        this.API_FORGOT = "users/forgot-password";
    }
    ngOnInit() { }
    // =================================
    // Metodos
    // ================================
    /**
     * Autenticacion de usuario
     */
    onSubmit() {
        if (!this.bin.email) {
            this.generalService.onIncomplete();
            return;
        }
        const user = {
            email: this.bin.email,
        };
        this.loading = true;
        const titulo = "Cambio de clave.";
        this.authService
            .post({ api: this.API_FORGOT, data: user })
            .then((response) => {
            this.loading = false;
            if (response) {
                this.generalService.showToastr({
                    title: "Correo enviado. Revisa la bandeja de entrada o de spam.",
                    message: `${this.bin.email}`,
                    status: "success",
                });
                this.bin = {};
            }
        });
    }
    /**
     * Olvido la contraseña
     */
    onLogin() {
        this.generalService.routerNavigateTo({ path: "/login" });
    }
}
/** API */
ForgotComponent.ROUTE = "login/forgot";
ForgotComponent.ɵfac = function ForgotComponent_Factory(t) { return new (t || ForgotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_public_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_public_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"])); };
ForgotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotComponent, selectors: [["ngx-forgot"]], decls: 8, vars: 2, consts: [["windowMode", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", "size", "xlarge", 1, "main-container", 3, "nbSpinner"], [4, "ngTemplateOutlet"], ["templateLogin", ""], ["mainFormTMPL", ""], ["icon", "arrow-back", "id", "back-btn", "status", "success", 3, "click"], [1, "d-flex", "justify-content-center"], ["id", "sub-container", 1, "p-2"], [1, "text-center"], ["id", "title", 1, "title"], ["id", "sub-title", 1, "sub-title"], [1, "form-control-group"], ["for", "input-email", 1, "label"], ["nbinput", "", "fullwidth", "", "name", "email", "id", "input-email", "pattern", ".+@.+\\..+", "placeholder", "correo@ejemplo.com", "fieldsize", "large", "autofocus", "", "required", "", "aria-invalid", "true", 1, "input-full-width", "size-large", "status-basic", "shape-rectangle", "ng-pristine", "ng-invalid", "nb-transition", "ng-touched", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["class", "caption status-danger ng-star-inserted mt-1", 4, "ngIf"], [1, "form-control-group", "form-input"], ["nbButton", "", "nbbutton", "", "fullwidth", "", "size", "large", "_nghost-dyt-c86", "", "aria-disabled", "true", "tabindex", "-1", "type", "submit", 1, "appearance-filled", "full-width", "size-large", "status-primary", "shape-rectangle", "btn-disabled", "nb-transition", 3, "disabled", "status", "click"], [1, "caption", "status-danger", "ng-star-inserted", "mt-1"]], template: function ForgotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ForgotComponent_ng_container_3_Template, 1, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ForgotComponent_ng_template_4_Template, 5, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ForgotComponent_ng_template_6_Template, 16, 4, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutColumnComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSpinnerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"]], styles: [".nb-theme-default   [_nghost-%COMP%]   .main-container[_ngcontent-%COMP%] {\n  min-height: 90vh;\n}\n.nb-theme-default   [_nghost-%COMP%]   .main-container[_ngcontent-%COMP%]   #back-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 34px;\n}\n.nb-theme-default   [_nghost-%COMP%]   .main-container[_ngcontent-%COMP%]   sub-container[_ngcontent-%COMP%] {\n  width: 560px;\n}\n.nb-theme-default   [_nghost-%COMP%]   .main-container[_ngcontent-%COMP%]   sub-container[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.nb-theme-default   [_nghost-%COMP%]   .main-container[_ngcontent-%COMP%]   sub-container[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%] {\n  color: #787878;\n}\n.nb-theme-default   [_nghost-%COMP%]   .main-container[_ngcontent-%COMP%]   sub-container[_ngcontent-%COMP%]   #sub-title[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\n.nb-theme-dark   [_nghost-%COMP%]   .main-container[_ngcontent-%COMP%] {\n  min-height: 90vh;\n}\n.nb-theme-dark   [_nghost-%COMP%]   .main-container[_ngcontent-%COMP%]   #back-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 34px;\n}\n.nb-theme-dark   [_nghost-%COMP%]   .main-container[_ngcontent-%COMP%]   sub-container[_ngcontent-%COMP%] {\n  width: 560px;\n}\n.nb-theme-dark   [_nghost-%COMP%]   .main-container[_ngcontent-%COMP%]   sub-container[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.nb-theme-dark   [_nghost-%COMP%]   .main-container[_ngcontent-%COMP%]   sub-container[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%] {\n  color: #787878;\n}\n.nb-theme-dark   [_nghost-%COMP%]   .main-container[_ngcontent-%COMP%]   sub-container[_ngcontent-%COMP%]   #sub-title[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\n.nb-theme-cosmic   [_nghost-%COMP%]   .main-container[_ngcontent-%COMP%] {\n  min-height: 90vh;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   .main-container[_ngcontent-%COMP%]   #back-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 34px;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   .main-container[_ngcontent-%COMP%]   sub-container[_ngcontent-%COMP%] {\n  width: 560px;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   .main-container[_ngcontent-%COMP%]   sub-container[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   .main-container[_ngcontent-%COMP%]   sub-container[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%] {\n  color: #787878;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   .main-container[_ngcontent-%COMP%]   sub-container[_ngcontent-%COMP%]   #sub-title[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\n.nb-theme-corporate   [_nghost-%COMP%]   .main-container[_ngcontent-%COMP%] {\n  min-height: 90vh;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   .main-container[_ngcontent-%COMP%]   #back-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 34px;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   .main-container[_ngcontent-%COMP%]   sub-container[_ngcontent-%COMP%] {\n  width: 560px;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   .main-container[_ngcontent-%COMP%]   sub-container[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   .main-container[_ngcontent-%COMP%]   sub-container[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%] {\n  color: #787878;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   .main-container[_ngcontent-%COMP%]   sub-container[_ngcontent-%COMP%]   #sub-title[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9mb3Jnb3QvQzpcXFVzZXJzXFxBbGVmeSB0cmFiYWphXFxEb2N1bWVudHNcXFBlcnNpbmdcXHBlcnNpbmctYWRtaW4vbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcZ2xvYmFsXFxfYnJlYWtwb2ludHMuc2NzcyIsInNyYy9hcHAvYXV0aC9mb3Jnb3QvQzpcXFVzZXJzXFxBbGVmeSB0cmFiYWphXFxEb2N1bWVudHNcXFBlcnNpbmdcXHBlcnNpbmctYWRtaW4vbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcX3RoZW1pbmcuc2NzcyIsInNyYy9hcHAvYXV0aC9mb3Jnb3QvQzpcXFVzZXJzXFxBbGVmeSB0cmFiYWphXFxEb2N1bWVudHNcXFBlcnNpbmdcXHBlcnNpbmctYWRtaW4vbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcY29yZVxcX21peGlucy5zY3NzIiwic3JjL2FwcC9hdXRoL2ZvcmdvdC9DOlxcVXNlcnNcXEFsZWZ5IHRyYWJhamFcXERvY3VtZW50c1xcUGVyc2luZ1xccGVyc2luZy1hZG1pbi9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxjb3JlXFxfZnVuY3Rpb25zLnNjc3MiLCJzcmMvYXBwL2F1dGgvZm9yZ290L0M6XFxVc2Vyc1xcQWxlZnkgdHJhYmFqYVxcRG9jdW1lbnRzXFxQZXJzaW5nXFxwZXJzaW5nLWFkbWluL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXGNvcmVcXF92YXJpYW50cy5zY3NzIiwic3JjL2FwcC9hdXRoL2ZvcmdvdC9DOlxcVXNlcnNcXEFsZWZ5IHRyYWJhamFcXERvY3VtZW50c1xcUGVyc2luZ1xccGVyc2luZy1hZG1pbi9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFx0aGVtZXNcXF9tYXBwaW5nLnNjc3MiLCJzcmMvYXBwL2F1dGgvZm9yZ290L0M6XFxVc2Vyc1xcQWxlZnkgdHJhYmFqYVxcRG9jdW1lbnRzXFxQZXJzaW5nXFxwZXJzaW5nLWFkbWluL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXGNvcmVcXHRoZW1pbmdcXF9yZWdpc3Rlci5zY3NzIiwic3JjL2FwcC9hdXRoL2ZvcmdvdC9DOlxcVXNlcnNcXEFsZWZ5IHRyYWJhamFcXERvY3VtZW50c1xcUGVyc2luZ1xccGVyc2luZy1hZG1pbi9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxjb3JlXFx0aGVtaW5nXFxfaW5zdGFsbC5zY3NzIiwic3JjL2FwcC9hdXRoL2ZvcmdvdC9DOlxcVXNlcnNcXEFsZWZ5IHRyYWJhamFcXERvY3VtZW50c1xcUGVyc2luZ1xccGVyc2luZy1hZG1pbi9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxjb3JlXFx0aGVtaW5nXFxfZ2V0LXZhbHVlLnNjc3MiLCJzcmMvYXBwL2F1dGgvZm9yZ290L0M6XFxVc2Vyc1xcQWxlZnkgdHJhYmFqYVxcRG9jdW1lbnRzXFxQZXJzaW5nXFxwZXJzaW5nLWFkbWluL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXHRoZW1lc1xcX2RlZmF1bHQuc2NzcyIsInNyYy9hcHAvYXV0aC9mb3Jnb3QvQzpcXFVzZXJzXFxBbGVmeSB0cmFiYWphXFxEb2N1bWVudHNcXFBlcnNpbmdcXHBlcnNpbmctYWRtaW4vbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcdGhlbWVzXFxfZGFyay5zY3NzIiwic3JjL2FwcC9hdXRoL2ZvcmdvdC9DOlxcVXNlcnNcXEFsZWZ5IHRyYWJhamFcXERvY3VtZW50c1xcUGVyc2luZ1xccGVyc2luZy1hZG1pbi9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFx0aGVtZXNcXF9jb3NtaWMuc2NzcyIsInNyYy9hcHAvYXV0aC9mb3Jnb3QvQzpcXFVzZXJzXFxBbGVmeSB0cmFiYWphXFxEb2N1bWVudHNcXFBlcnNpbmdcXHBlcnNpbmctYWRtaW4vbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcdGhlbWVzXFxfY29ycG9yYXRlLnNjc3MiLCJzcmMvYXBwL2F1dGgvZm9yZ290L0M6XFxVc2Vyc1xcQWxlZnkgdHJhYmFqYVxcRG9jdW1lbnRzXFxQZXJzaW5nXFxwZXJzaW5nLWFkbWluL3NyY1xcYXBwXFxhdXRoXFxmb3Jnb3RcXGZvcmdvdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9mb3Jnb3QvZm9yZ290LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FBTUE7OztFQUFBO0FDTkE7Ozs7RUFBQTtBQXdLQTs7OztFQUFBO0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QUNsTUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FDRUE7Ozs7RUFBQTtBQ0ZBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBTkFBOzs7O0VBQUE7QURBQTs7OztFQUFBO0FBd0tBOzs7O0VBQUE7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTtBUWxNQTs7OztFQUFBO0FQQUE7Ozs7RUFBQTtBREFBOzs7O0VBQUE7QUF3S0E7Ozs7RUFBQTtBQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FPbE1BOzs7O0VBQUE7QU5BQTs7OztFQUFBO0FEQUE7Ozs7RUFBQTtBQXdLQTs7OztFQUFBO0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QVNsTUE7Ozs7RUFBQTtBUkFBOzs7O0VBQUE7QURBQTs7OztFQUFBO0FBd0tBOzs7O0VBQUE7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTtBUWxNQTs7OztFQUFBO0FQQUE7Ozs7RUFBQTtBREFBOzs7O0VBQUE7QUF3S0E7Ozs7RUFBQTtBQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FPbE1BOzs7O0VBQUE7QU5BQTs7OztFQUFBO0FEQUE7Ozs7RUFBQTtBQXdLQTs7OztFQUFBO0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QVVsTUE7Ozs7RUFBQTtBVEFBOzs7O0VBQUE7QURBQTs7OztFQUFBO0FBd0tBOzs7O0VBQUE7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTtBT2xNQTs7OztFQUFBO0FOQUE7Ozs7RUFBQTtBREFBOzs7O0VBQUE7QUF3S0E7Ozs7RUFBQTtBQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FLdkhJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QU10RUY7RUFDRSxnQkFBQTtBQzB2Q0o7QUR4dkNJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUMwdkNOO0FEdnZDSTtFQUNFLFlBQUE7QUN5dkNOO0FEdnZDTTtFQUNFLGdCQUFBO0FDeXZDUjtBRHR2Q007RUFDRSxjQUFBO0FDd3ZDUjtBRHJ2Q007RUFDRSxzQkFBQTtBQ3V2Q1I7QVByc0NJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QU10RUY7RUFDRSxnQkFBQTtBQ2t5Q0o7QURoeUNJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNreUNOO0FEL3hDSTtFQUNFLFlBQUE7QUNpeUNOO0FEL3hDTTtFQUNFLGdCQUFBO0FDaXlDUjtBRDl4Q007RUFDRSxjQUFBO0FDZ3lDUjtBRDd4Q007RUFDRSxzQkFBQTtBQyt4Q1I7QVA3dUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QU10RUY7RUFDRSxnQkFBQTtBQzAwQ0o7QUR4MENJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUMwMENOO0FEdjBDSTtFQUNFLFlBQUE7QUN5MENOO0FEdjBDTTtFQUNFLGdCQUFBO0FDeTBDUjtBRHQwQ007RUFDRSxjQUFBO0FDdzBDUjtBRHIwQ007RUFDRSxzQkFBQTtBQ3UwQ1I7QVByeENJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QU10RUY7RUFDRSxnQkFBQTtBQ2szQ0o7QURoM0NJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNrM0NOO0FELzJDSTtFQUNFLFlBQUE7QUNpM0NOO0FELzJDTTtFQUNFLGdCQUFBO0FDaTNDUjtBRDkyQ007RUFDRSxjQUFBO0FDZzNDUjtBRDcyQ007RUFDRSxzQkFBQTtBQysyQ1IiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2ZvcmdvdC9mb3Jnb3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbiRncmlkLWNvbHVtbnM6IDEyICFkZWZhdWx0O1xuJGdyaWQtZ3V0dGVyLXdpZHRoLWJhc2U6IDI0cHggIWRlZmF1bHQ7XG4kZ3JpZC1ndXR0ZXItd2lkdGhzOiAoXG4gIHhzOiAkZ3JpZC1ndXR0ZXItd2lkdGgtYmFzZSxcbiAgc206ICRncmlkLWd1dHRlci13aWR0aC1iYXNlLFxuICBtZDogJGdyaWQtZ3V0dGVyLXdpZHRoLWJhc2UsXG4gIGxnOiAkZ3JpZC1ndXR0ZXItd2lkdGgtYmFzZSxcbiAgeGw6ICRncmlkLWd1dHRlci13aWR0aC1iYXNlXG4pICFkZWZhdWx0O1xuXG5cbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIHhzOiAwLFxuICBpczogNDAwcHgsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHgsXG4gIHh4bDogMTQwMHB4LFxuICB4eHhsOiAxNjAwcHhcbik7XG5cbiRjb250YWluZXItbWF4LXdpZHRoczogKFxuICBpczogMzgwcHgsXG4gIHNtOiA1NDBweCxcbiAgbWQ6IDcyMHB4LFxuICBsZzogOTYwcHgsXG4gIHhsOiAxMTQwcHgsXG4gIHh4bDogMTMyMHB4LFxuICB4eHhsOiAxNTAwcHhcbik7XG5cbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gMC4wMnB4LCBudWxsKTtcbn1cblxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuLypcbiAgRGVjbGFyZSB2YXJpYWJsZXMgYmVmb3JlIG1ha2luZyB0aGVtIGdsb2JhbC5cbiAgZGFydC1zYXNzIGRvZXNuJ3QgYWxsb3cgdG8gZGVjbGFyZSB2YXJpYWJsZSB3aXRoICFnbG9iYWwuXG4gKi9cbiRuYi1lbmFibGUtY3NzLWN1c3RvbS1wcm9wZXJ0aWVzOiBmYWxzZSAhZGVmYXVsdDtcbiRuYi1lbmFibGVkLXRoZW1lczogKCk7XG4kbmItdGhlbWVzOiAoKTtcbiRuYi10aGVtZS1wcm9jZXNzLW1vZGU6IG51bGw7XG4kbmItdGhlbWUtbmFtZTogJ2RlZmF1bHQnO1xuJG5iLXRoZW1lOiAoKTtcbiRuYi1wcm9jZXNzZWQtdGhlbWU6ICgpO1xuJG5iLXRoZW1lLWV4cG9ydC1tb2RlOiBmYWxzZSAhZGVmYXVsdDtcbiRuYi10aGVtZXMtZXhwb3J0OiAoKTtcblxuLy8gcHVibGljIHZhcmlhYmxlc1xuJG5iLWVuYWJsZS1jc3MtY3VzdG9tLXByb3BlcnRpZXM6IGZhbHNlICFnbG9iYWwgIWRlZmF1bHQ7XG4kbmItZW5hYmxlZC10aGVtZXM6ICgpICFnbG9iYWw7XG4kbmItdGhlbWVzOiAoKSAhZ2xvYmFsO1xuXG4vLyBwcml2YXRlIHZhcmlhYmxlc1xuJG5iLXRoZW1lLXByb2Nlc3MtbW9kZTogJ2xhenktcHJvY2VzcycgIWdsb2JhbDtcbiRuYi10aGVtZS1uYW1lOiBudWxsICFnbG9iYWw7XG4kbmItdGhlbWU6ICgpICFnbG9iYWw7XG4kbmItcHJvY2Vzc2VkLXRoZW1lOiAoKSAhZ2xvYmFsO1xuJG5iLXRoZW1lLWV4cG9ydC1tb2RlOiBmYWxzZSAhZ2xvYmFsICFkZWZhdWx0O1xuJG5iLXRoZW1lcy1leHBvcnQ6ICgpICFnbG9iYWw7XG5cbkBpbXBvcnQgJ2NvcmUvbWl4aW5zJztcbkBpbXBvcnQgJ2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJ2NvcmUvdmFyaWFudHMnO1xuQGltcG9ydCAnY29yZS90aGVtaW5nL3JlZ2lzdGVyJztcbkBpbXBvcnQgJ2NvcmUvdGhlbWluZy9pbnN0YWxsJztcbkBpbXBvcnQgJ2NvcmUvdGhlbWluZy9nZXQtdmFsdWUnO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AbWl4aW4gbmItc2Nyb2xsYmFycygkZmcsICRiZywgJHNpemUsICRib3JkZXItcmFkaXVzOiAkc2l6ZSAvIDIpIHtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICRmZztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogJGJnO1xuICB9XG5cbiAgLy8gVE9ETzogcmVtb3ZlXG4gIC8vIEZvciBJbnRlcm5ldCBFeHBsb3JlclxuICBzY3JvbGxiYXItZmFjZS1jb2xvcjogJGZnO1xuICBzY3JvbGxiYXItdHJhY2stY29sb3I6ICRiZztcbn1cblxuQG1peGluIG5iLWhlYWRpbmdzKCRmcm9tOiAxLCAkdG86IDYpIHtcbiAgQGZvciAkaSBmcm9tICRmcm9tIHRocm91Z2ggJHRvIHtcbiAgICBoI3skaX0ge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbmItb3V0bGluZSgkb3V0bGluZS13aWR0aCwgJG91dGxpbmUtY29sb3IsICRpbnNldC1zaGFkb3ctbGVuZ3RoOiAwKSB7XG4gICRvdXRzZXQtc2hhZG93OiAwIDAgMCAkb3V0bGluZS13aWR0aCAkb3V0bGluZS1jb2xvcjtcbiAgYm94LXNoYWRvdzogJG91dHNldC1zaGFkb3c7XG5cbiAgQGlmICgkaW5zZXQtc2hhZG93LWxlbmd0aCAhPSAwKSB7XG4gICAgJjpub3QoOmhvdmVyKTpub3QoOmFjdGl2ZSkge1xuICAgICAgJGluc2V0LXNoYWRvdzogaW5zZXQgJGluc2V0LXNoYWRvdy1sZW5ndGggJG91dGxpbmUtY29sb3I7XG4gICAgICBib3gtc2hhZG93OiAkb3V0c2V0LXNoYWRvdywgJGluc2V0LXNoYWRvdztcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGhvdmVyLWZvY3VzLWFjdGl2ZSB7XG4gICY6Zm9jdXMsXG4gICY6YWN0aXZlLFxuICAmOmhvdmVyIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gY2VudGVyLWhvcml6b250YWwtYWJzb2x1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICBsZWZ0OiA1MCU7XG59XG5cbkBtaXhpbiBpbnN0YWxsLXRodW1iKCkge1xuICAkdGh1bWItc2VsZWN0b3JzOiAoXG4gICAgJzo6LXdlYmtpdC1zbGlkZXItdGh1bWInXG4gICAgJzo6LW1vei1yYW5nZS10aHVtYidcbiAgICAnOjotbXMtdGh1bWInXG4gICk7XG5cbiAgQGVhY2ggJHNlbGVjdG9yIGluICR0aHVtYi1zZWxlY3RvcnMge1xuICAgICYjeyRzZWxlY3Rvcn0ge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBpbnN0YWxsLXRyYWNrKCkge1xuICAkdGh1bWItc2VsZWN0b3JzOiAoXG4gICAgJzo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2snXG4gICAgJzo6LW1vei1yYW5nZS10cmFjaydcbiAgICAnOjotbXMtdHJhY2snXG4gICk7XG5cbiAgQGVhY2ggJHNlbGVjdG9yIGluICR0aHVtYi1zZWxlY3RvcnMge1xuICAgICYjeyRzZWxlY3Rvcn0ge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBpbnN0YWxsLXBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnQtc2l6ZSwgJG9wYWNpdHk6IDEpIHtcbiAgJHBsYWNlaG9sZGVyLXNlbGVjdG9yczogKFxuICAgICc6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXInXG4gICAgJzo6LW1vei1wbGFjZWhvbGRlcidcbiAgICAnOi1tb3otcGxhY2Vob2xkZXInXG4gICAgJzotbXMtaW5wdXQtcGxhY2Vob2xkZXInXG4gICk7XG5cbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnQtc2l6ZSwgJG9wYWNpdHkpO1xuICB9XG5cbiAgQGVhY2ggJHNlbGVjdG9yIGluICRwbGFjZWhvbGRlci1zZWxlY3RvcnMge1xuICAgICYjeyRzZWxlY3Rvcn0ge1xuICAgICAgQGluY2x1ZGUgcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplLCAkb3BhY2l0eSk7XG4gICAgfVxuXG4gICAgJjpmb2N1cyN7JHNlbGVjdG9yfSB7XG4gICAgICBAaW5jbHVkZSBwbGFjZWhvbGRlci1mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplLCAkb3BhY2l0eSkge1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIG9wYWNpdHk6ICRvcGFjaXR5O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlci1mb2N1cygpIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG59XG5cbkBtaXhpbiBuYi1jb21wb25lbnQtYW5pbWF0aW9uKCRwcm9wZXJ0aWVzLi4uKSB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiAkcHJvcGVydGllcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG59XG5cbkBtaXhpbiBhbmltYXRpb24oJGFuaW1hdGUuLi4pIHtcbiAgJG1heDogbGVuZ3RoKCRhbmltYXRlKTtcbiAgJGFuaW1hdGlvbnM6ICcnO1xuXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJG1heCB7XG4gICAgJGFuaW1hdGlvbnM6ICN7JGFuaW1hdGlvbnMgKyBudGgoJGFuaW1hdGUsICRpKX07XG5cbiAgICBAaWYgJGkgPCAkbWF4IHtcbiAgICAgICRhbmltYXRpb25zOiAjeyRhbmltYXRpb25zICsgJywgJ307XG4gICAgfVxuICB9XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAkYW5pbWF0aW9ucztcbiAgLW1vei1hbmltYXRpb246ICAgICRhbmltYXRpb25zO1xuICAtby1hbmltYXRpb246ICAgICAgJGFuaW1hdGlvbnM7XG4gIGFuaW1hdGlvbjogICAgICAgICAkYW5pbWF0aW9ucztcbn1cblxuQG1peGluIGtleWZyYW1lcygkYW5pbWF0aW9uTmFtZSkge1xuICBALXdlYmtpdC1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtbW96LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1vLWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQGtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIG1peGluIGdlbmVyYXRlcyBrZXlmYW1lcy5cbiAqIEJlY2F1c2Ugb2YgYWxsIGtleWZyYW1lcyBjYW4ndCBiZSBzY29wZWQsXG4gKiB3ZSBuZWVkIHRvIHB1dHMgdW5pcXVlIG5hbWUgaW4gZWFjaCBidG4tcHVsc2UgY2FsbC5cbiAqL1xuQG1peGluIGJ0bi1wdWxzZSgkbmFtZSwgJGNvbG9yKSB7XG4gICYuYnRuLXB1bHNlIHtcbiAgICBAaW5jbHVkZSBhbmltYXRpb24oYnRuLSN7JG5hbWV9LXB1bHNlIDEuNXMgaW5maW5pdGUpO1xuICB9XG5cbiAgQGluY2x1ZGUga2V5ZnJhbWVzKGJ0bi0jeyRuYW1lfS1wdWxzZSkge1xuICAgIDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBvcGFjaXR5OiBuYi10aGVtZShidG4tZGlzYWJsZWQtb3BhY2l0eSk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMXJlbSAwICRjb2xvcjtcbiAgICAgIG9wYWNpdHk6IDAuODtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgb3BhY2l0eTogbmItdGhlbWUoYnRuLWRpc2FibGVkLW9wYWNpdHkpO1xuICAgIH1cbiAgfVxufVxuXG4vKlxuXG5BY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc2NvcGluZy0xLyNob3N0LXNlbGVjdG9yKVxuOmhvc3QgYW5kIDpob3N0LWNvbnRleHQgYXJlIHBzZXVkby1jbGFzc2VzLiBTbyB3ZSBhc3N1bWUgdGhleSBjb3VsZCBiZSBjb21iaW5lZCxcbmxpa2Ugb3RoZXIgcHNldWRvLWNsYXNzZXMsIGV2ZW4gc2FtZSBvbmVzLlxuRm9yIGV4YW1wbGU6ICc6bnRoLW9mLXR5cGUoMm4pOm50aC1vZi10eXBlKGV2ZW4pJy5cblxuSWRlYWwgc29sdXRpb24gd291bGQgYmUgdG8gcHJlcGVuZCBhbnkgc2VsZWN0b3Igd2l0aCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuXG5UaGVuIG5lYnVsYXIgY29tcG9uZW50cyB3aWxsIGJlaGF2ZSBhcyBhbiBodG1sIGVsZW1lbnQgYW5kIHJlc3BvbmQgdG8gW2Rpcl0gYXR0cmlidXRlIG9uIGFueSBsZXZlbCxcbnNvIGRpcmVjdGlvbiBjb3VsZCBiZSBvdmVycmlkZGVuIG9uIGFueSBjb21wb25lbnQgbGV2ZWwuXG5cbkltcGxlbWVudGF0aW9uIGNvZGU6XG5cbkBtaXhpbiBuYi1ydGwoKSB7XG4gIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICBAYXQtcm9vdCB7c2VsZWN0b3ItYXBwZW5kKCc6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSknLCAmKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkFuZCB3aGVuIHdlIGNhbGwgaXQgc29tZXdoZXJlOlxuXG46aG9zdCB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cbjpob3N0LWNvbnRleHQoLi4uKSB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cblxuUmVzdWx0IHdpbGwgbG9vayBsaWtlOlxuXG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG5cbipcbiAgU2lkZSBub3RlOlxuICA6aG9zdC1jb250ZXh0KCk6aG9zdCBzZWxlY3RvciBhcmUgdmFsaWQuIGh0dHBzOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93d3ctc3R5bGUvMjAxNUZlYi8wMzA1Lmh0bWxcblxuICA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgc2hvdWxkIG1hdGNoIGFueSBwZXJtdXRhdGlvbixcbiAgc28gb3JkZXIgaXMgbm90IGltcG9ydGFudC5cbipcblxuXG5DdXJyZW50bHksIHRoZXJlJ3JlIHR3byBwcm9ibGVtcyB3aXRoIHRoaXMgYXBwcm9hY2g6XG5cbkZpcnN0LCBpcyB0aGF0IHdlIGNhbid0IGNvbWJpbmUgOmhvc3QsIDpob3N0LWNvbnRleHQuIEFuZ3VsYXIgYnVncyAjMTQzNDksICMxOTE5OS5cbkZvciB0aGUgbW9tZW50IG9mIHdyaXRpbmcsIHRoZSBvbmx5IHBvc3NpYmxlIHdheSBpczpcbjpob3N0IHtcbiAgOmhvc3QtY29udGV4dCguLi4pIHtcbiAgICAuLi5cbiAgfVxufVxuSXQgZG9lc24ndCB3b3JrIGZvciB1cyBiZWNhdXNlIG1peGluIGNvdWxkIGJlIGNhbGxlZCBzb21ld2hlcmUgZGVlcGVyLCBsaWtlOlxuOmhvc3Qge1xuICBwIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7IC4uLiB9XG4gIH1cbn1cbldlIGFyZSBub3QgYWJsZSB0byBnbyB1cCB0byA6aG9zdCBsZXZlbCB0byBwbGFjZSBjb250ZW50IHBhc3NlZCB0byBtaXhpbi5cblxuVGhlIHNlY29uZCBwcm9ibGVtIGlzIHRoYXQgd2Ugb25seSBjYW4gYmUgc3VyZSB0aGF0IHdlIGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gYW5vdGhlclxuOmhvc3QvOmhvc3QtY29udGV4dCBwc2V1ZG8tY2xhc3Mgd2hlbiBjYWxsZWQgaW4gdGhlbWUgZmlsZXMgKCoudGhlbWUuc2NzcykuXG4gICpcbiAgICBTaWRlIG5vdGU6XG4gICAgQ3VycmVudGx5LCBuYi1pbnN0YWxsLWNvbXBvbmVudCB1c2VzIGFub3RoZXIgYXBwcm9hY2ggd2hlcmUgOmhvc3QgcHJlcGVuZGVkIHdpdGggdGhlIHRoZW1lIG5hbWVcbiAgICAoaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzViOTYwNzg2MjRiMGE0NzYwZjJkYmNmNmZkZjBiZDYyNzkxYmU1YmIvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MSksXG4gICAgYnV0IGl0IHdhcyBtYWRlIHRvIGJlIGFibGUgdG8gdXNlIGN1cnJlbnQgcmVhbGl6YXRpb24gb2YgcnRsIGFuZCBpdCBjYW4gYmUgcmV3cml0dGVuIGJhY2sgdG9cbiAgICA6aG9zdC1jb250ZXh0KCR0aGVtZSkgb25jZSB3ZSB3aWxsIGJlIGFibGUgdG8gdXNlIG11bHRpcGxlIHNoYWRvdyBzZWxlY3RvcnMuXG4gICpcbkJ1dCB3aGVuIGl0J3MgY2FsbGVkIGluICouY29tcG9uZW50LnNjc3Mgd2UgY2FuJ3QgYmUgc3VyZSwgdGhhdCBzZWxlY3RvciBzdGFydHMgd2l0aCA6aG9zdC86aG9zdC1jb250ZXh0LFxuYmVjYXVzZSBhbmd1bGFyIGFsbG93cyBvbWl0dGluZyBwc2V1ZG8tY2xhc3NlcyBpZiB3ZSBkb24ndCBuZWVkIHRvIHN0eWxlIDpob3N0IGNvbXBvbmVudCBpdHNlbGYuXG5XZSBjYW4gYnJlYWsgc3VjaCBzZWxlY3RvcnMsIGJ5IGp1c3QgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byB0aGVtLlxuICAqKipcbiAgICBQb3NzaWJsZSBzb2x1dGlvblxuICAgIGNoZWNrIGlmIHdlIGluIHRoZW1lIGJ5IHNvbWUgdGhlbWUgdmFyaWFibGVzIGFuZCBpZiBzbyBhcHBlbmQsIG90aGVyd2lzZSBuZXN0IGxpa2VcbiAgICBAYXQtcm9vdCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkge1xuICAgICAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgICAgIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICAgICAgeyZ9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIFdoYXQgaWYgOmhvc3Qgc3BlY2lmaWVkPyBDYW4gd2UgYWRkIHNwYWNlIGluIDpob3N0LWNvbnRleHQoLi4uKSA6aG9zdD9cbiAgICBPciBtYXliZSBhZGQgOmhvc3Qgc2VsZWN0b3IgYW55d2F5PyBJZiBtdWx0aXBsZSA6aG9zdCBzZWxlY3RvcnMgYXJlIGFsbG93ZWRcbiAgKioqXG5cblxuUHJvYmxlbXMgd2l0aCB0aGUgY3VycmVudCBhcHByb2FjaC5cblxuMS4gRGlyZWN0aW9uIGNhbiBiZSBhcHBsaWVkIG9ubHkgb24gZG9jdW1lbnQgbGV2ZWwsIGJlY2F1c2UgbWl4aW4gcHJlcGVuZHMgdGhlbWUgY2xhc3MsXG53aGljaCBwbGFjZWQgb24gdGhlIGJvZHkuXG4yLiAqLmNvbXBvbmVudC5zY3NzIHN0eWxlcyBzaG91bGQgYmUgaW4gOmhvc3Qgc2VsZWN0b3IuIE90aGVyd2lzZSBhbmd1bGFyIHdpbGwgYWRkIGhvc3RcbmF0dHJpYnV0ZSB0byBbZGlyPXJ0bF0gYXR0cmlidXRlIGFzIHdlbGwuXG5cblxuR2VuZXJhbCBwcm9ibGVtcy5cblxuTHRyIGlzIGRlZmF1bHQgZG9jdW1lbnQgZGlyZWN0aW9uLCBidXQgZm9yIHByb3BlciB3b3JrIG9mIG5iLWx0ciAobWVhbnMgbHRyIG9ubHkpLFxuW2Rpcj1sdHJdIHNob3VsZCBiZSBzcGVjaWZpZWQgYXQgbGVhc3Qgc29tZXdoZXJlLiAnOm5vdChbZGlyPXJ0bF0nIG5vdCBhcHBsaWNhYmxlIGhlcmUsXG5iZWNhdXNlIGl0J3Mgc2F0aXNmeSBhbnkgcGFyZW50LCB0aGF0IGRvbid0IGhhdmUgW2Rpcj1ydGxdIGF0dHJpYnV0ZS5cblByZXZpb3VzIGFwcHJvYWNoIHdhcyB0byB1c2Ugc2luZ2xlIHJ0bCBtaXhpbiBhbmQgcmVzZXQgbHRyIHByb3BlcnRpZXMgdG8gaW5pdGlhbCB2YWx1ZS5cbkJ1dCBzb21ldGltZXMgaXQncyBoYXJkIHRvIGZpbmQsIHdoYXQgdGhlIHByZXZpb3VzIHZhbHVlIHNob3VsZCBiZS4gQW5kIHN1Y2ggbWl4aW4gY2FsbCBsb29rcyB0b28gdmVyYm9zZS5cbiovXG5cbkBtaXhpbiBfcHJlcGVuZC13aXRoLXNlbGVjdG9yKCRzZWxlY3RvciwgJHByb3A6IG51bGwsICR2YWx1ZTogbnVsbCkge1xuICAjeyRzZWxlY3Rvcn0gJiB7XG4gICAgQGlmICRwcm9wICE9IG51bGwge1xuICAgICAgI3skcHJvcH06ICR2YWx1ZTtcbiAgICB9XG5cbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbmItbHRyKCRwcm9wOiBudWxsLCAkdmFsdWU6IG51bGwpIHtcbiAgQGluY2x1ZGUgX3ByZXBlbmQtd2l0aC1zZWxlY3RvcignW2Rpcj1sdHJdJywgJHByb3AsICR2YWx1ZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1ydGwoJHByb3A6IG51bGwsICR2YWx1ZTogbnVsbCkge1xuICBAaW5jbHVkZSBfcHJlcGVuZC13aXRoLXNlbGVjdG9yKCdbZGlyPXJ0bF0nLCAkcHJvcCwgJHZhbHVlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH07XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbi8vLyBTbGlnaHRseSBsaWdodGVuIGEgY29sb3Jcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciAtIGNvbG9yIHRvIHRpbnRcbi8vLyBAcGFyYW0ge051bWJlcn0gJHBlcmNlbnRhZ2UgLSBwZXJjZW50YWdlIG9mIGAkY29sb3JgIGluIHJldHVybmVkIGNvbG9yXG4vLy8gQHJldHVybiB7Q29sb3J9XG5AZnVuY3Rpb24gdGludCgkY29sb3IsICRwZXJjZW50YWdlKSB7XG4gIEByZXR1cm4gbWl4KHdoaXRlLCAkY29sb3IsICRwZXJjZW50YWdlKTtcbn1cblxuLy8vIFNsaWdodGx5IGRhcmtlbiBhIGNvbG9yXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgLSBjb2xvciB0byBzaGFkZVxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkcGVyY2VudGFnZSAtIHBlcmNlbnRhZ2Ugb2YgYCRjb2xvcmAgaW4gcmV0dXJuZWQgY29sb3Jcbi8vLyBAcmV0dXJuIHtDb2xvcn1cbkBmdW5jdGlvbiBzaGFkZSgkY29sb3IsICRwZXJjZW50YWdlKSB7XG4gIEByZXR1cm4gbWl4KGJsYWNrLCAkY29sb3IsICRwZXJjZW50YWdlKTtcbn1cblxuQGZ1bmN0aW9uIG1hcC1zZXQoJG1hcCwgJGtleSwgJHZhbHVlOiBudWxsKSB7XG4gICRuZXc6ICgka2V5OiAkdmFsdWUpO1xuICBAcmV0dXJuIG1hcC1tZXJnZSgkbWFwLCAkbmV3KTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGZ1bmN0aW9uIG5iLWdldC1zdGF0dXNlcygpIHtcbiAgQHJldHVybiAnYmFzaWMnLCAncHJpbWFyeScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJywgJ2luZm8nLCAnY29udHJvbCc7XG59XG5cbkBmdW5jdGlvbiBuYi1nZXQtc2l6ZXMoKSB7XG4gIEByZXR1cm4gJ3RpbnknLCAnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJywgJ2dpYW50Jztcbn1cblxuQGZ1bmN0aW9uIG5iLWdldC1zaGFwZXMoKSB7XG4gIEByZXR1cm4gJ3JlY3RhbmdsZScsICdzZW1pLXJvdW5kJywgJ3JvdW5kJztcbn1cblxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG4kZXZhLW1hcHBpbmc6IChcblxuICAvKiBDb21wb25lbnRzIG1hcHBpbmdzIC0gbWFwcyB0aGVtZSB2YXJpYWJsZXMgb250byBjb21wb25lbnQgdmFyaWFibGVzICovXG5cbiAgbGluay10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIGxpbmstdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUsXG4gIGxpbmstdGV4dC1mb2N1cy1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuICBsaW5rLXRleHQtaG92ZXItY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcblxuICBjYXJkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgY2FyZC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjYXJkLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBjYXJkLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGNhcmQtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGNhcmQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGNhcmQtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW0sXG4gIGNhcmQtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgY2FyZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBjYXJkLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGNhcmQtcGFkZGluZzogMXJlbSAxLjVyZW0sXG4gIGNhcmQtc2hhZG93OiBub25lLFxuICBjYXJkLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIGNhcmQtZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgY2FyZC1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuXG4gIGNhcmQtaGVhZGVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNhcmQtaGVhZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIGNhcmQtaGVhZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgY2FyZC1oZWFkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgY2FyZC1oZWFkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICBjYXJkLWhlYWRlci1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGNhcmQtaGVhZGVyLWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNhcmQtaGVhZGVyLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjYXJkLWhlYWRlci1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2FyZC1oZWFkZXItaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGNhcmQtaGVhZGVyLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYXJkLWhlYWRlci1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgY2FyZC1oZWFkZXItc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhcmQtaGVhZGVyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBjYXJkLWhlYWRlci13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2FyZC1oZWFkZXItZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBjYXJkLWhlYWRlci1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYXJkLWhlYWRlci1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgY2FyZC1oZWFkZXItY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG5cbiAgY2FyZC1oZWlnaHQtdGlueTogMTMuNXJlbSxcbiAgY2FyZC1oZWlnaHQtc21hbGw6IDIxLjE4NzVyZW0sXG4gIGNhcmQtaGVpZ2h0LW1lZGl1bTogMjguODc1cmVtLFxuICBjYXJkLWhlaWdodC1sYXJnZTogMzYuNTYyNXJlbSxcbiAgY2FyZC1oZWlnaHQtZ2lhbnQ6IDQ0LjI1cmVtLFxuICBjYXJkLW1hcmdpbi1ib3R0b206IDEuODc1cmVtLFxuXG4gIGNhcmQtc2Nyb2xsYmFyLWNvbG9yOiBzY3JvbGxiYXItY29sb3IsXG4gIGNhcmQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBjYXJkLXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuXG4gIGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGhlYWRlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBoZWFkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGhlYWRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBoZWFkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgaGVhZGVyLWhlaWdodDogNC43NXJlbSxcbiAgaGVhZGVyLXBhZGRpbmc6IDEuMjVyZW0sXG4gIGhlYWRlci1zaGFkb3c6IHNoYWRvdyxcblxuICBmb290ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBmb290ZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgZm9vdGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBmb290ZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgZm9vdGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBmb290ZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGZvb3Rlci10ZXh0LWhpZ2hsaWdodC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgZm9vdGVyLWhlaWdodDogNC43MjVyZW0sXG4gIGZvb3Rlci1wYWRkaW5nOiAxLjI1cmVtLFxuICBmb290ZXItZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgZm9vdGVyLWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIGZvb3Rlci1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBmb290ZXItc2hhZG93OiBzaGFkb3csXG5cbiAgbGF5b3V0LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgbGF5b3V0LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGxheW91dC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgbGF5b3V0LXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGxheW91dC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgbGF5b3V0LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBsYXlvdXQtbWluLWhlaWdodDogMTAwdmgsXG4gIGxheW91dC1jb250ZW50LXdpZHRoOiA5MDBweCxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLW1pbi13aWR0aDogMzAwcHgsXG4gIGxheW91dC13aW5kb3ctbW9kZS1tYXgtd2lkdGg6IDE5MjBweCxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLXBhZGRpbmctdG9wOiA0Ljc1cmVtLFxuICBsYXlvdXQtd2luZG93LXNoYWRvdzogc2hhZG93LFxuICBsYXlvdXQtcGFkZGluZzogMi4yNXJlbSAyLjI1cmVtIDAuNzVyZW0sXG4gIGxheW91dC1tZWRpdW0tcGFkZGluZzogMS41cmVtIDEuNXJlbSAwLjVyZW0sXG4gIGxheW91dC1zbWFsbC1wYWRkaW5nOiAxcmVtIDFyZW0gMCxcbiAgbGF5b3V0LXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgbGF5b3V0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICBsYXlvdXQtc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG5cbiAgc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNpZGViYXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2lkZWJhci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgc2lkZWJhci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzaWRlYmFyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzaWRlYmFyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBzaWRlYmFyLWhlaWdodDogMTAwdmgsXG4gIHNpZGViYXItd2lkdGg6IDE2cmVtLFxuICBzaWRlYmFyLXdpZHRoLWNvbXBhY3Q6IDMuNXJlbSxcbiAgc2lkZWJhci1wYWRkaW5nOiAxLjI1cmVtLFxuICBzaWRlYmFyLWhlYWRlci1oZWlnaHQ6IDMuNXJlbSxcbiAgc2lkZWJhci1mb290ZXItaGVpZ2h0OiAzLjVyZW0sXG4gIHNpZGViYXItc2hhZG93OiBzaGFkb3csXG4gIHNpZGViYXItbWVudS1pdGVtLWhpZ2hsaWdodC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzaWRlYmFyLXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgc2lkZWJhci1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgc2lkZWJhci1zY3JvbGxiYXItd2lkdGg6IHNjcm9sbGJhci13aWR0aCxcblxuICBtZW51LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICBtZW51LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIG1lbnUtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtZmFtaWx5LFxuICBtZW51LXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBtZW51LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgbWVudS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG5cbiAgbWVudS1ncm91cC10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG5cbiAgbWVudS1pdGVtLWJvcmRlci1yYWRpdXM6IDAsXG4gIG1lbnUtaXRlbS1wYWRkaW5nOiAwLjc1cmVtIDFyZW0sXG5cbiAgbWVudS1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IG1lbnUtYmFja2dyb3VuZC1jb2xvcixcbiAgbWVudS1pdGVtLWhvdmVyLWN1cnNvcjogcG9pbnRlcixcbiAgbWVudS1pdGVtLWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcbiAgbWVudS1pdGVtLWljb24taG92ZXItY29sb3I6IG1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yLFxuXG4gIG1lbnUtaXRlbS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogbWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LWl0ZW0tYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgbWVudS1pdGVtLWljb24tYWN0aXZlLWNvbG9yOiBtZW51LWl0ZW0tYWN0aXZlLXRleHQtY29sb3IsXG5cbiAgbWVudS1pdGVtLWljb24tY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgbWVudS1pdGVtLWljb24tbWFyZ2luOiAwIDAuNXJlbSAwIDAsXG4gIG1lbnUtaXRlbS1pY29uLXdpZHRoOiAxLjI1cmVtLFxuXG4gIG1lbnUtaXRlbS1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBtZW51LWl0ZW0tZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgbWVudS1pdGVtLWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG5cbiAgbWVudS1zdWJtZW51LWJhY2tncm91bmQtY29sb3I6IG1lbnUtYmFja2dyb3VuZC1jb2xvcixcbiAgbWVudS1zdWJtZW51LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIG1lbnUtc3VibWVudS1tYXJnaW46IDAsXG4gIG1lbnUtc3VibWVudS1wYWRkaW5nOiAwIDEuMjVyZW0sXG5cbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLWNvbG9yOiBtZW51LXN1Ym1lbnUtYmFja2dyb3VuZC1jb2xvcixcbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXdpZHRoOiAwLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItcmFkaXVzOiAwLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1wYWRkaW5nOiBtZW51LWl0ZW0tcGFkZGluZyxcblxuICBtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBtZW51LWJhY2tncm91bmQtY29sb3IsXG4gIG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLWJvcmRlci1jb2xvcjogbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yOiBtZW51LWl0ZW0taG92ZXItdGV4dC1jb2xvcixcbiAgbWVudS1zdWJtZW51LWl0ZW0taWNvbi1ob3Zlci1jb2xvcjogbWVudS1pdGVtLWljb24taG92ZXItY29sb3IsXG5cbiAgbWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IG1lbnUtYmFja2dyb3VuZC1jb2xvcixcbiAgbWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtdGV4dC1jb2xvcjogbWVudS1pdGVtLWFjdGl2ZS10ZXh0LWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1pY29uLWFjdGl2ZS1jb2xvcjogbWVudS1pdGVtLWljb24tYWN0aXZlLWNvbG9yLFxuXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtaG92ZXItdGV4dC1jb2xvcjogbWVudS1zdWJtZW51LWl0ZW0taG92ZXItdGV4dC1jb2xvcixcbiAgbWVudS1zdWJtZW51LWl0ZW0taWNvbi1hY3RpdmUtaG92ZXItY29sb3I6IG1lbnUtc3VibWVudS1pdGVtLWljb24taG92ZXItY29sb3IsXG5cbiAgdGFic2V0LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtYm9yZGVyLXJhZGl1czogMCxcbiAgdGFic2V0LXNoYWRvdzogbm9uZSxcblxuICB0YWJzZXQtdGFiLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtdGFiLXBhZGRpbmc6IDFyZW0gMnJlbSxcbiAgdGFic2V0LXRhYi10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHRhYnNldC10YWItdGV4dC1mb250LWZhbWlseTogdGV4dC1idXR0b24tZm9udC1mYW1pbHksXG4gIHRhYnNldC10YWItdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLW1lZGl1bS1mb250LXNpemUsXG4gIHRhYnNldC10YWItdGV4dC1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIHRhYnNldC10YWItdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tbWVkaXVtLWxpbmUtaGVpZ2h0LFxuICB0YWJzZXQtdGFiLXRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UsXG4gIHRhYnNldC10YWItdW5kZXJsaW5lLXdpZHRoOiAwLjI1cmVtLFxuICB0YWJzZXQtdGFiLXVuZGVybGluZS1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtdGFiLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIHRhYnNldC10YWItYWN0aXZlLXVuZGVybGluZS1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICB0YWJzZXQtdGFiLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtdGFiLWZvY3VzLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcixcbiAgdGFic2V0LXRhYi1mb2N1cy11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcixcbiAgdGFic2V0LXRhYi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdGFic2V0LXRhYi1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktaG92ZXItY29sb3IsXG4gIHRhYnNldC10YWItaG92ZXItdW5kZXJsaW5lLWNvbG9yOiB0ZXh0LXByaW1hcnktaG92ZXItY29sb3IsXG4gIHRhYnNldC10YWItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgdGFic2V0LXRhYi1kaXNhYmxlZC11bmRlcmxpbmUtY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHRhYnNldC1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICB0YWJzZXQtZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgdGFic2V0LWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG5cbiAgdGFic2V0LWNvbnRlbnQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC1jb250ZW50LXBhZGRpbmc6IDFyZW0gMnJlbSxcbiAgdGFic2V0LWNvbnRlbnQtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdGFic2V0LWNvbnRlbnQtdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIHRhYnNldC1jb250ZW50LXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHRhYnNldC1jb250ZW50LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICB0YWJzZXQtY29udGVudC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcblxuICB0YWJzZXQtc2Nyb2xsYmFyLWNvbG9yOiBzY3JvbGxiYXItY29sb3IsXG4gIHRhYnNldC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsXG4gIHRhYnNldC1zY3JvbGxiYXItd2lkdGg6IHNjcm9sbGJhci13aWR0aCxcbiAgdGFic2V0LXRhYi10ZXh0LWhpZGUtYnJlYWtwb2ludDogMzZyZW0sXG5cbiAgcm91dGUtdGFic2V0LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzZXQtYm9yZGVyLXJhZGl1czogMCxcbiAgcm91dGUtdGFic2V0LXNoYWRvdzogbm9uZSxcblxuICByb3V0ZS10YWJzZXQtdGFiLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzZXQtdGFiLXBhZGRpbmc6IDFyZW0gMnJlbSxcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHJvdXRlLXRhYnNldC10YWItdGV4dC1mb250LWZhbWlseTogdGV4dC1idXR0b24tZm9udC1mYW1pbHksXG4gIHJvdXRlLXRhYnNldC10YWItdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLW1lZGl1bS1mb250LXNpemUsXG4gIHJvdXRlLXRhYnNldC10YWItdGV4dC1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIHJvdXRlLXRhYnNldC10YWItdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tbWVkaXVtLWxpbmUtaGVpZ2h0LFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UsXG4gIHJvdXRlLXRhYnNldC10YWItdW5kZXJsaW5lLXdpZHRoOiAwLjI1cmVtLFxuICByb3V0ZS10YWJzZXQtdGFiLXVuZGVybGluZS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgcm91dGUtdGFic2V0LXRhYi1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnNldC10YWItYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgcm91dGUtdGFic2V0LXRhYi1hY3RpdmUtdW5kZXJsaW5lLWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG5cbiAgcm91dGUtdGFic2V0LXRhYi1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFic2V0LXRhYi1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktZm9jdXMtY29sb3IsXG4gIHJvdXRlLXRhYnNldC10YWItZm9jdXMtdW5kZXJsaW5lLWNvbG9yOiB0ZXh0LXByaW1hcnktZm9jdXMtY29sb3IsXG5cbiAgcm91dGUtdGFic2V0LXRhYi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFic2V0LXRhYi1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktaG92ZXItY29sb3IsXG4gIHJvdXRlLXRhYnNldC10YWItaG92ZXItdW5kZXJsaW5lLWNvbG9yOiB0ZXh0LXByaW1hcnktaG92ZXItY29sb3IsXG5cbiAgcm91dGUtdGFic2V0LXRhYi1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFic2V0LXRhYi1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICByb3V0ZS10YWJzZXQtdGFiLWRpc2FibGVkLXVuZGVybGluZS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgcm91dGUtdGFic2V0LWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIHJvdXRlLXRhYnNldC1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICByb3V0ZS10YWJzZXQtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcblxuICByb3V0ZS10YWJzZXQtc2Nyb2xsYmFyLWNvbG9yOiBzY3JvbGxiYXItY29sb3IsXG4gIHJvdXRlLXRhYnNldC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsXG4gIHJvdXRlLXRhYnNldC1zY3JvbGxiYXItd2lkdGg6IHNjcm9sbGJhci13aWR0aCxcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LWhpZGUtYnJlYWtwb2ludDogMzZyZW0sXG5cbiAgdXNlci1waWN0dXJlLWJveC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdXNlci1waWN0dXJlLWJveC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICB1c2VyLXBpY3R1cmUtYm94LWJvcmRlci13aWR0aDogMXB4LFxuICB1c2VyLWluaXRpYWxzLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHVzZXItaW5pdGlhbHMtdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIHVzZXItaW5pdGlhbHMtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHVzZXItbmFtZS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB1c2VyLW5hbWUtdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIHVzZXItbmFtZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgdXNlci10aXRsZS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB1c2VyLXRpdGxlLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLTItZm9udC1mYW1pbHksXG4gIHVzZXItdGl0bGUtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtMi1mb250LXdlaWdodCxcblxuICB1c2VyLXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzOiAwLjVyZW0sXG4gIHVzZXItc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLjc1cmVtLFxuICB1c2VyLXJvdW5kLWJvcmRlci1yYWRpdXM6IDUwJSxcblxuICB1c2VyLXRpbnktaGVpZ2h0OiAxLjI1cmVtLFxuICB1c2VyLXRpbnktd2lkdGg6IDEuMjVyZW0sXG4gIHVzZXItdGlueS1pbml0aWFscy10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLWZvbnQtc2l6ZSxcbiAgdXNlci10aW55LWluaXRpYWxzLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcbiAgdXNlci10aW55LW5hbWUtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItdGlueS1uYW1lLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcbiAgdXNlci10aW55LXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXRpbnktdGl0bGUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuXG4gIHVzZXItc21hbGwtaGVpZ2h0OiAxLjVyZW0sXG4gIHVzZXItc21hbGwtd2lkdGg6IDEuNXJlbSxcbiAgdXNlci1zbWFsbC1pbml0aWFscy10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLWZvbnQtc2l6ZSxcbiAgdXNlci1zbWFsbC1pbml0aWFscy10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQsXG4gIHVzZXItc21hbGwtbmFtZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLWZvbnQtc2l6ZSxcbiAgdXNlci1zbWFsbC1uYW1lLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcbiAgdXNlci1zbWFsbC10aXRsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLWZvbnQtc2l6ZSxcbiAgdXNlci1zbWFsbC10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQsXG5cbiAgdXNlci1tZWRpdW0taGVpZ2h0OiAyLjVyZW0sXG4gIHVzZXItbWVkaXVtLXdpZHRoOiAyLjVyZW0sXG4gIHVzZXItbWVkaXVtLWluaXRpYWxzLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHVzZXItbWVkaXVtLWluaXRpYWxzLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICB1c2VyLW1lZGl1bS1uYW1lLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHVzZXItbWVkaXVtLW5hbWUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItbWVkaXVtLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLW1lZGl1bS10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQsXG5cbiAgdXNlci1sYXJnZS1oZWlnaHQ6IDMuMjVyZW0sXG4gIHVzZXItbGFyZ2Utd2lkdGg6IDMuMjVyZW0sXG4gIHVzZXItbGFyZ2UtaW5pdGlhbHMtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1sYXJnZS1pbml0aWFscy10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgdXNlci1sYXJnZS1uYW1lLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHVzZXItbGFyZ2UtbmFtZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgdXNlci1sYXJnZS10aXRsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtMi1mb250LXNpemUsXG4gIHVzZXItbGFyZ2UtdGl0bGUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtMi1saW5lLWhlaWdodCxcblxuICB1c2VyLWdpYW50LWhlaWdodDogNHJlbSxcbiAgdXNlci1naWFudC13aWR0aDogNHJlbSxcbiAgdXNlci1naWFudC1pbml0aWFscy10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLWdpYW50LWluaXRpYWxzLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICB1c2VyLWdpYW50LW5hbWUtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1naWFudC1uYW1lLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICB1c2VyLWdpYW50LXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHVzZXItZ2lhbnQtdGl0bGUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgcG9wb3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBwb3BvdmVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBwb3BvdmVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHBvcG92ZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHBvcG92ZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHBvcG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBwb3BvdmVyLWJvcmRlci13aWR0aDogMXB4LFxuICBwb3BvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHBvcG92ZXItYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgcG9wb3Zlci1zaGFkb3c6IHNoYWRvdyxcbiAgcG9wb3Zlci1hcnJvdy1zaXplOiAwLjY4NzVyZW0sXG4gIHBvcG92ZXItcGFkZGluZzogMC43NXJlbSAxcmVtLFxuXG4gIGNvbnRleHQtbWVudS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGNvbnRleHQtbWVudS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBjb250ZXh0LW1lbnUtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgY29udGV4dC1tZW51LWJvcmRlci13aWR0aDogMCxcbiAgY29udGV4dC1tZW51LWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGNvbnRleHQtbWVudS10ZXh0LWFsaWduOiBjZW50ZXIsXG4gIGNvbnRleHQtbWVudS1taW4td2lkdGg6IDEwcmVtLFxuICBjb250ZXh0LW1lbnUtbWF4LXdpZHRoOiAxNXJlbSxcbiAgY29udGV4dC1tZW51LXNoYWRvdzogc2hhZG93LFxuXG4gIGFjdGlvbnMtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGFjdGlvbnMtZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgYWN0aW9ucy1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICBhY3Rpb25zLWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG4gIGFjdGlvbnMtaWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBhY3Rpb25zLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGFjdGlvbnMtdGV4dC1mb250LWZhbWlseTogdGV4dC1idXR0b24tZm9udC1mYW1pbHksXG4gIGFjdGlvbnMtdGV4dC1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIGFjdGlvbnMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tbWVkaXVtLWxpbmUtaGVpZ2h0LFxuXG4gIGFjdGlvbnMtZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgYWN0aW9ucy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGFjdGlvbnMtdGlueS1oZWlnaHQ6IDFyZW0sXG4gIGFjdGlvbnMtdGlueS1pY29uLWhlaWdodDogYWN0aW9ucy10aW55LWhlaWdodCxcbiAgYWN0aW9ucy10aW55LXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgYWN0aW9ucy10aW55LXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi10aW55LWZvbnQtc2l6ZSxcbiAgYWN0aW9ucy1zbWFsbC1oZWlnaHQ6IDEuNXJlbSxcbiAgYWN0aW9ucy1zbWFsbC1pY29uLWhlaWdodDogYWN0aW9ucy1zbWFsbC1oZWlnaHQsXG4gIGFjdGlvbnMtc21hbGwtcGFkZGluZzogMCAxLjI1cmVtLFxuICBhY3Rpb25zLXNtYWxsLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1zbWFsbC1mb250LXNpemUsXG4gIGFjdGlvbnMtbWVkaXVtLWhlaWdodDogMi4yNXJlbSxcbiAgYWN0aW9ucy1tZWRpdW0taWNvbi1oZWlnaHQ6IGFjdGlvbnMtbWVkaXVtLWhlaWdodCxcbiAgYWN0aW9ucy1tZWRpdW0tcGFkZGluZzogMCAxLjI1cmVtLFxuICBhY3Rpb25zLW1lZGl1bS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSxcbiAgYWN0aW9ucy1sYXJnZS1oZWlnaHQ6IDMuNXJlbSxcbiAgYWN0aW9ucy1sYXJnZS1pY29uLWhlaWdodDogYWN0aW9ucy1sYXJnZS1oZWlnaHQsXG4gIGFjdGlvbnMtbGFyZ2UtcGFkZGluZzogMCAxLjI1cmVtLFxuICBhY3Rpb25zLWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1sYXJnZS1mb250LXNpemUsXG4gIGFjdGlvbnMtZ2lhbnQtaGVpZ2h0OiA0cmVtLFxuICBhY3Rpb25zLWdpYW50LWljb24taGVpZ2h0OiBhY3Rpb25zLWdpYW50LWhlaWdodCxcbiAgYWN0aW9ucy1naWFudC1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIGFjdGlvbnMtZ2lhbnQtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLWdpYW50LWZvbnQtc2l6ZSxcblxuICBzZWFyY2gtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBzZWFyY2gtZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgc2VhcmNoLWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIHNlYXJjaC1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBzZWFyY2gtZXh0cmEtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzZWFyY2gtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VhcmNoLXRleHQtZm9udC1mYW1pbHk6IHRleHQtaGVhZGluZy0xLWZvbnQtZmFtaWx5LFxuICBzZWFyY2gtdGV4dC1mb250LXNpemU6IHRleHQtaGVhZGluZy0xLWZvbnQtc2l6ZSxcbiAgc2VhcmNoLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtaGVhZGluZy0xLWZvbnQtd2VpZ2h0LFxuICBzZWFyY2gtdGV4dC1saW5lLWhlaWdodDogdGV4dC1oZWFkaW5nLTEtbGluZS1oZWlnaHQsXG4gIHNlYXJjaC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlYXJjaC1pbmZvLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc2VhcmNoLWluZm8tdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgc2VhcmNoLWluZm8tdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBzZWFyY2gtaW5mby10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBzZWFyY2gtaW5mby10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWZnOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzbWFydC10YWJsZS1oZWFkZXItYmc6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcblxuICBzbWFydC10YWJsZS1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIHNtYXJ0LXRhYmxlLWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzbWFydC10YWJsZS1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgc21hcnQtdGFibGUtZmc6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWJnOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG5cbiAgc21hcnQtdGFibGUtYmctZXZlbjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzbWFydC10YWJsZS1mZy1zZWNvbmRhcnk6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWJnLWFjdGl2ZTogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzbWFydC10YWJsZS1wYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtLFxuICBzbWFydC10YWJsZS1maWx0ZXItcGFkZGluZzogMC4zNzVyZW0gMC41cmVtLFxuICBzbWFydC10YWJsZS1zZXBhcmF0b3I6IGRpdmlkZXItY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG5cbiAgc21hcnQtdGFibGUtYWN0aW9uLWFkZC1lZGl0LWhvdmVyLXRleHQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc21hcnQtdGFibGUtYWN0aW9uLWNhbmNlbC1kZWxldGUtaG92ZXItdGV4dC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG5cbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1ib3JkZXItY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1ib3JkZXItY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24tdGV4dC1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LXRleHQtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24tZm9jdXMtYm9yZGVyLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yLFxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLWhvdmVyLWJvcmRlci1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLWFjdGl2ZS1ib3JkZXItY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yLFxuXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1mb250LWZhbWlseTogYnV0dG9uLXRleHQtZm9udC1mYW1pbHksXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1mb250LXNpemU6IGJ1dHRvbi1tZWRpdW0tdGV4dC1mb250LXNpemUsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1saW5lLWhlaWdodDogYnV0dG9uLW1lZGl1bS10ZXh0LWxpbmUtaGVpZ2h0LFxuICBzbWFydC10YWJsZS1wYWdpbmctYm9yZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctYm9yZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBzbWFydC10YWJsZS1wYWdpbmctZmctYWN0aXZlOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1iZy1hY3RpdmU6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWhvdmVyOiB0cmFuc3BhcmVudCxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3IsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ob3Zlci10ZXh0LWNvbG9yOiBidXR0b24tb3V0bGluZS1wcmltYXJ5LWhvdmVyLXRleHQtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiBidXR0b24tb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1wYWdlLXRleHQtY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktdGV4dC1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLXBhZ2UtZm9jdXMtYm9yZGVyLWNvbG9yOiBidXR0b24tb3V0bGluZS1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLXBhZ2UtZm9jdXMtdGV4dC1jb2xvcjogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1mb2N1cy10ZXh0LWNvbG9yLFxuXG4gIHRvYXN0ci1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICB0b2FzdHItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHRvYXN0ci1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICB0b2FzdHItcGFkZGluZzogMXJlbSxcbiAgdG9hc3RyLXNoYWRvdzogc2hhZG93LFxuXG4gIHRvYXN0ci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtZmFtaWx5LFxuICB0b2FzdHItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLTItZm9udC1zaXplLFxuICB0b2FzdHItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtMi1mb250LXdlaWdodCxcbiAgdG9hc3RyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLTItbGluZS1oZWlnaHQsXG4gIHRvYXN0ci10aXRsZS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICB0b2FzdHItdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICB0b2FzdHItdGl0bGUtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgdG9hc3RyLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgdG9hc3RyLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWJhc2ljLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG4gIHRvYXN0ci1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0b2FzdHItaWNvbi1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLWJhc2ljLWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0b2FzdHItZGVzdHJveWFibGUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2FzdHItZGVzdHJveWFibGUtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcblxuICB0b2FzdHItcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvYXN0ci1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2FzdHItcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvYXN0ci1pY29uLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2FzdHItaWNvbi1wcmltYXJ5LWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcblxuICB0b2FzdHItc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvYXN0ci1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICB0b2FzdHItc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvYXN0ci1pY29uLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2FzdHItaWNvbi1zdWNjZXNzLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcblxuICB0b2FzdHItaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHRvYXN0ci1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICB0b2FzdHItaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvYXN0ci1pY29uLWluZm8tYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2FzdHItaWNvbi1pbmZvLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcblxuICB0b2FzdHItd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHRvYXN0ci13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0b2FzdHItd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvYXN0ci1pY29uLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2FzdHItaWNvbi13YXJuaW5nLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcblxuICB0b2FzdHItZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICB0b2FzdHItZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHRvYXN0ci1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2FzdHItaWNvbi1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2FzdHItaWNvbi1kYW5nZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICB0b2FzdHItZGVzdHJveWFibGUtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcblxuICB0b2FzdHItY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHRvYXN0ci1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICB0b2FzdHItY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHRvYXN0ci1pY29uLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICB0b2FzdHItaWNvbi1jb250cm9sLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1ob3ZlcixcblxuICBidXR0b24tY3Vyc29yOiBwb2ludGVyLFxuICBidXR0b24tb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCxcbiAgYnV0dG9uLW91dGxpbmUtY29sb3I6IG91dGxpbmUtY29sb3IsXG4gIGJ1dHRvbi10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgYnV0dG9uLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBidXR0b24tZGlzYWJsZWQtY3Vyc29yOiBkZWZhdWx0LFxuXG4gIGJ1dHRvbi10aW55LXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi10aW55LWZvbnQtc2l6ZSxcbiAgYnV0dG9uLXRpbnktdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tdGlueS1saW5lLWhlaWdodCxcbiAgYnV0dG9uLXRpbnktaWNvbi1zaXplOiAwLjc1cmVtLFxuICBidXR0b24tdGlueS1pY29uLXZlcnRpY2FsLW1hcmdpbjogLTAuMTI1cmVtLFxuICBidXR0b24tdGlueS1pY29uLW9mZnNldDogMC4zNzVyZW0sXG5cbiAgYnV0dG9uLXNtYWxsLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1zbWFsbC1mb250LXNpemUsXG4gIGJ1dHRvbi1zbWFsbC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1zbWFsbC1saW5lLWhlaWdodCxcbiAgYnV0dG9uLXNtYWxsLWljb24tc2l6ZTogMXJlbSxcbiAgYnV0dG9uLXNtYWxsLWljb24tdmVydGljYWwtbWFyZ2luOiAtMC4xMjVyZW0sXG4gIGJ1dHRvbi1zbWFsbC1pY29uLW9mZnNldDogMC4zNzVyZW0sXG5cbiAgYnV0dG9uLW1lZGl1bS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSxcbiAgYnV0dG9uLW1lZGl1bS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG4gIGJ1dHRvbi1tZWRpdW0taWNvbi1zaXplOiAxLjI1cmVtLFxuICBidXR0b24tbWVkaXVtLWljb24tdmVydGljYWwtbWFyZ2luOiAtMC4xMjVyZW0sXG4gIGJ1dHRvbi1tZWRpdW0taWNvbi1vZmZzZXQ6IDAuNXJlbSxcblxuICBidXR0b24tbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLWxhcmdlLWZvbnQtc2l6ZSxcbiAgYnV0dG9uLWxhcmdlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLWxhcmdlLWxpbmUtaGVpZ2h0LFxuICBidXR0b24tbGFyZ2UtaWNvbi1zaXplOiAxLjVyZW0sXG4gIGJ1dHRvbi1sYXJnZS1pY29uLXZlcnRpY2FsLW1hcmdpbjogLTAuMTI1cmVtLFxuICBidXR0b24tbGFyZ2UtaWNvbi1vZmZzZXQ6IDAuNzVyZW0sXG5cbiAgYnV0dG9uLWdpYW50LXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1naWFudC1mb250LXNpemUsXG4gIGJ1dHRvbi1naWFudC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1naWFudC1saW5lLWhlaWdodCxcbiAgYnV0dG9uLWdpYW50LWljb24tc2l6ZTogMS41cmVtLFxuICBidXR0b24tZ2lhbnQtaWNvbi12ZXJ0aWNhbC1tYXJnaW46IC0wLjEyNXJlbSxcbiAgYnV0dG9uLWdpYW50LWljb24tb2Zmc2V0OiAwLjc1cmVtLFxuXG4gIGJ1dHRvbi1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgYnV0dG9uLXNlbWktcm91bmQtYm9yZGVyLXJhZGl1czogMC43NXJlbSxcbiAgYnV0dG9uLXJvdW5kLWJvcmRlci1yYWRpdXM6IDEuNXJlbSxcblxuICBidXR0b24tZmlsbGVkLWJvcmRlci1zdHlsZTogc29saWQsXG4gIGJ1dHRvbi1maWxsZWQtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW0sXG4gIGJ1dHRvbi1maWxsZWQtdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSxcblxuICBidXR0b24tZmlsbGVkLXRpbnktcGFkZGluZzogMC4zMTI1cmVtIDAuNjI1cmVtLFxuICBidXR0b24tZmlsbGVkLXNtYWxsLXBhZGRpbmc6IDAuNDM3NXJlbSAwLjg3NXJlbSxcbiAgYnV0dG9uLWZpbGxlZC1tZWRpdW0tcGFkZGluZzogMC42ODc1cmVtIDEuMTI1cmVtLFxuICBidXR0b24tZmlsbGVkLWxhcmdlLXBhZGRpbmc6IDAuODEyNXJlbSAxLjEyNXJlbSxcbiAgYnV0dG9uLWZpbGxlZC1naWFudC1wYWRkaW5nOiAwLjkzNzVyZW0gMS4zNzVyZW0sXG5cbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kZWZhdWx0LFxuICBidXR0b24tZmlsbGVkLWJhc2ljLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBidXR0b24tZmlsbGVkLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWZvY3VzLFxuICBidXR0b24tZmlsbGVkLWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWhvdmVyLFxuICBidXR0b24tZmlsbGVkLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtaG92ZXItYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWJhc2ljLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1hY3RpdmUsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kaXNhYmxlZCxcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kaXNhYmxlZCxcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICBidXR0b24tZmlsbGVkLWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXItYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWluZm8tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLFxuICBidXR0b24tZmlsbGVkLWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kaXNhYmxlZCxcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kaXNhYmxlZCxcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRpc2FibGVkLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1hY3RpdmUsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRpc2FibGVkLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLW91dGxpbmUtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgYnV0dG9uLW91dGxpbmUtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW0sXG4gIGJ1dHRvbi1vdXRsaW5lLXRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UsXG4gIGJ1dHRvbi1vdXRsaW5lLWZvY3VzLWluc2V0LXNoYWRvdy1sZW5ndGg6IDAgMCAwIDEwMHZtYXgsXG5cbiAgYnV0dG9uLW91dGxpbmUtdGlueS1wYWRkaW5nOiAwLjMxMjVyZW0gMC42MjVyZW0sXG4gIGJ1dHRvbi1vdXRsaW5lLXNtYWxsLXBhZGRpbmc6IDAuNDM3NXJlbSAwLjg3NXJlbSxcbiAgYnV0dG9uLW91dGxpbmUtbWVkaXVtLXBhZGRpbmc6IDAuNjg3NXJlbSAxLjEyNXJlbSxcbiAgYnV0dG9uLW91dGxpbmUtbGFyZ2UtcGFkZGluZzogMC44MTI1cmVtIDEuMTI1cmVtLFxuICBidXR0b24tb3V0bGluZS1naWFudC1wYWRkaW5nOiAwLjkzNzVyZW0gMS4zNzVyZW0sXG5cbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1mb2N1cyxcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWZvY3VzLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBidXR0b24tb3V0bGluZS1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cyxcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWZvY3VzLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8taG92ZXItdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tYWN0aXZlLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3ZlcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWhvdmVyLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1cyxcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWZvY3VzLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItaG92ZXItdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItYWN0aXZlLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWhvdmVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWdob3N0LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWJvcmRlci1zdHlsZTogc29saWQsXG4gIGJ1dHRvbi1naG9zdC1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgYnV0dG9uLWdob3N0LXRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UsXG4gIGJ1dHRvbi1naG9zdC1mb2N1cy1pbnNldC1zaGFkb3ctbGVuZ3RoOiAwIDAgMCAxMDB2bWF4LFxuXG4gIGJ1dHRvbi1naG9zdC10aW55LXBhZGRpbmc6IDAuMzEyNXJlbSAwLjYyNXJlbSxcbiAgYnV0dG9uLWdob3N0LXNtYWxsLXBhZGRpbmc6IDAuNDM3NXJlbSAwLjg3NXJlbSxcbiAgYnV0dG9uLWdob3N0LW1lZGl1bS1wYWRkaW5nOiAwLjY4NzVyZW0gMS4xMjVyZW0sXG4gIGJ1dHRvbi1naG9zdC1sYXJnZS1wYWRkaW5nOiAwLjgxMjVyZW0gMS4xMjVyZW0sXG4gIGJ1dHRvbi1naG9zdC1naWFudC1wYWRkaW5nOiAwLjkzNzVyZW0gMS4zNzVyZW0sXG5cbiAgYnV0dG9uLWdob3N0LWJhc2ljLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtZm9jdXMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWhvdmVyLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWFjdGl2ZS10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy02MDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDAsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWZvY3VzLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwLFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1pbmZvLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvcixcbiAgYnV0dG9uLWdob3N0LWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgYnV0dG9uLWdob3N0LWluZm8tZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWhvdmVyLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvcixcbiAgYnV0dG9uLWdob3N0LWluZm8tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZ2hvc3Qtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDAsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWZvY3VzLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWdob3N0LWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDAsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItaG92ZXItdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZ2hvc3QtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDAsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWZvY3VzLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1ob3Zlci10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1hY3RpdmUtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWhlcm8tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWhlcm8tYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgYnV0dG9uLWhlcm8tYm9yZGVyLXdpZHRoOiAwLFxuICBidXR0b24taGVyby10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlLFxuXG4gIGJ1dHRvbi1oZXJvLXRpbnktcGFkZGluZzogMC4zNzVyZW0gMC42ODc1cmVtLFxuICBidXR0b24taGVyby1zbWFsbC1wYWRkaW5nOiAwLjVyZW0gMC45Mzc1cmVtLFxuICBidXR0b24taGVyby1tZWRpdW0tcGFkZGluZzogMC43NXJlbSAxLjE4NzVyZW0sXG4gIGJ1dHRvbi1oZXJvLWxhcmdlLXBhZGRpbmc6IDAuODc1cmVtIDEuMTg3NXJlbSxcbiAgYnV0dG9uLWhlcm8tZ2lhbnQtcGFkZGluZzogMXJlbSAxLjQzNzVyZW0sXG5cbiAgYnV0dG9uLWhlcm8tc2hhZG93OiAwIDAgdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1oZXJvLXRleHQtc2hhZG93OiBzaGFkb3csXG4gIGJ1dHRvbi1oZXJvLWJldmVsLXNpemU6IDAgMCAwIDAsXG4gIGJ1dHRvbi1oZXJvLWdsb3ctc2l6ZTogMCAwIDAgMCxcbiAgYnV0dG9uLWhlcm8tb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgYnV0dG9uLWhlcm8tb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCxcblxuICBidXR0b24taGVyby1iYXNpYy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy02MDAsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLWJldmVsLWNvbG9yOiBjb2xvci1iYXNpYy02MDAsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLWdsb3ctY29sb3I6IGNvbG9yLWJhc2ljLTcwMCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0yMDAsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMzAwLFxuICBidXR0b24taGVyby1iYXNpYy1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cyxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWhvdmVyLFxuICBidXR0b24taGVyby1iYXNpYy1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0zMDAsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLWFjdGl2ZS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1hY3RpdmUsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuICBidXR0b24taGVyby1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24taGVyby1wcmltYXJ5LWJldmVsLWNvbG9yOiBjb2xvci1wcmltYXJ5LTYwMCxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1nbG93LWNvbG9yOiBjb2xvci1wcmltYXJ5LTcwMCxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktNDAwLFxuICBidXR0b24taGVyby1wcmltYXJ5LXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktNTAwLFxuICBidXR0b24taGVyby1wcmltYXJ5LWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTMwMCxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBidXR0b24taGVyby1wcmltYXJ5LWFjdGl2ZS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktNTAwLFxuICBidXR0b24taGVyby1wcmltYXJ5LWFjdGl2ZS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRpc2FibGVkLFxuICBidXR0b24taGVyby1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtYmV2ZWwtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNjAwLFxuICBidXR0b24taGVyby1zdWNjZXNzLWdsb3ctY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNzAwLFxuICBidXR0b24taGVyby1zdWNjZXNzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy00MDAsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBidXR0b24taGVyby1zdWNjZXNzLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy01MDAsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtMzAwLFxuICBidXR0b24taGVyby1zdWNjZXNzLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy01MDAsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLFxuICBidXR0b24taGVyby1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24taGVyby1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWhlcm8taW5mby1iZXZlbC1jb2xvcjogY29sb3ItaW5mby02MDAsXG4gIGJ1dHRvbi1oZXJvLWluZm8tZ2xvdy1jb2xvcjogY29sb3ItaW5mby03MDAsXG4gIGJ1dHRvbi1oZXJvLWluZm8tbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTQwMCxcbiAgYnV0dG9uLWhlcm8taW5mby1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLWluZm8tZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTUwMCxcbiAgYnV0dG9uLWhlcm8taW5mby1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICBidXR0b24taGVyby1pbmZvLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby0zMDAsXG4gIGJ1dHRvbi1oZXJvLWluZm8taG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgYnV0dG9uLWhlcm8taW5mby1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTUwMCxcbiAgYnV0dG9uLWhlcm8taW5mby1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUsXG4gIGJ1dHRvbi1oZXJvLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kaXNhYmxlZCxcbiAgYnV0dG9uLWhlcm8taW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24taGVyby13YXJuaW5nLWJldmVsLWNvbG9yOiBjb2xvci13YXJuaW5nLTYwMCxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1nbG93LWNvbG9yOiBjb2xvci13YXJuaW5nLTcwMCxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctNDAwLFxuICBidXR0b24taGVyby13YXJuaW5nLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBidXR0b24taGVyby13YXJuaW5nLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTMwMCxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICBidXR0b24taGVyby13YXJuaW5nLWFjdGl2ZS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBidXR0b24taGVyby13YXJuaW5nLWFjdGl2ZS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRpc2FibGVkLFxuICBidXR0b24taGVyby13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWJldmVsLWNvbG9yOiBjb2xvci1kYW5nZXItNjAwLFxuICBidXR0b24taGVyby1kYW5nZXItZ2xvdy1jb2xvcjogY29sb3ItZGFuZ2VyLTcwMCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTQwMCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBidXR0b24taGVyby1kYW5nZXItZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItNTAwLFxuICBidXR0b24taGVyby1kYW5nZXItZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICBidXR0b24taGVyby1kYW5nZXItaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItMzAwLFxuICBidXR0b24taGVyby1kYW5nZXItaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICBidXR0b24taGVyby1kYW5nZXItYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgYnV0dG9uLWhlcm8tZGFuZ2VyLWFjdGl2ZS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLFxuICBidXR0b24taGVyby1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRpc2FibGVkLFxuICBidXR0b24taGVyby1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24taGVyby1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1iZXZlbC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuICBidXR0b24taGVyby1jb250cm9sLWdsb3ctY29sb3I6IGNvbG9yLWJhc2ljLTcwMCxcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0yMDAsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cyxcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICBidXR0b24taGVyby1jb250cm9sLWFjdGl2ZS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTIwMCxcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1hY3RpdmUsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBidXR0b24taGVyby1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgaWNvbi1idXR0b24tZmlsbGVkLXRpbnktcGFkZGluZzogMC40Mzc1cmVtIDAuMzEyNXJlbSxcbiAgaWNvbi1idXR0b24tZmlsbGVkLXNtYWxsLXBhZGRpbmc6IDAuNTYyNXJlbSAwLjQzNzVyZW0sXG4gIGljb24tYnV0dG9uLWZpbGxlZC1tZWRpdW0tcGFkZGluZzogMC42ODc1cmVtIDAuNTYyNXJlbSxcbiAgaWNvbi1idXR0b24tZmlsbGVkLWxhcmdlLXBhZGRpbmc6IDAuODEyNXJlbSAwLjY4NzVyZW0sXG4gIGljb24tYnV0dG9uLWZpbGxlZC1naWFudC1wYWRkaW5nOiAxLjA2MjVyZW0gMC45Mzc1cmVtLFxuXG4gIGljb24tYnV0dG9uLW91dGxpbmUtdGlueS1wYWRkaW5nOiAwLjQzNzVyZW0gMC4zMTI1cmVtLFxuICBpY29uLWJ1dHRvbi1vdXRsaW5lLXNtYWxsLXBhZGRpbmc6IDAuNTYyNXJlbSAwLjQzNzVyZW0sXG4gIGljb24tYnV0dG9uLW91dGxpbmUtbWVkaXVtLXBhZGRpbmc6IDAuNjg3NXJlbSAwLjU2MjVyZW0sXG4gIGljb24tYnV0dG9uLW91dGxpbmUtbGFyZ2UtcGFkZGluZzogMC44MTI1cmVtIDAuNjg3NXJlbSxcbiAgaWNvbi1idXR0b24tb3V0bGluZS1naWFudC1wYWRkaW5nOiAxLjA2MjVyZW0gMC45Mzc1cmVtLFxuXG4gIGljb24tYnV0dG9uLWdob3N0LXRpbnktcGFkZGluZzogMC40Mzc1cmVtIDAuMzEyNXJlbSxcbiAgaWNvbi1idXR0b24tZ2hvc3Qtc21hbGwtcGFkZGluZzogMC41NjI1cmVtIDAuNDM3NXJlbSxcbiAgaWNvbi1idXR0b24tZ2hvc3QtbWVkaXVtLXBhZGRpbmc6IDAuNjg3NXJlbSAwLjU2MjVyZW0sXG4gIGljb24tYnV0dG9uLWdob3N0LWxhcmdlLXBhZGRpbmc6IDAuODEyNXJlbSAwLjY4NzVyZW0sXG4gIGljb24tYnV0dG9uLWdob3N0LWdpYW50LXBhZGRpbmc6IDEuMDYyNXJlbSAwLjkzNzVyZW0sXG5cbiAgaWNvbi1idXR0b24taGVyby10aW55LXBhZGRpbmc6IDAuNXJlbSAwLjM3NXJlbSxcbiAgaWNvbi1idXR0b24taGVyby1zbWFsbC1wYWRkaW5nOiAwLjU2MjVyZW0gMC41cmVtLFxuICBpY29uLWJ1dHRvbi1oZXJvLW1lZGl1bS1wYWRkaW5nOiAwLjc1cmVtIDAuNTYyNXJlbSxcbiAgaWNvbi1idXR0b24taGVyby1sYXJnZS1wYWRkaW5nOiAwLjg3NXJlbSAwLjY4NzVyZW0sXG4gIGljb24tYnV0dG9uLWhlcm8tZ2lhbnQtcGFkZGluZzogMS4wNjI1cmVtIDFyZW0sXG5cbiAgaW5wdXQtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgaW5wdXQtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGlucHV0LW91dGxpbmUtY29sb3I6IG91dGxpbmUtY29sb3IsXG4gIGlucHV0LW91dGxpbmUtd2lkdGg6IG91dGxpbmUtd2lkdGgsXG4gIGlucHV0LXBsYWNlaG9sZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBpbnB1dC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuXG4gIGlucHV0LWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGlucHV0LWJhc2ljLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgaW5wdXQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1iYXNpYy1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBpbnB1dC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGlucHV0LWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgaW5wdXQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBpbnB1dC1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBpbnB1dC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGlucHV0LWJhc2ljLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgaW5wdXQtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBpbnB1dC1wcmltYXJ5LXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgaW5wdXQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGlucHV0LXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBpbnB1dC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIGlucHV0LXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBpbnB1dC1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIGlucHV0LXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgaW5wdXQtcHJpbWFyeS1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGlucHV0LXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgaW5wdXQtc3VjY2Vzcy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGlucHV0LXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBpbnB1dC1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgaW5wdXQtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLFxuICBpbnB1dC1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgaW5wdXQtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLFxuICBpbnB1dC1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBpbnB1dC1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGlucHV0LXN1Y2Nlc3MtZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBpbnB1dC1pbmZvLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGlucHV0LWluZm8tcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBpbnB1dC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgaW5wdXQtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGlucHV0LWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcixcbiAgaW5wdXQtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIGlucHV0LWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLWJvcmRlcixcbiAgaW5wdXQtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgaW5wdXQtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBpbnB1dC1pbmZvLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgaW5wdXQtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBpbnB1dC13YXJuaW5nLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgaW5wdXQtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGlucHV0LXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBpbnB1dC13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXIsXG4gIGlucHV0LXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBpbnB1dC13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3Zlci1ib3JkZXIsXG4gIGlucHV0LXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgaW5wdXQtd2FybmluZy1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGlucHV0LWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBpbnB1dC1kYW5nZXItcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBpbnB1dC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgaW5wdXQtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgaW5wdXQtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlcixcbiAgaW5wdXQtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgaW5wdXQtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLWJvcmRlcixcbiAgaW5wdXQtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBpbnB1dC1kYW5nZXItZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBpbnB1dC1jb250cm9sLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgaW5wdXQtY29udHJvbC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGlucHV0LWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0zMDAsXG4gIGlucHV0LWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTUwMCxcbiAgaW5wdXQtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTUwMCxcbiAgaW5wdXQtY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBpbnB1dC1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNDAwLFxuICBpbnB1dC1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGlucHV0LWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgaW5wdXQtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBpbnB1dC1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgaW5wdXQtY29udHJvbC1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgaW5wdXQtcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGlucHV0LXNlbWktcm91bmQtYm9yZGVyLXJhZGl1czogMC43NXJlbSxcbiAgaW5wdXQtcm91bmQtYm9yZGVyLXJhZGl1czogMS41cmVtLFxuXG4gIGlucHV0LXRpbnktdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi0yLWZvbnQtc2l6ZSxcbiAgaW5wdXQtdGlueS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWNhcHRpb24tMi1mb250LXdlaWdodCxcbiAgaW5wdXQtdGlueS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tMi1saW5lLWhlaWdodCxcbiAgaW5wdXQtdGlueS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBpbnB1dC10aW55LXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC10aW55LXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC10aW55LXBhZGRpbmc6IDAuMTg3NXJlbSAxcmVtLFxuICBpbnB1dC10aW55LW1heC13aWR0aDogMjByZW0sXG5cbiAgaW5wdXQtc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIGlucHV0LXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgaW5wdXQtc21hbGwtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1zbWFsbC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBpbnB1dC1zbWFsbC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgaW5wdXQtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGlucHV0LXNtYWxsLXBhZGRpbmc6IDAuMTg3NXJlbSAxcmVtLFxuICBpbnB1dC1zbWFsbC1tYXgtd2lkdGg6IDIwcmVtLFxuXG4gIGlucHV0LW1lZGl1bS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGlucHV0LW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1tZWRpdW0tdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgaW5wdXQtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGlucHV0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgaW5wdXQtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1tZWRpdW0tcGFkZGluZzogMC40Mzc1cmVtIDFyZW0sXG4gIGlucHV0LW1lZGl1bS1tYXgtd2lkdGg6IDIwcmVtLFxuXG4gIGlucHV0LWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgaW5wdXQtbGFyZ2UtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgaW5wdXQtbGFyZ2UtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgaW5wdXQtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgaW5wdXQtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGlucHV0LWxhcmdlLXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1sYXJnZS1wYWRkaW5nOiAwLjY4NzVyZW0gMXJlbSxcbiAgaW5wdXQtbGFyZ2UtbWF4LXdpZHRoOiAzMHJlbSxcblxuICBpbnB1dC1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1oZWFkaW5nLTYtZm9udC1zaXplLFxuICBpbnB1dC1naWFudC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWhlYWRpbmctNi1mb250LXdlaWdodCxcbiAgaW5wdXQtZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1oZWFkaW5nLTYtbGluZS1oZWlnaHQsXG4gIGlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1naWFudC1wbGFjZWhvbGRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgaW5wdXQtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDFyZW0sXG4gIGlucHV0LWdpYW50LW1heC13aWR0aDogMzByZW0sXG5cbiAgY2hlY2tib3gtaGVpZ2h0OiAxLjI1cmVtLFxuICBjaGVja2JveC13aWR0aDogMS4yNXJlbSxcbiAgY2hlY2tib3gtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgY2hlY2tib3gtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGNoZWNrYm94LWJvcmRlci1yYWRpdXM6IDNweCxcbiAgY2hlY2tib3gtb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCxcbiAgY2hlY2tib3gtb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgY2hlY2tib3gtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtZmFtaWx5LFxuICBjaGVja2JveC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgY2hlY2tib3gtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBjaGVja2JveC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIGNoZWNrYm94LXRleHQtc3BhY2U6IDAuNjg3NXJlbSxcbiAgY2hlY2tib3gtcGFkZGluZzogMCxcbiAgY2hlY2tib3gtZm9jdXMtaW5zZXQtc2hhZG93LWxlbmd0aDogMCAwIDAgMTAwdm1heCxcblxuICBjaGVja2JveC1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGVja2JveC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBjaGVja2JveC1iYXNpYy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2hlY2tib3gtYmFzaWMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWNoZWNrZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWJhc2ljLWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjaGVja2JveC1iYXNpYy1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtaW5kZXRlcm1pbmF0ZS1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGNoZWNrYm94LWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIGNoZWNrYm94LWJhc2ljLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2hlY2tib3gtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBjaGVja2JveC1iYXNpYy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNoZWNrYm94LWJhc2ljLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBjaGVja2JveC1iYXNpYy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGNoZWNrYm94LWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1kaXNhYmxlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgY2hlY2tib3gtYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIGNoZWNrYm94LWJhc2ljLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgY2hlY2tib3gtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGVja2JveC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2hlY2tib3gtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNoZWNrYm94LXByaW1hcnktY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtcHJpbWFyeS1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2hlY2tib3gtcHJpbWFyeS1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGNoZWNrYm94LXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIGNoZWNrYm94LXByaW1hcnktZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNoZWNrYm94LXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIGNoZWNrYm94LXByaW1hcnktaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2hlY2tib3gtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGNoZWNrYm94LXByaW1hcnktYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGNoZWNrYm94LXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktZGlzYWJsZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIGNoZWNrYm94LXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBjaGVja2JveC1zdWNjZXNzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWNoZWNrZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaW5kZXRlcm1pbmF0ZS1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLFxuICBjaGVja2JveC1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBjaGVja2JveC1zdWNjZXNzLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLFxuICBjaGVja2JveC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBjaGVja2JveC1zdWNjZXNzLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLFxuICBjaGVja2JveC1zdWNjZXNzLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBjaGVja2JveC1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBjaGVja2JveC1pbmZvLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoZWNrYm94LWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBjaGVja2JveC1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgY2hlY2tib3gtaW5mby1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1jaGVja2VkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1pbmZvLWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBjaGVja2JveC1pbmZvLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cyxcbiAgY2hlY2tib3gtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgY2hlY2tib3gtaW5mby1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2hlY2tib3gtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgY2hlY2tib3gtaW5mby1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LWluZm8tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBjaGVja2JveC1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgY2hlY2tib3gtaW5mby1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgY2hlY2tib3gtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1kaXNhYmxlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjaGVja2JveC1pbmZvLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICBjaGVja2JveC1pbmZvLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgY2hlY2tib3gtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGVja2JveC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2hlY2tib3gtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGNoZWNrYm94LXdhcm5pbmctY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtd2FybmluZy1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgY2hlY2tib3gtd2FybmluZy1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGNoZWNrYm94LXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIGNoZWNrYm94LXdhcm5pbmctZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC13YXJuaW5nLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2hlY2tib3gtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsXG4gIGNoZWNrYm94LXdhcm5pbmctYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGNoZWNrYm94LXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctZGlzYWJsZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIGNoZWNrYm94LWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGVja2JveC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNoZWNrYm94LWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNoZWNrYm94LWRhbmdlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtZGFuZ2VyLWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNoZWNrYm94LWRhbmdlci1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItaW5kZXRlcm1pbmF0ZS1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1cyxcbiAgY2hlY2tib3gtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICBjaGVja2JveC1kYW5nZXItZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNoZWNrYm94LWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNoZWNrYm94LWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUsXG4gIGNoZWNrYm94LWRhbmdlci1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGNoZWNrYm94LWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgY2hlY2tib3gtZGFuZ2VyLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICBjaGVja2JveC1kYW5nZXItZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBjaGVja2JveC1jb250cm9sLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNoZWNrYm94LWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBjaGVja2JveC1jb250cm9sLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWNoZWNrZWQtY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIGNoZWNrYm94LWNvbnRyb2wtaW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGNoZWNrYm94LWNvbnRyb2wtaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtaW5kZXRlcm1pbmF0ZS1jaGVja21hcmstY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgY2hlY2tib3gtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLFxuICBjaGVja2JveC1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLFxuICBjaGVja2JveC1jb250cm9sLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLFxuICBjaGVja2JveC1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICBjaGVja2JveC1jb250cm9sLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNoZWNrYm94LWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLFxuICBjaGVja2JveC1jb250cm9sLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGNoZWNrYm94LWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1kaXNhYmxlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWNvbnRyb2wtZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIGNoZWNrYm94LWNvbnRyb2wtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBiYWRnZS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBiYWRnZS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgYmFkZ2UtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXRpbnktZm9udC1zaXplLFxuICBiYWRnZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgYmFkZ2UtdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tdGlueS1saW5lLWhlaWdodCxcbiAgYmFkZ2UtcGFkZGluZzogMC4yNXJlbSAwLjRyZW0sXG5cbiAgYmFkZ2UtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBiYWRnZS1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBiYWRnZS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgYmFkZ2UtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJhZGdlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBiYWRnZS1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYmFkZ2UtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGJhZGdlLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBiYWRnZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgYmFkZ2Utd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJhZGdlLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgYmFkZ2UtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYmFkZ2UtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGJhZGdlLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuXG4gIHByb2dyZXNzLWJhci1hbmltYXRpb24tZHVyYXRpb246IDQwMG1zLFxuICBwcm9ncmVzcy1iYXItYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgcHJvZ3Jlc3MtYmFyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG5cbiAgcHJvZ3Jlc3MtYmFyLXRpbnktaGVpZ2h0OiAxcmVtLFxuICBwcm9ncmVzcy1iYXItdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLXRpbnktdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBwcm9ncmVzcy1iYXItdGlueS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIHByb2dyZXNzLWJhci1zbWFsbC1oZWlnaHQ6IDEuMjVyZW0sXG4gIHByb2dyZXNzLWJhci1zbWFsbC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLXNtYWxsLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLW1lZGl1bS1oZWlnaHQ6IDEuMzc1cmVtLFxuICBwcm9ncmVzcy1iYXItbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBwcm9ncmVzcy1iYXItbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIHByb2dyZXNzLWJhci1sYXJnZS1oZWlnaHQ6IDEuNXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgcHJvZ3Jlc3MtYmFyLWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHByb2dyZXNzLWJhci1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBwcm9ncmVzcy1iYXItZ2lhbnQtaGVpZ2h0OiAxLjc1cmVtLFxuICBwcm9ncmVzcy1iYXItZ2lhbnQtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItZ2lhbnQtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLWdpYW50LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgcHJvZ3Jlc3MtYmFyLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgcHJvZ3Jlc3MtYmFyLWJhc2ljLWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTQsXG4gIHByb2dyZXNzLWJhci1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuXG4gIHByb2dyZXNzLWJhci1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgcHJvZ3Jlc3MtYmFyLXByaW1hcnktZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgcHJvZ3Jlc3MtYmFyLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHByb2dyZXNzLWJhci1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHByb2dyZXNzLWJhci1pbmZvLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgcHJvZ3Jlc3MtYmFyLWluZm8tZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgcHJvZ3Jlc3MtYmFyLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHByb2dyZXNzLWJhci13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgcHJvZ3Jlc3MtYmFyLXdhcm5pbmctZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgcHJvZ3Jlc3MtYmFyLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHByb2dyZXNzLWJhci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItZGFuZ2VyLWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgcHJvZ3Jlc3MtYmFyLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgcHJvZ3Jlc3MtYmFyLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItY29udHJvbC1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG5cbiAgYWxlcnQtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgYWxlcnQtYm90dG9tLW1hcmdpbjogMS41cmVtLFxuICBhbGVydC1wYWRkaW5nOiAxcmVtIDEuMTI1cmVtLFxuICBhbGVydC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgYWxlcnQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBhbGVydC1zY3JvbGxiYXItd2lkdGg6IHNjcm9sbGJhci13aWR0aCxcbiAgYWxlcnQtc2hhZG93OiBub25lLFxuICBhbGVydC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgYWxlcnQtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBhbGVydC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBhbGVydC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuXG4gIGFsZXJ0LWNsb3NhYmxlLXN0YXJ0LXBhZGRpbmc6IDNyZW0sXG5cbiAgYWxlcnQtdGlueS1oZWlnaHQ6IDQuNXJlbSxcbiAgYWxlcnQtc21hbGwtaGVpZ2h0OiA1Ljc1cmVtLFxuICBhbGVydC1tZWRpdW0taGVpZ2h0OiA3cmVtLFxuICBhbGVydC1tZWRpdW0tcGFkZGluZzogMXJlbSAxLjEyNXJlbSxcbiAgYWxlcnQtbGFyZ2UtaGVpZ2h0OiA4LjI1cmVtLFxuICBhbGVydC1naWFudC1oZWlnaHQ6IDkuNXJlbSxcblxuICBhbGVydC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGFsZXJ0LWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGFsZXJ0LXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBhbGVydC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYWxlcnQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGFsZXJ0LXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBhbGVydC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgYWxlcnQtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGFsZXJ0LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBhbGVydC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYWxlcnQtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBhbGVydC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBhbGVydC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgYWxlcnQtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG5cbiAgYWxlcnQtYWNjZW50LWJhc2ljLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgYWxlcnQtYWNjZW50LXByaW1hcnktY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgYWxlcnQtYWNjZW50LWluZm8tY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgYWxlcnQtYWNjZW50LXN1Y2Nlc3MtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgYWxlcnQtYWNjZW50LXdhcm5pbmctY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgYWxlcnQtYWNjZW50LWRhbmdlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGFsZXJ0LWFjY2VudC1jb250cm9sLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG5cbiAgYWxlcnQtb3V0bGluZS13aWR0aDogMXB4LFxuICBhbGVydC1vdXRsaW5lLWJhc2ljLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cy1ib3JkZXIsXG4gIGFsZXJ0LW91dGxpbmUtcHJpbWFyeS1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIGFsZXJ0LW91dGxpbmUtaW5mby1jb2xvcjogY29sb3ItaW5mby1mb2N1cy1ib3JkZXIsXG4gIGFsZXJ0LW91dGxpbmUtc3VjY2Vzcy1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsXG4gIGFsZXJ0LW91dGxpbmUtd2FybmluZy1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXIsXG4gIGFsZXJ0LW91dGxpbmUtZGFuZ2VyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLFxuICBhbGVydC1vdXRsaW5lLWNvbnRyb2wtY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMtYm9yZGVyLFxuXG4gIGNoYXQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBjaGF0LWJvcmRlcjogbm9uZSxcbiAgY2hhdC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBjaGF0LXNoYWRvdzogc2hhZG93LFxuICBjaGF0LXBhZGRpbmc6IDFyZW0gMS4yNXJlbSxcbiAgY2hhdC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgY2hhdC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsXG4gIGNoYXQtc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG5cbiAgY2hhdC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGF0LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBjaGF0LXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGNoYXQtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGNoYXQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgY2hhdC1oZWFkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgY2hhdC1oZWFkZXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBjaGF0LWhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBjaGF0LWhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuXG4gIGNoYXQtdGlueS1oZWlnaHQ6IDEzLjVyZW0sXG4gIGNoYXQtc21hbGwtaGVpZ2h0OiAyMXJlbSxcbiAgY2hhdC1tZWRpdW0taGVpZ2h0OiAyOC41cmVtLFxuICBjaGF0LWxhcmdlLWhlaWdodDogMzZyZW0sXG4gIGNoYXQtZ2lhbnQtaGVpZ2h0OiA0My41cmVtLFxuXG4gIGNoYXQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBjaGF0LWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoYXQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNoYXQtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoYXQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGNoYXQtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoYXQtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGNoYXQtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoYXQtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGNoYXQtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoYXQtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBjaGF0LWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoYXQtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGNoYXQtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG5cbiAgY2hhdC1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBjaGF0LWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIGNoYXQtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcblxuICBjaGF0LW1lc3NhZ2UtYmFja2dyb3VuZDogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjaGF0LW1lc3NhZ2UtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGF0LW1lc3NhZ2UtcmVwbHktYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBjaGF0LW1lc3NhZ2UtcmVwbHktdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2hhdC1tZXNzYWdlLWF2YXRhci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy01MDAsXG4gIGNoYXQtbWVzc2FnZS1zZW5kZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBjaGF0LW1lc3NhZ2UtcXVvdGUtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBjaGF0LW1lc3NhZ2UtcXVvdGUtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBjaGF0LW1lc3NhZ2UtZmlsZS10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGNoYXQtbWVzc2FnZS1maWxlLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHNwaW5uZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc3Bpbm5lci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgc3Bpbm5lci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSxcbiAgc3Bpbm5lci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgc3Bpbm5lci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG5cbiAgc3Bpbm5lci1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIHNwaW5uZXItYmFzaWMtY2lyY2xlLWZpbGxlZC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzcGlubmVyLWJhc2ljLWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgc3Bpbm5lci1wcmltYXJ5LWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc3Bpbm5lci1wcmltYXJ5LWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgc3Bpbm5lci1pbmZvLWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgc3Bpbm5lci1pbmZvLWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgc3Bpbm5lci1zdWNjZXNzLWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgc3Bpbm5lci1zdWNjZXNzLWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgc3Bpbm5lci13YXJuaW5nLWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgc3Bpbm5lci13YXJuaW5nLWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBzcGlubmVyLWRhbmdlci1jaXJjbGUtZmlsbGVkLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgc3Bpbm5lci1kYW5nZXItY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0yMDAsXG4gIHNwaW5uZXItY29udHJvbC1jaXJjbGUtZmlsbGVkLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHNwaW5uZXItY29udHJvbC1jaXJjbGUtZW1wdHktY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHNwaW5uZXItaGVpZ2h0LXRpbnk6IDFyZW0sXG4gIHNwaW5uZXItaGVpZ2h0LXNtYWxsOiAxLjI1cmVtLFxuICBzcGlubmVyLWhlaWdodC1tZWRpdW06IDEuNXJlbSxcbiAgc3Bpbm5lci1oZWlnaHQtbGFyZ2U6IDEuNzVyZW0sXG4gIHNwaW5uZXItaGVpZ2h0LWdpYW50OiAycmVtLFxuXG4gIHN0ZXBwZXItc3RlcC10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHN0ZXBwZXItc3RlcC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgc3RlcHBlci1zdGVwLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHN0ZXBwZXItc3RlcC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgc3RlcHBlci1zdGVwLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBzdGVwcGVyLXN0ZXAtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1hY3RpdmUtY29sb3IsXG4gIHN0ZXBwZXItc3RlcC1jb21wbGV0ZWQtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWJvcmRlci13aWR0aDogMXB4LFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtYm9yZGVyLXJhZGl1czogNTAlLFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtd2lkdGg6IDJyZW0sXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWNvbXBsZXRlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1jb21wbGV0ZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1jb21wbGV0ZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHN0ZXBwZXItY29ubmVjdG9yLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc3RlcHBlci1jb25uZWN0b3ItY29tcGxldGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc3RlcHBlci1ob3Jpem9udGFsLWNvbm5lY3Rvci1tYXJnaW46IDFyZW0sXG4gIHN0ZXBwZXItdmVydGljYWwtY29ubmVjdG9yLW1hcmdpbjogMXJlbSxcblxuICBzdGVwcGVyLXN0ZXAtY29udGVudC1wYWRkaW5nOiAxLjI1cmVtLFxuXG4gIGFjY29yZGlvbi1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBhY2NvcmRpb24tcGFkZGluZzogMS4yNXJlbSxcbiAgYWNjb3JkaW9uLXNoYWRvdzogc2hhZG93LFxuICBhY2NvcmRpb24taGVhZGVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGFjY29yZGlvbi1oZWFkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgYWNjb3JkaW9uLWhlYWRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGFjY29yZGlvbi1oZWFkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgYWNjb3JkaW9uLWhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBhY2NvcmRpb24taGVhZGVyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBhY2NvcmRpb24taGVhZGVyLWJvcmRlci13aWR0aDogMXB4LFxuICBhY2NvcmRpb24taXRlbS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGFjY29yZGlvbi1pdGVtLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGFjY29yZGlvbi1pdGVtLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBhY2NvcmRpb24taXRlbS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBhY2NvcmRpb24taXRlbS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgYWNjb3JkaW9uLWl0ZW0tdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgbGlzdC1pdGVtLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIGxpc3QtaXRlbS1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICBsaXN0LWl0ZW0tZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcbiAgbGlzdC1pdGVtLXBhZGRpbmc6IDFyZW0sXG4gIGxpc3QtaXRlbS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBsaXN0LWl0ZW0tZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBsaXN0LWl0ZW0tZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGxpc3QtaXRlbS1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGxpc3QtaXRlbS1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG5cbiAgY2FsZW5kYXItd2lkdGg6IDIwLjYyNXJlbSxcbiAgY2FsZW5kYXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBjYWxlbmRhci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBjYWxlbmRhci1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBjYWxlbmRhci1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgY2FsZW5kYXItYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgY2FsZW5kYXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2FsZW5kYXItdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgY2FsZW5kYXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBjYWxlbmRhci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuXG4gIGNhbGVuZGFyLXBpY2tlci1wYWRkaW5nLXRvcDogMC4yNXJlbSxcbiAgY2FsZW5kYXItcGlja2VyLXBhZGRpbmctYm90dG9tOiAwLjYyNXJlbSxcbiAgY2FsZW5kYXItcGlja2VyLXBhZGRpbmctc3RhcnQ6IDAuNjI1cmVtLFxuICBjYWxlbmRhci1waWNrZXItcGFkZGluZy1lbmQ6IDAuNjI1cmVtLFxuXG4gIGNhbGVuZGFyLW5hdmlnYXRpb24tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2FsZW5kYXItbmF2aWdhdGlvbi10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgY2FsZW5kYXItbmF2aWdhdGlvbi10aXRsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItbmF2aWdhdGlvbi10aXRsZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItbmF2aWdhdGlvbi10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG4gIGNhbGVuZGFyLW5hdmlnYXRpb24tcGFkZGluZzogMC42MjVyZW0gMC4yNXJlbSxcblxuICBjYWxlbmRhci1jZWxsLWluYWN0aXZlLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcblxuICBjYWxlbmRhci1jZWxsLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgY2FsZW5kYXItY2VsbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGNhbGVuZGFyLWNlbGwtaG92ZXItYm9yZGVyLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGNhbGVuZGFyLWNlbGwtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWZvbnQtc2l6ZTogY2FsZW5kYXItdGV4dC1mb250LXNpemUsXG4gIGNhbGVuZGFyLWNlbGwtaG92ZXItdGV4dC1mb250LXdlaWdodDogY2FsZW5kYXItdGV4dC1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWxpbmUtaGVpZ2h0OiBjYWxlbmRhci10ZXh0LWxpbmUtaGVpZ2h0LFxuXG4gIGNhbGVuZGFyLWNlbGwtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBjYWxlbmRhci1jZWxsLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgY2FsZW5kYXItY2VsbC1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYWxlbmRhci1jZWxsLWFjdGl2ZS10ZXh0LWZvbnQtc2l6ZTogY2FsZW5kYXItdGV4dC1mb250LXNpemUsXG4gIGNhbGVuZGFyLWNlbGwtYWN0aXZlLXRleHQtZm9udC13ZWlnaHQ6IGNhbGVuZGFyLXRleHQtZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLWNlbGwtYWN0aXZlLXRleHQtbGluZS1oZWlnaHQ6IGNhbGVuZGFyLXRleHQtbGluZS1oZWlnaHQsXG5cbiAgY2FsZW5kYXItY2VsbC10b2RheS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktdGV4dC1mb250LXNpemU6IGNhbGVuZGFyLXRleHQtZm9udC1zaXplLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXRleHQtZm9udC13ZWlnaHQ6IGNhbGVuZGFyLXRleHQtZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktdGV4dC1saW5lLWhlaWdodDogY2FsZW5kYXItdGV4dC1saW5lLWhlaWdodCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtaG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktaW4tcmFuZ2UtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktaW4tcmFuZ2UtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWluLXJhbmdlLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLXRleHQtZm9udC1zaXplOiBjYWxlbmRhci10ZXh0LWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC10ZXh0LWZvbnQtd2VpZ2h0OiBjYWxlbmRhci10ZXh0LWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLXRleHQtbGluZS1oZWlnaHQ6IGNhbGVuZGFyLXRleHQtbGluZS1oZWlnaHQsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsXG5cbiAgY2FsZW5kYXItZGF5LWNlbGwtd2lkdGg6IDIuNzVyZW0sXG4gIGNhbGVuZGFyLWRheS1jZWxsLWhlaWdodDogMi43NXJlbSxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC13aWR0aDogNC44MTI1cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLWhlaWdodDogY2FsZW5kYXItZGF5LWNlbGwtaGVpZ2h0LFxuICBjYWxlbmRhci15ZWFyLWNlbGwtd2lkdGg6IGNhbGVuZGFyLW1vbnRoLWNlbGwtd2lkdGgsXG4gIGNhbGVuZGFyLXllYXItY2VsbC1oZWlnaHQ6IGNhbGVuZGFyLW1vbnRoLWNlbGwtaGVpZ2h0LFxuXG4gIGNhbGVuZGFyLXdlZWtkYXktYmFja2dyb3VuZDogdHJhbnNwYXJlbnQsXG4gIGNhbGVuZGFyLXdlZWtkYXktZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgY2FsZW5kYXItd2Vla2RheS1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBjYWxlbmRhci13ZWVrZGF5LXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgY2FsZW5kYXItd2Vla2RheS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGNhbGVuZGFyLXdlZWtkYXktdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItd2Vla2RheS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBjYWxlbmRhci13ZWVrZGF5LWhvbGlkYXktdGV4dC1jb2xvcjogY2FsZW5kYXItd2Vla2RheS10ZXh0LWNvbG9yLFxuICBjYWxlbmRhci13ZWVrZGF5LWhlaWdodDogY2FsZW5kYXItZGF5LWNlbGwtaGVpZ2h0LFxuICBjYWxlbmRhci13ZWVrZGF5LXdpZHRoOiBjYWxlbmRhci1kYXktY2VsbC13aWR0aCxcblxuICBjYWxlbmRhci13ZWVrbnVtYmVyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50LFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcbiAgY2FsZW5kYXItd2Vla251bWJlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgY2FsZW5kYXItd2Vla251bWJlci1oZWlnaHQ6IGNhbGVuZGFyLXdlZWtkYXktaGVpZ2h0LFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLXdpZHRoOiBjYWxlbmRhci13ZWVrZGF5LXdpZHRoLFxuXG4gIGNhbGVuZGFyLWxhcmdlLXdpZHRoOiAyMi4zNzVyZW0sXG4gIGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLXdpZHRoOiAzcmVtLFxuICBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS1oZWlnaHQ6IDNyZW0sXG4gIGNhbGVuZGFyLXdlZWtkYXktbGFyZ2UtaGVpZ2h0OiBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS13aWR0aCxcbiAgY2FsZW5kYXItd2Vla2RheS1sYXJnZS13aWR0aDogY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2UtaGVpZ2h0LFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLWxhcmdlLWhlaWdodDogY2FsZW5kYXItd2Vla2RheS1sYXJnZS1oZWlnaHQsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItbGFyZ2Utd2lkdGg6IGNhbGVuZGFyLXdlZWtkYXktbGFyZ2Utd2lkdGgsXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtbGFyZ2Utd2lkdGg6IDUuMjVyZW0sXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtbGFyZ2UtaGVpZ2h0OiBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS1oZWlnaHQsXG4gIGNhbGVuZGFyLXllYXItY2VsbC1sYXJnZS13aWR0aDogY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS13aWR0aCxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWxhcmdlLWhlaWdodDogY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS1oZWlnaHQsXG5cbiAgb3ZlcmxheS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUpLFxuXG4gIHRvb2x0aXAtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0zLFxuICB0b29sdGlwLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtYm9yZGVyLXN0eWxlOiBkYXNoZWQsXG4gIHRvb2x0aXAtYm9yZGVyLXdpZHRoOiAwLFxuICB0b29sdGlwLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHRvb2x0aXAtcGFkZGluZzogMC41cmVtIDFyZW0sXG4gIHRvb2x0aXAtdGV4dC1jb2xvcjogdGV4dC1hbHRlcm5hdGUtY29sb3IsXG4gIHRvb2x0aXAtdGV4dC1mb250LWZhbWlseTogdGV4dC1jYXB0aW9uLWZvbnQtZmFtaWx5LFxuICB0b29sdGlwLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB0b29sdGlwLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtY2FwdGlvbi1mb250LXdlaWdodCxcbiAgdG9vbHRpcC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQsXG4gIHRvb2x0aXAtaWNvbi1oZWlnaHQ6IDFyZW0sXG4gIHRvb2x0aXAtaWNvbi13aWR0aDogMXJlbSxcbiAgdG9vbHRpcC1tYXgtd2lkdGg6IDE2cmVtLFxuXG4gIHRvb2x0aXAtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICB0b29sdGlwLWJhc2ljLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9vbHRpcC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9vbHRpcC1wcmltYXJ5LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHRvb2x0aXAtaW5mby1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICB0b29sdGlwLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b29sdGlwLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICB0b29sdGlwLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdG9vbHRpcC1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9vbHRpcC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdG9vbHRpcC13YXJuaW5nLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICB0b29sdGlwLWRhbmdlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICB0b29sdGlwLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHRvb2x0aXAtY29udHJvbC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICB0b29sdGlwLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICB0b29sdGlwLXNoYWRvdzogc2hhZG93LFxuXG4gIG9wdGlvbi1saXN0LW1heC1oZWlnaHQ6IDIwcmVtLFxuICBvcHRpb24tbGlzdC1zaGFkb3c6IG5vbmUsXG4gIG9wdGlvbi1saXN0LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgb3B0aW9uLWxpc3QtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgb3B0aW9uLWxpc3QtYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW0sXG4gIG9wdGlvbi1saXN0LWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIG9wdGlvbi1saXN0LWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIG9wdGlvbi1saXN0LWFkamFjZW50LWJvcmRlci1jb2xvcjogb3B0aW9uLWxpc3QtYm9yZGVyLWNvbG9yLFxuICBvcHRpb24tbGlzdC1hZGphY2VudC1ib3JkZXItc3R5bGU6IG9wdGlvbi1saXN0LWJvcmRlci1zdHlsZSxcbiAgb3B0aW9uLWxpc3QtYWRqYWNlbnQtYm9yZGVyLXdpZHRoOiBvcHRpb24tbGlzdC1ib3JkZXItd2lkdGgsXG5cbiAgb3B0aW9uLWdyb3VwLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgb3B0aW9uLWdyb3VwLXRpbnktc3RhcnQtcGFkZGluZzogMS4yNXJlbSxcbiAgb3B0aW9uLWdyb3VwLXNtYWxsLXN0YXJ0LXBhZGRpbmc6IDEuNzVyZW0sXG4gIG9wdGlvbi1ncm91cC1tZWRpdW0tc3RhcnQtcGFkZGluZzogMi4yNXJlbSxcbiAgb3B0aW9uLWdyb3VwLWxhcmdlLXN0YXJ0LXBhZGRpbmc6IDIuMjVyZW0sXG4gIG9wdGlvbi1ncm91cC1naWFudC1zdGFydC1wYWRkaW5nOiAyLjc1cmVtLFxuXG4gIG9wdGlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIG9wdGlvbi10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBvcHRpb24tdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgb3B0aW9uLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWhvdmVyLFxuICBvcHRpb24taG92ZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgb3B0aW9uLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIG9wdGlvbi1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgb3B0aW9uLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzLFxuICBvcHRpb24tZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgb3B0aW9uLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgb3B0aW9uLXNlbGVjdGVkLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgb3B0aW9uLXNlbGVjdGVkLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIG9wdGlvbi1zZWxlY3RlZC1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIG9wdGlvbi1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIG9wdGlvbi1zZWxlY3RlZC1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBvcHRpb24tc2VsZWN0ZWQtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgb3B0aW9uLXNlbGVjdGVkLWZvY3VzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgb3B0aW9uLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgb3B0aW9uLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgb3B0aW9uLXRpbnktdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi0yLWZvbnQtc2l6ZSxcbiAgb3B0aW9uLXRpbnktdGV4dC1mb250LXdlaWdodDogdGV4dC1jYXB0aW9uLTItZm9udC13ZWlnaHQsXG4gIG9wdGlvbi10aW55LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWxpbmUtaGVpZ2h0LFxuICBvcHRpb24tdGlueS1wYWRkaW5nOiBzZWxlY3Qtb3V0bGluZS10aW55LXBhZGRpbmcsXG5cbiAgb3B0aW9uLXNtYWxsLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBvcHRpb24tc21hbGwtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBvcHRpb24tc21hbGwtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LFxuICBvcHRpb24tc21hbGwtcGFkZGluZzogc2VsZWN0LW91dGxpbmUtc21hbGwtcGFkZGluZyxcblxuICBvcHRpb24tbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgb3B0aW9uLW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBvcHRpb24tbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIG9wdGlvbi1tZWRpdW0tcGFkZGluZzogc2VsZWN0LW91dGxpbmUtbWVkaXVtLXBhZGRpbmcsXG5cbiAgb3B0aW9uLWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgb3B0aW9uLWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIG9wdGlvbi1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBvcHRpb24tbGFyZ2UtcGFkZGluZzogc2VsZWN0LW91dGxpbmUtbGFyZ2UtcGFkZGluZyxcblxuICBvcHRpb24tZ2lhbnQtdGV4dC1mb250LXNpemU6IHRleHQtaGVhZGluZy02LWZvbnQtc2l6ZSxcbiAgb3B0aW9uLWdpYW50LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtaGVhZGluZy02LWZvbnQtd2VpZ2h0LFxuICBvcHRpb24tZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1oZWFkaW5nLTYtbGluZS1oZWlnaHQsXG4gIG9wdGlvbi1naWFudC1wYWRkaW5nOiBzZWxlY3Qtb3V0bGluZS1naWFudC1wYWRkaW5nLFxuXG4gIHNlbGVjdC1jdXJzb3I6IHBvaW50ZXIsXG4gIHNlbGVjdC1kaXNhYmxlZC1jdXJzb3I6IGRlZmF1bHQsXG4gIHNlbGVjdC1taW4td2lkdGg6IDEzcmVtLFxuICBzZWxlY3Qtb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCxcbiAgc2VsZWN0LW91dGxpbmUtY29sb3I6IG91dGxpbmUtY29sb3IsXG4gIHNlbGVjdC1pY29uLW9mZnNldDogMnJlbSxcblxuICBzZWxlY3QtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgc2VsZWN0LXBsYWNlaG9sZGVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuXG4gIHNlbGVjdC10aW55LXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tMi1mb250LXNpemUsXG4gIHNlbGVjdC10aW55LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtdGlueS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tMi1saW5lLWhlaWdodCxcbiAgc2VsZWN0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHNlbGVjdC10aW55LW1heC13aWR0aDogMjByZW0sXG5cbiAgc2VsZWN0LXNtYWxsLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBzZWxlY3Qtc21hbGwtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3Qtc21hbGwtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LFxuICBzZWxlY3Qtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LXNtYWxsLXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3Qtc21hbGwtbWF4LXdpZHRoOiAyMHJlbSxcblxuICBzZWxlY3QtbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIHNlbGVjdC1tZWRpdW0tcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgc2VsZWN0LW1lZGl1bS1tYXgtd2lkdGg6IDIwcmVtLFxuXG4gIHNlbGVjdC1sYXJnZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIHNlbGVjdC1sYXJnZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtbGFyZ2UtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgc2VsZWN0LWxhcmdlLXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHNlbGVjdC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgc2VsZWN0LWxhcmdlLW1heC13aWR0aDogMzByZW0sXG5cbiAgc2VsZWN0LWdpYW50LXRleHQtZm9udC1zaXplOiB0ZXh0LWhlYWRpbmctNi1mb250LXNpemUsXG4gIHNlbGVjdC1naWFudC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWhlYWRpbmctNi1mb250LXdlaWdodCxcbiAgc2VsZWN0LWdpYW50LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtaGVhZGluZy02LWxpbmUtaGVpZ2h0LFxuICBzZWxlY3QtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtZ2lhbnQtbWF4LXdpZHRoOiAzMHJlbSxcblxuICBzZWxlY3QtcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHNlbGVjdC1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sXG4gIHNlbGVjdC1yb3VuZC1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG5cbiAgc2VsZWN0LW91dGxpbmUtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgc2VsZWN0LW91dGxpbmUtYm9yZGVyLXdpZHRoOiAxcHgsXG5cbiAgc2VsZWN0LW91dGxpbmUtdGlueS1wYWRkaW5nOiAwLjE4NzVyZW0gMXJlbSxcbiAgc2VsZWN0LW91dGxpbmUtc21hbGwtcGFkZGluZzogMC4xODc1cmVtIDFyZW0sXG4gIHNlbGVjdC1vdXRsaW5lLW1lZGl1bS1wYWRkaW5nOiAwLjQzNzVyZW0gMXJlbSxcbiAgc2VsZWN0LW91dGxpbmUtbGFyZ2UtcGFkZGluZzogMC42ODc1cmVtIDFyZW0sXG4gIHNlbGVjdC1vdXRsaW5lLWdpYW50LXBhZGRpbmc6IDAuOTM3NXJlbSAxcmVtLFxuXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWljb24tY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktaWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtaWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8taWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctaWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1pY29uLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTMwMCxcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNTAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNTAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC00MDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC01MDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtZGlzYWJsZWQtaWNvbi1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcblxuICBzZWxlY3Qtb3V0bGluZS1hZGphY2VudC1ib3JkZXItc3R5bGU6IHNlbGVjdC1vdXRsaW5lLWJvcmRlci1zdHlsZSxcbiAgc2VsZWN0LW91dGxpbmUtYWRqYWNlbnQtYm9yZGVyLXdpZHRoOiBzZWxlY3Qtb3V0bGluZS1ib3JkZXItd2lkdGgsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLW9wZW4tYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LW9wZW4tYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLXByaW1hcnktYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLW9wZW4tYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLW9wZW4tYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1pbmZvLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWluZm8tYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLW9wZW4tYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1hZGphY2VudC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtY29udHJvbC1ib3JkZXItY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBzZWxlY3QtZmlsbGVkLWJvcmRlci13aWR0aDogMXB4LFxuXG4gIHNlbGVjdC1maWxsZWQtdGlueS1wYWRkaW5nOiAwLjE4NzVyZW0gMXJlbSxcbiAgc2VsZWN0LWZpbGxlZC1zbWFsbC1wYWRkaW5nOiAwLjE4NzVyZW0gMXJlbSxcbiAgc2VsZWN0LWZpbGxlZC1tZWRpdW0tcGFkZGluZzogMC40Mzc1cmVtIDFyZW0sXG4gIHNlbGVjdC1maWxsZWQtbGFyZ2UtcGFkZGluZzogMC42ODc1cmVtIDFyZW0sXG4gIHNlbGVjdC1maWxsZWQtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDFyZW0sXG5cbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtZGVmYXVsdC1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtaWNvbi1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWhvdmVyLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3Zlci1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLWluZm8tZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWljb24tY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cy1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtaGVyby10aW55LXBhZGRpbmc6IDAuMjVyZW0gMXJlbSxcbiAgc2VsZWN0LWhlcm8tc21hbGwtcGFkZGluZzogMC4yNXJlbSAxcmVtLFxuICBzZWxlY3QtaGVyby1tZWRpdW0tcGFkZGluZzogMC41cmVtIDFyZW0sXG4gIHNlbGVjdC1oZXJvLWxhcmdlLXBhZGRpbmc6IDAuNzVyZW0gMXJlbSxcbiAgc2VsZWN0LWhlcm8tZ2lhbnQtcGFkZGluZzogMXJlbSAxcmVtLFxuXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMjAwLFxuICBzZWxlY3QtaGVyby1iYXNpYy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1iYXNpYy1pY29uLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgc2VsZWN0LWhlcm8tYmFzaWMtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMzAwLFxuICBzZWxlY3QtaGVyby1iYXNpYy1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy00MDAsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBzZWxlY3QtaGVyby1iYXNpYy1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1ob3ZlcixcbiAgc2VsZWN0LWhlcm8tYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtaGVyby1iYXNpYy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTQwMCxcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktNTAwLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTMwMCxcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNDAwLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy01MDAsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtMzAwLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1pbmZvLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby00MDAsXG4gIHNlbGVjdC1oZXJvLWluZm8tcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1pbmZvLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8taW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWluZm8tcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWluZm8tZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTUwMCxcbiAgc2VsZWN0LWhlcm8taW5mby1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICBzZWxlY3QtaGVyby1pbmZvLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby0zMDAsXG4gIHNlbGVjdC1oZXJvLWluZm8taG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgc2VsZWN0LWhlcm8taW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1oZXJvLWluZm8tZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWhlcm8taW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTQwMCxcbiAgc2VsZWN0LWhlcm8td2FybmluZy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8td2FybmluZy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8td2FybmluZy1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLTMwMCxcbiAgc2VsZWN0LWhlcm8td2FybmluZy1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWhlcm8td2FybmluZy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTQwMCxcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1kYW5nZXItaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1kYW5nZXItcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci01MDAsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci0zMDAsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1jb250cm9sLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1jb250cm9sLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1pY29uLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBzZWxlY3QtaGVyby1jb250cm9sLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1jb250cm9sLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMjAwLFxuICBzZWxlY3QtaGVyby1jb250cm9sLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1ob3ZlcixcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGRhdGVwaWNrZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBkYXRlcGlja2VyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG4gIGRhdGVwaWNrZXItYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgZGF0ZXBpY2tlci1ib3JkZXItd2lkdGg6IDAsXG4gIGRhdGVwaWNrZXItYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgZGF0ZXBpY2tlci1zaGFkb3c6IG5vbmUsXG5cbiAgcmFkaW8td2lkdGg6IDEuMjVyZW0sXG4gIHJhZGlvLWhlaWdodDogMS4yNXJlbSxcbiAgcmFkaW8tYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgcmFkaW8tYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHJhZGlvLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtMi1mb250LWZhbWlseSxcbiAgcmFkaW8tdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIHJhZGlvLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgcmFkaW8tdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LFxuICByYWRpby1vdXRsaW5lLWNvbG9yOiBvdXRsaW5lLWNvbG9yLFxuICByYWRpby1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuXG4gIHJhZGlvLWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHJhZGlvLWJhc2ljLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHJhZGlvLWJhc2ljLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWJhc2ljLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1iYXNpYy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgcmFkaW8tYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cyxcbiAgcmFkaW8tYmFzaWMtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tYmFzaWMtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICByYWRpby1iYXNpYy1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHJhZGlvLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHJhZGlvLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgcmFkaW8tYmFzaWMtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tYmFzaWMtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLFxuICByYWRpby1iYXNpYy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHJhZGlvLWJhc2ljLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIHJhZGlvLWJhc2ljLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1iYXNpYy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHJhZGlvLWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICByYWRpby1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICByYWRpby1iYXNpYy1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1iYXNpYy1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICByYWRpby1iYXNpYy1kaXNhYmxlZC1jaGVja2VkLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIHJhZGlvLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgcmFkaW8tcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LFxuICByYWRpby1wcmltYXJ5LWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXByaW1hcnktY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLXByaW1hcnktaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHJhZGlvLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLFxuICByYWRpby1wcmltYXJ5LWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXByaW1hcnktZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWZvY3VzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgcmFkaW8tcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICByYWRpby1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLXByaW1hcnktaG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICByYWRpby1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXByaW1hcnktaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8tcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHJhZGlvLXByaW1hcnktYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXByaW1hcnktYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLXByaW1hcnktYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIHJhZGlvLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHJhZGlvLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHJhZGlvLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgcmFkaW8tcHJpbWFyeS1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1wcmltYXJ5LWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHJhZGlvLXByaW1hcnktZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICByYWRpby1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHJhZGlvLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgcmFkaW8tc3VjY2Vzcy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1zdWNjZXNzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1zdWNjZXNzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICByYWRpby1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cyxcbiAgcmFkaW8tc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1zdWNjZXNzLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHJhZGlvLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3ZlcixcbiAgcmFkaW8tc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICByYWRpby1zdWNjZXNzLWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgcmFkaW8tc3VjY2Vzcy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1zdWNjZXNzLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHJhZGlvLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1zdWNjZXNzLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1zdWNjZXNzLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1zdWNjZXNzLWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLFxuICByYWRpby1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICByYWRpby1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICByYWRpby1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJhZGlvLXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICByYWRpby1zdWNjZXNzLWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgcmFkaW8taW5mby10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICByYWRpby1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8taW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHJhZGlvLWluZm8tY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8taW5mby1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8taW5mby1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgcmFkaW8taW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLFxuICByYWRpby1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLWluZm8tZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8taW5mby1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLWluZm8tZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICByYWRpby1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHJhZGlvLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8taW5mby1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIHJhZGlvLWluZm8taG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8taW5mby1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLWluZm8tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLFxuICByYWRpby1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8taW5mby1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8taW5mby1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8taW5mby1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgcmFkaW8taW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgcmFkaW8taW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgcmFkaW8taW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICByYWRpby1pbmZvLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWluZm8tZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgcmFkaW8taW5mby1kaXNhYmxlZC1jaGVja2VkLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIHJhZGlvLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgcmFkaW8td2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICByYWRpby13YXJuaW5nLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXdhcm5pbmctY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLXdhcm5pbmctaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHJhZGlvLXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cyxcbiAgcmFkaW8td2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXdhcm5pbmctZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWZvY3VzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgcmFkaW8td2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLFxuICByYWRpby13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLXdhcm5pbmctaG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICByYWRpby13YXJuaW5nLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXdhcm5pbmctaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyLFxuICByYWRpby13YXJuaW5nLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgcmFkaW8td2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLXdhcm5pbmctYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXdhcm5pbmctYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLXdhcm5pbmctYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsXG4gIHJhZGlvLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHJhZGlvLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHJhZGlvLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgcmFkaW8td2FybmluZy1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby13YXJuaW5nLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHJhZGlvLXdhcm5pbmctZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICByYWRpby1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgcmFkaW8tZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHJhZGlvLWRhbmdlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1kYW5nZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHJhZGlvLWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHJhZGlvLWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1kYW5nZXItZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgcmFkaW8tZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3ZlcixcbiAgcmFkaW8tZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICByYWRpby1kYW5nZXItaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyLFxuICByYWRpby1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHJhZGlvLWRhbmdlci1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1kYW5nZXItYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUsXG4gIHJhZGlvLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgcmFkaW8tZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICByYWRpby1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgcmFkaW8tZGFuZ2VyLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWRhbmdlci1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICByYWRpby1kYW5nZXItZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICByYWRpby1jb250cm9sLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgcmFkaW8tY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHJhZGlvLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1jb250cm9sLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWNvbnRyb2wtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLWNvbnRyb2wtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHJhZGlvLWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cyxcbiAgcmFkaW8tY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICByYWRpby1jb250cm9sLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWNvbnRyb2wtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMtYm9yZGVyLFxuICByYWRpby1jb250cm9sLWZvY3VzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cyxcbiAgcmFkaW8tY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLFxuICByYWRpby1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLWNvbnRyb2wtaG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICByYWRpby1jb250cm9sLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWNvbnRyb2wtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXItYm9yZGVyLFxuICByYWRpby1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgcmFkaW8tY29udHJvbC1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWNvbnRyb2wtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWNvbnRyb2wtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLWNvbnRyb2wtYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItY29udHJvbC1hY3RpdmUsXG4gIHJhZGlvLWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgcmFkaW8tY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICByYWRpby1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgcmFkaW8tY29udHJvbC1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1jb250cm9sLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHJhZGlvLWNvbnRyb2wtZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICB0cmVlLWdyaWQtY2VsbC1ib3JkZXItd2lkdGg6IDFweCxcbiAgdHJlZS1ncmlkLWNlbGwtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgdHJlZS1ncmlkLWNlbGwtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgdHJlZS1ncmlkLXJvdy1taW4taGVpZ2h0OiAycmVtLFxuICB0cmVlLWdyaWQtY2VsbC1wYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtLFxuXG4gIHRyZWUtZ3JpZC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0cmVlLWdyaWQtaGVhZGVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgdHJlZS1ncmlkLWhlYWRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgdHJlZS1ncmlkLWhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuXG4gIHRyZWUtZ3JpZC1mb290ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0cmVlLWdyaWQtZm9vdGVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRyZWUtZ3JpZC1mb290ZXItdGV4dC1mb250LWZhbWlseTogdHJlZS1ncmlkLWhlYWRlci10ZXh0LWZvbnQtZmFtaWx5LFxuICB0cmVlLWdyaWQtZm9vdGVyLXRleHQtZm9udC1zaXplOiB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC1zaXplLFxuICB0cmVlLWdyaWQtZm9vdGVyLXRleHQtZm9udC13ZWlnaHQ6IHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1mb250LXdlaWdodCxcbiAgdHJlZS1ncmlkLWZvb3Rlci10ZXh0LWxpbmUtaGVpZ2h0OiB0cmVlLWdyaWQtaGVhZGVyLXRleHQtbGluZS1oZWlnaHQsXG5cbiAgdHJlZS1ncmlkLXJvdy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRyZWUtZ3JpZC1yb3ctZXZlbi1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRyZWUtZ3JpZC1yb3ctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0cmVlLWdyaWQtcm93LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRyZWUtZ3JpZC1yb3ctdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIHRyZWUtZ3JpZC1yb3ctdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdHJlZS1ncmlkLXJvdy10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgdHJlZS1ncmlkLXJvdy10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcblxuICB0cmVlLWdyaWQtc29ydC1oZWFkZXItYnV0dG9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0cmVlLWdyaWQtc29ydC1oZWFkZXItYnV0dG9uLWJvcmRlcjogbm9uZSxcbiAgdHJlZS1ncmlkLXNvcnQtaGVhZGVyLWJ1dHRvbi1wYWRkaW5nOiAwLFxuXG4gIGljb24tZm9udC1zaXplOiAxLjI1cmVtLFxuICBpY29uLWxpbmUtaGVpZ2h0OiAxLFxuICBpY29uLXdpZHRoOiAxZW0sXG4gIGljb24taGVpZ2h0OiAxZW0sXG4gIGljb24tc3ZnLXZlcnRpY2FsLWFsaWduOiB0b3AsXG4gIGljb24tYmFzaWMtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgaWNvbi1wcmltYXJ5LWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGljb24taW5mby1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBpY29uLXN1Y2Nlc3MtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgaWNvbi13YXJuaW5nLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGljb24tZGFuZ2VyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgaWNvbi1jb250cm9sLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG5cbiAgdG9nZ2xlLWhlaWdodDogMS44NzVyZW0sXG4gIHRvZ2dsZS13aWR0aDogMy4xMjVyZW0sXG4gIHRvZ2dsZS1ib3JkZXItd2lkdGg6IDFweCxcbiAgdG9nZ2xlLWJvcmRlci1yYWRpdXM6IDEwMHB4LFxuICB0b2dnbGUtb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCxcbiAgdG9nZ2xlLW91dGxpbmUtY29sb3I6IG91dGxpbmUtY29sb3IsXG4gIHRvZ2dsZS1zd2l0Y2hlci1zaXplOiAxLjc1cmVtLFxuICB0b2dnbGUtc3dpdGNoZXItaWNvbi1zaXplOiAwLjc1cmVtLFxuICB0b2dnbGUtdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtZmFtaWx5LFxuICB0b2dnbGUtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIHRvZ2dsZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIHRvZ2dsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIHRvZ2dsZS1jdXJzb3I6IHBvaW50ZXIsXG4gIHRvZ2dsZS1kaXNhYmxlZC1jdXJzb3I6IGRlZmF1bHQsXG5cbiAgdG9nZ2xlLWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvZ2dsZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICB0b2dnbGUtYmFzaWMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLWJhc2ljLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2dnbGUtYmFzaWMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1jaGVja2VkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9nZ2xlLWJhc2ljLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvZ2dsZS1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLFxuICB0b2dnbGUtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLWJhc2ljLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgdG9nZ2xlLWJhc2ljLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRvZ2dsZS1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICB0b2dnbGUtYmFzaWMtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICB0b2dnbGUtYmFzaWMtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIHRvZ2dsZS1iYXNpYy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICB0b2dnbGUtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcbiAgdG9nZ2xlLWJhc2ljLWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvZ2dsZS1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHRvZ2dsZS1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvZ2dsZS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdG9nZ2xlLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9nZ2xlLXByaW1hcnktY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2dnbGUtcHJpbWFyeS1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2dnbGUtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLFxuICB0b2dnbGUtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHRvZ2dsZS1wcmltYXJ5LWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICB0b2dnbGUtcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdG9nZ2xlLXByaW1hcnktYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgdG9nZ2xlLXByaW1hcnktYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICB0b2dnbGUtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktZGlzYWJsZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG4gIHRvZ2dsZS1wcmltYXJ5LWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvZ2dsZS1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgdG9nZ2xlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICB0b2dnbGUtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICB0b2dnbGUtc3VjY2Vzcy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtY2hlY2tlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvZ2dsZS1zdWNjZXNzLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvZ2dsZS1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgdG9nZ2xlLXN1Y2Nlc3MtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLFxuICB0b2dnbGUtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICB0b2dnbGUtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLFxuICB0b2dnbGUtc3VjY2Vzcy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHRvZ2dsZS1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcbiAgdG9nZ2xlLXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICB0b2dnbGUtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0b2dnbGUtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRvZ2dsZS1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLWluZm8tY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHRvZ2dsZS1pbmZvLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtaW5mby1jaGVja2VkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9nZ2xlLWluZm8tY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9nZ2xlLWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cyxcbiAgdG9nZ2xlLWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLWluZm8tZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICB0b2dnbGUtaW5mby1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRvZ2dsZS1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgdG9nZ2xlLWluZm8taG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXItYm9yZGVyLFxuICB0b2dnbGUtaW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRvZ2dsZS1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLWluZm8tYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUsXG4gIHRvZ2dsZS1pbmZvLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgdG9nZ2xlLWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuICB0b2dnbGUtaW5mby1kaXNhYmxlZC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2dnbGUtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHRvZ2dsZS13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvZ2dsZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdG9nZ2xlLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdG9nZ2xlLXdhcm5pbmctY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2dnbGUtd2FybmluZy1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0b2dnbGUtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0b2dnbGUtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIHRvZ2dsZS13YXJuaW5nLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICB0b2dnbGUtd2FybmluZy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdG9nZ2xlLXdhcm5pbmctYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcbiAgdG9nZ2xlLXdhcm5pbmctYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICB0b2dnbGUtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctZGlzYWJsZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG4gIHRvZ2dsZS13YXJuaW5nLWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvZ2dsZS13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgdG9nZ2xlLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0b2dnbGUtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LFxuICB0b2dnbGUtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHRvZ2dsZS1kYW5nZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLWRhbmdlci1jaGVja2VkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9nZ2xlLWRhbmdlci1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHRvZ2dsZS1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0b2dnbGUtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLWRhbmdlci1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgdG9nZ2xlLWRhbmdlci1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRvZ2dsZS1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICB0b2dnbGUtZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLFxuICB0b2dnbGUtZGFuZ2VyLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUsXG4gIHRvZ2dsZS1kYW5nZXItYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgdG9nZ2xlLWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgdG9nZ2xlLWRhbmdlci1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcbiAgdG9nZ2xlLWRhbmdlci1kaXNhYmxlZC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2dnbGUtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgdG9nZ2xlLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICB0b2dnbGUtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRvZ2dsZS1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLWNvbnRyb2wtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRvZ2dsZS1jb250cm9sLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1jaGVja2VkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgdG9nZ2xlLWNvbnRyb2wtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgdG9nZ2xlLWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cyxcbiAgdG9nZ2xlLWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLWNvbnRyb2wtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0b2dnbGUtY29udHJvbC1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRvZ2dsZS1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLWNvbnRyb2wtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRvZ2dsZS1jb250cm9sLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLWNvbnRyb2wtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRvZ2dsZS1jb250cm9sLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICB0b2dnbGUtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHRvZ2dsZS1jb250cm9sLWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHRvZ2dsZS1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBmb3JtLWZpZWxkLWFkZG9uLWJhc2ljLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1iYXNpYy1oaWdobGlnaHQtdGV4dC1jb2xvcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGZvcm0tZmllbGQtYWRkb24tcHJpbWFyeS10ZXh0LWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1wcmltYXJ5LWhpZ2hsaWdodC10ZXh0LWNvbG9yOiBjb2xvci1wcmltYXJ5LTYwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1zdWNjZXNzLXRleHQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLXN1Y2Nlc3MtaGlnaGxpZ2h0LXRleHQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNjAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLWluZm8tdGV4dC1jb2xvcjogY29sb3ItaW5mby01MDAsXG4gIGZvcm0tZmllbGQtYWRkb24taW5mby1oaWdobGlnaHQtdGV4dC1jb2xvcjogY29sb3ItaW5mby02MDAsXG4gIGZvcm0tZmllbGQtYWRkb24td2FybmluZy10ZXh0LWNvbG9yOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi13YXJuaW5nLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiBjb2xvci13YXJuaW5nLTYwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1kYW5nZXItdGV4dC1jb2xvcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1kYW5nZXItaGlnaGxpZ2h0LXRleHQtY29sb3I6IGNvbG9yLWRhbmdlci02MDAsXG4gIGZvcm0tZmllbGQtYWRkb24tY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGZvcm0tZmllbGQtYWRkb24tY29udHJvbC1oaWdobGlnaHQtdGV4dC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBmb3JtLWZpZWxkLWFkZG9uLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgZm9ybS1maWVsZC1hZGRvbi10aW55LWhlaWdodDogMS41cmVtLFxuICBmb3JtLWZpZWxkLWFkZG9uLXRpbnktd2lkdGg6IGZvcm0tZmllbGQtYWRkb24tdGlueS1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tdGlueS1pY29uLXNpemU6IGJ1dHRvbi10aW55LWljb24tc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi10aW55LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tdGlueS1mb250LXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tdGlueS1saW5lLWhlaWdodDogdGV4dC1idXR0b24tdGlueS1saW5lLWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi10aW55LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1zbWFsbC1oZWlnaHQ6IDJyZW0sXG4gIGZvcm0tZmllbGQtYWRkb24tc21hbGwtd2lkdGg6IGZvcm0tZmllbGQtYWRkb24tc21hbGwtaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLXNtYWxsLWljb24tc2l6ZTogYnV0dG9uLXNtYWxsLWljb24tc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi1zbWFsbC1mb250LXNpemU6IHRleHQtYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi1zbWFsbC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tc21hbGwtbGluZS1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tc21hbGwtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLW1lZGl1bS1oZWlnaHQ6IDIuNXJlbSxcbiAgZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0td2lkdGg6IGZvcm0tZmllbGQtYWRkb24tbWVkaXVtLWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0taWNvbi1zaXplOiBidXR0b24tbWVkaXVtLWljb24tc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0tZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLW1lZGl1bS1saW5lLWhlaWdodDogdGV4dC1idXR0b24tbWVkaXVtLWxpbmUtaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLW1lZGl1bS1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tbGFyZ2UtaGVpZ2h0OiAzcmVtLFxuICBmb3JtLWZpZWxkLWFkZG9uLWxhcmdlLXdpZHRoOiBmb3JtLWZpZWxkLWFkZG9uLWxhcmdlLWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1sYXJnZS1pY29uLXNpemU6IGJ1dHRvbi1sYXJnZS1pY29uLXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tbGFyZ2UtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1sYXJnZS1mb250LXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tbGFyZ2UtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLWxhcmdlLWxpbmUtaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLWxhcmdlLWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1naWFudC1oZWlnaHQ6IDMuNXJlbSxcbiAgZm9ybS1maWVsZC1hZGRvbi1naWFudC13aWR0aDogZm9ybS1maWVsZC1hZGRvbi1naWFudC1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tZ2lhbnQtaWNvbi1zaXplOiBidXR0b24tZ2lhbnQtaWNvbi1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLWdpYW50LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tZ2lhbnQtZm9udC1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLWdpYW50LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1naWFudC1saW5lLWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1naWFudC1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4pO1xuIiwiQGltcG9ydCAnLi4vLi4vdGhlbWVzL21hcHBpbmcnO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBmdW5jdGlvbiBuYi1nZXQtZW5hYmxlZC10aGVtZXMoKSB7XG5cbiAgQGlmIChsZW5ndGgoJG5iLWVuYWJsZWQtdGhlbWVzKSA9PSAwKSB7XG4gICAgQGVhY2ggJHRoZW1lLW5hbWUsICR0aGVtZSBpbiAkbmItdGhlbWVzIHtcbiAgICAgICRuYi1lbmFibGVkLXRoZW1lczogYXBwZW5kKCRuYi1lbmFibGVkLXRoZW1lcywgJHRoZW1lLW5hbWUpICFnbG9iYWw7XG4gICAgfVxuICB9XG4gIEByZXR1cm4gJG5iLWVuYWJsZWQtdGhlbWVzO1xufVxuXG5AZnVuY3Rpb24gZ2V0LWxhc3QtZW5hYmxlZC10aGVtZSgpIHtcbiAgJHRoZW1lczogbmItZ2V0LWVuYWJsZWQtdGhlbWVzKCk7XG4gIEByZXR1cm4gbnRoKCR0aGVtZXMsIGxlbmd0aCgkdGhlbWVzKSk7XG59XG5cbkBmdW5jdGlvbiBuYi1zZXQtZm9yLWV4cG9ydCgkdGhlbWUsICRuYW1lLCAkcGFyZW50LW5hbWU6IG51bGwpIHtcblxuICAkcGFyZW50LXRoZW1lOiBtYXAtZ2V0KCRuYi10aGVtZXMtZXhwb3J0LCAkcGFyZW50LW5hbWUpO1xuICBAaWYgKCRwYXJlbnQtdGhlbWUgIT0gbnVsbCkge1xuICAgICR0aGVtZTogbWFwLW1lcmdlKG1hcC1nZXQoJHBhcmVudC10aGVtZSwgZGF0YSksICR0aGVtZSk7XG4gIH1cblxuICAkdGhlbWUtZGF0YTogKFxuICAgIGRhdGE6ICR0aGVtZSxcbiAgICBwYXJlbnQ6ICRwYXJlbnQtbmFtZSxcbiAgKTtcbiAgQHJldHVybiBtYXAtc2V0KCRuYi10aGVtZXMtZXhwb3J0LCAkbmFtZSwgJHRoZW1lLWRhdGEpO1xufVxuXG5AZnVuY3Rpb24gbmItZ2V0LXJlZ2lzdGVyZWQtdGhlbWUoJG5hbWUpIHtcbiAgJHRoZW1lOiBtYXAtZ2V0KCRuYi10aGVtZXMsICRuYW1lKTtcblxuICAvLyBUT0RPOiBjaGVjayBpZiBvcHRpbWFsIHBsYWNlXG4gIEBpZiAoJHRoZW1lID09IG51bGwpIHtcbiAgICBAZXJyb3IgJ05lYnVsYXIgVGhlbWU6IHRoZW1lIGAnICsgJG5hbWUgKyAnYCBpcyBub3QgcmVnaXN0ZXJlZCB3aXRoIGBuYi1yZWdpc3Rlci10aGVtZWAgZnVuY3Rpb24uJztcbiAgfVxuXG4gIEByZXR1cm4gJHRoZW1lO1xufVxuXG4vLyBFbnRyeSBwb2ludFxuLy8gUmVnaXN0ZXJzIGEgbmV3IHRoZW1lXG5AZnVuY3Rpb24gbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCAkbmFtZSwgJHBhcmVudC1uYW1lOiBudWxsKSB7XG5cbiAgQGlmICgkbmItdGhlbWUtZXhwb3J0LW1vZGUgPT0gdHJ1ZSkge1xuICAgICRuYi10aGVtZXMtZXhwb3J0OiBuYi1zZXQtZm9yLWV4cG9ydCgkdGhlbWUsICRuYW1lLCAkcGFyZW50LW5hbWUpICFnbG9iYWw7XG4gIH1cblxuICAkdGhlbWUtZGF0YTogKCk7XG5cbiAgQGlmICgkcGFyZW50LW5hbWUgIT0gbnVsbCkge1xuICAgICRwYXJlbnQtdGhlbWU6IG1hcC1nZXQoJG5iLXRoZW1lcywgJHBhcmVudC1uYW1lKTtcbiAgICBAaWYgKCRwYXJlbnQtdGhlbWUgPT0gbnVsbCkge1xuICAgICAgQGVycm9yICdOZWJ1bGFyIFRoZW1lOiBwYXJlbnQgdGhlbWUgYCcgKyAkcGFyZW50LW5hbWUgKyAnYCBpcyBub3QgcmVnaXN0ZXJlZCBvciBpbXBvcnRlZC4nO1xuICAgIH1cbiAgICAkdGhlbWU6IG1hcC1tZXJnZSgkcGFyZW50LXRoZW1lLCAkdGhlbWUpO1xuICB9XG4gICR0aGVtZTogbWFwLW1lcmdlKCRldmEtbWFwcGluZywgJHRoZW1lKTtcbiAgJG5iLXRoZW1lczogbWFwLXNldCgkbmItdGhlbWVzLCAkbmFtZSwgJHRoZW1lKSAhZ2xvYmFsO1xuXG4gIEByZXR1cm4gJG5iLXRoZW1lcztcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQG1peGluIG5iLWZvci10aGVtZSgkbmFtZSkge1xuICBAaWYgKCRuYi10aGVtZS1uYW1lID09ICRuYW1lKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLWZvci10aGVtZXMoJG5hbWVzLi4uKSB7XG4gIEBlYWNoICRuYW1lIGluICRuYW1lcyB7XG4gICAgQGluY2x1ZGUgbmItZm9yLXRoZW1lKCRuYW1lKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG5iLWV4Y2VwdC10aGVtZSgkbmFtZSkge1xuICBAaWYgKCRuYi10aGVtZS1uYW1lICE9ICRuYW1lKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLWV4Y2VwdC1mb3ItdGhlbWVzKCRuYW1lcy4uLikge1xuICBAZWFjaCAkbmFtZSBpbiAkbmFtZXMge1xuICAgIEBpbmNsdWRlIG5iLWV4Y2VwdC10aGVtZSgkbmFtZSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1pbnN0YWxsLWNzcy1wcm9wZXJ0aWVzKCR0aGVtZS1uYW1lLCAkdGhlbWUpIHtcbiAgLm5iLXRoZW1lLSN7JHRoZW1lLW5hbWV9IHtcblxuICAgIEBlYWNoICR2YXIsICR2YWx1ZSBpbiAkdGhlbWUge1xuICAgICAgQGlmICh0eXBlLW9mKCR2YWx1ZSkgPT0gJ3N0cmluZycgYW5kIG1hcC1nZXQoJHRoZW1lLCAkdmFsdWUpKSB7XG4gICAgICAgIC0tI3skdmFyfTogdmFyKC0tI3skdmFsdWV9KTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICAtLSN7JHZhcn06ICN7JHZhbHVlfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG5iLXByZS1wcm9jZXNzLWNvbnRleHQoJHRoZW1lLW5hbWUpIHtcbiAgJG5iLXRoZW1lLXByb2Nlc3MtbW9kZTogJ3ByZS1wcm9jZXNzJyAhZ2xvYmFsO1xuXG4gICRuYi10aGVtZS1uYW1lOiAkdGhlbWUtbmFtZSAhZ2xvYmFsO1xuICAkbmItcHJvY2Vzc2VkLXRoZW1lOiBuYi1wcm9jZXNzLXRoZW1lKG5iLWdldC1yZWdpc3RlcmVkLXRoZW1lKCR0aGVtZS1uYW1lKSkgIWdsb2JhbDtcbn1cblxuQG1peGluIG5iLWxhenktcHJvY2Vzcy1jb250ZXh0KCR0aGVtZS1uYW1lKSB7XG4gICRuYi10aGVtZS1wcm9jZXNzLW1vZGU6ICdsYXp5LXByb2Nlc3MnICFnbG9iYWw7XG5cbiAgJG5iLXRoZW1lLW5hbWU6ICR0aGVtZS1uYW1lICFnbG9iYWw7XG4gICRuYi1wcm9jZXNzZWQtdGhlbWU6ICgpICFnbG9iYWw7XG59XG5cbkBtaXhpbiBuYi1pbnN0YWxsLWNvbXBvbmVudC13aXRoLWNzcy1wcm9wcygpIHtcbiAgLy8gQGJyZWFraW5nLWNoYW5nZSA1LjAuMFxuICA6aG9zdCB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLWluc3RhbGwtY29tcG9uZW50LXdpdGgtc2Nzcy12YXJzKCkge1xuICAkZW5hYmxlZC10aGVtZXM6IG5iLWdldC1lbmFibGVkLXRoZW1lcygpO1xuXG4gIEBlYWNoICR0aGVtZS1uYW1lIGluICRlbmFibGVkLXRoZW1lcyB7XG5cbiAgICBAaW5jbHVkZSBuYi1sYXp5LXByb2Nlc3MtY29udGV4dCgkdGhlbWUtbmFtZSk7XG5cbiAgICAvKlxuICAgICAgOmhvc3QgY2FuIGJlIHByZWZpeGVkXG4gICAgICBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvOGQwZWUzNDkzOWYxNGMwNzg3NmQyMjJjMjViNDA1ZWQ0NThhMzRkMy9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxXG5cbiAgICAgIFdlIGhhdmUgdG8gdXNlIDpob3N0IGluc3RlYWQgb2YgOmhvc3QtY29udGV4dCgkdGhlbWUpLCB0byBiZSBhYmxlIHRvIHByZWZpeCB0aGVtZSBjbGFzc1xuICAgICAgd2l0aCBzb21ldGhpbmcgZGVmaW5lZCBpbnNpZGUgb2YgQGNvbnRlbnQsIGJ5IHByZWZpeGluZyAmLlxuICAgICAgRm9yIGV4YW1wbGUgdGhpcyBzY3NzIGNvZGU6XG4gICAgICAgIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuc29tZS1zZWxlY3RvciAmIHtcbiAgICAgICAgICAgIC4uLlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgV2lsbCByZXN1bHQgaW4gbmV4dCBjc3M6XG4gICAgICAgIC5zb21lLXNlbGVjdG9yIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuLi5cbiAgICAgICAgfVxuXG4gICAgICBJdCBkb2Vzbid0IHdvcmsgd2l0aCA6aG9zdC1jb250ZXh0IGJlY2F1c2UgYW5ndWxhciBzcGxpdHRpbmcgaXQgaW4gdHdvIHNlbGVjdG9ycyBhbmQgcmVtb3Zlc1xuICAgICAgcHJlZml4IGluIG9uZSBvZiB0aGUgc2VsZWN0b3JzLlxuICAgICovXG4gICAgLm5iLXRoZW1lLSN7JHRoZW1lLW5hbWV9IDpob3N0IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBFbnRyeSBwb2ludFxuLy8gSW5zdGFsbHMgY29tcG9uZW50IHN0eWxlcyBiYXNlZCBvbiByZWdpc3RlcmVkIHRoZW1lc1xuLy8gVE9ETzogd2UgaGlkZSA6aG9zdCBpbnNpZGUgb2YgaXQgd2hpY2ggaXMgbm90IG9idmlvdXNcbkBtaXhpbiBuYi1pbnN0YWxsLWNvbXBvbmVudCgpIHtcblxuICBAaWYgKCRuYi1lbmFibGUtY3NzLWN1c3RvbS1wcm9wZXJ0aWVzKSB7XG5cbiAgICBAaW5jbHVkZSBuYi1pbnN0YWxsLWNvbXBvbmVudC13aXRoLWNzcy1wcm9wcygpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cblxuICB9IEBlbHNlIHtcblxuICAgIEBpbmNsdWRlIG5iLWluc3RhbGwtY29tcG9uZW50LXdpdGgtc2Nzcy12YXJzKCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1pbnN0YWxsLWdsb2JhbC13aXRoLWNzcy1wcm9wcygpIHtcbiAgQGNvbnRlbnQ7XG5cbiAgQGVhY2ggJHRoZW1lLW5hbWUgaW4gbmItZ2V0LWVuYWJsZWQtdGhlbWVzKCkge1xuICAgIEBpbmNsdWRlIG5iLWluc3RhbGwtY3NzLXByb3BlcnRpZXMoJHRoZW1lLW5hbWUsIG5iLWdldC1yZWdpc3RlcmVkLXRoZW1lKCR0aGVtZS1uYW1lKSk7XG4gIH1cbn1cblxuQG1peGluIG5iLWluc3RhbGwtZ2xvYmFsLXdpdGgtc2Nzcy12YXJzKCkge1xuXG4gIEBlYWNoICR0aGVtZS1uYW1lIGluIG5iLWdldC1lbmFibGVkLXRoZW1lcygpIHtcbiAgICBAaW5jbHVkZSBuYi1wcmUtcHJvY2Vzcy1jb250ZXh0KCR0aGVtZS1uYW1lKTtcblxuICAgIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gRW50cnkgcG9pbnRcbi8vIEluc3RhbGxzIGdsb2JhbCBzdHlsZXMgYmFzZWQgb24gcmVnaXN0ZXJlZCB0aGVtZXNcbkBtaXhpbiBuYi1pbnN0YWxsKCkge1xuICBAaWYgKCRuYi1lbmFibGUtY3NzLWN1c3RvbS1wcm9wZXJ0aWVzKSB7XG4gICAgQGluY2x1ZGUgbmItaW5zdGFsbC1nbG9iYWwtd2l0aC1jc3MtcHJvcHMoKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG5iLWluc3RhbGwtZ2xvYmFsLXdpdGgtc2Nzcy12YXJzKCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBmdW5jdGlvbiBuYi1kZWVwLWZpbmQtdmFsdWUoJHRoZW1lLCAka2V5LCAkdmFsdWUpIHtcbiAgJHBhcmVudC12YWx1ZTogbWFwLWdldCgkdGhlbWUsICR2YWx1ZSk7XG5cbiAgQGlmICgkcGFyZW50LXZhbHVlICE9IG51bGwpIHtcbiAgICBAcmV0dXJuIG5iLWRlZXAtZmluZC12YWx1ZSgkdGhlbWUsICR2YWx1ZSwgJHBhcmVudC12YWx1ZSk7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZTtcbn1cblxuQGZ1bmN0aW9uIG5iLXByb2Nlc3MtdGhlbWUoJHRoZW1lKSB7XG4gICRwcm9jZXNzZWQtdGhlbWU6ICgpO1xuICBAZWFjaCAka2V5LCAkdmFsdWUgaW4gJHRoZW1lIHtcbiAgICAkcHJvY2Vzc2VkLXRoZW1lOiBtYXAtc2V0KCRwcm9jZXNzZWQtdGhlbWUsICRrZXksIG5iLWRlZXAtZmluZC12YWx1ZSgkdGhlbWUsICRrZXksICR2YWx1ZSkpO1xuICB9XG4gIEByZXR1cm4gJHByb2Nlc3NlZC10aGVtZTtcbn1cblxuQGZ1bmN0aW9uIGdldC1jdXJyZW50LXRoZW1lLW5hbWUoKSB7XG4gIEBpZiAoJG5iLXRoZW1lLW5hbWUgIT0gbnVsbCkge1xuICAgIEByZXR1cm4gJG5iLXRoZW1lLW5hbWU7XG4gIH1cblxuICBAcmV0dXJuIGdldC1sYXN0LWVuYWJsZWQtdGhlbWUoKTtcbn1cblxuQGZ1bmN0aW9uIG5iLXRoZW1lKCRrZXkpIHtcblxuICAkdmFsdWU6ICgpO1xuXG4gIC8vIGluIGNhc2Ugb2YgY3NzIGN1c3RvbSBwcm9wZXJ0aWVzIC0ganVzdCByZXR1cm5zIHZhcigtLXZhci1uYW1lKSAtIHRoZSByZXN0IGlzIGEgYnJvd3NlciBqb2JcbiAgQGlmICgkbmItZW5hYmxlLWNzcy1jdXN0b20tcHJvcGVydGllcyA9PSB0cnVlKSB7XG4gICAgLy8gdGhlcmUgaXMgbm8gd2F5IHRvIGNoZWNrIGlmIHZhcmlhYmxlIGV4aXN0cyBhcyBjdXJyZW50IGV4ZWN1dGlvbiBjb250ZXh0IGlzIG91dHNpZGUgb2YgcGFydGljdWxhciB0aGVtZVxuICAgIC8vIGJlY2F1c2Ugd2UgcHJvY2VzcyBjc3MgaW4gdGhpcyBtb2RlIG9ubHkgb25jZSEgKGFuZCBub3QgZm9yIGVhY2ggdGhlbWUpXG4gICAgJHZhbHVlOiB2YXIoLS0jeyRrZXl9KTtcbiAgfSBAZWxzZSB7XG4gICAgLy8gaW4gYSBwcmVwcm9jZXNzIG1vZGUgKG5iLWluc3RhbGwtZ2xvYmFsIGNhbGwpIGdldCByZWFkeSB2YWx1ZSBmcm9tICRuYi1wcm9jZXNzZWQtdGhlbWUgdmFyaWFibGVcbiAgICBAaWYgKCRuYi10aGVtZS1wcm9jZXNzLW1vZGUgPT0gJ3ByZS1wcm9jZXNzJykge1xuICAgICAgJHZhbHVlOiBtYXAtZ2V0KCRuYi1wcm9jZXNzZWQtdGhlbWUsICRrZXkpO1xuICAgIH1cblxuICAgIC8vIG90aGVyd2lzZSBsYXppbHkgc2VhcmNoIGZvciB2YXJpYWJsZSB2YWx1ZVxuICAgIEBpZiAoJG5iLXRoZW1lLXByb2Nlc3MtbW9kZSA9PSAnbGF6eS1wcm9jZXNzJykge1xuXG4gICAgICAkbmItdGhlbWUtbmFtZTogZ2V0LWN1cnJlbnQtdGhlbWUtbmFtZSgpO1xuXG4gICAgICAkdGhlbWU6IG5iLWdldC1yZWdpc3RlcmVkLXRoZW1lKCRuYi10aGVtZS1uYW1lKTtcbiAgICAgICR2YWx1ZTogbmItZGVlcC1maW5kLXZhbHVlKCR0aGVtZSwgJGtleSwgbWFwLWdldCgkdGhlbWUsICRrZXkpKTtcbiAgICB9XG4gIH1cblxuICBAaWYgKCR2YWx1ZSA9PSBudWxsKSB7XG4gICAgQHdhcm4gJ05lYnVsYXIgVGhlbWU6IGBuYi10aGVtZSgpYCBjYW5ub3QgZmluZCB2YWx1ZSBmb3Iga2V5IGAnICsgJGtleSArICdgIGZvciB0aGVtZSBgJysgJG5iLXRoZW1lLW5hbWUgKydgJztcbiAgfVxuXG4gIEByZXR1cm4gJHZhbHVlO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5cbiR0aGVtZTogKFxuXG4gIC8qKlxuICAgKiBTYXNzIG1hcCBjb250YWlucyBhIGxpc3Qgb2YgYWxsIFRoZW1lIHZhcmlhYmxlcyBhbmQgYWxzbyB0aGVpciBtYXBwaW5ncyBpbnRvIENvbXBvbmVudCB2YXJpYWJsZXNcbiAgICogQSB0aGVtZSBjb25zaXN0cyBvZiBhIGxpc3Qgb2YgY29sb3JzLCBiYWNrZ3JvdW5kcywgYm9yZGVycywgdGV4dCBzdHlsZXMgYW5kIHN1cHBvcnRpbmcgdmFyaWFibGVzLlxuICAgKi9cblxuXG4gIC8qIFN0YXR1cyBjb2xvcnM6IHByaW1hcnksIHN1Y2Nlc3MsIGluZm8sIHdhcm5pbmcsIGRhbmdlciAtIGZvciBjb2xvcmVkIGVsZW1lbnRzIChidXR0b25zLCBldGMpICovXG5cbiAgY29sb3ItcHJpbWFyeS0xMDA6ICNmMmY2ZmYsXG4gIGNvbG9yLXByaW1hcnktMjAwOiAjZDllNGZmLFxuICBjb2xvci1wcmltYXJ5LTMwMDogI2E2YzFmZixcbiAgY29sb3ItcHJpbWFyeS00MDA6ICM1OThiZmYsXG4gIGNvbG9yLXByaW1hcnktNTAwOiAjMzM2NmZmLFxuICBjb2xvci1wcmltYXJ5LTYwMDogIzI3NGJkYixcbiAgY29sb3ItcHJpbWFyeS03MDA6ICMxYTM0YjgsXG4gIGNvbG9yLXByaW1hcnktODAwOiAjMTAyNjk0LFxuICBjb2xvci1wcmltYXJ5LTkwMDogIzA5MWM3YSxcblxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTEwMDogcmdiYSg1MSwgMTAyLCAyNTUsIDAuMDgpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTIwMDogcmdiYSg1MSwgMTAyLCAyNTUsIDAuMTYpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTMwMDogcmdiYSg1MSwgMTAyLCAyNTUsIDAuMjQpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTQwMDogcmdiYSg1MSwgMTAyLCAyNTUsIDAuMzIpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTUwMDogcmdiYSg1MSwgMTAyLCAyNTUsIDAuNCksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDUxLCAxMDIsIDI1NSwgMC40OCksXG5cbiAgY29sb3Itc3VjY2Vzcy0xMDA6ICNmMGZmZjUsXG4gIGNvbG9yLXN1Y2Nlc3MtMjAwOiAjY2NmY2UzLFxuICBjb2xvci1zdWNjZXNzLTMwMDogIzhjZmFjNyxcbiAgY29sb3Itc3VjY2Vzcy00MDA6ICMyY2U2OWIsXG4gIGNvbG9yLXN1Y2Nlc3MtNTAwOiAjMDBkNjhmLFxuICBjb2xvci1zdWNjZXNzLTYwMDogIzAwYjg4NyxcbiAgY29sb3Itc3VjY2Vzcy03MDA6ICMwMDk5N2EsXG4gIGNvbG9yLXN1Y2Nlc3MtODAwOiAjMDA3ZDZjLFxuICBjb2xvci1zdWNjZXNzLTkwMDogIzAwNGE0NSxcblxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTEwMDogcmdiYSgwLCAyMTQsIDE0MywgMC4wOCksXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDAsIDIxNCwgMTQzLCAwLjE2KSxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0zMDA6IHJnYmEoMCwgMjE0LCAxNDMsIDAuMjQpLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTQwMDogcmdiYSgwLCAyMTQsIDE0MywgMC4zMiksXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDAsIDIxNCwgMTQzLCAwLjQpLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTYwMDogcmdiYSgwLCAyMTQsIDE0MywgMC40OCksXG5cbiAgY29sb3ItaW5mby0xMDA6ICNmMmY4ZmYsXG4gIGNvbG9yLWluZm8tMjAwOiAjYzdlMmZmLFxuICBjb2xvci1pbmZvLTMwMDogIzk0Y2JmZixcbiAgY29sb3ItaW5mby00MDA6ICM0MmFhZmYsXG4gIGNvbG9yLWluZm8tNTAwOiAjMDA5NWZmLFxuICBjb2xvci1pbmZvLTYwMDogIzAwNmZkNixcbiAgY29sb3ItaW5mby03MDA6ICMwMDU3YzIsXG4gIGNvbG9yLWluZm8tODAwOiAjMDA0MWE4LFxuICBjb2xvci1pbmZvLTkwMDogIzAwMjg4NSxcblxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTEwMDogcmdiYSgwLCAxNDksIDI1NSwgMC4wOCksXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDAsIDE0OSwgMjU1LCAwLjE2KSxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC0zMDA6IHJnYmEoMCwgMTQ5LCAyNTUsIDAuMjQpLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTQwMDogcmdiYSgwLCAxNDksIDI1NSwgMC4zMiksXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDAsIDE0OSwgMjU1LCAwLjQpLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTYwMDogcmdiYSgwLCAxNDksIDI1NSwgMC40OCksXG5cbiAgY29sb3Itd2FybmluZy0xMDA6ICNmZmZkZjIsXG4gIGNvbG9yLXdhcm5pbmctMjAwOiAjZmZmMWMyLFxuICBjb2xvci13YXJuaW5nLTMwMDogI2ZmZTU5ZSxcbiAgY29sb3Itd2FybmluZy00MDA6ICNmZmM5NGQsXG4gIGNvbG9yLXdhcm5pbmctNTAwOiAjZmZhYTAwLFxuICBjb2xvci13YXJuaW5nLTYwMDogI2RiOGIwMCxcbiAgY29sb3Itd2FybmluZy03MDA6ICNiODZlMDAsXG4gIGNvbG9yLXdhcm5pbmctODAwOiAjOTQ1NDAwLFxuICBjb2xvci13YXJuaW5nLTkwMDogIzcwM2MwMCxcblxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTEwMDogcmdiYSgyNTUsIDE3MCwgMCwgMC4wOCksXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDI1NSwgMTcwLCAwLCAwLjE2KSxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0zMDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuMjQpLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTQwMDogcmdiYSgyNTUsIDE3MCwgMCwgMC4zMiksXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDI1NSwgMTcwLCAwLCAwLjQpLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTYwMDogcmdiYSgyNTUsIDE3MCwgMCwgMC40OCksXG5cbiAgY29sb3ItZGFuZ2VyLTEwMDogI2ZmZjJmMixcbiAgY29sb3ItZGFuZ2VyLTIwMDogI2ZmZDZkOSxcbiAgY29sb3ItZGFuZ2VyLTMwMDogI2ZmYThiNCxcbiAgY29sb3ItZGFuZ2VyLTQwMDogI2ZmNzA4ZCxcbiAgY29sb3ItZGFuZ2VyLTUwMDogI2ZmM2Q3MSxcbiAgY29sb3ItZGFuZ2VyLTYwMDogI2RiMmM2NixcbiAgY29sb3ItZGFuZ2VyLTcwMDogI2I4MWQ1YixcbiAgY29sb3ItZGFuZ2VyLTgwMDogIzk0MTI0ZSxcbiAgY29sb3ItZGFuZ2VyLTkwMDogIzcwMDk0MCxcblxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDI1NSwgNjEsIDExMywgMC4wOCksXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0yMDA6IHJnYmEoMjU1LCA2MSwgMTEzLCAwLjE2KSxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTMwMDogcmdiYSgyNTUsIDYxLCAxMTMsIDAuMjQpLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDI1NSwgNjEsIDExMywgMC4zMiksXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC01MDA6IHJnYmEoMjU1LCA2MSwgMTEzLCAwLjQpLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDI1NSwgNjEsIDExMywgMC40OCksXG5cbiAgLyogQmFzaWMgY29sb3JzIC0gZm9yIGJhY2tncm91bmRzIGFuZCBib3JkZXJzIGFuZCB0ZXh0cyAqL1xuXG4gIGNvbG9yLWJhc2ljLTEwMDogI2ZmZmZmZixcbiAgY29sb3ItYmFzaWMtMjAwOiAjZjdmOWZjLFxuICBjb2xvci1iYXNpYy0zMDA6ICNlZGYxZjcsXG4gIGNvbG9yLWJhc2ljLTQwMDogI2U0ZTlmMixcbiAgY29sb3ItYmFzaWMtNTAwOiAjYzVjZWUwLFxuICBjb2xvci1iYXNpYy02MDA6ICM4ZjliYjMsXG4gIGNvbG9yLWJhc2ljLTcwMDogIzJlM2E1OSxcbiAgY29sb3ItYmFzaWMtODAwOiAjMjIyYjQ1LFxuICBjb2xvci1iYXNpYy05MDA6ICMxOTIwMzgsXG4gIGNvbG9yLWJhc2ljLTEwMDA6ICMxNTFhMzAsXG4gIGNvbG9yLWJhc2ljLTExMDA6ICMxMDE0MjYsXG5cbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDE0MywgMTU1LCAxNzksIDAuMDgpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDA6IHJnYmEoMTQzLCAxNTUsIDE3OSwgMC4xNiksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMDogcmdiYSgxNDMsIDE1NSwgMTc5LCAwLjI0KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDE0MywgMTU1LCAxNzksIDAuMzIpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDA6IHJnYmEoMTQzLCAxNTUsIDE3OSwgMC40KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDE0MywgMTU1LCAxNzksIDAuNDgpLFxuXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpLFxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTIwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2KSxcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0zMDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCksXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzIpLFxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTUwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTYwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ4KSxcblxuICAvKiBTdGF0dXMgY29sb3JzIHN0YXRlcyAtIGZvY3VzLCBob3ZlciwgZGVmYXVsdCwgYWN0aXZlLCBkaXNhYmxlZCAgKi9cblxuICBjb2xvci1iYXNpYy1mb2N1czogY29sb3ItYmFzaWMtNDAwLFxuICBjb2xvci1iYXNpYy1ob3ZlcjogY29sb3ItYmFzaWMtMjAwLFxuICBjb2xvci1iYXNpYy1kZWZhdWx0OiBjb2xvci1iYXNpYy0zMDAsXG4gIGNvbG9yLWJhc2ljLWFjdGl2ZTogY29sb3ItYmFzaWMtNDAwLFxuICBjb2xvci1iYXNpYy1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1iYXNpYy1mb2N1cy1ib3JkZXI6IGNvbG9yLWJhc2ljLTUwMCxcbiAgY29sb3ItYmFzaWMtaG92ZXItYm9yZGVyOiBjb2xvci1iYXNpYy1ob3ZlcixcbiAgY29sb3ItYmFzaWMtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWJhc2ljLWRlZmF1bHQsXG4gIGNvbG9yLWJhc2ljLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWJhc2ljLWFjdGl2ZSxcbiAgY29sb3ItYmFzaWMtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcblxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1mb2N1czogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1ob3ZlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLWJhc2ljLTYwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1iYXNpYy02MDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1iYXNpYy02MDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWJhc2ljLTYwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG5cbiAgY29sb3ItcHJpbWFyeS1mb2N1czogY29sb3ItcHJpbWFyeS02MDAsXG4gIGNvbG9yLXByaW1hcnktaG92ZXI6IGNvbG9yLXByaW1hcnktNDAwLFxuICBjb2xvci1wcmltYXJ5LWRlZmF1bHQ6IGNvbG9yLXByaW1hcnktNTAwLFxuICBjb2xvci1wcmltYXJ5LWFjdGl2ZTogY29sb3ItcHJpbWFyeS02MDAsXG4gIGNvbG9yLXByaW1hcnktZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXI6IGNvbG9yLXByaW1hcnktNzAwLFxuICBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBjb2xvci1wcmltYXJ5LWRpc2FibGVkLWJvcmRlcjogY29sb3ItcHJpbWFyeS1kaXNhYmxlZCxcblxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0xMDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG5cbiAgY29sb3Itc3VjY2Vzcy1mb2N1czogY29sb3Itc3VjY2Vzcy02MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtaG92ZXI6IGNvbG9yLXN1Y2Nlc3MtNDAwLFxuICBjb2xvci1zdWNjZXNzLWRlZmF1bHQ6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBjb2xvci1zdWNjZXNzLWFjdGl2ZTogY29sb3Itc3VjY2Vzcy02MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtNzAwLFxuICBjb2xvci1zdWNjZXNzLWhvdmVyLWJvcmRlcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgY29sb3Itc3VjY2Vzcy1kZWZhdWx0LWJvcmRlcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBjb2xvci1zdWNjZXNzLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLFxuICBjb2xvci1zdWNjZXNzLWRpc2FibGVkLWJvcmRlcjogY29sb3Itc3VjY2Vzcy1kaXNhYmxlZCxcblxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG5cbiAgY29sb3ItaW5mby1mb2N1czogY29sb3ItaW5mby02MDAsXG4gIGNvbG9yLWluZm8taG92ZXI6IGNvbG9yLWluZm8tNDAwLFxuICBjb2xvci1pbmZvLWRlZmF1bHQ6IGNvbG9yLWluZm8tNTAwLFxuICBjb2xvci1pbmZvLWFjdGl2ZTogY29sb3ItaW5mby02MDAsXG4gIGNvbG9yLWluZm8tZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItaW5mby1mb2N1cy1ib3JkZXI6IGNvbG9yLWluZm8tNzAwLFxuICBjb2xvci1pbmZvLWhvdmVyLWJvcmRlcjogY29sb3ItaW5mby1ob3ZlcixcbiAgY29sb3ItaW5mby1kZWZhdWx0LWJvcmRlcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBjb2xvci1pbmZvLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWluZm8tYWN0aXZlLFxuICBjb2xvci1pbmZvLWRpc2FibGVkLWJvcmRlcjogY29sb3ItaW5mby1kaXNhYmxlZCxcblxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3ZlcjogY29sb3ItaW5mby10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3ItaW5mby10cmFuc3BhcmVudC0xMDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItaW5mby01MDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1pbmZvLTUwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3ItaW5mby01MDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItaW5mby01MDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG5cbiAgY29sb3Itd2FybmluZy1mb2N1czogY29sb3Itd2FybmluZy02MDAsXG4gIGNvbG9yLXdhcm5pbmctaG92ZXI6IGNvbG9yLXdhcm5pbmctNDAwLFxuICBjb2xvci13YXJuaW5nLWRlZmF1bHQ6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBjb2xvci13YXJuaW5nLWFjdGl2ZTogY29sb3Itd2FybmluZy02MDAsXG4gIGNvbG9yLXdhcm5pbmctZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNzAwLFxuICBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBjb2xvci13YXJuaW5nLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICBjb2xvci13YXJuaW5nLWRpc2FibGVkLWJvcmRlcjogY29sb3Itd2FybmluZy1kaXNhYmxlZCxcblxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3ZlcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0xMDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3Itd2FybmluZy01MDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3Itd2FybmluZy01MDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3Itd2FybmluZy01MDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG5cbiAgY29sb3ItZGFuZ2VyLWZvY3VzOiBjb2xvci1kYW5nZXItNjAwLFxuICBjb2xvci1kYW5nZXItaG92ZXI6IGNvbG9yLWRhbmdlci00MDAsXG4gIGNvbG9yLWRhbmdlci1kZWZhdWx0OiBjb2xvci1kYW5nZXItNTAwLFxuICBjb2xvci1kYW5nZXItYWN0aXZlOiBjb2xvci1kYW5nZXItNjAwLFxuICBjb2xvci1kYW5nZXItZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlcjogY29sb3ItZGFuZ2VyLTcwMCxcbiAgY29sb3ItZGFuZ2VyLWhvdmVyLWJvcmRlcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBjb2xvci1kYW5nZXItYWN0aXZlLWJvcmRlcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcbiAgY29sb3ItZGFuZ2VyLWRpc2FibGVkLWJvcmRlcjogY29sb3ItZGFuZ2VyLWRpc2FibGVkLFxuXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1czogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLWRhbmdlci01MDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLWRhbmdlci01MDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWRhbmdlci01MDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcblxuICBjb2xvci1jb250cm9sLWZvY3VzOiBjb2xvci1iYXNpYy0zMDAsXG4gIGNvbG9yLWNvbnRyb2wtaG92ZXI6IGNvbG9yLWJhc2ljLTIwMCxcbiAgY29sb3ItY29udHJvbC1kZWZhdWx0OiBjb2xvci1iYXNpYy0xMDAsXG4gIGNvbG9yLWNvbnRyb2wtYWN0aXZlOiBjb2xvci1iYXNpYy0zMDAsXG4gIGNvbG9yLWNvbnRyb2wtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItY29udHJvbC1mb2N1cy1ib3JkZXI6IGNvbG9yLWJhc2ljLTUwMCxcbiAgY29sb3ItY29udHJvbC1ob3Zlci1ib3JkZXI6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG4gIGNvbG9yLWNvbnRyb2wtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgY29sb3ItY29udHJvbC1hY3RpdmUtYm9yZGVyOiBjb2xvci1jb250cm9sLWFjdGl2ZSxcbiAgY29sb3ItY29udHJvbC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWNvbnRyb2wtZGlzYWJsZWQsXG5cbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1czogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLWJhc2ljLTEwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLWJhc2ljLTEwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3ItYmFzaWMtMTAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWJhc2ljLTEwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcblxuICAvKiBCYWNrZ3JvdW5kcyBhbmQgYm9yZGVycyAtIGJhc2ljLCBhbHRlcm5hdGl2ZSBhbmQgcHJpbWFyeSAgKi9cblxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yOiBjb2xvci1iYXNpYy0yMDAsXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMzogY29sb3ItYmFzaWMtMzAwLFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTQwMCxcblxuICBib3JkZXItYmFzaWMtY29sb3ItMTogY29sb3ItYmFzaWMtMTAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItMjogY29sb3ItYmFzaWMtMjAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItMzogY29sb3ItYmFzaWMtMzAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItNDogY29sb3ItYmFzaWMtNDAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItNTogY29sb3ItYmFzaWMtNTAwLFxuXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMTogY29sb3ItYmFzaWMtODAwLFxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTkwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0zOiBjb2xvci1iYXNpYy0xMDAwLFxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTExMDAsXG5cbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTkwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTEwMDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci00OiBjb2xvci1iYXNpYy0xMTAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItNTogY29sb3ItYmFzaWMtMTEwMCxcblxuICBiYWNrZ3JvdW5kLXByaW1hcnktY29sb3ItMTogY29sb3ItcHJpbWFyeS01MDAsXG4gIGJhY2tncm91bmQtcHJpbWFyeS1jb2xvci0yOiBjb2xvci1wcmltYXJ5LTYwMCxcbiAgYmFja2dyb3VuZC1wcmltYXJ5LWNvbG9yLTM6IGNvbG9yLXByaW1hcnktNzAwLFxuICBiYWNrZ3JvdW5kLXByaW1hcnktY29sb3ItNDogY29sb3ItcHJpbWFyeS04MDAsXG5cbiAgYm9yZGVyLXByaW1hcnktY29sb3ItMTogY29sb3ItYmFzaWMtNTAwLFxuICBib3JkZXItcHJpbWFyeS1jb2xvci0yOiBjb2xvci1iYXNpYy02MDAsXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTM6IGNvbG9yLWJhc2ljLTcwMCxcbiAgYm9yZGVyLXByaW1hcnktY29sb3ItNDogY29sb3ItYmFzaWMtODAwLFxuICBib3JkZXItcHJpbWFyeS1jb2xvci01OiBjb2xvci1iYXNpYy05MDAsXG5cbiAgLyogVGV4dCBjb2xvcnMgLSBnZW5lcmFsIGFuZCBzdGF0dXMgKi9cblxuICB0ZXh0LWJhc2ljLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHRleHQtYWx0ZXJuYXRlLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHRleHQtY29udHJvbC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICB0ZXh0LWRpc2FibGVkLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHRleHQtaGludC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuXG4gIHRleHQtcHJpbWFyeS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0ZXh0LXByaW1hcnktZm9jdXMtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgdGV4dC1wcmltYXJ5LWFjdGl2ZS1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIHRleHQtcHJpbWFyeS1kaXNhYmxlZC1jb2xvcjogY29sb3ItcHJpbWFyeS00MDAsXG5cbiAgdGV4dC1zdWNjZXNzLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRleHQtc3VjY2Vzcy1mb2N1cy1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgdGV4dC1zdWNjZXNzLWhvdmVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICB0ZXh0LXN1Y2Nlc3MtYWN0aXZlLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcbiAgdGV4dC1zdWNjZXNzLWRpc2FibGVkLWNvbG9yOiBjb2xvci1zdWNjZXNzLTQwMCxcblxuICB0ZXh0LWluZm8tY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdGV4dC1pbmZvLWZvY3VzLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICB0ZXh0LWluZm8taG92ZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXIsXG4gIHRleHQtaW5mby1hY3RpdmUtY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLFxuICB0ZXh0LWluZm8tZGlzYWJsZWQtY29sb3I6IGNvbG9yLWluZm8tNDAwLFxuXG4gIHRleHQtd2FybmluZy1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0ZXh0LXdhcm5pbmctZm9jdXMtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIHRleHQtd2FybmluZy1ob3Zlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgdGV4dC13YXJuaW5nLWFjdGl2ZS1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsXG4gIHRleHQtd2FybmluZy1kaXNhYmxlZC1jb2xvcjogY29sb3Itd2FybmluZy00MDAsXG5cbiAgdGV4dC1kYW5nZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICB0ZXh0LWRhbmdlci1mb2N1cy1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICB0ZXh0LWRhbmdlci1ob3Zlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICB0ZXh0LWRhbmdlci1hY3RpdmUtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUsXG4gIHRleHQtZGFuZ2VyLWRpc2FibGVkLWNvbG9yOiBjb2xvci1kYW5nZXItNDAwLFxuXG4gIC8qIEZvbnRzIGFuZCB0ZXh0IHN0eWxlcyAtIGhlYWRpbmdzLCBzdWJ0aXRsZXMsIHBhcmFncmFwaHMsIGNhcHRpb25zLCBidXR0b24gKi9cblxuICBmb250LWZhbWlseS1wcmltYXJ5OiB1bnF1b3RlKCdPcGVuIFNhbnMsIHNhbnMtc2VyaWYnKSxcbiAgZm9udC1mYW1pbHktc2Vjb25kYXJ5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuXG4gIHRleHQtaGVhZGluZy0xLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksXG4gIHRleHQtaGVhZGluZy0xLWZvbnQtc2l6ZTogMi4yNXJlbSxcbiAgdGV4dC1oZWFkaW5nLTEtZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1oZWFkaW5nLTEtbGluZS1oZWlnaHQ6IDNyZW0sXG5cbiAgdGV4dC1oZWFkaW5nLTItZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXNlY29uZGFyeSxcbiAgdGV4dC1oZWFkaW5nLTItZm9udC1zaXplOiAycmVtLFxuICB0ZXh0LWhlYWRpbmctMi1mb250LXdlaWdodDogNzAwLFxuICB0ZXh0LWhlYWRpbmctMi1saW5lLWhlaWdodDogMi41cmVtLFxuXG4gIHRleHQtaGVhZGluZy0zLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1zZWNvbmRhcnksXG4gIHRleHQtaGVhZGluZy0zLWZvbnQtc2l6ZTogMS44NzVyZW0sXG4gIHRleHQtaGVhZGluZy0zLWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtaGVhZGluZy0zLWxpbmUtaGVpZ2h0OiAyLjVyZW0sXG5cbiAgdGV4dC1oZWFkaW5nLTQtZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXNlY29uZGFyeSxcbiAgdGV4dC1oZWFkaW5nLTQtZm9udC1zaXplOiAxLjYyNXJlbSxcbiAgdGV4dC1oZWFkaW5nLTQtZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1oZWFkaW5nLTQtbGluZS1oZWlnaHQ6IDJyZW0sXG5cbiAgdGV4dC1oZWFkaW5nLTUtZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXNlY29uZGFyeSxcbiAgdGV4dC1oZWFkaW5nLTUtZm9udC1zaXplOiAxLjM3NXJlbSxcbiAgdGV4dC1oZWFkaW5nLTUtZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1oZWFkaW5nLTUtbGluZS1oZWlnaHQ6IDJyZW0sXG5cbiAgdGV4dC1oZWFkaW5nLTYtZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXNlY29uZGFyeSxcbiAgdGV4dC1oZWFkaW5nLTYtZm9udC1zaXplOiAxLjEyNXJlbSxcbiAgdGV4dC1oZWFkaW5nLTYtZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1oZWFkaW5nLTYtbGluZS1oZWlnaHQ6IDEuNXJlbSxcblxuICB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuICB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZTogMC45Mzc1cmVtLFxuICB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0OiA2MDAsXG4gIHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQ6IDEuNXJlbSxcblxuICB0ZXh0LXN1YnRpdGxlLTItZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtc3VidGl0bGUtMi1mb250LXNpemU6IDAuODEyNXJlbSxcbiAgdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0OiA2MDAsXG4gIHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodDogMS41cmVtLFxuXG4gIHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuICB0ZXh0LXBhcmFncmFwaC1mb250LXNpemU6IDAuOTM3NXJlbSxcbiAgdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQ6IDQwMCxcbiAgdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQ6IDEuMjVyZW0sXG5cbiAgdGV4dC1wYXJhZ3JhcGgtMi1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1wYXJhZ3JhcGgtMi1mb250LXNpemU6IDAuODEyNXJlbSxcbiAgdGV4dC1wYXJhZ3JhcGgtMi1mb250LXdlaWdodDogNDAwLFxuICB0ZXh0LXBhcmFncmFwaC0yLWxpbmUtaGVpZ2h0OiAxLjEyNXJlbSxcblxuICB0ZXh0LWxhYmVsLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuICB0ZXh0LWxhYmVsLWZvbnQtc2l6ZTogMC43NXJlbSxcbiAgdGV4dC1sYWJlbC1mb250LXdlaWdodDogNzAwLFxuICB0ZXh0LWxhYmVsLWxpbmUtaGVpZ2h0OiAxcmVtLFxuXG4gIHRleHQtY2FwdGlvbi1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1jYXB0aW9uLWZvbnQtc2l6ZTogMC43NXJlbSxcbiAgdGV4dC1jYXB0aW9uLWZvbnQtd2VpZ2h0OiA0MDAsXG4gIHRleHQtY2FwdGlvbi1saW5lLWhlaWdodDogMXJlbSxcblxuICB0ZXh0LWNhcHRpb24tMi1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1jYXB0aW9uLTItZm9udC1zaXplOiAwLjc1cmVtLFxuICB0ZXh0LWNhcHRpb24tMi1mb250LXdlaWdodDogNjAwLFxuICB0ZXh0LWNhcHRpb24tMi1saW5lLWhlaWdodDogMXJlbSxcblxuICB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1idXR0b24tZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1idXR0b24tdGlueS1mb250LXNpemU6IDAuNjI1cmVtLFxuICB0ZXh0LWJ1dHRvbi10aW55LWxpbmUtaGVpZ2h0OiAwLjc1cmVtLFxuICB0ZXh0LWJ1dHRvbi1zbWFsbC1mb250LXNpemU6IDAuNzVyZW0sXG4gIHRleHQtYnV0dG9uLXNtYWxsLWxpbmUtaGVpZ2h0OiAxcmVtLFxuICB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplOiAwLjg3NXJlbSxcbiAgdGV4dC1idXR0b24tbWVkaXVtLWxpbmUtaGVpZ2h0OiAxcmVtLFxuICB0ZXh0LWJ1dHRvbi1sYXJnZS1mb250LXNpemU6IDFyZW0sXG4gIHRleHQtYnV0dG9uLWxhcmdlLWxpbmUtaGVpZ2h0OiAxLjI1cmVtLFxuICB0ZXh0LWJ1dHRvbi1naWFudC1mb250LXNpemU6IDEuMTI1cmVtLFxuICB0ZXh0LWJ1dHRvbi1naWFudC1saW5lLWhlaWdodDogMS41cmVtLFxuXG4gIC8qIFN1cHBvcnRpbmcgdmFyaWFibGVzIC0gYm9yZGVyIHJhZGl1cywgb3V0bGluZSwgc2hhZG93LCBkaXZpZGVyICovXG5cbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSxcblxuICBvdXRsaW5lLXdpZHRoOiAwLjM3NXJlbSxcbiAgb3V0bGluZS1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuXG4gIHNjcm9sbGJhci1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci00LFxuICBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzY3JvbGxiYXItd2lkdGg6IDAuMzEyNXJlbSxcblxuICBzaGFkb3c6IDAgMC41cmVtIDFyZW0gMCByZ2JhKDQ0LCA1MSwgNzMsIDAuMSksXG5cbiAgZGl2aWRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG4gIGRpdmlkZXItc3R5bGU6IHNvbGlkLFxuICBkaXZpZGVyLXdpZHRoOiAxcHgsXG4pO1xuXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsIGRlZmF1bHQpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5AaW1wb3J0ICdkZWZhdWx0JztcblxuJHRoZW1lOiAoXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMTogY29sb3ItYmFzaWMtODAwLFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTkwMCxcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zOiBjb2xvci1iYXNpYy0xMDAwLFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTExMDAsXG5cbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTgwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTkwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTEwMDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci00OiBjb2xvci1iYXNpYy0xMTAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItNTogY29sb3ItYmFzaWMtMTEwMCxcblxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0yOiBjb2xvci1iYXNpYy0yMDAsXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMzogY29sb3ItYmFzaWMtMzAwLFxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTQwMCxcblxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMTogY29sb3ItYmFzaWMtMTAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMjogY29sb3ItYmFzaWMtMjAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMzogY29sb3ItYmFzaWMtMzAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItNDogY29sb3ItYmFzaWMtNDAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItNTogY29sb3ItYmFzaWMtNTAwLFxuXG4gIHRleHQtYmFzaWMtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgdGV4dC1hbHRlcm5hdGUtY29sb3I6IGNvbG9yLWJhc2ljLTkwMCxcbiAgdGV4dC1kaXNhYmxlZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIHNoYWRvdzogMCAwLjVyZW0gMXJlbSAwICMxYTFmMzMsXG4gIG91dGxpbmUtY29sb3I6IGNvbG9yLWJhc2ljLTcwMCxcbik7XG5cbi8vIHJlZ2lzdGVyIHRoZSB0aGVtZVxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBkYXJrLCBkZWZhdWx0KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuQGltcG9ydCAnZGFyayc7XG5cbiR0aGVtZTogKFxuXG4gIGNvbG9yLXByaW1hcnktMTAwOiAjZmFmN2ZmLFxuICBjb2xvci1wcmltYXJ5LTIwMDogI2VjZTNmZixcbiAgY29sb3ItcHJpbWFyeS0zMDA6ICNkNWJmZmYsXG4gIGNvbG9yLXByaW1hcnktNDAwOiAjYjE4YWZmLFxuICBjb2xvci1wcmltYXJ5LTUwMDogI2ExNmVmZixcbiAgY29sb3ItcHJpbWFyeS02MDA6ICM3YjUxZGIsXG4gIGNvbG9yLXByaW1hcnktNzAwOiAjNWEzN2I4LFxuICBjb2xvci1wcmltYXJ5LTgwMDogIzNlMjQ5NCxcbiAgY29sb3ItcHJpbWFyeS05MDA6ICMyOTE1N2EsXG5cbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0xMDA6IHJnYmEoMTYxLCAxMTAsIDI1NSwgMC4wOCksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDE2MSwgMTEwLCAyNTUsIDAuMTYpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTMwMDogcmdiYSgxNjEsIDExMCwgMjU1LCAwLjI0KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC00MDA6IHJnYmEoMTYxLCAxMTAsIDI1NSwgMC4zMiksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDE2MSwgMTEwLCAyNTUsIDAuNCksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDE2MSwgMTEwLCAyNTUsIDAuNDgpLFxuXG4gIGNvbG9yLWJhc2ljLTEwMDogI2ZmZmZmZixcbiAgY29sb3ItYmFzaWMtMjAwOiAjZjdmN2ZjLFxuICBjb2xvci1iYXNpYy0zMDA6ICNmMGYwZmEsXG4gIGNvbG9yLWJhc2ljLTQwMDogI2UxZTFmMixcbiAgY29sb3ItYmFzaWMtNTAwOiAjY2VjZWViLFxuICBjb2xvci1iYXNpYy02MDA6ICNiNGI0ZGIsXG4gIGNvbG9yLWJhc2ljLTcwMDogIzZhNmE5NCxcbiAgY29sb3ItYmFzaWMtODAwOiAjMzIzMjU5LFxuICBjb2xvci1iYXNpYy05MDA6ICMyNTI1NDcsXG4gIGNvbG9yLWJhc2ljLTEwMDA6ICMxYjFiMzgsXG4gIGNvbG9yLWJhc2ljLTExMDA6ICMxMzEzMmIsXG5cbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDE4MCwgMTgwLCAyMTksIDAuMDgpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDA6IHJnYmEoMTgwLCAxODAsIDIxOSwgMC4xNiksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMDogcmdiYSgxODAsIDE4MCwgMjE5LCAwLjI0KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDE4MCwgMTgwLCAyMTksIDAuMzIpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDA6IHJnYmEoMTgwLCAxODAsIDIxOSwgMC40KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDE4MCwgMTgwLCAyMTksIDAuNDgpLFxuKTtcblxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBjb3NtaWMsIGRhcmspO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5AaW1wb3J0ICdkZWZhdWx0JztcblxuJHRoZW1lOiAoXG4gIGJvcmRlci1yYWRpdXM6IDAuMTdyZW0sXG4gIHNoYWRvdzogbm9uZSxcblxuICBidXR0b24taGVyby1nbG93LXNpemU6IDAgMCAyMHB4IDAsXG5cbiAgY2FyZC1ib3JkZXItd2lkdGg6IDFweCxcbiAgY2FyZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuXG4gIGNvbnRleHQtbWVudS1ib3JkZXItd2lkdGg6IDFweCxcbiAgY29udGV4dC1tZW51LWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG5cbiAgdGFicy1zZWxlY3RlZDogY29sb3ItcHJpbWFyeS01MDAsXG4gIHRhYnMtc2VsZWN0ZWQtc2Vjb25kLWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCxcblxuICBwb3BvdmVyLWJvcmRlci13aWR0aDogMXB4LFxuICBwb3BvdmVyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG5cbiAgdGFic2V0LWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHJvdXRlLXRhYnNldC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICB1c2VyLXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBjaGVja2JveC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBtb2RhbC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuXG4gIHRhYnNldC1zaGFkb3c6IG5vbmUsXG4gIHJvdXRlLXRhYnNldC1zaGFkb3c6IG5vbmUsXG4gIGJ1dHRvbi1oZXJvLXNoYWRvdzogbm9uZSxcbiAgYWxlcnQtc2hhZG93OiBub25lLFxuICBhY2NvcmRpb24tc2hhZG93OiBub25lLFxuKTtcblxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBjb3Jwb3JhdGUsIGRlZmF1bHQpO1xuIiwiQGltcG9ydCBcIn5ib290c3RyYXAvc2Nzcy9taXhpbnMvYnJlYWtwb2ludHNcIjtcclxuQGltcG9ydCBcIn5AbmVidWxhci90aGVtZS9zdHlsZXMvZ2xvYmFsL2JyZWFrcG9pbnRzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi9AdGhlbWUvc3R5bGVzL3RoZW1lc1wiO1xyXG5cclxuQGluY2x1ZGUgbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XHJcbiAgLm1haW4tY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDkwdmg7XHJcblxyXG4gICAgI2JhY2stYnRuIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgc3ViLWNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiA1NjBweDtcclxuXHJcbiAgICAgIC5mb3JtLWlucHV0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjdGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTIwLCAxMjAsIDEyMCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNzdWItdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyohXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLypcbiAgRGVjbGFyZSB2YXJpYWJsZXMgYmVmb3JlIG1ha2luZyB0aGVtIGdsb2JhbC5cbiAgZGFydC1zYXNzIGRvZXNuJ3QgYWxsb3cgdG8gZGVjbGFyZSB2YXJpYWJsZSB3aXRoICFnbG9iYWwuXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cbi8qXG4gIDpob3N0IGNhbiBiZSBwcmVmaXhlZFxuICBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvOGQwZWUzNDkzOWYxNGMwNzg3NmQyMjJjMjViNDA1ZWQ0NThhMzRkMy9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxXG5cbiAgV2UgaGF2ZSB0byB1c2UgOmhvc3QgaW5zdGVhZCBvZiA6aG9zdC1jb250ZXh0KCR0aGVtZSksIHRvIGJlIGFibGUgdG8gcHJlZml4IHRoZW1lIGNsYXNzXG4gIHdpdGggc29tZXRoaW5nIGRlZmluZWQgaW5zaWRlIG9mIEBjb250ZW50LCBieSBwcmVmaXhpbmcgJi5cbiAgRm9yIGV4YW1wbGUgdGhpcyBzY3NzIGNvZGU6XG4gICAgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgLnNvbWUtc2VsZWN0b3IgJiB7XG4gICAgICAgIC4uLlxuICAgICAgfVxuICAgIH1cbiAgV2lsbCByZXN1bHQgaW4gbmV4dCBjc3M6XG4gICAgLnNvbWUtc2VsZWN0b3IgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgLi4uXG4gICAgfVxuXG4gIEl0IGRvZXNuJ3Qgd29yayB3aXRoIDpob3N0LWNvbnRleHQgYmVjYXVzZSBhbmd1bGFyIHNwbGl0dGluZyBpdCBpbiB0d28gc2VsZWN0b3JzIGFuZCByZW1vdmVzXG4gIHByZWZpeCBpbiBvbmUgb2YgdGhlIHNlbGVjdG9ycy5cbiovXG4ubmItdGhlbWUtZGVmYXVsdCA6aG9zdCAubWFpbi1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiA5MHZoO1xufVxuLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgLm1haW4tY29udGFpbmVyICNiYWNrLWJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAzNHB4O1xufVxuLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgLm1haW4tY29udGFpbmVyIHN1Yi1jb250YWluZXIge1xuICB3aWR0aDogNTYwcHg7XG59XG4ubmItdGhlbWUtZGVmYXVsdCA6aG9zdCAubWFpbi1jb250YWluZXIgc3ViLWNvbnRhaW5lciAuZm9ybS1pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG4ubmItdGhlbWUtZGVmYXVsdCA6aG9zdCAubWFpbi1jb250YWluZXIgc3ViLWNvbnRhaW5lciAjdGl0bGUge1xuICBjb2xvcjogIzc4Nzg3ODtcbn1cbi5uYi10aGVtZS1kZWZhdWx0IDpob3N0IC5tYWluLWNvbnRhaW5lciBzdWItY29udGFpbmVyICNzdWItdGl0bGUge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4vKlxuICA6aG9zdCBjYW4gYmUgcHJlZml4ZWRcbiAgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzhkMGVlMzQ5MzlmMTRjMDc4NzZkMjIyYzI1YjQwNWVkNDU4YTM0ZDMvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MVxuXG4gIFdlIGhhdmUgdG8gdXNlIDpob3N0IGluc3RlYWQgb2YgOmhvc3QtY29udGV4dCgkdGhlbWUpLCB0byBiZSBhYmxlIHRvIHByZWZpeCB0aGVtZSBjbGFzc1xuICB3aXRoIHNvbWV0aGluZyBkZWZpbmVkIGluc2lkZSBvZiBAY29udGVudCwgYnkgcHJlZml4aW5nICYuXG4gIEZvciBleGFtcGxlIHRoaXMgc2NzcyBjb2RlOlxuICAgIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgIC5zb21lLXNlbGVjdG9yICYge1xuICAgICAgICAuLi5cbiAgICAgIH1cbiAgICB9XG4gIFdpbGwgcmVzdWx0IGluIG5leHQgY3NzOlxuICAgIC5zb21lLXNlbGVjdG9yIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgIC4uLlxuICAgIH1cblxuICBJdCBkb2Vzbid0IHdvcmsgd2l0aCA6aG9zdC1jb250ZXh0IGJlY2F1c2UgYW5ndWxhciBzcGxpdHRpbmcgaXQgaW4gdHdvIHNlbGVjdG9ycyBhbmQgcmVtb3Zlc1xuICBwcmVmaXggaW4gb25lIG9mIHRoZSBzZWxlY3RvcnMuXG4qL1xuLm5iLXRoZW1lLWRhcmsgOmhvc3QgLm1haW4tY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogOTB2aDtcbn1cbi5uYi10aGVtZS1kYXJrIDpob3N0IC5tYWluLWNvbnRhaW5lciAjYmFjay1idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMzRweDtcbn1cbi5uYi10aGVtZS1kYXJrIDpob3N0IC5tYWluLWNvbnRhaW5lciBzdWItY29udGFpbmVyIHtcbiAgd2lkdGg6IDU2MHB4O1xufVxuLm5iLXRoZW1lLWRhcmsgOmhvc3QgLm1haW4tY29udGFpbmVyIHN1Yi1jb250YWluZXIgLmZvcm0taW5wdXQge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLm5iLXRoZW1lLWRhcmsgOmhvc3QgLm1haW4tY29udGFpbmVyIHN1Yi1jb250YWluZXIgI3RpdGxlIHtcbiAgY29sb3I6ICM3ODc4Nzg7XG59XG4ubmItdGhlbWUtZGFyayA6aG9zdCAubWFpbi1jb250YWluZXIgc3ViLWNvbnRhaW5lciAjc3ViLXRpdGxlIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuLypcbiAgOmhvc3QgY2FuIGJlIHByZWZpeGVkXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi84ZDBlZTM0OTM5ZjE0YzA3ODc2ZDIyMmMyNWI0MDVlZDQ1OGEzNGQzL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDFcblxuICBXZSBoYXZlIHRvIHVzZSA6aG9zdCBpbnN0ZWFkIG9mIDpob3N0LWNvbnRleHQoJHRoZW1lKSwgdG8gYmUgYWJsZSB0byBwcmVmaXggdGhlbWUgY2xhc3NcbiAgd2l0aCBzb21ldGhpbmcgZGVmaW5lZCBpbnNpZGUgb2YgQGNvbnRlbnQsIGJ5IHByZWZpeGluZyAmLlxuICBGb3IgZXhhbXBsZSB0aGlzIHNjc3MgY29kZTpcbiAgICAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAuc29tZS1zZWxlY3RvciAmIHtcbiAgICAgICAgLi4uXG4gICAgICB9XG4gICAgfVxuICBXaWxsIHJlc3VsdCBpbiBuZXh0IGNzczpcbiAgICAuc29tZS1zZWxlY3RvciAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAuLi5cbiAgICB9XG5cbiAgSXQgZG9lc24ndCB3b3JrIHdpdGggOmhvc3QtY29udGV4dCBiZWNhdXNlIGFuZ3VsYXIgc3BsaXR0aW5nIGl0IGluIHR3byBzZWxlY3RvcnMgYW5kIHJlbW92ZXNcbiAgcHJlZml4IGluIG9uZSBvZiB0aGUgc2VsZWN0b3JzLlxuKi9cbi5uYi10aGVtZS1jb3NtaWMgOmhvc3QgLm1haW4tY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogOTB2aDtcbn1cbi5uYi10aGVtZS1jb3NtaWMgOmhvc3QgLm1haW4tY29udGFpbmVyICNiYWNrLWJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAzNHB4O1xufVxuLm5iLXRoZW1lLWNvc21pYyA6aG9zdCAubWFpbi1jb250YWluZXIgc3ViLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA1NjBweDtcbn1cbi5uYi10aGVtZS1jb3NtaWMgOmhvc3QgLm1haW4tY29udGFpbmVyIHN1Yi1jb250YWluZXIgLmZvcm0taW5wdXQge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLm5iLXRoZW1lLWNvc21pYyA6aG9zdCAubWFpbi1jb250YWluZXIgc3ViLWNvbnRhaW5lciAjdGl0bGUge1xuICBjb2xvcjogIzc4Nzg3ODtcbn1cbi5uYi10aGVtZS1jb3NtaWMgOmhvc3QgLm1haW4tY29udGFpbmVyIHN1Yi1jb250YWluZXIgI3N1Yi10aXRsZSB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qXG4gIDpob3N0IGNhbiBiZSBwcmVmaXhlZFxuICBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvOGQwZWUzNDkzOWYxNGMwNzg3NmQyMjJjMjViNDA1ZWQ0NThhMzRkMy9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxXG5cbiAgV2UgaGF2ZSB0byB1c2UgOmhvc3QgaW5zdGVhZCBvZiA6aG9zdC1jb250ZXh0KCR0aGVtZSksIHRvIGJlIGFibGUgdG8gcHJlZml4IHRoZW1lIGNsYXNzXG4gIHdpdGggc29tZXRoaW5nIGRlZmluZWQgaW5zaWRlIG9mIEBjb250ZW50LCBieSBwcmVmaXhpbmcgJi5cbiAgRm9yIGV4YW1wbGUgdGhpcyBzY3NzIGNvZGU6XG4gICAgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgLnNvbWUtc2VsZWN0b3IgJiB7XG4gICAgICAgIC4uLlxuICAgICAgfVxuICAgIH1cbiAgV2lsbCByZXN1bHQgaW4gbmV4dCBjc3M6XG4gICAgLnNvbWUtc2VsZWN0b3IgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgLi4uXG4gICAgfVxuXG4gIEl0IGRvZXNuJ3Qgd29yayB3aXRoIDpob3N0LWNvbnRleHQgYmVjYXVzZSBhbmd1bGFyIHNwbGl0dGluZyBpdCBpbiB0d28gc2VsZWN0b3JzIGFuZCByZW1vdmVzXG4gIHByZWZpeCBpbiBvbmUgb2YgdGhlIHNlbGVjdG9ycy5cbiovXG4ubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IC5tYWluLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDkwdmg7XG59XG4ubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IC5tYWluLWNvbnRhaW5lciAjYmFjay1idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMzRweDtcbn1cbi5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgLm1haW4tY29udGFpbmVyIHN1Yi1jb250YWluZXIge1xuICB3aWR0aDogNTYwcHg7XG59XG4ubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IC5tYWluLWNvbnRhaW5lciBzdWItY29udGFpbmVyIC5mb3JtLWlucHV0IHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgLm1haW4tY29udGFpbmVyIHN1Yi1jb250YWluZXIgI3RpdGxlIHtcbiAgY29sb3I6ICM3ODc4Nzg7XG59XG4ubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IC5tYWluLWNvbnRhaW5lciBzdWItY29udGFpbmVyICNzdWItdGl0bGUge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ngx-forgot",
                templateUrl: "./forgot.component.html",
                styleUrls: ["./forgot.component.scss"],
            }]
    }], function () { return [{ type: _public_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _public_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _public_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/services/auth.service */ "./src/app/public/services/auth.service.ts");
/* harmony import */ var _public_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/services/general.service */ "./src/app/public/services/general.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









function LoginComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function LoginComponent_ng_template_4_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function LoginComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_ng_template_4_ng_container_7_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function LoginComponent_ng_template_6_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A1Es necesario un correo electr\u00F3nico v\u00E1lido! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_ng_template_6_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A1Es necesaria una clave con al menos 6 caracteres! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Correo electr\u00F3nico:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_ng_template_6_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.bin.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_ng_template_6_p_5_Template, 2, 0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Clave: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_6_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onForgot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u00BFOlvidaste tu clave? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_ng_template_6_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.bin.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_ng_template_6_p_14_Template, 2, 0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_6_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onRegister(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u00BFNo tienes una cuenta? Reg\u00EDstrate ahora ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_6_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Entrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.bin.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.bin.email && ctx_r4.bin.email.length && ctx_r4.bin.email.includes("@") && _r6.invalid && (_r6.dirty || _r6.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.bin.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.bin.password && ctx_r4.bin.password.length && _r8.invalid && (_r8.dirty || _r8.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx_r4.bin.email && ctx_r4.bin.password && ctx_r4.bin.password.length > 5))("status", !(ctx_r4.bin.email && ctx_r4.bin.password && ctx_r4.bin.password.length > 5) ? ctx_r4.primary - ctx_r4.transparent : ctx_r4.primary);
} }
class LoginComponent {
    constructor(authService, generalService) {
        this.authService = authService;
        this.generalService = generalService;
        /* Binding */
        this.bin = {};
        this.loading = false;
        /** API */
        this.API_AUTH = 'users/authenticate';
    }
    ngOnInit() { }
    // =================================
    // Metodos
    // ================================
    /**
     * Autenticacion de usuario
     */
    onSubmit() {
        if (!(this.bin.email && this.bin.password)) {
            this.generalService.onIncomplete();
            return;
        }
        const user = {
            email: this.bin.email,
            password: this.bin.password,
        };
        this.loading = true;
        const titulo = 'Autenticación de usuario.';
        this.authService
            .post({ api: this.API_AUTH, data: user })
            .then((response) => {
            this.loading = false;
            if (response) {
                if (response.user.tipo === 'administrador' && response.user.empresa.estado !== 'aprobado') {
                    this.generalService.showToastr({
                        title: 'Tu solicitud está pendiente o rechazada, por favor comunícate con el administrador de la plataforma',
                        status: 'warning',
                    });
                }
                else {
                    if (this.authService.setAuthValues({ data: { token: response.token, user: response.user } })) {
                        if (this.authService.isSuperadmin) {
                            this.bin = [];
                            this.generalService.routerNavigateTo({
                                path: '/index/dashboard',
                            });
                        }
                        else {
                            this.authService.logout();
                            this.generalService.showToastr({
                                title: 'No tiene permiso para acceder a la plataforma administrativa.',
                                status: 'danger',
                            });
                        }
                    }
                }
            }
        });
    }
    /**
     * Olvido la contraseña
     */
    onForgot() {
        this.generalService.routerNavigateTo({ path: '/login/forgot' });
    }
    onRegister() {
        this.generalService.routerNavigateTo({ path: '/login/register' });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_public_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_public_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["ngx-login"]], decls: 8, vars: 2, consts: [["windowMode", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", "size", "xlarge", 1, "main-container", 3, "nbSpinner"], [4, "ngTemplateOutlet"], ["templateLogin", ""], ["mainFormTMPL", ""], [1, "d-flex", "justify-content-center"], [1, "p-2", "sub-container"], [1, "text-center"], ["src", "../../../assets/images/logo-persing.svg", "alt", "Logo Persing", "height", "150px"], [1, "form-div"], [1, "form-control-group"], ["for", "input-email", 1, "label"], ["nbinput", "", "fullwidth", "", "name", "email", "id", "input-email", "pattern", ".+@.+\\..+", "placeholder", "correo@ejemplo.com", "fieldsize", "large", "autofocus", "", "required", "", "aria-invalid", "true", 1, "input-full-width", "size-large", "status-basic", "shape-rectangle", "ng-pristine", "ng-invalid", "nb-transition", "ng-touched", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["class", "caption status-danger ng-star-inserted mt-1", 4, "ngIf"], [1, "form-control-group", "form-input"], [1, "label-with-link"], ["for", "input-password", 1, "label"], ["id", "forgot-password", 1, "forgot-password", "caption-2", 3, "click"], ["nbinput", "", "fullwidth", "", "name", "password", "type", "password", "id", "input-password", "placeholder", "Clave", "fieldsize", "large", "required", "", "minlength", "6", "maxlength", "500", 1, "input-full-width", "size-large", "status-basic", "shape-rectangle", "ng-untouched", "ng-pristine", "ng-invalid", "nb-transition", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["id", "register", 1, "forgot-password", "caption-2", 3, "click"], ["nbButton", "", "nbbutton", "", "fullwidth", "", "size", "large", "_nghost-dyt-c86", "", "aria-disabled", "true", "tabindex", "-1", "id", "main-btn", "type", "button", 1, "appearance-filled", "full-width", "size-large", "status-primary", "shape-rectangle", "btn-disabled", "nb-transition", 3, "disabled", "status", "click"], [1, "caption", "status-danger", "ng-star-inserted", "mt-1"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_ng_container_3_Template, 1, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_ng_template_4_Template, 8, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_ng_template_6_Template, 23, 6, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSpinner", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss'],
            }]
    }], function () { return [{ type: _public_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _public_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _public_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/services/auth.service */ "./src/app/public/services/auth.service.ts");
/* harmony import */ var _public_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/services/general.service */ "./src/app/public/services/general.service.ts");
/* harmony import */ var _public_services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/services/main.service */ "./src/app/public/services/main.service.ts");
/* harmony import */ var _public_services_s3_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/services/s3.service */ "./src/app/public/services/s3.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");














function RegisterComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function RegisterComponent_ng_template_4_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function RegisterComponent_ng_template_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_ng_template_4_div_4_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function RegisterComponent_ng_template_4_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function RegisterComponent_ng_template_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_ng_template_4_div_5_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5);
} }
function RegisterComponent_ng_template_4_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function RegisterComponent_ng_template_4_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_ng_template_4_div_6_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r7);
} }
function RegisterComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_ng_template_4_Template_nb_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.onLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RegisterComponent_ng_template_4_div_4_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RegisterComponent_ng_template_4_div_5_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RegisterComponent_ng_template_4_div_6_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.step === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.step === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.step === 2);
} }
function RegisterComponent_ng_template_6_nb_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", s_r22._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r22.descripcion[0], " ");
} }
function RegisterComponent_ng_template_6_p_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Seleccionado: ", ctx_r21.selectedFile.name, "");
} }
function RegisterComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Registro");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Ingresa los datos de tu empresa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Nombre de la empresa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_ng_template_6_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.empresa.nombre = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Sectores de la empresa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nb-select", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_ng_template_6_Template_nb_select_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.empresa.sectores = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, RegisterComponent_ng_template_6_nb_option_17_Template, 2, 2, "nb-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Descripcion");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "textarea", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_ng_template_6_Template_textarea_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.empresa.descripcion = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Subir logo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_ng_template_6_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.openFileSelector(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Examinar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function RegisterComponent_ng_template_6_Template_input_change_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.onChangeMedia({ event: $event }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, RegisterComponent_ng_template_6_p_33_Template, 2, 1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_ng_template_6_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.nextStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Siguiente");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.empresa.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.empresa.sectores);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.sectores);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.empresa.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.selectedFile);
} }
function RegisterComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Registro");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Ahora, completa los datos de ingreso");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_ng_template_8_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.user.nombre = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_ng_template_8_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r36.user.apellido = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Correo electr\u00F3nico");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_ng_template_8_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r37.user.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_ng_template_8_Template_input_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r38.user.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_ng_template_8_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r39.onSubmit(ctx_r39.u); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Enviar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_ng_template_8_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r40.previousStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Atr\u00E1s");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.user.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.user.apellido);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.user.password);
} }
function RegisterComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Tu registro est\u00E1 en proceso");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "El administrador comprobar\u00E1 tus datos y los de tu empresa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_ng_template_10_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r41.onLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Volver a login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(authService, mainService, generalService, s3) {
        this.authService = authService;
        this.mainService = mainService;
        this.generalService = generalService;
        this.s3 = s3;
        /* Binding */
        this.empresa = {};
        this.user = { tipo: 'administrador' };
        this.step = 0;
        this.sectores = [];
        this.loading = false;
        /** API */
        this.API_REGISTER = 'users/register';
        this.API_AUTHENTICATE = 'users/authenticate';
        this.API_SECTOR = 'api/sector';
        this.API_EMPRESA = 'api/empresa';
        this.API_VERIFY_EMAIL = 'users/verify-email';
    }
    ngOnInit() {
        this.getSectores();
    }
    // =================================
    // Metodos
    // ================================
    // =================================
    // Metodos
    // ================================
    /**
     * Fetchs sectores from backend
     */
    getSectores() {
        this.mainService.get({ api: this.API_SECTOR }).then((response) => {
            this.sectores = response;
        });
    }
    /**
     * Registers the empresa and the user
     */
    onSubmit() {
        const callback = (err, data) => {
            if (err) {
                // If there is an error alert the user
                alert('No fue posible subir el archivo, por favor intente más tarde');
            }
            else {
                const imgUrl = data.Location;
                this.register({ logo: imgUrl });
            }
        };
        this.uploadFile({ file: this.selectedFile, callback });
    }
    register({ logo }) {
        if (this.user &&
            this.user.nombre &&
            this.user.apellido &&
            this.user.email &&
            this.user.password) {
            this.empresa['logo'] = logo ? logo : '';
            this.mainService
                .post({ api: this.API_EMPRESA, data: this.empresa })
                .then((resEmpresa) => {
                const eid = resEmpresa._id;
                this.user['empresa'] = eid;
                this.authService
                    .post({ api: this.API_REGISTER, data: this.user })
                    .then((resUser) => {
                    if (!resUser) {
                        this.mainService
                            .delete({ api: `${this.API_EMPRESA}/${eid}` })
                            .then((del) => {
                        }).finally(() => {
                            this.generalService.handleError({
                                error: 'Hubo un error en el registro, por favor intente de nuevo',
                                titulo: 'Error',
                            });
                        });
                    }
                    else {
                        this.step = 2;
                    }
                });
            });
        }
        else {
            this.generalService.handleError({
                error: 'Por favor llena todos los campos',
                titulo: 'Error',
            });
        }
    }
    /**
     * Handle back
     */
    onLogin() {
        this.generalService.routerNavigateTo({ path: '/login' });
    }
    /**
     * Opens logo file selector
     */
    openFileSelector() {
        document.getElementById('logo-selector').click();
    }
    /**
     * Handles click on next step
     */
    nextStep() {
        if (this.empresa &&
            this.empresa.nombre &&
            this.empresa.sectores &&
            this.empresa.sectores.length > 0 &&
            this.empresa.descripcion) {
            this.step++;
        }
        else {
            this.generalService.handleError({
                error: 'Por favor llena todos los campos',
                titulo: 'Error',
            });
        }
    }
    /**
     * Handles click on go back
     */
    previousStep() {
        this.step--;
    }
    /**
     * Listens on change of select file
     * @param param0 with event of the input
     */
    onChangeMedia({ event }) {
        if (event.target.files.length > 0) {
            this.selectedFile = event.target.files[0];
        }
    }
    /**
   * Uploads pictures to S3 in a folder
   * @param file: File object to upload, callback function to execute
   */
    uploadFile({ file, callback }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const empresaName = this.empresa.nombre.replace(' ', '-');
            const key = `empresa/${empresaName || 'no-name'}/logo-${this.s3.generateKey()}`;
            yield this.s3.uploadFile({ file, key, callback });
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_public_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_public_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_public_services_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_public_services_s3_service__WEBPACK_IMPORTED_MODULE_5__["S3Service"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["ngx-register"]], decls: 12, vars: 1, consts: [["windowMode", ""], ["size", "xlarge", 1, "main-container"], [4, "ngTemplateOutlet"], ["templateLogin", ""], ["empresaForm", ""], ["userForm", ""], ["registeredPage", ""], ["icon", "arrow-back", "id", "back-btn", "status", "success", 3, "click"], [1, "d-flex", "justify-content-center"], [4, "ngIf"], ["id", "sub-container", 1, "p-2"], [1, "text-center"], ["id", "title", 1, "title"], [1, "row"], [1, "col", "form-control-group", "form-input"], [1, "label"], ["nbinput", "", "fullwidth", "", "name", "nombreEmpresa", "type", "text", "placeholder", "Nombre", "fieldsize", "large", "required", "", 1, "select", "input-full-width", "size-large", "status-basic", "shape-rectangle", "ng-untouched", "ng-pristine", "ng-invalid", "nb-transition", 3, "ngModel", "ngModelChange"], ["nombreEmpresa", "ngModel"], [1, "col", "form-control-group", "form-input", "select-container"], ["multiple", "", "fullwidth", "", "name", "sector", "placeholder", "Selecciona...", "fieldsize", "large", "required", "", 1, "input-full-width", "size-large", "status-basic", "shape-rectangle", "ng-untouched", "ng-pristine", "ng-invalid", "nb-transition", 3, "ngModel", "ngModelChange"], ["sector", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["nbInput", "", "fullWidth", "", "name", "descripcion", "type", "text", "placeholder", "Escribe...", "fieldsize", "large", "required", "", 1, "textarea", "input-full-width", "size-xlarge", "status-basic", "shape-rectangle", "ng-untouched", "ng-pristine", "ng-invalid", "nb-transition", 3, "ngModel", "ngModelChange"], ["descripcion", "ngModel"], [1, "col"], ["nbButton", "", 3, "click"], ["hidden", "", "id", "logo-selector", "name", "logo", "accept", "image/x-png,image/jpeg", "type", "file", 3, "change"], ["class", "label", 4, "ngIf"], ["status", "primary", "fullWidth", "", "nbButton", "", 3, "click"], [3, "value"], ["nbinput", "", "fullwidth", "", "name", "nombre", "type", "text", "placeholder", "Escribe aqu\u00ED...", "fieldsize", "large", "required", "", 1, "input-full-width", "size-large", "status-basic", "shape-rectangle", "ng-untouched", "ng-pristine", "ng-invalid", "nb-transition", 3, "ngModel", "ngModelChange"], ["nombre", "ngModel"], ["nbinput", "", "fullwidth", "", "name", "apellido", "type", "text", "placeholder", "Escribe aqu\u00ED...", "fieldsize", "large", "required", "", 1, "input-full-width", "size-large", "status-basic", "shape-rectangle", "ng-untouched", "ng-pristine", "ng-invalid", "nb-transition", 3, "ngModel", "ngModelChange"], ["apellido", "ngModel"], ["nbinput", "", "fullwidth", "", "name", "email", "type", "text", "placeholder", "Escribe aqu\u00ED...", "fieldsize", "large", "required", "", 1, "input-full-width", "size-large", "status-basic", "shape-rectangle", "ng-untouched", "ng-pristine", "ng-invalid", "nb-transition", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["nbinput", "", "fullwidth", "", "name", "password", "type", "password", "placeholder", "Escribe aqu\u00ED...", "fieldsize", "large", "required", "", 1, "input-full-width", "size-large", "status-basic", "shape-rectangle", "ng-untouched", "ng-pristine", "ng-invalid", "nb-transition", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "button-container"], ["status", "primary", "nbButton", "", 3, "click"], ["status", "basic", "nbButton", "", 3, "click"], [1, "sub-container"], ["nbButton", "", "status", "primary", 3, "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-layout-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nb-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RegisterComponent_ng_container_3_Template, 1, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RegisterComponent_ng_template_4_Template, 7, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RegisterComponent_ng_template_6_Template, 39, 5, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, RegisterComponent_ng_template_8_Template, 34, 4, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, RegisterComponent_ng_template_10_Template, 8, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ngx-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss'],
            }]
    }], function () { return [{ type: _public_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _public_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"] }, { type: _public_services_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"] }, { type: _public_services_s3_service__WEBPACK_IMPORTED_MODULE_5__["S3Service"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=auth-auth-module-es2015.js.map