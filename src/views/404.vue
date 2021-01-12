<template>
  <div class="box404">
    <div class="container">
      <div class="box">
        <h1>
          404
        </h1>
        <router-link to="/" class="link">Home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "404"
}
</script>

<style lang="scss" scoped>
  .box404 {
    .box {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100vh;
      h1 {
        margin-bottom: 50px;
      }
      .link {
        text-decoration: underline;
      }
    }
  }
</style>