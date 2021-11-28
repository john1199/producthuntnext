import React from "react";
import Search from "../ui/Search";
import Nav from "../layout/Nav";
import Boton from "../ui/Boton";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Container = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;

const Logo = styled.a`
    color: var(--naranja);
    font-size: 4rem;
    font-weight: 700;
    font-family: "Roboto Slab", serif;
    margin-right: 2rem;
`;

const Header = () => {
    const user = false;
    return (
        <header
            css={css`
                border-bottom: 2px solid var(--gris3);
                padding: 1rem;
            `}
        >
            <Container>
                <div
                    css={css`
                        display: flex;
                        align-items: center;
                    `}
                >
                    <Link href="/" passHref>
                        <Logo>P</Logo>
                    </Link>
                    <Search />
                    <Nav />
                </div>
                <div
                    css={css`
                        display: flex;
                        align-items: center;
                    `}
                >
                    {user ? (
                        <>
                            <p
                                css={css`
                                    margin-right: 2rem;
                                `}
                            >
                                Hola: John
                            </p>
                            <Boton bgColor="true">Logout</Boton>
                        </>
                    ) : (
                        <>
                            <Link href="/login" passHref>
                                <Boton bgColor="true">Login</Boton>
                            </Link>
                            <Link href="/register" passHref>
                                <Boton>Register</Boton>
                            </Link>
                        </>
                    )}
                </div>
            </Container>
        </header>
    );
};

export default Header;
