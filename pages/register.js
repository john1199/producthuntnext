import React from "react";
import Layout from "../components/layout/Layout";
import { Form, Campo, Submit } from "../components/ui/Form";
import { css } from "@emotion/react"; 

const Register = () => {
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
                <Form>
                    <Campo>
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            placeholder="nombre"
                            name="nombre"
                        />
                    </Campo>

                    <Campo>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="email"
                            name="email"
                        />
                    </Campo>

                    <Campo>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="password"
                            name="password"
                        />
                    </Campo>
                    <Submit type="submit" value="Registrar" />
                </Form>
            </Layout>
        </>
    );
};

export default Register;
