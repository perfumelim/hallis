import { theme } from "styles/theme";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  z-index: 999;
  @media ${theme.media.tablet} {
    top: 4rem;
    left: 2%;
  }
`;
const Icon = styled.img`
  width: 0;
  z-index: 999;

  @media ${theme.media.tablet} {
    width: 4rem;
    height: 4rem;
  }
`;
const style = { Wrapper, Icon };
export default style;
