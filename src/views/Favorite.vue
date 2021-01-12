<template>
  <div class="fav">
    <headers/>
    <favorite/>
  </div>
</template>

<script>
import headers from "@/components/header/header";
import favorite from "@/components/favorite";
export default {
  name: "Favorite",
  components: {
    headers,
    favorite
  }
}
</script>

<style scoped>

</style>