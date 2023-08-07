"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toolbarButtons = exports.linkCommand = exports.keyboardPlugin = exports.isEditorEmpty = exports.dropCapCommand = exports.defaultCommands = exports.baseTextOptions = exports.baseOptions = exports.baseInlineOptions = void 0;
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};
var baseOptions = {
  tags: {
    p: {},
    br: false,
    b: {},
    strong: function strong(el) {
      return el.classList.contains('drop-cap') ? {
        "class": true
      } : {};
    },
    i: {},
    em: {},
    strike: {},
    ol: {},
    ul: {},
    li: {},
    a: {
      href: true,
      target: true
    },
    h2: {},
    h3: {},
    u: {}
  }
};
exports.baseOptions = baseOptions;
var baseTextOptions = Object.assign({}, baseOptions, {
  tags: Object.assign({}, baseOptions.tags, {
    blockquote: {}
  })
});
exports.baseTextOptions = baseTextOptions;
var baseInlineOptions = {
  tags: {
    br: false,
    b: {},
    strong: {},
    em: {},
    i: {},
    u: {},
    a: {
      href: true,
      target: true
    },
    strike: {}
  }
};
exports.baseInlineOptions = baseInlineOptions;
var toolbarButtons = [{
  command: 'bold',
  icon: 'bold'
}, {
  command: 'italic',
  icon: 'italic'
}, {
  command: 'underline',
  icon: 'underline'
}, {
  command: 'link',
  icon: 'link'
}, {
  command: 'h3',
  icon: 'header'
}];
exports.toolbarButtons = toolbarButtons;
var normalizeLink = function normalizeLink(link) {
  if (link.indexOf('http://') === 0 || link.indexOf('https://') === 0) {
    return link;
  }
  if (link.indexOf('@') >= 0) {
    return 'mailto:' + link;
  }
  if (link.indexOf('+') === 0) {
    return 'tel:' + link;
  }
  return 'http://' + link;
};
var linkCommand = function linkCommand() {
  return function (scribe) {
    var linkPromptCommand = new scribe.api.Command('createLink');
    linkPromptCommand.nodeName = 'A';
    linkPromptCommand.execute = function (passedLink) {
      var _this = this;
      var selection = new scribe.api.Selection();
      var range = selection.range;
      var anchorNode = selection.getContaining(function (node) {
        return node.nodeName === _this.nodeName;
      });

      // const initialLink = anchorNode ? anchorNode.href : '';
      if (anchorNode) {
        range.selectNode(anchorNode);
        selection.selection.removeAllRanges();
        selection.selection.addRange(range);
      }
      if (passedLink) {
        scribe.api.SimpleCommand.prototype.execute.call(this, normalizeLink(passedLink));
      }
    };
    linkPromptCommand.queryState = function () {
      var selection = new scribe.api.Selection();
      return !!selection.getContaining(function (node) {
        return node.nodeName === this.nodeName;
      }.bind(this));
    };
    linkPromptCommand.getCurrentLink = function () {
      var _this2 = this;
      var selection = new scribe.api.Selection();
      var anchorNode = selection.getContaining(function (node) {
        return node.nodeName === _this2.nodeName;
      });
      return anchorNode ? anchorNode.href : '';
    };
    scribe.commands.setLink = linkPromptCommand;
  };
};
exports.linkCommand = linkCommand;
var dropCapCommand = function dropCapCommand() {
  return function (scribe) {
    var dropCapCommand = new scribe.api.Command('createDropCap');
    dropCapCommand.execute = function () {
      var selection = new scribe.api.Selection();
      var range = selection.range;
      var isOneCharSelected = range.endOffset === range.startOffset + 1;
      if (isOneCharSelected) {
        var parentOfAnchor = selection.selection.anchorNode.parentElement;
        var isStrongNode = parentOfAnchor.nodeName === 'STRONG' && parentOfAnchor.className.includes('drop-cap');
        var node = '';
        if (!isStrongNode) {
          node = document.createElement("strong");
          node.classList.add('drop-cap');
          node.innerHTML = selection.selection.toString();
          range.deleteContents();
        } else {
          node = document.createTextNode(selection.selection.toString());
          parentOfAnchor.remove();
        }
        range.insertNode(node);
      }
    };
    dropCapCommand.queryEnabled = function () {
      return true;
    };
    scribe.commands.setDropCap = dropCapCommand;
  };
};
exports.dropCapCommand = dropCapCommand;
var isEditorEmpty = function isEditorEmpty(scribe) {
  var childNodes = scribe.el.childNodes;
  var blockCount = childNodes.length;
  if (blockCount === 0) {
    return true;
  } else if (blockCount === 1) {
    var node = childNodes[0];
    var nodeName = node.nodeName.toLowerCase();
    if (nodeName === 'p' && node.textContent === '') {
      return true;
    }
  }
  return false;
};
exports.isEditorEmpty = isEditorEmpty;
var defaultCommands = {
  // bold: (e) => ((e.metaKey || e.ctrlKey) && e.which === 66),
  // italic: (e) => ((e.metaKey || e.ctrlKey) && e.which === 73),
  h3: function h3(e) {
    return (e.metaKey || e.ctrlKey) && e.which === 51;
  },
  // 
  setDropCap: function setDropCap(e) {
    return e.ctrlKey && e.shiftKey && e.keyCode === 68;
  }
};
exports.defaultCommands = defaultCommands;
var keyboardPlugin = function keyboardPlugin() {
  var commandsToKeyboardShortcutsMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultCommands;
  return function (scribe) {
    scribe.el.addEventListener('keydown', function (event) {
      var commandName = '';
      for (var key in commandsToKeyboardShortcutsMap) {
        if (commandsToKeyboardShortcutsMap.hasOwnProperty(key)) {
          if (commandsToKeyboardShortcutsMap[key](event)) {
            commandName = key;
            break;
          }
        }
      }
      if (commandName) {
        var command = scribe.getCommand(commandName);
        event.preventDefault();
        if (command.queryEnabled()) {
          command.execute();
        }
      }
    });
  };
};
exports.keyboardPlugin = keyboardPlugin;
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(baseOptions, "baseOptions", "/Users/ujjwalmishra/Work/stck/kattappa/src/components/scribe-options.js");
  reactHotLoader.register(baseTextOptions, "baseTextOptions", "/Users/ujjwalmishra/Work/stck/kattappa/src/components/scribe-options.js");
  reactHotLoader.register(baseInlineOptions, "baseInlineOptions", "/Users/ujjwalmishra/Work/stck/kattappa/src/components/scribe-options.js");
  reactHotLoader.register(toolbarButtons, "toolbarButtons", "/Users/ujjwalmishra/Work/stck/kattappa/src/components/scribe-options.js");
  reactHotLoader.register(normalizeLink, "normalizeLink", "/Users/ujjwalmishra/Work/stck/kattappa/src/components/scribe-options.js");
  reactHotLoader.register(linkCommand, "linkCommand", "/Users/ujjwalmishra/Work/stck/kattappa/src/components/scribe-options.js");
  reactHotLoader.register(dropCapCommand, "dropCapCommand", "/Users/ujjwalmishra/Work/stck/kattappa/src/components/scribe-options.js");
  reactHotLoader.register(isEditorEmpty, "isEditorEmpty", "/Users/ujjwalmishra/Work/stck/kattappa/src/components/scribe-options.js");
  reactHotLoader.register(defaultCommands, "defaultCommands", "/Users/ujjwalmishra/Work/stck/kattappa/src/components/scribe-options.js");
  reactHotLoader.register(keyboardPlugin, "keyboardPlugin", "/Users/ujjwalmishra/Work/stck/kattappa/src/components/scribe-options.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();