import { reactive } from "vue";
import type { FormRules } from "element-plus";
import type { DefaultLoginDataProps } from "../types";

export function useDefaultLogin() {
  // 登录表单数据
  const defaultLoginData = reactive<DefaultLoginDataProps>({
    username: "",
    password: "",
    isRemember: false
  });

  // default login
  function defaultLogin() {}

  // default login rules
  const defaultLoginRules = reactive<FormRules<DefaultLoginDataProps>>({
    username: [
      {
        required: true,
        message: "请输入用户名/账户",
        trigger: "blur"
      }
    ],
    password: [
      {
        required: true,
        message: "请输入密码",
        trigger: "blur"
      }
    ]
  });

  return {
    defaultLoginData,
    defaultLoginRules,

    defaultLogin
  };
}
