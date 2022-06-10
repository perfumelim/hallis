import { useForm } from "react-hook-form";
import styled from "styled-components";
import useCodeQuery from "hooks/useCodeQuery";
import ErrorModal from "components/ErrorModal";
import useToggle from "hooks/useToggle";

type Inputs = {
  twitterUsername: string;
  userToken: string;
};
const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const { codedata } = useCodeQuery();

  const checkAuth = (data: Inputs) => {
    if (codedata.includes(data.userToken)) {
      alert(JSON.stringify(data));
    } else {
      alert("Invalid code");
      reset();
    }
  };

  const onSubmit = (data: Inputs) => {
    checkAuth(data);
    // if (
    //   errors.twitterUsername?.type === "required" ||
    //   errors.userToken?.type === "required"
    // )
    //   onToggleErrorModal();
  };
  return (
    <Container>
      <StyledForm
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
        })}
      >
        <StyledInput
          placeholder="Twitter Username"
          {...register("twitterUsername", {
            required: true,
            minLength: 4,
          })}
          type="text"
          id="username"
        />
        {errors.twitterUsername?.type === "required" && (
          <ErrorMessage>
            <span className="material-icons">info</span>Please Enter Your
            Twitter Username
          </ErrorMessage>
        )}
        <StyledInput
          placeholder="VIP CODE"
          {...register("userToken", { required: true, maxLength: 6 })}
        />
        {errors.userToken?.type === "required" && (
          <ErrorMessage>
            <span className="material-icons">info</span>
            <p>Please Enter Your Special Code</p>
          </ErrorMessage>
        )}
        <SubmitBtn>Submit</SubmitBtn>
      </StyledForm>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(-225deg, #e3fdf5 0%, #ffe6fa 100%);
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  background-attachment: fixed;
  background-repeat: no-repeat;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  min-height: 500px;
  height: auto;
  border-radius: 5px;
  padding-top: 15%;
  margin: 2% auto;
  box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);
  background-image: linear-gradient(-225deg, #e3fdf5 50%, #ffe6fa 50%);
`;

const StyledInput = styled.input`
  width: 300px;
  height: 50px;
  margin-top: 2%;
  padding: 15px;
  color: #5e6472;
  outline: none;
  border: none;
  border-radius: 0px 5px 5px 0px;
`;

const SubmitBtn = styled.button`
  width: 300px;
  height: 50px;
  background: #b8f2e6;
  margin-top: 30px;
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 40px;
  color: #3e403f;

  .material-icons {
    font-size: 18px;
    padding-right: 4px;
  }
`;
