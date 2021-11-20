var curtime = document.querySelector("#curtime")

setInterval(function(){
    currenttime = moment().format("H:mm:ss")
    curtime.innerHTML = currenttime
},1000)

var time = setInterval(function(){
    time = moment().format("H:mm:ss")
    return time
},1000)



 // 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'Dx5qFachd3A',
    playerVars: {
    'playsinline': 1
    },
    events: {
    'onReady': onPlayerReady,
    // 'onStateChange': onPlayerStateChange
    }
});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
event.target.playVideo();
}



// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
// var done = false;
// function onPlayerStateChange(event) {
// if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo,);
//     done = true;
// }}

function stopVideo() {
player.stopVideo();
}

function playVideo() {
player.playVideo();
}

var stopvid = document.querySelector("#stopvid")

var today = new Date().getHours();
if (today >= 11 && today <= 19) {
    console.log("store is open")
    playVideo()
} else {
    console.log("store is closed")
    stopVideo()
}