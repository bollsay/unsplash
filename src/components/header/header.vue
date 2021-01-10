<template>
  <header class="header">
    <div class="container">
      <div class="header--wrap">
        <router-link to="/" class="header-brand">
          Senim Unsplash
        </router-link>
        <nav class="header-nav">
          <Nav />
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
  import Nav from "@/components/header/nav";
  export default {
    name: "header",
    components: {
      Nav
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