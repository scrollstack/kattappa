"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _scribeEditor = _interopRequireDefault(require("scribe-editor"));
var _scribePluginCurlyQuotes = _interopRequireDefault(require("scribe-plugin-curly-quotes"));
var _scribePluginSanitizer = _interopRequireDefault(require("scribe-plugin-sanitizer"));
var _scribePluginFormatterPlainTextConvertNewLinesToHtml = _interopRequireDefault(require("scribe-plugin-formatter-plain-text-convert-new-lines-to-html"));
var _scribePluginFormatterHtmlEnsureSemanticElements = _interopRequireDefault(require("scribe-plugin-formatter-html-ensure-semantic-elements"));
var _scribePluginSmartLists = _interopRequireDefault(require("scribe-plugin-smart-lists"));
var _scribePluginHeadingCommand = _interopRequireDefault(require("scribe-plugin-heading-command"));
var _scribeOptions = require("./scribe-options");
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
var ScribeEditor = /*#__PURE__*/function (_React$Component) {
  _inherits(ScribeEditor, _React$Component);
  var _super = _createSuper(ScribeEditor);
  function ScribeEditor(props) {
    var _this;
    _classCallCheck(this, ScribeEditor);
    _this = _super.call(this, props);
    _this.state = {
      showToolbar: false,
      showLinkInput: false,
      placeholder: true
    };
    _this.scribe = null;
    _this.dom = null;
    _this._updated = false;
    _this.tempRange = null;
    _this.scrollY = -1;
    _this.scribeeditor = null;
    _this.toolbar = null;
    _this.linkinput = null;
    _this.placeCaretAtEnd = _this.placeCaretAtEnd.bind(_assertThisInitialized(_this));
    _this.captureReturn = _this.captureReturn.bind(_assertThisInitialized(_this));
    _this.handleCommand = _this.handleCommand.bind(_assertThisInitialized(_this));
    _this.onSelect = _this.onSelect.bind(_assertThisInitialized(_this));
    _this._onSelect = _this._onSelect.bind(_assertThisInitialized(_this));
    _this.handleLink = _this.handleLink.bind(_assertThisInitialized(_this));
    _this.handleLinkShortcut = _this.handleLinkShortcut.bind(_assertThisInitialized(_this));
    _this.onBlur = function () {
      if (_this.state.showLinkInput) {
        return;
      }
      _this.setState({
        showToolbar: false,
        showLinkInput: false
      });
    };
    return _this;
  }
  _createClass(ScribeEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.dom = _reactDom["default"].findDOMNode(this.scribeeditor);
      this.scribe = new _scribeEditor["default"](this.dom);
      if (!this.props.inline) {
        this.scribe.use((0, _scribePluginSmartLists["default"])());
      }
      this.scribe.use((0, _scribeOptions.linkCommand)());
      this.scribe.use((0, _scribePluginFormatterPlainTextConvertNewLinesToHtml["default"])());
      this.scribe.use((0, _scribePluginCurlyQuotes["default"])());
      this.scribe.use((0, _scribePluginSanitizer["default"])(this.props.options));
      this.scribe.use((0, _scribePluginFormatterHtmlEnsureSemanticElements["default"])());
      this.scribe.use((0, _scribePluginHeadingCommand["default"])(3));
      this.scribe.use((0, _scribeOptions.keyboardPlugin)());
      this.scribe.use((0, _scribeOptions.dropCapCommand)());
      // this.scribe.use(placeholderPlugin('Write your story...', ReactDOM.findDOMNode(this)));

      if (this.props.inline || this.props.enterCapture) {
        this.scribe.el.addEventListener('keydown', this.captureReturn);
      }
      this.scribe.on('scribe:content-changed', function () {
        if ((0, _scribeOptions.isEditorEmpty)(_this2.scribe)) {
          if (!_this2.state.placeholder) {
            _this2.setState({
              placeholder: true
            });
          }
        } else {
          if (_this2.state.placeholder) {
            _this2.setState({
              placeholder: false
            });
          }
        }
        _this2.props.onContentChanged(_this2.scribe.getHTML());
      });
      this.scribe.setContent(this.props.content);
      if (this.props.onFocus) {
        this.scribe.el.addEventListener('focus', this.props.onFocus);
      }
      this.scribe.el.addEventListener('blur', this.onBlur);
      if (this.props.content.length < 12) {
        this.placeCaretAtEnd();
      }
      this.scribe.el.addEventListener('keydown', this.handleLinkShortcut);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.inline || this.props.enterCapture) {
        this.scribe.el.removeEventListener('keydown', this.captureReturn);
      }
      this.scribe.el.removeEventListener('keydown', this.handleLinkShortcut);
      this.scribe.el.removeEventListener('focus', this.props.onFocus);
      this.scribe.el.removeEventListener('blur', this.onBlur);
      this.scribe.destroy();
      this.dom = null;
      this.scribe = null;
      this.tempRange = null;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this._updated) this._updated = false;
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextState.showToolbar !== this.state.showToolbar || nextState.showLinkInput !== this.state.showLinkInput || nextState.placeholder !== this.state.placeholder) {
        return true;
      }
      return false;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.state.showToolbar) {
        return;
      }
      var toolbar = this.toolbar;
      var toolbarBoundary = toolbar.getBoundingClientRect();
      var selection = window.getSelection();
      var range = selection.getRangeAt(0);
      var selectionBoundary = range.getBoundingClientRect();
      var parent = this.dom;
      var parentBoundary = parent.getBoundingClientRect();
      toolbar.style.top = selectionBoundary.top - parentBoundary.top - toolbarBoundary.height - 5 + 'px';
      var widthDiff = selectionBoundary.width - toolbarBoundary.width;
      if (widthDiff >= 0) {
        toolbar.style.left = widthDiff / 2 + 'px';
      } else {
        var left = selectionBoundary.left - parentBoundary.left;
        if (left + toolbarBoundary.width > parentBoundary.width) {
          toolbar.style.right = '0px';
        } else {
          toolbar.style.left = left + widthDiff / 2 + 'px';
        }
      }
    }
  }, {
    key: "placeCaretAtEnd",
    value: function placeCaretAtEnd() {
      var el = this.dom;
      el.focus();
      if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      } else if (typeof document.body.createTextRange != "undefined") {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
      }
    }
  }, {
    key: "captureReturn",
    value: function captureReturn(e) {
      if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
        return;
      }
      if (e.which === _keys["default"].ENTER) {
        if (this.props.inline || this.props.enterCapture) {
          e.preventDefault();
        }
        if (this.props.captureReturn) {
          this.props.captureReturn();
        }
      }
    }
  }, {
    key: "_onSelect",
    value: function _onSelect() {
      var selection = new this.scribe.api.Selection();
      // const selection = window.getSelection();
      // const str = selection.toString();
      if (selection.range.collapsed || this.state.showToolbar) {
        this.setState({
          showToolbar: false,
          showLinkInput: false
        });
      } else {
        this.setState({
          showToolbar: true,
          showLinkInput: false
        });
      }
    }
  }, {
    key: "onSelect",
    value: function onSelect(e) {
      var _this3 = this;
      setTimeout(function () {
        _this3._onSelect();
      }, 0);
    }
  }, {
    key: "handleLink",
    value: function handleLink(e) {
      var _this4 = this;
      if (e.which === _keys["default"].ESC) {
        e.stopPropagation();
        this.scrollY = window.pageYOffset;
        this.setState({
          showLinkInput: false,
          showToolbar: true
        }, function () {
          var selection = new _this4.scribe.api.Selection();
          _this4.scribe.el.focus();
          selection.selection.removeAllRanges();
          selection.selection.addRange(_this4.tempRange);
          if (_this4.scrollY !== -1) {
            window.scrollTo(0, _this4.scrollY);
            _this4.scrollY = -1;
          }
        });
      } else if (e.which === _keys["default"].ENTER) {
        e.preventDefault();
        e.stopPropagation();
        this.scrollY = window.pageYOffset;
        var link = e.target.value;
        var selection = new this.scribe.api.Selection();
        this.scribe.el.focus();
        selection.selection.removeAllRanges();
        if (this.scrollY !== -1) {
          window.scrollTo(0, this.scrollY);
          this.scrollY = -1;
        }
        selection.selection.addRange(this.tempRange);
        if (link.length < 1) {
          var command = this.scribe.getCommand('unlink');
          command.execute('unlink');
          this.setState({
            showLinkInput: false,
            showToolbar: true
          });
        } else {
          // this.addLink(link);
          var _command = this.scribe.getCommand('setLink');
          _command.execute(link);
          this.setState({
            showLinkInput: false,
            showToolbar: true
          });
        }
      }
    }
  }, {
    key: "handleLinkShortcut",
    value: function handleLinkShortcut(e) {
      if (e.which === 75 && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        var selection = new this.scribe.api.Selection();
        if (!selection.range.collapsed) {
          this.handleCommand('link');
        }
      }
    }
  }, {
    key: "handleCommand",
    value: function handleCommand(cmd) {
      var _this5 = this;
      if (cmd === 'link') {
        if (this.state.showLinkInput) {
          this.setState({
            showLinkInput: false,
            showToolbar: true
          });
        } else {
          var command = this.scribe.getCommand('setLink');
          var currentLink = command.getCurrentLink();
          this.setState({
            showLinkInput: true,
            showToolbar: true
          }, function () {
            _this5.tempRange = new _this5.scribe.api.Selection().range;
            setTimeout(function () {
              _this5.linkinput.focus();
              _this5.linkinput.select();
              _this5.linkinput.value = currentLink;
            }, 0);
          });
        }
      } else {
        var _command2 = this.scribe.getCommand(cmd);
        _command2.execute(cmd);
      }
    }
  }, {
    key: "splitAtCursor",
    value: function splitAtCursor() {
      var cmd = this.scribe.getCommand('insertHTML');
      cmd.execute(this.scribe._htmlFormatterFactory.format('<p><br></p>'));
      return this.scribe.getHTML();
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "katap-scribe-container"
      }, this.state.showToolbar ? /*#__PURE__*/_react["default"].createElement("div", {
        className: 'katap-scribe-toolbar' + (this.state.showLinkInput ? ' katap-link-inp-visible' : ''),
        ref: function ref(node) {
          _this6.toolbar = node;
        }
      }, !this.state.showLinkInput ? _scribeOptions.toolbarButtons.map(function (btn) {
        var className = 'katap-inline-toolbar-btn katap-inline-btn-' + btn.command;
        return /*#__PURE__*/_react["default"].createElement("button", {
          className: className,
          key: btn.command,
          title: btn.command.toUpperCase(),
          onMouseDown: function onMouseDown() {
            return _this6.handleCommand(btn.command);
          }
        }, /*#__PURE__*/_react["default"].createElement("i", {
          className: "fa fa-" + btn.icon
        }));
      }) : /*#__PURE__*/_react["default"].createElement("input", {
        ref: function ref(node) {
          _this6.linkinput = node;
        },
        type: "text",
        className: "katap-scribe-link-input",
        placeholder: "Paste and ENTER",
        onKeyDown: this.handleLink
      })) : null, /*#__PURE__*/_react["default"].createElement("div", {
        ref: function ref(node) {
          _this6.scribeeditor = node;
        },
        className: "katap-medium-editor markdown-body",
        onKeyUp: this.onSelect,
        onMouseUp: this.onSelect,
        contentEditable: true
      }), this.state.placeholder ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "scribe-plugin-placeholder",
        style: {
          top: 0,
          left: 2
        }
      }, this.props.placeholder) : null);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return ScribeEditor;
}(_react["default"].Component);
exports["default"] = ScribeEditor;
ScribeEditor.defaultProps = {
  options: _scribeOptions.baseOptions,
  inline: false,
  placeholder: 'Write your story...'
};
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(ScribeEditor, "ScribeEditor", "/Users/ujjwalmishra/Work/stck/kattappa/src/components/scribe.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();