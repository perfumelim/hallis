import React, { ReactNode, useEffect } from "react";
import styled from "styled-components";

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  const handleResize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <Container>{children}</Container>;
}

export default AppLayout;

const Container = styled.div`
  width: 100vw;
  height: calc(var(--vh) * 100);
`;
