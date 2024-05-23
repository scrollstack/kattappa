import React from 'react';
import Tiptap from './tiptap';
import Scribe from './scribe';
import { baseOptions } from './scribe-options';


export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTiptap: window.isTiptap,
    };
    this.editor = null;
  }

  render() {
    if(!this.state.isTiptap) {
      return (<Scribe {...this.props} />);
    }
    return (<Tiptap ref={(node) => {this.editor=node}} {...this.props} />);
  }
}

Editor.defaultProps = {
  options: baseOptions,
  inline: false,
  placeholder: 'Write your story...',
};