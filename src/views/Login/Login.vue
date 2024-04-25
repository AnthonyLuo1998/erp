<template>
  <div class="w-full h-full box-border cover p-x-6 relative">
    <div
      class="w-375px box-border p-x-20px absolute top-50% left-50% translate--50% flex justify-center items-center"
    >
      <component :is="login.modeCpt"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from "@/store/modules";

const login = useLoginStore();
</script>

<style scoped>
.cover {
  background: url("@/assets/images/login-cover.svg");
  background-repeat: no-repeat;
}
</style>
