import Head from "next/head";
import Image from "next/image";
import styled from "@emotion/styled";

const Heading = styled.h1`
    color: red;
`;

const Home = () => {
    return (
        <div>
            <Heading>Hello World</Heading>
        </div>
    );
};

export default Home;
