### YouTube Ad Skipper 

# Rationale 
Since DNS sinkholes haven't been working for a while now and YouTube started a witchhunt 
against ad-blockers, whilst increasing the length and quantity of ads, I thought I'd attempt 
a rather hacky way to skip ads in the browser.

# Disclaimer
Warning: may make your browser slower, unresponsive and a resource hog. Use at own risk, may have 
questionable legality, may lead to being banned from YouTube.. who knows.
I claim no responsibility for anything that may forthcome from using this code, including tears of joy. 
bit of javascript that can be inserted through the console while youtube site is open.


# What it does: 
Starts a DOM mutation observer to look for ads by classname, if an ad is found it is skipped and any skip button that may appear is clicked. 

# Version history:
v1. play ads at 16x / mute sound
v2. set playback pos to video length (end of add) + click 'skip ad' button if & when it appears


added snippet to add it as a bookmarklet / bookmark for easy activation.

    - Console should allow pasting and/or activating through bookmarklet.
    - When the YouTube page is reloaded, the inserted javascript is flushed and ads should appear again.
    - Should work in chrome and safari / other browsers untested.