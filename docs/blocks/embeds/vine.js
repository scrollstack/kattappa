"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _base = _interopRequireDefault(require("./base"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};
var Vine = /*#__PURE__*/function (_BaseEmbed) {
  _inherits(Vine, _BaseEmbed);
  var _super = _createSuper(Vine);
  function Vine(props) {
    var _this;
    _classCallCheck(this, Vine);
    _this = _super.call(this, props);
    _this.loadExternalScript = _this.loadExternalScript.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Vine, [{
    key: "loadExternalScript",
    value: function loadExternalScript() {
      var scriptUrl = this.props.scriptUrl;
      var tag = document.createElement('script');
      tag.src = scriptUrl;
      tag.async = 1;
      window.document.body.appendChild(tag);
    }
  }, {
    key: "extraHandler",
    value: function extraHandler() {
      this.loadExternalScript();
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.valid) {
        if (!this.state.preview) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "katap-embed katap-vine"
          }, /*#__PURE__*/_react["default"].createElement("p", null, "Vine - ", /*#__PURE__*/_react["default"].createElement("a", {
            href: this.props.url,
            target: "_blank",
            rel: "noopener noreferrer"
          }, this.props.url)), /*#__PURE__*/_react["default"].createElement("button", {
            className: "katap-show-preview-btn",
            onClick: this.showPreview
          }, "Preview"));
        }
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "katap-embed katap-vine"
        }, /*#__PURE__*/_react["default"].createElement("iframe", {
          className: "vine-embed",
          title: "vine-embed-".concat(this.state.id),
          src: '//vine.co/v/' + this.state.id + '/embed/postcard',
          frameBorder: 0,
          width: 600,
          height: 600,
          allowFullScreen: true
        }));
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "katap-embed"
      }, "Invalid Vimeo URL.");
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Vine;
}(_base["default"]);
Vine.defaultProps = {
  regex: /https?:\/\/vine\.co\/v\/([a-zA-Z0-9].*)\/?/,
  scriptUrl: '//platform.vine.co/static/scripts/embed.js'
};
var _default = Vine;
var _default2 = _default;
exports["default"] = _default2;
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(Vine, "Vine", "/Users/ujjwalmishra/Work/stck/kattappa/src/blocks/embeds/vine.js");
  reactHotLoader.register(_default, "default", "/Users/ujjwalmishra/Work/stck/kattappa/src/blocks/embeds/vine.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();