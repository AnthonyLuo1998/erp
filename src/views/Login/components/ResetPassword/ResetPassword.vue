<script setup lang="ts">
import { useLoginStore } from "@/store/modules";
const login = useLoginStore();
</script>

<template>
  <div class="w-full h-full enter-x">
    <!-- tips -->
    <h2>重置密码</h2>

    <!-- 表单 -->
    <el-form>
      <el-form-item>
        <el-input placeholder="账号" v-model="login.resetData.username" />
      </el-form-item>

      <el-form-item>
        <el-input placeholder="手机号码" v-model="login.resetData.phone" />
      </el-form-item>

      <el-form-item>
        <div class="w-full flex justify-between gap-10px">
          <el-input
            placeholder="短信验证码"
            v-model="login.resetData.code"
            class="flex-1"
          />
          <el-button>获取验证码</el-button>
        </div>
      </el-form-item>

      <el-form-item
        ><el-button type="primary" :loading="false" class="w-full"
          >重置</el-button
        ></el-form-item
      >

      <el-form-item>
        <el-button :loading="false" class="w-full" @click="login.FORWARD_BACK()"
          >返回</el-button
        ></el-form-item
      >
    </el-form>
  </div>
</template>
