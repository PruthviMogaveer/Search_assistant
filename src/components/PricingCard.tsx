import React, { useMemo, type CSSProperties } from "react";
import ButtonGetStarted from "./buttons/ButtonGetStarted";

export type PricingCardType = {
  className?: string;
  mainStreet?: string;
  prop?: string;
  upTo1MEarnings?: string;
  coverageFor2States?: string;
  totalPrice?: string;

  /** Style props */
  groupDivFlex?: CSSProperties["flex"];
  groupDivMinWidth?: CSSProperties["minWidth"];
  groupDivBorder?: CSSProperties["border"];
  rectangleDivWidth?: CSSProperties["width"];
  rectangleDivHeight?: CSSProperties["height"];
  rectangleDivBorder?: CSSProperties["border"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  frameDivAlignSelf1?: CSSProperties["alignSelf"];
  bDisplay?: CSSProperties["display"];
  bMinWidth?: CSSProperties["minWidth"];
  frameDivAlignSelf2?: CSSProperties["alignSelf"];
  frameDivWidth?: CSSProperties["width"];
  frameDivWidth1?: CSSProperties["width"];
};

const PricingCard: React.FunctionComponent<PricingCardType> = ({
  className = "",
  groupDivFlex,
  groupDivMinWidth,
  groupDivBorder,
  rectangleDivWidth,
  rectangleDivHeight,
  rectangleDivBorder,
  frameDivAlignSelf,
  mainStreet,
  frameDivAlignSelf1,
  prop,
  bDisplay,
  bMinWidth,
  frameDivAlignSelf2,
  upTo1MEarnings,
  coverageFor2States,
  totalPrice,
  frameDivWidth,
  frameDivWidth1,
}) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      flex: groupDivFlex,
      minWidth: groupDivMinWidth,
      border: groupDivBorder,
    };
  }, [groupDivFlex, groupDivMinWidth, groupDivBorder]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      width: rectangleDivWidth,
      height: rectangleDivHeight,
      border: rectangleDivBorder,
    };
  }, [rectangleDivWidth, rectangleDivHeight, rectangleDivBorder]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivAlignSelf]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf1,
      width: frameDivWidth,
    };
  }, [frameDivAlignSelf1, frameDivWidth]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      display: bDisplay,
      minWidth: bMinWidth,
    };
  }, [bDisplay, bMinWidth]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf2,
      width: frameDivWidth1,
    };
  }, [frameDivAlignSelf2, frameDivWidth1]);

  return (
    <div
      className={`flex-[0.9628] mq450:max-w-[90%] mq750:max-w-[75%] shadow-[0px_4px_9px_rgba(0,_0,_0,_0.05)] mq800:shadow-lg rounded-xl bg-color-5 flex flex-col items-start justify-start py-[54px] mq px-14 box-border gap-4 max-w-full z-[3] text-left text-13xl text-color-3 font-heading-text-inter-semi-bold-24 mq450:py-[35px] mq450:px-5 mq450:box-border mq1325:flex-1 ${className}`}
      style={groupDiv1Style}
    >
      <div
        className="w-[423px] h-[462px] relative shadow-[0px_4px_9px_rgba(0,_0,_0,_0.05)] rounded-xl bg-color-5 hidden max-w-full"
        style={rectangleDivStyle}
      />
      <div
        className="self-stretch flex flex-row items-start justify-center mq800:justify-center py-0  mq450:pl-5 mq450:pr-5 mq450:box-border"
        style={frameDivStyle}
      >
        <h2 className="m-0 relative text-inherit leading-[30px] text-center font-medium font-[inherit] z-[1] mq800:text-center mq800:text-7xl mq800:leading-[24px] mq450:text-lgi mq450:leading-[18px]">
          {mainStreet}
        </h2>
      </div>
      <div
        className="self-stretch flex flex-row items-center justify-center mq800:justify-center py-0 pl-0 pr-px text-37xl mq450:pl-5 mq450:pr-5 mq450:box-border"
        style={frameDiv1Style}
      >
        <b
          className="relative inline-block px-2  whitespace-nowrap z-[1] mq800:text-center  mq800:text-26xl"
          style={bStyle}
        >
          {prop}
        </b>
        <span className="text-lg font-semibold self-end relative bottom-3 mq450:bottom-[0.50rem] ">
          /month
        </span>
      </div>
      {totalPrice && (
        <span className="self-stretch relative text-lg font-medium text-center z-[1]">
          ${totalPrice} paid annually
        </span>
      )}
      <div
        className="self-stretch rounded-xl bg-whitesmoke-100 flex flex-col items-center justify-center p-8 gap-8 z-[1] text-lg text-color-6 mq450:gap-4"
        style={frameDiv2Style}
      >
        <div className="w-[311px] h-56 relative rounded-xl bg-whitesmoke-100 hidden" />
        <div className="flex flex-col items-start justify-center gap-2 mq800:self-center">
          <div className="flex flex-row items-start justify-start gap-4 mq800:text-center">
            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 ">
              <img
                className="w-4 h-4 relative z-[2]"
                loading="lazy"
                alt=""
                src="/vector-2.svg"
              />
            </div>
            <div className="relative leading-[30px] z-[2] mq450:text-base mq800:text-center">
              {upTo1MEarnings}
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-4 mq800:text-center">
            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 ">
              <img
                className="w-4 h-4 relative z-[2]"
                alt=""
                src="/vector-2.svg"
              />
            </div>
            <div className="relative leading-[30px] z-[2] mq450:text-base mq800:text-center">
              {coverageFor2States}
            </div>
          </div>
        </div>
        <div className="mq800:self-center">
          <ButtonGetStarted />
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
