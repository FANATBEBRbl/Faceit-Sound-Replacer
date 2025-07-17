chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    let customFile = "custom.mp3";
    if (details.url.includes("found-tone-silly.mp3")) customFile = "custom1.mp3";
    else if (details.url.includes("large-crowd.mp3")) customFile = "custom2.mp3";
    else if (details.url.includes("lone-wolf-howling.mp3")) customFile = "custom3.mp3";
    else if (details.url.includes("radio-impact-swirl.mp3")) customFile = "custom4.mp3";
    else if (details.url.includes("thunder-clap.mp3")) customFile = "custom5.mp3";
    else if (details.url.includes("whoosh-whip.mp3")) customFile = "custom6.mp3";
    const customUrl = chrome.runtime.getURL("sounds/" + customFile);
    return { redirectUrl: customUrl };
  },
  {
    urls: [
      "https://cdn-frontend.faceit-cdn.net/web-next/_next/static/media/found-tone.mp3",
      "https://cdn-frontend.faceit-cdn.net/web-next/_next/static/media/found-tone-silly.mp3",
      "https://cdn-frontend.faceit-cdn.net/web-next/_next/static/media/large-crowd.mp3",
      "https://cdn-frontend.faceit-cdn.net/web-next/_next/static/media/lone-wolf-howling.mp3",
      "https://cdn-frontend.faceit-cdn.net/web-next/_next/static/media/radio-impact-swirl.mp3",
      "https://cdn-frontend.faceit-cdn.net/web-next/_next/static/media/thunder-clap.mp3",
      "https://cdn-frontend.faceit-cdn.net/web-next/_next/static/media/whoosh-whip.mp3"
    ]
  },
  ["blocking"]
);