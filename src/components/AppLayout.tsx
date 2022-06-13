import React, { ReactNode } from "react";
import styled from "styled-components";

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return <Container>{children}</Container>;
}

export default AppLayout;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
