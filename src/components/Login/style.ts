import styled from "styled-components";
import { images } from "images/index";
import { theme } from "styles/theme";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20vw;
  height: 100vh;
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${images.vampire});
  @media ${theme.media.mobile} {
    background-size: cover;
    background-position: center;
    justify-content: center;
    padding-right: 0;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15vh;
  position: relative;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 39.4rem;
  border-radius: 5px;

  .mousaiInfo {
    color: #fccfb9;
  }
  label {
    font-size: 2rem;
    color: #fccfb9;
  }

  @media ${theme.media.mobile} {
    width: 150rem;

    label {
      font-size: 9.5rem;
    }
  }
`;

const InfoBox = styled.div`
  text-align: right;
  margin-bottom: 13.7rem;
  font-size: 2rem;
  img {
    width: 39.4rem;
    margin-bottom: 3rem;
  }

  @media ${theme.media.mobile} {
    font-size: 6.5rem;
    font-weight: 300;
    margin-bottom: 26.5rem;
    img {
      width: 148rem;
    }
  }
`;

const StyledInput = styled.input`
  width: 39.4rem;
  height: 6rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 1.75rem;
  color: #fccfb9;
  outline: none;
  background: transparent;
  border: 1px solid #fccfb9;
  border-radius: 15px;

  @media ${theme.media.mobile} {
    width: 148rem;
    height: 21rem;
    margin-top: 4.5rem;
    margin-bottom: 7rem;
  }
`;

const SubmitBtn = styled.button`
  width: 17rem;
  height: 4.1rem;
  color: #591d28;
  font-size: 2rem;
  font-weight: 500;
  background: #fccfb9;
  border-radius: 38px;
  margin-top: 5rem;
  align-self: flex-end;

  @media ${theme.media.mobile} {
    width: 87rem;
    height: 21rem;
    margin-top: 31rem;
    align-self: center;
    font-size: 9.5rem;
  }
`;

const ErrorMessage = styled.div`
  width: 39.4rem;
  text-align: right;
  padding-right: 1.5rem;
  position: absoulte;
  bottom: -3rem;
  span {
    font-size: 2rem;
    color: #ff0000;
  }
  @media ${theme.media.mobile} {
    width: 148rem;
    text-align: center;
    span {
      font-size: 7.5rem;
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
