javascript:!function(){function e(){let e=document.querySelector(".ad-showing");if(e){let o=document.querySelector("video");o?(o.currentTime=o.duration,console.log("skipped Ad!")):console.error("No video element found.")}else console.error("Container with specified classname not found.")}let o=new MutationObserver(o=>{for(let t of o)"childList"===t.type&&e()});o.observe(document.body,{childList:!0,subtree:!0}),e()}();