"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _action = _interopRequireDefault(require("./utils/action"));
var _blockcontrol = _interopRequireDefault(require("./components/blockcontrol"));
var _toolbar = _interopRequireDefault(require("./components/toolbar"));
var _utils = require("./utils");
var _blocks = _interopRequireDefault(require("./blocks"));
var _embeds = _interopRequireDefault(require("./blocks/embeds"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var splitterString = '<p>==</p>';
var Editor = /*#__PURE__*/function (_React$Component) {
  _inherits(Editor, _React$Component);
  var _super = _createSuper(Editor);
  function Editor(props) {
    var _this;
    _classCallCheck(this, Editor);
    _this = _super.call(this, props);
    _this.handleBlockAction = _this.handleBlockAction.bind(_assertThisInitialized(_this));
    _this.getBlocks = _this.getBlocks.bind(_assertThisInitialized(_this));
    _this.addBlock = _this.addBlock.bind(_assertThisInitialized(_this));
    _this.contentChange = _this.contentChange.bind(_assertThisInitialized(_this));
    _this.getToolbar = _this.getToolbar.bind(_assertThisInitialized(_this));
    _this.renderBlocks = _this.renderBlocks.bind(_assertThisInitialized(_this));
    _this.splitBlock = _this.splitBlock.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Editor, [{
    key: "splitBlock",
    value: function splitBlock(position) {
      var splitter = this.props.splitter;
      var newBlocks = this.props.blocks;
      var currentBlock = newBlocks[position];
      if (currentBlock.type !== _blocks["default"].text.Name) {
        return;
      }
      var splitterRegex = /((?:<[a-zA-Z\d]{1,}>){1,2}<br>(?:<\/[a-zA-Z\d]{1,}>){1,2})/gi;
      var stringsFix = currentBlock.data.replace(splitterRegex, splitter);
      var stringsTmp = stringsFix.split(splitter);
      var strings = [];
      stringsTmp.forEach(function (str) {
        if (str !== "") {
          strings.push(str);
        }
      });
      newBlocks.splice(position, 1);
      var pos = position;
      var newBlock = {};
      strings.forEach(function (str) {
        newBlock = {
          type: _blocks["default"].text.Name,
          data: str,
          key: (0, _utils.uuid)()
        };
        newBlocks.splice(pos++, 0, newBlock);
      });
      this.props.onChange(newBlocks);
    }
  }, {
    key: "handleBlockAction",
    value: function handleBlockAction(action, position) {
      var newBlocks = this.props.blocks;
      var Blocks = this.props.availableBlocks;
      if (action === _action["default"].REMOVE) {
        if (Blocks[newBlocks[position].type].isEmpty(newBlocks[position].data) || window.confirm('Are you sure?')) {
          newBlocks.splice(position, 1);
        } else {
          return;
        }
      } else if (action === _action["default"].UP) {
        newBlocks.splice(position - 1, 2, newBlocks[position], newBlocks[position - 1]);
      } else if (action === _action["default"].DOWN) {
        newBlocks.splice(position, 2, newBlocks[position + 1], newBlocks[position]);
      }
      this.props.onChange(newBlocks);
    }
  }, {
    key: "getBlocks",
    value: function getBlocks() {
      console.warn('This function will be deprecated in the next version.');
      return this.props.blocks;
    }
  }, {
    key: "addBlock",
    value: function addBlock(type, position) {
      var blocks = this.props.blocks;
      if (position < -1 || position > blocks.length) {
        return;
      }
      var newBlocks = this.props.blocks;
      var Blocks = this.props.availableBlocks;
      if (!Blocks[type]) {
        return;
      }
      if (Blocks[type].maximumBlocks !== 0) {
        var blocksOfType = 0;
        blocks.forEach(function (block, index) {
          if (block.type === type) {
            blocksOfType++;
          }
        });
        if (blocksOfType >= Blocks[type].maximumBlocks) {
          return;
        }
      }
      var newBlock = {
        type: type,
        data: Blocks[type].Empty(),
        key: (0, _utils.uuid)()
      };
      newBlocks.splice(position + 1, 0, newBlock);
      this.props.onChange(newBlocks);
    }
  }, {
    key: "contentChange",
    value: function contentChange(position, content) {
      var newBlocks = this.props.blocks;
      newBlocks[position].data = content;
      this.props.onChange(newBlocks);
    }
  }, {
    key: "getToolbar",
    value: function getToolbar(index) {
      return /*#__PURE__*/_react["default"].createElement(_blockcontrol["default"], {
        blockAction: this.handleBlockAction,
        position: index,
        className: "katap-control-toolbar katap-clearfix",
        length: this.props.blocks.length
      });
    }
  }, {
    key: "renderBlocks",
    value: function renderBlocks() {
      var self = this;
      var blocks = this.props.blocks;
      var Blocks = this.props.availableBlocks;
      if (blocks.length < 1) {
        return /*#__PURE__*/_react["default"].createElement(_toolbar["default"], {
          position: 0,
          addBlock: this.addBlock,
          availableBlocks: Blocks
        });
      }
      var rndr = blocks.map(function (block, index) {
        if (!Blocks[block.type]) {
          return null;
        }
        var Block = Blocks[block.type].React;

        // customize block behaviour by passing props
        var blockProps = Blocks[block.type].props;
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: block.key || block.id || index,
          className: "katap-container"
        }, self.getToolbar(index), /*#__PURE__*/_react["default"].createElement(Block, _extends({
          position: index,
          content: block.data,
          addBlock: self.addBlock,
          onContentChanged: self.contentChange,
          UploadUrl: self.props.UploadUrl,
          EmbedTypes: self.props.EmbedTypes,
          splitBlock: self.splitBlock
        }, blockProps, self.props)), /*#__PURE__*/_react["default"].createElement(_toolbar["default"], {
          position: index,
          addBlock: self.addBlock,
          availableBlocks: Blocks
        }));
      });
      return rndr;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.blocks.length > 0) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "katap-listing"
        }, /*#__PURE__*/_react["default"].createElement(_toolbar["default"], {
          position: -1,
          addBlock: this.addBlock,
          availableBlocks: this.props.availableBlocks
        }), this.renderBlocks());
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "katap-listing"
      }, this.renderBlocks());
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Editor;
}(_react["default"].Component);
exports["default"] = Editor;
Editor.defaultProps = {
  availableBlocks: _blocks["default"],
  EmbedTypes: _embeds["default"],
  getBlocks: function getBlocks() {
    return [];
  },
  UploadUrl: '',
  splitter: splitterString
};
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(splitterString, "splitterString", "/Users/ujjwalmishra/Work/stck/kattappa/src/editor.js");
  reactHotLoader.register(Editor, "Editor", "/Users/ujjwalmishra/Work/stck/kattappa/src/editor.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();