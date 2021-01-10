<template>
  <div class="slide">
    <div class="container">
      <div class="slide--wrap">
        <div class="slide-info">
          <h1 class="slide-info--headline">
            Senim Unsplash
          </h1>
          <p class="slide-info--desc">
            The internet’s source of freely-usable images.
            <br>
            Powered by creators everywhere.
          </p>
          <div class="slide-info--btn">
            <router-link to="/search" class="btn">
              Search
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "slide",

  }
</script>

<style lang="scss" scoped>
  .slide {
    margin-top: 30px;
    &--wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url("../../assets/slide-bg.jpg");
      background-color: #cccccc;
      height: 500px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    &-info {
      color: #fff;
      text-align: center;
      &--headline {
        margin-bottom: 15px;
        font-size: 42px;
      }
      &--desc {
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0.5px;
      }
      &--btn {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100px;
          height: 25px;
          background-color: #222f3e;
          font-size: 18px;
        }
      }
    }
  }
</style>