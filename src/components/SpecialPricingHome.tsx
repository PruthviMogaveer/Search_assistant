import { FunctionComponent } from "react";
import ButtonCTA from "ButtonCTA";

export type SpecialPricingHomeType = {
  className?: string;
};

const SpecialPricingHome: FunctionComponent<SpecialPricingHomeType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-[70px] pb-8 box-border max-w-full text-left text-21xl text-color-2 font-heading-text-inter-semi-bold-24 mq750:pl-[35px] mq750:pr-[35px] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
        <div className="h-[435.6px] w-[425.6px] absolute !m-[0] right-[-311.6px] bottom-[-92.9px] [filter:blur(1000px)] rounded-[50%] bg-color" />
        <div className="flex-1 rounded-11xl bg-whitesmoke-300 flex flex-row items-start justify-start p-6 box-border max-w-full z-[1] mq750:pt-5 mq750:pb-5 mq750:box-border">
          <div className="h-[500px] w-[1300px] relative rounded-11xl bg-whitesmoke-300 hidden max-w-full" />
          <div className="flex-1 flex flex-row items-end justify-start pt-[28.6px] pb-[55px] pl-[86px] pr-[99px] box-border relative gap-[136px] max-w-full mq450:gap-[17px] mq450:pt-5 mq450:pb-9 mq450:box-border mq750:gap-[34px] mq750:pl-[21px] mq750:pr-6 mq750:box-border mq1275:gap-[68px] mq1275:flex-wrap mq1275:pl-[43px] mq1275:pr-[49px] mq1275:box-border">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(2px)] rounded-11xl bg-color-5 z-[1]" />
            <div className="flex flex-col items-start justify-start gap-2 max-w-full mq1100:min-w-full mq1275:flex-1">
              <button className="cursor-pointer border-whitesmoke-200 border-[2px] border-solid py-[5px] px-[26px] bg-[transparent] rounded-xl [background:linear-gradient(0deg,_rgba(38,_169,_108,_0.01),_rgba(38,_169,_108,_0.18),_#26a96c)] flex flex-row items-start justify-start z-[2] hover:bg-gainsboro-400 hover:border-gainsboro-100 hover:border-[2px] hover:border-solid hover:box-border">
                <div className="h-[38px] w-[164px] relative rounded-xl [background:linear-gradient(0deg,_rgba(38,_169,_108,_0.01),_rgba(38,_169,_108,_0.18),_#26a96c)] border-whitesmoke-200 border-[2px] border-solid box-border hidden" />
                <div className="flex-1 relative text-xs leading-[24px] font-semibold font-heading-text-inter-semi-bold-24 text-color-5 text-center z-[1]">
                  Limited Time Offer
                </div>
              </button>
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-2 max-w-full shrink-0">
                <h1 className="m-0 relative text-inherit font-bold font-[inherit] z-[2] mq450:text-5xl mq750:text-13xl">
                  <p className="m-0">Get the Launch Cohort</p>
                  <p className="m-0">Special Promo</p>
                </h1>
                <div className="relative text-lg leading-[30px] inline-block max-w-full z-[2] text-color-6">
                  <p className="m-0">By Requesting Early Access today,</p>
                  <p className="m-0">
                    you'll get access to our limited-time Launch
                  </p>
                  <p className="m-0">
                    <span>{`Cohort Special - only `}</span>
                    <span className="font-medium font-heading-text-inter-semi-bold-24 text-color">
                      $49/month
                    </span>
                    <span className="font-heading-text-inter-semi-bold-24 text-color-6">{` or `}</span>
                    <span className="font-medium font-heading-text-inter-semi-bold-24 text-color">
                      $450/year
                    </span>
                  </p>
                  <p className="m-0">for any of our plans.</p>
                </div>
              </div>
              <ButtonCTA requestAccessTextDecoration="unset" />
            </div>
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[17px] box-border min-w-[317px] max-w-full text-center text-45xl text-color">
              <div className="self-stretch flex flex-row items-start justify-between pt-[11.4px] pb-[205px] pl-[34px] pr-[19px] relative gap-5 mq450:pt-5 mq450:pb-[133px] mq450:box-border mq750:flex-wrap">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[3]"
                  alt=""
                  src="/group.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[50.8px] px-0 pb-0 mq750:flex-1">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative font-extrabold shrink-0 z-[4] mq450:text-19xl mq750:text-32xl">
                      <span>$49</span>
                      <span className="text-color-6">{` `}</span>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[21px] pr-5 mt-[-8.8px] text-lg text-color-6">
                      <div className="flex-1 relative leading-[16px] shrink-0 z-[5]">{`per month `}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="self-stretch relative font-extrabold shrink-0 z-[4] mq450:text-19xl mq750:text-32xl">
                    <span>$450</span>
                    <span className="text-color-6">{` `}</span>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-[51px] mt-[-8.8px] text-lg text-color-6">
                    <div className="flex-1 relative leading-[16px] shrink-0 z-[5]">{`per year `}</div>
                  </div>
                </div>
                <div className="h-[248.5px] w-[279.9px] absolute !m-[0] right-[-50.7px] bottom-[-37.8px]">
                  <img
                    className="absolute top-[156px] left-[114.6px] w-[165.3px] h-[92.5px] z-[4]"
                    loading="lazy"
                    alt=""
                    src="/group-1.svg"
                  />
                  <img
                    className="absolute top-[0px] left-[0px] w-[242.7px] h-[234.7px] z-[5]"
                    alt=""
                    src="/group-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialPricingHome;
