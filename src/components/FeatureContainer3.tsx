import { FunctionComponent } from "react";

export type FeatureContainer3Type = {
  className?: string;
};

const FeatureContainer3: FunctionComponent<FeatureContainer3Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start mq1125:justify-center mq1125:items-center pt-0 px-[70px] overflow-hidden pb-[49px] box-border max-w-full text-left text-13xl text-color-2 font-heading-text-inter-semi-bold-24 mq750:pb-8 mq750:box-border ${className} mq1125:px-6 mq800:max-w-screen-[23rem]`}
    >
      
      <div className="relative px-10 py-12 flex-1 flex flex-col items-start justify-start mq1125:justify-center mq1125:px-[100px] mq1125:py-0 mq800:px-0 mq1125:items-center gap-4 max-w-full">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-11xl bg-white mq1125:hidden " />

        <div className="self-stretch flex flex-row items-start justify-end mq1125:justify-center mq1125:items-center py-0 px-6 mq800:px-0">
          <h2 className="text-center m-0 relative text-inherit leading-[40px] font-semibold font-[inherit] inline-block max-w-full mq750:text-7xl mq750:leading-[32px] mq800:-mb-20">
            Efficiency Today, Innovation Tomorrow
          </h2>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start mq1125:justify-center mq1125:items-center gap-[110px] max-w-full text-5xl mq800:gap-[27px] mq750:gap-[55px] mq1125:flex-wrap">
          <div className="flex items-center justify-center px-5 pb-[100px]  min-w-[548px] max-w-full z-[1] mq1125:pt-[30px] mq1125:pb-[0px] mq800:mt-[3rem] mq1125:box-border mq750:min-w-full mq1125:flex-1  mq800:px-0 mq800:flex mq800:items-center mq800:justify-center mq800:w-full">
            <img
              className="relative w-auto object-contain mq1125:w-[26rem] mq750:w-[18rem] mq1325:w-[30rem] left-3"
              loading="lazy"
              alt=""
              src="/Feature_image3.svg"
            />
          </div>


          <div className="flex-1 flex flex-col items-start justify-start gap-7 min-w-[383px] max-w-full mq800:min-w-[50%]">
            <div className="flex flex-row items-start justify-start gap-4 max-w-full">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0 top-1"
                loading="lazy"
                alt=""
                src="/layer-1-1.svg"
              />
              <div className="flex flex-col items-start justify-start gap-1 max-w-full">
                <div className="relative leading-[32px] font-medium mq450:text-lgi mq450:leading-[26px]">
                  One-Click Request
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-2 text-lg text-color-6 w-full">
                  <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                    <img
                      className="w-4 h-4 relative mq800:w-3 mq800:h-3"
                      alt=""
                      src="/vector-4.svg"
                    />
                  </div>
                  <div className="flex-1 relative leading-[30px] inline-block min-w-0 w-full mq800:text-[16px] break-words overflow-hidden">
                    Rather than sending you away to request information on a deal, our One-Click Request feature takes that step for you.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-2 text-lg text-color-6 w-full">
                  <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                    <img
                      className="w-4 h-4 relative mq800:w-3 mq800:h-3"
                      alt=""
                      src="/vector-4.svg"
                    />
                  </div>
                  <div className="flex-1 relative leading-[30px] inline-block min-w-0 w-full break-words overflow-hidden">
                    <span className="mq800:text-[16px]">
                      After completing our Buyer Profile with your information, One-Click Request can complete most initial deal request forms on your behalf
                    </span>
                    <span className="text-darkslategray-100 mq800:text-[16px]">{` `}</span>
                    <span className="text-color mq800:text-[16px]">
                      providing a streamlined process and allowing you to focus on what matters.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-start justify-start gap-4 max-w-full">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0 top-1"
                loading="lazy"
                alt=""
                src="/frame-1.svg"
              />
              <div className="flex flex-col items-start justify-start gap-1 max-w-full">
                <div className="relative leading-[32px] font-medium mq450:text-lgi mq450:leading-[26px]">
                  Committed to building for Individual Buyers
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-2 text-lg text-color-6 w-full">
                  <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                    <img
                      className="w-4 h-4 relative mq800:w-3 mq800:h-3e"
                      alt=""
                      src="/vector-4.svg"
                    />
                  </div>
                  <div className="flex-1 relative leading-[30px] inline-block min-w-0 w-full mq800:text-[16px] break-words overflow-hidden">
                    Search Assistant is focused on empowering the individual business buyer, and we will continue to innovate with you in mind.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-2 text-lg text-color-6 w-full">
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

                <div className="self-stretch flex flex-row items-start justify-start gap-2 text-lg text-color-6 w-full">
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
    </section>
  );
};

export default FeatureContainer3;
