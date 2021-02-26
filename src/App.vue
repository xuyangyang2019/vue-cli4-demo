<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
// 自定义的reset
@import './styles/reset.css';
// 排版样式
// @import './styles/typo.css';
// 适应不同浏览器
// @import './styles/normalize.css';

// 公共的css
@import './styles/common.scss';

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
