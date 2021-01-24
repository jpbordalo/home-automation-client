<template>
  <div class="voice">
    <v-btn
      @click="start"
      @mouseover="
        () => {
          hover = true;
        }
      "
      @mouseleave="
        () => {
          hover = false;
        }
      "
    >
      <img
        v-if="!recognizing"
        src="@/assets/microphone-off.svg"
        style="width: 20px"
      />
      <img
        v-if="recognizing"
        src="@/assets/microphone-on_2.svg"
        style="width: 20px"
      />
    </v-btn>

    <div class="results">
      <p class="hints" v-if="hover">
        <span v-for="(item, key) in ACTIONS_MAP" :key="key">
          {{ item.voiceCommand }},
        </span>
      </p>
      <div>
        <p class="output" v-if="voiceCommand">
          <em>Result received: {{ voiceCommand }}.</em>
        </p>
      </div>
    </div>

    <div v-if="false">
      <h1>Speech synthesiser</h1>

      <p>
        Enter some text in the input below and press return or the "play" button
        to hear it. change voices using the dropdown menu.
      </p>

      <form>
        <input type="text" class="txt" />
        <div>
          <label for="rate">Rate</label
          ><input
            type="range"
            min="0.5"
            max="2"
            value="1"
            step="0.1"
            id="rate"
          />
          <div class="rate-value">1</div>
          <div class="clearfix"></div>
        </div>
        <div>
          <label for="pitch">Pitch</label
          ><input
            type="range"
            min="0"
            max="2"
            value="1"
            step="0.1"
            id="pitch"
          />
          <div class="pitch-value">1</div>
          <div class="clearfix"></div>
        </div>
        <select></select>
        <div class="controls">
          <button id="play" type="submit">Play</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import speechToText from "./speechToText";
import { ACTIONS, ACTIONS_MAP } from "./actionsMapper";
console.log(ACTIONS);

export default {
  name: "Voice",

  data() {
    return {
      voiceCommand: undefined,
      recognizing: false,
      ACTIONS_MAP,
      hover: false,
    };
  },

  mounted() {
    speechToText.subscribe(
      (value) => this.parseVoiceCommand(value),
      (error) => console.log("Error", error)
    );

    speechToText.subscribeRecognizing((value) => {
      this.recognizing = value;
    });
  },

  destroyed() {
    speechToText.unsubscribe(this.parseVoiceCommand);
  },

  methods: {
    start() {
      speechToText.start();
    },

    parseVoiceCommand(value) {
      this.voiceCommand = value.transcript;
      const voiceCommand = this.voiceCommand.toLowerCase();
      const actionObject = ACTIONS_MAP.find(
        (item) => item.voiceCommand === voiceCommand
      );
      actionObject.action();
    },
  },
};
</script>

<style scoped>
.voice {
  /* margin: 20px; */
}

.hints {
  position: absolute;
  z-index: 1;
  padding: 5px;
  background-color: #fff;
  border: 1px solid;
  border-radius: 5px;
  width: 200px;
  top: 5px;
  left: -135px;
}

.results {
  position: relative;
}
</style>