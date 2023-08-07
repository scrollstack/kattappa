import { Extension } from '@tiptap/core'
import {inputRules, smartQuotes, emDash, ellipsis} from "@tiptap/pm/inputrules"

let basicInputRules = smartQuotes.concat(ellipsis, emDash)

export const BasicInputRulesPlugin = Extension.create({
  addProseMirrorPlugins() {
    return [
      inputRules({ rules: basicInputRules })
    ]
  },
})

export const baseOptions = {
  tags: {
    p: {},
    br: false,
    b: {},
    strong: (el) => el.classList.contains('drop-cap') ? { class: true } : {},
    i: {},
    em: {},
    strike: {},
    ol: {},
    ul: {},
    li: {},
    a: { href: true, target: true, },
    h2: {},
    h3: {},
    u: {},
  },
};


export const baseTextOptions = Object.assign({}, baseOptions, {
  tags: Object.assign({}, baseOptions.tags, {
    blockquote: {},
  })
});


export const baseInlineOptions = {
  tags: {
    br: false,
    b: {},
    strong: {},
    em: {},
    i: {},
    u: {},
    a: { href: true, target: true },
    strike: {},
  },
};


export const toolbarButtons = [{
  command: 'bold',
  icon: 'bold',
  tiptapCommand: 'toggleBold'
}, {
  command: 'italic',
  icon: 'italic',
  tiptapCommand: 'toggleItalic'
}, {
  command: 'underline',
  icon: 'underline',
  tiptapCommand: 'toggleUnderline'
}, {
  command: 'link',
  icon: 'link',
  tiptapCommand: 'toggleLink'
}, {
  command: 'h3',
  icon: 'header',
  tiptapCommand: 'toggleHeading'
}];


export const normalizeLink = (link) => {
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


export const linkCommand = function () {
  return function (scribe) {
    const linkPromptCommand = new scribe.api.Command('createLink');
    linkPromptCommand.nodeName = 'A';

    linkPromptCommand.execute = function (passedLink) {
      const selection = new scribe.api.Selection();
      const range = selection.range;
      const anchorNode = selection.getContaining((node) => {
        return node.nodeName === this.nodeName;
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

    linkPromptCommand.queryState = function() {
      const selection = new scribe.api.Selection();
      return !! selection.getContaining(function (node) {
        return node.nodeName === this.nodeName;
      }.bind(this));
    };

    linkPromptCommand.getCurrentLink = function() {
      const selection = new scribe.api.Selection();
      const anchorNode = selection.getContaining((node) => {
        return node.nodeName === this.nodeName;
      });
      return anchorNode ? anchorNode.href : '';
    };

    scribe.commands.setLink = linkPromptCommand;
  };
};

export const dropCapCommand = function () {
  return function (scribe) {
    const dropCapCommand = new scribe.api.Command('createDropCap');

    dropCapCommand.execute = function () {
      const selection = new scribe.api.Selection();
      const range = selection.range;
      const isOneCharSelected = range.endOffset === range.startOffset + 1 

      if (isOneCharSelected) {
        const parentOfAnchor = selection.selection.anchorNode.parentElement;
        const isStrongNode = parentOfAnchor.nodeName === 'STRONG' && parentOfAnchor.className.includes('drop-cap');
        let node = '';
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

export const isEditorEmpty = (scribe) => {
  var childNodes = scribe.el.childNodes;
  var blockCount = childNodes.length;

  if (blockCount === 0) {
    return true;
  } else if (blockCount === 1) {
    var node = childNodes[0];
    var nodeName = node.nodeName.toLowerCase();

    if (nodeName === 'p' && node.textContent === '')   {
      return true;
    }
  }

  return false;
};


export const defaultCommands = {
  // bold: (e) => ((e.metaKey || e.ctrlKey) && e.which === 66),
  // italic: (e) => ((e.metaKey || e.ctrlKey) && e.which === 73),
  h3: (e) => ((e.metaKey || e.ctrlKey) && e.which === 51), // 
  setDropCap: (e) => {
    return e.ctrlKey && e.shiftKey && e.keyCode === 68
  }
};

export const keyboardPlugin = (commandsToKeyboardShortcutsMap = defaultCommands) => (scribe) => {

  scribe.el.addEventListener('keydown', function (event) {
    let commandName = '';
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
