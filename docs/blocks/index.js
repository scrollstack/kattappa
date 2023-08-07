"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _embed = _interopRequireDefault(require("./embed"));
var _h = _interopRequireDefault(require("./h2"));
var _hr = _interopRequireDefault(require("./hr"));
var _image = _interopRequireDefault(require("./image"));
var _ol = _interopRequireDefault(require("./ol"));
var _quote = _interopRequireDefault(require("./quote"));
var _text = _interopRequireDefault(require("./text"));
var _ul = _interopRequireDefault(require("./ul"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};
var _default = {
  text: _text["default"],
  image: _image["default"],
  embed: _embed["default"],
  quote: _quote["default"],
  h2: _h["default"],
  ol: _ol["default"],
  ul: _ul["default"],
  hr: _hr["default"]
};
var _default2 = _default;
exports["default"] = _default2;
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(_default, "default", "/Users/ujjwalmishra/Work/stck/kattappa/src/blocks/index.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();