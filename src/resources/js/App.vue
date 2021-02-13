<template>
  <div id="app">
    <el-container>
      <top-menu-bar />
      <el-container>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
      <el-footer>Page Footer</el-footer>
    </el-container>
  </div>
</template>

<script>

import TopMenuBar from './components/common/TopMenuBar'

export default {
  components: {
    TopMenuBar
  }
}
</script>>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-header, .el-footer {
  background-color: #00afcc;
  color: #f8f4e6;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}

</style>
