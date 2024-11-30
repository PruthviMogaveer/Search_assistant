import { FunctionComponent } from "react";
import ButtonCTA from "./ButtonCTA";

export type SpecialPricingType = {
  className?: string;
};

const SpecialPricing: FunctionComponent<SpecialPricingType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-[70px] pb-4 box-border max-w-full shrink-0 text-left text-21xl text-color-2 font-heading-text-inter-semi-bold-24 mq800:pl-[35px] mq800:pr-[35px] mq800:box-border ${className}`}
    >
      <div className="flex-1 rounded-11xl bg-whitesmoke-300 flex flex-row items-start justify-start p-6 box-border shrink-0 max-w-full mq800:pt-5 mq800:pb-5 mq800:box-border">
        <div className="h-[500px] w-[1300px] relative rounded-11xl bg-whitesmoke-300 hidden max-w-full" />
        <div className="flex-1 flex flex-row items-end justify-start pt-[28.6px] pb-[55px] pl-[86px] pr-[99px] box-border relative gap-[136px] max-w-full mq800:gap-[34px] mq800:pl-[21px] mq800:pr-6 mq800:box-border mq450:gap-[17px] mq450:pt-5 mq450:pb-9 mq450:box-border mq1325:gap-[68px] mq1325:flex-wrap mq1325:pl-[43px] mq1325:pr-[49px] mq1325:box-border">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(2px)] rounded-11xl bg-color-5 z-[1]" />
          <div className="flex flex-col items-start justify-start gap-2 min-w-[444px] max-w-full mq1125:min-w-full mq1325:flex-1">
            <button className="cursor-pointer border-whitesmoke-200 border-[2px] border-solid py-[5px] px-[26px] bg-[transparent] w-[164px] h-[38px] rounded-xl [background:linear-gradient(0deg,_rgba(38,_169,_108,_0.01),_rgba(38,_169,_108,_0.18),_#26a96c)] box-border flex flex-row items-start justify-start whitespace-nowrap z-[2] hover:bg-gainsboro-400 hover:border-gainsboro-100 hover:border-[2px] hover:border-solid hover:box-border">
              <div className="h-[38px] w-[164px] relative rounded-xl [background:linear-gradient(0deg,_rgba(38,_169,_108,_0.01),_rgba(38,_169,_108,_0.18),_#26a96c)] border-whitesmoke-200 border-[2px] border-solid box-border hidden" />
              <div className="flex-1 relative text-xs leading-[24px] font-semibold font-heading-text-inter-semi-bold-24 text-color-5 text-center inline-block min-w-[109px] z-[1]">
                Limited Time Offer
              </div>
            </button>
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-2 max-w-full shrink-0">
              <h1 className="m-0 relative text-inherit font-bold font-[inherit] z-[2] mq800:text-13xl mq450:text-5xl">
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
            <div className="self-stretch flex flex-row items-start justify-between pt-[11.4px] pb-[205px] pl-[34px] pr-[19px] relative gap-5 mq800:flex-wrap mq450:pt-5 mq450:pb-[133px] mq450:box-border">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[3]"
                alt=""
                src="/group.svg"
              />
              <div className="w-[130px] flex flex-col items-start justify-start pt-[50.8px] px-0 pb-0 box-border min-w-[130px] mq800:flex-1">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative font-extrabold shrink-0 whitespace-nowrap z-[4] mq800:text-32xl mq450:text-19xl">
                    <span>$49</span>
                    <span className="text-color-6">{` `}</span>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[21px] pr-5 mt-[-8.8px] text-lg text-color-6">
                    <div className="flex-1 relative leading-[16px] inline-block min-w-[89px] shrink-0 z-[5]">{`per month `}</div>
                  </div>
                </div>
              </div>
              <div className="w-[174px] flex flex-col items-start justify-start">
                <div className="self-stretch relative font-extrabold shrink-0 whitespace-nowrap z-[4] mq800:text-32xl mq450:text-19xl">
                  <span>$450</span>
                  <span className="text-color-6">{` `}</span>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[51px] mt-[-8.8px] text-lg text-color-6">
                  <div className="flex-1 relative leading-[16px] inline-block min-w-[72px] shrink-0 z-[5]">{`per year `}</div>
                </div>
              </div>
              <div className="h-[248.5px] w-[279.9px] absolute !m-[0] right-[-50.7px] bottom-[-37.8px]">
                <img
                  className="absolute top-[156px] left-[114.6px] w-[165.3px] h-[92.5px] z-[4]"
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
    </section>
  );
};

export default SpecialPricing;
