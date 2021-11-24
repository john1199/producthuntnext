import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <style jsx>
                {`
                    h1 {
                        color: red;
                    }
                `}
            </style>
        </div>
    );
};

export default Home;
