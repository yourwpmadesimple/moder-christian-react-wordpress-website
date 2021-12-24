// File: /packages/my-first-theme/src/index.js

import Root from "./components"

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
}

export default myFirstTheme