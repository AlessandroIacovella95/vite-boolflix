<script>
export default {
  data() {
    return {};
  },
  props: {
    title: String,
    original_title: String,
    original_language: String,
    vote_average: Number,
  },
};
</script>

<template>
  <section class="container">
    <div class="col">
      <ul>
        <li>
          <span>{{ title }}</span>
        </li>
        <li>
          <span>{{ original_title }}</span>
        </li>
        <li v-if="['de', 'en', 'fr', 'it'].includes(original_language)">
          <img :src="'/flags/' + original_language + '.png'" alt="Language" />
        </li>
        <li v-else>
          <span>{{ original_language }}</span>
        </li>
        <li>
          <span> vote: {{ vote_average }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  color: white;
  img {
    width: 40px;
  }
}
</style>
