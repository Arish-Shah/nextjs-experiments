import { NextPage } from "next";
import { FormEventHandler, useState } from "react";

import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Content } from "@/components/ui/Content";
import { Form } from "@/components/form/Form";
import { Field } from "@/components/form/Field";
import { Row } from "@/components/form/Row";
import { InputButton } from "@/components/button/InputButton";

export const AccountResendPasswordPage: NextPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
  };

  return (
    <DefaultLayout>
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
    </DefaultLayout>
  );
};
