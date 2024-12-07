import { FunctionComponent } from "react";

export type FeatureContainer3Type = {
  className?: string;
};

const FeatureContainer3: FunctionComponent<FeatureContainer3Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`max-w-full mq1125:-mt-10 mq800:-mt-2 self-stretch flex flex-row items-center justify-center text-13xl text-color-2 font-heading-text-inter-semi-bold-24 pt-0 px-[70px] mq1325:px-16 mq800:px-6 pb-[49px] box-border mq750:pb-8 mq750:box-border ${className}`}
    >
      <div className="relative flex flex-row items-center justify-center gap-[90px] mq1325:gap-[27px] max-w-full mq450:gap-[27px] mq750:gap-[55px] mq1125:flex-wrap px-24 py-12 mq1125:px-0 mq1125:py-0">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-11xl bg-white mq1125:hidden" />
        
        <div className="w-full max-w-[537px] mq1325:max-w-[700px] flex flex-col items-center justify-center mq750:min-w-full mq1100:flex-1 mq1125:hidden">
          <div className="self-stretch h-[30rem] relative">
            <img
              className="absolute top-[0px] left-[0px] rounded-xl w-full h-full mq1275:h-96 object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/Feature_image3.svg"
            />
          </div>
        </div>
        
        <div className="flex-1 flex flex-col items-start justify-start gap-3.5 mq750:min-w-full">
          <h2 className="mq1125:mb-4 m-0 relative text-inherit mq1125:text-center mq1125:justify-self-center mq1125:self-center leading-[40px] font-semibold font-[inherit] inline-block max-w-full mq750:text-7xl mq750:leading-[32px]">
            Efficiency Today, Innovation Tomorrow
          </h2>
          
          <div className="self-stretch h-[30rem] mq800:h-[20rem] relative mq1125:block hidden flex justify-center items-center">
  <img
    className="rounded-xl h-80 object-cover"
    alt=""
    src="/Feature_image3.svg"
    style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
  />
</div>

          
          <div className="mq1125:mt-4 mq800:w-[96%] self-stretch flex flex-row items-start justify-start gap-2 w-full max-w-full text-5xl mq750:flex-wrap mq800:mt-4">
            <div className="flex-1 flex flex-col items-start justify-start gap-7 min-w-[383px] max-w-full mq800:min-w-[50%]">
              <div className="flex flex-row items-start justify-start gap-4 mq800:gap-3 max-w-full">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 top-1 mq800:top-1"
                  loading="lazy"
                  alt=""
                  src="/layer-1-1.svg"
                />
                <div className="flex flex-col items-start justify-start gap-1">
                  <div className="relative leading-[32px] font-medium mq450:text-lgi mq450:leading-[26px]">
                    One-Click Request
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-2 max-w-full text-lg text-color-3">
                    <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                      <img
                        className="w-4 h-4 relative mq800:w-3 mq800:h-3"
                        alt=""
                        src="/vector-4.svg"
                      />
                    </div>
                    <div className="flex-1 relative leading-[30px] mq800:text-[16px] inline-block min-w-[343px] max-w-full mq450:min-w-full">
                      Rather than sending you away to request information on a deal, our One-Click Request feature takes that step for you.
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-2 text-lg text-color-3 w-full">
                    <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                      <img
                        className="w-4 h-4 relative mq800:w-3 mq800:h-3"
                        alt=""
                        src="/vector-4.svg"
                      />
                    </div>
                    <div className="flex-1 relative leading-[30px] inline-block min-w-0 w-full mq800:text-[16px] break-words overflow-hidden">
                      <span>After completing our Buyer Profile with your information, One-Click Request can complete most initial deal request forms on your behalf </span>
                      <span className="text-darkslategray-100">{ ` ` }</span>
                      <span className="text-color">providing a streamlined process and allowing you to focus on what matters.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row items-start justify-start gap-4 mq800:gap-3 max-w-full">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 top-1 mq800:top-1"
                  loading="lazy"
                  alt=""
                  src="/frame-1.svg"
                />
                <div className="flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-1 max-w-full">
                  <div className="relative leading-[32px] font-medium inline-block max-w-full mq450:text-lgi mq450:leading-[26px]">
                    Committed to building for Individual Buyers
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-2 max-w-full text-lg text-color-3">
                    <div className="flex flex-col items-start justify-start pt-[9.2px] px-0 pb-0">
                      <img
                        className="w-4 h-4 relative mq800:w-3 mq800:h-3"
                        alt=""
                        src="/vector-4.svg"
                      />
                    </div>
                    <div className="flex-1 relative leading-[30px] inline-block min-w-[348px] max-w-full mq450:min-w-full mq800:text-[16px]">
                      Search Assistant is focused on empowering the individual business buyer, and we will continue to innovate with you in mind.
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-2 text-lg text-color-3 w-full">
                    <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                      <img
                        className="w-4 h-4 relative mq800:w-3 mq800:h-3"
                        alt=""
                        src="/vector-4.svg"
                      />
                    </div>
                    <div className="flex-1 relative leading-[30px] inline-block min-w-0 w-full mq800:text-[16px] break-words overflow-hidden">
                      That could mean integrating directly into your CRM, automating further administrative burdens like Buyer Profiles and NDAs, or perhaps something else we haven't thought of yet.
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-2 text-lg text-color-3 w-full">
                    <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                      <img
                        className="w-4 h-4 relative mq800:w-3 mq800:h-3"
                        alt=""
                        src="/vector-4.svg"
                      />
                    </div>
                    <div className="flex-1 relative leading-[30px] inline-block min-w-0 w-full break-words text-color mq800:text-[16px] overflow-hidden">
                      By choosing Search Assistant, you are picking a partner committed to helping you succeed in buying a business.
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