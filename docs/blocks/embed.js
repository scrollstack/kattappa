"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _url = _interopRequireDefault(require("url"));
var _utils = require("../utils");
var _keys = _interopRequireDefault(require("../utils/keys"));
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
var Types = require('./embeds');
function getDomain(link) {
  var a = _url["default"].parse(link);
  return a.hostname === 'youtu.be' ? 'youtube.com' : a.hostname;
}
var Embed = {
  Name: 'embed',
  Icon: '',
  Empty: function Empty() {
    return {
      url: '',
      subtext: '',
      meta: {}
    };
  },
  maximumBlocks: 0,
  Description: 'Embed',
  isEmpty: function isEmpty(content) {
    return content === '';
  },
  EmbedTypes: Types
};
var BlockEmbed = /*#__PURE__*/function (_React$Component) {
  _inherits(BlockEmbed, _React$Component);
  var _super = _createSuper(BlockEmbed);
  function BlockEmbed(props) {
    var _this;
    _classCallCheck(this, BlockEmbed);
    _this = _super.call(this, props);
    _this.state = {
      loaded: false,
      domain: '',
      url: '',
      className: '',
      urlInput: ''
    };
    _this.urlInputNode = null;
    _this.getClassName = _this.getClassName.bind(_assertThisInitialized(_this));
    _this.checkUrls = _this.checkUrls.bind(_assertThisInitialized(_this));
    _this.handleUrl = _this.handleUrl.bind(_assertThisInitialized(_this));
    _this.checkContent = _this.checkContent.bind(_assertThisInitialized(_this));
    _this.renderBlock = _this.renderBlock.bind(_assertThisInitialized(_this));
    _this.changeSubtext = _this.changeSubtext.bind(_assertThisInitialized(_this));
    _this.updateMeta = _this.updateMeta.bind(_assertThisInitialized(_this));
    _this.onDrop = _this.onDrop.bind(_assertThisInitialized(_this));
    _this.onDragEnter = _this.onDragEnter.bind(_assertThisInitialized(_this));
    _this.onDragOver = _this.onDragOver.bind(_assertThisInitialized(_this));
    _this.onDragLeave = _this.onDragLeave.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(BlockEmbed, [{
    key: "getClassName",
    value: function getClassName() {
      return 'katap-block katap-embed ' + (this.props.className || this.state.className);
    }
  }, {
    key: "checkUrls",
    value: function checkUrls(url, isProp) {
      if (url.indexOf('http') < 0) {
        url = 'https://' + url;
      }
      if (_utils.UrlRegex.test(url)) {
        var domain = getDomain(url);
        var Types = this.props.EmbedTypes;
        for (var key in Types) {
          if (domain.indexOf(key) > -1) {
            this.setState({
              loaded: true,
              domain: key,
              url: url
            });
            return;
          }
        }
        alert('This URL is not supported.');
        this.setState({
          urlInput: ''
        });
      } else {
        if (!isProp) {
          alert("Enter a valid url");
          this.setState({
            urlInput: ''
          });
        }
      }
      _utils.UrlRegex.lastIndex = 0;
    }
  }, {
    key: "handleUrl",
    value: function handleUrl(event) {
      if (event.keyCode === _keys["default"].ENTER) {
        this.checkUrls(event.target.value, false);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.content.url === '') {
        this.urlInputNode.focus();
      }
      this.checkUrls(this.props.content.url, true);
    }
  }, {
    key: "checkContent",
    value: function checkContent(ok, msg) {
      if (ok && this.props.onContentChanged) {
        var newData = this.props.content;
        newData.url = this.state.url;
        this.props.onContentChanged(this.props.position, newData);
      } else {
        alert(msg);
      }
    }
  }, {
    key: "changeSubtext",
    value: function changeSubtext(e) {
      if (this.props.onContentChanged) {
        var newContent = this.props.content;
        newContent.subtext = e.target.value;
        //console.log(newContent);
        this.props.onContentChanged(this.props.position, newContent);
      }
    }
  }, {
    key: "updateMeta",
    value: function updateMeta(newMeta) {
      var newContent = this.props.content;
      newContent.meta = newMeta;
      this.props.onContentChanged(this.props.position, newContent);
    }
  }, {
    key: "onDragEnter",
    value: function onDragEnter(e) {
      e.preventDefault();
      e.stopPropagation();
      this.setState({
        className: 'katap-embed-dragover'
      });
    }
  }, {
    key: "onDragOver",
    value: function onDragOver(e) {
      e.preventDefault();
      e.stopPropagation();
      e.dataTransfer.dropEffect = 'move';
      return false;
    }
  }, {
    key: "onDrop",
    value: function onDrop(e) {
      if (e.preventDefault) e.preventDefault();
      if (e.stopPropagation) e.stopPropagation();
      this.setState({
        className: ''
      });
      var dropURL = e.dataTransfer.getData("URL");
      if (dropURL === "") {
        dropURL = e.dataTransfer.getData("text");
      }
      if (dropURL !== "") {
        this.checkUrls(dropURL, false);
      }
    }
  }, {
    key: "onDragLeave",
    value: function onDragLeave(e) {
      this.setState({
        className: 'katap-block katap-embed'
      });
    }
  }, {
    key: "renderBlock",
    value: function renderBlock() {
      var Types = this.props.EmbedTypes;
      var EmbedType = Types[this.state.domain];
      return /*#__PURE__*/_react["default"].createElement(EmbedType, {
        url: this.state.url,
        checkContent: this.checkContent,
        content: this.props.content,
        updateMeta: this.updateMeta
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var content = this.props.content;
      if (this.state.loaded) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "katap-block"
        }, this.renderBlock(), /*#__PURE__*/_react["default"].createElement("input", {
          type: "text",
          placeholder: "Embed subtext",
          onChange: this.changeSubtext,
          value: content.subtext
        }));
      } else {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: this.getClassName(),
          onDragEnter: this.onDragEnter,
          onDragOver: this.onDragOver,
          onDragLeave: this.onDragLeave,
          onDrop: this.onDrop
        }, /*#__PURE__*/_react["default"].createElement("p", null, "Drop links here or paste below"), /*#__PURE__*/_react["default"].createElement("input", {
          ref: function ref(node) {
            _this2.urlInputNode = node;
          },
          type: "text",
          placeholder: "Enter URL and press enter",
          onChange: function onChange(event) {
            _this2.setState({
              urlInput: event.target.value
            });
          },
          onKeyUp: this.handleUrl,
          value: this.state.urlInput
        }), /*#__PURE__*/_react["default"].createElement("p", null, "Supported embeds: ", Object.keys(this.props.EmbedTypes).join(', ')));
      }
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return BlockEmbed;
}(_react["default"].Component);
BlockEmbed.defaultProps = {
  EmbedTypes: Types
};
Embed.React = BlockEmbed;
var _default = Embed;
var _default2 = _default;
exports["default"] = _default2;
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(getDomain, "getDomain", "/Users/ujjwalmishra/Work/stck/kattappa/src/blocks/embed.js");
  reactHotLoader.register(Embed, "Embed", "/Users/ujjwalmishra/Work/stck/kattappa/src/blocks/embed.js");
  reactHotLoader.register(BlockEmbed, "BlockEmbed", "/Users/ujjwalmishra/Work/stck/kattappa/src/blocks/embed.js");
  reactHotLoader.register(_default, "default", "/Users/ujjwalmishra/Work/stck/kattappa/src/blocks/embed.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();