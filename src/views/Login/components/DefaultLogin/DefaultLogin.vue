<script setup lang="ts">
import { useLoginStore } from "@/store/modules";
import type { FormInstance } from "element-plus";
import { ref } from "vue";

const login = useLoginStore();

const ruleFormRef = ref<FormInstance>();

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

// const resetForm = (formEl: FormInstance | undefined) => {
//   if (!formEl) return;
//   formEl.resetFields();
// };
</script>

<template>
  <div class="w-full h-full enter-x">
    <!-- tips -->
    <h2>登录</h2>

    <!-- 表单 -->
    <el-form
      ref="ruleFormRef"
      :rules="login.defaultLoginRules"
      :model="login.defaultLoginData"
    >
      <el-form-item prop="username">
        <el-input
          placeholder="账户"
          v-model="login.defaultLoginData.username"
        />
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          placeholder="密码"
          show-password
          v-model="login.defaultLoginData.password"
        />
      </el-form-item>

      <el-form-item>
        <div class="w-full flex justify-between items-center text-14px">
          <el-checkbox v-model="login.defaultLoginData.isRemember"
            >记住我</el-checkbox
          >
          <span
            class="text-blue-900 cursor-pointer"
            @click="login.SET_MODE('reset')"
            >忘记密码？</span
          >
        </div>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          :loading="false"
          class="w-full"
          @click="submitForm(ruleFormRef)"
          >登录</el-button
        >
      </el-form-item>

      <el-form-item>
        <el-button @click="login.SET_MODE('phone')">手机登录</el-button>
        <el-button @click="login.SET_MODE('qrcode')">二维码登录</el-button>
        <el-button @click="login.SET_MODE('register')">注册</el-button>
      </el-form-item>

      <el-form-item>
        <el-divider content-position="center">其他登录方式</el-divider>
        <div
          class="w-full text-28px flex flex-row justify-around gap-20px text-gray-500"
        >
          <el-tooltip effect="dark" content="微信" placement="bottom">
            <i class="i-carbon:logo-wechat hover:text-blue cursor-pointer"></i>
          </el-tooltip>

          <el-tooltip effect="dark" content="GitHub" placement="bottom">
            <i class="i-carbon:logo-github hover:text-blue cursor-pointer"></i>
          </el-tooltip>

          <el-tooltip effect="dark" content="Discord" placement="bottom">
            <i class="i-carbon:logo-discord hover:text-blue cursor-pointer"></i>
          </el-tooltip>

          <el-tooltip effect="dark" content="Twitter" placement="bottom">
            <i class="i-carbon:logo-twitter hover:text-blue cursor-pointer"></i>
          </el-tooltip>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
