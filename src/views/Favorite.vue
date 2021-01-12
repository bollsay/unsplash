<template>
  <div class="fav">
    <headers/>
    <div class="container">
      <ul v-if="favList.length" class="photo-list">
        <photoItem
            v-for="(photo, index) in JSON.parse(favList)"
            :key="index"
            :imgSrcMain="photo.urls.small"
            :alt="photo.alt_description"
            :imgUser="photo.user.profile_image.small"
            :userName="photo.user.name"
            :mainLike="photo.likes"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import headers from "@/components/header/header";
import photoItem from "@/components/photo/photoItem";
export default {
  name: "Favorite",
  components: {
    headers,
    photoItem
  },
  data() {
    return {
      favList: localStorage.getItem('data')
    }
  }
}
</script>

<style scoped>
  .photo-list {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-row-gap: 50px;
    margin-top: 50px;
  }
</style>