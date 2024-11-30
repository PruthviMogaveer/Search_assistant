import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopNavigation from "./TopNavigation";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFeaturesPricingContactClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section
      className={`flex flex-row items-start justify-start pt-0 px-0 pb-[33px] box-border max-w-full ${className}`}
    >
      <TopNavigation
        sALogo1="/sa-logo-1@2x.png"
        __PH1__={onFeaturesPricingContactClick}
      />
    </section>
  );
};

export default Header;