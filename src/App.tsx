import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

type Inputs = {
twitterUsername: string,
userToken: string,

};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  return (
<Container>
  <h1>TEST</h1>
  <form
      onSubmit={handleSubmit((data) => {
        alert(JSON.stringify(data));
      })}
    >
      <label>Example</label>
      <input {...register("twitterUsername", {
        required: true,
        minLength: 4,
      })} type="text" id="username"/>
      {errors.twitterUsername?.type === 'required' && "Please Enter your Twitter Username"}
      <label>ExampleRequired</label>
      <input
        {...register("userToken", { required: true, maxLength: 10 })}
      />
      {errors.userToken && <p>This field is required</p>}
      <input type="submit" />
    </form>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 50px;
  background-color: ;
`;
