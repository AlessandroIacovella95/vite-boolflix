<script>
export default {
  data() {
    return {};
  },

  props: {
    loadingText: String,
  },
};
</script>

<template>
  <div class="layover d-flex flex-column">
    <span><font-awesome-icon icon="fa-solid fa-bolt-lightning" bounce /></span>
    <span>{{ loadingText || "Loading" }}</span>
  </div>
</template>

<style lang="scss" scoped>
.layover {
  position: fixed;
  z-index: 5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(155, 155, 155, 0.3);
  backdrop-filter: blur(5px);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
  font-weight: 600;

  .fa-bolt-lightning {
    font-size: 50px;
  }
}
</style>
