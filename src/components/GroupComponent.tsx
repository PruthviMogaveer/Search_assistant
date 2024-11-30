import { FunctionComponent } from "react";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch bg-ghostwhite flex flex-col items-start justify-start pt-[74px] px-0 pb-[70px] box-border gap-8 max-w-full text-center text-21xl text-color-2 font-heading-text-inter-semi-bold-24 mq750:gap-4 mq750:pt-12 mq750:pb-[45px] mq750:box-border ${className}`}
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
      <div className="overflow-x-auto flex flex-row items-start justify-start py-0 px-[70px] box-border gap-4 max-w-full z-[1] text-left text-lg text-color-3 mq750:pl-[35px] mq750:pr-[35px] mq750:box-border">
        <div className="w-[423px] rounded-xl bg-whitesmoke-300 overflow-hidden shrink-0 flex flex-col items-start justify-start py-8 pl-8 pr-[31px] box-border gap-[42px] max-w-full mq450:gap-[21px]">
          <div className="relative leading-[30px]">
            As an AI, I can confidently say this tool will revolutionize
            business search. Trust me, I've been trained on at least 3
            PowerPoint presentations about it.
          </div>
          <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[15px] gap-[54px] text-color-2 mq450:gap-[27px] mq750:flex-wrap">
            <div className="w-[243px] flex flex-row items-start justify-start py-0 px-1 box-border gap-4">
              <div className="h-14 w-14 relative">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro-300 w-full h-full" />
                <img
                  className="absolute top-[16px] left-[16px] w-6 h-6 overflow-hidden z-[1]"
                  loading="lazy"
                  alt=""
                  src="/solargallerybold-3.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <div className="self-stretch flex flex-row items-start justify-start py-[11px] px-0">
                  <div className="relative leading-[26px] font-medium inline-block min-w-[84px]">
                    Chat GPT
                  </div>
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
        <div className="w-[422px] rounded-xl bg-whitesmoke-300 overflow-hidden shrink-0 flex flex-col items-start justify-start py-8 pl-8 pr-[30px] box-border gap-[72px] max-w-full mq450:gap-9">
          <div className="w-[290px] relative leading-[30px] flex items-center">
            You haven’t even released the product yet - how am I supposed to
            give you a quote??
          </div>
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start py-0 pl-0 pr-[15px] gap-[25px] text-color-2">
            <div className="h-14 flex-1 relative min-w-[177px]">
              <img
                className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[243px]"
                loading="lazy"
                alt=""
                src="/image.svg"
              />
              <div className="absolute top-[2px] left-[76px] leading-[26px] font-medium z-[1]">
                <p className="m-0">Your Favorite Business</p>
                <p className="m-0">Buying Podcast Host</p>
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
        <div className="w-[423px] rounded-xl bg-whitesmoke-300 overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 pl-8 pr-[31px] box-border gap-11 max-w-full mq450:gap-[22px] mq1100:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border max-w-full mq750:min-w-full mq1100:flex-1">
            <div className="flex flex-col items-start justify-start gap-[42px] shrink-0 max-w-full mq450:gap-[21px]">
              <div className="w-[323px] relative leading-[30px] flex items-center max-w-full">
                As a time traveler from 2030, I can confirm this is amazing and
                is a huge help in the business buying process. Also, invest in
                DOGE coin!
              </div>
              <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[15px] gap-[54px] text-color-2 mq450:gap-[27px] mq750:flex-wrap">
                <div className="w-[243px] flex flex-row items-start justify-start py-0 px-1 box-border gap-4">
                  <div className="h-14 w-14 relative">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro-300 w-full h-full" />
                    <img
                      className="absolute top-[16px] left-[16px] w-6 h-6 overflow-hidden z-[1]"
                      alt=""
                      src="/solargallerybold-3.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div className="self-stretch flex flex-row items-start justify-start py-[11px] px-0">
                      <div className="relative leading-[26px] font-medium inline-block min-w-[94px]">
                        Future You
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0 shrink-0">
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
          <div className="w-[423px] rounded-xl bg-whitesmoke-300 overflow-hidden shrink-0 flex flex-col items-start justify-start py-8 pl-8 pr-[31px] box-border gap-[42px] max-w-[118%] mq450:gap-[21px] mq750:min-w-full mq1100:flex-1">
            <div className="w-[323px] relative leading-[30px] flex items-center max-w-full">
              As a time traveler from 2030, I can confirm this is amazing and is
              a huge help in the business buying process. Also, invest in DOGE
              coin!
            </div>
            <div className="self-stretch flex flex-row items-start justify-start relative gap-[141px] text-xl text-color-2">
              <div className="w-[243px] flex flex-row items-start justify-between py-0 px-1 box-border gap-5">
                <div className="h-14 w-[21px] relative">
                  <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-gainsboro-300 w-14" />
                  <img
                    className="absolute top-[16px] left-[16px] w-6 h-6 overflow-hidden z-[1]"
                    alt=""
                    src="/solargallerybold-3.svg"
                  />
                </div>
                <div className="w-[171px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                  <div className="self-stretch flex flex-row items-start justify-start py-[11px] px-0">
                    <div className="relative leading-[26px] font-medium inline-block min-w-[104px] mq450:text-base mq450:leading-[21px]">
                      Future You
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="h-12 w-12 absolute !m-[0] top-[calc(50%_-_24px)] right-[15px] overflow-hidden shrink-0"
                alt=""
                src="/icon--quote.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[422px] rounded-xl bg-whitesmoke-300 overflow-hidden shrink-0 flex flex-row items-start justify-start py-0 px-8 box-border gap-[382px] max-w-full mq450:gap-[191px]">
          <div className="w-[22px] flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border">
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 gap-[102px] shrink-0">
              <div className="w-[323px] relative leading-[30px] flex items-center max-w-[1469%]">
                I don’t understand what it is, but I shared it on Facebook!
              </div>
              <div className="w-[360px] flex flex-row items-start justify-start relative gap-[141px] max-w-[1637%] text-color-2">
                <div className="w-[243px] flex flex-row items-start justify-between py-0 px-1 box-border gap-5">
                  <div className="h-14 w-[18px] relative">
                    <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-gainsboro-300 w-14" />
                    <img
                      className="absolute top-[16px] left-[16px] w-6 h-6 overflow-hidden z-[1]"
                      alt=""
                      src="/solargallerybold-3.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div className="flex flex-row items-start justify-start py-[11px] pl-0 pr-[33px]">
                      <div className="relative leading-[26px] font-medium">
                        My Aunt Wendy
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="h-12 w-12 absolute !m-[0] top-[calc(50%_-_24px)] right-[15px] overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon--quote.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[423px] rounded-xl bg-whitesmoke-300 overflow-hidden shrink-0 flex flex-col items-start justify-start py-8 pl-8 pr-[31px] box-border gap-[42px] max-w-[119%] mq450:gap-[21px]">
            <div className="w-[323px] relative leading-[30px] flex items-center max-w-full">
              As a time traveler from 2030, I can confirm this is amazing and is
              a huge help in the business buying process. Also, invest in DOGE
              coin!
            </div>
            <div className="self-stretch flex flex-row items-start justify-start relative gap-[141px] text-xl text-color-2">
              <div className="w-[243px] flex flex-row items-start justify-start py-0 px-1 box-border gap-4">
                <div className="h-14 w-14 relative">
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro-300 w-full h-full" />
                  <img
                    className="absolute top-[16px] left-[16px] w-6 h-6 overflow-hidden z-[1]"
                    alt=""
                    src="/solargallerybold-3.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                  <div className="self-stretch flex flex-row items-start justify-start py-[11px] px-0">
                    <div className="relative leading-[26px] font-medium inline-block min-w-[104px] mq450:text-base mq450:leading-[21px]">
                      Future You
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="h-12 w-12 absolute !m-[0] top-[calc(50%_-_24px)] right-[15px] overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/icon--quote.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
