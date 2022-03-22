import React from "react";
import styled from "styled-components";

import SignUpForm from "../Components/SignUp/SignUpForm";

const SignUpPage = () => {
  return (
    <StyledSignUpPage>
      <SignUpForm />
    </StyledSignUpPage>
  );
};

const StyledSignUpPage = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export default SignUpPage;
