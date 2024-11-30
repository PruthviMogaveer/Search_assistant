import { FunctionComponent } from "react";

export type FeatureContainer3Type = {
  className?: string;
};

const FeatureContainer3: FunctionComponent<FeatureContainer3Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[1422px] flex flex-row items-start justify-start pt-0 px-[70px] pb-[33px] box-border max-w-full text-left text-13xl text-color-2 font-heading-text-inter-semi-bold-24 mq750:pl-[35px] mq750:pr-[35px] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-4 max-w-full">
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-6">
          <h2 className="m-0 relative text-inherit leading-[40px] font-semibold font-[inherit] mq450:text-lgi mq450:leading-[24px] mq750:text-7xl mq750:leading-[32px]">
            Efficiency Today, Innovation Tomorrow
          </h2>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[110px] max-w-full text-5xl mq450:gap-[27px] mq750:gap-[55px] mq1275:flex-wrap">
          <div className="rounded-xl bg-gainsboro-200 border-color border-t-[10px] border-solid border-color border-l-[10px] border-solid box-border flex flex-row items-start justify-center pt-[175px] px-5 pb-[169px] min-w-[548px] max-w-full z-[1] mq450:pt-[114px] mq450:pb-[110px] mq450:box-border mq750:min-w-full mq1275:flex-1">
            <div className="h-[411px] w-[548px] relative rounded-xl bg-gainsboro-200 border-color border-t-[10px] border-solid border-color border-l-[10px] border-solid box-border hidden max-w-full" />
            <img
              className="h-14 w-14 relative overflow-hidden shrink-0 z-[2] mq1275:flex-1"
              loading="lazy"
              alt=""
              src="/solargallerybold-1.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-3 min-w-[406px] max-w-full mq750:min-w-full">
            <div className="flex flex-row items-start justify-start gap-2">
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/layer-1-1.svg"
                />
              </div>
              <div className="relative leading-[32px] font-medium mq450:text-lgi mq450:leading-[26px]">
                One-Click Request
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-2 max-w-full text-lg text-color-6 mq750:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-[205px] px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/frame-1.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[13.5px] min-w-[385px] max-w-full mq750:min-w-full">
                <div className="w-[537px] flex flex-col items-start justify-start gap-2 max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start gap-2 max-w-full mq750:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[6.7px] px-0 pb-0">
                      <img
                        className="w-4 h-4 relative"
                        loading="lazy"
                        alt=""
                        src="/vector-4.svg"
                      />
                    </div>
                    <div className="flex-1 relative leading-[30px] inline-block min-w-[333px] max-w-full">
                      Rather than sending you away to request information on a
                      deal, our One-Click Request feature takes that step for
                      you.
                    </div>
                  </div>
                  <div className="w-[503px] flex flex-row items-start justify-start gap-2 max-w-full mq750:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[6.7px] px-0 pb-0">
                      <img
                        className="w-4 h-4 relative"
                        loading="lazy"
                        alt=""
                        src="/vector-4.svg"
                      />
                    </div>
                    <div className="flex-1 relative leading-[30px] inline-block min-w-[311px] max-w-full">
                      <span>
                        After completing our Buyer Profile with your
                        information, One-Click Request can complete most initial
                        deal request forms on your behalf
                      </span>
                      <span className="text-darkslategray-100">{` `}</span>
                      <span className="text-color">
                        providing a streamlined process and allowing you to
                        focus on what matters.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative text-5xl leading-[32px] font-medium text-color-2 inline-block max-w-full mq450:text-lgi mq450:leading-[26px]">
                  Committed to building for Individual Buyers
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-2 max-w-full mq750:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[9.6px] px-0 pb-0">
                    <div className="flex flex-col items-start justify-start gap-28">
                      <div className="flex flex-col items-start justify-start gap-[80.4px]">
                        <img
                          className="w-4 h-4 relative"
                          loading="lazy"
                          alt=""
                          src="/vector-6.svg"
                        />
                        <img
                          className="w-4 h-4 relative"
                          loading="lazy"
                          alt=""
                          src="/vector-7.svg"
                        />
                      </div>
                      <img
                        className="w-4 h-4 relative"
                        loading="lazy"
                        alt=""
                        src="/vector-7.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[369px] max-w-full mq750:min-w-full">
                    <div className="w-[476.2px] relative leading-[30px] inline-block max-w-full">
                      Search Assistant is focused on empowering the individual
                      business buyer, and we will continue to innovate with you
                      in mind.
                    </div>
                    <div className="w-[476px] relative leading-[30px] inline-block max-w-full">
                      That could mean integrating directly into your CRM,
                      automating further administrative burdens like Buyer
                      Profiles and NDAs, or perhaps something else we haven't
                      thought of yet.
                    </div>
                    <div className="relative leading-[30px] text-color">
                      By choosing Search Assistant, you are picking a partner
                      committed to helping you succeed in buying a business.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureContainer3;
