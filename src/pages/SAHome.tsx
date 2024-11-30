import { FunctionComponent } from "react";
import Header from "../components/Header";
import ButtonCTA from "../components/ButtonCTA";
import ProblemContainer from "../components/ProblemContainer";
import FeatureContainer1 from "../FeatureContainer1";
import FeatureContainer2 from "../FeatureContainer2";
import FeatureContainer3 from "../FeatureContainer3";
import SpecialPricingHome from "../SpecialPricingHome";
import VideoDemo from "../VideoDemo";
import TestimonialsHome from "../components/TestimonialsHome";
import Contact from "../components/Contact";
import Footer from "../components/GroupComponent1";

const SAHome: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-color-5 overflow-hidden flex flex-col items-start justify-start gap-24 leading-[normal] tracking-[normal] text-left text-45xl text-color-2 font-heading-text-inter-semi-bold-24 mq450:gap-6 mq750:gap-12">
      <div className="w-[532.4px] h-[545.8px] absolute !m-[0] bottom-[2817.4px] left-[-417px] [filter:blur(1000px)] rounded-[50%] bg-color" />
      <section className="w-full h-[1206.6px] absolute !m-[0] top-[0px] right-[0px] left-[0px]">
        <img
          className="absolute top-[0px] left-[-54px] w-[1548px] h-[870.8px]"
          alt=""
          src="/background.svg"
        />
        <div className="absolute top-[557.6px] left-[1172.8px] [filter:blur(1000px)] rounded-[50%] bg-color w-[634px] h-[649px] z-[1]" />
        <div className="absolute top-[-375px] left-[-367px] [filter:blur(1000px)] rounded-[50%] bg-color w-[634px] h-[650px] z-[1]" />
        <img
          className="absolute top-[252px] left-[740px] w-[585px] h-[446.5px] object-contain z-[2]"
          loading="lazy"
          alt=""
          src="/mask-group@2x.png"
        />
      </section>
      <Header />
      <div className="w-[922px] flex flex-row items-start justify-start pt-0 px-[70px] pb-[99px] box-border max-w-full mq750:pb-16 mq750:box-border mq1100:pl-[35px] mq1100:pr-[35px] mq1100:box-border">
        <div className="flex-1 flex flex-row items-end justify-start max-w-full [row-gap:20px] mq750:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-6 min-w-[379px] shrink-0 max-w-full mq750:min-w-full">
            <h1 className="m-0 self-stretch relative text-inherit capitalize z-[2] font-[inherit] mq450:text-19xl mq750:text-32xl">
              <p className="m-0 font-semibold">Unlocking</p>
              <p className="m-0 font-semibold">Opportunities.</p>
              <p className="m-0 text-color">
                <b>Empowering</b>
              </p>
              <p className="m-0">
                <b>Ownership.</b>
              </p>
            </h1>
            <div className="w-[317px] relative text-lg leading-[150%] text-color-3 inline-block z-[1]">
              Use the Deal Flow Assistant built for individual business buyers.
            </div>
            <ButtonCTA requestAccessTextDecoration="unset" />
          </div>
          <div className="h-[205px] flex flex-col items-start justify-end pt-0 px-0 pb-[39px] box-border ml-[-9px] text-center text-5xl text-main-color-1 mq750:flex-1 mq750:ml-0">
            <div className="self-stretch flex-1 shadow-[24px_24px_64px_rgba(0,_0,_0,_0.15)] [backdrop-filter:blur(24px)] rounded-[14px] bg-gray-200 border-gray-100 border-[1px] border-solid flex flex-col items-start justify-start py-[18px] px-[19px] shrink-0 z-[3]">
              <div className="self-stretch flex flex-col items-start justify-start relative gap-2.5">
                <div className="self-stretch flex flex-col items-start justify-start gap-2.5">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="h-12 w-12 relative"
                      alt=""
                      src="/avatar.svg"
                    />
                    <img
                      className="h-12 w-12 relative z-[1] ml-[-24px]"
                      alt=""
                      src="/avatar-1.svg"
                    />
                    <img
                      className="h-12 w-12 relative z-[2] ml-[-24px]"
                      alt=""
                      src="/avatar-1.svg"
                    />
                    <img
                      className="h-12 w-12 relative rounded-[150px] overflow-hidden shrink-0 z-[3] ml-[-24px]"
                      alt=""
                      src="/add.svg"
                    />
                    <img
                      className="h-12 w-12 relative hidden z-[5]"
                      alt=""
                      src="/avatar1.svg"
                    />
                  </div>
                  <div className="w-[147px] relative leading-[32px] font-semibold inline-block mq450:text-lgi mq450:leading-[26px]">
                    120+ Clients
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-2 text-base text-darkslategray-200 font-body-text-plus-jakarta-sans-regular-16">
                    <img
                      className="h-[26px] w-[26px] relative rounded-[1px]"
                      loading="lazy"
                      alt=""
                      src="/star-1.svg"
                    />
                    <div className="flex-1 relative leading-[24px]">
                      5.0 (3.1K Reviews)
                    </div>
                  </div>
                </div>
                <img
                  className="w-[124px] h-10 absolute !m-[0] top-[18px] left-[0px] hidden z-[1]"
                  alt=""
                  src="/group-1171274682.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProblemContainer />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-12 box-border max-w-full text-center text-29xl text-color-5 font-heading-text-inter-semi-bold-24 mq450:pb-[31px] mq450:box-border">
        <div className="h-[390px] flex-1 [background:linear-gradient(180deg,_#03012c,_rgba(3,_1,_44,_0.95))] flex flex-col items-start justify-start pt-12 px-[70px] pb-[54px] box-border gap-5 max-w-full mq450:pt-[31px] mq450:pb-[35px] mq450:box-border mq750:pl-[35px] mq750:pr-[35px] mq750:box-border">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[216px] pr-[215px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[54px] mq750:pr-[53px] mq750:box-border mq1275:pl-[108px] mq1275:pr-[107px] mq1275:box-border">
            <h1 className="m-0 flex-1 relative text-inherit font-semibold font-[inherit] mq450:text-10xl mq750:text-19xl">
              <p className="m-0">Supercharge your acquisition journey</p>
              <p className="m-0">with Search Assistant</p>
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center">
            <img
              className="h-3 w-9 relative"
              loading="lazy"
              alt=""
              src="/group-1171274691.svg"
            />
          </div>
          <img
            className="self-stretch h-[120px] relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/group-1171274690.svg"
          />
        </div>
      </section>
      <FeatureContainer1 />
      <FeatureContainer2 />
      <FeatureContainer3 />
      <SpecialPricingHome />
      <VideoDemo />
      <section className="self-stretch flex flex-col items-start justify-start gap-12 max-w-full mq750:gap-6">
        <TestimonialsHome />
        <Contact
          vector="/vector-9.svg"
          contactHeaderWidth="unset"
          heading3Width="218px"
          heading3Height="unset"
          ourTeamIsAlignSelf="stretch"
          contactInfoWidth="unset"
        />
        <Footer sloganBackground="/-1@2x.png" divider="/divider.svg" />
      </section>
    </div>
  );
};

export default SAHome;
