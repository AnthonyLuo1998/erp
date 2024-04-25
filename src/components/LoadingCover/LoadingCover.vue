<template>
  <div
    class="h-100vh w-100vw bg-white fixed top-0 left-0 z-999 flex justify-center items-center flex-col gap-10"
  >
    <!-- logo -->
    <div class="text-center text-10 text-cyan-600">
      <span>Anthony Admin</span>
    </div>

    <!-- loading -->
    <div class="loading">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>

    <!-- tips -->
    <div class="text-center text-6 text-blue-500">
      <span>Layout Loading</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.loading {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
}

.loading .item {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
}

.loading .item:nth-child(1) {
  border-bottom: 7px solid #1890ff;
  transform: rotateX(15deg) rotateY(-45deg);
  animation: rotate_one 1s linear infinite -0.8s;
}

.loading .item:nth-child(2) {
  border-bottom: 7px solid #f40968;
  transform: rotateX(50deg) rotateY(10deg);
  animation: rotate_two 1s linear infinite -0.4s;
}

.loading .item:nth-child(3) {
  border-bottom: 7px solid #77d970;
  transform: rotateX(35deg) rotateY(55deg);
  animation: rotate_three 1s linear infinite;
}

@keyframes rotate_one {
  to {
    transform: rotateX(15deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes rotate_two {
  to {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes rotate_three {
  to {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
</style>
