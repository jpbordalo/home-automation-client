<template>
  <div class="devices">
    <v-card>
      <LGTV />
    </v-card>
    <v-card>
      <Tuya />
    </v-card>
  </div>
</template>

<script>
import Tuya from "@/components/Tuya/Tuya.vue";
import LGTV from "@/components/LGTV/LGTV.vue";

export default {
  name: "Devices",

  components: {
    Tuya,
    LGTV,
  },
};
</script>

<style scoped>
.devices {
  display: flex;
}

.devices > * {
  display: flex;
  flex: 1;
}

.devices > *:not(:first-child) {
  margin-left: 20px;
}
</style>