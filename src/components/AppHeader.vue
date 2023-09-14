<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="container my-3">
    <div>
      <h1>BOOLFLIX</h1>
    </div>
    <div class="input-group w-25">
      <input
        type="text"
        class="form-control"
        placeholder="Cerca il titolo di un film"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
      />
      <button class="btn btn-danger" type="button" id="button-addon2">
        Button
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: red;
    font-weight: bold;
  }
}
</style>
