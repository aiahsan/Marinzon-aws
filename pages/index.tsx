import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CategoryCard from "../src/components/cards/CategoryCard";
import EasyCard from "../src/components/cards/EasyCard";
import ServiceCard from "../src/components/cards/ServiceCard";
import Navbar from "../src/components/header/Navbar";
import Topbar from "../src/components/header/Topbar";
import Heading from "../src/components/headings/Heading";
import Footer from "../src/components/footer/Footer";
import { useIntl } from "react-intl";
import { useRouter } from 'next/router'
import HomaPage from './[language]/index'
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  
  return <HomaPage/>
};

export default Home;
