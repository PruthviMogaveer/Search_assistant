import { FunctionComponent } from "react";

export type FeatureContainer2Type = {
  className?: string;
};

const FeatureContainer2: FunctionComponent<FeatureContainer2Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-[70px] pb-[49px] box-border max-w-full text-left text-13xl text-color-2 font-heading-text-inter-semi-bold-24 mq750:pl-[35px] mq750:pr-[35px] mq750:pb-8 mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-end justify-start pt-14 px-[110px] pb-[57px] box-border relative gap-[303.5px] max-w-full z-[1] mq450:gap-[38px] mq750:gap-[76px] mq750:pt-9 mq750:px-[27px] mq750:pb-[37px] mq750:box-border mq1275:gap-[152px] mq1275:flex-wrap mq1275:justify-center mq1275:pl-[55px] mq1275:pr-[55px] mq1275:box-border">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-11xl bg-whitesmoke-500" />
        <div className="w-[548px] flex flex-col items-start justify-start gap-[17px] max-w-full">
          <h2 className="m-0 relative text-inherit leading-[40px] font-semibold font-[inherit] inline-block max-w-full z-[1] mq450:text-lgi mq450:leading-[24px] mq750:text-7xl mq750:leading-[32px]">
            AI-Powered Deal Matching
          </h2>
          <div className="self-stretch flex flex-row items-start justify-start gap-2 max-w-full text-5xl mq750:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <div className="flex flex-col items-start justify-start gap-[151px]">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/ai-chipset.svg"
                />
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/clipboard.svg"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[335px] max-w-full">
              <div className="w-[499.7px] flex flex-col items-start justify-start gap-[9px] max-w-full">
                <div className="relative leading-[32px] font-medium inline-block max-w-full z-[1] mq450:text-lgi mq450:leading-[26px]">
                  AI Deal Matching and Scoring
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-2 max-w-full text-lg text-color-6 mq750:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                    <img
                      className="w-4 h-4 relative shrink-0 z-[1]"
                      loading="lazy"
                      alt=""
                      src="/vector-2.svg"
                    />
                  </div>
                  <div className="flex-1 relative leading-[30px] inline-block min-w-[309px] shrink-0 max-w-full z-[1]">
                    <span>{`Configure your Ideal and Exclusion parameters on everything from Earnings and Location to Years in Business `}</span>
                    <span className="text-color">
                      enabling personalized matches so you can focus on the
                      deals that matter
                    </span>
                    <span>.</span>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full">
                <div className="relative leading-[32px] font-medium z-[1] mq450:text-lgi mq450:leading-[26px]">
                  AI Deal Processing
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-2 max-w-full text-lg text-color-6 font-segoe-ui-symbol mq750:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                    <img
                      className="w-4 h-4 relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/vector-2.svg"
                    />
                  </div>
                  <div className="flex-1 relative leading-[30px] inline-block min-w-[320px] max-w-full z-[1]">
                    <span>
                      Our AI analyzes and summarizes each listing, providing you
                      with the necessary information
                    </span>
                    <span className="text-darkslategray-100">{` `}</span>
                    <span className="text-color">
                      to review quickly and determine the best next steps.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[212px] flex flex-col items-start justify-start">
          <img
            className="w-14 h-14 relative z-[1]"
            loading="lazy"
            alt=""
            src="/group-1171274697.svg"
          />
        </div>
        <img
          className="h-[571px] w-[330px] absolute !m-[0] top-[-45px] right-[110px] object-cover z-[2]"
          alt=""
          src="/whatsapp-image-20241129-at-113848-amleft-1@2x.png"
        />
      </div>
    </section>
  );
};

export default FeatureContainer2;
