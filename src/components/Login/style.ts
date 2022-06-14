import styled from "styled-components";
import { images } from "images/index";
import { theme } from "styles/theme";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 12vh 0 0 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${images.vampire});

  @media ${theme.media.tablet} {
    background-position: left;
    background-size: contain;
    justify-content: flex-end;
    padding: 20vh 24.5vw 0 0;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 150rem;
  border-radius: 5px;

  .mousaiInfo {
    color: ${theme.color.main};
  }
  label {
    font-size: 9.5rem;
    color: ${theme.color.main};
  }

  @media ${theme.media.smallTablet} {
    width: 110rem;

    label {
      font-size: 5rem;
    }
  }

  @media ${theme.media.tablet} {
    width: 39.4rem;

    label {
      font-size: 2rem;
    }
  }
`;

const InfoBox = styled.div`
  text-align: right;
  margin-bottom: 20.5rem;
  font-size: 6.5rem;
  font-weight: 300;
  img {
    width: 148rem;
    margin-bottom: 11rem;
  }

  @media ${theme.media.smallTablet} {
    font-size: 4rem;
    margin-bottom: 18rem;
    img {
      width: 110rem;
      margin-bottom: 9rem;
    }
  }

  @media ${theme.media.tablet} {
    font-size: 2rem;
    margin-bottom: 13.7rem;

    img {
      width: 39.4rem;
      margin-bottom: 3rem;
    }
  }
`;

const StyledInput = styled.input`
  width: 148rem;
  height: 21rem;
  padding: 6rem;
  margin-top: 4.5rem;
  margin-bottom: 7rem;
  color: #fccfb9;
  outline: none;
  background: transparent;
  border: 1px solid #fccfb9;
  border-radius: 15px;

  @media ${theme.media.smallTablet} {
    width: 110rem;
    height: 14rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding: 3rem;
    font-size: 4rem;
  }

  @media ${theme.media.tablet} {
    width: 39.4rem;
    height: 6rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding: 1.75rem;
    font-size: 2rem;
  }
`;

const SubmitBtn = styled.button`
  width: 87rem;
  height: 21rem;
  margin-top: 29rem;
  align-self: center;
  font-size: 9.5rem;
  color: ${theme.color.wine};
  font-weight: 500;
  background: ${theme.color.main};
  border-radius: 38px;

  @media ${theme.media.smallTablet} {
    width: 55rem;
    height: 12rem;
    margin-top: 18rem;
    align-self: center;
    font-size: 4.5rem;
  }

  @media ${theme.media.tablet} {
    width: 17rem;
    height: 4.1rem;
    margin-top: 5rem;
    align-self: flex-end;
    font-size: 2rem;
  }
`;

const ErrorMessage = styled.div`
  width: 148rem;
  text-align: center;
  position: absolute;
  span {
    font-size: 7.5rem;
    color: #ff0000;
  }

  @media ${theme.media.smallTablet} {
    width: 110rem;
    left: 8rem;
    top: 50rem;
    span {
      font-size: 5rem;
    }
  }
  @media ${theme.media.tablet} {
    width: 39.4rem;
    text-align: right;

    padding-right: 1.5rem;
    span {
      font-size: 2rem;
    }
  }
`;

const style = {
  Container,
  ContentBox,
  StyledForm,
  InfoBox,
  SubmitBtn,
  ErrorMessage,
  StyledInput,
};

export default style;
