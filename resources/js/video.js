export default function video(){

var videoPlayer = document.getElementById('video');
if (!videoPlayer) { return; }
var play        = document.getElementById('play');
if (!play) { return; }
var videoPlayer2 = document.getElementById('video2');
if (!videoPlayer2) { return; }
var play2        = document.getElementById('play2');
if (!play2) { return; }

    play.addEventListener('click', function (ev) {
        play.classList.add('none')
        videoPlayer.play();
    /*    videoPlayer.firstChild.nodeValue = 'Pause';*/
    })


    play2.addEventListener('click', function (ev) {
        play2.classList.add('none')
        videoPlayer2.play();
    /*    videoPlayer2.firstChild.nodeValue = 'Pause';*/
    })

    videoPlayer.addEventListener('click', function (ev) {
        play.classList.remove('none')
        videoPlayer.pause();
    /*    videoPlayer.firstChild.nodeValue = 'Play';*/
    
    })


    videoPlayer2.addEventListener('click', function (ev) {
        play2.classList.remove('none')
        videoPlayer2.pause();
    /*    videoPlayer2.firstChild.nodeValue = 'Play';*/

    })
}
