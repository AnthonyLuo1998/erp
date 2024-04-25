<template>
  <div
    class="fixed top-50% right-0 translate-y--50%"
    v-show="route.name !== 'Login'"
  >
    <el-button type="primary" @click="drawer = true"> Setting </el-button>
  </div>

  <el-drawer v-model="drawer" :with-header="false">
    <div class="overflow-visible overflow-x-hidden">
      <el-divider content-position="center">布局主题</el-divider>
      <el-button type="primary" @click="setting.SET_LAYOUT_MODE(0)"
        >mode0</el-button
      >
      <el-button type="primary" @click="setting.SET_LAYOUT_MODE(1)"
        >mode1</el-button
      >
      <el-button type="primary" @click="setting.SET_LAYOUT_MODE(2)"
        >mode2</el-button
      >

      <el-divider content-position="center">颜色主题</el-divider>
      <el-button type="primary" @click="setting.SET_THEME_MODE()"
        >theme</el-button
      >
    </div>
  </el-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useSettingStore } from "@/store/modules";
import { useRoute } from "vue-router";

const drawer = ref(false);
const setting = useSettingStore();
const route = useRoute();
</script>
