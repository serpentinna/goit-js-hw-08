import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
    const player = new Vimeo.Player(iframe);


player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(event) {
    localStorage.setItem(LOCALSTORAGE_KEY, event.seconds);
}


let savedTime = localStorage.getItem(LOCALSTORAGE_KEY);

if (savedTime) {
   player.setCurrentTime(savedTime); 
}