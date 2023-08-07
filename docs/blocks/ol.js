"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _listitem = _interopRequireDefault(require("../components/listitem"));
var _blockcontrol = _interopRequireDefault(require("../components/blockcontrol"));
var _utils = require("../utils");
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
var BlockOL = /*#__PURE__*/function (_React$Component) {
  _inherits(BlockOL, _React$Component);
  var _super = _createSuper(BlockOL);
  function BlockOL(props) {
    var _this;
    _classCallCheck(this, BlockOL);
    _this = _super.call(this, props);
    _this.onContentChanged = _this.onContentChanged.bind(_assertThisInitialized(_this));
    _this.addItem = _this.addItem.bind(_assertThisInitialized(_this));
    _this.handleItemRemove = _this.handleItemRemove.bind(_assertThisInitialized(_this));
    _this.renderListItem = _this.renderListItem.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(BlockOL, [{
    key: "onContentChanged",
    value: function onContentChanged(position, content) {
      this.props.content[position].content = content;
      if (this.props.onContentChanged) {
        this.props.onContentChanged(this.props.position, this.props.content);
      }
    }
  }, {
    key: "addItem",
    value: function addItem(position) {
      if (position < 0 || position >= this.props.content.length) {
        return;
      }
      var content = this.props.content;
      content.splice(position + 1, 0, {
        content: '<p><br></p>',
        key: (0, _utils.uuid)()
      });
      if (this.props.onContentChanged) {
        this.props.onContentChanged(this.props.position, content);
      }
    }
  }, {
    key: "handleItemRemove",
    value: function handleItemRemove(action, position) {
      // if(this.props.content.length < 2) {
      //   return;
      // }
      var content = this.props.content;
      content.splice(position, 1);
      if (this.props.onContentChanged) {
        this.props.onContentChanged(this.props.position, content);
      }
    }
  }, {
    key: "renderListItem",
    value: function renderListItem() {
      var self = this;
      var li = [];
      this.props.content.map(function (item, index) {
        li.push( /*#__PURE__*/_react["default"].createElement("li", {
          key: item.key
        }, /*#__PURE__*/_react["default"].createElement(_blockcontrol["default"], {
          onlyRemove: true,
          blockAction: self.handleItemRemove,
          position: index,
          className: "katap-list-block-control",
          length: self.props.content.length
        }), /*#__PURE__*/_react["default"].createElement(_listitem["default"], {
          position: index,
          content: item.content,
          addItem: self.addItem,
          onContentChanged: self.onContentChanged
        })));
        return null;
      });
      return li;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("ol", {
        className: "katap-block katap-list"
      }, this.renderListItem());
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return BlockOL;
}(_react["default"].Component);
var OL = {
  Name: 'ol',
  React: BlockOL,
  Icon: '',
  Empty: function Empty() {
    return [{
      content: '<p><br></p>',
      key: (0, _utils.uuid)()
    }];
  },
  maximumBlocks: 0,
  Description: 'Ordered List',
  isEmpty: function isEmpty(content) {
    for (var i = 0; i < content.length; i++) {
      if (content[i].content.replace(/(<([^>]+)>)/ig, '') !== '') {
        return false;
      }
    }
    return true;
  }
};
BlockOL.defaultProps = {
  content: OL.Empty()
};
var _default = OL;
var _default2 = _default;
exports["default"] = _default2;
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(BlockOL, "BlockOL", "/Users/ujjwalmishra/Work/stck/kattappa/src/blocks/ol.js");
  reactHotLoader.register(OL, "OL", "/Users/ujjwalmishra/Work/stck/kattappa/src/blocks/ol.js");
  reactHotLoader.register(_default, "default", "/Users/ujjwalmishra/Work/stck/kattappa/src/blocks/ol.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();