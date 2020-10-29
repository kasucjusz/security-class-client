import React, {Component} from "react";
import "./SignUp.css"


const SignUp =(props)=>{
        return (
            <div className="register-form">
                <form>
                    <h2 className="text-center">Zarejestruj się</h2>


                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                            </div>
                            <input type="text" className="form-control" name="username" placeholder="Imię i Nazwisko"
                                   required="required"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                            </div>
                            <input type="text" className="form-control" name="username" placeholder="Nick"
                                   required="required"/>
                        </div>
                    </div>


                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                            </div>
                            <input type="email" className="form-control" placeholder="Adres E-mail"/>
                        </div>
                    </div>


                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                            </div>
                            <input type="password" className="form-control" name="password" placeholder="Hasło"
                                   required="required"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Włącz dwuetapową rejestrację
                                </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary register-btn btn-block">Zarejestruj</button>
                    </div>
                </form>
            </div>
        );

        
}

export default SignUp;