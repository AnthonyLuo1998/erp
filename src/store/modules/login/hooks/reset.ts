import { reactive } from "vue";
import type { ResetDataProps } from "../types";
import type { FormRules } from "element-plus";

export function useReset() {
  const resetData = reactive<ResetDataProps>({
    username: "",
    phone: "",
    code: ""
  });

  // reset password
  function reset() {}

  // reset rules
  const resetRules = reactive<FormRules<ResetDataProps>>({
    username: [
      {
        required: true,
        message: "请输入用户名/账户",
        trigger: "blur"
      }
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
        message: "请输入手机验证码",
        trigger: "blur"
      }
    ]
  });

  return {
    resetData,
    resetRules,
    reset
  };
}
