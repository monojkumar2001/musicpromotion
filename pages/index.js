import Image from "next/image";
import image1 from "../public/assets/image-1.png";
import image2 from "../public/assets/image-2.png";
// Layout and components
import AppLayout from "@components/layout/AppLayout";
import ServiceSection from "@components/sections/ServiceSection";
import VisionSection from "@components/sections/VisionSection";
import AboutSection from "@components/sections/ChainUpSection";
import FaqSection from "@components/sections/FaqSection";
import ReviewSection from "@components/sections/ReviewSection";
import VideoIntroSection from "@components/sections/VideoIntroSection";
import PricingSection from "@components/sections/PricingSection";
import ImageSection from "@components/sections/ImageSection";
import EngageSection from "@components/sections/EngageSection";
import Link from "next/link";
import ProvideCount from "@components/sections/ProvideCount";
import WhyUs from "@components/sections/WhyUs";
import Services from "@components/sections/Services";
import ChainUpSection from "@components/sections/ChainUpSection";

// Images

const Home = () => {
  return ( 
    <div id="home">
      <div className="hero">
        <div className="banner-wrapper">
          <div className="banner-inner">
            <div className="col">
              <div className="banner-content">
                <p className="sm-title">Organic & Genre</p>
                <h1 className="banner-title">
                Your One-step E-Commerce Branding 
                </h1>
                <p className="banner-des">
                Get your songs heard by thousands of music lovers. Grow your fanbase. Get featured in hot celebrity curator playlists and skyrocket your Spotify channel popularity.
                </p>
           <Link href='/'>
            <button className="custom-btn"> GET STARTED</button>
           </Link>
              </div>
            </div>
            <div className="col">
              <div className="banner-right">
                <img src="/assets/home-1/img/hero-img.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
<ProvideCount/>
<WhyUs/>
<Services  type="one"/>
      {/* <VisionSection type="one"  /> */}
      {/* <AboutSection type="one" /> */}
      <ChainUpSection  type="one"/>
      {/* <PricingSection data={pricingData} type="one" /> */}

      <ImageSection />
      <EngageSection />
      {/* <VideoIntroSection type="one" /> */}
      <FaqSection type="one" />
      <ReviewSection type="one" />
    </div>
  );
};

Home.title = "Music Promotion Home";
Home.layout = AppLayout;

export default Home;

const pricingData = [
  {
    package_type: "basic",
    cur_price: "69",
    off_price: "139 ",
    percent: "50",
    includes: [
      "Reach 10k Audience Base",
      "Distribution To 100 Curators",
      "Distribution To 100 Playlists",
      "Distribution To 100 Radios",
      "Unlimited Revisions",
      "Start Within 24 hours",
      "2-3 Days Delivery",
    ],
    details:
      "Engagement may vary.*Typical engagements on average 5,000 streams and 700 followers organically",
  },
  {
    package_type: "Standard",
    cur_price: "119",
    off_price: "239",
    percent: "50",
    includes: [
      "Reach 30k Audience Base",
      "Distribution To 250 Curators",
      "Distribution To 250 Playlists",
      "Distribution To 250 Radios",
      "Unlimited Revisions",
      "Start Within 24 hours",
      "3-5 Days Delivery",
    ],
    details:
      "Engagement may vary.*Typical engagements on average 15,000 streams and 1800 followers organically",
  },
  {
    package_type: "premium",
    cur_price: "299",
    off_price: "499",
    percent: "50",
    includes: [
      "Reach 100k Audience Base",
      "Distribution To 550 Curators",
      "Distribution To 550 Playlists",
      "Distribution To 550 Radios",
      "Unlimited Revisions",
      "Start Within 24 hours",
      "9-10 Days Delivery",
    ],
    details:
      "Engagement may vary.*Typical engagements on average 50,000 streams and 10000 followers organically",
  },
];
