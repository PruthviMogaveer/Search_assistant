import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import ButtonCTA from "./ButtonCTA";

export type TopNavigationType = {
  className?: string;
  sALogo1?: string;

  /** Style props */
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

  /** Action props */
  onSALogoClick?: () => void;
  __PH1__?: () => void;
};

const TopNavigation: FunctionComponent<TopNavigationType> = ({
  className = "",
  sALogo1,
  onSALogoClick,
  __PH1__,
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

  const sALogo1Style: CSSProperties = useMemo(() => {
    return {
      height: sALogo1Height,
      alignSelf: sALogo1AlignSelf,
      maxHeight: sALogo1MaxHeight,
      minHeight: sALogo1MinHeight,
    };
  }, [sALogo1Height, sALogo1AlignSelf, sALogo1MaxHeight, sALogo1MinHeight]);

  const navLinksStyle: CSSProperties = useMemo(() => {
    return {
      height: navLinksHeight,
    };
  }, [navLinksHeight]);

  const linksContainerStyle: CSSProperties = useMemo(() => {
    return {
      height: linksContainerHeight,
      width: linksContainerWidth,
      flex: linksContainerFlex,
    };
  }, [linksContainerHeight, linksContainerWidth, linksContainerFlex]);

  const featuresPricingContactStyle: CSSProperties = useMemo(() => {
    return {
      width: featuresPricingContactWidth,
      height: featuresPricingContactHeight,
      justifyContent: featuresPricingContactJustifyContent,
      gap: featuresPricingContactGap,
      alignSelf: featuresPricingContactAlignSelf,
    };
  }, [
    featuresPricingContactWidth,
    featuresPricingContactHeight,
    featuresPricingContactJustifyContent,
    featuresPricingContactGap,
    featuresPricingContactAlignSelf,
  ]);

  const navigate = useNavigate();

  const onFeaturesPricingContactClick = useCallback(() => {
    navigate("/pricing");
  }, [navigate]);

  return (
    <header
      className={`h-[110px] w-[1440px] flex flex-row items-start justify-start py-[25px] px-[70px] box-border gap-[523px] ${className}`}
      style={topNavigationStyle}
    >
      <img
        className="h-[60px] w-[174px] relative object-cover"
        loading="lazy"
        alt=""
        src={sALogo1}
        onClick={onSALogoClick}
        style={sALogo1Style}
      />
      <div
        className="h-[60px] w-[603px] flex flex-row items-start justify-start gap-16"
        style={navLinksStyle}
      >
        <nav
          className="m-0 h-[42px] w-[332px] flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border"
          style={linksContainerStyle}
        >
          <nav
            className="m-0 w-[332px] h-6 flex flex-row items-start justify-start gap-16 cursor-pointer text-left text-lg text-color-3 font-heading-text-inter-semi-bold-24"
            onClick={__PH1__}
            style={featuresPricingContactStyle}
          >
            <a
              className="[text-decoration:none] h-6 w-[76px] relative leading-[24px] font-medium text-[inherit] flex items-center shrink-0"
              style={featuresStyle}
            >
              Features
            </a>
            <a
              className="[text-decoration:none] h-6 w-[61px] relative leading-[24px] font-medium text-[inherit] flex items-center shrink-0"
              style={pricingStyle}
            >
              Pricing
            </a>
            <a
              className="[text-decoration:none] h-6 w-[70px] relative leading-[24px] font-medium text-[inherit] flex items-center shrink-0"
              style={contactStyle}
            >
              Contact
            </a>
          </nav>
        </nav>
        <ButtonCTA />
      </div>
    </header>
  );
};

export default TopNavigation;
