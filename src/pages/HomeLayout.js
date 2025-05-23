import React from "react";
import Header from "../components/Header";
import WelcomeBanner from "../components/WelcomeBanner";
import HeroSection from "../components/HeroSections";
import CountryCard from "../components/CountryCardHorizontal";
import LoadMoreButton from "../components/LoadMoreButton";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import CountryGrid from "../components/CountryList";

const HomeLayout = () => {

    return (
        <div  >
            <Header />
            <WelcomeBanner />
            <ImageSlider />
            <CountryGrid />
            <LoadMoreButton />
            <Footer />
        </div>
    )
}
export default HomeLayout;