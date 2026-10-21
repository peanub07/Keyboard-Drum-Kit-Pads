const kick = new Audio(
  "resources/sounds/A Real Freakin Drum Kit/real-kick-F005.wav",
);
kick.name = "kick";
const snare = new Audio(
  "resources/sounds/A Real Freakin Drum Kit/real-soft-snare.wav",
);
snare.name = "snare";
const hiHatClosed = new Audio(
  "resources/sounds/A Real Freakin Drum Kit/real-01L3.UF-HiHat-A-L.wav",
);
hiHatClosed.name = "hiHatClosed";
const hiHatOpen = new Audio(
  "resources/sounds/A Real Freakin Drum Kit/real-02R4.UF-HiHat-A-L.wav",
);
hiHatOpen.name = "hiHatOpen";
const lowTom = new Audio(
  "resources/sounds/A Real Freakin Drum Kit/real-08.TOM4M.wav",
);
lowTom.name = "lowTom";
const midTom = new Audio(
  "resources/sounds/A Real Freakin Drum Kit/real-03.TOM3C-L.wav",
);
midTom.name = "midTom";
const highTom = new Audio(
  "resources/sounds/A Real Freakin Drum Kit/real-03.TOM2C-L.wav",
);
highTom.name = "highTom";
const ride = new Audio(
  "resources/sounds/A Real Freakin Drum Kit/real-02BL20RKRM.wav",
);
ride.name = "ride";
const crashSide = new Audio(
  "resources/sounds/A Real Freakin Drum Kit/real-01TP20CHIM.wav",
);
crashSide.name = "crashSide";

/** @param {HTMLAudioElement} */
function playSound(instrument, vol = 1.0) {
  instrument.currentTime = 0;
  instrument.volume = vol;
  instrument.play();
  activatePad(instrument.name);
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
      playSound(ride, 0.34);
      break;
    case "f":
    case " ":
      playSound(snare, 0.89);
      break;
    case "j":
      playSound(kick, 0.94);
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
      crashMain.name = "crashMain";
      playSound(crashMain, 0.3);
      break;
    case "r":
      const cowbell = new Audio(
        "resources/sounds/mrstokes302-phonk-cowbell-sfx-mrstokes302-423123.mp3",
      );
      cowbell.name = "cowbell";
      playSound(cowbell, 0.25);
      break;
    default:
      break;
  }
}

function activatePad(instrumentName) {
  const target = document.querySelector("." + instrumentName);
  if (target) {
    target.classList.add("activatedPad");

    setTimeout(function () {
      target.classList.remove("activatedPad");
    }, 100);
  }
}
