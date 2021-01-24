<template>
  <div class="toolbar">
    <div class="item">
      <Voice />
    </div>
  </div>
</template>

<script>
import Voice from "@/components/Voice/Voice.vue";

export default {
  name: "Toolbar",

  components: {
    Voice,
  },
};
</script>

<style scoped>
.toolbar {
  display: flex;
  justify-content: flex-end;
  margin: 10px;
}

.item {
  margin-left: 10px;
}
</style>