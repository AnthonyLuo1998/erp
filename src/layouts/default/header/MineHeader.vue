<script setup lang="ts">
import { useSettingStore } from "@/store/modules";
import CollapseBoard from "@/components/CollapseBoard/CollapseBoard.vue";
const setting = useSettingStore();
</script>

<template>
  <div
    class="w-full h-full flex flex-row justify-between items-center cs-shadow box-border p-x-6 relative z-1"
  >
    <!-- logo -->
    <div v-if="[0, 2].includes(setting.layoutMode)" class="text-white">
      <h3>Anthony Admin</h3>
    </div>

    <!-- 折叠按钮 -->
    <div
      class="hover:bg-[rgb(245,245,245)] h-full w-40px flex justify-center items-center cursor-pointer"
      @click="setting.SET_ASIDE_COLLAPSE()"
      v-if="setting.layoutMode === 1"
    >
      <CollapseBoard
        :size="20"
        :collapse="setting.asideCollapse"
      ></CollapseBoard>
    </div>

    <!-- 菜单导航 -->
    <div class="h-full flex-1 text-center flex justify-center items-center">
      <el-menu
        v-if="setting.layoutMode === 2"
        :default-active="1"
        class="el-menu-demo"
        mode="horizontal"
      >
        <el-menu-item index="1">Processing Center</el-menu-item>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-menu-item index="2-4">item one</el-menu-item>
        <el-menu-item index="2-5">item two</el-menu-item>
      </el-menu>
    </div>

    <!-- 右侧用户菜单 -->
    <div class="w-60"></div>
  </div>
</template>
