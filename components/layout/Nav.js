import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

const Navb = styled.nav`
    padding-left: 2rem;
    a {
        font-size: 1.8rem;
        margin-right: 2rem;
        color: var(--gris2);
        font-family: "PT Sans", sans-serif;
        &:last-of-type {
            margin-right: 0;
        }
    }
`;
const Nav = () => {
    return (
        <Navb>
            <Link href="/">Inicio</Link>
            <Link href="/populares">Populares</Link>
            <Link href="/newProduct">Nuevo Prodcuto</Link>
        </Navb>
    );
};

export default Nav;
