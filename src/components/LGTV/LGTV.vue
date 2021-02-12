<template>
  <v-card tile>
    <div class="lgtv">
      <h1>LG TV</h1>
      <div class="lgtv__content">
        <div class="lgtv__power">
          <img v-if="!tvStatus" class="lgtv__icon" src="@/assets/tv-off.svg" />
          <img v-if="tvStatus" class="lgtv__icon" src="@/assets/tv-on.svg" />
          <img
            v-if="tvStatus"
            class="lgtv__icon lgtv__power-status"
            src="@/assets/tv-online.svg"
          />
          <img
            v-if="!tvStatus"
            class="lgtv__icon lgtv__power-status"
            src="@/assets/tv-offline.svg"
          />
          <img
            v-if="!tvStatus"
            @click="tvOn"
            class="lgtv__icon lgtv__power-action"
            src="@/assets/power-off.svg"
          />
          <img
            v-if="tvStatus"
            @click="tvOff"
            class="lgtv__icon lgtv__power-action"
            src="@/assets/power-on.svg"
          />
        </div>
        <div class="lgtv__volume">
          <div class="lgtv__volume-action">
            <button @click="volumeMute">
              <img class="lgtv__icon" src="@/assets/vol-mute.svg" />
            </button>
            <button @click="volumeDown">
              <img class="lgtv__icon" src="@/assets/vol-down.svg" />
            </button>
            <button @click="volumeUp">
              <img class="lgtv__icon" src="@/assets/vol-up.svg" />
            </button>
          </div>
        </div>
      </div>
      <v-btn
        class="lgtv__source themed-button"
        color="lighten-2"
        text
        @click="source"
        >Source</v-btn
      >
    </div>
  </v-card>
</template>

<script>
// https://www.flaticon.com/search/2?word=volume&search-type=icons&license=selection&order_by=4&color=1&stroke=2&grid=small
import lgtvService from "@/services/lgtv/lgtv.service";

export default {
  name: "LGTV",

  data() {
    return {
      tvStatus: false,
      audio: {
        level: 0,
        mute: false,
      },
    };
  },

  mounted() {
    this.fetchTvStatus();
  },

  methods: {
    fetchTvStatus() {
      lgtvService.fetchTvStatus().then(({ data }) => {
        const { tvStatus, audio } = data;
        this.tvStatus = tvStatus;
        this.audio = audio;
      });
    },

    volumeMute() {
      lgtvService.volumeMute().then(() => {
        this.tvStatus = true;
      });
    },

    volumeDown() {
      lgtvService.volumeDown().then(() => {
        this.tvStatus = true;
      });
    },

    volumeUp() {
      lgtvService.volumeUp().then(() => {
        this.tvStatus = true;
      });
    },

    tvOn() {
      lgtvService.tvOn().then(() => {
        setTimeout(() => {
          this.fetchTvStatus();
        }, 5000);
      });
    },

    tvOff() {
      lgtvService.tvOff().then(() => {
        this.tvStatus = false;
      });
    },

    source() {
      lgtvService.source().then(() => {
        // this.tvStatus = false;
      });
    },
  },
};
</script>

<style scoped>
::v-deep.v-card {
  width: 100%;
  display: flex;
}

h1 {
  font-weight: 400;
}

button {
  background: none;
  height: 40px;
  border: 1px solid #11b0b2;
  border-radius: 5px;
  cursor: pointer;
}

.lgtv {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}

.lgtv__content {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
}

/* .lgtv__content .lgtv__image {
  color: #fff;
  font-size: 30px;
} */

.actions button {
  margin-left: 5px;
}

.lgtv__source {
  margin-top: 20px;
}

.lgtv__icon {
  width: 40px;
  height: 40px;
}

.lgtv__power {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.lgtv__power-action {
  cursor: pointer;
}

.lgtv__power-status {
  margin-left: 10px;
  width: 25px;
  height: 25px;
}

.lgtv__power-action {
  margin-left: 10px;
  width: 30px;
  height: 30px;
}

.lgtv__volume h3 {
  margin: 0;
}

.lgtv__volume-action {
  display: flex;
}

.lgtv__volume-action button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lgtv__volume-action button:not(:last-child) {
  margin-right: 5px;
}

.lgtv__volume-action button img {
  width: 15px;
  height: 15px;
}

.v-card {
  box-shadow: none;
  border: 2px solid;
}

.v-btn.themed-button {
  border-style: solid;
  color: #858585;
  color: #fff;
}

.v-btn.themed-button:hover {
  border-color: white;
  color: white;
}
</style>
