import * as React from "react";
import styled from "styled-components";

import { SystemLayout } from "~/ui/templates";
import { Title, Text } from "~/ui/atoms";

const PassForgot: React.FC = () => {
  return (
    <SystemLayout>
      <ForgotTitle level={3}>Forgot Password</ForgotTitle>
      <ForgotDescription level={2}>
        It happens!
        <br />
        We just need your email and we'll get you back to your account in no
        time.
      </ForgotDescription>
    </SystemLayout>
  );
};

export default PassForgot;

const ForgotTitle = styled(Title)`
  width: 100%;
`;

const ForgotDescription = styled(Text)`
  margin-top: 10px;
`;
