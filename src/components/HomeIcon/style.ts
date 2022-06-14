import { theme } from "styles/theme";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 5%;
  left: 5%;
  z-index: 999;
  width: 14rem;
  @media ${theme.media.tablet} {
    top: 4%;
    left: 2%;
  }
`;
const Icon = styled.img`
  width: 14rem;
  height: 14rem;
  z-index: 999;
  @media ${theme.media.smallTablet} {
    width: 9rem;
    height: 9rem;
  }
  @media ${theme.media.tablet} {
    width: 4rem;
    height: 4rem;
  }
`;
const style = { Wrapper, Icon };
export default style;
