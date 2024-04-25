<script setup lang="ts">
import { ref, watchEffect } from "vue";
// 数字 字母 长度 大写字母 特殊符号
const props = defineProps({
  password: {
    type: String,
    required: true
  }
});

const rules = ref([
  {
    tips: "至少包含一个大写字母",
    rule: /[A-Z]{1}/,
    pass: false
  },
  {
    tips: "至少包含一个特殊字符",
    rule: /(?=.*[,\.#&!@\$\=\\(){}+<>\'\"/\?\|\[\]<>%'\+\*\-:;^_`]){1}/,
    pass: false
  },
  {
    tips: "至少包含8个字符,至多24个字符",
    rule: /^.{8,24}$/,
    pass: false
  },
  {
    rule: /^[^\u4E00-\u9FA5\uF900-\uFA2D\u0020]+$/,
    tips: "不能含有空格和中文",
    pass: false
  }
]);

watchEffect(() => {
  rules.value.forEach((rule) => {
    if (rule.rule.test(props.password)) {
      rule.pass = true;
    } else {
      rule.pass = false;
    }
  });
});
</script>

<template>
  <div class="w-full flex flex-col text-12px text-[rgb(123,123,123)]">
    <div class="flex items-center" v-for="item in rules" :key="item.tips">
      <span
        class="w-12px h-12px border-1 border-gray-300 border-solid border-rounded-50% inline-block mr-4px"
        :class="{ pass: item.pass }"
      ></span>
      <span>{{ item.tips }}</span>
    </div>
  </div>
</template>

<style scoped>
.pass {
  background: #2ed573;
  border: none;
}
</style>
