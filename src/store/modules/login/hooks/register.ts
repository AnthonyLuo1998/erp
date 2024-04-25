import { reactive } from "vue";
import type { FormRules } from "element-plus";
import type { RegisterDataProps } from "../types";
export function useRegister() {
  const registerData = reactive<RegisterDataProps>({
    username: "",
    password: "",
    repassword: "",
    phone: "",
    code: "",
    isAgree: false
  });

  // 注册
  function register() {}

  // rules
  const registerRules = reactive<FormRules<RegisterDataProps>>({
    username: [
      {
        required: true,
        message: "请输入用户名/账户",
        trigger: "blur"
      },
      { min: 8, max: 24, message: "密码长度必须在8-24个字符", trigger: "blur" }
    ],
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
        message: "请输入验证码",
        trigger: "blur"
      }
    ],
    password: [
      {
        required: true,
        message: "请输入密码",
        trigger: "blur"
      }
    ],
    repassword: [
      {
        required: true,
        message: "请再次输入密码",
        trigger: "blur"
      },
      {
        validator: (rule: any, value: any, callback: any) => {
          if (value === registerData.password) {
            callback();
          } else {
            callback(new Error("请确保密码和确认密码一致"));
          }
        },
        trigger: "blur"
      }
    ],
    isAgree: [
      {
        validator: (rule: any, value: any, callback: any) => {
          console.log(value);
          if (value) {
            callback();
          } else {
            callback(new Error("请同意隐私政策"));
          }
        },
        trigger: "change"
      }
    ]
  });

  return {
    registerData,
    register,
    registerRules
  };
}
