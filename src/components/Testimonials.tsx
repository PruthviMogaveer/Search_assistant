import { FunctionComponent } from "react";

export type TestimonialsHomeType = {
  className?: string;
};

const testimonialData = [
  {
    text: "As an AI, I can confidently say this tool will revolutionize business search. Trust me, I've been trained on at least 3 PowerPoint presentations about it.",
    author: "Chat GPT",
  },
  {
    text: "You haven't even released the product yet - how am I supposed to give you a quote??",
    author: "Your Favorite Business\nBuying Podcast Host",
    hasImage: true,
  },
  {
    text: "As a time traveler from 2030, I can confirm this is amazing and is a huge help in the business buying process. Also, invest in DOGE coin!",
    author: "Future You",
  },
  {
    text: "I don't understand what it is, but I shared it on Facebook!",
    author: "My Aunt Wendy",
  }
];

const Testimonials: FunctionComponent<TestimonialsHomeType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch bg-ghostwhite flex flex-col items-start justify-start pt-[74px] px-0 pb-32 box-border gap-8 max-w-full text-center text-21xl text-color-2 font-heading-text-inter-semi-bold-24 mq750:gap-4 mq750:pt-12 mq750:pb-[45px] mq750:box-border ${className}`}
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
      <div className="flex flex-row items-start justify-start py-0 px-[70px] box-border gap-4 max-w-full z-[1] text-left text-lg text-color-3 mq750:pl-[35px] mq750:pr-[35px] mq750:box-border [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-x-auto">
        {testimonialData.map((testimonial, index) => (
          <div key={index} className="w-[423px] rounded-xl bg-whitesmoke-300 overflow-hidden shrink-0 flex flex-col items-start justify-start py-8 pl-8 pr-[31px] box-border gap-[42px] max-w-full mq450:gap-[21px]">
            <div className="relative leading-[30px] mq800:text-[16px]">
              {testimonial.text}
            </div>
            <div className="flex flex-row items-center justify-between w-full py-0 pl-0 pr-[15px] text-color-2 mq450:gap-[8px] mq750:flex-wrap mq800:flex-row">
              <div className="flex flex-row items-center justify-start py-0 px-1 box-border gap-4 mq800:gap-2">
                <div className="h-14 w-14 relative mq800:h-10 mq800:w-10">
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro-300 w-full h-full flex justify-center items-center">
                    <img
                      className="relative w-6 h-6 overflow-hidden z-[1] mq800:w-4 mq800:h-4"
                      loading="lazy"
                      alt=""
                      src="/solargallerybold-3.svg"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                  <div className="self-stretch flex flex-row items-start justify-start py-[11px] px-0">
                    <div className="relative leading-[26px] font-medium mq800:text-sm">
                      {testimonial.hasImage ? (
                        <img
                          className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[243px]"
                          loading="lazy"
                          alt=""
                          src="/image1.svg"
                        />
                      ) : (
                        testimonial.author.split('\n').map((line, i) => (
                          <p key={i} className="m-0">{line}</p>
                        ))
                      )}
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
    </div>
  );
};

export default Testimonials;
