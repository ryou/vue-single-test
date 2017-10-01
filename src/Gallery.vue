<template>
  <div class="gallery">
    <div class="item" v-for="img in images">
      <lightbox-component :img="img"></lightbox-component>
    </div>
  </div>
</template>

<script>
import LBComponent from './LightBox.vue';

export default {
  data: function() {
    return {};
  },
  props: ['images'],
  components: {
    'lightbox-component': LBComponent
  }
};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;

  margin: -5px;
}
.item {
  flex-basis: 25%;
  padding: 5px;
  box-sizing: border-box;
}
</style>
