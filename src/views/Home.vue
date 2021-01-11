<template>
  <div class="home">
    <vHeader/>
    <Slide/>
  </div>
</template>

<script>
// Components
import vHeader from "@/components/header/header";
import Slide from "@/components/slide/slide";

export default {
  name: 'Home',
  components: {
    vHeader,
    Slide
  }
}
</script>
