import { reactive } from "vue";
import type { FormRules } from "element-plus";
import type { PhoneLoginDataProps } from "../types";

export function usePhoneLogin() {
  // 登录表单数据
  const phoneLoginData = reactive<PhoneLoginDataProps>({
    phone: "",
    code: ""
  });

  // phone login
  function phoneLogin() {}

  // phone login rules
  const phoneLoginRules = reactive<FormRules<PhoneLoginDataProps>>({
    phone: [
      {
        required: true,
        message: "请输入手机号",
        trigger: "blur"
      },
      {
        validator: (rule: any, value: any, callback: any) => {
          if (/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(value)) {
            callback();
          } else {
            callback(new Error("请输入正确的手机号码"));
          }
        },
        trigger: "blur"
      }
    ],
    code: [
      {
        required: true,
        message: "请输入手机验证码",
        trigger: "blur"
      }
    ]
  });

  return {
    phoneLoginData,
    phoneLoginRules,

    phoneLogin
  };
}
