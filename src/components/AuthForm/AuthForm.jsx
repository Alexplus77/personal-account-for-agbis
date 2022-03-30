import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox, Popover } from "antd";
import s from "./AuthForm.module.css";
import { useDispatch } from "react-redux";
import {
  PhoneOutlined,
  LockOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { on_registration_mode } from "redux/actions/createActions";
import { fetchAuthUser } from "redux/middlwares/fetchAuthUser";

export const AuthForm = () => {
  const dispatch = useDispatch();
  const contentPopover = (
    <div>
      <p>Телефон: +79000000001</p>
      <p>Пароль: 621126</p>
    </div>
  );
  const onFinish = (values) => {
    dispatch(fetchAuthUser(values));
  };

  return (
    <Form
      name="normal_login"
      className="containerForm"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Popover content={contentPopover} title={"Значения по умолчанию"}>
        <QuestionCircleOutlined className={s.iconQuestions} />
      </Popover>
      <Form.Item
        name="phone"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          prefix={<PhoneOutlined className="site-form-item-icon" />}
          placeholder="Phone number"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" className={s.btnSubmit}>
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};
