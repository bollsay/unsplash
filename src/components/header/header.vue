<template>
  <header class="header">
    <div class="container">
      <div class="header--wrap">
        <router-link to="/" class="header-brand">
          Senim Unsplash
        </router-link>
        <nav class="header-nav">
          <vNav />
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
  import vNav from "@/components/header/nav";
  export default {
    name: "header",
    components: {
      vNav
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    &--wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 15px;
      background-color: #222f3e;
      color: #fff;
    }
    &-brand {
      font-size: 24px;
    }
  }
</style>