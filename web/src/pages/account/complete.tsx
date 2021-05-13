import { FormEventHandler, useState } from "react";

import { Content, Page } from "../../components/layout";
import { Field, Form, Row } from "../../components/form";
import { InputButton } from "../../components/button";

const AccountCompletePage = () => {
  const [phone, setPhone] = useState("");

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Page>
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
    </Page>
  );
};

export default AccountCompletePage;
