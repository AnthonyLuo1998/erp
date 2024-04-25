import type { RouteRecordPlus } from "@/router/types";

/**
 *
 * @param routes 需要权限路由表
 * @param roles 当前角色
 * @returns 当前权限的路由表
 */
export function filterRoutesByRoles(
  routes: RouteRecordPlus[],
  roles: Array<string>
): Array<any> {
  return routes.map((route) => {
    if (route.meta && compareRoles(route.meta.roles, roles)) {
      return route;
    }
    if (route.children && route.children.length > 0) {
      return filterRoutesByRoles(route.children, roles);
    }
  });
}

/**
 *
 * @param roles 所需角色权限
 * @param hasRoles 当前角色权限
 * @returns 是否拥有权限
 */
export function compareRoles(
  roles: Array<string> = [],
  hasRoles: Array<string>
) {
  return roles.some((role) => {
    for (let i = 0; i < hasRoles.length; i++) {
      if (role === hasRoles[i]) {
        return true;
      }
    }
    return false;
  });
}

/**
 * 重置路由
 * 移除路由，排除常驻路由
 */
function resetRouter() {}
