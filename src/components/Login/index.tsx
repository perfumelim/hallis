import { useForm } from "react-hook-form";
import useCodeQuery from "hooks/useCodeQuery";
import { images } from "images/index";
import { useState } from "react";
import style from "components/Login/style";
import { IUserInfo } from "types/type";
import useRegister from "hooks/useRegister";
import ErrorBox from "components/ErrorBox";

const { Container, ContentBox, StyledForm, InfoBox, SubmitBtn, StyledInput } =
  style;

const Login = () => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isMultipleTime, setIsMultipleTime] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserInfo>();

  const mutation = useRegister();
  const { codedata } = useCodeQuery();

  const checkAuth = (data: IUserInfo) => {
    codedata.includes(data.vipCode)
      ? alert("다음 페이지로 이동")
      : setIsValid(false);
  };

  const check = () => {
    if (count > 3) {
      setIsMultipleTime(true);
    }
  };

  const onSubmit = (data: IUserInfo) => {
    checkAuth(data);
    setCount((prev) => prev + 1);
    mutation.mutate(data);
    check();
  };

  return (
    <Container>
      <ContentBox>
        <StyledForm
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
          })}
        >
          <InfoBox>
            <a href="http://mousai.club">
              <img src={images.logo} alt="mousai-logo" />
            </a>
            <p className="mousaiInfo">
              welco akdjflajsdkljglkasdkjflasdjfkljasldjvka
              dfkajsdlkfjlasdjfljalsdjlgjlajsdklfams.a
              falskdjflajsdlfjalsdkjjflajsdfa
              askdflkjasldjfllkjkglgkkgjlgkggjgjg
            </p>
          </InfoBox>
          <div>
            <label htmlFor="username">Twitter Username</label>
            <StyledInput
              {...register("twitterUsername", {
                required: {
                  value: true,
                  message: "Enter your Twitter Username",
                },
                minLength: {
                  value: 4,
                  message: "Username should be at least 4 characters",
                },
              })}
              type="text"
              id="username"
            />
            <label htmlFor="vipCode">VIP Code</label>
            <StyledInput
              {...register("vipCode", { required: true })}
              id="vipCode"
            />
          </div>
          {!isValid && !isMultipleTime && (
            <ErrorBox>
              <span>VIP Code is not valid</span>
            </ErrorBox>
          )}
          {isMultipleTime && (
            <ErrorBox>
              <span>Too many submits! Calm down pal</span>
            </ErrorBox>
          )}
          {errors.twitterUsername && (
            <ErrorBox>
              <span>{errors.twitterUsername.message}</span>
            </ErrorBox>
          )}

          {!errors.twitterUsername && errors.vipCode?.type === "required" && (
            <ErrorBox>
              <span>Enter your exclusive VIP code</span>
            </ErrorBox>
          )}

          <SubmitBtn>Submit</SubmitBtn>
        </StyledForm>
      </ContentBox>
    </Container>
  );
};

export default Login;
