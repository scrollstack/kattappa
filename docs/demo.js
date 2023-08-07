"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
require("./kattappa.scss");
require("./style.scss");
require("react-hot-loader");
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _ = _interopRequireDefault(require("./"));
var _root = require("react-hot-loader/root");
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
}; //Todo: remove react-hot-reload for production build
var initBlock = [{
  type: "text",
  data: '<p>Hello World</p>',
  key: _["default"].uuid()
}, {
  type: "image",
  key: _["default"].uuid(),
  data: {
    url: "http://www.nutritionsecrets.com/wp-content/uploads/2015/04/Feature3_image2_vitD.jpg",
    subtext: "nutritionsecrets.com",
    hyperlink: ""
  }
}];
var Blocks = _["default"].Blocks,
  Editor = _["default"].Editor;
var EmbedTypes = Blocks.embed.EmbedTypes;
function getBlocks() {
  return initBlock;
}
function onChange(position, content) {
  initBlock[position].data = content;
}
function onSave(blocks) {
  console.log(blocks);
}
function onFilesAdded(files) {
  var success = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  if (success) {
    success.call(null, files[0].preview);
    console.log('Success');
  }
}
var Container = /*#__PURE__*/function (_React$Component) {
  _inherits(Container, _React$Component);
  var _super = _createSuper(Container);
  function Container(props) {
    var _this;
    _classCallCheck(this, Container);
    _this = _super.call(this, props);
    _this.state = {
      blocks: initBlock
    };
    _this.save = _this.save.bind(_assertThisInitialized(_this));
    _this.getBlocks = _this.getBlocks.bind(_assertThisInitialized(_this));
    _this.onChange = function (blocks) {
      return _this.setState({
        blocks: blocks
      });
    };
    return _this;
  }
  _createClass(Container, [{
    key: "getBlocks",
    value: function getBlocks() {
      return this.state.blocks;
    }
  }, {
    key: "save",
    value: function save() {
      console.log(this.state.blocks);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.save
      }, "console.log"), /*#__PURE__*/_react["default"].createElement(Editor, {
        blocks: this.state.blocks,
        onChange: this.onChange,
        availableBlocks: Blocks,
        EmbedTypes: EmbedTypes,
        splitter: "<p><br></p>",
        getBlocks: this.getBlocks,
        onFilesAdded: onFilesAdded
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Container;
}(_react["default"].Component);
var HotContainer = (0, _root.hot)(Container);
_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(HotContainer, null), document.getElementById('editor-content'));
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(initBlock, "initBlock", "/Users/ujjwalmishra/Work/stck/kattappa/src/demo.js");
  reactHotLoader.register(Blocks, "Blocks", "/Users/ujjwalmishra/Work/stck/kattappa/src/demo.js");
  reactHotLoader.register(Editor, "Editor", "/Users/ujjwalmishra/Work/stck/kattappa/src/demo.js");
  reactHotLoader.register(EmbedTypes, "EmbedTypes", "/Users/ujjwalmishra/Work/stck/kattappa/src/demo.js");
  reactHotLoader.register(getBlocks, "getBlocks", "/Users/ujjwalmishra/Work/stck/kattappa/src/demo.js");
  reactHotLoader.register(onChange, "onChange", "/Users/ujjwalmishra/Work/stck/kattappa/src/demo.js");
  reactHotLoader.register(onSave, "onSave", "/Users/ujjwalmishra/Work/stck/kattappa/src/demo.js");
  reactHotLoader.register(onFilesAdded, "onFilesAdded", "/Users/ujjwalmishra/Work/stck/kattappa/src/demo.js");
  reactHotLoader.register(Container, "Container", "/Users/ujjwalmishra/Work/stck/kattappa/src/demo.js");
  reactHotLoader.register(HotContainer, "HotContainer", "/Users/ujjwalmishra/Work/stck/kattappa/src/demo.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();