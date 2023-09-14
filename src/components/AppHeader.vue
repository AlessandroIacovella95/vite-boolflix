<script>
export default {
  data() {
    return {
      term: "",
    };
  },

  emits: ["form-submit"],
};
</script>

<template>
  <div class="container my-3">
    <div>
      <h1>BOOLFLIX</h1>
    </div>
    <form class="w-25" @submit.prevent="$emit('form-submit', term)">
      <div class="input-group">
        <input
          v-model="term"
          type="text"
          class="form-control"
          placeholder="Cerca il titolo del film..."
        />
        <button class="btn btn-danger" type="button" id="button-addon2">
          Cerca
        </button>
      </div>
    </form>
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
