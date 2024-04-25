import type { Router } from "vue-router";
import { usePermissionStore } from "@/store/modules";
import { $message } from "@/utils/message";
import { useRouterStore } from "@/store/modules/router";
import { useMenuStore } from "@/store/modules";
import { isRefreshEnter } from "./utils";

const write: Array<string> = [];

export function setupRouterGuard(router: Router) {
  const permissionStore = usePermissionStore();
  const routerStore = useRouterStore();
  const menuStore = useMenuStore();
  let refreshEnter = isRefreshEnter();
  // 路由前置守卫
  router.beforeEach(async (to, from, next) => {
    if (refreshEnter) {
      refreshEnter = false;
      return next(localStorage.getItem("curRouter") || "/");
    }
    /**
     * 是否登陆（应用初次被打开被记录的登录状态）
     * 《优先处理错误边界》
     * 已登陆（已经进入应用）：
     * 1.如果token为空跳转至登录页面
     * 2.如果角色信息为空跳转至登录页
     * 3.如果已登录进入登录页面跳转至首页
     * 未登录（初次进入应用）：
     * 1.判断是否跳转到白名单
     * 2.不在白名单进入权限路由验证是否存在token
     */
    if (permissionStore.isLogin) {
      // 1
      if (permissionStore.token === "") {
        $message.error("请先登录后再操作");
        permissionStore.clear();
        return next("/login");
      }
      // 2
      if (permissionStore.userInfo.roles.length === 0) {
        $message.error("获取用户信息失败");
        permissionStore.clear();
        return next("/login");
      }
      // 3
      if (to.path === "/login") {
        return next("/home");
      }
      return next();
    } else {
      // 1
      if (write.includes(to.path)) {
        return next();
      }

      // 2
      if (permissionStore.token === "" && to.path === "/login") {
        return next();
      }

      // 3
      if (permissionStore.token === "") {
        $message.error("请先登录后再操作");
        permissionStore.clear();
        return next("/login");
      } else {
        // TODO 验证token有效性并返回用户信息
        let isOk = true;
        if (isOk) {
          permissionStore.isLogin = true;
          permissionStore.userInfo = {
            nickName: "jum",
            roles: ["admin"],
            avatar: ""
          };
          routerStore.generatorRouter();
          menuStore.generateMenu();
          return next();
        } else {
          $message.error("登录过期,请重新登录");
          permissionStore.clear();
          return next("/login");
        }
      }
    }
  });
}
