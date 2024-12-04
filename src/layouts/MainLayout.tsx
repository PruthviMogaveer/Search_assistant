import { FC, ReactNode } from "react";
import TopNavigation from "../components/navigation/TopNavigation";
import Footer from "../components/footer/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <TopNavigation
        sALogo1="/sa-logo-1@2x.png"
        topNavigationFlex="unset"
        topNavigationAlignSelf="stretch"
        featuresWidth="unset"
        featuresDisplay="inline-block"
        featuresAlignItems="unset"
        featuresMinWidth="76px"
        pricingDisplay="inline-block"
        pricingMinWidth="61px"
        contactWidth="unset"
        contactDisplay="inline-block"
        contactAlignItems="unset"
        contactMinWidth="70px"
        topNavigationHeight="unset"
        topNavigationWidth="unset"
        topNavigationJustifyContent="space-between"
        topNavigationGap="20px"
        sALogo1Height="unset"
        sALogo1AlignSelf="stretch"
        sALogo1MaxHeight="100%"
        sALogo1MinHeight="60px"
        navLinksHeight="unset"
        linksContainerHeight="unset"
        linksContainerWidth="unset"
        linksContainerFlex="1"
        featuresPricingContactWidth="unset"
        featuresPricingContactHeight="unset"
        featuresPricingContactJustifyContent="space-between"
        featuresPricingContactGap="20px"
        featuresPricingContactAlignSelf="stretch"
        featuresHeight="unset"
        pricingHeight="unset"
        pricingWidth="unset"
        pricingAlignItems="unset"
        contactHeight="unset"
        className="z-10"
      />
      <main>{children}</main>
      <Footer
        sloganBackground="/-1@2x.png"
        divider="/divider.svg"
      />
    </>
  );
};