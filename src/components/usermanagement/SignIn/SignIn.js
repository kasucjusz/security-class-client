import React, {Component} from "react";
import "./SignIn.css";
import {faUser, faLock} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class SignIn extends Component {


    render() {
        return (
            <div className="login-form">
                <form action="/examples/actions/confirmation.php" method="post">
                    <h2 className="text-center">Zaloguj się</h2>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                    <span className="input-group-text">
                         <FontAwesomeIcon icon={faUser}/>
                    </span>
                            </div>
                            <input type="text" className="form-control" name="username" placeholder="Username"
                                   required="required"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                    <span className="input-group-text">
                         <FontAwesomeIcon icon={faLock}/>
                    </span>
                            </div>
                            <input type="password" className="form-control" name="password" placeholder="Password"
                                   required="required"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary login-btn btn-block">Zaloguj</button>
                    </div>
                    <div className="clearfix">
                        <a href="#" className="float-right">Zapomniano hasła?</a>
                    </div>
                </form>
                <p className="text-center text-muted small">Nie posiadasz konta? <a href="#">Zarejestruj się!</a></p>
            </div>
        );
    }
}

export default SignIn;
