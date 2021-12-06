import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Router from "next/router";
import { Form, Campo, Submit, Error } from "../components/ui/Form";
import { css } from "@emotion/react";

import useValidation from "../hooks/useValidation";
import validarRegister from "../validacion/validarRegister";
import firebase from "../firebase/firebase";

const state = {
    nombre: "",
    email: "",
    password: "",
};
const Register = () => {
    const [err, serErr] = useState(false);

    const register = async () => {
        try {
            await firebase.register(nombre, email, password);
            Router.push("/");
        } catch (e) {
            console.log(e.message);
            serErr(e.message);
        }
    };
    const { valor, error, handleChange, handleSubmit, handleBlur } =
        useValidation(state, validarRegister, register);
    const { nombre, email, password } = valor;

    return (
        <>
            <Layout>
                <h1
                    css={css`
                        text-align: center;
                        margin-top: 5rem;
                    `}
                >
                    Register
                </h1>
                {error &&
                    Object.values(error).map((err) => (
                        <Error key={err}>{err}</Error>
                    ))}
                {err && <Error>{err}</Error>}
                <Form onSubmit={handleSubmit} noValidate>
                    <Campo>
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            placeholder="nombre"
                            name="nombre"
                            value={nombre}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Campo>

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
                    <Submit
                        type="submit"
                        value="Registrar"
                        onClick={register}
                    />
                </Form>
            </Layout>
        </>
    );
};

export default Register;
