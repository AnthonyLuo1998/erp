import type { RouteRecordPlus } from "@/router/types";
import { defineStore } from "pinia";
import { ref, watch, watchEffect } from "vue";
import { router } from "@/router";
import {
  permissionRoutes,
  constantRoutes,
  constantRoutesName
} from "@/router/routes";
import { filterRoutesByRoles } from "./utils";
import { usePermissionStore } from "../permission";
import { useStorage } from "@vueuse/core";
import { useRoute } from "vue-router";

export const useRouterStore = defineStore("router", () => {
  // 所有已注册路由
  const allRouter = ref<RouteRecordPlus[]>(constantRoutes);
  // 当前路由
  const curRouter = useStorage("curRouter", "/", localStorage);
  // route
  const route = useRoute();

  // 生成路由
  function generatorRouter() {
    const permissionStore = usePermissionStore();

    const hasRoutes = filterRoutesByRoles(
      permissionRoutes,
      permissionStore.userInfo.roles
    );

    resetRouter();

    hasRoutes.forEach((route) => {
      router.addRoute(route);
      allRouter.value.push(route);
    });
  }

  // 重置路由
  function resetRouter() {
    router.getRoutes().forEach((route) => {
      const { name } = route;
      if (name && !constantRoutesName.includes(name as string)) {
        router.hasRoute(name) && router.removeRoute(name);
      }
    });
  }

  // watch route
  watch(route, () => {
    curRouter.value = route.path;
    console.log(route.name);
  });

  return {
    allRouter,

    generatorRouter,
    resetRouter
  };
});
