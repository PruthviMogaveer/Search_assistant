import React, { useState } from "react";
import PricingCard from "./PricingCard";
import ButtonGetStarted from "./buttons/ButtonGetStarted";

export type PricingSectionType = {
  className?: string;
};

const PricingSection: React.FunctionComponent<PricingSectionType> = ({
  className = "",
}) => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      title: "Main Street",
      monthlyPrice: "$49",
      annualPrice: "$39",
      upTo1MEarnings: "Up to $1M Earnings",
      coverageFor2States: "Coverage for 2 states",
    },
    {
      title: "Small Business",
      monthlyPrice: "$79",
      annualPrice: "$63",
      upTo1MEarnings: "Up to $2M Earnings",
      coverageFor2States: "Coverage for 4 states",
    },
    {
      title: "Lower Middle Market",
      monthlyPrice: "$119",
      annualPrice: "$95",
      upTo1MEarnings: "No earning limit",
      coverageFor2States: "Coverage for 8 states",
    },
  ];

  return (
    <section
      className={` max-w-full self-stretch flex flex-row items-start justify-center pt-0 pb-[55px] pl-[69px] pr-[70px] box-border  shrink-0 text-center text-lg text-color-2 font-heading-text-inter-semi-bold-24  mq800:pb-[23px] mq800:box-border mq1125:px-6 mq1325:pb-9 mq1325:box-border ${className}`}
    >
      <div className="max-w-[1559px] mq800:mt-10 mq450:mt-10 flex-1 flex flex-col items-start justify-start gap-[88px] shrink-0  mq800:gap-11 mq450:gap-[22px]">
        <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[17px] box-border max-w-full text-29xl">
          <div className="w-[547px] mq450:max-w-[300px] mq750:max-w-[500px] flex flex-col items-start justify-start gap-4 ">
            <h1 className="m-0 self-stretch relative text-inherit font-semibold font-[inherit] z-[1] mq800:text-19xl mq450:text-10xl">
              Choose the Plan That's Right For You
            </h1>
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-lg text-color-6  mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="w-[357px]  relative leading-[30px] inline-block max-w-full z-[1]">
                Join today to get the Deal Flow Assistant built for individual
                business buyers.
              </div>
            </div>
          </div>
        </div>

        <div
          className={` self-stretch flex flex-col items-start justify-start gap-[72px] max-w-full text-left text-color-3 mq800:gap-9 mq450:gap-[18px]`}
        >
          <div className="mq450:mt-10 self-stretch flex flex-row items-start justify-center py-0  box-border max-w-full ">
            <div className="shadow-[0px_4px_9px_rgba(0,_0,_0,_0.05)] mq1125:mt-10 rounded-3xs mq800:rounded-lg bg-color-5 flex flex-row items-start justify-start py-[7px] mq1125:py-1 px-[7px] mq800:px-1  box-border gap-7 mq800:gap-2 max-w-full z-[3] mq800:flex-wrap">
              <div className="h-[72px]  relative shadow-[0px_4px_9px_rgba(0,_0,_0,_0.05)] rounded-3xs bg-color-5 hidden max-w-full" />
              <div className="flex flex-col items-start justify-start px-0 pb-0">
                <button
                  className={`cursor-pointer [border:none] mq800:rounded-lg py-[18px] mq800:py-4 mq800:px-3 px-6 rounded-3xs flex flex-row items-start justify-start z-[1] ${
                    isAnnual ? "bg-color hover:bg-mediumseagreen" : "bg-color-5"
                  }`}
                  onClick={() => setIsAnnual(true)}
                >
                  <div className="h-[58px] w-40  relative rounded-3xs bg-color hidden" />
                  <div
                    className={`relative text-lg mq800:text-[14px] font-medium font-heading-text-inter-semi-bold-24 text-left inline-block min-w-[72px] z-[2] ${
                      isAnnual ? "text-color-5" : "text-gray-500"
                    }`}
                  >
                    Annual (Save 20%)
                  </div>
                </button>
              </div>
              <div className="flex flex-col items-start justify-start px-0 pb-0">
                <button
                  className={`cursor-pointer [border:none] mq800:rounded-lg py-[18px] mq800:py-4 mq800:px-3 px-11 rounded-3xs flex flex-row items-start justify-start z-[1] ${
                    isAnnual ? "bg-color-5" : "bg-color hover:bg-mediumseagreen"
                  }`}
                  onClick={() => setIsAnnual(false)}
                >
                  <div className="h-[58px] w-40 relative rounded-3xs bg-color hidden" />
                  <div
                    className={`relative text-lg font-medium mq800:text-[14px] text-center font-heading-text-inter-semi-bold-24  inline-block min-w-[72px] z-[2] ${
                      isAnnual ? "text-gray-500" : "text-color-5"
                    }`}
                  >
                    Monthly
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="mq1125:space-y-10 mq800:mb-14 self-stretch flex flex-row items-end justify-center gap-4 max-w-full text-13xl mq1325:flex-wrap mt-10">
            {pricingPlans.map((plan, index) =>
              index < 3 ? (
                <PricingCard
                  key={index}
                  mainStreet={plan.title}
                  prop={isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  upTo1MEarnings={plan.upTo1MEarnings}
                  coverageFor2States={plan.coverageFor2States}
                  totalPrice={
                    isAnnual
                      ? String(Number(plan.annualPrice.replace("$", "")) * 12)
                      : ""
                  }
                  className={index === 1 ? "relative -top-12 mq1325:top-0" : ""}
                />
              ) : (
                <div
                  className={`flex-[0.9628] shadow-[0px_4px_9px_rgba(0,_0,_0,_0.05)] mq800:shadow-lg rounded-xl bg-color-5 flex flex-col items-start justify-start py-[54px] px-14 box-border gap-4 min-w-[275px] max-w-full z-[3] text-left text-13xl text-color-3 font-heading-text-inter-semi-bold-24 mq450:py-[35px] mq450:px-5 mq450:box-border mq1325:flex-1 ${className}`}
                >
                  <div className="w-[423px] h-[462px] relative shadow-[0px_4px_9px_rgba(0,_0,_0,_0.05)] rounded-xl bg-color-5 hidden max-w-full" />
                  <div className="self-stretch flex flex-row items-start justify-center mq800:justify-center py-0  mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <h2 className="m-0 relative text-inherit leading-[30px] text-center font-medium font-[inherit] z-[1] mq800:text-center mq800:text-7xl mq800:leading-[24px] mq450:text-lgi mq450:leading-[18px]">
                      {plan.title}
                    </h2>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-center mq800:justify-center py-0 pl-0 pr-px text-37xl mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <b className="relative inline-block min-w-[113px] whitespace-nowrap z-[1] mq800:text-center mq800:w-full mq800:text-26xl mq450:text-15xl">
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </b>
                  </div>
                  <div className="self-stretch rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start p-8 gap-8 z-[1] text-lg text-color-6 mq450:gap-4">
                    <div className="w-[311px] h-56 relative rounded-xl bg-whitesmoke-100 hidden" />
                    <div className="flex flex-col items-start justify-start gap-2 mq800:self-center">
                      <div className="flex flex-row items-start justify-start gap-4 mq800:text-center">
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 mq800:hidden">
                          <img
                            className="w-4 h-4 relative z-[2]"
                            loading="lazy"
                            alt=""
                            src="/vector-2.svg"
                          />
                        </div>
                        <div className="relative leading-[30px] z-[2] mq800:text-center">
                          {plan.upTo1MEarnings}
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-4 mq800:text-center">
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 mq800:hidden">
                          <img
                            className="w-4 h-4 relative z-[2]"
                            alt=""
                            src="/vector-2.svg"
                          />
                        </div>
                        <div className="relative leading-[30px] z-[2] mq800:text-center">
                          {plan.coverageFor2States}
                        </div>
                      </div>
                    </div>
                    <div className="mq800:self-center">
                      <ButtonGetStarted />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="mt-5 self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-6 text-color-6  mq800:mb-10 mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1325:pl-[168px] mq1325:pr-[170px] mq1325:box-border">
            <div className="h-[60px] relative leading-[30px] flex flex-col items-center justify-center text-center">
              <p className="m-0">
                All plans include Matched Results, AI Summaries, and One-Click
                Request.
              </p>
              <p className="m-0">
                <span>{`All plans also come with a `}</span>
                <span className="text-color">free 14 day trial</span>
                <span className="text-color-6">.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
