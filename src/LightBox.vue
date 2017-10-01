<template>
  <div class="lightbox">
    <img :src="img.url" alt="" class="thumb" @click="modalIsVisible = true">
    <transition name="fade">
      <div class="modal" v-if="modalIsVisible">
        <div class="overlay" @click="modalIsVisible = false"></div>
        <div class="content">
          <img :src="img.url" alt="">
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      modalIsVisible: false
    };
  },
  props: [ 'img' ]
};
</script>

<style scoped>
  .lightbox {
    display: inline-block;
    vertical-align: middle;
  }
  .thumb {
    transition: opacity .2s;
  }
  .thumb:hover {
    opacity: .7;
    cursor: pointer;
  }
  .modal {
    position: fixed;
    top: 0; bottom: 0;
    left: 0; right: 0;
  }
  .overlay {
    position: absolute;
    width: 100%; height: 100%;

    background: rgba(0, 0, 0, 0.8);
  }
  .content {
    position: absolute;
    width: 100%; height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    pointer-events: none;
  }
  .content img {
    max-width: 90%;
    max-height: 90%;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
