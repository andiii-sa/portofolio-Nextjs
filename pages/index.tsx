import type { NextPage } from "next";
import About from "../components/organisms/About";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";
import MainBanner from "../components/organisms/MainBanner";
import PortofolioDashboard from "../components/organisms/PortofolioDashboard";

const Home: NextPage = () => {
  return (
    <>
      <Header page="/" />
      <MainBanner />
      <About />
      <PortofolioDashboard />
      <Footer />
    </>
  );
};

export default Home;
