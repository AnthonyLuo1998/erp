<template>
  <div class="w-full h-full p-10px box-border">
    <el-row :gutter="10">
      <el-col :span="12">
        <el-card>
          <template #header>
            <div class="flex justify-between">
              <span>图片预览（指令:需要全局注册）</span>
            </div>
          </template>
          <div v-viewer>
            <img v-for="src in images" :key="src" :src="src" />
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <template #header>
            <div class="flex justify-between">
              <span>图片预览（组件）</span>
            </div>
          </template>
          <Viewer :images="images">
            <img v-for="src in images" :key="src" :src="src" />
          </Viewer>
        </el-card>
      </el-col>
    </el-row>

    <div class="h-10px"></div>

    <el-row :gutter="10">
      <el-col :span="12">
        <el-card>
          <template #header>
            <div class="flex justify-between">
              <span>图片预览（api）</span>
              <el-button type="primary" @click="show">预览</el-button>
            </div>
          </template>
          <div>
            <img v-for="src in images" :key="src" :src="src" />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import "viewerjs/dist/viewer.css";
import { component as Viewer, api as viewerApi } from "v-viewer";

const images = [
  "https://picsum.photos/200/200",
  "https://picsum.photos/300/200"
];

const show = () => {
  viewerApi({
    images
  });
};
</script>
