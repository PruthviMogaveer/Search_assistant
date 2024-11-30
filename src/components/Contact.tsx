import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ContactType = {
  className?: string;
  vector?: string;

  /** Style props */
  contactHeaderWidth?: CSSProperties["width"];
  heading3Width?: CSSProperties["width"];
  heading3Height?: CSSProperties["height"];
  ourTeamIsAlignSelf?: CSSProperties["alignSelf"];
};

const Contact: FunctionComponent<ContactType> = ({
  className = "",
  vector,
  contactHeaderWidth,
  heading3Width,
  heading3Height,
  ourTeamIsAlignSelf,
}) => {
  const contactHeaderStyle: CSSProperties = useMemo(() => {
    return {
      width: contactHeaderWidth,
    };
  }, [contactHeaderWidth]);

  const heading3Style: CSSProperties = useMemo(() => {
    return {
      width: heading3Width,
      height: heading3Height,
    };
  }, [heading3Width, heading3Height]);

  const ourTeamIsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: ourTeamIsAlignSelf,
    };
  }, [ourTeamIsAlignSelf]);

  return (
    <div
      className={`w-[1412px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-21xl text-color-2 font-heading-text-inter-semi-bold-24 ${className}`}
    >
      <div className="w-[1052px] flex flex-row items-start justify-between gap-5 max-w-full mq800:flex-wrap">
        <div
          className="w-[283px] flex flex-col items-start justify-start"
          style={contactHeaderStyle}
        >
          <h1
            className="m-0 w-[218px] relative text-inherit font-semibold font-[inherit] inline-block z-[1] mq800:text-13xl mq450:text-5xl"
            style={heading3Style}
          >
            Contact Us
          </h1>
          <div
            className="self-stretch relative text-base leading-[30px] text-color-6"
            style={ourTeamIsStyle}
          >
            Our team is here to help you succeed
          </div>
        </div>
        <div className="h-[66px] w-[285px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border text-left text-lg text-color-6">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-6">
            <div className="self-stretch w-[54px] shadow-[0px_0px_10px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-center relative gap-2.5">
              <div className="self-stretch flex-1 relative rounded-[50%] bg-color" />
              <img
                className="h-6 w-8 absolute !m-[0] top-[15px] left-[11px] z-[1]"
                alt=""
                src={vector}
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0">
              <div className="relative leading-[30px] font-medium whitespace-nowrap">
                info@searchassistant.io
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
