import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Button from "./Button";

export type GroupComponent2Type = {
  className?: string;
  mainStreet?: string;
  prop?: string;
  upTo1MEarnings?: string;
  coverageFor2States?: string;

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
};

const GroupComponent2: FunctionComponent<GroupComponent2Type> = ({
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
    };
  }, [frameDivAlignSelf1]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      display: bDisplay,
      minWidth: bMinWidth,
    };
  }, [bDisplay, bMinWidth]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf2,
    };
  }, [frameDivAlignSelf2]);

  return (
    <div
      className={`flex-[0.9628] shadow-[0px_4px_9px_rgba(0,_0,_0,_0.05)] rounded-xl bg-color-5 flex flex-col items-start justify-start py-[54px] px-14 box-border gap-4 min-w-[275px] max-w-full z-[3] text-left text-13xl text-color-3 font-heading-text-inter-semi-bold-24 mq450:py-[35px] mq450:px-5 mq450:box-border mq1325:flex-1 ${className}`}
      style={groupDiv1Style}
    >
      <div
        className="w-[423px] h-[462px] relative shadow-[0px_4px_9px_rgba(0,_0,_0,_0.05)] rounded-xl bg-color-5 hidden max-w-full"
        style={rectangleDivStyle}
      />
      <div
        className="self-stretch flex flex-row items-start justify-start py-0 pl-[66px] pr-[67px] mq450:pl-5 mq450:pr-5 mq450:box-border"
        style={frameDivStyle}
      >
        <h2 className="m-0 relative text-inherit leading-[30px] font-medium font-[inherit] z-[1] mq800:text-7xl mq800:leading-[24px] mq450:text-lgi mq450:leading-[18px]">
          {mainStreet}
        </h2>
      </div>
      <div
        className="self-stretch flex flex-row items-start justify-center py-0 pl-0 pr-px text-37xl mq450:pl-5 mq450:pr-5 mq450:box-border"
        style={frameDiv1Style}
      >
        <b
          className="relative inline-block min-w-[113px] whitespace-nowrap z-[1] mq800:text-26xl mq450:text-15xl"
          style={bStyle}
        >
          {prop}
        </b>
      </div>
      <div
        className="self-stretch rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start p-8 gap-8 z-[1] text-lg text-color-6 mq450:gap-4"
        style={frameDiv2Style}
      >
        <div className="w-[311px] h-56 relative rounded-xl bg-whitesmoke-100 hidden" />
        <div className="flex flex-col items-start justify-start gap-2">
          <div className="flex flex-row items-start justify-start gap-4">
            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
              <img
                className="w-4 h-4 relative z-[2]"
                loading="lazy"
                alt=""
                src="/vector-2.svg"
              />
            </div>
            <div className="relative leading-[30px] z-[2]">
              {upTo1MEarnings}
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
              {coverageFor2States}
            </div>
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default GroupComponent2;
