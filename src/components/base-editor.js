import React from 'react';
import Tiptap from './tiptap';
import Scribe from './scribe';


export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTiptap: window.isTiptap,
    };
    this.toggleBaseEditor = this.toggleBaseEditor.bind(this);
  }

  toggleBaseEditor(e) {
    this.setState({
        isTiptap: !this.state.isTiptap
      });
  }

  componentDidMount() {
    window.editor = this;
  }

  render() {
    if(!this.state.isTiptap) {
      return (<Scribe {...this.props} />);
    }
    return (<Tiptap {...this.props} />);
  }
}

Editor.defaultProps = {
  inline: false,
  placeholder: 'Write your story...',
};