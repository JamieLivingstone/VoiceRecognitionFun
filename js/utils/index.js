import axios from 'axios';

export function youtubeAPI(option) {
    const video = document.querySelector('video');
    if(option === "play") {
        video.play();
    }
    if(option === "pause") {
        video.pause();
    }
}

export function artistSearch(name) {
    name = name.replace(/ /g, "%20");
    const url = `https://api.spotify.com/v1/search?q=${name}&type=artist&limit=1`;
    axios.get(url)
    .then(data => {
        const artist = data.data.artists.items[0];
        
        document.querySelector('.artist h3').innerText = artist.name;
        document.querySelector('.artist img').setAttribute('src', artist.images[0].url);
    });
}

export function randomColor() {
    console.log('random color');
    let colors = ['red', 'blue', 'green', 'pink', 'orange', 'cyan', 'purple', 'grey'];
    let number = Math.round(Math.random() * 8 - 1);
    
    return colors[number];
}