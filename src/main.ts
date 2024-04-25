// unocss
import "virtual:uno.css";
// 重置浏览器css样式
import "@unocss/reset/sanitize/sanitize.css";
import "@unocss/reset/sanitize/assets.css";
// custom style
import "element-plus/theme-chalk/dark/css-vars.css";
import "./styles/index.css";

import { createApp } from "vue";
import { setupStore } from "./store";
import { router, setupRouter } from "./router";
import { setupRouterGuard } from "./router/guard";
import App from "./App.vue";
import { setupVViewr } from "./plugins/v-viewer";
import { setupVxeTable } from "./plugins/vxe-table";

/**
 * 引导程序
 */
(function bootstrap() {
  const app = createApp(App);

  // 安装router
  setupRouter(app);

  // 安装pinia
  setupStore(app);

  // 安装路由守卫
  setupRouterGuard(router);

  // v-viewer
  setupVViewr(app);

  // vxe-table
  setupVxeTable(app);

  app.mount("#app");
})();
