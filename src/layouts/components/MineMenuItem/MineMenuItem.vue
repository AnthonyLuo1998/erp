<template>
  <template v-if="props.data.children && props.data.children.length > 0">
    <el-sub-menu :index="props.data.path">
      <template #title>
        <el-icon><span :class="props.data.meta?.icon"></span></el-icon>
        <span>{{ props.data.meta?.title }}</span>
      </template>

      <mine-menu-item
        v-for="item in props.data.children"
        :key="item.name"
        :data="item"
        :index="item.path"
      ></mine-menu-item>
    </el-sub-menu>
  </template>

  <template v-else>
    <el-menu-item :index="props.data.path">
      <template #title>{{ props.data.meta?.title }}</template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { RouteRecordPlus } from "@/router/types";
const props = defineProps({
  data: {
    type: Object as PropType<RouteRecordPlus>,
    required: true
  }
});
</script>
