import type { RouteRecordPlus } from "../types";
import Layout from "@/layouts/Layout.vue";
import { getRoutesName } from "../utils";

const Home = () => import("@/views/Home/Home.vue");
const Login = () => import("@/views/Login/Login.vue");

const Print = () => import("@/views/Function/Print/Print.vue");
const PdfMerge = () => import("@/views/Function/PdfMerge/PdfMerge.vue");
const Preview = () => import("@/views/Function/Preview/Preview.vue");
const Flow = () => import("@/views/Function/Flow/Flow.vue");

// 表单
const Form = () => import("@/views/Function/Form/Form.vue");
const FormConfigure = () =>
  import("@/views/Function/Form/FormConfigure/FormConfigure.vue");
const FormValidate = () =>
  import("@/views/Function/Form/FormValidate/FormValidate.vue");

// 表格
const BaseTable = () =>
  import("@/views/Function/Table/BaseTable/BaseTable.vue");
const Table = () => import("@/views/Function/Table/Table.vue");
const HeightTable = () =>
  import("@/views/Function/Table/HeightTable/HeightTable.vue");
const EditTable = () =>
  import("@/views/Function/Table/EditTable/EditTable.vue");

const constantRoutes: RouteRecordPlus[] = [
  { path: "/login", component: Login, name: "Login" },
  {
    path: "/",
    redirect: "/home",
    name: "root",
    component: Layout,
    meta: { title: "Dashboard", isMenu: true, icon: "i-carbon:dashboard" },
    children: [
      {
        path: "/home",
        component: Home,
        name: "Home",
        meta: { title: "分析页" }
      }
    ]
  },
  {
    path: "/function",
    redirect: "",
    name: "Function",
    component: Layout,
    meta: { title: "功能", isMenu: true, icon: "i-carbon:tool-box" },
    children: [
      {
        path: "/function/print",
        component: Print,
        name: "Print",
        meta: { title: "打印" }
      },
      {
        path: "/function/preview",
        component: Preview,
        name: "Preview",
        meta: { title: "图片预览" }
      },
      {
        path: "/function/pdfmerge",
        component: PdfMerge,
        name: "PdfMerge",
        meta: { title: "PDF合并" }
      },
      {
        path: "/function/flow",
        component: Flow,
        name: "Flow",
        meta: { title: "流程" }
      },
      {
        path: "/function/form",
        name: "Form",
        meta: { title: "表单", icon: "i-carbon:data-table", isMenu: true },
        redirect: "/function/form/validate",
        component: Form,
        children: [
          {
            path: "/function/form/validate",
            name: "FormValidate",
            component: FormValidate,
            meta: { title: "表单验证" }
          },
          {
            path: "/function/form/configure",
            name: "FormConfigure",
            component: FormConfigure,
            meta: { title: "配置式表单" }
          }
        ]
      },
      {
        path: "/function/table",
        name: "Table",
        meta: { title: "表格", icon: "i-carbon:table-built", isMenu: true },
        redirect: "/function/table/basetable",
        component: Table,
        children: [
          {
            path: "/function/table/basetable",
            name: "BaseTable",
            component: BaseTable,
            meta: { title: "基础表格" }
          },
          {
            path: "/function/table/heighttable",
            name: "HeightTable",
            component: HeightTable,
            meta: { title: "高级表格" }
          },
          {
            path: "/function/table/edittable",
            name: "EditTable",
            component: EditTable,
            meta: { title: "编辑表格" }
          }
        ]
      }
    ]
  }
];

const constantRoutesName = getRoutesName(constantRoutes);

export { constantRoutes, constantRoutesName };
