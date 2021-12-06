import React, { useContext } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { FirebaseContext } from "../../firebase";

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
    const { userAuth } = useContext(FirebaseContext);
    return (
        <Navb>
            <Link href="/">Inicio</Link>
            <Link href="/populares">Populares</Link>
            {userAuth && <Link href="/newProduct">Nuevo Producto</Link>}
        </Navb>
    );
};

export default Nav;
