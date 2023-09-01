import React from 'react';
import ReactDOM from 'react-dom';
import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import OrderedList from '@tiptap/extension-ordered-list'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'

import {
  toolbarButtons,
  normalizeLink,
  BasicInputRulesPlugin,
  Dropcap
} from './scribe-options';
import Keys from '../utils/keys';


export default class TiptapEditor extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showToolbar: false,
      showLinkInput: false
    };

    this.tiptap = null;
    this.dom = null;
    this._updated = false;
    this.tempRange = null;

    this.scrollY = -1;
    this.tiptapeditor = null;
    this.toolbar = null;
    this.linkinput = null;

    this.placeCaretAtEnd = this.placeCaretAtEnd.bind(this);
    this.captureReturn = this.captureReturn.bind(this);
    this.handleCommand = this.handleCommand.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this._onSelect = this._onSelect.bind(this);
    this.handleLink = this.handleLink.bind(this);
    this.handleLinkShortcut = this.handleLinkShortcut.bind(this);

    this.onBlur = () => {
      if (this.state.showLinkInput) {
        return;
      }
      this.setState({ showToolbar: false, showLinkInput: false })
    };
  }

  componentDidMount() {
    this.dom = ReactDOM.findDOMNode(this.tiptapeditor);
    
    this.tiptap = new Editor({
        element: this.dom,
        extensions: [
          BasicInputRulesPlugin,
          StarterKit,
          Underline,
          Link.configure({
            protocols: ['ftp', 'mailto', 'tel'],
            openOnClick: false,
          }),
          Placeholder.configure({
            placeholder: this.props.placeholder,
          }),
          BulletList,
          OrderedList,
          ListItem,
          Dropcap
        ],
        content: this.props.content,
        onUpdate: ({ editor }) => {
          this.props.onContentChanged(editor.getHTML());
        },
        onSelectionUpdate: this.onSelect,
        editorProps: {
          handleKeyDown: (view, e) => {
            return this.captureReturn(e)
          }
        }
    })

    // this.tiptap.commands.setContent(this.props.content);

    if (this.props.onFocus) {
      this.dom.addEventListener('focus', this.props.onFocus);
    }
    this.dom.addEventListener('blur', this.onBlur);

    if (this.props.content.length < 12) {
      this.placeCaretAtEnd();
    }
    this.dom.addEventListener('keydown', this.handleLinkShortcut);
  }

  componentWillUnmount() {
    this.dom.removeEventListener('keydown', this.handleLinkShortcut);
    this.dom.removeEventListener('focus', this.props.onFocus);
    this.dom.removeEventListener('blur', this.onBlur);
    this.tiptap.destroy();
    this.dom = null;
    this.tiptap = null;
    this.tempRange = null;
  }

  componentWillReceiveProps(nextProps) {
    if (this._updated) this._updated = false;
  }

  shouldComponentUpdate(nextProps, nextState){
    if (nextState.showToolbar !== this.state.showToolbar || nextState.showLinkInput !== this.state.showLinkInput) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    if (!this.state.showToolbar) {
      return;
    }
    const toolbar = this.toolbar;
    const toolbarBoundary = toolbar.getBoundingClientRect();
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectionBoundary = range.getBoundingClientRect();
    const parent = this.dom;
    const parentBoundary = parent.getBoundingClientRect();
    toolbar.style.top = (selectionBoundary.top - parentBoundary.top - toolbarBoundary.height - 5) + 'px';
    const widthDiff = selectionBoundary.width - toolbarBoundary.width;
    if (widthDiff >= 0) {
      toolbar.style.left = (widthDiff / 2) + 'px'
    } else {
      const left = (selectionBoundary.left - parentBoundary.left);
      if (left + toolbarBoundary.width > parentBoundary.width) {
        toolbar.style.right = '0px';
      } else {
        toolbar.style.left = (left + widthDiff / 2) + 'px';
      }
    }
  }

  placeCaretAtEnd() {
    const el = this.dom;
    el.focus();
    if (typeof window.getSelection != "undefined"
            && typeof document.createRange != "undefined") {
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

  captureReturn(e) {
    if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
      return false;
    }
    if(e.which === Keys.ENTER) {
      if (this.props.inline || this.props.enterCapture) {
        e.preventDefault();
      }
      if(this.props.captureReturn) {
        this.props.captureReturn();
        return true;
      }
    }
    return false
  }

  _onSelect({ editor: { view }}) {
    const { state: { selection } } = view;
    if (selection && selection.empty) {
      this.setState({ showToolbar: false, showLinkInput: false });
    } else {
      this.setState({ showToolbar: true, showLinkInput: false, });
    }
  }

  onSelect(instance) {
    setTimeout(() => {
      this._onSelect(instance);
    }, 0)
  }

  handleLink(e) {
    if (e.which === Keys.ESC) {
      e.stopPropagation();
      this.scrollY = window.pageYOffset;
      this.setState({
        showLinkInput: false,
        showToolbar: true,
      }, () => {
         this.tiptap.commands.focus();
      });
    } else if (e.which === Keys.ENTER) {
      e.preventDefault();
      e.stopPropagation();
      this.scrollY = window.pageYOffset;
      const link = e.target.value;
      if (this.scrollY !== -1) {
        window.scrollTo(0, this.scrollY);
        this.scrollY = -1;
      }
      if (link.length < 1) {
        this.tiptap.commands.unsetLink()
        this.setState({
          showLinkInput: false,
          showToolbar: true,
        });
      } else {
        this.tiptap.commands.setLink({ href: normalizeLink(link) })
        this.setState({
          showLinkInput: false,
          showToolbar: true,
        });
        setTimeout(() => {
            this.tiptap
              .chain()
              .setTextSelection(this.tiptap.state.tr.selection.to)
              .unsetMark("link")
              .run();
          }, 0);
      }
      this.tiptap.commands.focus();
    }
  }

  handleLinkShortcut(e) {
    if (e.which === 75 && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      const selection = this.tiptap.editor.selection;
      if (selection && !selection.empty) {
        this.handleCommand('link', 'toogleLink');
      }
    }
  }

  handleCommand(cmd, tiptapCmmand) {
    if (tiptapCmmand === 'toggleLink') {
      if (this.state.showLinkInput) {
        this.setState({ showLinkInput: false, showToolbar: true, });
      } else {
        const currentLink = this.tiptap.getAttributes('link').href || '';
        this.setState({ showLinkInput: true, showToolbar: true}, () => {
          setTimeout(() => {
            this.linkinput.focus();
            this.linkinput.select();
            this.linkinput.value = currentLink;
          }, 0);
        });
      }
    } else if (tiptapCmmand === 'toggleHeading'){
      this.tiptap.commands.toggleHeading({ level: 3 });
    } else {
      this.tiptap.commands[tiptapCmmand]();
      setTimeout(() => {
        this.tiptap
          .chain()
          .setTextSelection(this.tiptap.state.tr.selection.to)
          .unsetMark(cmd)
          .run();
      }, 0);
    }
  }

  render() {
    return (
      <div className="katap-tiptap-container">
        { this.state.showToolbar ? (
          <div className={'katap-tiptap-toolbar' + (this.state.showLinkInput ? ' katap-link-inp-visible' : '')} ref={(node) => {this.toolbar=node}}>
            { !this.state.showLinkInput ? toolbarButtons.map(btn => {
              const className = 'katap-inline-toolbar-btn katap-inline-btn-' + btn.command;
              return (
                <button className={className} key={btn.command} title={btn.command.toUpperCase()} onMouseDown={() => this.handleCommand(btn.command, btn.tiptapCommand)}>
                  <i className={"fa fa-" + btn.icon} />
                </button>
              );
            }) : (
              <input
                ref={(node) => {this.linkinput=node}}
                type="text"
                className="katap-tiptap-link-input"
                placeholder="Paste and ENTER"
                onKeyDown={this.handleLink}
              />
            )
          }
          </div>
        ) : null }
        <div ref={(node) => {this.tiptapeditor=node}}
          className="katap-medium-editor markdown-body"
        />
      </div>
    );
  }
}


TiptapEditor.defaultProps = {
  inline: false,
  placeholder: 'Write your story...',
};
