import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Input = styled.input`
    border: 1px solid var(--gris3);
    padding: 1rem;
    min-width: 300px;
`;

const Submit = styled.button`
    height: 3rem;
    width: 3rem;
    display: block;
    background-size: 4rem;
    background-image: url("./static/img/buscar.png");
    background-repeat: no-repeat;
    position: absolute;
    right: 1rem;
    top: 1px;
    background-color: white;
    text-indent: -9999px;
    border: none;
`;

const Search = () => {
    return (
        <form
            css={css`
                position: relative;
            `}
        >
            <Input type="text" placeholder="Buscar Productos" />
            <Submit type="submit">Search</Submit>
        </form>
    );
};

export default Search;
