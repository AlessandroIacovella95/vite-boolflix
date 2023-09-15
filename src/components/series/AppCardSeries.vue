<script>
export default {
  data() {
    return {};
  },
  props: {
    poster_path: String,
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
      <ul class="mb-4">
        <li v-if="poster_path">
          <img
            class="custom_size"
            :src="'https://image.tmdb.org/t/p/' + 'w342/' + poster_path"
            alt="image series"
          />
        </li>
        <li v-else>
          <img class="img_not_found" src="no-image.png" alt="" />
        </li>
        <li>
          <span>{{ title }}</span>
        </li>
        <li>
          <span>{{ original_title }}</span>
        </li>
        <li
          v-if="
            ['de', 'en', 'fr', 'it', 'ja', 'es'].includes(original_language)
          "
        >
          <img
            class="flag"
            :src="'/flags/' + original_language + '.png'"
            alt="Language"
          />
        </li>
        <li v-else>
          <img class="flag" src="/flags/global.png" alt="" />
        </li>
        <li>
          <span>
            <font-awesome-icon
              v-for="stella in vote_average"
              icon="fa-solid fa-star"
              style="color: #fffc42"
            />
            <font-awesome-icon
              v-for="stella in 5 - vote_average"
              icon="fa-regular fa-star"
            />
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  color: white;

  .custom_size {
    max-width: 100%;
  }

  ul {
    list-style-type: none;
  }
  .flag {
    width: 40px;
  }

  .img_not_found {
    width: 175px;
  }
}
</style>
