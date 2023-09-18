<script>
export default {
  data() {
    return {};
  },
  props: {
    overview: String,
    poster_path: String,
    title: String,
    original_title: String,
    original_language: String,
    vote_average: Number,
  },
};
</script>

<template>
  <div class="col">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img
            v-if="poster_path"
            :src="'https://image.tmdb.org/t/p/' + 'w342/' + poster_path"
            alt="image series"
          />
          <img v-else class="img_not_found" src="no-image.png" alt="" />
        </div>
        <div class="flip-card-back">
          <div class="card-content">
            <h2 v-if="title !== original_title">{{ title }}</h2>
            <h2>{{ original_title }}</h2>
            <p class="fw-bold px-3 lh-sm">{{ overview }}</p>
            <div
              class="mt-2"
              v-if="
                ['de', 'en', 'fr', 'it', 'ja', 'es'].includes(original_language)
              "
            >
              <img
                class="flag mt-2"
                :src="'/flags/' + original_language + '.png'"
                alt="Language"
              />
            </div>
            <div v-else>
              <img class="flag" :src="'/flags/global.png'" alt="Language" />
            </div>
            <p class="stars">
              Vote:
              <font-awesome-icon
                v-for="stella in vote_average"
                icon="fa-solid fa-star"
                style="color: #fffc42"
              />
              <font-awesome-icon
                v-for="stella in 5 - vote_average"
                icon="fa-regular fa-star"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.col {
  color: white;
  .flag {
    width: 40px;
  }

  .img_not_found {
    width: 175px;
  }
}

.flip-card {
  cursor: pointer;

  .flip-card-inner {
    position: relative;
    width: 300px;
    height: 400px;
    border: none;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 300px;
    height: 400px;
    backface-visibility: hidden;
    text-align: center;
  }
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-width: 100%;
}
.flip-card-back {
  overflow: auto;
  background-color: black;
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
  .card-content {
    text-align: center;
    padding: 0 5px;
  }

  h2 {
    font-size: 1rem;
    margin-top: 0 !important;
  }

  p {
    font-size: 0.7rem;
    margin-bottom: 0 !important;
  }

  .stars {
    margin-top: 10px;
    font-size: 0.9rem;
  }
}
</style>
