import { FunctionComponent } from "react";
import TestimonialsPricing from "./TestimonialsPricing";
import Contact from "./Contact";
import Footer from "./GroupComponent1";

export type TestimonialsType = {
  className?: string;
};

const Testimonials: FunctionComponent<TestimonialsType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[451.3px] box-border gap-12 shrink-0 max-w-full text-center text-21xl text-color-2 font-heading-text-inter-semi-bold-24 mq800:gap-6 mq800:pb-[190px] mq800:box-border mq1325:pb-[293px] mq1325:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        <div className="h-[393.2px] w-[383.5px] absolute !m-[0] top-[39.2px] left-[-218.1px] [filter:blur(1000px)] rounded-[50%] bg-color" />
        <TestimonialsPricing />
      </div>
      <Contact vector="/vector-9.svg" />
      <Footer
        sloganBackground="/-1@2x.png"
        pricingDisplay="inline-block"
        pricingMinWidth="54px"
        companyDisplay="inline-block"
        companyMinWidth="74px"
        aboutTextDecoration="none"
        divider="/divider.svg"
        privacyPolicyDisplay="inline-block"
        privacyPolicyMinWidth="107px"
        productDisplay="inline-block"
        productMinWidth="61px"
        featuresDisplay="inline-block"
        featuresMinWidth="67px"
        aboutDisplay="inline-block"
        aboutMinWidth="47px"
        contactDisplay="inline-block"
        contactMinWidth="62px"
        groupDivMinHeight="50px"
        footerContainerWidth="1206px"
        footerContentHeight="122px"
        legalHeight="44px"
        legalLinksWidth="307px"
      />
    </section>
  );
};

export default Testimonials;
