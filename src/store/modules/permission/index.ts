import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { ref } from "vue";

export const usePermissionStore = defineStore("permission", () => {
  // 是否登陆
  const isLogin = ref<boolean>(false);

  // token
  const token = useStorage("token", "", localStorage);

  // 用户信息
  const userInfo = useStorage(
    "user_info",
    { nickName: "未登录", roles: [] as Array<string>, avatar: "" },
    localStorage
  );

  // 清空状态
  const clear = function () {
    isLogin.value = false;
    token.value = "";
    userInfo.value = {
      nickName: "未登录",
      roles: [] as Array<string>,
      avatar: ""
    };
  };

  return {
    isLogin,
    token,
    userInfo,

    clear
  };
});
