import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ButtonGetStartedType = {
  className?: string;

  /** Style props */
  buttonBackgroundColor?: CSSProperties["backgroundColor"];
  getStartedColor?: CSSProperties["color"];
};

const ButtonGetStarted: FunctionComponent<ButtonGetStartedType> = ({
  className = "",
  buttonBackgroundColor,
  getStartedColor,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: buttonBackgroundColor,
    };
  }, [buttonBackgroundColor]);

  const getStartedStyle: CSSProperties = useMemo(() => {
    return {
      color: getStartedColor,
    };
  }, [getStartedColor]);

  return (
    <button
      className={` cursor-pointer [border:none] py-[18px] pl-[73px] pr-[72px] bg-color-5 self-stretch shadow-[0px_4px_9px_rgba(0,_0,_0,_0.05)] rounded-3xs flex flex-row items-start justify-start whitespace-nowrap hover:bg-gainsboro-500 ${className}`}
      style={buttonStyle}
    >
      <b
        className="flex-1 relative text-lg leading-[24px] inline-block font-heading-text-inter-semi-bold-24 text-color text-center min-w-[102px]"
        style={getStartedStyle}
      >
        Get started
      </b>
    </button>
  );
};

export default ButtonGetStarted;
