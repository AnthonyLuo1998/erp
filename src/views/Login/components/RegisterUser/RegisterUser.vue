<script setup lang="ts">
import { useLoginStore } from "@/store/modules";
import PasswordValidate from "./components/PasswordValidate.vue";
const login = useLoginStore();
</script>

<template>
  <div class="w-full h-full enter-x">
    <!-- tips -->
    <h2>注册</h2>

    <!-- 表单 -->
    <el-form :rules="login.registerRules" :model="login.registerData">
      <el-form-item prop="username">
        <el-input
          placeholder="账户/用户名"
          v-model="login.registerData.username"
          clearable
        />
      </el-form-item>

      <el-form-item prop="phone">
        <el-input placeholder="手机号码" v-model="login.registerData.phone" />
      </el-form-item>

      <el-form-item prop="code">
        <el-input
          placeholder="短信验证码"
          v-model="login.registerData.code"
          class="flex-1"
        />
        <el-button class="ml-10px">获取验证码</el-button>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          placeholder="密码"
          show-password
          v-model="login.registerData.password"
          clearable
        />
      </el-form-item>

      <el-form-item>
        <PasswordValidate
          :password="login.registerData.password"
        ></PasswordValidate>
      </el-form-item>

      <el-form-item prop="repassword">
        <el-input
          placeholder="确认密码"
          show-password
          v-model="login.registerData.repassword"
          clearable
        />
      </el-form-item>

      <el-form-item prop="isAgree"
        ><el-checkbox v-model="login.registerData.isAgree"
          >我同意xxx隐私政策</el-checkbox
        ></el-form-item
      >

      <el-form-item>
        <el-button
          type="primary"
          :loading="false"
          class="w-full"
          @click="login.phoneLogin()"
          >注册</el-button
        >
      </el-form-item>

      <el-form-item>
        <el-button :loading="false" class="w-full" @click="login.FORWARD_BACK()"
          >返回</el-button
        ></el-form-item
      >
    </el-form>
  </div>
</template>
