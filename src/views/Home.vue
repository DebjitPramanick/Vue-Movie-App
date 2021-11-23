<template>
  <div class="container">
    <form @submit.prevent="searchMovies" class="search-box">
      <input type="search" placeholder="Search shows" v-model="search" />
      <input type="submit" value="Search" class="btn" />
    </form>
    <div class="card-container">
      <div class="feature-card" v-for="show in shows" :key="show.imdbId">
        <router-link :to="'/show/' + show.imdbId">
          <div class="img-container" :style="'background-image: url('+show.Poster+')'">
            <!-- <img :src="show.Poster" alt="" /> -->
          </div>
          <div class="details">
            <h3>{{ show.Title }}</h3>
            <p>{{ show.Year }}</p>
            <p>{{ show.Type }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import env from "@/env.js";
export default {
  name: "Home",
  setup() {
    const search = ref("");
    const shows = ref([]);

    const searchMovies = () => {
      if (search.value !== "") {
        fetch(`https://www.omdbapi.com/?apiKey=${env.apiKey}&s=${search.value}`)
          .then((res) => res.json())
          .then((data) => {
            shows.value = data.Search;
            search.value = "";
          });
      }
    };

    return {
      search,
      shows,
      searchMovies,
    };
  },
};
</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  column-gap: 16px;
  row-gap: 16px;
}
.feature-card {
  border-radius: 6px;
  overflow: hidden;
  background: #131313;
}
.feature-card .img-container{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 160px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.feature-card .details {
  padding: 10px;
  color: white;
}
.feature-card .details p {
  margin-top: 6px;
}
.feature-card .details h3 {
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
}
.search-box {
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  column-gap: 16px;
}

.search-box input {
  width: 100%;
  padding: 8px 10px;
  font-size: 16px;
  border-radius: 2px;
  outline: 0;
  border: 0;
}
.search-box .btn {
  width: fit-content;
  text-align: center;
  cursor: pointer;
  background: #42b883;
  color: #fff;
}
</style>