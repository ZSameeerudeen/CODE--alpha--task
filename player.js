var musicIcon = document.getElementById('musicIcon');
var speed = document.getElementById('speed');
var songTitle = document.getElementById('songTitle');
var songSlider = document.getElementById('songSlider');
var currentTime = document.getElementById('currentTime');
var totalTime = document.getElementById('totalTime');
var toggleButton = document.getElementById('toggleButton');
var volumeSlider = document.getElementById('volumeSlider');
var nextSongTitle = document.getElementById('nextSongTitle');

var songs = [   
    "Maayavi.mp3",
    "Oru-Thuli-MassTamilan.dev.mp3",
    "Travelling-Soldier.mp3"
];

var player = new Audio();
var currentSong = 0;
function loadPlayer() {
    player.src = 'songs/' + songs[currentSong];
    songTitle.textContent = songs[currentSong];
    nextSongTitle.textContent = 'up next:' + songs[(currentSong + 1) % songs.length];
    player.volume = volumeSlider.value;

};
function updatePlayerInfo() {
    
    totalTime.textContent = convertTime(player.duration);
    currentTime.textContent = convertTime(player.currentTime);
    songSlider.max = player.duration;
    songSlider.value = player.currentTime;
};
function convertTime(duration) {
    var mins = Math.floor(duration / 60);
    var secs = Math.floor(duration % 60);
    mins = mins < 10 ? '0' + mins : mins;
    secs = secs < 10 ? '0' + secs : secs;
    return mins + ':' + secs;
};

function updatevolume() {
  volumeSlider.value = player.volume
};

function jump() {
    player.currentTime = songSlider.value;
};
function previousSong() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }
    loadPlayer();
   // player.play();
};
function nextSong() {
    currentSong = (currentSong + 1) % songs.length;
    loadPlayer();
   // player.play();
};



function toggleplay() {
    if (player.paused) {
        player.play();
        toggleButton.src = "images/pause.png";
        musicIcon.style.animation = 'rotation 5s linear infinite';
    }
    else {
        player.pause();
        toggleButton.src = "images/play.png";
        musicIcon.style.animation = 'none';
    }
};
setInterval(updatePlayerInfo, 1000);
window.onload = loadPlayer;