import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouterStore } from "../router";
import type { RouteRecordPlus } from "@/router/types";

export const useMenuStore = defineStore("menu", () => {
  // menu
  const asideMenu = ref<RouteRecordPlus[]>([]);

  //
  function generateMenu() {
    const router = useRouterStore();

    router.allRouter.forEach((el) => {
      if (el.meta?.isMenu) {
        asideMenu.value.push(el);
      }
    });

    console.log(asideMenu.value);
  }

  return {
    asideMenu,
    generateMenu
  };
});
