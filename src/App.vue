<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    color: #000;
    a {
      color: inherit;
      text-decoration: none;
    }
    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .container {
      max-width: 1140px;
      margin: 0 auto;
    }
  }
</style>
