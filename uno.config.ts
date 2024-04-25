// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from "unocss";

import presetRemToPx from "@unocss/preset-rem-to-px";

import { icons } from "./icons.config";

export default defineConfig({
  shortcuts: [
    {
      "cs-border-b": "border-b-gray-400 b-b border-b-solid",
      "cs-border-r": "border-r-gray-400 b-r border-r-solid",
      "cs-shadow": "shadow-light-900 shadow-sm"
    }
  ],
  safelist: icons,
  theme: {
    colors: {
      light: {
        primary: "#70a1ff",
        active: "#5352ed",
        noActive: "#747d8c",
        hover: "#5352ed"
      },
      night: {
        primary: "#ffffff",
        active: "#409eff",
        noActice: "#747d8c",
        hover: "#ffffff"
      }
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetRemToPx(),
    presetIcons({
      collections: {
        tabler: () =>
          import("@iconify-json/carbon/icons.json").then((i) => i.default)
      },
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle"
      }
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
});
