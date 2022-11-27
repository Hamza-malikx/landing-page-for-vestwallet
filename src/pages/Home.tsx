import React from "react";
import Header from "../layouts/home/navbar/Header";
import Hero from "../layouts/home/hero/Hero";
import Cards from "../layouts/home/cards/Cards";
import RestWrappers from "../layouts/home/restWrappers/RestWrappers";
import MobileSection from "../layouts/home/mobileSection/MobileSection";
import Footer from "../components/footer/Footer";
import { useSelector } from "react-redux";
const Home = () => {
  const { theme } = useSelector((state: any) => state.getThemeReducer);
  return (
    <div className="home">
      <Header />
      <Hero />
      <Cards />
      <RestWrappers />
      <MobileSection />
      <Footer />
    </div>
  );
};

export default Home;
