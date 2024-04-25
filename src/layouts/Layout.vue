<template>
  <component :is="layoutMode">
    <!-- 头 -->
    <template #header>
      <MineHeader />
    </template>

    <!-- 侧边栏 -->
    <template #main>
      <MineMain />
    </template>

    <!-- 内容 -->
    <template #aside>
      <MineAside />
    </template>
  </component>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";
import { useSettingStore } from "@/store/modules";
import MineHeader from "@/layouts/default/header/MineHeader.vue";
import MineMain from "@/layouts/default/main/MineMain.vue";
import MineAside from "@/layouts/default/aside/MineAside.vue";

// 异步加载布局组件
const mode = [
  defineAsyncComponent(() => import("./themes/LayoutOne/LayoutOne.vue")),
  defineAsyncComponent(() => import("./themes/LayoutTwo/LayoutTwo.vue")),
  defineAsyncComponent(() => import("./themes/LayoutThree/LayoutThree.vue"))
];

const app = useSettingStore();

const layoutMode = computed(() => {
  return mode[app.layoutMode];
});
</script>
