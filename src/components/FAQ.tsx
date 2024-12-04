import React, { FunctionComponent, useState } from "react";

// Define the structure of an FAQ item
interface FAQItem {
  question: string;
  answer: string;
}

export type FAQType = {
  className?: string;
};

// FAQ data as a separate array
const faqData: FAQItem[] = [
  {
    question: "What's included in the launch pricing?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    question: "What payment methods do you accept?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    question: "Is there a set up fee?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  }
];

const FAQ: FunctionComponent<FAQType> = ({ className = "" }) => {
  // Use state to track which FAQ is currently open
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  // Toggle FAQ item open/closed
  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <section
      className={`mq800:mt-10 self-stretch flex flex-row items-start justify-end pt-0 px-[70px] pb-8 box-border max-w-full shrink-0 text-left text-29xl text-color-2 font-heading-text-inter-semi-bold-24 mq800:pl-[35px] mq800:pr-[35px] mq800:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between shrink-0 max-w-full gap-5 mq1325:flex-wrap">
        <div className="w-[476px] flex flex-col items-start justify-start mq1125:justify-center mq1125:items-center gap-4 min-w-[476px] max-w-full mq800:min-w-full mq1325:flex-1">
          <h1 className="m-0 self-stretch mq1125:text-center relative text-inherit font-semibold font-[inherit] mq800:text-19xl mq450:text-10xl">
            Your Questions Answered
          </h1>
          <div className="w-[423px] mq800:text-[16px] mq1125:text-center mq1125:mb-5 relative text-lg leading-[30px] font-body-text-plus-jakarta-sans-regular-16 text-color-6 inline-block max-w-full">
            Explore the commonly asked questions to gain insights into
            TechHarbor's solutions and processes. We're committed to providing
            transparency and addressing your inquiries to ensure a smooth and
            informed experience.
          </div>
        </div>
        <div className="h-auton mq1125:-ml-2 w-[700px] min-w-[300px] max-w-full flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-5xl text-color-6 
  mq1125:min-w-full 
  mq1325:flex-1
  mq800:text-xl mq800:w-full mq800:min-w-[100%] mq800:px-2">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[31px]">
            {faqData.map((faq, index) => (
              <div key={index} className="w-full">
                {/* FAQ Header */}
                <div
                  className={`w-full flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-4
            [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms]
            cursor-pointer 
            mq800:w-full 
            ${openFAQIndex === index ? 'bg-gray-100' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="w-full flex flex-row items-start justify-start gap-[197px] mq800:gap-4">
                    <div className="h-[29px] w-[462px] relative font-medium inline-block shrink-0 
              mq450:text-lgi 
              mq800:text-base mq800:w-full mq800:max-w-[calc(100%-40px)]">
                      {faq.question}
                    </div>
                    <div className="h-[26px] w-6 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                      <img
                        className={`w-6 h-6 relative overflow-hidden shrink-0 object-contain transform transition-transform
                  ${openFAQIndex === index ? 'rotate-180' : ''}`}
                        alt="Expand/Collapse"
                        src="/layer-11@2x.png"
                      />
                    </div>
                  </div>
                  <hr className="w-[100%] relative left-1 border-t border-black/10" />
                </div>
                {/* FAQ Content */}
                <div
                  className={`w-full overflow-hidden transition-all duration-300 ease-in-out
            mq800:w-full
            ${openFAQIndex === index
                      ? 'max-h-[1000px] opacity-100 visible'
                      : 'max-h-0 opacity-0 invisible'}`}
                  style={{
                    // Dynamic height adjustment for mq800
                    height: openFAQIndex === index ? 'auto' : '0',
                    // Ensures content pushes other elements down
                    position: 'relative',
                    zIndex: openFAQIndex === index ? 10 : 0
                  }}
                >
                  <div className="p-4 text-color-6 mq800:text-sm mq800:p-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;