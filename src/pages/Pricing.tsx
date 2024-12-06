import { FunctionComponent } from "react";
import PricingSection from "../components/PricingSection";
import SpecialPricing from "../components/SpecialPricing";
import FAQ from "../components/FAQ";
import TopNavigation from "../components/navigation/TopNavigation";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/footer/Footer";

const Pricing: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-color-5 overflow-hidden flex flex-col items-center justify-center gap-24 leading-[normal] tracking-[normal] text-45xl text-color-2 font-heading-text-inter-semi-bold-24 mq450:gap-6 mq750:gap-12">
      <TopNavigation
        sALogo1="/sa-logo-1@2x.png"
        pricingColor="#26a96c"
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
      <section className="w-[calc(100%_+_1340px)] h-[1366.6px] absolute !m-[0] top-[0px] right-[-1340px] left-[0px]">
        <img
          className="absolute top-[0px] left-0 w-[1600px]  h-[870.8px]"
          alt=""
          src="/background.svg"
        />
        <img
          className="absolute top-0 rotate-180 left-[1600px] w-[1600px]  h-[870.8px]"
          alt=""
          src="/background.svg"
        />
        <div className="absolute top-[717.6px] left-[1232.8px] [filter:blur(1000px)] rounded-[50%] bg-color w-[634px] h-[649px] z-[1]" />
        <div className="absolute top-[-375px] left-[-367px] [filter:blur(1000px)] rounded-[50%] bg-color w-[634px] h-[650px] z-[1]" />
      </section>
      <PricingSection />
      <img
        className="w-screen h-[483px] mq800:h-[108rem] mq450:h-[91rem] mq750:h-[104rem] mq1325:h-[80rem] mq1125:h-[86rem] mq909:h-[116rem] absolute !m-[0] top-[431px] left-[-1px] object-cover z-[2]"
        alt=""
        src="/background-1@2x.png"
      />
      <div className="w-screen mq1125:-mt-[9rem] mq1125:pt-32 space-y-24 mq1125:space-y-20 max-w-[1559px]">
        <SpecialPricing />
        <FAQ />
      </div>
      <section className="self-stretch flex flex-col items-center justify-start gap-12 max-w-full mq750:gap-6 ">
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

export default Pricing;
