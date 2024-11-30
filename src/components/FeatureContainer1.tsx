import { FunctionComponent } from "react";

export type FeatureContainer1Type = {
  className?: string;
};

const FeatureContainer1: FunctionComponent<FeatureContainer1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[47px] pl-5 pr-[29px] box-border max-w-full text-left text-13xl text-color-2 font-heading-text-inter-semi-bold-24 mq450:pb-[31px] mq450:box-border ${className}`}
    >
      <div className="flex flex-row items-end justify-center gap-[110px] max-w-full mq450:gap-[27px] mq750:gap-[55px] mq1100:flex-wrap">
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border min-w-[537px] max-w-full mq750:min-w-full mq1100:flex-1">
          <div className="self-stretch h-[402px] relative">
            <img
              className="absolute top-[173px] left-[235px] w-14 h-14 overflow-hidden"
              loading="lazy"
              alt=""
              src="/solargallerybold-1.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] rounded-xl w-full h-full object-cover z-[1]"
              alt=""
              src="/image@2x.png"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-3.5 min-w-[404px] max-w-full mq750:min-w-full">
          <h2 className="m-0 relative text-inherit leading-[40px] font-semibold font-[inherit] inline-block max-w-full mq450:text-lgi mq450:leading-[24px] mq750:text-7xl mq750:leading-[32px]">
            Comprehensive Deal Coverage
          </h2>
          <div className="self-stretch flex flex-row items-start justify-start gap-2 max-w-full text-5xl mq750:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <div className="flex flex-col items-start justify-start gap-[156.5px]">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/layer-1.svg"
                />
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/frame.svg"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-7 min-w-[383px] max-w-full mq750:min-w-full">
              <div className="w-[552px] flex flex-col items-start justify-start gap-1 max-w-full">
                <div className="relative leading-[32px] font-medium mq450:text-lgi mq450:leading-[26px]">
                  Extensive Broker Network
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-2 max-w-full text-lg text-color-6 mq750:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                    <img
                      className="w-4 h-4 relative"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="flex-1 relative leading-[30px] inline-block min-w-[343px] max-w-full mq450:min-w-full">
                    <span>{`Through a combination of deal sourcing bots and direct relationships, Search Assistant covers XX% of Brokers* with more being added regularly `}</span>
                    <span className="text-color">
                      so that all of the deals you need are in one place.
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[559px] flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-1 max-w-full">
                <div className="relative leading-[32px] font-medium inline-block max-w-full mq450:text-lgi mq450:leading-[26px]">
                  Focus on the Individual Buyer
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-2 max-w-full text-lg text-color-6 mq750:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[9.2px] px-0 pb-0">
                    <img
                      className="w-4 h-4 relative"
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                  <div className="flex-1 relative leading-[30px] inline-block min-w-[348px] max-w-full mq450:min-w-full">
                    <span>{`Search Assistant’s primary focus is on uncovering established, SBA-eligible, physical businesses for sale in the US `}</span>
                    <span className="text-color">
                      so that you can review more deals that are a potential
                      match.
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative text-xs text-color-6">
                * measured as brokers in the US who are members of a national or
                regional business broker association.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureContainer1;
