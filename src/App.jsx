import React from "react"
import {createGlobalStyle} from "styled-components"
import SignupForm from "./components/SignupForm"

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: "Lora", regular;
}
`

function App() {
  return (
    <>
      <GlobalStyle />
      <SignupForm />
    </>
  )
}

export default App; 