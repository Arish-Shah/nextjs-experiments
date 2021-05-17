import { NextPage } from "next";
import { FormEventHandler, useState } from "react";

import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Content } from "@/components/ui/Content";
import { Form } from "@/components/form/Form";
import { Field } from "@/components/form/Field";
import { Row } from "@/components/form/Row";
import { InputButton } from "@/components/button/InputButton";

export const AccountCompletePage: NextPage = () => {
  const [phone, setPhone] = useState("");

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
  };

  return (
    <DefaultLayout>
      <Content>
        <h2>So you want to use Twitter on the web…</h2>
        <p>Give us the phone number you’ve been using to Twitter below.</p>
        <Form onSubmit={handleSubmit}>
          <Field
            type="text"
            id="phone"
            label="Phone number:"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Row>
            <InputButton type="submit">Continue</InputButton>
          </Row>
        </Form>
      </Content>
    </DefaultLayout>
  );
};
