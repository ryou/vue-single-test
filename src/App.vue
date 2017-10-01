<template>
  <div id="app">
    <div class="l-main">
      <div class="l-container">
        <h1 class="heading">Gallery</h1>
        <gallery-component :images="photos"></gallery-component>
      </div>
    </div>
  </div>
</template>


<script>
import GalleryComponent from './Gallery.vue';
const photos = require('./data/photos.json');

export default {
  data: function() {
    return {
      photos: []
    };
  },
  components: {
    'gallery-component': GalleryComponent
  },
  created: function() {
    this.photos = photos;
  }
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }
  img {
    max-width: 100%;
    vertical-align: middle;
  }
  .l-main {
    padding: 50px 0;
  }
  .l-container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 10px;
    box-sizing: border-box;
  }
</style>

<style scoped>
.heading {
  font-size: 30px;
  font-weight: bold;
  text-align: center;

  margin-bottom: 30px;
}
</style>
