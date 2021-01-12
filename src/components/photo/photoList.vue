<template>
  <ul class="photo-list">
    <loading v-if="loading"/>
    <photoItem
      v-for="(photo, index) in photos"
      :key="index"
      :imgSrcMain="photo.urls.small"
      :alt="photo.alt_description"
      :imgUser="photo.user.profile_image.small"
      :userName="photo.user.name"
      :mainLike="photo.likes"
      @data="dataLocal(photo)"
      v-else
    />
  </ul>
</template>

<script>
  import photoItem from "@/components/photo/photoItem";
  import loading from '@/components/loading'
  const accessKey = 'wrNdh1CzRuXK4Q8wa083yhC8sZoag7AXbXw6JZJvGzg'
  export default {
    name: "photoList",
    components: {
      photoItem,
      loading
    },
    data() {
      return {
        photos: [],
        loading: true,
        local: []
      }
    },
    mounted() {
      const get = `https://api.unsplash.com/photos?client_id=${accessKey}&per_page=50&orientation=squarish`
      this.axios.get(get).then(response => {
        this.photos = response.data
        this.loading = false
      })
    },
    methods: {
      dataLocal(value) {
        this.local.unshift(value)
        localStorage.setItem('data', JSON.stringify(this.local))
      }
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