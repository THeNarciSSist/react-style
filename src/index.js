import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
html {
	font-size: 62.5%;
	box-sizing: border-box;
}

*, *::before, *::after {
	margin: 0;
	padding: 0;
	box-sizing: inherit;
}

body {
	background-color: rgba(40,44,52,.95);
}
`

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
