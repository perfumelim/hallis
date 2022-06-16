import { theme } from "styles/theme";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 148rem;
  text-align: center;
  position: absolute;
  bottom: 40rem;
  span {
    font-size: 7.5rem;
    color: #ff0000;
  }

  @media ${theme.media.smallTablet} {
    width: 110rem;
    bottom: 22rem;

    span {
      font-size: 5rem;
    }
  }
  @media ${theme.media.tablet} {
    width: 39.4rem;
    text-align: right;
    bottom: 6rem;

    padding-right: 1.5rem;
    span {
      font-size: 2rem;
    }
  }
`;

const style = { Wrapper };
export default style;
