import {
  FunctionComponent,
  useMemo,
  useState,
  type CSSProperties,
} from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import ButtonCTA from "../buttons/ButtonCTA";

export type TopNavigationType = {
  className?: string;
  sALogo1?: string;
  pricingColor?: CSSProperties["color"];
  topNavigationFlex?: CSSProperties["flex"];
  topNavigationAlignSelf?: CSSProperties["alignSelf"];
  featuresWidth?: CSSProperties["width"];
  featuresDisplay?: CSSProperties["display"];
  featuresAlignItems?: CSSProperties["alignItems"];
  featuresMinWidth?: CSSProperties["minWidth"];
  pricingDisplay?: CSSProperties["display"];
  pricingMinWidth?: CSSProperties["minWidth"];
  contactWidth?: CSSProperties["width"];
  contactDisplay?: CSSProperties["display"];
  contactAlignItems?: CSSProperties["alignItems"];
  contactMinWidth?: CSSProperties["minWidth"];
  topNavigationHeight?: CSSProperties["height"];
  topNavigationWidth?: CSSProperties["width"];
  topNavigationJustifyContent?: CSSProperties["justifyContent"];
  topNavigationGap?: CSSProperties["gap"];
  sALogo1Height?: CSSProperties["height"];
  sALogo1AlignSelf?: CSSProperties["alignSelf"];
  sALogo1MaxHeight?: CSSProperties["maxHeight"];
  sALogo1MinHeight?: CSSProperties["minHeight"];
  navLinksHeight?: CSSProperties["height"];
  linksContainerHeight?: CSSProperties["height"];
  linksContainerWidth?: CSSProperties["width"];
  linksContainerFlex?: CSSProperties["flex"];
  featuresPricingContactWidth?: CSSProperties["width"];
  featuresPricingContactHeight?: CSSProperties["height"];
  featuresPricingContactJustifyContent?: CSSProperties["justifyContent"];
  featuresPricingContactGap?: CSSProperties["gap"];
  featuresPricingContactAlignSelf?: CSSProperties["alignSelf"];
  featuresHeight?: CSSProperties["height"];
  pricingHeight?: CSSProperties["height"];
  pricingWidth?: CSSProperties["width"];
  pricingAlignItems?: CSSProperties["alignItems"];
  contactHeight?: CSSProperties["height"];
};

