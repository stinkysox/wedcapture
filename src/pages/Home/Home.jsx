import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import MarqueeImages from "../../components/MarqueeImages/MarqueeImages";
import StatsCounter from "../../components/StatsCounter/StatsCounter";
import OurServices from "../../components/OurServices/OurServices";
import TeasersSection from "../../components/TeasersSection/TeasersSection";
import LatestWork from "../../components/LatestWork/LatestWork";
import Testimonials from "../../components/Testimonials/Testimonials";
import ContactSection from "../../components/ContactSection/ContactSection";
import Footer from "../../components/Footer/Footer";
import ScrollButton from "../../components/ScrollButton/ScrollButton";
import BannerBottom from "../../components/BannerBottom/BannerBottom";
const Home = () => {
  return (
    <section className="home-container">
      <Navbar />
      <Banner />
      <BannerBottom
        title="Framed inForever"
        backgroundImage="https://i.pinimg.com/736x/cd/d2/2f/cdd22f76b4f2dcf1ca7f62f5233fe41c.jpg"
      />
      <MarqueeImages />
      <BannerBottom
        title="Chasing Light &Love"
        backgroundImage="https://i.pinimg.com/736x/06/80/f7/0680f7b5f982c2e77b5eaa9c125bd68b.jpg"
      />
      <StatsCounter />
      <BannerBottom
        title="Stories inStills"
        backgroundImage="https://i.pinimg.com/736x/6e/8c/72/6e8c721bf65d1169e2ac0741ec2786b2.jpg"
      />
      <OurServices />
      <BannerBottom
        title="Echoes ofEmotion"
        backgroundImage="https://i.pinimg.com/736x/fe/f1/5a/fef15aa8a526a9ed49c39c462261bb45.jpg"
      />
      <LatestWork />
      <BannerBottom
        title="Time HeldGently"
        backgroundImage="https://i.pinimg.com/736x/d5/81/32/d58132d7dc7d4c77cf07210de3340ee8.jpg"
      />
      <TeasersSection />
      <BannerBottom
        title="The Human Lens"
        backgroundImage="https://i.pinimg.com/736x/57/4b/ee/574bee42bb8868e0274110d051b6a870.jpg"
      />
      <Testimonials />
      <BannerBottom
        title="Unscripted Beauty"
        backgroundImage="https://i.pinimg.com/736x/8d/48/1b/8d481b484f1e94d8c92ad3c300cac4c1.jpg"
      />
      <ContactSection />
      <BannerBottom
        title="Moments Between Moments"
        backgroundImage="https://i.pinimg.com/736x/f2/87/6e/f2876ed85883462f521b2b8cd5ce3769.jpg"
      />
      <Footer />
      <ScrollButton />
    </section>
  );
};

export default Home;
