<template>
  <div
    class="h-full w-160px transition-width box-border relative bg-#001529"
    :class="setting.asideCollapse ? 'w-64px' : 'w-200px'"
  >
    <div
      class="h-48px line-height-48px text-center text-24px overflow-hidden text-white"
    >
      <span v-show="!setting.asideCollapse">Anthony Admin</span>
    </div>
    <!-- 菜单导航 -->
    <el-menu
      :default-active="route.path"
      :collapse="setting.asideCollapse"
      :collapse-transition="false"
      router
      background-color="#001529"
      text-color="#ffffff"
    >
      <MineMenuItem
        v-for="item in menu.asideMenu"
        :key="item.name"
        :data="item"
      />
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useSettingStore } from "@/store/modules";
import { useMenuStore } from "@/store/modules";
import { useRoute } from "vue-router";
import MineMenuItem from "@/layouts/components/MineMenuItem/MineMenuItem.vue";
const setting = useSettingStore();
const menu = useMenuStore();
const route = useRoute();
</script>
