import { FunctionComponent } from "react";
import ButtonCTA from "../buttons/ButtonCTA";

const Hero: FunctionComponent = () => {
  return (
    <div className="mq1125:mt-8 w-full flex flex-row items-start justify-start pt-0 px-[70px] pb-[99px] box-border max-w-full mq750:pb-16 mq750:box-border  mq800:px-6 mq1100:box-border">
      <div className="flex-1 flex flex-row items-end justify-start mq1125:items-center mq1125:justify-center max-w-full [row-gap:20px] mq750:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start mq1125:items-center mq1125:justify-center gap-6 min-w-[379px] shrink-0 max-w-full mq750:min-w-full">
          <h1 className=" m-0 self-stretch relative text-inherit capitalize z-[2] font-[inherit] mq450:text-19xl mq750:text-32xl mq1125:text-center mq1125:-mb-8">
            <p className="m-0 font-semibold mq750:text-29xl mq450:text-13xl">Unlocking</p>
            <p className="m-0 font-semibold mq750:text-29xl mq450:text-13xl">Opportunities.</p>
            <p className="m-0 text-color mq750:text-29xl mq450:text-13xl">
              <b>Empowering</b>
            </p>
            <p className="m-0 text-color mq750:text-29xl mq450:text-13xl">
              <b>Ownership.</b>
            </p>
          </h1>
         
            <img
              className="relative w-full object-contain z-[2] mq1125:flex  hidden"
              loading="lazy"
              alt=""
              src="/HeroSmall.svg"
            />
          
          <div className="w-[317px] relative text-lg leading-[150%] text-color-3 inline-block z-[1] mq1125:text-center">
            Use the Deal Flow Assistant built for individual business buyers.
          </div>
          <ButtonCTA requestAccessTextDecoration="unset" className="relative "/>
        </div>
        {/* <div className=" h-[205px] flex flex-col items-start justify-end pt-0 px-0 pb-[39px] box-border relative left-20 text-center text-5xl text-main-color-1 mq750:flex-1 mq750:ml-0 mq800:absolute mq800:hidden">
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
                className="w-[124px] h-40 absolute !m-[0] top-[18px] left-[0px] hidden z-[1]"
                alt=""
                src="/group-1171274682.svg"
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;