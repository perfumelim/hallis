import { theme } from "styles/theme";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 5%;
  left: 5rem;
  z-index: 9999;
  width: 12rem;
  @media ${theme.media.tablet} {
    flex-direction: column;
    justify-content: start;
    top: 5rem;
    right: 0;
  }
`;
const Icon = styled.img`
  width: 5rem;
  height: 5rem;
  z-index: 9999;
  @media ${theme.media.tablet} {
    width: 4rem;
    height: 4rem;
  }
`;
const style = { Wrapper, Icon };
export default style;
