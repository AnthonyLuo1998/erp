import { defineStore } from "pinia";

import { useStorage, useDark, useToggle } from "@vueuse/core";

import type { LayoutModeOptions } from "./types";

export const useSettingStore = defineStore("setting", () => {
  // layout布局
  const layoutMode = useStorage("layout_mode", 0, localStorage);
  // 侧边栏折叠
  const asideCollapse = useStorage("aside_collapse", false, localStorage);
  // 暗黑模式
  const isDark = useDark({
    selector: "html",
    attribute: "class",
    valueDark: "dark",
    valueLight: "light"
  });

  // 切换主题
  const SET_THEME_MODE = useToggle(isDark);

  // 切换布局
  const SET_LAYOUT_MODE = function (mode: LayoutModeOptions) {
    layoutMode.value = mode;
  };

  // 折叠侧边栏
  const SET_ASIDE_COLLAPSE = function () {
    asideCollapse.value = !asideCollapse.value;
  };

  return {
    layoutMode,
    asideCollapse,
    isDark,

    SET_THEME_MODE,
    SET_LAYOUT_MODE,
    SET_ASIDE_COLLAPSE
  };
});
