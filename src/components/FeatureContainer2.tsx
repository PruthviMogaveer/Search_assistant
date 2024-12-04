import { FunctionComponent } from "react";

export type FeatureContainer2Type = {
  className?: string;
};

const FeatureContainer2: FunctionComponent<FeatureContainer2Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start mq1125:justify-center mq1125:items-center pt-0 px-[70px] mq1125:px-6 pb-[49px] box-border max-w-full text-left text-13xl text-color-2 font-heading-text-inter-semi-bold-24 mq750:pb-8 mq750:box-border ${className}`}
    >
      
      <div className=" flex-1 flex flex-row items-end justify-start mq1125:justify-center mq1125:items-center pt-14 px-[110px] mq1125:px-100  pb-[57px] box-border relative gap-[303.5px] max-w-full z-[1] mq450:gap-[38px] mq750:gap-[76px] mq750:pt-9 mq800:px-0 mq800:ml-0 mq750:pb-[37px] mq750:box-border mq1275:gap-[152px] mq1275:flex-wrap mq1275:justify-center mq1275:pl-[55px] mq1275:pr-[55px] mq1275:box-border">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-11xl bg-white mq1125:hidden" />
        <div className="flex-1 flex flex-col items-start justify-start mq1125:justify-center mq1125:items-center gap-3.5 min-w-[404px] max-w-full mq750:min-w-full">
          <h2 className="m-0 relative mq1125:text-center text-inherit leading-[40px] font-semibold font-[inherit] inline-block max-w-full mq750:text-7xl mq750:leading-[32px]">
            AI-Powered Deal Matching
          </h2>
          <img
            className="h-[371px] w-[330px] object-contain z-[2] drop-shadow-2xl mq1125:block hidden mq1125:my-4"
            alt=""
            src="/Feature2Small.svg"
          />
          <div className="mq800:w-[96%] self-stretch flex flex-row items-start justify-start gap-2 w-full max-w-full text-5xl mq750:flex-wrap mq800:mt-4">
            <div className="flex-1 flex flex-col items-start justify-start gap-7 min-w-[383px] max-w-full mq800:min-w-[50%]">
              <div className="w-[559px] mq1125:w-full flex flex-row items-start justify-start gap-4 mq800:gap-3 max-w-full">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 top-1 mq800:top-0"
                  loading="lazy"
                  alt="AI Chipset Icon"
                  src="/ai-chipset.svg"
                />
                <div className="flex flex-col items-start justify-start gap-1">
                  <div className="relative leading-[32px] font-medium mq450:text-lgi mq450:leading-[26px]">
                    AI Deal Matching and Scoring
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-2 max-w-full text-lg text-color-6">
                    <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                      <img
                        className="w-4 h-4 relative mq800:w-3 mq800:h-3"
                        alt="Checkmark"
                        src="/vector-2.svg"
                      />
                    </div>
                    <div className="flex-1 relative leading-[30px] mq800:text-[16px] inline-block min-w-[343px] max-w-full mq450:min-w-full">
                      Configure your Ideal and Exclusion parameters on everything from Earnings and Location to Years in Business{" "}
                      <span className="text-color">
                        enabling personalized matches so you can focus on the deals that matter
                      </span>.
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[559px] mq1125:w-full  flex flex-row items-start justify-start gap-4 mq800:gap-3 max-w-full">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 top-1 mq800:top-0"
                  loading="lazy"
                  alt="Clipboard Icon"
                  src="/clipboard.svg"
                />
                <div className="flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-1 max-w-full">
                  <div className="relative leading-[32px] font-medium inline-block max-w-full mq450:text-lgi mq450:leading-[26px]">
                    AI Deal Processing
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-2 max-w-full text-lg text-color-6">
                    <div className="flex flex-col items-start justify-start pt-[9.2px] px-0 pb-0">
                      <img
                        className="w-4 h-4 relative mq800:w-3 mq800:h-3"
                        alt="Checkmark"
                        src="/vector-2.svg"
                      />
                    </div>
                    <div className="flex-1 relative leading-[30px] inline-block min-w-[348px] max-w-full mq450:min-w-full mq800:text-[16px]">
                      Our AI analyzes and summarizes each listing, providing you with the necessary information{" "}
                      <span className="text-color">
                        to review quickly and determine the best next steps.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-[620px] w-[330px] absolute !m-[0] top-[-65px] right-[110px] mq1275:right-[20px] object-cover z-[2] drop-shadow-2xl mq1125:hidden"
          alt=""
          src="/Feature2.svg"
        />
      </div>
    </section>
  );
};

export default FeatureContainer2;
