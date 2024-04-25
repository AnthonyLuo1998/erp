<template>
  <div
    class="h-full w-full flex flex-col justify-start overflow-x-hidden overflow-visible"
  >
    <div class="h-48px w-full">
      <slot name="header"></slot>
    </div>

    <div class="w-full" style="height: calc(100% - 48px)">
      <slot name="main"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
