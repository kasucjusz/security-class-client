import React, {useState, useEffect} from "react";
import "./SignIn.css";
import {faUser, faLock} from "@fortawesome/free-solid-svg-icons";
import {Form, Input, Button, notification} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {login} from "../../../util/ApiUtil";
import {
    UserOutlined,
    LockOutlined,
    DingtalkOutlined,
} from "@ant-design/icons";

const SignIn = (props) => {

    const [username, setUsername] = useState();
    const [redirect, setRedirect] = useState();

    useEffect(() => {
        if (localStorage.getItem("accessToken") !== null) {
            props.history.push("/");
        }
    }, []);

    const onSubmitted = (values) => {
///setLoading(true)//dorobic loader dla czekania na zwrotke
        login(values).then((response) => {
            console.log(response)
            if (response.isTwoFactorAuthentication) {
                setUsername(values.username);
                setRedirect("/verify");
            } else {
                localStorage.setItem("accessToken", response.accessToken)
                props.history.push("/")
            }
        }).catch((error) => {
            console.log("Blad "+error.status);
            if (error.status === 401) {
                notification.error({
                    message: "Błąd",
                    description: "Nazwa użytkownika lub hasło nieprawidłowe!. Proszę spróbować ponownie!",
                });
            } else {
                notification.error({
                    message: "Błąd",
                    description:
                        error.message || "Przepraszamy, coś poszło nie tak. proszę spróbować ponownie!",
                });
            }
        })

    }
    return (
        // <div className="login-form">
        //     <form onSubmit={onSubmitted}>
        //         <h2 className="text-center">Zaloguj się</h2>
        //         <div className="form-group">
        //             <div className="input-group">
        //                 <div className="input-group-prepend">
        //             <span className="input-group-text">
        //                  <FontAwesomeIcon icon={faUser}/>
        //             </span>
        //                 </div>
        //                 <input type="text" className="form-control" name="username" placeholder="Username"
        //                        required="required"/>
        //             </div>
        //         </div>
        //         <div className="form-group">
        //             <div className="input-group">
        //                 <div className="input-group-prepend">
        //             <span className="input-group-text">
        //                  <FontAwesomeIcon icon={faLock}/>
        //             </span>
        //                 </div>
        //                 <input type="password"
        //                        className="form-control"
        //                        name="password"
        //                        placeholder="Password"
        //                        required="required"
        //                 />
        //             </div>
        //         </div>
        //         <div className="form-group">
        //             <button type="submit" className="btn btn-primary login-btn btn-block">Zaloguj</button>
        //         </div>
        //         <div className="clearfix">
        //             <a href="#" className="float-right">Zapomniano hasła?</a>
        //         </div>
        //     </form>
        //     <p className="text-center text-muted small">Nie posiadasz konta? <a href="/register">Zarejestruj
        //         się!</a></p>
        // </div>
        //

        <div className="login">

            <Form
                name="normal_login"
                className="login-form"
                initialValues={{remember: false}}
                onFinish={onSubmitted}>


                <h2 className="text-center">Zaloguj się</h2>
                <Form.Item
                    name="username"
                    rules={[{required: true, message: "Proszę o podanie adresu e-mail", type: "email"}]}
                >
                    <Input
                        size="large"
                        addonBefore=<FontAwesomeIcon icon={faUser}/>
                    placeholder="E-mail"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{required: true, message: "Proszę o podanie hasła"}]}
                >
                    <Input
                        size="large"
                        addonBefore=<FontAwesomeIcon icon={faLock}/>
                    type="password"
                    placeholder="Hasło"
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        shape="round"
                        size="large"
                        htmlType="submit"
                        className="btn btn-primary login-btn btn-block login-form-button"
                    >
                        Zaloguj
                    </Button>
                </Form.Item>
            </Form>
        </div>


    );
}


export default SignIn;
