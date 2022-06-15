import { theme } from "styles/theme";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 2%;
  right: 5%;
  z-index: 999;
  width: 84rem;

  @media ${theme.media.smallTablet} {
    width: 52rem;
    bottom: 5%;
  }
  @media ${theme.media.tablet} {
    width: 6rem;
    flex-direction: column;
    justify-content: start;
    top: 5rem;
    right: 6rem;
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
    width: 6rem;
    height: 6rem;
    &:last-child {
      margin-top: 2rem;
    }
  }
`;
const style = { Wrapper, Icon };
export default style;
