import {youtubeAPI, artistSearch, randomColor} from './index';

export default {
        background: function(color) {
            if(color && color.indexOf(" ") === -1) {
                console.log('Setting background to:', color);
                if(color === "random") {
                    color = randomColor();
                }
                document.querySelector('.background').style.background = color;
            }
        },
        video: function(param) {
            youtubeAPI(param);
        },
        artist: function(name) {
          artistSearch(name); 
        },
        top: function() {
            scrollTo(0, 0);
        },
        bottom: function() {
            scrollTo(0, document.body.scrollHeight);
        }
    };