import "./styles.css";

import React, { Component } from "react";
import { Form, Button, Rate } from "antd";
import FormBuilder from "antd-form-builder";
export default () => {
  const handleFinish = useCallback((values) => {
    console.log("Submit: ", values);
  });

  return (
    <Form layout="inline" onFinish={handleFinish}>
      <FormBuilder meta={{ key: "luci_username", placeholder: "Username" }} />
      <FormBuilder
        meta={{
          key: "luci_password",
          widget: "password",
          placeholder: "Password"
        }}
      />
      <FormBuilder
        meta={{
          key: "select",
          widget: "select",
          placeholder: "Select"
        }}
      />
      <Form.Item>
        <Button htmlType="submit" type="primary">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
// export default function App() {
//   return (
//     <div className="App">
//       <FormBuilder />
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
