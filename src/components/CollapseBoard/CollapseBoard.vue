<script setup lang="ts">
const props = defineProps({
  collapse: {
    type: Boolean,
    default: false
  },
  size: {
    type: Number,
    default: 12
  },
  color: {
    type: String,
    default: "#000000"
  }
});

const emits = defineEmits(["change"]);
</script>

<template>
  <i
    class="i-carbon:side-panel-open"
    @click="emits('change', false)"
    :style="{ fontSize: `${props.size}px`, color: props.color }"
    v-if="props.collapse"
  ></i>

  <i
    class="i-carbon:side-panel-close"
    @click="emits('change', true)"
    v-else
    :style="{ fontSize: `${props.size}px`, color: props.color }"
  ></i>
</template>
