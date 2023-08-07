"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
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
var Droppable = /*#__PURE__*/function (_React$Component) {
  _inherits(Droppable, _React$Component);
  var _super = _createSuper(Droppable);
  function Droppable(props) {
    var _this;
    _classCallCheck(this, Droppable);
    _this = _super.call(this, props);
    _this.state = {
      className: ''
    };
    _this.fileEL = null;
    _this.droppable = null;
    _this.getClassName = _this.getClassName.bind(_assertThisInitialized(_this));
    _this.onDragEnter = _this.onDragEnter.bind(_assertThisInitialized(_this));
    _this.onDragOver = _this.onDragOver.bind(_assertThisInitialized(_this));
    _this.onDragLeave = _this.onDragLeave.bind(_assertThisInitialized(_this));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onDrop = _this.onDrop.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Droppable, [{
    key: "getClassName",
    value: function getClassName() {
      return 'katap-droppable ' + (this.props.className || this.state.className);
    }
  }, {
    key: "onDragEnter",
    value: function onDragEnter(e) {
      e.preventDefault();
      e.stopPropagation();
      this.setState({
        className: 'katap-drop-active'
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.droppable.focus();
    }
  }, {
    key: "onDragOver",
    value: function onDragOver(e) {
      e.preventDefault();
      e.stopPropagation();
      e.dataTransfer.dropEffect = 'copy';
      if (this.props.onDragOver) {
        this.props.onDragOver(e);
      }
    }
  }, {
    key: "onDragLeave",
    value: function onDragLeave(e) {
      this.setState({
        className: ''
      });
      if (this.props.onDragLeave) {
        this.props.onDragLeave(e);
      }
    }
  }, {
    key: "onClick",
    value: function onClick() {
      var fileInput = this.fileEL;
      fileInput.value = null;
      fileInput.click();
    }
  }, {
    key: "onDrop",
    value: function onDrop(e) {
      e.preventDefault();
      var files;
      if (e.dataTransfer) {
        files = e.dataTransfer.files;
      } else if (e.target) {
        files = e.target.files;
      }
      var maxFiles = this.props.multiple ? files.length : 1;
      for (var i = 0; i < maxFiles; i++) {
        files[i].preview = URL.createObjectURL(files[i]);
      }
      if (this.props.onDrop) {
        files = Array.prototype.slice.call(files, 0, maxFiles);
        this.props.onDrop(files);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: function ref(node) {
          _this2.droppable = node;
        },
        style: {
          height: 100
        },
        className: this.getClassName(),
        onDragEnter: this.onDragEnter,
        onDragOver: this.onDragOver,
        onDragLeave: this.onDragLeave,
        onClick: this.onClick,
        onDrop: this.onDrop
      }, /*#__PURE__*/_react["default"].createElement("input", {
        ref: function ref(node) {
          _this2.fileEL = node;
        },
        type: "file",
        style: {
          display: 'none'
        },
        multiple: this.props.multiple,
        onChange: this.onDrop
      }), this.props.children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Droppable;
}(_react["default"].Component);
Droppable.defaultProps = {
  supportClick: true,
  multiple: false
};
var _default = Droppable;
var _default2 = _default;
exports["default"] = _default2;
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(Droppable, "Droppable", "/Users/ujjwalmishra/Work/stck/kattappa/src/components/droppable.js");
  reactHotLoader.register(_default, "default", "/Users/ujjwalmishra/Work/stck/kattappa/src/components/droppable.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();