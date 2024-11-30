import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopNavigation from "../components/TopNavigation";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import Testimonials from "../components/Testimonials";

const Pricing: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSALogoClick = useCallback(() => {
    navigate("/sa-home");
  }, [navigate]);

  return (
    <div className="w-full h-[3577px] relative bg-color-5 overflow-hidden flex flex-col items-end justify-start gap-24 leading-[normal] tracking-[normal] mq800:h-auto mq800:gap-12 mq450:gap-6">
      <TopNavigation
        sALogo1="/sa-logo-1@2x.png"
        onSALogoClick={onSALogoClick}
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
      />
      <section className="w-full h-[1366.6px] absolute !m-[0] top-[0px] right-[0px] left-[0px]">
        <img
          className="absolute top-[0px] left-[-54px] w-[1548px] h-[870.8px]"
          alt=""
          src="/background.svg"
        />
        <div className="absolute top-[717.6px] left-[1232.8px] [filter:blur(1000px)] rounded-[50%] bg-color w-[634px] h-[649px] z-[1]" />
        <div className="absolute top-[-375px] left-[-367px] [filter:blur(1000px)] rounded-[50%] bg-color w-[634px] h-[650px] z-[1]" />
      </section>
      <FrameComponent />
      <img
        className="w-[1440px] h-[483px] absolute !m-[0] top-[431px] left-[-1px] object-cover z-[2]"
        alt=""
        src="/background-1@2x.png"
      />
      <FrameComponent1 />
      <FrameComponent2 />
      <Testimonials />
      <div className="mr-[-241.6px] w-[445.6px] h-[435.6px] relative [filter:blur(1000px)] rounded-[50%] bg-color shrink-0 max-w-full" />
    </div>
  );
};

export default Pricing;
