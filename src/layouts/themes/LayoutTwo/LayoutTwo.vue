<template>
  <div class="w-full h-full flex flex-row justify-start items-center">
    <div class="h-full">
      <slot name="aside"></slot>
    </div>

    <div
      class="h-full flex flex-col justify-start overflow-x-hidden overflow-visible flex-1"
      style="width: calc(100% - 160px)"
    >
      <div class="h-48px w-full">
        <slot name="header"></slot>
      </div>

      <div class="w-full" style="height: calc(100% - 48px)">
        <slot name="main"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
