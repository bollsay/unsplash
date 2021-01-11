<template>
  <div class="search-form">
    <div class="search-form--input">
      <img src="@/assets/loupe.svg" alt="loupe" width="16" height="16">
      <input
          type="text"
          v-model="value"
          placeholder="Поиск"
      >
    </div>
    <button
        type="submit"
        @click="$emit('search', value)"
        class="search-form--btn"
    >
      Поиск
    </button>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .search-form {
    display: flex;
    &--input {
      display: flex;
      align-items: center;
      padding: 10px 5px 10px 0;
      border: 1px solid #000;
      img {
        display: block;
        width: 50px;
      }
      input {
        border: 0;
        outline: none;
      }
    }
    &--btn {
      display: block;
      width: 80px;
      background-color: transparent;
      border: 1px solid #000;
      border-left: 0;
      cursor: pointer;
      outline: none;
    }
  }
</style>