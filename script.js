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

//TODO: add crashMain (low pitch), crashSide (higher pitch), ride, and cowbell

/** @param {HTMLAudioElement} */
function playSound(instrument, vol = 1.0) {
  instrument.currentTime = 0;
  instrument.volume = vol;
  instrument.play();
}

document.addEventListener("keydown", function (event) {
  let key = event.key.toLowerCase();
  console.log(key);
  switch (key) {
    case "shift":
      playSound(lowTom, 1);
      break;
    case "a":
      playSound(lowTom, 0.88);
      break;
    case "s":
      playSound(midTom, 0.35);
      break;
    case "d":
      playSound(highTom, 0.36);
      break;
    case "f":
    case " ":
      playSound(snare, 0.9);
      break;
    case "j":
      playSound(kick, 0.9);
      break;
    case "k":
      playSound(hiHatClosed, 0.42);
      break;
    case "m":
      playSound(hiHatOpen, 0.4);
      break;
    default:
      break;
  }
});
