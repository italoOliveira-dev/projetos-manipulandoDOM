function Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
}) {
  function stop() {
    buttonPlay.classList.remove("hide");
    buttonPause.classList.add("hide");
    buttonSet.classList.remove("hide");
    buttonStop.classList.add("hide");
  }

  function play() {
    buttonPlay.classList.add("hide");
    buttonPause.classList.remove("hide");
    buttonSet.classList.add("hide");
    buttonStop.classList.remove("hide");
  }

  function pause() {
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  }

  function sound() {
    buttonSoundOn.classList.toggle("hide");
    buttonSoundOff.classList.toggle("hide");
  }

  return {
    play,
    stop,
    pause,
    sound,
  };
}

export default Controls;
