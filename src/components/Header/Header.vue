<template>
  <div class="header">
    <div class="header__logo">
      <img class="lgtv__icon" src="@/assets/logo.png" />
    </div>
    <Toolbar class="header__toolbar" />
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar/Toolbar.vue";

export default {
  name: "Header",

  components: {
    Toolbar,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  padding: 10px;
  height: 56px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.header__logo img {
  width: 36px;
  height: 36px;
}

.header__toolbar {
  flex: 1;
}
</style>