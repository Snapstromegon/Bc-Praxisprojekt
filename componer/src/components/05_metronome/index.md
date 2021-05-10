## Short Description

{{ component.description | safe }}

## Long Description

### Context

Musicians use a thing called a metronome to keep their tempo.
In this component you're going to start with a blinking box and end with a metronome playing a sound for each beat.

Feel free to add subcomponents as you like.

### Stages

#### 1. Display a blinking indicator

Create a component which takes the BPM (beats per minute) as an input number and blinks an indicator (e.g. a circle) like below:

<style>

#bpm_in {
  width: 5rem;
  padding: .5rem;
  margin: 0 1rem;
}

#blinker {
  width: 1rem;
  height: 1rem;
  margin: 0 1rem;
  border-radius: 50%;
  background: #44a;
  --bpm: 120;
  animation: blink calc(60s / var(--bpm)) infinite;
}

@keyframes blink {
  0% {
    opacity: 1;
  }

  20% {
    opacity: 1;
  }

  30% {
    opacity: 0.1;
  }

  100% {
    opacity: 0.1;
  }
}

</style>

<script>
function updateBlinker(e){
  document.querySelector("#blinker").style.setProperty("--bpm", e.value);
}
</script>

<input type="number" value=120 onchange="updateBlinker(this)" id="bpm_in">
<div id="blinker"></div>

Limit the possible values to between 40 and 240 bpm. (I know that music outside that range exists, but I want you to enforce those limits)

#### 2. Range Input

Add a range input to your component with the same limits as above and make sure that the range and number input are always in sync.

```html
<input type="range" min="40" max="240" value="120" />
```

<input type="range" min=40 max=240 value=120 style="margin: 0 1rem">

#### 3. Tap Input

As a last input method I'd like you to add a button which allows the user to tap a speed by clicking it.

At 40 bpm the duration between each tap is 1.5 seconds, so let's say if the user stops tapping for 5 seconds, you start a new measurement. Average all taps inside one measurement to get the BPM (update the UI live with each tap).

#### 4. Help Counting

Music is written with bars which each contains a number of note lengths of a certain duration.
Most of the time this is 4/4 (four quarter notes), but also 3/4 (three quarter notes) is common and you find things like 7/8 (seven eights notes) and more.

Please add two inputs to your components which allow the user to select the number of subdevisions of a bar and the note length of each subdivision (so {number}/{length}).

Depending on the number of subdivisions you add new indicators to your component and light up the corresponding indicator for each beat.

So for a 4/4 it would look like this:

<style>
  #quarters_blinkers {
    display: flex;
  }

  .blinking {
    width: 1rem;
    height: 1rem;
    margin: 0 1rem;
    border-radius: 50%;
    background: #44a;
    animation: blink calc(60s / 60) infinite calc(1s * var(--offset));
  }
</style>
<div id="quarters_blinkers">
  <div class="blinking" style="--offset: 0"></div>
  <div class="blinking" style="--offset: 0.25"></div>
  <div class="blinking" style="--offset: 0.5"></div>
  <div class="blinking" style="--offset: 0.75"></div>
</div>

#### 5. Final Changes

Now let's give the first blinking indicator a different color so it's easier to keep track of the 1s and let's add a short beep to each indicator so the musician doesn't have to keep his eyes on the screen (please also add a mute button). Again the 1s should sound different to the others.

You can either use your own clicks or use this JS to generate a sound:

```js
function play_sound(frequency = 440){
  const context = new AudioContext()
  const gain = context.createGain()
  const oscillator = context.createOscillator()
  gain.connect(context.destination)
  oscillator.connect(gain)
  oscillator.frequency.value = frequency;
  oscillator.start(0);
  gain.gain.exponentialRampToValueAtTime(
    0.000001, context.currentTime + .5
  )
  setTimeout(() => context.close(), 1000)
}
```

<script>
function play_sound(frequency = 440){
  const context = new AudioContext()
  const gain = context.createGain()
  const oscillator = context.createOscillator()
  gain.connect(context.destination)
  oscillator.connect(gain)
  oscillator.frequency.value = frequency;
  oscillator.start(0);
  gain.gain.exponentialRampToValueAtTime(
    0.000001, context.currentTime + .5
  )
  setTimeout(() => context.close(), 1000)
}
</script>

<input type="button" onclick="play_sound(493)" value="Test First" style="margin-left: 1rem">
<input type="button" onclick="play_sound(440)" value="Test Others">
