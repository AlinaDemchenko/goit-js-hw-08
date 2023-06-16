import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function(){});

player.getVideoTitle().then(function(title) {
        console.log('title:', title);});

const onPlay = function({seconds}) {
            localStorage.setItem("videoplayer-current-time",seconds)};

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
        }).catch(function(error) {switch (error.name) {case 'RangeError': break; default: break; }});
    
player.on('timeupdate', throttle(onPlay, 1000));

console.log(Player);
console.log(throttle);

