// File: /packages/modern-christian-theme/src/index.js

import Root from "./components"
import link from "@frontity/html2react/processors/link";

const myFirstTheme = {
  name: "modern-christian",
  roots: {
    theme: Root,
  },
  state: {
    theme: {isUrlVisible: true},
  },
  actions: {
    theme: {
      toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible
      },
    },
  },
  libraries: {
    html2react: {
      processor: [link]
    }
  }
}

export default myFirstTheme