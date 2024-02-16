import {uuid, UrlRegex} from './utils';

import Editor from './editor';
import Blocks from './blocks';
import BaseEmbed from './blocks/embeds/base';
import WrappedEditor from './components/base-editor';
import DroppableComponent from './components/droppable';

export default {
  Editor,
  Blocks,
  uuid,
  BaseEmbed,
  DroppableComponent,
  UrlRegex,
  ScribeComponent: WrappedEditor,
};
