<template>
  <div class="voice">
    <div>
      <p class="hints">
        <v-btn @click="start"> Tap/click and speak an action.</v-btn>
        <span v-for="(item, key) in ACTIONS_MAP" :key="key">
          {{ item.voiceCommand }},
        </span>
      </p>
      <div>
        <p class="output">
          <em v-if="recognizing">recognizing...</em>
          <em v-if="voiceCommand">Result received: {{ voiceCommand }}.</em>
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
import lgtvService from "@/services/lgtv/lgtv.service";

const ACTIONS = {
  VOLUME_UP: "VOLUME_UP",
  VOLUME_DOWN: "VOLUME_DOWN",
  VOLUME_MUTE: "VOLUME_MUTE",
};

const ACTIONS_MAP = [
  {
    voiceCommand: "mais alto",
    actions: ACTIONS.VOLUME_UP,
  },
  {
    voiceCommand: "mais baixo",
    actions: ACTIONS.VOLUME_DOWN,
  },
  {
    voiceCommand: "mute",
    actions: ACTIONS.VOLUME_MUTE,
  },
];

console.log(ACTIONS, ACTIONS_MAP);

export default {
  name: "Voice",

  data() {
    return {
      voiceCommand: undefined,
      recognizing: false,
      ACTIONS_MAP,
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
      const action = actionObject ? actionObject.action : null;

      if (action === ACTIONS.VOLUME_UP) {
        this.volumeUp();
      }
      if (action === ACTIONS.VOLUME_DOWN) {
        this.volumeDown();
      }
      if (action === ACTIONS.VOLUME_MUTE) {
        this.volumeMute();
      }
    },

    volumeDown() {
      lgtvService.volumeDown().then((res) => {
        console.log(res);
      });
    },

    volumeUp() {
      lgtvService.volumeUp().then((res) => {
        console.log(res);
      });
    },

    volumeMute() {
      lgtvService.volumeMute().then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style scoped>
.voice {
  margin: 20px;
}
</style>