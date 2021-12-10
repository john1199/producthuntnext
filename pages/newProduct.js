import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Router from "next/router";
import { Form, Campo, Submit, Error } from "../components/ui/Form";
import { css } from "@emotion/react";

import useValidation from "../hooks/useValidation";
import validarProduct from "../validacion/validarProduct";
import firebase from "../firebase/firebase";

const state = {
    nombre: "",
    empresa: "",
    imagen: "",
    url: "",
    descripcion: "",
};

const NewProduct = () => {
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
        useValidation(state, validarProduct, register);
    const { nombre, empresa, imagen, url, descripcion } = valor;
    return (
        <>
            <Layout>
                <h1
                    css={css`
                        text-align: center;
                        margin-top: 5rem;
                    `}
                >
                    Nuevo Producto
                </h1>
                {error &&
                    Object.values(error).map((err) => (
                        <Error key={err}>{err}</Error>
                    ))}
                {err && <Error>{err}</Error>}
                <Form onSubmit={handleSubmit} noValidate>
                    <fieldset>
                        <legend>Informacion General</legend>
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
                            <label htmlFor="empresa">Empresa</label>
                            <input
                                type="text"
                                id="empresa"
                                placeholder="empresa"
                                name="empresa"
                                value={empresa}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Campo>

                        <Campo>
                            <label htmlFor="imagen">Imagen</label>
                            <input
                                type="file"
                                id="imagen"
                                name="imagen"
                                value={imagen}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Campo>

                        <Campo>
                            <label htmlFor="url">Url</label>
                            <input
                                type="text"
                                id="url"
                                name="url"
                                value={url}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Campo>
                    </fieldset>
                    <fieldset>
                        <legend>Sobre el producto</legend>
                        <Campo>
                            <label htmlFor="descripcion">Descripcion</label>
                            <textarea
                                id="descripcion"
                                placeholder="descripcion"
                                name="descripcion"
                                value={descripcion}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Campo>
                    </fieldset>
                    <Submit
                        type="submit"
                        value="Crear Producto"
                        onClick={register}
                    />
                </Form>
            </Layout>
        </>
    );
};

export default NewProduct;
