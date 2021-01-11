<template>
  <div class="search">
    <Header />
    <div class="container">
      <div class="search-wrap">
        <form class="search-form" @submit.prevent=""> <!--submit-->
          <div class="search-form--input">
            <img src="@/assets/loupe.svg" alt="loupe">
            <input
                type="text"
                v-model="value"
            >
          </div>
          <button type="submit">search</button>
        </form>
      </div>
      <ul class="photos-list">
        <li
            class="photos-list--item"
            v-for="photo in searchPhotos.results"
            :key="photo.id"
        >
          <img
              :src="photo.urls.small"
              :alt="photo.alt_description"
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/header/header";
  import {mapActions, mapGetters} from "vuex";

  export default {
    components: {
      Header
    },
    data() {
      return {
        value: 'red'
      }
    },
    computed: mapGetters(['searchPhotos']),
    methods: {
      ...mapActions(['fetchSearchPhoto']),
      // submit() {
      //   return this.value
      // }
    },
    mounted() {
      this.fetchSearchPhoto(this.value) // Если на прямую ввести запрос работает "this.fetchSearchPhoto('red')" или брать запрос с value "this.value"
    }
  }
</script>

<style lang="scss" scoped>
.search {
  &-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
   }
  &-form {
    display: flex;
  &--input {
    display: flex;
    align-items: center;
    border: 1px solid #000;
    padding: 5px;
    img {
      width: 16px;
      height: 16px;
      margin-right: 5px;
    }
    input {
      border: 0;
      outline: none;
    }
    }
    button {
      background-color: #222f3e;
      border: 0;
      color: #fff;
      padding: 5px 10px;
    }
  }
}
</style>