const TopNavigation: FunctionComponent<TopNavigationType> = ({
  className = "",
  sALogo1,
  pricingColor,
  topNavigationFlex,
  topNavigationAlignSelf,
  featuresWidth,
  featuresDisplay,
  featuresAlignItems,
  featuresMinWidth,
  pricingDisplay,
  pricingMinWidth,
  contactWidth,
  contactDisplay,
  contactAlignItems,
  contactMinWidth,
  topNavigationHeight,
  topNavigationWidth,
  topNavigationJustifyContent,
  topNavigationGap,
  sALogo1Height,
  sALogo1AlignSelf,
  sALogo1MaxHeight,
  sALogo1MinHeight,
  navLinksHeight,
  linksContainerHeight,
  linksContainerWidth,
  linksContainerFlex,
  featuresPricingContactWidth,
  featuresPricingContactHeight,
  featuresPricingContactJustifyContent,
  featuresPricingContactGap,
  featuresPricingContactAlignSelf,
  featuresHeight,
  pricingHeight,
  pricingWidth,
  pricingAlignItems,
  contactHeight,
}) => {
  const location = useLocation();

  const pricingStyle: CSSProperties = useMemo(() => {
    return {
      color: pricingColor,
      display: pricingDisplay,
      minWidth: pricingMinWidth,
      height: pricingHeight,
      width: pricingWidth,
      alignItems: pricingAlignItems,
    };
  }, [
    pricingColor,
    pricingDisplay,
    pricingMinWidth,
    pricingHeight,
    pricingWidth,
    pricingAlignItems,
  ]);

  const topNavigationStyle: CSSProperties = useMemo(() => {
    return {
      flex: topNavigationFlex,
      alignSelf: topNavigationAlignSelf,
      height: topNavigationHeight,
      width: topNavigationWidth,
      justifyContent: topNavigationJustifyContent,
      gap: topNavigationGap,
    };
  }, [
    topNavigationFlex,
    topNavigationAlignSelf,
    topNavigationHeight,
    topNavigationWidth,
    topNavigationJustifyContent,
    topNavigationGap,
  ]);

  const featuresStyle: CSSProperties = useMemo(() => {
    return {
      width: featuresWidth,
      display: featuresDisplay,
      alignItems: featuresAlignItems,
      minWidth: featuresMinWidth,
      height: featuresHeight,
    };
  }, [
    featuresWidth,
    featuresDisplay,
    featuresAlignItems,
    featuresMinWidth,
    featuresHeight,
  ]);

  const contactStyle: CSSProperties = useMemo(() => {
    return {
      width: contactWidth,
      display: contactDisplay,
      alignItems: contactAlignItems,
      minWidth: contactMinWidth,
      height: contactHeight,
    };
  }, [
    contactWidth,
    contactDisplay,
    contactAlignItems,
    contactMinWidth,
    contactHeight,
  ]);

  // Add state for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle for mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderNavLinks = () => (
    <>
      {location.pathname !== "/pricing" && (
        <ScrollLink
          className="[text-decoration:none] h-6 w-[76px] relative leading-[24px] font-medium text-[inherit] flex items-center shrink-0"
          style={featuresStyle}
          to="Feature"
          smooth={true}
          duration={500}
        >
          Features
        </ScrollLink>
      )}
      <RouterLink
        className="[text-decoration:none] h-6 w-[61px] relative leading-[24px] font-medium text-[inherit] flex items-center shrink-0"
        style={pricingStyle}
        to="/pricing"
      >
        Pricing
      </RouterLink>
      <ScrollLink
        className="[text-decoration:none] h-6 w-[70px] relative leading-[24px] font-medium text-[inherit] flex items-center shrink-0"
        style={contactStyle}
        to="contact"
        smooth={true}
        duration={500}
      >
        Contact
      </ScrollLink>
    </>
  );

  const renderMobileNavLinks = () => (
    <nav className="flex flex-col items-center relative -top-10 mq750:-top-20 space-y-8 w-full max-w-md ">
      {location.pathname !== "/pricing" && (
        <ScrollLink
          className=" text-lg font-semibold 
              text-gray-800 hover:text-color no-underline
              transition-colors duration-300 
              relative group "
          style={featuresStyle}
          to="Feature"
          smooth={true}
          duration={500}
        >
          Features
          <span
            className="
                absolute -bottom-2 left-0 w-0 
                h-0.5 bg-color
                group-hover:w-full 
                transition-all duration-300
              "
          />
        </ScrollLink>
      )}
      <RouterLink
        className=" text-lg font-semibold 
              text-gray-800 hover:text-color no-underline
              transition-colors duration-300 
              relative group "
        style={pricingStyle}
        to="/pricing"
      >
        Pricing
        <span
          className="
                absolute -bottom-2 left-0 w-0 
                h-0.5 bg-color
                group-hover:w-full 
                transition-all duration-300
              "
        />
      </RouterLink>
      <ScrollLink
        className=" text-lg font-semibold 
              text-gray-800 hover:text-color no-underline
              transition-colors duration-300 
              relative group "
        style={contactStyle}
        to="contact"
        smooth={true}
        duration={500}
      >
        Contact
        <span
          className="
                absolute -bottom-2 left-0 w-0 
                h-0.5 bg-color
                group-hover:w-full 
                transition-all duration-300
              "
        />
      </ScrollLink>
    </nav>
  );

  return (
    <header
      className={`mq1125:-mb-10 mq1125:-mt-5 h-[110px] w-[1440px] flex flex-row items-start justify-start mq1125:items-center mq1125:px-6 py-[25px] px-[70px] box-border gap-[523px] ${className}`}
      style={topNavigationStyle}
    >
      <RouterLink to="/" className="">
        <img
          className="h-[60px] w-[174px] mq1125:w-[9rem] mq1125:h-[3rem] relative object-cover"
          loading="lazy"
          alt=""
          src={sALogo1}
        />
      </RouterLink>
      <div className="h-[60px] w-[603px] flex flex-row items-start justify-start gap-16 mq1125:hidden">
        <nav className="m-0 h-[42px] w-[332px] flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border">
          <nav className="m-0 w-[332px] h-6 flex flex-row items-start justify-end gap-16 cursor-pointer text-left text-lg text-color-3 font-heading-text-inter-semi-bold-24">
            {renderNavLinks()}
          </nav>
        </nav>
        <ButtonCTA />
      </div>

      {/* Mobile Hamburger Menu Button */}

      <div
        className="  flex-row items-center justify-center  gap-16 mq1125:flex hidden h-full relative right-5 mq800:right-1 cursor-pointer"
        onClick={toggleMobileMenu}
      >
        <img src="/Hamburger.svg" alt="" className=" " />
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="
        fixed inset-0 z-50 
        flex items-stretch
        mq1125:flex hidden
      "
        >
          {/* Transparent Gray Overlay (Left Half) */}
          <div
            onClick={toggleMobileMenu}
            className="
          bg-black/50 
          flex-1 
          cursor-pointer
        "
          />

          {/* Menu Container (Right Half) */}
          <div
            className="
          w-1/2 bg-white 
          relative 
          flex flex-col 
          items-center 
          justify-center 
          p-8 
          overflow-hidden
        "
          >
            <img
          className="absolute top-[0px] left-[-54px] w-[1600px] h-[870.8px] bg-color/20"
          alt=""
          src="/background.svg"
        />
            {/* Close Button */}
            <div
              onClick={toggleMobileMenu}
              className="
            absolute top-3 right-7 
            cursor-pointer 
            duration-300
          "
            >
              <img src="/close.png" alt="Close" className="w-5" />
            </div>

            {/* Menu Navigation */}

            {renderMobileNavLinks()}
          </div>
        </div>
      )}
    </header>
  );
};

export default TopNavigation;
