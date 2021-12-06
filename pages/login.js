import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Router from "next/router";
import { Form, Campo, Submit, Error } from "../components/ui/Form";
import { css } from "@emotion/react";

import useValidation from "../hooks/useValidation";
import validarLogin from "../validacion/validarLogin";
import firebase from "../firebase/firebase";

const state = {
    email: "",
    password: "",
};

const Login = () => {
    const [err, serErr] = useState(false);

    const login = async () => {
        try {
            await firebase.login(email, password);
            Router.push("/");
        } catch (e) {
            console.log(e.message);
            serErr(e.message);
        }
    };
    const { valor, error, handleChange, handleSubmit, handleBlur } =
        useValidation(state, validarLogin, login);
    const { email, password } = valor;

    return (
        <>
            <Layout>
                <h1
                    css={css`
                        text-align: center;
                        margin-top: 5rem;
                    `}
                >
                    Login
                </h1>
                {error &&
                    Object.values(error).map((err) => (
                        <Error key={err}>{err}</Error>
                    ))}
                {err && <Error>{err}</Error>}
                <Form onSubmit={handleSubmit} noValidate>
                    <Campo>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Campo>

                    <Campo>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Campo>
                    <Submit type="submit" value="Login" onClick={login} />
                </Form>
            </Layout>
        </>
    );
};

export default Login;
