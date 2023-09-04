import autoprefixer from "autoprefixer";
import postcssImport from "postcss-import";
import postcssNested from "postcss-nested";

/** @type {import("postcss-load-config").Config} */
const config = {
  plugins: [
    autoprefixer,
    postcssImport,
    postcssNested
  ]
}

export default config
