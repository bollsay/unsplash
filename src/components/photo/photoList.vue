<template>
  <ul class="photo-list">
    <photoItem
      v-for="(photo, index) in photos"
      :key="index"
      :imgSrcMain="photo.urls.small"
      :alt="photo.alt_description"
      :imgUser="photo.user.profile_image.medium"
      :userName="photo.user.name"
      :mainLike="photo.likes"
    />
  </ul>
</template>

<script>
  import photoItem from "@/components/photo/photoItem";
  const accessKey = 'wrNdh1CzRuXK4Q8wa083yhC8sZoag7AXbXw6JZJvGzg'
  export default {
    name: "photoList",
    components: {
      photoItem
    },
    data() {
      return {
        photos: []
      }
    },
    mounted() {
      const get = `https://api.unsplash.com/photos?client_id=${accessKey}&per_page=50&orientation=squarish`
      this.axios.get(get).then(response => {
        this.photos = response.data
      })
    }
  }
</script>

<style lang="scss" scoped>
  .photo-list {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-row-gap: 50px;
    margin-top: 50px;
  }
</style>