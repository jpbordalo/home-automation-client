<template>
  <v-card>
    <div class="socket">
      <img :src="device.icon" class="socket__image" />
      <div class="socket__data">
        <div>name: {{ device.name }}</div>
        <div>
          online:
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
        <div>state: {{ device.data.state }}</div>
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
  </v-card>
</template>

<script>
export default {
  name: "Socket",

  props: {
    device: {
      required: true,
    },
  },

  methods: {
    handleToggleStatus(device) {
      this.$emit("onToggleStatus", device);
    },
  },
};
</script>

<style scoped>
::v-deep.v-card {
  width: 100%;
}

.socket {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
}

.socket__image {
  width: 50px;
  height: 50px;
}

.socket__data {
  display: flex;
  flex-direction: column;
  flex: 1;
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