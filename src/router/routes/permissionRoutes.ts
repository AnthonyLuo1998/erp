import type { RouteRecordPlus } from "../types";
import Layout from "@/layouts/Layout.vue";

// 角色权限管理
const PermissionRole = () =>
  import("@/views/Permission/PermissionRole/PermissionRole.vue");

// 用户权限管理
const PermissionUser = () =>
  import("@/views/Permission/PermissionUser/PermissionUser.vue");

const permissionRoutes: RouteRecordPlus[] = [
  {
    path: "/permission",
    component: Layout,
    name: "Permission",
    redirect: "/permission/role",
    meta: {
      roles: ["admin", "editor"],
      icon: "i-carbon:two-factor-authentication",
      isMenu: true,
      title: "权限管理"
    },
    children: [
      {
        path: "/permission/role",
        component: PermissionRole,
        name: "PermissionRole",
        meta: {
          roles: ["admin"],
          title: "角色权限管理"
        }
      },
      {
        path: "/permission/user",
        component: PermissionUser,
        name: "PermissionUser",
        meta: {
          roles: ["admin", "editor"],
          title: "用户权限管理"
        }
      }
    ]
  }
];

export { permissionRoutes };
