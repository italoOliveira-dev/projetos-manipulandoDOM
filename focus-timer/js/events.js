export default function Events({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  controls,
  timer,
  sound,
  defaltMinutes,
}) {
  buttonPlay.addEventListener("click", () => {
    controls.play();
    timer.countdown();
    sound.pressButton();
  });

  buttonPause.addEventListener("click", () => {
    controls.pause();
    timer.pause();
    sound.pressButton();
  });

  buttonStop.addEventListener("click", () => {
    controls.stop();
    timer.reset(defaltMinutes);
    sound.pressButton();
  });

  buttonSoundOn.addEventListener("click", () => {
    controls.sound();
    sound.bgAudio.pause();
  });

  buttonSoundOff.addEventListener("click", () => {
    controls.sound();
    sound.bgAudio.play();
  });

  buttonSet.addEventListener("click", () => {
    sound.pressButton();
    let newMinutes = prompt("Quantos minutos?");
    if (newMinutes != null && Number(newMinutes)) {
      timer.updateDisplay(newMinutes, 0);
      defaltMinutes = timer.updateMinutes(newMinutes);
    }
  });
}
