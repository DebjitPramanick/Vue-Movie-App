<template>
  <div class="container">
      <form @submit.prevent="" class="search-box">
          <input type="search" placeholder="Search shows">
          <input type="submit" value="Search" class="btn">
      </form>
    <div class="card-container">
      <div class="feature-card" v-for="show in shows" :key="show">
        <router-link to="/show/12345">
          <img
            src="https://static.posters.cz/image/750/poster/naruto-hokage-i30382.jpg"
            alt=""
          />
          <div class="details">
            <h3>Naruto</h3>
            <p>Ninja Anime</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      shows: [1, 2, 3, 4, 5, 6, 7, 8],
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
.feature-card img {
  width: 100%;
}
.feature-card .details {
  padding: 10px;
  color: white;
}
.search-box{
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    column-gap: 16px;
}

.search-box input{
    width: 100%;
    padding: 8px 10px;
    font-size: 16px;
    border-radius: 2px;
    outline: 0;
    border: 0
}
.search-box .btn{
    width: fit-content;
    text-align: center;
    cursor: pointer;
    background: #42B883;
    color: #fff;
}
</style>