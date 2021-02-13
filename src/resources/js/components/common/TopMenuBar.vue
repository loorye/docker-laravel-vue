<template>
  <el-menu
    default-active="home"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#00afcc"
    text-color="#f8f4e6"
    active-text-color="#ffa500"
    router
  >
    <el-menu-item :route="{ name:'home' }" index="home">
      <i class="el-icon-s-home"></i>
      <span>Home</span>
    </el-menu-item>
    <el-menu-item :route="{ name:'example' }" index="about">
      <i class="el-icon-document"></i>
      <span>Example</span>
    </el-menu-item>
  </el-menu>

</template>
