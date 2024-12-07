import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
// import Map from "../Map";

export type FooterType = {
  className?: string;
  sloganBackground?: string;
  divider?: string;
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
  divider,
  pricingDisplay,
  pricingMinWidth,
  companyDisplay,
  companyMinWidth,
  aboutTextDecoration,
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
  const location = useLocation();
  const navigate = useNavigate();

  const pricingStyle: CSSProperties = useMemo(() => {
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

  const featuresStyle: CSSProperties = useMemo(() => {
    return {
      display: featuresDisplay,
      minWidth: featuresMinWidth,
    };
  }, [featuresDisplay, featuresMinWidth]);

  const contactStyle: CSSProperties = useMemo(() => {
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

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleFeatureClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (location.pathname === "/pricing") {
      navigate("/", { state: { scrollToFeature: true } });
      setTimeout(() => {
        const featureSection = document.getElementById("Feature");
        if (featureSection) {
          featureSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const featureSection = document.getElementById("Feature");
      if (featureSection) {
        featureSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handlePrivacyPolicyClick = (e : React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open("/privacy-policy", "_blank");
  };


  return (
    <footer
      className={`self-stretch bg-color-2 flex flex-col items-center justify-center mq1125:justify-center mq1125:items-center py-12 px-[70px] box-border gap-8 max-w-full text-left text-base text-color-5 font-heading-text-inter-semi-bold-24 mq750:gap-4 mq1125:px-6 mq1125: mq750:box-border mq800:items-center mq800:justify-center ${className}`}
    >
      <div
        className="max-w-[1559px] mq800:space-y-6 flex flex-row items-center justify-start mq1125:justify-center mq1125:items-center gap-[147px]  mq450:gap-[18px] mq750:gap-[37px] mq1275:gap-[73px] mq1275:flex-wrap mq800:flex-col mq800:items-center mq800:justify-center"
        style={footerContainerStyle}
      >
        <div
          className="w-[292px] flex flex-col items-start justify-start mq1125:justify-center mq1125:items-center py-0 pl-0 pr-5 mq1125:pr-0 box-border gap-4 text-darkgray mq800:items-center mq800:justify-center"
          style={footerContentStyle}
        >
          <RouterLink to="/" onClick={handleLogoClick}>
            <img
              className="w-40 mq800:w-32 flex-1 relative max-h-full object-cover z-[1] mq800:self-center"
              loading="lazy"
              alt=""
              src={sloganBackground}
            />
          </RouterLink>
          <div className="relative leading-[24px] z-[1] mq800:text-center">
            <p className="m-0">The Deal Flow Assistant built for</p>
            <p className="m-0">individual business buyers.</p>
          </div>
        </div>
        <div className="w-[291px] flex flex-row items-start justify-between gap-5 mq800:flex-row mq800:justify-center mq800:gap-14 mq800:text-center">
          <div className="flex flex-col items-start justify-start gap-4 mq800:items-center">
            <div
              className="relative leading-[24px] inline-block min-w-[61px] z-[1]"
              style={productStyle}
            >
              Product
            </div>
            <div className="flex flex-col items-start justify-start gap-2 text-darkgray mq800:items-center">
              <a
                onClick={handleFeatureClick}
                className="relative leading-[24px] z-[1] cursor-pointer"
                style={featuresStyle}
              >
                Features
              </a>
              <RouterLink
                to="/pricing"
                className="relative leading-[24px] z-[1] text-inherit no-underline"
                style={pricingStyle}
              >
                Pricing
              </RouterLink>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-4 mq800:items-center">
            <div className="relative leading-[24px] z-[1]" style={companyStyle}>
              Company
            </div>
            <div className="flex flex-col items-start justify-start gap-2 text-darkgray mq800:items-center">
              {/* <a
                className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[47px] z-[1]"
                style={aboutStyle}
              >
                About
              </a> */}
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="relative leading-[24px] inline-block min-w-[62px] z-[1] cursor-pointer"
                style={contactStyle}
              >
                Contact
              </ScrollLink>
            </div>
          </div>
        </div>
        <div className="w-[329px] flex flex-col items-start justify-start gap-4 max-w-full mq800:items-center mq800:justify-center">
          <div className="relative leading-[24px] z-[1] mq800:text-center">
            Join our mailing list
          </div>
          <form
            action="https://search-assistant.outseta.com/email/lists/wQX7pxmK/subscribe"
            method="post"
            className="self-stretch rounded-51xl border-darkgray border-[1px] border-solid box-border flex flex-row items-start justify-between py-0.5 pl-[15px] pr-[5px] min-h-[50px] max-w-full gap-5 z-[1] mq450:flex-wrap mq800:self-center"
            style={groupDivStyle}
          >
            <style>
              {`
                input:-webkit-autofill,
                input:-webkit-autofill:hover,
                input:-webkit-autofill:focus,
                input:-webkit-autofill:active  {
                    -webkit-box-shadow: 0 0 0 30px transparent inset !important;
                    -webkit-text-fill-color: #000 !important;
                }
              `}
            </style>
            <input
              className="flex-grow [border:none] [outline:none] bg-[transparent] h-[33px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border font-heading-text-inter-semi-bold-24 text-base text-dimgray"
              placeholder="Enter your email here"
              type="email"
              id="Email"
              name="Email"
              required
            />
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="o_MPOYuiwfcsNRzpUlZd5KqnTL_YsHf4SLb"
                tabIndex={-1}
                value=""
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer h-[42px] w-[42px] rounded-[50%] flex items-center justify-center bg-color text-color-5"
            >
              <img className="w-3 h-3" alt="Submit" src="/vector-10.svg" />
            </button>
          </form>
        </div>
      </div>
      <div
        className="max-w-[1559px] w-full flex flex-col items-center justify-center gap-6 text-darkgray mq750:h-auto"
        style={legalStyle}
      >
        <img
          className="self-stretch max-w-full overflow-hidden max-h-full"
          alt=""
          src={divider}
        />
        <div className="w-full flex items-center justify-between mq800:flex-col gap-5 text-center">
          <div className="leading-[20px]">
            © 2024 Search Assistant, Inc. All rights reserved.
          </div>
          <div
            className="flex items-center justify-center mq800:flex-col gap-[54px] mq450:gap-[27px] mq800:gap-5"
            style={legalLinksStyle}
          >
            {/* <a className="[text-decoration:none] leading-[20px] text-[inherit]">{`Terms & Conditions`}</a> */}
            <a
              className="[text-decoration:none] leading-[20px] text-[inherit]"
              style={privacyPolicyStyle}
              onClick={handlePrivacyPolicyClick}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
      {/* <Map/> */}
    </footer>
  );
};

export default Footer;
