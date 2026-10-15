const kick = new Audio(
  "resources/sounds/A Real Freakin Drum Kit/real-kick-F005.wav",
);
const snare = new Audio(
  "resources/sounds/A Real Freakin Drum Kit/real-soft-snare.wav",
);
const hiHatClosed = new Audio(
  "resources/sounds/A Real Freakin Drum Kit/real-01L3.UF-HiHat-A-L.wav",
);
const hiHatOpen = new Audio(
  "resources/sounds/A Real Freakin Drum Kit/real-02R4.UF-HiHat-A-L.wav",
);
const lowTom = new Audio(
  "resources/sounds/A Real Freakin Drum Kit/real-08.TOM4M.wav",
);
const midTom = new Audio(
  "resources/sounds/A Real Freakin Drum Kit/real-03.TOM3C-L.wav",
);
const highTom = new Audio(
  "resources/sounds/A Real Freakin Drum Kit/real-03.TOM2C-L.wav",
);
const ride = new Audio(
  "resources/sounds/A Real Freakin Drum Kit/real-02BL20RKRM.wav",
);
const crashSide = new Audio(
  "resources/sounds/A Real Freakin Drum Kit/real-01TP20CHIM.wav",
);

/** @param {HTMLAudioElement} */
function playSound(instrument, vol = 1.0) {
  instrument.currentTime = 0;
  instrument.volume = vol;
  instrument.play();
}

document.addEventListener("keydown", function (event) {
  let key = event.key.toLowerCase();
  console.log(key);
  triggerPad(key);
});

function triggerPad(key) {
  switch (key) {
    case "shift":
      playSound(lowTom, 1);
      break;
    case "a":
      playSound(midTom, 0.35);
      break;
    case "s":
      playSound(highTom, 0.36);
      break;
    case "d":
      playSound(ride, 0.36);
      break;
    case "f":
    case " ":
      playSound(snare, 0.85);
      break;
    case "j":
      playSound(kick, 0.91);
      break;
    case "k":
      playSound(hiHatClosed, 0.42);
      break;
    case "m":
      playSound(hiHatOpen, 0.4);
      break;
    case "e":
      playSound(crashSide, 0.85);
      break;
    case "enter":
      playSound(crashSide, 0.85);
    case "i":
      const crashMain = new Audio(
        "resources/sounds/djdominik7-crash_01-602468.mp3",
      );
      playSound(crashMain, 0.3);
      break;
    case "r":
      const cowbell = new Audio(
        "resources/sounds/mrstokes302-phonk-cowbell-sfx-mrstokes302-423123.mp3",
      );
      playSound(cowbell, 0.25);
      break;
    default:
      break;
  }
}
