<template>
  <div class="photo">
    <Header/>
    <div class="container">
      <PhotoList/>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/header/header";
  import PhotoList from "@/components/photo/photoList";
  export default {
    components: {
      Header,
      PhotoList
    }
  }
</script>