import { ThemeProvider, createGlobalStyle } from "styled-components"
import { theme } from "utils/theme"
import "normalize.css"
import { App } from "App"

export function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}
html {
    font-size: 62.5%;
}
body {
    font-family: 'DM Sans', sans-serif;
}
`
