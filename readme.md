# YouTube Ad Skipper 
*Sailing Smoothly Through the Ad-infested Waters!*

### Rationale 
Since DNS sinkholes haven't been working for a while now and YouTube recently intensified their persecution 
of ad-blockers, whilst also increasing the length and quantity (not quality) of ads, I thought I'd attempt a rather hacky way to skip ads in the browser. It may stop working at any time, it does not make any permanent changes.

### Disclaimer
Warning: This code may cause your browser to respond slowly, become unresponsive and act as a resource hog. Use it at your own risk. It may have questionable legality and could result in being banned from YouTube – maybe, who knows? I claim no responsibility for anything that may ensue from using this code, including tears of joy. 

### What it does: 
This bit of Javascript can be inserted through the console while youtube site is open.
It starts a DOM mutation observer to look for ads by classname on DOM changes. 
If an ad is found it is skipped and any skip button (click to skip ad) that may appear is clicked
automatically.  

### Version history:
v1. play ads at 16x / mute sound - proof of concept.
v2. set playback pos to video length (end of add) + click 'skip ad' button if & when it appears.

- Console (right click, inspect) should allow for pasting and/or activating through bookmarklet.
- When the YouTube page is reloaded, the inserted javascript is flushed and ads should appear again.
- Should work in chrome and safari / other browsers untested. 
- (minified) snippets to add it as a bookmarklet / bookmark for easy activation convenience.
