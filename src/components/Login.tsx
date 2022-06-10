import { useForm } from "react-hook-form";
import styled from "styled-components";
import useCodeQuery from "hooks/useCodeQuery";
import ErrorModal from "components/ErrorModal";
import useToggle from "hooks/useToggle";

type Inputs = {
  twitterUsername: string;
  vipCode: string;
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
    if (codedata.includes(data.vipCode)) {
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
        <div>
          <label htmlFor="username">Twitter Username</label>
          <StyledInput
            {...register("twitterUsername", {
              required: true,
              minLength: 4,
            })}
            type="text"
            id="username"
          />
          {errors.twitterUsername?.type === "required" && (
            <ErrorMessage>
              <span className="material-icons">info</span>Enter your Twitter
              Username
            </ErrorMessage>
          )}
          <label htmlFor="vipCode">VIP Code</label>
          <StyledInput
            {...register("vipCode", { required: true, maxLength: 6 })}
            id="vipCode"
          />
          {errors.vipCode?.type === "required" && (
            <ErrorMessage>
              <span className="material-icons">info</span>
              <p>Enter your exclusive VIP code</p>
            </ErrorMessage>
          )}
        </div>
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
  background: linear-gradient(rgba(89, 29, 40, 1), rgba(89, 29, 40, 1)),
    url("images/Vampire.png");
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 380px;
  border-radius: 5px;
  padding-top: 15%;
  background: linear-gradient(rgba(89, 29, 40, 1), rgba(89, 29, 40, 1)),
    url("images/Vampire.png");
  label {
    font-size: 18px;
    color: #fccfb9;
    margin-bottom: 7px;
  }
`;

const StyledInput = styled.input`
  width: 378px;
  height: 50px;
  margin-bottom: 4%;
  padding: 15px;
  color: #fccfb9;
  outline: none;
  background: transparent;
  border: 1px solid #fccfb9;
  border-radius: 15px;
`;

const SubmitBtn = styled.button`
  width: 162px;
  height: 39px;
  color: #591d28;
  font-size: 18px;
  font-weight: 500;
  background: #fccfb9;
  border-radius: 38px;
  margin-top: 30px;
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  color: #ff0000;
  margin-bottom: 10px;

  .material-icons {
    font-size: 18px;
    padding-right: 4px;
  }
`;
