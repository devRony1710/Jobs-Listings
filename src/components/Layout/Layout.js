import React from "react";

//styles components
import { GlobalStyles } from "../GlobalStyles/GlobalStyles";
import { Footer, Header } from "./Layout-Styles";

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        {children}
      </main>
      <Footer>
        <span>
          Rony Antolinez - 2022
        </span>
      </Footer>
    </>
  )
}