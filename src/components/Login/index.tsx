import { useForm } from "react-hook-form";
import useCodeQuery from "hooks/useCodeQuery";
import { images } from "images/index";
import { useState } from "react";
import style from "components/Login/style";

type Inputs = {
  twitterUsername: string;
  vipCode: string;
};

const {
  Container,
  ContentBox,
  StyledForm,
  InfoBox,
  SubmitBtn,
  ErrorMessage,
  StyledInput,
} = style;

const Login = () => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { codedata } = useCodeQuery();

  const checkAuth = (data: Inputs) => {
    codedata.includes(data.vipCode)
      ? alert("다음 페이지로 이동")
      : setIsValid(false);
  };

  const onSubmit = (data: Inputs) => {
    checkAuth(data);
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
            <img src={images.logo} alt="mousai-logo" />
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
                required: true,
                minLength: 4,
              })}
              type="text"
              id="username"
            />
            <label htmlFor="vipCode">VIP Code</label>
            <StyledInput
              {...register("vipCode", { required: true, maxLength: 6 })}
              id="vipCode"
            />
          </div>
          {!isValid && (
            <ErrorMessage>
              <span>VIP Code is not valid</span>
            </ErrorMessage>
          )}
          {errors.vipCode?.type === "required" && (
            <ErrorMessage>
              <span>Enter your exclusive VIP code</span>
            </ErrorMessage>
          )}
          <SubmitBtn>Submit</SubmitBtn>
        </StyledForm>
      </ContentBox>
    </Container>
  );
};

export default Login;
