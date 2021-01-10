<template>
  <div class="home">
    <Header/>
    <Slide/>
  </div>
</template>

<script>
// Components
import Header from "@/components/header/header";
import Slide from "@/components/slide/slide";

export default {
  name: 'Home',
  components: {
    Header,
    Slide
  }
}
</script>
