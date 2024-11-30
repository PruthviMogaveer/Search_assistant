import { FunctionComponent } from "react";

export type ProblemContainerType = {
  className?: string;
};

const ProblemContainer: FunctionComponent<ProblemContainerType> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[1395px] flex flex-row items-start justify-start pt-0 px-[70px] pb-4 box-border max-w-full text-left text-29xl text-color-2 font-heading-text-inter-semi-bold-24 mq1275:pl-[35px] mq1275:pr-[35px] mq1275:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start gap-[174px] max-w-full mq450:gap-[22px] mq750:gap-[43px] mq1100:flex-wrap mq1275:gap-[87px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[386px] max-w-full mq750:min-w-full">
          <h1 className="m-0 self-stretch relative text-inherit font-semibold font-[inherit] mq450:text-10xl mq750:text-19xl">
            <p className="m-0">{`Why is buying a `}</p>
            <p className="m-0">{`business harder `}</p>
            <p className="m-0">than it needs to be?</p>
          </h1>
          <div className="w-[550px] relative text-lg leading-[30px] text-color-6 inline-block max-w-full">
            Business acquisitions will always be complex - that's the nature of
            buying a company. But finding and engaging with the right
            opportunities needs an upgrade.
          </div>
        </div>
        <div className="w-[487px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border max-w-full text-9xl mq750:min-w-full mq1100:flex-1">
          <div className="self-stretch flex flex-row items-start justify-start gap-6 max-w-full mq450:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[137px]">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[66px]">
                <div className="self-stretch h-[62px] relative">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full"
                    loading="lazy"
                    alt=""
                    src="/group-1171274687.svg"
                  />
                  <div className="absolute top-[22.9px] left-[17.1px] bg-gainsboro-300 w-[0.9px] h-0 z-[1]" />
                </div>
                <img
                  className="w-[60px] h-[62px] relative"
                  loading="lazy"
                  alt=""
                  src="/group-1171274688.svg"
                />
              </div>
              <div className="self-stretch h-[62px] relative">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full"
                  alt=""
                  src="/group-1171274722.svg"
                />
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-1171274722.svg"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[32.5px] min-w-[262px] max-w-full mq450:gap-4">
              <div className="w-[380px] flex flex-col items-start justify-start gap-2 max-w-full">
                <h3 className="m-0 relative text-inherit leading-[28px] font-semibold font-[inherit] inline-block max-w-full z-[2] mq450:text-3xl mq450:leading-[22px]">
                  You want to review deals
                </h3>
                <div className="relative text-lg leading-[30px] text-color-6 z-[2]">
                  But they are spread far and wide, often on websites that were
                  built in the 90s.
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-2 max-w-full">
                <h3 className="m-0 relative text-inherit font-semibold font-[inherit] inline-block max-w-full z-[2] mq450:text-3xl">
                  <p className="m-0">You want to review relevant,</p>
                  <p className="m-0">new deals</p>
                </h3>
                <div className="relative text-lg leading-[30px] text-color-6 z-[2]">
                  But you are stuck sorting through junk listings along with the
                  dozen other deals you reviewed last week.
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-2 max-w-full">
                <h3 className="m-0 relative text-inherit font-semibold font-[inherit] inline-block max-w-full mq450:text-3xl">
                  <p className="m-0">You want to fast-forward to</p>
                  <p className="m-0">truly engaging on a deal</p>
                </h3>
                <div className="relative text-lg leading-[30px] text-color-6">
                  But instead, you have to go through the same basic onboarding
                  process just to learn more.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemContainer;
