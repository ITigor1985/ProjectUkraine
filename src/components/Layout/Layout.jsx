import { GlobalStyle } from "../../GlobalStyled/GlobalStyled.styled";
import { Outlet } from "react-router-dom";
import { Container } from "./Layout.styled";
import { Suspense } from "react";

export default function Layout() {
  return (
    <div>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
      <GlobalStyle />
    </div>
  );
}
