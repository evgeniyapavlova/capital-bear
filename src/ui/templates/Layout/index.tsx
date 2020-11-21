import * as React from "react";
import styled from "styled-components";

import { Header, Footer } from "~/ui/organisms";
import { GlobalStyles } from "~/styles";

export const Layout: React.FC = ({ children }) => (
  <>
    <GlobalStyles />
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  </>
);

const Main = styled.main``;
