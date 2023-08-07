"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _action = _interopRequireDefault(require("../utils/action"));
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
var BlockControl = /*#__PURE__*/function (_React$Component) {
  _inherits(BlockControl, _React$Component);
  var _super = _createSuper(BlockControl);
  function BlockControl(props) {
    var _this;
    _classCallCheck(this, BlockControl);
    _this = _super.call(this, props);
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.getToolbar = _this.getToolbar.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(BlockControl, [{
    key: "handleClick",
    value: function handleClick(e) {
      var nodes = Array.prototype.slice.call(e.currentTarget.children);
      var index = nodes.indexOf(e.target);
      if (index < 0) {
        return;
      }
      var action = nodes[index].getAttribute("data-action");
      this.props.blockAction(action, this.props.position);
    }
  }, {
    key: "getToolbar",
    value: function getToolbar(index) {
      if (this.props.onlyRemove) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: this.props.className,
          onClick: this.handleClick
        }, /*#__PURE__*/_react["default"].createElement("button", {
          title: "Remove",
          "data-action": _action["default"].REMOVE,
          key: _action["default"].REMOVE
        }, "\xD7"));
      }
      var buttons = [];
      if (index === 0 && this.props.length < 2) {
        buttons.push( /*#__PURE__*/_react["default"].createElement("button", {
          title: "Delete",
          "data-action": _action["default"].REMOVE,
          key: _action["default"].REMOVE
        }, "\xD7"));
      } else if (index === 0) {
        buttons.push( /*#__PURE__*/_react["default"].createElement("button", {
          title: "Delete",
          "data-action": _action["default"].REMOVE,
          key: _action["default"].REMOVE
        }, "\xD7"));
        buttons.push( /*#__PURE__*/_react["default"].createElement("button", {
          title: "Move Down",
          "data-action": _action["default"].DOWN,
          key: _action["default"].DOWN
        }, "\u2193"));
      } else if (index === this.props.length - 1) {
        buttons.push( /*#__PURE__*/_react["default"].createElement("button", {
          title: "Delete",
          "data-action": _action["default"].REMOVE,
          key: _action["default"].REMOVE
        }, "\xD7"));
        buttons.push( /*#__PURE__*/_react["default"].createElement("button", {
          title: "Move Up",
          "data-action": _action["default"].UP,
          key: _action["default"].UP
        }, "\u2191"));
      } else {
        buttons.push( /*#__PURE__*/_react["default"].createElement("button", {
          title: "Delete",
          "data-action": _action["default"].REMOVE,
          key: _action["default"].REMOVE
        }, "\xD7"));
        buttons.push( /*#__PURE__*/_react["default"].createElement("button", {
          title: "Move Up",
          "data-action": _action["default"].UP,
          key: _action["default"].UP
        }, "\u2191"));
        buttons.push( /*#__PURE__*/_react["default"].createElement("button", {
          title: "Move Down",
          "data-action": _action["default"].DOWN,
          key: _action["default"].DOWN
        }, "\u2193"));
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.className,
        onClick: this.handleClick
      }, buttons);
    }
  }, {
    key: "render",
    value: function render() {
      return this.getToolbar(this.props.position);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return BlockControl;
}(_react["default"].Component);
BlockControl.defaultProps = {
  onlyRemove: false,
  className: "katap-control-toolbar"
};
var _default = BlockControl;
var _default2 = _default;
exports["default"] = _default2;
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(BlockControl, "BlockControl", "/Users/ujjwalmishra/Work/stck/kattappa/src/components/blockcontrol.js");
  reactHotLoader.register(_default, "default", "/Users/ujjwalmishra/Work/stck/kattappa/src/components/blockcontrol.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();