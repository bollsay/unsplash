<template>
  <div class="photo">
    <vHeader/>
    <div class="container">
      <PhotoList/>
    </div>
  </div>
</template>

<script>
  import vHeader from "@/components/header/header";
  import PhotoList from "@/components/photo/photoList";
  export default {
    components: {
      vHeader,
      PhotoList
    }
  }
</script>