<template>
  <li class="photo-list--item">
    <div class="photo-list--img">
      <img
          :src="imgSrcMain"
          :alt="alt"
          style="display: block"
      >
      <div class="photo-list--info">
          <span class="photo-list--user">
            <img
                :src="imgUser"
                alt="error"
                class="photo-list--logo"
            >
            <span class="photo-list--name">{{userName}}</span>
          </span>
        <span class="photo-list--like">
            Like: {{mainLike}}
          </span>
        <button class="photo-list--add">
          ADD
        </button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "photoItem",
  props: ['imgSrcMain', 'alt','imgUser','userName','mainLike']
}
</script>

<style lang="scss" scoped>
.photo-list {
  &--item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &--info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    background-color: #2c3e50;
    color: #fff;
  }
  &--user {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &--name {
    font-size: 20px;
  }
  &--logo {
    margin-right: 20px;
  }
  &--like {
    font-size: 20px;
  }
  &--add {
    background-color: transparent;
    border: 1px solid #fff;
    padding: 5px 10px;
    color: #fff;
    outline: none;
    cursor: pointer;
  }
}
</style>