import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FooterType = {
  className?: string;
  sloganBackground?: string;
  divider?: string;

  /** Style props */
  pricingDisplay?: CSSProperties["display"];
  pricingMinWidth?: CSSProperties["minWidth"];
  companyDisplay?: CSSProperties["display"];
  companyMinWidth?: CSSProperties["minWidth"];
  aboutTextDecoration?: CSSProperties["textDecoration"];
  privacyPolicyDisplay?: CSSProperties["display"];
  privacyPolicyMinWidth?: CSSProperties["minWidth"];
  productDisplay?: CSSProperties["display"];
  productMinWidth?: CSSProperties["minWidth"];
  featuresDisplay?: CSSProperties["display"];
  featuresMinWidth?: CSSProperties["minWidth"];
  aboutDisplay?: CSSProperties["display"];
  aboutMinWidth?: CSSProperties["minWidth"];
  contactDisplay?: CSSProperties["display"];
  contactMinWidth?: CSSProperties["minWidth"];
  groupDivMinHeight?: CSSProperties["minHeight"];
  footerContainerWidth?: CSSProperties["width"];
  footerContentHeight?: CSSProperties["height"];
  legalHeight?: CSSProperties["height"];
  legalLinksWidth?: CSSProperties["width"];
};

const Footer: FunctionComponent<FooterType> = ({
  className = "",
  sloganBackground,
  pricingDisplay,
  pricingMinWidth,
  companyDisplay,
  companyMinWidth,
  aboutTextDecoration,
  divider,
  privacyPolicyDisplay,
  privacyPolicyMinWidth,
  productDisplay,
  productMinWidth,
  featuresDisplay,
  featuresMinWidth,
  aboutDisplay,
  aboutMinWidth,
  contactDisplay,
  contactMinWidth,
  groupDivMinHeight,
  footerContainerWidth,
  footerContentHeight,
  legalHeight,
  legalLinksWidth,
}) => {
  const pricing1Style: CSSProperties = useMemo(() => {
    return {
      display: pricingDisplay,
      minWidth: pricingMinWidth,
    };
  }, [pricingDisplay, pricingMinWidth]);

  const companyStyle: CSSProperties = useMemo(() => {
    return {
      display: companyDisplay,
      minWidth: companyMinWidth,
    };
  }, [companyDisplay, companyMinWidth]);

  const aboutStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: aboutTextDecoration,
      display: aboutDisplay,
      minWidth: aboutMinWidth,
    };
  }, [aboutTextDecoration, aboutDisplay, aboutMinWidth]);

  const privacyPolicyStyle: CSSProperties = useMemo(() => {
    return {
      display: privacyPolicyDisplay,
      minWidth: privacyPolicyMinWidth,
    };
  }, [privacyPolicyDisplay, privacyPolicyMinWidth]);

  const productStyle: CSSProperties = useMemo(() => {
    return {
      display: productDisplay,
      minWidth: productMinWidth,
    };
  }, [productDisplay, productMinWidth]);

  const features1Style: CSSProperties = useMemo(() => {
    return {
      display: featuresDisplay,
      minWidth: featuresMinWidth,
    };
  }, [featuresDisplay, featuresMinWidth]);

  const contact1Style: CSSProperties = useMemo(() => {
    return {
      display: contactDisplay,
      minWidth: contactMinWidth,
    };
  }, [contactDisplay, contactMinWidth]);

  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: groupDivMinHeight,
    };
  }, [groupDivMinHeight]);

  const footerContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: footerContainerWidth,
    };
  }, [footerContainerWidth]);

  const footerContentStyle: CSSProperties = useMemo(() => {
    return {
      height: footerContentHeight,
    };
  }, [footerContentHeight]);

  const legalStyle: CSSProperties = useMemo(() => {
    return {
      height: legalHeight,
    };
  }, [legalHeight]);

  const legalLinksStyle: CSSProperties = useMemo(() => {
    return {
      width: legalLinksWidth,
    };
  }, [legalLinksWidth]);

  return (
    <footer
      className={`self-stretch bg-color-2 flex flex-col items-start justify-start py-12 px-[70px] box-border gap-8 max-w-full text-left text-base text-color-5 font-heading-text-inter-semi-bold-24 mq750:gap-4 mq750:pl-[35px] mq750:pr-[35px] mq750:box-border ${className}`}
    >
      <div className="w-[1440px] h-[294px] relative bg-color-2 hidden max-w-full" />
      <div
        className="flex flex-row items-start justify-center gap-[147px] max-w-full mq450:gap-[18px] mq750:gap-[37px] mq1275:gap-[73px] mq1275:flex-wrap"
        style={footerContainerStyle}
      >
        <div
          className="w-[292px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-4 text-darkgray"
          style={footerContentStyle}
        >
          <img
            className="w-[154px] flex-1 relative max-h-full object-cover z-[1]"
            loading="lazy"
            alt=""
            src={sloganBackground}
          />
          <div className="relative leading-[24px] z-[1]">
            <p className="m-0">The Deal Flow Assistant built for</p>
            <p className="m-0">individual business buyers.</p>
          </div>
        </div>
        <div className="w-[291px] flex flex-row items-start justify-between gap-5">
          <div className="flex flex-col items-start justify-start gap-4">
            <div
              className="relative leading-[24px] inline-block min-w-[61px] z-[1]"
              style={productStyle}
            >
              Product
            </div>
            <div className="flex flex-col items-start justify-start gap-2 text-darkgray">
              <div
                className="relative leading-[24px] z-[1]"
                style={features1Style}
              >
                Features
              </div>
              <div
                className="relative leading-[24px] z-[1]"
                style={pricing1Style}
              >
                Pricing
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <div className="relative leading-[24px] z-[1]" style={companyStyle}>
              Company
            </div>
            <div className="flex flex-col items-start justify-start gap-2 text-darkgray">
              <a
                className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[47px] z-[1]"
                style={aboutStyle}
              >
                About
              </a>
              <div
                className="relative leading-[24px] inline-block min-w-[62px] z-[1]"
                style={contact1Style}
              >
                Contact
              </div>
            </div>
          </div>
        </div>
        <div className="w-[329px] flex flex-col items-start justify-start gap-4 max-w-full">
          <div className="relative leading-[24px] z-[1]">
            Join our mailing list
          </div>
          <div
            className="self-stretch rounded-51xl border-darkgray border-[1px] border-solid box-border flex flex-row items-start justify-between py-0.5 pl-[15px] pr-[5px] min-h-[50px] max-w-full gap-5 z-[1] mq450:flex-wrap"
            style={groupDivStyle}
          >
            <input
              className="w-[161px] [border:none] [outline:none] bg-[transparent] h-[33px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border font-heading-text-inter-semi-bold-24 text-base text-dimgray"
              placeholder="Enter your email here"
              type="text"
            />
            <div className="h-[50px] w-[329px] relative rounded-51xl border-darkgray border-[1px] border-solid box-border hidden max-w-full" />
            <div className="h-[42px] w-[42px] relative">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-color w-full h-full z-[2]" />
              <img
                className="absolute top-[15px] left-[15px] w-3 h-3 z-[3]"
                alt=""
                src="/vector-10.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full text-darkgray mq750:h-auto"
        style={legalStyle}
      >
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
          alt=""
          src={divider}
        />
        <div className="self-stretch flex flex-row items-start justify-between shrink-0 gap-5 max-w-full mq750:flex-wrap">
          <div className="relative leading-[20px] inline-block max-w-full z-[1]">
            © 2024 Search Assistant, Inc. All rights reserved.
          </div>
          <div
            className="flex flex-row items-start justify-start gap-[54px] mq450:gap-[27px]"
            style={legalLinksStyle}
          >
            <a className="[text-decoration:none] relative leading-[20px] text-[inherit] z-[1]">{`Terms & Conditions`}</a>
            <a
              className="[text-decoration:none] relative leading-[20px] text-[inherit] z-[1]"
              style={privacyPolicyStyle}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
