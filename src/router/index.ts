import type { App } from "vue";

import type { RouteRecordRaw } from "vue-router";

import { createRouter, createWebHashHistory } from "vue-router";

import { constantRoutes } from "./routes";

// 创建路由
export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes as RouteRecordRaw[]
});

export function setupRouter(app: App) {
  app.use(router);
}
