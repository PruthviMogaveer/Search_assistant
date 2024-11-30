import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ButtonCTAType = {
  className?: string;

  /** Style props */
  requestAccessTextDecoration?: CSSProperties["textDecoration"];
};

const ButtonCTA: FunctionComponent<ButtonCTAType> = ({
  className = "",
  requestAccessTextDecoration,
}) => {
  const requestAccessStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: requestAccessTextDecoration,
    };
  }, [requestAccessTextDecoration]);

  return (
    <button
      className={`cursor-pointer [border:none] py-[18px] px-8 bg-color rounded-3xs flex flex-row items-center justify-center ${className}`}
    >
      <a
        className="[text-decoration:none] relative text-lg leading-[24px] font-bold font-heading-text-inter-semi-bold-24 text-color-5 text-center"
        style={requestAccessStyle}
      >
        Request Access
      </a>
    </button>
  );
};

export default ButtonCTA;
