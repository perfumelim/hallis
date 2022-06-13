import styled, { css } from "styled-components";
import { observerAnimation } from "./observerAnimation";
import { theme } from "./theme";

export const CommonWrapper = styled.div<{
  observe: boolean;
  wrapperType?: string;
}>`
  margin: 2rem auto;
  width: ${(props) => (props.wrapperType !== "roadmap" ? "90%" : "100%")};
  height: ${(props) =>
    props.wrapperType !== "universe" &&
    props.wrapperType !== "team" &&
    props.wrapperType !== "character"
      ? "100vh"
      : "100%"};
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: start;
  align-items: start;
  animation: ${(props) =>
    props.observe &&
    props.wrapperType !== "roadmap" &&
    css`
      ${observerAnimation} 2s linear
    `};
  transition: all 2s;
  animation-fill-mode: forwards;
  opacity: ${(props) => (props.wrapperType !== "roadmap" ? "0" : "1")};
  @media ${theme.media.tablet} {
    width: 80%;
  }
  @media ${theme.media.laptop} {
    width: 75%;
  }
  @media ${theme.media.mac} {
    width: 70%;
  }
  @media ${theme.media.desktopNormal} {
    width: 65%;
  }
  @media ${theme.media.desktopMiddle} {
    width: 60%;
  }
`;
