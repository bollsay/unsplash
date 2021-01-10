<template>
  <ul class="photo-list">
    <li class="photo-list--item" v-for="photo in allPhotos" :key="photo.id">
      <div class="photo-list--img">
        <img :src="photo.urls.small" :alt="photo.alt_description">
      </div>
      <div class="photo-list--info">
        <span class="photo-list--user">
          <img :src="photo.user.profile_image.small" alt="" class="photo-list--logo">
          <span class="photo-list--name">{{photo.user.name}}</span>
        </span>
        <span class="photo-list--like">
          Like: {{photo.likes}}
        </span>
      </div>
    </li>
  </ul>
</template>

<script>
  import {mapActions, mapGetters} from "vuex"

  export default {
    name: "photoList",
    computed: mapGetters(['allPhotos']),
    methods: mapActions(['fetchPhoto']),
    mounted() {
      this.fetchPhoto()
    }
  }
</script>

<style lang="scss" scoped>
  .photo-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin: 50px 0;
    &--item {
      display: flex;
      flex-direction: column;
      margin: 15px 0;
    }
    &--info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 25px;
      background-color: #2e86de;
    }
    &--user {
      display: flex;
      align-items: center;
      img {
        margin-right: 20px;
      }
    }
    &--like {

    }
  }
</style>