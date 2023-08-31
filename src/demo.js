import './kattappa.scss';
import './style.scss';
//Todo: remove react-hot-reload for production build
import 'react-hot-loader';

import React from 'react';
import ReactDOM from 'react-dom';

import Kattappa from './';
import { hot } from 'react-hot-loader/root';

var initBlock = [{
  type: "tiptap",
  data: `<p>The Indian singles shuttlers were handed a tough road for the upcoming Badminton World Championships in the draws announced by BWF on Thursday.</p><p>PV Sindhu, who will be the only Indian woman singles shuttler in action, in the global event has been seeded a lowly 16th out of the total 48 players for the competition.</p><p>Though the former world champion has received a bye for the first round, she will have to face off against former World Champion Nozomi Okuhara in her opening match. Should Sindhu beat Okuhara, she will have to face world No 7 Ratchanok Intanon of Thailand.</p><p>If the Indian wins the contest, then she will have to face-off against world number 1 and top seed An Se Young in the pre-quarter-finals.</p><p>In the men’s singles section, ninth-seeded HS Prannoy is slated to face seventh seed Loh Kean Yew in the pre-quarter-finals if he wins his first two matches in the 64-player competition. If the 31-year-old advances further, he might have to go up against the reigning world champion Viktor Axelsen in the quarter-finals.</p><p>Lakshya Sen, seeded 11th, is drawn to face world No 3 Kunlavut Vitidsran in the pre-quarter-finals and China’s Lu Shi Feng or Lu Guang Zu in the quarter-finals.<br></p><p>The unseeded Kidambi Srikanth, on the other hand, will have to go past Japan’s Kenta Nishimoto in the very first round. He also has the second seeded Anthony Ginting (pre-quarters) and fifth seeded Jonatan Christie (quarter-finals) in his side of the draw. </p><h3><strong>Byes for Satwik-Chirag, Treesa-Gayatri</strong></h3><p>Meanwhile in the doubles section, the second seeded men’s doubles pair of Satwiksairaj Rankireddy and Chirag Shetty have been handed a bye in the first round. They will open their campaign against the winner of the clash between Australia’s Kenneth Choo/Ming Lim and Ireland’s Joshua Magee and Paul Reynolds.<br></p><p>Similarly, the pair of Treesa Jolly and Gayatri Gopichand will start their campaign directly in the second round against either Chang Ching Hui/Yang Ching Tun or Kati-Kreet Marran/Helina Ruutel.</p><p>The All England Open semi-finalists will, however, run into the top seed Chen Qing Chen and Jia Yi Fan of China in the very next round.</p><p>The other women’s doubles pair of Ashwini Bhat and Shikha Gautam will have to face Netherland’s Debora Jille and Cheryl Seinen in the opening round.</p><p>In the mixed doubles section, Rohan Kapoor and Sikki Reddy will have to the Scottish pair of beat Adam Hall and Julie MacPherson, while Venkat Prasad and Juhi Dewangan will have to overcome the challenge posed by the pair of Jones Ralfy Jansen and Linda Efler.</p>`,
  key: Kattappa.uuid()
}, {
  type: "image",
  key: Kattappa.uuid(),
  data: {
    url: "http://www.nutritionsecrets.com/wp-content/uploads/2015/04/Feature3_image2_vitD.jpg",
    subtext: "nutritionsecrets.com",
    hyperlink: "",
  }
}, {
  type: "text",
  data: `<p>The Indian singles shuttlers were handed a tough road for the upcoming Badminton World Championships in the draws announced by BWF on Thursday.</p><p>PV Sindhu, who will be the only Indian woman singles shuttler in action, in the global event has been seeded a lowly 16th out of the total 48 players for the competition.</p><p>Though the former world champion has received a bye for the first round, she will have to face off against former World Champion Nozomi Okuhara in her opening match. Should Sindhu beat Okuhara, she will have to face world No 7 Ratchanok Intanon of Thailand.</p><p>If the Indian wins the contest, then she will have to face-off against world number 1 and top seed An Se Young in the pre-quarter-finals.</p><p>In the men’s singles section, ninth-seeded HS Prannoy is slated to face seventh seed Loh Kean Yew in the pre-quarter-finals if he wins his first two matches in the 64-player competition. If the 31-year-old advances further, he might have to go up against the reigning world champion Viktor Axelsen in the quarter-finals.</p><p>Lakshya Sen, seeded 11th, is drawn to face world No 3 Kunlavut Vitidsran in the pre-quarter-finals and China’s Lu Shi Feng or Lu Guang Zu in the quarter-finals.<br></p><p>The unseeded Kidambi Srikanth, on the other hand, will have to go past Japan’s Kenta Nishimoto in the very first round. He also has the second seeded Anthony Ginting (pre-quarters) and fifth seeded Jonatan Christie (quarter-finals) in his side of the draw. </p><h3><strong>Byes for Satwik-Chirag, Treesa-Gayatri</strong></h3><p>Meanwhile in the doubles section, the second seeded men’s doubles pair of Satwiksairaj Rankireddy and Chirag Shetty have been handed a bye in the first round. They will open their campaign against the winner of the clash between Australia’s Kenneth Choo/Ming Lim and Ireland’s Joshua Magee and Paul Reynolds.<br></p><p>Similarly, the pair of Treesa Jolly and Gayatri Gopichand will start their campaign directly in the second round against either Chang Ching Hui/Yang Ching Tun or Kati-Kreet Marran/Helina Ruutel.</p><p>The All England Open semi-finalists will, however, run into the top seed Chen Qing Chen and Jia Yi Fan of China in the very next round.</p><p>The other women’s doubles pair of Ashwini Bhat and Shikha Gautam will have to face Netherland’s Debora Jille and Cheryl Seinen in the opening round.</p><p>In the mixed doubles section, Rohan Kapoor and Sikki Reddy will have to the Scottish pair of beat Adam Hall and Julie MacPherson, while Venkat Prasad and Juhi Dewangan will have to overcome the challenge posed by the pair of Jones Ralfy Jansen and Linda Efler.</p>`,
  key: Kattappa.uuid()
}];

const { Blocks, Editor } = Kattappa;

const { EmbedTypes } = Blocks.embed;

function getBlocks() {
  return initBlock;
}

function onChange(position, content) {
  initBlock[position].data = content;
}

function onSave(blocks) {
  console.log(blocks);
}

function onFilesAdded(files, success=null, error=null) {
  if (success) {
    success.call(null, files[0].preview);
    console.log('Success');
  }
}

class Container extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      blocks: initBlock,
    };

    this.save = this.save.bind(this);
    this.getBlocks = this.getBlocks.bind(this);
    this.onChange = (blocks) => this.setState({ blocks });
  }

  getBlocks() {
    return this.state.blocks;
  }

  save() {
    console.log(this.state.blocks);
  }

  render() {
    return (
      <div>
        <button onClick={this.save}>console.log</button>
        <Editor
          blocks={this.state.blocks}
          onChange={this.onChange}
          availableBlocks={Blocks}
          EmbedTypes={EmbedTypes}
          splitter="<p><br></p>"
          getBlocks={this.getBlocks}
          onFilesAdded={onFilesAdded} />
      </div>
    );
  }
}

const HotContainer = hot(Container);

ReactDOM.render(<HotContainer />, document.getElementById('editor-content'));
