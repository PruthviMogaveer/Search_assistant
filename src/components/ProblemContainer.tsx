import { FunctionComponent } from "react";

export type ProblemContainerType = {
  className?: string;
};

const ProblemContainer: FunctionComponent<ProblemContainerType> = ({
  className = "",
}) => {
  return (
    <section
      className={`mq1125:-mt-16 mq800:-mt-5 mq800:w-[86%] w-full flex flex-row items-start justify-start mq1125:items-center mq1125:justify-center pt-0 px-[70px] mq800:pl-0 mq800:pr-0 mq800:px-6 pb-4 box-border max-w-full  text-29xl text-color-2 font-heading-text-inter-semi-bold-24  mq1275:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row  mq1125:flex-col items-start justify-start mq1125:justify-center mq1125:items-center gap-[15rem] mq1325:gap-[5rem]  max-w-full mq450:gap-[22px] mq750:gap-[43px] mq1100:flex-wrap mq1275:gap-[2rem] mq1125:gap-[5rem]  ">
        <div className="flex-1 mq800:pl-[30px]  flex flex-col items-start justify-start mq1125:items-center mq1125:justify-center gap-4 min-w-[35rem] max-w-full mq750:min-w-full">
          <h1 className="m-0 self-stretch relative text-inherit font-semibold font-[inherit] mq450:text-10xl mq750:text-19xl mq1125:text-center">
            <p className="m-0">{`Why is buying a `}</p>
            <p className="m-0">{`business harder `}</p>
            <p className="m-0">than it needs to be?</p>
          </h1>
        <div className="absolute top-[55rem] hidden mq1125:block right-[-567px] [filter:blur(1000px)] rounded-[50%] bg-color w-[634px] h-[650px] z-[1]" />
          
          <div className="w-[550px] relative text-lg mq800:text-[16px] leading-[30px] text-color-6 inline-block max-w-full mq1125:text-center">
            Business acquisitions will always be complex - that's the nature of
            buying a company. But finding and engaging with the right
            opportunities needs an upgrade.
          </div>
        </div>
        <div className="mq800:px-2  w-full flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border max-w-full text-9xl mq750:min-w-full mq1100:flex-1 ">
          <div className="self-stretch flex flex-col gap-[32.5px] mq800:gap-4 mq800:-mr-8">
            {/* First Section */}
            <div className="flex items-start gap-6 mq800:gap-0">
              <div className="h-[62px] w-[62px] relative shrink-0">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full mq800:w-12 mq800:h-12"
                  loading="lazy"
                  alt=""
                  src="/group-1171274687.svg"
                />
              </div>
              <div className=" flex flex-col items-start justify-start gap-2 max-w-full">
                <h3 className="m-0 relative text-inherit leading-[28px] font-semibold font-[inherit] inline-block max-w-full z-[2] mq450:text-3xl mq450:leading-[22px]">
                  You want to review deals
                </h3>
                <div className="relative text-lg leading-[30px] text-color-6 z-[2] mq800:text-[16px]">
                  But they are spread far and wide, often on websites that were built in the 90s.
                </div>
              </div>
            </div>

            {/* Second Section */}
            <div className="flex items-start gap-6 mq800:gap-0">
              <div className="h-[62px] w-[62px] relative shrink-0">
                <img
                  className="w-[60px] h-[62px] relative mq800:w-12 mq800:h-12"
                  loading="lazy"
                  alt=""
                  src="/group-1171274688.svg"
                />
              </div>
              <div className=" flex flex-col items-start justify-start gap-2 max-w-full">
                <h3 className="m-0 relative text-inherit font-semibold font-[inherit] inline-block max-w-full z-[2] mq450:text-3xl">
                  You want to review relevant, new deals
                </h3>
                <div className="relative text-lg leading-[30px] text-color-6 z-[2] mq800:text-[16px]">
                  But you are stuck sorting through junk listings along with the dozen other deals you reviewed last week.
                </div>
              </div>
            </div>

            {/* Third Section */}
            <div className="flex items-start gap-6 mq800:gap-0">
              <div className="h-[62px] w-[62px] relative shrink-0">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full mq800:w-12 mq800:h-12"
                  alt=""
                  src="/group-1171274722.svg"
                />
              </div>
              <div className=" flex flex-col items-start justify-start gap-2 max-w-full">
                <h3 className="m-0 relative text-inherit font-semibold font-[inherit] inline-block max-w-full z-[2] mq450:text-3xl">
                  You want to fast-forward to truly engaging on a deal
                </h3>
                <div className="relative text-lg leading-[30px] text-color-6 mq800:text-[16px]">
                  But instead, you have to go through the same basic onboarding process just to learn more.
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
