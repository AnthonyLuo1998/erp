<template>
  <div
    class="h-full w-full flex flex-col justify-start overflow-x-hidden overflow-visible"
  >
    <div class="h-48px w-full">
      <slot name="header"></slot>
    </div>

    <div
      class="w-full flex flex-row justify-start items-center"
      style="height: calc(100% - 48px)"
    >
      <div class="h-full">
        <slot name="aside"></slot>
      </div>

      <div class="h-full flex-1">
        <slot name="main"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
