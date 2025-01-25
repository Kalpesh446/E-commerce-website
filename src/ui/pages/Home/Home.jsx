import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import Sale from "../../components/home/Sale/Sale";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import YearProduct from "../../components/home/YearProduct/YearProduct";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      {/*    Home banner    */}
      <Banner />
      {/* Banner bottom */}
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        {/* sale section */}
        <Sale />
        {/* New Arrivals section*/}
        <NewArrivals />
        {/* best Sellers section */}
        <BestSellers />
        {/* year Product section*/}
        <YearProduct />
        {/* special offer section */}
        <SpecialOffers />
      </div>
    </div>
  );
};

export default Home;
