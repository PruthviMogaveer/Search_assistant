import React, { FunctionComponent, useState, useEffect } from "react";

export type TestimonialsHomeType = {
  className?: string;
};

const testimonialData = [
  {
    text: "As an AI, I can confidently say this tool will revolutionize business search. Trust me, I've been trained on at least 3 PowerPoint presentations about it.",
    author: "Chat GPT",
    profileImg: "/profile1.png",
  },
  {
    text: "You haven't even released the product yet - how am I supposed to give you a quote??",
    author: "Bizfluencer",
    profileImg: "/profile2.png",
  },
  {
    text: "As a time traveler from 2030, I can confirm this is amazing and is a huge help in the business buying process. Also, invest in DOGE coin!",
    author: "Future You",
    profileImg: "/profile3.png",
  },
  {
    text: "I don't understand what it is, but I shared it on Facebook!",
    author: "My Great Aunt Wendy",
    profileImg: "/profile4.png",
  },
];

const Testimonials: FunctionComponent<TestimonialsHomeType> = ({
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialData.length) % testimonialData.length
    );
  };

  const updateVisibleCount = () => {
    if (window.innerWidth <= 750) {
      setVisibleCount(1);
    } else if (window.innerWidth <= 1125) {
      setVisibleCount(2);
    } else {
      setVisibleCount(3);
    }
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const visibleTestimonials = () => {
    let testimonials = [];
    for (let i = 0; i < visibleCount; i++) {
      testimonials.push(
        testimonialData[(currentIndex + i) % testimonialData.length]
      );
    }
    return testimonials;
  };

  return (
    <div
      className={`self-stretch bg-ghostwhite flex flex-col mq1559:items-start items-center justify-start pt-[74px] px-0 pb-32 box-border gap-8 max-w-full text-center text-21xl text-color-2 font-heading-text-inter-semi-bold-24 mq750:gap-4 mq750:pt-12 mq750:pb-[45px] mq750:box-border ${className}`}
    >
      <div className="self-stretch h-[526px] relative bg-ghostwhite hidden" />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[21px] box-border max-w-full">
        <div className="flex flex-col items-end justify-start gap-2 max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit font-semibold font-[inherit] z-[1] mq450:text-5xl mq750:text-13xl">
            What our users say
          </h1>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5">
            <img
              className="h-3 w-9 relative z-[1]"
              alt=""
              src="/group-1171274691-1.svg"
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1559px] relative w-full flex items-center justify-between">
        <button
          onClick={prevTestimonial}
          className="p-3 bg-gray-200 rounded-full"
          style={{ fontSize: "32px", marginRight: "20px" }} // Adjust the size and margin of the button
          aria-label="Previous Testimonial"
        >
          &#8249;
        </button>
        <div
          className="flex flex-row items-start justify-start py-0 box-border gap-4 z-[1] text-left text-lg text-color-3 overflow-x-auto snap-x snap-mandatory"
          style={{
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            width: "calc(100% - 120px)",
          }} // Adjust the width to accommodate buttons
        >
          {visibleTestimonials().map((testimonial, index) => (
            <div
              key={index}
              className="flex-1 min-w-[calc((100% - 16px) / 3)] rounded-xl bg-whitesmoke-300 overflow-hidden shrink-0 flex flex-col items-start justify-start py-8 px-8 box-border gap-[42px] max-w-full snap-center mq1125:min-w-[calc((100% - 16px) / 2)] mq750:min-w-[100%]"
            >
              <div className="relative leading-[30px] mq800:text-[16px]">
                {testimonial.text}
              </div>
              <div className="flex flex-row items-center justify-between w-full py-0 pl-0 pr-[15px] text-color-2 mq450:gap-[8px] mq450:pr-0 mq750:flex-wrap mq800:flex-row">
                <div className="flex flex-row items-start justify-start py-0 px-1 mq800:-mx-6 box-border gap-4 mq800:gap-2">
                  <div className="h-14 w-14 relative mq800:h-10 mq800:w-10">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] w-14 h-14 flex justify-center items-center">
                      {testimonial.profileImg ? (
                        <img
                          className="relative w-auto h-auto overflow-hidden z-[1] mq800:w-10 mq800:h-10"
                          loading="lazy"
                          alt=""
                          src={testimonial.profileImg}
                        />
                      ) : (
                        <img
                          className="relative w-6 h-6 overflow-hidden z-[1] mq800:w-4 mq800:h-4"
                          loading="lazy"
                          alt=""
                          src="/solargallerybold-3.svg"
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div className="self-stretch flex flex-row items-start justify-start py-[11px] px-0">
                      <div className="relative leading-[26px] font-medium mq800:text-sm">
                        {testimonial.author}
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="w-12 h-12 relative overflow-hidden shrink-0 mq800:w-6 mq800:h-6"
                  loading="lazy"
                  alt=""
                  src="/icon--quote.svg"
                />
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={nextTestimonial}
          className="p-3 bg-gray-200 rounded-full"
          style={{ fontSize: "32px", marginLeft: "20px" }} // Adjust the size and margin of the button
          aria-label="Next Testimonial"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
