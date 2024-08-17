import Controls from "./controls.js";
import Timer from "./timer.js";
import Sound from "./sound.js";
import Events from "./events.js";
import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  buttonStop,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js";

let defaltMinutes = Number(minutesDisplay.textContent);

const sound = Sound();

let controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
});

let timer = Timer({
  minutesDisplay,
  secondsDisplay,
  stop: controls.stop,
  defaltMinutes,
});

Events({
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
});
