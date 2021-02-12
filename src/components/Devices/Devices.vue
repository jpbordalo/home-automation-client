<template>
  <div class="devices">
    <LGTV class="devices__device-item" />
    <Socket
      v-for="device in devices"
      :key="device.id"
      :device="device"
      class="devices__device-item col-md-4 col"
    />
  </div>
</template>

<script>
import Socket from "@/components/Tuya/Socket.vue";
import LGTV from "@/components/LGTV/LGTV.vue";
import tuyaService from "@/services/tuya/tuya.service";

export default {
  name: "Devices",

  components: {
    Socket,
    LGTV,
  },

  data() {
    return {
      devices: [],
    };
  },

  mounted() {
    this.getDevices();
  },

  methods: {
    getDevices() {
      tuyaService.handleDevices(this.accessToken).then(({ data }) => {
        const devices = data.devices;
        this.devices = devices;
      });
    },
  },
};
</script>

<style scoped>
::v-deep .devices__device-item.v-card {
  color: #fff;
  box-shadow: none;
  border: none;
  background: #3e4355;
  height: 250px;
  width: calc(calc(100% - calc(20px * 3)) / 3);
  float: left;
}

::v-deep .devices__device-item.v-card:not(:nth-child(3n + 1)) {
  margin-left: 20px;
}

::v-deep .devices__device-item.v-card:not(:nth-child(-n + 3)) {
  margin-top: 20px;
}
</style>