import { FunctionComponent } from "react";

export type TestimonialsPricingType = {
  className?: string;
};

const TestimonialsPricing: FunctionComponent<TestimonialsPricingType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 bg-ghostwhite flex flex-col items-start justify-start pt-[74px] px-0 pb-[70px] box-border gap-8 max-w-full z-[1] text-center text-21xl text-color-2 font-heading-text-inter-semi-bold-24 mq800:gap-4 mq800:pt-12 mq800:pb-[45px] mq800:box-border ${className}`}
    >
      <div className="self-stretch h-[526px] relative bg-ghostwhite hidden" />
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[374px] flex flex-col items-start justify-start gap-2 max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit font-semibold font-[inherit] z-[1] mq800:text-13xl mq450:text-5xl">
            What our users say
          </h1>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <img
              className="h-3 w-9 relative z-[1]"
              alt=""
              src="/group-11712746911.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[1440px] overflow-x-auto flex flex-row items-start justify-start py-0 px-[70px] box-border gap-4 max-w-full z-[1] text-left text-lg text-color-3 mq800:pl-[35px] mq800:pr-[35px] mq800:box-border mq1325:pl-[35px] mq1325:pr-[35px] mq1325:box-border">
        <div className="w-[423px] rounded-xl bg-whitesmoke-300 overflow-hidden shrink-0 flex flex-col items-start justify-start p-8 box-border gap-[42px] max-w-full mq450:gap-[21px]">
          <div className="self-stretch relative leading-[30px]">
            As an AI, I can confidently say this tool will revolutionize
            business search. Trust me, I've been trained on at least 3
            PowerPoint presentations about it.
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-3.5 box-border max-w-full text-color-2">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start gap-4">
                <div className="h-14 w-14 relative">
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro-300 w-full h-full" />
                  <img
                    className="absolute top-[16px] left-[16px] w-6 h-6 overflow-hidden z-[1]"
                    loading="lazy"
                    alt=""
                    src="/solargallerybold-3.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0">
                  <div className="relative leading-[26px] font-medium inline-block min-w-[84px]">
                    Chat GPT
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <img
                  className="w-12 h-12 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon--quote.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[422px] rounded-xl bg-whitesmoke-300 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-8 px-8 pb-[34px] box-border gap-[74px] max-w-full mq450:gap-[37px]">
          <div className="w-[290px] relative leading-[30px] flex items-center">
            You haven’t even released the product yet - how am I supposed to
            give you a quote??
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-[13px] text-color-2">
            <div className="flex flex-row items-start justify-start gap-6 mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start relative">
                <img
                  className="h-14 w-[243px] absolute !m-[0] top-[calc(50%_-_28px)] left-[-76px]"
                  loading="lazy"
                  alt=""
                  src="/image1.svg"
                />
                <div className="h-[52px] relative leading-[26px] font-medium inline-block z-[1]">
                  <p className="m-0">Your Favorite Business</p>
                  <p className="m-0">Buying Podcast Host</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <img
                  className="w-12 h-12 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon--quote.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[423px] rounded-xl bg-whitesmoke-300 overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 px-8 box-border gap-[59px] max-w-full mq1125:flex-wrap mq450:gap-[29px]">
          <div className="w-[345px] flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border min-w-[345px] max-w-full shrink-0 mq800:min-w-full mq1125:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[42px] shrink-0 max-w-full mq450:gap-[21px]">
              <div className="w-[323px] relative leading-[30px] flex items-center max-w-full">
                As a time traveler from 2030, I can confirm this is amazing and
                is a huge help in the business buying process. Also, invest in
                DOGE coin!
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-0 box-border max-w-full text-color-2">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
                  <div className="flex flex-row items-start justify-start gap-4">
                    <div className="h-14 w-14 relative">
                      <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro-300 w-full h-full" />
                      <img
                        className="absolute top-[16px] left-[16px] w-6 h-6 overflow-hidden z-[1]"
                        alt=""
                        src="/solargallerybold-3.svg"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0">
                      <div className="relative leading-[26px] font-medium inline-block min-w-[94px]">
                        Future You
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <img
                      className="w-12 h-12 relative overflow-hidden shrink-0"
                      alt=""
                      src="/icon--quote.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[423px] rounded-xl bg-whitesmoke-300 overflow-hidden shrink-0 flex flex-col items-start justify-start py-8 pl-8 pr-5 box-border relative gap-[42px] min-w-[423px] max-w-[118%] mq800:min-w-full mq1125:flex-1 mq450:gap-[21px]">
            <div className="w-[323px] h-[120px] relative leading-[30px] flex items-center max-w-full">
              As a time traveler from 2030, I can confirm this is amazing and is
              a huge help in the business buying process. Also, invest in DOGE
              coin!
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-1 text-xl text-color-2">
              <div className="w-[21px] flex flex-row items-start justify-start py-0 px-0 box-border gap-[51px]">
                <div className="h-14 w-[21px] relative shrink-0">
                  <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-gainsboro-300 w-14" />
                  <img
                    className="absolute top-[16px] left-[16px] w-6 h-6 overflow-hidden z-[1]"
                    alt=""
                    src="/solargallerybold-3.svg"
                  />
                </div>
                <div className="w-[103px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border shrink-0">
                  <div className="self-stretch relative leading-[26px] font-medium inline-block min-w-[104px] shrink-0 mq450:text-base mq450:leading-[21px]">
                    Future You
                  </div>
                </div>
              </div>
            </div>
            <img
              className="w-12 h-12 absolute !m-[0] right-[46px] bottom-[36px] overflow-hidden shrink-0"
              alt=""
              src="/icon--quote.svg"
            />
          </div>
        </div>
        <div className="w-[422px] rounded-xl bg-whitesmoke-300 overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 px-8 box-border relative gap-[382px] max-w-full mq1125:gap-[191px] mq450:gap-[95px]">
          <div className="w-[22px] flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border shrink-0">
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 gap-[102px] shrink-0 mq450:gap-[51px]">
              <div className="w-[323px] relative leading-[30px] flex items-center max-w-[1469%] shrink-0">
                I don’t understand what it is, but I shared it on Facebook!
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-0 text-color-2">
                <div className="w-[210px] flex flex-row items-start justify-between gap-5 shrink-0">
                  <div className="h-14 w-[18px] relative">
                    <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-gainsboro-300 w-14" />
                    <img
                      className="absolute top-[16px] left-[16px] w-6 h-6 overflow-hidden z-[1]"
                      alt=""
                      src="/solargallerybold-3.svg"
                    />
                  </div>
                  <div className="w-[138px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border">
                    <div className="self-stretch relative leading-[26px] font-medium">
                      My Aunt Wendy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="h-12 w-12 absolute !m-[0] right-[45px] bottom-[36px] overflow-hidden shrink-0"
            alt=""
            src="/icon--quote.svg"
          />
          <div className="w-[423px] rounded-xl bg-whitesmoke-300 overflow-hidden shrink-0 flex flex-col items-start justify-start py-8 pl-8 pr-5 box-border relative gap-[42px] max-w-[119%] mq450:gap-[21px]">
            <div className="w-[323px] h-[120px] relative leading-[30px] flex items-center max-w-full">
              As a time traveler from 2030, I can confirm this is amazing and is
              a huge help in the business buying process. Also, invest in DOGE
              coin!
            </div>
            <div className="w-[183px] flex flex-row items-start justify-start py-0 px-1 box-border text-xl text-color-2">
              <div className="flex-1 flex flex-row items-start justify-start gap-4">
                <div className="h-14 w-14 relative">
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro-300 w-full h-full" />
                  <img
                    className="absolute top-[16px] left-[16px] w-6 h-6 overflow-hidden z-[1]"
                    alt=""
                    src="/solargallerybold-3.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-[15px] px-0 pb-0">
                  <div className="self-stretch relative leading-[26px] font-medium inline-block min-w-[104px] mq450:text-base mq450:leading-[21px]">
                    Future You
                  </div>
                </div>
              </div>
            </div>
            <img
              className="w-12 h-12 absolute !m-[0] right-[46px] bottom-[36px] overflow-hidden shrink-0"
              alt=""
              src="/icon--quote.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPricing;
