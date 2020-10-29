import React, {Component} from "react";
import "./SignUp.css"
import {Button, Form, Input} from "antd";
import {signup} from "../../../util/ApiUtil";


const SignUp = (props) => {
    const onSubmitted=(values)=>{
    signup(values).then((response)=>{
        console.log("Zwrotka rejestracji", response)
    }).catch((error)=>{

    })
    }

    return (

        <div className="register">
            <Form className="register-form"
                  initialValues={{remember: false}}
                  onFinish={onSubmitted}>
                <h2 className="text-center">Zarejestruj się</h2>

                <Form.Item
                    name="fullName"
                    rules={[{required: true, message: "Proszę o podanie Imienia i nazwiska"}]}>
                    <Input size="large"
                           placeholder="Imie i nazwisko"/>
                </Form.Item>

                <Form.Item
                    name="username"
                    rules={[{required: true, message: "Proszę o podanie nazwy użytkownika"}]}>
                    <Input size="large"
                           placeholder="Imie i nazwisko"/>
                </Form.Item>

                <Form.Item
                    name="email"
                    rules={[{required: true, message: "Proszę o podanie adresu e-mail", type: "email"}]}>
                    <Input size="large"
                           placeholder="E-mail"/>
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{required: true, message: "Proszę o podanie hasła"}]}
                >
                    <Input
                        size="large"
                        type="password"
                        placeholder="Hasło"
                    />

                    <Button
                        size="large"
                        htmlType="submit"
                        className="btn btn-primary register-btn btn-block register-form-button">
                        Rejestruj
                    </Button>

                </Form.Item>
            </Form>
        </div>

    );


}

export default SignUp;