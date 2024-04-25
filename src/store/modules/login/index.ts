import { defineStore } from "pinia";
import type { modeOptions } from "./types";
import type { Component } from "vue";
import { ref, computed } from "vue";

// hooks
import { useDefaultLogin } from "./hooks/defaultLogin";
import { usePhoneLogin } from "./hooks/phoneLogin";
import { useRegister } from "./hooks/register";
import { useReset } from "./hooks/reset";

// 登录组件
import DefaultLogin from "@/views/Login/components/DefaultLogin/DefaultLogin.vue";
import PhoneLogin from "@/views/Login/components/PhoneLogin/PhoneLogin.vue";
import ResetPassword from "@/views/Login/components/ResetPassword/ResetPassword.vue";
import RegisterUser from "@/views/Login/components/RegisterUser/RegisterUser.vue";
import QrCodeLogin from "@/views/Login/components/QrCodeLogin/QrCodeLogin.vue";

export const useLoginStore = defineStore("login", () => {
  // 当前登录方式
  const mode = ref<modeOptions>("default");

  // 显示组件
  const modeCpt = computed((): Component => {
    switch (mode.value) {
      case "default":
        return DefaultLogin;
      case "phone":
        return PhoneLogin;
      case "reset":
        return ResetPassword;
      case "register":
        return RegisterUser;
      case "qrcode":
        return QrCodeLogin;
      default:
        return DefaultLogin;
    }
  });

  // 设置登录方式
  function SET_MODE(way: modeOptions) {
    mode.value = way;
  }

  // 返回默认登录方式
  function FORWARD_BACK() {
    mode.value = "default";
  }

  return {
    mode,
    modeCpt,
    SET_MODE,
    FORWARD_BACK,

    ...usePhoneLogin(),
    ...useDefaultLogin(),
    ...useRegister(),
    ...useReset()
  };
});
