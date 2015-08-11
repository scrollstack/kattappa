---
layout: page
color: teal
title: Using LegoBlocks
---

<a href="//bitwiser.in/legoblocks/demo.html" class="mui-btn mui-btn-primary mui-btn-lg">Demo</a>

#### Load dependencies in your html:
* CSS:
    * `<link rel="stylesheet" type="text/css" href="bower_components/quill/dist/quill.base.css">`
    * (A bundled quill css comes with `LegoBlocks`. If you don't use bower, you can directly use:
        * `<link rel="stylesheet" type="text/css" href="legoblocks.vendor.css">`)
    * `<link rel="stylesheet" type="text/css" href="legoblocks.css">`. (Used for basic styling of the blocks. You can extend these to be what you want.)
* Javascript:
    * `<script type="text/javascript" src="bower_components/react/react-with-addons.min.js"></script>`
    * `<script type="text/javascript" src="bower_components/quill/dist/quill.min.js"></script>`
    * `<script src="bower_components/fetch/fetch.js"></script>`
    * (Or you can just include `<script src="legoblocks.vendor.js"></script>` instead of the above 3).
    * `<script type="text/javascript" src="legoblocks.js"></script>`

* Html:
    * `<div id="editor-ui"></div>`

* Script:
    * First create an `editor` instance.
    * Then mount it to the desired DOM node.

{% highlight javascript %}
var editor = React.createElement(LegoBlocks.Editor);
React.render(editor, document.getElementById('editor-ui'));
{% endhighlight %}

The editor has a `Save` button when there are 1 or more blocks. To get the current block content, you can pass a callback function `onSave` as a React `prop` that will be called whenever `Save` button is clicked. This callback receives the current `blocks` array.

{% highlight javascript %}
var editor = React.createElement(LegoBlocks.Editor, {
    onSave: function(blocks) {
        console.log('This is the list of current blocks.');
        console.log(blocks);
    }
});
React.render(editor, document.getElementById('editor-ui'));
{% endhighlight %}

If you already have a list of blocks (that may have been previously saved on the server):

* You can first fetch the block list from the server.
* Pass the list to the editor instance as a React `prop`.
* Make sure each block has a `key` key. This is used by React and facilitates easy manipulation of position (up, down or remove block).
* If the blocks don't have a `key`, you can just generate keys for each of them in the browser using the utility function provided `LegoBlocks.uuid()`.
* The `key` functionality applies to each of the items in `UL` or `OL`.

{% highlight javascript %}
var blocks = function() {
    var blocks = [];
    // fetch from server, and assign it to blocks.
    for(var i=0; i < blocks.length; i++) {
        if(!blocks[i].key) {
            blocks[i].key = LegoBlocks.uuid();
        }
        if(blocks[i].type === LegoBlocks.Blocks.UL.Name || blocks[i].type === LegoBlocks.Blocks.OL.Name) {
            for(var j = 0; j < blocks[i].content.length; j++) {
                if(!blocks[i].content[j].key) {
                    blocks[i].content[j].key = LegoBlocks.uuid();
                }
            }
        }
    }
    return blocks;
};
var editor = React.createElement(LegoBlocks.Editor, {
    blocks: blocks,
    onSave: function(blocks) {
        console.log('This is the list of current blocks.');
        console.log(blocks);
    }
});
React.render(editor, document.getElementById('editor-ui'));
{% endhighlight %}

#### Image upload

* By default, the image block just renders the image using `createObjectURL`.
* If you want the image to also be uploaded to the server, you can do this:
    * Change the value of `UploadUrl` to your server's endpoint
        * `LegoBlocks.Block.Image.UploadUrl = '/upload_image';`
    * If `UploadUrl` is provided, the `Image` block will send a POST request to the url with `image` key having the selected image file and it expects a `json` reponse from the server of the following format:

{% highlight javascript %}
{
    "type": "success",
    "message": "http://absoluteurl.to/the/uploaded/image.jpg"
}
{% endhighlight %}

#### Goodies

* `LegoBlocks` supports the following embeds out of the box:
    * Instagram
    * Youtube
    * Vimeo
* Also has Twitter embed in `legoblocks.embed.js`. But this also has a dependency on server.
* The Twitter embed expects:
    * The server to implement a `/tweet` endpoint that will be called with the `url=url_to_twitter_status` query string.
    * The response from the server should be a json with the following structure:

{% highlight javascript %}
{
    "html": "The html retrived when visiting 'https://api.twitter.com/1/statuses/oembed.json?url=url_to_twitter_status' directly"
}
{% endhighlight %}

#### Todo
* Add instructions to create custom blocks.

#### Known issues
* Better handling of `Return` key press when inside one of the `Text` blocks. (Text, Quote, H2, UL, OL)
* If a Twitter embed block is rearranged to make it go upwards, the rendered part disappears from the UI.

### Made while working @ [http://scroll.in](http://scroll.in)