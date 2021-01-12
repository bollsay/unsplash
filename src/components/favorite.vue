<template>
  <div class="container" style="margin-top: 50px">
    <ul>
      <li v-for="(item, index) in favList" :key="index">
        <img :src="item" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "favorite",
    data() {
      return {
        favList: []
      }
    },
    mounted() {
      const get = localStorage.getItem('data')
      this.favList.unshift(JSON.parse(get))
      console.log(typeof this.favList)
    }
  }
</script>

<style scoped>

</style>