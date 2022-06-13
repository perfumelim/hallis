import styled from "styled-components";
import { images } from "images/index";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20vw;
  height: 100vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${images.vampire});
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
`;

const InfoBox = styled.div`
  text-align: right;
  margin-bottom: 13.7rem;
  font-size: 2rem;
  img {
    width: 39.4rem;
    margin-bottom: 3rem;
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
