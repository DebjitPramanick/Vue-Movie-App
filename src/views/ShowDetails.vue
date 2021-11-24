<template>
  <div class="container">
    <h2>Show Details</h2>
    <div class="show-details">
      <div class="img-container">
        <img :src="show.Poster" alt="" />
      </div>
      <div class="details">
        <h3>{{ show.Title }}</h3>
        <p>{{ show.Year }}</p>
        <p>{{ show.Type }}</p>
        <p>{{ show.Runtime }}</p>
        <p>{{ show.Released }}</p>
        <p>{{ show.Plot }}</p>
        <p>Writers: {{ show.Writer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import env from "@/env.js";

export default {
  name: "ShowDetails",
  setup() {
    const show = ref({});
    const route = useRoute();

    onBeforeMount(() => {
      fetch(
        `https://www.omdbapi.com/?apiKey=${env.apiKey}&i=${route.params.id}&plot=full`
      )
        .then((res) => res.json())
        .then((data) => {
          show.value = data;
        });
    });

    return {
      show,
    };
  },
};
</script>

<style scoped>
.container{
    max-width: 600px;
    margin: auto
}
.show-details {
  border-radius: 6px;
  overflow: hidden;
  background: #131313;
  margin-top: 20px
}
.show-details .img-container{
    display: flex;
    align-items: center;
    justify-content: center;
    height: fit-content;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.show-details .img-container img{
    width: 100%
}

.show-details .details {
  padding: 10px;
  color: white;
}
.show-details .details p {
  margin-top: 6px;
}
.show-details .details h3 {
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
}
</style>