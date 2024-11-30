import { FunctionComponent } from "react";
import GroupComponent2 from "./GroupComponent2";
import Button from "./Button";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 pb-[55px] pl-[69px] pr-[70px] box-border max-w-full shrink-0 text-center text-lg text-color-2 font-heading-text-inter-semi-bold-24 mq800:pl-[34px] mq800:pr-[35px] mq800:pb-[23px] mq800:box-border mq1325:pb-9 mq1325:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[88px] shrink-0 max-w-full mq800:gap-11 mq450:gap-[22px]">
        <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[17px] box-border max-w-full text-29xl">
          <div className="w-[547px] flex flex-col items-start justify-start gap-4 max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit font-semibold font-[inherit] z-[1] mq800:text-19xl mq450:text-10xl">
              Choose the Plan That's Right For You
            </h1>
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-lg text-color-6 mq800:pl-[47px] mq800:pr-[47px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="w-[357px] relative leading-[30px] inline-block max-w-full z-[1]">
                Join today to get the Deal Flow Assistant built for individual
                business buyers.
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[72px] max-w-full text-left text-color-3 mq800:gap-9 mq450:gap-[18px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[22px] box-border max-w-full mq800:pl-[113px] mq800:pr-[114px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1325:pl-[227px] mq1325:pr-[228px] mq1325:box-border">
            <div className="shadow-[0px_4px_9px_rgba(0,_0,_0,_0.05)] rounded-3xs bg-color-5 flex flex-row items-start justify-start py-[7px] pl-8 pr-[7px] box-border gap-7 max-w-full z-[3] mq800:flex-wrap">
              <div className="h-[72px] w-[391px] relative shadow-[0px_4px_9px_rgba(0,_0,_0,_0.05)] rounded-3xs bg-color-5 hidden max-w-full" />
              <div className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0">
                <div className="relative z-[1]">Annual (Save 20%)</div>
              </div>
              <button className="cursor-pointer [border:none] py-[18px] px-11 bg-color rounded-3xs flex flex-row items-start justify-start z-[1] hover:bg-mediumseagreen">
                <div className="h-[58px] w-40 relative rounded-3xs bg-color hidden" />
                <div className="relative text-lg font-medium font-heading-text-inter-semi-bold-24 text-color-5 text-left inline-block min-w-[72px] z-[2]">
                  Monthly
                </div>
              </button>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-center gap-4 max-w-full text-13xl mq1325:flex-wrap">
            <GroupComponent2
              mainStreet="Main Street"
              prop="$49"
              upTo1MEarnings="Up to $1M Earnings"
              coverageFor2States="Coverage for 2 states"
            />
            <div className="h-[516px] flex flex-col items-start justify-start max-w-full">
              <GroupComponent2
                groupDivFlex="unset"
                groupDivMinWidth="unset"
                groupDivBorder="4px solid #eee"
                rectangleDivWidth="431px"
                rectangleDivHeight="470px"
                rectangleDivBorder="4px solid #eee"
                frameDivAlignSelf="unset"
                mainStreet="Small Business"
                frameDivAlignSelf1="unset"
                prop="$79"
                bDisplay="inline-block"
                bMinWidth="108px"
                frameDivAlignSelf2="unset"
                upTo1MEarnings="Up to $2M Earnings"
                coverageFor2States="Coverage for 4 states"
              />
            </div>
            <div className="flex-1 rounded-xl bg-color-5 flex flex-col items-start justify-start py-[54px] pl-[51px] pr-[49px] box-border gap-4 min-w-[275px] max-w-full z-[3] mq450:py-[35px] mq450:px-5 mq450:box-border mq1325:flex-1">
              <div className="w-[423px] h-[462px] relative rounded-xl bg-color-5 hidden max-w-full" />
              <h2 className="m-0 relative text-inherit leading-[30px] font-medium font-[inherit] z-[1] mq800:text-7xl mq800:leading-[24px] mq450:text-lgi mq450:leading-[18px]">
                Lower Middle Market
              </h2>
              <div className="self-stretch flex flex-row items-start justify-center py-0 pl-0 pr-px text-37xl mq450:pl-5 mq450:pr-5 mq450:box-border">
                <b className="relative whitespace-nowrap z-[1] mq800:text-26xl mq450:text-15xl">
                  $119
                </b>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[5px] pr-1.5 text-lg text-color-6">
                <div className="flex-1 rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start p-8 gap-8 z-[1] mq450:gap-4">
                  <div className="w-[311px] h-56 relative rounded-xl bg-whitesmoke-100 hidden" />
                  <div className="flex flex-col items-start justify-start gap-2">
                    <div className="flex flex-row items-start justify-start gap-4">
                      <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                        <img
                          className="w-4 h-4 relative z-[2]"
                          alt=""
                          src="/vector-2.svg"
                        />
                      </div>
                      <div className="relative leading-[30px] z-[2]">
                        No earning limit
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-4">
                      <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                        <img
                          className="w-4 h-4 relative z-[2]"
                          alt=""
                          src="/vector-2.svg"
                        />
                      </div>
                      <div className="relative leading-[30px] z-[2]">
                        Coverage for 8 states
                      </div>
                    </div>
                  </div>
                  <Button
                    buttonBackgroundColor="#fff"
                    getStartedColor="#26a96c"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-6 text-color-6 mq800:pl-[84px] mq800:pr-[85px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1325:pl-[168px] mq1325:pr-[170px] mq1325:box-border">
          <div className="h-[60px] relative leading-[30px] inline-block">
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
    </section>
  );
};

export default FrameComponent;
