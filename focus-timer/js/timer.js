import Sound from "./sound.js";

function Timer({ minutesDisplay, secondsDisplay, stop, defaltMinutes }) {
  let timeTimerOut;

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function updateMinutes(newMinutes) {
    return (defaltMinutes = newMinutes);
  }

  function reset(minutes) {
    updateDisplay(minutes, 0);
    pause();
  }

  function pause() {
    clearTimeout(timeTimerOut);
  }

  function countdown() {
    timeTimerOut = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);

      if (minutes <= 0 && seconds <= 0) {
        reset(defaltMinutes);
        stop();
        Sound().timeEnd();
        return;
      }

      if (seconds <= 0) {
        seconds = 2;
        --minutes;
      }

      --seconds;
      updateDisplay(minutes, seconds);

      countdown();
    }, 1000);
  }

  return {
    countdown,
    reset,
    updateDisplay,
    pause,
    updateMinutes,
  };
}

export default Timer;
