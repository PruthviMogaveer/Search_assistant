import { FunctionComponent, useCallback } from "react";

export type FAQType = {
  className?: string;
};

const FAQ: FunctionComponent<FAQType> = ({ className = "" }) => {
  const onAccordionHeaderClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const element = event.target as HTMLElement;

      const accItem: HTMLElement =
        element.closest("[data-acc-item]") || element;
      const accContent = accItem.querySelector(
        "[data-acc-content]"
      ) as HTMLElement;
      const isOpen = accItem.hasAttribute("data-acc-open");
      const nextOuterSibling =
        accItem?.nextElementSibling ||
        (accItem?.parentElement?.nextElementSibling as HTMLElement);
      const prevOuterSibling =
        accItem?.previousElementSibling ||
        (accItem?.parentElement?.previousElementSibling as HTMLElement);
      const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
        ? accItem?.nextElementSibling ||
          nextOuterSibling?.querySelector("[data-acc-item]") ||
          nextOuterSibling
        : accItem?.previousElementSibling ||
          prevOuterSibling?.querySelector("[data-acc-item]") ||
          prevOuterSibling;
      const siblingAccItem =
        (siblingContainerAccItem?.querySelector(
          "[data-acc-item]"
        ) as HTMLElement) || siblingContainerAccItem;

      if (!siblingAccItem) return;
      const originalDisplay = "flex";
      const siblingDisplay = "flex";

      const openClasses = ["grid-rows-[1fr]"];
      const closeClasses = ["pt-0", "pb-0", "mb-0", "mt-0", "grid-rows-[0fr]"];

      if (isOpen) {
        accContent?.classList.remove(...openClasses);
        accContent?.classList.add(...closeClasses);

        setTimeout(() => {
          if (accItem) {
            accItem.style.display = "none";
            siblingAccItem.style.display = siblingDisplay;
          }
        }, 100);
      } else {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = originalDisplay;
        }
        const siblingAccContent = siblingAccItem?.querySelector(
          "[data-acc-content]"
        ) as HTMLElement;
        setTimeout(() => {
          siblingAccContent?.classList.remove(...closeClasses);
          siblingAccContent?.classList.add(...openClasses);
        }, 1);
      }
    },
    []
  );

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-[70px] pb-[15px] box-border max-w-full shrink-0 text-left text-29xl text-color-2 font-heading-text-inter-semi-bold-24 mq800:pl-[35px] mq800:pr-[35px] mq800:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between shrink-0 max-w-full gap-5 mq1325:flex-wrap">
        <div className="w-[476px] flex flex-col items-start justify-start gap-4 min-w-[476px] max-w-full mq800:min-w-full mq1325:flex-1">
          <h1 className="m-0 self-stretch relative text-inherit font-semibold font-[inherit] mq800:text-19xl mq450:text-10xl">
            Your Questions Answered
          </h1>
          <div className="w-[423px] relative text-lg leading-[30px] font-body-text-plus-jakarta-sans-regular-16 text-color-6 inline-block max-w-full">
            Explore the commonly asked questions to gain insights into
            TechHarbor's solutions and processes. We're committed to providing
            transparency and addressing your inquiries to ensure a smooth and
            informed experience.
          </div>
        </div>
        <div className="h-[398px] w-[700px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[700px] max-w-full text-5xl text-color-6 mq1125:min-w-full mq1325:flex-1">
          <div
            className="self-stretch flex-1 flex flex-col items-start justify-start gap-[31px]"
            data-acc-group
          >
            <div
              className="w-[700px] h-[54px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-6 [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
              data-acc-item
              data-acc-header
              data-acc-original
              onClick={onAccordionHeaderClick}
            >
              <div className="w-[682px] h-[29px] flex flex-row items-start justify-start gap-[197px]">
                <div className="h-[29px] w-[462px] relative font-medium inline-block shrink-0 mq450:text-lgi">
                  What’s included in the launch pricing?
                </div>
                <div className="h-[26px] w-6 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0 object-contain"
                    alt=""
                    src="/layer-11@2x.png"
                  />
                </div>
              </div>
              <img className="w-[700px] h-px relative" alt="" src="/line.svg" />
            </div>
            <div
              className="w-[700px] hidden flex-col"
              data-acc-item
              data-acc-open
            >
              <div
                className="w-[700px] h-[54px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-6 cursor-pointer"
                data-acc-header
                onClick={onAccordionHeaderClick}
              >
                <div className="w-[682px] h-[29px] flex flex-row items-start justify-start gap-[197px]">
                  <div className="h-[29px] w-[462px] relative font-medium inline-block shrink-0 mq450:text-lgi">
                    What’s included in the launch pricing?
                  </div>
                  <div className="h-[26px] w-6 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0 object-contain"
                      alt=""
                      src="/layer-11@2x.png"
                    />
                  </div>
                </div>
                <img
                  className="w-[700px] h-px relative"
                  alt=""
                  src="/line.svg"
                />
                <div className="relative text-[transparent] hidden" />
              </div>
              <div
                className="w-[700px] grid flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-6 cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                data-acc-content
              >
                <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
              </div>
            </div>
            <div
              className="w-[700px] h-[54px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-6 [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
              data-acc-item
              data-acc-header
              data-acc-original
              onClick={onAccordionHeaderClick}
            >
              <div className="w-[684px] h-[29px] flex flex-row items-start justify-start gap-[207px]">
                <div className="h-[29px] w-[454px] relative font-medium inline-block shrink-0 mq450:text-lgi">
                  Can I cancel my subscription anytime?
                </div>
                <div className="h-[26px] w-6 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0 object-contain"
                    alt=""
                    src="/layer-11@2x.png"
                  />
                </div>
              </div>
              <img className="w-[700px] h-px relative" alt="" src="/line.svg" />
            </div>
            <div
              className="w-[700px] hidden flex-col"
              data-acc-item
              data-acc-open
            >
              <div
                className="w-[700px] h-[54px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-6 cursor-pointer"
                data-acc-header
                onClick={onAccordionHeaderClick}
              >
                <div className="w-[682px] h-[29px] flex flex-row items-start justify-start gap-[197px]">
                  <div className="h-[29px] w-[454px] relative font-medium inline-block shrink-0 mq450:text-lgi">
                    Can I cancel my subscription anytime?
                  </div>
                  <div className="h-[26px] w-6 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0 object-contain"
                      alt=""
                      src="/layer-11@2x.png"
                    />
                  </div>
                </div>
                <img
                  className="w-[700px] h-px relative"
                  alt=""
                  src="/line.svg"
                />
                <div className="relative text-[transparent] hidden" />
              </div>
              <div
                className="w-[700px] grid flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-6 cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                data-acc-content
              >
                <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
              </div>
            </div>
            <div
              className="w-[700px] h-[54px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-6 [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
              data-acc-item
              data-acc-header
              data-acc-original
              onClick={onAccordionHeaderClick}
            >
              <div className="w-[682px] h-[29px] flex flex-row items-start justify-start gap-[381px]">
                <div className="h-[29px] w-[278px] relative font-medium inline-block shrink-0 mq450:text-lgi">
                  Do you offer a free trial?
                </div>
                <div className="h-[27px] w-6 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0 object-contain"
                    alt=""
                    src="/layer-11@2x.png"
                  />
                </div>
              </div>
              <img className="w-[700px] h-px relative" alt="" src="/line.svg" />
            </div>
            <div
              className="w-[700px] hidden flex-col"
              data-acc-item
              data-acc-open
            >
              <div
                className="w-[700px] h-[54px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-6 cursor-pointer"
                data-acc-header
                onClick={onAccordionHeaderClick}
              >
                <div className="w-[682px] h-[29px] flex flex-row items-start justify-start gap-[197px]">
                  <div className="h-[29px] w-[278px] relative font-medium inline-block shrink-0 mq450:text-lgi">
                    Do you offer a free trial?
                  </div>
                  <div className="h-[26px] w-6 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0 object-contain"
                      alt=""
                      src="/layer-11@2x.png"
                    />
                  </div>
                </div>
                <img
                  className="w-[700px] h-px relative"
                  alt=""
                  src="/line.svg"
                />
                <div className="relative text-[transparent] hidden" />
              </div>
              <div
                className="w-[700px] grid flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-6 cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                data-acc-content
              >
                <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
              </div>
            </div>
            <div
              className="w-[700px] h-[54px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-6 [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
              data-acc-item
              data-acc-header
              data-acc-original
              onClick={onAccordionHeaderClick}
            >
              <div className="w-[682px] h-[29px] flex flex-row items-start justify-start gap-[161px]">
                <div className="h-[29px] w-[498px] relative font-medium inline-block shrink-0 mq450:text-lgi">
                  What payment methods do you accept?
                </div>
                <div className="h-[27px] w-6 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0 object-contain"
                    alt=""
                    src="/layer-11@2x.png"
                  />
                </div>
              </div>
              <img className="w-[700px] h-px relative" alt="" src="/line.svg" />
            </div>
            <div
              className="w-[700px] hidden flex-col"
              data-acc-item
              data-acc-open
            >
              <div
                className="w-[700px] h-[54px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-6 cursor-pointer"
                data-acc-header
                onClick={onAccordionHeaderClick}
              >
                <div className="w-[682px] h-[29px] flex flex-row items-start justify-start gap-[197px]">
                  <div className="h-[29px] w-[498px] relative font-medium inline-block shrink-0 mq450:text-lgi">
                    What payment methods do you accept?
                  </div>
                  <div className="h-[26px] w-6 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0 object-contain"
                      alt=""
                      src="/layer-11@2x.png"
                    />
                  </div>
                </div>
                <img
                  className="w-[700px] h-px relative"
                  alt=""
                  src="/line.svg"
                />
                <div className="relative text-[transparent] hidden" />
              </div>
              <div
                className="w-[700px] grid flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-6 cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                data-acc-content
              >
                <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
              </div>
            </div>
            <div
              className="w-[700px] h-[54px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-6 [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
              data-acc-item
              data-acc-header
              data-acc-original
              onClick={onAccordionHeaderClick}
            >
              <div className="w-[682px] h-[29px] flex flex-row items-start justify-start gap-[418px]">
                <div className="h-[29px] w-[241px] relative font-medium inline-block shrink-0 mq450:text-lgi">
                  Is there a set up fee?
                </div>
                <div className="h-[27px] w-6 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0 object-contain"
                    alt=""
                    src="/layer-11@2x.png"
                  />
                </div>
              </div>
              <img className="w-[700px] h-px relative" alt="" src="/line.svg" />
            </div>
            <div
              className="w-[700px] hidden flex-col"
              data-acc-item
              data-acc-open
            >
              <div
                className="w-[700px] h-[54px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-6 cursor-pointer"
                data-acc-header
                onClick={onAccordionHeaderClick}
              >
                <div className="w-[682px] h-[29px] flex flex-row items-start justify-start gap-[197px]">
                  <div className="h-[29px] w-[241px] relative font-medium inline-block shrink-0 mq450:text-lgi">
                    Is there a set up fee?
                  </div>
                  <div className="h-[26px] w-6 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0 object-contain"
                      alt=""
                      src="/layer-11@2x.png"
                    />
                  </div>
                </div>
                <img
                  className="w-[700px] h-px relative"
                  alt=""
                  src="/line.svg"
                />
                <div className="relative text-[transparent] hidden" />
              </div>
              <div
                className="w-[700px] grid flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-6 cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                data-acc-content
              >
                <div className="[transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
