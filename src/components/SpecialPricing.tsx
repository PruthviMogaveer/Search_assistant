import { FunctionComponent } from "react";
import ButtonCTA from "../components/buttons/ButtonCTA";

export type SpecialPricingType = {
  className?: string;
};

const SpecialPricing: FunctionComponent<SpecialPricingType> = ({
  className = "",
}) => {
  return (
    <section
      className={`mq1125:h-[48rem] mq800:h-[42rem]  self-stretch flex flex-row items-start justify-end pt-0 px-[70px] pb-4 box-border max-w-full shrink-0 text-left text-21xl text-color-2 font-heading-text-inter-semi-bold-24 mq1125:px-6  mq1125:box-border ${className}`}
    >

      <div className="flex-1 mq800:h-[43.5rem] mq1125:h-[48rem] rounded-11xl mq1125:rounded-lg bg-whitesmoke-300 flex flex-row items-start justify-start p-6 mq1125:p-3 box-border shrink-0 max-w-full mq1125:box-border">
        <div className="h-[500px] w-[1300px] mq800:h-[44rem] mq1125:h-[47rem] relative rounded-11xl mq1125:rounded-lg  bg-whitesmoke-300 hidden max-w-full" />
        <div className="flex-1  flex flex-row mq800:h-[44rem] mq1125:h-[47rem] items-end justify-start pt-[28.6px] pb-[55px] pl-[86px] pr-[99px] box-border relative gap-[136px] max-w-full mq1125:gap-[34px] mq1125:pl-0 mq1125:pr-0 mq1125:box-border mq450:gap-[17px] mq450:pt-5 mq450:pb-9 mq450:box-border mq1325:gap-[68px] mq1325:flex-wrap mq1325:pl-[43px] mq1325:pr-[49px] mq1325:box-border">
          <div className="h-full w-full absolute mq800:h-[42rem] mq1125:h-[46.5rem] !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(2px)] rounded-11xl mq1125:rounded-lg bg-color-5 z-[1]" />
          <div className="flex mq1125:justify-center mq1125:items-center mq1125:content-center flex-col items-start justify-start gap-2 min-w-[444px] max-w-full mq1125:min-w-full mq1325:flex-1">
            <button className="mb-5 cursor-pointer border-whitesmoke-200 border-[2px] border-solid py-[5px] px-[26px] bg-[transparent] w-[164px] h-[38px] rounded-xl [background:linear-gradient(0deg,_rgba(38,_169,_108,_0.01),_rgba(38,_169,_108,_0.18),_#26a96c)] box-border flex flex-row items-start justify-start whitespace-nowrap z-[2] hover:bg-gainsboro-400 hover:border-gainsboro-100 hover:border-[2px] hover:border-solid hover:box-border">
              <div className="h-[38px] w-[164px] relative rounded-xl [background:linear-gradient(0deg,_rgba(38,_169,_108,_0.01),_rgba(38,_169,_108,_0.18),_#26a96c)] border-whitesmoke-200 border-[2px] border-solid box-border hidden" />
              <div className=" flex-1 relative text-xs leading-[24px] font-semibold font-heading-text-inter-semi-bold-24 text-color-5 text-center inline-block min-w-[109px] z-[1]">
                Limited Time Offer
              </div>
            </button>
            <div className="flex flex-col items-start mq1125:justify-center mq1125:items-center mq1125:content-center justify-start pt-0 px-0 pb-2 box-border gap-2 max-w-full shrink-0">
              <h1 className="m-0 relative text-inherit font-bold font-[inherit] mq1125:flex mq1125:flex-col mq1125:justify-center mq1125:items-center z-[2] mq1125:text-13xl mq450:text-5xl">
                <p className="m-0">Get the Launch Cohort</p>
                <p className="m-0">Special Promo</p>
              </h1>
              <img src="/SpecialPricingMobile.svg" alt="" className="z-10 hidden mq1125:block my-4 mq1125:w-96 mq800:w-64" />
              <div className="w-[30rem] mq1125:w-[20rem] relative text-lg mq1125:text-[16px] mq1125:flex mq1125:flex-col mq1125:justify-center mq1125:items-center leading-[30px] inline-block max-w-full z-[2] text-color-6">
                <p className="m-0 mq1125:text-center">By Requesting Early Access today,
                  you'll get access to our limited-time Launch
                  <span>{`Cohort Special - only `}</span>
                  <span className="font-medium font-heading-text-inter-semi-bold-24 text-color">
                    $49/month
                  </span>
                  <span className="font-heading-text-inter-semi-bold-24 text-color-6">{` or `}</span>
                  <span className="font-medium font-heading-text-inter-semi-bold-24 text-color">
                    $450/year
                  </span> any of our plans.</p>
              </div>
            </div>
            <div className=" z-10 mt-2">
              <ButtonCTA requestAccessTextDecoration="unset" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center pt-0 px-0 pb-[17px] box-border min-w-[317px] max-w-full text-center text-45xl text-color">
            <div className="self-stretch flex flex-row items-center justify-center pt-[11.4px] pb-[205px] pl-[34px] pr-[19px] relative gap-5 mq1125:flex-wrap mq450:pt-5 mq450:pb-[133px] mq450:box-border">
              <img
                className="absolute overflow-hidden mq1275:w-[25rem] mq1275:-top-16 mq1275:right-0 -top-32 -right-10 z-[3] mq1125:hidden"
                alt=""
                src="/SpecialPricing.svg"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialPricing;
