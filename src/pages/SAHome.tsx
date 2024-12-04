import { FunctionComponent } from "react";
import ButtonCTA from "../components/buttons/ButtonCTA";
import ProblemContainer from "../components/ProblemContainer";
import FeatureContainer1 from "../components/FeatureContainer1";
import FeatureContainer2 from "../components/FeatureContainer2";
import FeatureContainer3 from "../components/FeatureContainer3";
import SpecialPricing from "../components/SpecialPricing";
import VideoDemo from "../components/VideoDemo";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/footer/Footer"
import TopNavigation from "../components/navigation/TopNavigation";
import Hero from "../components/hero/Hero";
import Banner from "../components/Banner";

const SAHome: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-color-5 overflow-hidden flex flex-col items-start justify-start gap-24 leading-[normal] tracking-[normal] text-left text-45xl text-color-2 font-heading-text-inter-semi-bold-24 mq450:gap-6 mq750:gap-12">
      <TopNavigation
        sALogo1="/sa-logo-1@2x.png"
        topNavigationFlex="unset"
        topNavigationAlignSelf="stretch"
        featuresWidth="unset"
        featuresDisplay="inline-block"
        featuresAlignItems="unset"
        featuresMinWidth="76px"
        pricingDisplay="inline-block"
        pricingMinWidth="61px"
        contactWidth="unset"
        contactDisplay="inline-block"
        contactAlignItems="unset"
        contactMinWidth="70px"
        topNavigationHeight="unset"
        topNavigationWidth="unset"
        topNavigationJustifyContent="space-between"
        topNavigationGap="20px"
        sALogo1Height="unset"
        sALogo1AlignSelf="stretch"
        sALogo1MaxHeight="100%"
        sALogo1MinHeight="60px"
        navLinksHeight="unset"
        linksContainerHeight="unset"
        linksContainerWidth="unset"
        linksContainerFlex="1"
        featuresPricingContactWidth="unset"
        featuresPricingContactHeight="unset"
        featuresPricingContactJustifyContent="space-between"
        featuresPricingContactGap="20px"
        featuresPricingContactAlignSelf="stretch"
        featuresHeight="unset"
        pricingHeight="unset"
        pricingWidth="unset"
        pricingAlignItems="unset"
        contactHeight="unset"
        className="z-10"
      />
      {/* <div className="w-[532.4px] h-[545.8px] absolute !m-[0] bottom-[2817.4px] left-[-417px] [filter:blur(1000px)] rounded-[50%] bg-color" /> */}
      <section className="self-stretch h-[1206.6px] absolute !m-[0] w-[111.11%] top-[0px] right-[-11.11%] left-[0%]">
        <img
          className="absolute top-[0px] left-[-54px] w-[1600px] h-[870.8px]"
          alt=""
          src="/background.svg"
        />
        <div className="absolute top-[557.6px] left-[1172.8px] [filter:blur(1000px)] rounded-[50%] bg-color w-[634px] h-[649px] z-[1] " />
        <div className="absolute top-[-375px] left-[-367px] [filter:blur(1000px)] rounded-[50%] bg-color w-[634px] h-[650px] z-[1]" />
        {/* <img
          className="absolute top-[252px] left-[52rem] w-[585px] h-[446.5px] object-contain z-[2] mq800:hidden"
          loading="lazy"
          alt=""
          src="/mask-group@2x.png"
        /> */}
        <img
          className="absolute top-[252px] right-56 mq1325:right-48 mq1275:right-40 w-[45rem] h-[446.5px] object-contain z-[2] mq1125:hidden"
          loading="lazy"
          alt=""
          src="/HeroImg.png"
        />
      </section>
      <Hero />
      <ProblemContainer />
      <div className="w-[100%] mq1125:bg-color/5">
        <Banner />
        <FeatureContainer1 />
        <FeatureContainer2 />
        <FeatureContainer3 />
        <SpecialPricing />
      </div>
      <VideoDemo />
      <section className="self-stretch flex flex-col items-start justify-start gap-12 max-w-full mq750:gap-6">

        <Testimonials />
        <div id="contact">
          <Contact
            vector="/vector-9.svg"
            contactHeaderWidth="unset"
            heading3Width="218px"
            heading3Height="unset"
            ourTeamIsAlignSelf="stretch"
            contactInfoWidth="unset"
          />
        </div>

        <Footer sloganBackground="/-1@2x.png" divider="/divider.svg" />
      </section>
    </div>
  );
};

export default SAHome;