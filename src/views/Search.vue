<template>
  <div class="search">
    <vHeader />
    <div class="container">
      <div class="search-wrap">
        <Search @search="searchPhoto" />
      </div>
      <ul class="photo-list" v-if="photos.length">
        <photoItem
            v-for="(photo, index) in photos"
            :key="index"
            :imgSrcMain="photo.urls.small"
            :alt="photo.alt_description"
            :imgUser="photo.user.profile_image.small"
            :userName="photo.user.name"
            :mainLike="photo.likes"
            @data="dataLocal(photo.urls.small)"
        />
      </ul>
      <p v-else style="text-align: center; margin-top: 50px">Введите что вы искали</p>
    </div>
  </div>
</template>

<script>
  import vHeader from "@/components/header/header";
  import Search from '@/components/search'
  import photoItem from '@/components/photo/photoItem'

  const accessKey = 'wrNdh1CzRuXK4Q8wa083yhC8sZoag7AXbXw6JZJvGzg'
  export default {
    components: {
      vHeader,
      Search,
      photoItem
    },
    data() {
      return {
        photos: []
      }
    },
    methods: {
      searchPhoto(value) {
        const get = `https://api.unsplash.com/search/photos?query=${value}&client_id=${accessKey}&per_page=50&orientation=squarish`
        this.axios.get(get).then(response => {
          this.photos = response.data.results
          value = ''
        })
      },
      dataLocal(value) {
        localStorage.setItem('data', JSON.stringify(value))
      }
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
  .photo-list {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-row-gap: 50px;
    margin-top: 50px;
  }
}
</style>