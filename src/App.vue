<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <!-- fontawesome图标 -->
    <i class="fa fa-address-book-o" aria-hidden="true"></i>
    <!-- iconfont图标 -->
    <span class="iconfont icon-info"></span>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-success"></use>
    </svg>
    <!-- element-ui -->
    <el-button type="primary" size="small">button</el-button>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

// iconfont svg
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

//手机端
@media screen and (max-width: 767px) {
  #app {
    border: solid red 1px;
  }
}

//平板
@media screen and (min-width: 768px) {
  #app {
    border: solid yellow 1px;
  }
}

//小屏幕pc端
@media screen and (min-width: 992px) {
  #app {
    border: solid blue 1px;
  }
}

//大屏幕pc端
@media screen and (min-width: 1200px) {
  #app {
    border: solid $border-color-1 1px;
  }
}
</style>
