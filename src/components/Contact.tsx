import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ContactType = {
  className?: string;
  vector?: string;
  /** Style props */
  contactHeaderWidth?: CSSProperties["width"];
  heading3Width?: CSSProperties["width"];
  heading3Height?: CSSProperties["height"];
  ourTeamIsAlignSelf?: CSSProperties["alignSelf"];
  contactInfoWidth?: CSSProperties["width"];
};

const Contact: FunctionComponent<ContactType> = ({
  className = "",
  vector,
  contactHeaderWidth,
  heading3Width,
  heading3Height,
  ourTeamIsAlignSelf,
  contactInfoWidth,
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

  const contactInfoStyle: CSSProperties = useMemo(() => {
    return {
      width: contactInfoWidth,
    };
  }, [contactInfoWidth]);

  return (
    <div
      className={`max-w-[1559px] w-[1412px] mq800:w-screen flex flex-row items-start justify-center py-0 px-5 box-border  text-center text-21xl text-color-2 font-heading-text-inter-semi-bold-24 ${className}`}
    >
      <div className="w-[1052px] flex flex-row items-start justify-between gap-5 max-w-full mq1125:flex-col mq1125:items-center">
        <div
          className="w-[283px] flex flex-col items-start justify-start mq1125:items-center mq1125:text-center mq1125:w-full"
          style={contactHeaderStyle}
        >
          <h1
            className="m-0 w-[218px] relative text-inherit font-semibold font-[inherit] inline-block z-[1] mq800:text-13xl mq450:text-5xl mq800:w-full"
            style={heading3Style}
          >
            Contact Us
          </h1>
          <div
            className="self-stretch relative text-base leading-[30px] text-color-6 mq800:text-center"
            style={ourTeamIsStyle}
          >
            Our team is here to help you succeed
          </div>
        </div>
        <div
          className="h-[66px] w-[285px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border text-left text-lg text-color-6 mq800:w-full mq800:items-center"
          style={contactInfoStyle}
        >
          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-6 mq800:flex-col mq800:items-center">
            <div className="self-stretch w-[54px] shadow-[0px_0px_10px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-center relative gap-2.5 mq800:mb-4">
              <div className="self-stretch flex-1 relative rounded-[50%] bg-color" />
              <img
                className="h-6 w-8 absolute !m-[0] top-[15px] left-[11px] z-[1] mq800:hidden"
                alt=""
                src={vector}
              />
            </div>
            <div className="flex-1 flex flex-row mq800:-mt-20 items-start justify-start pt-3 px-0 pb-0 mq800:items-center">
              <img
                src="/EmailSmall.svg"
                alt=""
                className="mq800:block hidden"
              />
              <div
                className="relative leading-[30px] font-medium whitespace-nowrap mq800:text-center cursor-pointer"
                onClick={() =>
                  (window.location.href = "mailto:info@searchassistant.io")
                }
              >
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
