import type { App } from "vue";

// pinia
import { createPinia } from "pinia";

const pinia = createPinia();

export function setupStore(app: App) {
  app.use(pinia);
}
