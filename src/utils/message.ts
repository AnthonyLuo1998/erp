import { ElMessage } from "element-plus";

type StatusProps = "success" | "warning" | "error" | "info";

export const $message = new (class Message {
  success(msg: string) {
    this.message("success", msg);
  }

  warning(msg: string) {
    this.message("warning", msg);
  }

  error(msg: string) {
    this.message("error", msg);
  }

  info(msg: string) {
    this.message("info", msg);
  }

  close() {
    ElMessage.closeAll();
  }

  message(status: StatusProps, msg: string) {
    ElMessage({
      message: msg,
      grouping: true,
      type: status
    });
  }
})();
