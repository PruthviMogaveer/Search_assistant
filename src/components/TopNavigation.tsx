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
}) => {
  const pricingStyle: CSSProperties = useMemo(() => {
    return {
      color: pricingColor,
      display: pricingDisplay,
      minWidth: pricingMinWidth,
    };
  }, [pricingColor, pricingDisplay, pricingMinWidth]);

  const topNavigationStyle: CSSProperties = useMemo(() => {
    return {
      flex: topNavigationFlex,
      alignSelf: topNavigationAlignSelf,
    };
  }, [topNavigationFlex, topNavigationAlignSelf]);

  const featuresStyle: CSSProperties = useMemo(() => {
    return {
      width: featuresWidth,
      display: featuresDisplay,
      alignItems: featuresAlignItems,
      minWidth: featuresMinWidth,
    };
  }, [featuresWidth, featuresDisplay, featuresAlignItems, featuresMinWidth]);

  const contactStyle: CSSProperties = useMemo(() => {
    return {
      width: contactWidth,
      display: contactDisplay,
      alignItems: contactAlignItems,
      minWidth: contactMinWidth,
    };
  }, [contactWidth, contactDisplay, contactAlignItems, contactMinWidth]);

  const navigate = useNavigate();

  const onFeaturesPricingContactClick = useCallback(() => {
    navigate("/");
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
      />
      <div className="h-[60px] w-[603px] flex flex-row items-start justify-start gap-16">
        <nav className="m-0 h-[42px] w-[332px] flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border">
          <nav
            className="m-0 w-[332px] h-6 flex flex-row items-start justify-start gap-16 cursor-pointer text-left text-lg text-color-3 font-heading-text-inter-semi-bold-24"
            onClick={__PH1__}
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
