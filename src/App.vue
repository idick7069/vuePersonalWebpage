<template>
  <div id="app"   class="hide-overflow"
      style="position: relative;">
    <router-view name="Toolbar"></router-view>
    <div>
      <router-view></router-view>
      <router-view name="Footer"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  //忽略所有提示
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html::-webkit-scrollbar {
      display: none;
    }

</style>
