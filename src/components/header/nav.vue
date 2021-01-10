<template>
  <ul class="header-nav--list">
    <li class="header-nav--item" v-for="(link, index) in links" :key="index">
      <router-link :to="link.src" class="header-nav--link">
        {{link.value | upperCase}}
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "nav",
    data() {
      return {
        links: [
          {
            src: `/`,
            value: 'Home'
          },
          {
            src: `/photo`,
            value: 'Photo'
          },
          {
            src: `/search`,
            value: 'Search'
          },
          {
            src: `/favorite`,
            value: 'Favorite'
          }
        ]
      }
    },
    filters: {
      upperCase(value) {
        return value.toUpperCase()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header-nav {
    &--list {
      display: flex;
    }
    &--item {
      margin-right: 30px;
      &:last-child {
        margin: 0;
      }
    }
    &--link {
      display: flex;
      justify-content: center;
      width: 90px;
      padding: 5px 0;
      transition: .5s;
      &:hover {
        background-color: #576574;
      }
    }
  }
</style>