let play = document.getElementById("play");
let audio = document.getElementById("audio"); // Make sure your <audio> has id="audio"
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let volumeup = document.getElementById("volumeup");
let volumedown = document.getElementById("volumedown");
let img=document.getElementById("img");
let nam=document.getElementById("nam");

let currentIndex = 0;

// Array of audio tracks
let imgs=["https://static.toiimg.com/thumb/msid-80155909,width-400,resizemode-4/80155909.jpg","samajava.jpeg","nagumomu.jpeg","kundana.jpeg","ninneninne.jpeg"]
let audioTrack = ["buttabomma.mp3","samajava.mp3","nagumomu.mp3","kundana.mp3","ninneninne.mp3"];
let name=["ButtaBomma..❤️","Samajavaragamana..🎵","Nagumomu tharale..❤️","Kundana..Bomma💗","Ninne ninne...💞"]

img.src=imgs[currentIndex];
nam.textContent=name[currentIndex];
// Set initial track
audio.src = audioTrack[currentIndex];

// Play/Pause toggle
play.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        play.textContent = "Pause";
    } else {
        audio.pause();
        play.textContent = "Play";
    }
});

// Next button
next.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= audioTrack.length) {
        currentIndex = 0;
    }
    audio.src = audioTrack[currentIndex];
    img.src=imgs[currentIndex];
    nam.textContent=name[currentIndex];
    audio.play();
    play.textContent = "Pause";
});

// Previous button
prev.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = audioTrack.length - 1;
    }
    audio.src = audioTrack[currentIndex];
    img.src=imgs[currentIndex];
    nam.textContent=name[currentIndex];
    audio.play();
    play.textContent = "Pause";
});

// Volume Up
volumeup.addEventListener("click", function () {
    if (audio.volume < 1) {
        audio.volume = Math.min(1, audio.volume + 0.2);
    }
});

// Volume Down
volumedown.addEventListener("click", function () {
    if (audio.volume > 0) {
        audio.volume = Math.max(0, audio.volume - 0.2);
    }
});
let clickCount = 0;
let clickTimer;

prev.addEventListener("click", function () {
  clickCount++;

  if (clickCount === 2) {
    // Redirect on second click
    window.location.href = "categories.html";
  }

  clearTimeout(clickTimer); // Clear previous timeout
  clickTimer = setTimeout(() => {
    clickCount = 0; // Reset if not clicked again in time
  }, 1000); // 1 second to double click
});