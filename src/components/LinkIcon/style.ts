import { theme } from "styles/theme";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 5%;
  right: 10%;
  z-index: 999;
  width: 52rem;
  @media ${theme.media.smallTablet} {
    width: 34rem;
  }
  @media ${theme.media.tablet} {
    flex-direction: column;
    justify-content: start;
    top: 5rem;
    right: 0;
  }
`;
const Icon = styled.li<{ img: string }>`
  background: url(${(props) => props.img});
  width: 25rem;
  height: 25rem;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 999;
  @media ${theme.media.smallTablet} {
    width: 16rem;
    height: 16rem;
  }
  @media ${theme.media.tablet} {
    width: 5rem;
    height: 5rem;
    &:last-child {
      margin-top: 2rem;
    }
  }
`;
const style = { Wrapper, Icon };
export default style;
