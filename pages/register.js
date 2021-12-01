import React from "react";
import Layout from "../components/layout/Layout";
import { Form, Campo, Submit } from "../components/ui/Form";
import { css } from "@emotion/react";

import useValidation from "../hooks/useValidation";
import validarRegister from "../validacion/validarRegister";

const state = {
    nombre: "",
    email: "",
    password: "",
};
const Register = () => {
    const register = () => {
        console.log(state);
    };
    const { valor, error, submitForm, handleChange, handleSubmit } =
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
                        />
                    </Campo>
                    <Submit type="submit" value="Registrar" />
                </Form>
            </Layout>
        </>
    );
};

export default Register;
