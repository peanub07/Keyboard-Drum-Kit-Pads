// const drumAudio = new Audio();

document.addEventListener("keydown", function(event){
  let key = event.key.toLowerCase();
  
  if (key === "a") {
    // drumAudio.src =
    const drumAudio = new Audio("resources/sounds/A Real Freakin Drum Kit/SAMPLESWAP/DRUMS (FULL KITS)/REAL LIVE KITS/A Real Freakin Drum Kit/real-kick-F005.wav");
    drumAudio.play();
  } else if (key === "j") {
    const drumAudio = new Audio("resources/sounds/A Real Freakin Drum Kit/SAMPLESWAP/DRUMS (FULL KITS)/REAL LIVE KITS/A Real Freakin Drum Kit/real-soft-snare.wav");
    drumAudio.play();
  }
//   switch (key) {
//   case "a":
//     // Low Tom
//     break;
//   case "s":
//     // Mid Tom
//     break;
//   case "d":
//     // High Tom
//     break;
//   case "f":
//     // Snare
//     break;
//   case "j":
//     // Kick
//     break;
//   case "k":
//     // Closed Hi-Hat
//     break;
//   case "m":
//     // Open Hi-Hat
//     break;
//   default:
//     break;
// }
});

