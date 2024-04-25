import type { RouteRecordPlus } from "../types";
export function getRoutesName(
  routes: RouteRecordPlus[],
  names: Array<any> = []
) {
  routes.map((route) => {
    if (route.name) {
      names.push(route.name);
    }

    if (route.children) {
      getRoutesName(route.children, names);
    }
  });
  return names;
}

export function isRefreshEnter() {
  if (window.performance && window.performance.getEntriesByType) {
    const navigationEntries = window.performance.getEntriesByType("navigation");
    if (navigationEntries.length > 0) {
      const navigationType = navigationEntries[0].type;
      console.log(navigationType);
      if (navigationType === "reload") {
        // 页面通过刷新进入
        return true;
      } else {
        // 页面通过其他方式进入
        return false;
      }
    }
  }
}
