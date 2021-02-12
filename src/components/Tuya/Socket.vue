<template>
  <v-card tile>
    <div class="socket">
      <h1>{{ device.name }}</h1>
      <div class="socket__content">
        <!-- <img :src="device.icon" class="socket__image" /> -->
        <v-icon class="socket__image">mdi-power-socket-de</v-icon>
        <div class="socket__data">
          <!-- <div>name: {{ device.name }}</div> -->
          <div>
            <!-- online: -->
            <img
              v-if="device.data.online"
              class="socket__power-status"
              src="../../assets/tv-online.svg"
            />
            <img
              v-if="!device.data.online"
              class="socket__power-status"
              src="../../assets/tv-offline.svg"
            />
          </div>
          <!-- <div>state: {{ device.data.state }}</div> -->
        </div>
        <img
          v-if="!device.data.state"
          @click="handleToggleStatus(device)"
          class="socket__power-action"
          src="../../assets/power-off.svg"
        />
        <img
          v-if="device.data.state"
          @click="handleToggleStatus(device)"
          class="socket__power-action"
          src="../../assets/power-on.svg"
        />
      </div>
    </div>
  </v-card>
</template>

<script>
import tuyaService from "@/services/tuya/tuya.service";

export default {
  name: "Socket",

  props: {
    device: {
      required: true,
    },
  },

  methods: {
    handleToggleStatus(device) {
      const { id, data } = device;
      tuyaService
        .handleToggleStatus(id, !data.state)
        .then(() => {
          device.data.state = !device.data.state;
        })
        .catch((error) => {
          console.error("Error:", error);
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

.socket {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  flex: 1;
}

h1 {
  font-weight: 400;
}

.socket__content {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}

.socket__content .socket__image {
  /* width: 50px;
  height: 50px; */
  color: #fff;
  font-size: 30px;
}

.socket__data {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 20px;
  /* width: 170px; */
}

.socket__power-status {
  margin-left: 10px;
  width: 25px;
  height: 25px;
}

.socket__power-action {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>