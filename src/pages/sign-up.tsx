import * as React from "react";
import styled from "styled-components";

import { SystemLayout } from "~/ui/templates";
import { Title, Text } from "~/ui/atoms";

const SignUp: React.FC = () => {
  return (
    <SystemLayout>
      <SignupTitle level={3}>Welcome back</SignupTitle>
      <SignupDescription level={2}>
        Log in to the Capital Bear trading platform
      </SignupDescription>
    </SystemLayout>
  );
};

export default SignUp;

const SignupTitle = styled(Title)`
  width: 100%;
`;

const SignupDescription = styled(Text)`
  margin-top: 10px;
`;
