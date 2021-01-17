<template>
  <div class="tuya">
    <h1>Tomadas</h1>
    <template>
      <div class="actions">
        <v-btn color="primary" @click="handleDevices">Get devices</v-btn>
      </div>
      <ul class="devices">
        <li v-for="device in devices" :key="device.id" class="device-item">
          <Socket :device="device" @onToggleStatus="handleToggleStatus" />
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import tuyaService from "@/services/tuya/tuya.service";
import Socket from "@/components/Tuya/Socket.vue";

class Device {
  constructor(deviceData) {
    this.data = {
      online: deviceData.data.online,
      state: deviceData.data.state,
    };
    this.dev_type = deviceData.dev_type;
    this.ha_type = deviceData.ha_type;
    this.icon = deviceData.icon;
    this.id = deviceData.id;
    this.name = deviceData.name;
  }
}

export default {
  name: "Tuya",
  props: {
    msg: String,
  },
  components: {
    Socket,
  },
  data() {
    return {
      devices: [],
    };
  },

  methods: {
    handleDevices() {
      tuyaService.handleDevices(this.accessToken).then(({ data }) => {
        const devices = data.devices;
        this.devices = this.processDevices(devices);
      });
    },

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

    processDevices(devices) {
      return devices.map((device) => new Device(device));
    },
  },
};
</script>

<style scoped>
.tuya {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  padding: 20px;
  width: 420px;
}

.actions v-btn {
  margin-left: 5px;
}

.devices {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: 400px;
}

.device-item {
  display: flex;
  align-items: center;
  padding: 10px;
}
</style>
