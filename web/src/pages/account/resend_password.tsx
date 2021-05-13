import { FormEventHandler, useState } from "react";

import { Content, Page } from "../../components/layout";
import { Field, Form, Row } from "../../components/form";
import { InputButton } from "../../components/button";

const AccountResendPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Page>
      <Content>
        <h2>Forgot?</h2>
        <p>Put in your email address below and we’ll reset it for you.</p>
        <Form onSubmit={handleSubmit}>
          <Field
            type="text"
            id="phone"
            label="Email:"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Row>
            <InputButton type="submit">Reset my Password</InputButton>
          </Row>
        </Form>
      </Content>
    </Page>
  );
};

export default AccountResendPasswordPage;
