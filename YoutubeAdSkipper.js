

javascript:(function() {
    function skipAd() {
      const container = document.querySelector('.ad-showing');
    
      if (container) {
        const video = document.querySelector('video'); 
        if (video) {
          video.currentTime = video.duration;   //  video.playbackRate = 16;    // this also works
          console.log('skipped Ad!');
        } else {
          console.error('No video element found.');
        }
      } else {
        console.error('Container with specified classname not found.');
      }
    }
    
    // DOM MutationObserver 
    const observerConfig = { childList: true, subtree: true };
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          skipAd();
        }
      }
    });
    observer.observe(document.body, observerConfig);
    skipAd();    
})();
