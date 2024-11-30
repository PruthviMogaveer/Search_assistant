import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopNavigation from "../components/TopNavigation";
import ButtonCTA from "../components/ButtonCTA";
import GroupComponent from "../components/GroupComponent";
import GroupComponent1 from "../components/GroupComponent1";

const SAHome: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFeaturesPricingContactClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-color-5 overflow-hidden flex flex-col items-start justify-start gap-24 leading-[normal] tracking-[normal] text-left text-45xl text-color-2 font-heading-text-inter-semi-bold-24 mq450:gap-6 mq750:gap-12">
      <div className="w-[532.4px] h-[545.8px] absolute !m-[0] bottom-[2817.4px] left-[-417px] [filter:blur(1000px)] rounded-[50%] bg-color" />
      <section className="w-full h-[1206.6px] absolute !m-[0] top-[0px] right-[0px] left-[0px]">
        <img
          className="absolute top-[0px] left-[-54px] w-[1548px] h-[870.8px]"
          alt=""
          src="/background.svg"
        />
        <div className="absolute top-[557.6px] left-[1172.8px] [filter:blur(1000px)] rounded-[50%] bg-color w-[634px] h-[649px] z-[1]" />
        <div className="absolute top-[-375px] left-[-367px] [filter:blur(1000px)] rounded-[50%] bg-color w-[634px] h-[650px] z-[1]" />
        <img
          className="absolute top-[252px] left-[740px] w-[585px] h-[446.5px] object-contain z-[2]"
          loading="lazy"
          alt=""
          src="/mask-group@2x.png"
        />
      </section>
      <section className="flex flex-row items-start justify-start pt-0 px-0 pb-[33px] box-border max-w-full">
        <TopNavigation
          sALogo1="/sa-logo-1@2x.png"
          __PH1__={onFeaturesPricingContactClick}
        />
      </section>
      <div className="w-[922px] flex flex-row items-start justify-start pt-0 px-[70px] pb-[99px] box-border max-w-full mq750:pb-16 mq750:box-border mq1100:pl-[35px] mq1100:pr-[35px] mq1100:box-border">
        <div className="flex-1 flex flex-row items-end justify-start max-w-full [row-gap:20px] mq750:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-6 min-w-[379px] shrink-0 max-w-full mq750:min-w-full">
            <h1 className="m-0 self-stretch relative text-inherit capitalize z-[2] font-[inherit] mq450:text-19xl mq750:text-32xl">
              <p className="m-0 font-semibold">Unlocking</p>
              <p className="m-0 font-semibold">Opportunities.</p>
              <p className="m-0 text-color">
                <b>Empowering</b>
              </p>
              <p className="m-0">
                <b>Ownership.</b>
              </p>
            </h1>
            <div className="w-[317px] relative text-lg leading-[150%] text-color-3 inline-block z-[1]">
              Use the Deal Flow Assistant built for individual business buyers.
            </div>
            <ButtonCTA requestAccessTextDecoration="unset" />
          </div>
          <div className="h-[205px] flex flex-col items-start justify-end pt-0 px-0 pb-[39px] box-border ml-[-9px] text-center text-5xl text-main-color-1 mq750:flex-1 mq750:ml-0">
            <div className="self-stretch flex-1 shadow-[24px_24px_64px_rgba(0,_0,_0,_0.15)] [backdrop-filter:blur(24px)] rounded-[14px] bg-gray-200 border-gray-100 border-[1px] border-solid flex flex-col items-start justify-start py-[18px] px-[19px] shrink-0 z-[3]">
              <div className="self-stretch flex flex-col items-start justify-start relative gap-2.5">
                <div className="self-stretch flex flex-col items-start justify-start gap-2.5">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="h-12 w-12 relative"
                      alt=""
                      src="/avatar.svg"
                    />
                    <img
                      className="h-12 w-12 relative z-[1] ml-[-24px]"
                      alt=""
                      src="/avatar-1.svg"
                    />
                    <img
                      className="h-12 w-12 relative z-[2] ml-[-24px]"
                      alt=""
                      src="/avatar-1.svg"
                    />
                    <img
                      className="h-12 w-12 relative rounded-[150px] overflow-hidden shrink-0 z-[3] ml-[-24px]"
                      alt=""
                      src="/add.svg"
                    />
                    <img
                      className="h-12 w-12 relative hidden z-[5]"
                      alt=""
                      src="/avatar1.svg"
                    />
                  </div>
                  <div className="w-[147px] relative leading-[32px] font-semibold inline-block mq450:text-lgi mq450:leading-[26px]">
                    120+ Clients
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-2 text-base text-darkslategray-200 font-body-text-plus-jakarta-sans-regular-16">
                    <img
                      className="h-[26px] w-[26px] relative rounded-[1px]"
                      loading="lazy"
                      alt=""
                      src="/star-1.svg"
                    />
                    <div className="flex-1 relative leading-[24px]">
                      5.0 (3.1K Reviews)
                    </div>
                  </div>
                </div>
                <img
                  className="w-[124px] h-10 absolute !m-[0] top-[18px] left-[0px] hidden z-[1]"
                  alt=""
                  src="/group-1171274682.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="w-[1395px] flex flex-row items-start justify-start pt-0 px-[70px] pb-4 box-border max-w-full text-left text-29xl text-color-2 font-heading-text-inter-semi-bold-24 mq1275:pl-[35px] mq1275:pr-[35px] mq1275:box-border">
        <div className="flex-1 flex flex-row items-start justify-start gap-[174px] max-w-full mq450:gap-[22px] mq750:gap-[43px] mq1100:flex-wrap mq1275:gap-[87px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[386px] max-w-full mq750:min-w-full">
            <h1 className="m-0 self-stretch relative text-inherit font-semibold font-[inherit] mq450:text-10xl mq750:text-19xl">
              <p className="m-0">{`Why is buying a `}</p>
              <p className="m-0">{`business harder `}</p>
              <p className="m-0">than it needs to be?</p>
            </h1>
            <div className="w-[550px] relative text-lg leading-[30px] text-color-6 inline-block max-w-full">
              Business acquisitions will always be complex - that's the nature
              of buying a company. But finding and engaging with the right
              opportunities needs an upgrade.
            </div>
          </div>
          <div className="w-[487px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border max-w-full text-9xl mq750:min-w-full mq1100:flex-1">
            <div className="self-stretch flex flex-row items-start justify-start gap-6 max-w-full mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[137px]">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[66px]">
                  <div className="self-stretch h-[62px] relative">
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full"
                      loading="lazy"
                      alt=""
                      src="/group-1171274687.svg"
                    />
                    <div className="absolute top-[22.9px] left-[17.1px] bg-gainsboro-300 w-[0.9px] h-0 z-[1]" />
                  </div>
                  <img
                    className="w-[60px] h-[62px] relative"
                    loading="lazy"
                    alt=""
                    src="/group-1171274688.svg"
                  />
                </div>
                <div className="self-stretch h-[62px] relative">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full"
                    alt=""
                    src="/group-1171274722.svg"
                  />
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                    loading="lazy"
                    alt=""
                    src="/group-1171274722.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[32.5px] min-w-[262px] max-w-full mq450:gap-4">
                <div className="w-[380px] flex flex-col items-start justify-start gap-2 max-w-full">
                  <h3 className="m-0 relative text-inherit leading-[28px] font-semibold font-[inherit] inline-block max-w-full z-[2] mq450:text-3xl mq450:leading-[22px]">
                    You want to review deals
                  </h3>
                  <div className="relative text-lg leading-[30px] text-color-6 z-[2]">
                    But they are spread far and wide, often on websites that
                    were built in the 90s.
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-2 max-w-full">
                  <h3 className="m-0 relative text-inherit font-semibold font-[inherit] inline-block max-w-full z-[2] mq450:text-3xl">
                    <p className="m-0">You want to review relevant,</p>
                    <p className="m-0">new deals</p>
                  </h3>
                  <div className="relative text-lg leading-[30px] text-color-6 z-[2]">
                    But you are stuck sorting through junk listings along with
                    the dozen other deals you reviewed last week.
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-2 max-w-full">
                  <h3 className="m-0 relative text-inherit font-semibold font-[inherit] inline-block max-w-full mq450:text-3xl">
                    <p className="m-0">You want to fast-forward to</p>
                    <p className="m-0">truly engaging on a deal</p>
                  </h3>
                  <div className="relative text-lg leading-[30px] text-color-6">
                    But instead, you have to go through the same basic
                    onboarding process just to learn more.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-12 box-border max-w-full text-center text-29xl text-color-5 font-heading-text-inter-semi-bold-24 mq450:pb-[31px] mq450:box-border">
        <div className="h-[390px] flex-1 [background:linear-gradient(180deg,_#03012c,_rgba(3,_1,_44,_0.95))] flex flex-col items-start justify-start pt-12 px-[70px] pb-[54px] box-border gap-5 max-w-full mq450:pt-[31px] mq450:pb-[35px] mq450:box-border mq750:pl-[35px] mq750:pr-[35px] mq750:box-border">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[216px] pr-[215px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[54px] mq750:pr-[53px] mq750:box-border mq1275:pl-[108px] mq1275:pr-[107px] mq1275:box-border">
            <h1 className="m-0 flex-1 relative text-inherit font-semibold font-[inherit] mq450:text-10xl mq750:text-19xl">
              <p className="m-0">Supercharge your acquisition journey</p>
              <p className="m-0">with Search Assistant</p>
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center">
            <img
              className="h-3 w-9 relative"
              loading="lazy"
              alt=""
              src="/group-1171274691.svg"
            />
          </div>
          <img
            className="self-stretch h-[120px] relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/group-1171274690.svg"
          />
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[47px] pl-5 pr-[29px] box-border max-w-full text-left text-13xl text-color-2 font-heading-text-inter-semi-bold-24 mq450:pb-[31px] mq450:box-border">
        <div className="flex flex-row items-end justify-center gap-[110px] max-w-full mq450:gap-[27px] mq750:gap-[55px] mq1100:flex-wrap">
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border min-w-[537px] max-w-full mq750:min-w-full mq1100:flex-1">
            <div className="self-stretch h-[402px] relative">
              <img
                className="absolute top-[173px] left-[235px] w-14 h-14 overflow-hidden"
                loading="lazy"
                alt=""
                src="/solargallerybold-1.svg"
              />
              <img
                className="absolute top-[0px] left-[0px] rounded-xl w-full h-full object-cover z-[1]"
                alt=""
                src="/image@2x.png"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-3.5 min-w-[404px] max-w-full mq750:min-w-full">
            <h2 className="m-0 relative text-inherit leading-[40px] font-semibold font-[inherit] inline-block max-w-full mq450:text-lgi mq450:leading-[24px] mq750:text-7xl mq750:leading-[32px]">
              Comprehensive Deal Coverage
            </h2>
            <div className="self-stretch flex flex-row items-start justify-start gap-2 max-w-full text-5xl mq750:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <div className="flex flex-col items-start justify-start gap-[156.5px]">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/layer-1.svg"
                  />
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/frame.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-7 min-w-[383px] max-w-full mq750:min-w-full">
                <div className="w-[552px] flex flex-col items-start justify-start gap-1 max-w-full">
                  <div className="relative leading-[32px] font-medium mq450:text-lgi mq450:leading-[26px]">
                    Extensive Broker Network
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-2 max-w-full text-lg text-color-6 mq750:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                      <img
                        className="w-4 h-4 relative"
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                    <div className="flex-1 relative leading-[30px] inline-block min-w-[343px] max-w-full mq450:min-w-full">
                      <span>{`Through a combination of deal sourcing bots and direct relationships, Search Assistant covers XX% of Brokers* with more being added regularly `}</span>
                      <span className="text-color">
                        so that all of the deals you need are in one place.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[559px] flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-1 max-w-full">
                  <div className="relative leading-[32px] font-medium inline-block max-w-full mq450:text-lgi mq450:leading-[26px]">
                    Focus on the Individual Buyer
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-2 max-w-full text-lg text-color-6 mq750:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[9.2px] px-0 pb-0">
                      <img
                        className="w-4 h-4 relative"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <div className="flex-1 relative leading-[30px] inline-block min-w-[348px] max-w-full mq450:min-w-full">
                      <span>{`Search Assistant’s primary focus is on uncovering established, SBA-eligible, physical businesses for sale in the US `}</span>
                      <span className="text-color">
                        so that you can review more deals that are a potential
                        match.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative text-xs text-color-6">
                  * measured as brokers in the US who are members of a national
                  or regional business broker association.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[70px] pb-[49px] box-border max-w-full text-left text-13xl text-color-2 font-heading-text-inter-semi-bold-24 mq750:pl-[35px] mq750:pr-[35px] mq750:pb-8 mq750:box-border">
        <div className="flex-1 flex flex-row items-end justify-start pt-14 px-[110px] pb-[57px] box-border relative gap-[303.5px] max-w-full z-[1] mq450:gap-[38px] mq750:gap-[76px] mq750:pt-9 mq750:px-[27px] mq750:pb-[37px] mq750:box-border mq1275:gap-[152px] mq1275:flex-wrap mq1275:justify-center mq1275:pl-[55px] mq1275:pr-[55px] mq1275:box-border">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-11xl bg-whitesmoke-500" />
          <div className="w-[548px] flex flex-col items-start justify-start gap-[17px] max-w-full">
            <h2 className="m-0 relative text-inherit leading-[40px] font-semibold font-[inherit] inline-block max-w-full z-[1] mq450:text-lgi mq450:leading-[24px] mq750:text-7xl mq750:leading-[32px]">
              AI-Powered Deal Matching
            </h2>
            <div className="self-stretch flex flex-row items-start justify-start gap-2 max-w-full text-5xl mq750:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <div className="flex flex-col items-start justify-start gap-[151px]">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/ai-chipset.svg"
                  />
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/clipboard.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[335px] max-w-full">
                <div className="w-[499.7px] flex flex-col items-start justify-start gap-[9px] max-w-full">
                  <div className="relative leading-[32px] font-medium inline-block max-w-full z-[1] mq450:text-lgi mq450:leading-[26px]">
                    AI Deal Matching and Scoring
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-2 max-w-full text-lg text-color-6 mq750:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                      <img
                        className="w-4 h-4 relative shrink-0 z-[1]"
                        loading="lazy"
                        alt=""
                        src="/vector-2.svg"
                      />
                    </div>
                    <div className="flex-1 relative leading-[30px] inline-block min-w-[309px] shrink-0 max-w-full z-[1]">
                      <span>{`Configure your Ideal and Exclusion parameters on everything from Earnings and Location to Years in Business `}</span>
                      <span className="text-color">
                        enabling personalized matches so you can focus on the
                        deals that matter
                      </span>
                      <span>.</span>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full">
                  <div className="relative leading-[32px] font-medium z-[1] mq450:text-lgi mq450:leading-[26px]">
                    AI Deal Processing
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-2 max-w-full text-lg text-color-6 font-segoe-ui-symbol mq750:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                      <img
                        className="w-4 h-4 relative z-[1]"
                        loading="lazy"
                        alt=""
                        src="/vector-2.svg"
                      />
                    </div>
                    <div className="flex-1 relative leading-[30px] inline-block min-w-[320px] max-w-full z-[1]">
                      <span>
                        Our AI analyzes and summarizes each listing, providing
                        you with the necessary information
                      </span>
                      <span className="text-darkslategray-100">{` `}</span>
                      <span className="text-color">
                        to review quickly and determine the best next steps.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[212px] flex flex-col items-start justify-start">
            <img
              className="w-14 h-14 relative z-[1]"
              loading="lazy"
              alt=""
              src="/group-1171274697.svg"
            />
          </div>
          <img
            className="h-[571px] w-[330px] absolute !m-[0] top-[-45px] right-[110px] object-cover z-[2]"
            alt=""
            src="/whatsapp-image-20241129-at-113848-amleft-1@2x.png"
          />
        </div>
      </section>
      <section className="w-[1422px] flex flex-row items-start justify-start pt-0 px-[70px] pb-[33px] box-border max-w-full text-left text-13xl text-color-2 font-heading-text-inter-semi-bold-24 mq750:pl-[35px] mq750:pr-[35px] mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-4 max-w-full">
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-6">
            <h2 className="m-0 relative text-inherit leading-[40px] font-semibold font-[inherit] mq450:text-lgi mq450:leading-[24px] mq750:text-7xl mq750:leading-[32px]">
              Efficiency Today, Innovation Tomorrow
            </h2>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[110px] max-w-full text-5xl mq450:gap-[27px] mq750:gap-[55px] mq1275:flex-wrap">
            <div className="rounded-xl bg-gainsboro-200 border-color border-t-[10px] border-solid border-color border-l-[10px] border-solid box-border flex flex-row items-start justify-center pt-[175px] px-5 pb-[169px] min-w-[548px] max-w-full z-[1] mq450:pt-[114px] mq450:pb-[110px] mq450:box-border mq750:min-w-full mq1275:flex-1">
              <div className="h-[411px] w-[548px] relative rounded-xl bg-gainsboro-200 border-color border-t-[10px] border-solid border-color border-l-[10px] border-solid box-border hidden max-w-full" />
              <img
                className="h-14 w-14 relative overflow-hidden shrink-0 z-[2] mq1275:flex-1"
                loading="lazy"
                alt=""
                src="/solargallerybold-1.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-3 min-w-[406px] max-w-full mq750:min-w-full">
              <div className="flex flex-row items-start justify-start gap-2">
                <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/layer-1-1.svg"
                  />
                </div>
                <div className="relative leading-[32px] font-medium mq450:text-lgi mq450:leading-[26px]">
                  One-Click Request
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-2 max-w-full text-lg text-color-6 mq750:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[205px] px-0 pb-0">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/frame-1.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[13.5px] min-w-[385px] max-w-full mq750:min-w-full">
                  <div className="w-[537px] flex flex-col items-start justify-start gap-2 max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start gap-2 max-w-full mq750:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-[6.7px] px-0 pb-0">
                        <img
                          className="w-4 h-4 relative"
                          loading="lazy"
                          alt=""
                          src="/vector-4.svg"
                        />
                      </div>
                      <div className="flex-1 relative leading-[30px] inline-block min-w-[333px] max-w-full">
                        Rather than sending you away to request information on a
                        deal, our One-Click Request feature takes that step for
                        you.
                      </div>
                    </div>
                    <div className="w-[503px] flex flex-row items-start justify-start gap-2 max-w-full mq750:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-[6.7px] px-0 pb-0">
                        <img
                          className="w-4 h-4 relative"
                          loading="lazy"
                          alt=""
                          src="/vector-4.svg"
                        />
                      </div>
                      <div className="flex-1 relative leading-[30px] inline-block min-w-[311px] max-w-full">
                        <span>
                          After completing our Buyer Profile with your
                          information, One-Click Request can complete most
                          initial deal request forms on your behalf
                        </span>
                        <span className="text-darkslategray-100">{` `}</span>
                        <span className="text-color">
                          providing a streamlined process and allowing you to
                          focus on what matters.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="relative text-5xl leading-[32px] font-medium text-color-2 inline-block max-w-full mq450:text-lgi mq450:leading-[26px]">
                    Committed to building for Individual Buyers
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-2 max-w-full mq750:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[9.6px] px-0 pb-0">
                      <div className="flex flex-col items-start justify-start gap-28">
                        <div className="flex flex-col items-start justify-start gap-[80.4px]">
                          <img
                            className="w-4 h-4 relative"
                            loading="lazy"
                            alt=""
                            src="/vector-6.svg"
                          />
                          <img
                            className="w-4 h-4 relative"
                            loading="lazy"
                            alt=""
                            src="/vector-7.svg"
                          />
                        </div>
                        <img
                          className="w-4 h-4 relative"
                          loading="lazy"
                          alt=""
                          src="/vector-7.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[369px] max-w-full mq750:min-w-full">
                      <div className="w-[476.2px] relative leading-[30px] inline-block max-w-full">
                        Search Assistant is focused on empowering the individual
                        business buyer, and we will continue to innovate with
                        you in mind.
                      </div>
                      <div className="w-[476px] relative leading-[30px] inline-block max-w-full">
                        That could mean integrating directly into your CRM,
                        automating further administrative burdens like Buyer
                        Profiles and NDAs, or perhaps something else we haven't
                        thought of yet.
                      </div>
                      <div className="relative leading-[30px] text-color">
                        By choosing Search Assistant, you are picking a partner
                        committed to helping you succeed in buying a business.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[70px] pb-8 box-border max-w-full text-left text-21xl text-color-2 font-heading-text-inter-semi-bold-24 mq750:pl-[35px] mq750:pr-[35px] mq750:box-border">
        <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
          <div className="h-[435.6px] w-[425.6px] absolute !m-[0] right-[-311.6px] bottom-[-92.9px] [filter:blur(1000px)] rounded-[50%] bg-color" />
          <div className="flex-1 rounded-11xl bg-whitesmoke-300 flex flex-row items-start justify-start p-6 box-border max-w-full z-[1] mq750:pt-5 mq750:pb-5 mq750:box-border">
            <div className="h-[500px] w-[1300px] relative rounded-11xl bg-whitesmoke-300 hidden max-w-full" />
            <div className="flex-1 flex flex-row items-end justify-start pt-[28.6px] pb-[55px] pl-[86px] pr-[99px] box-border relative gap-[136px] max-w-full mq450:gap-[17px] mq450:pt-5 mq450:pb-9 mq450:box-border mq750:gap-[34px] mq750:pl-[21px] mq750:pr-6 mq750:box-border mq1275:gap-[68px] mq1275:flex-wrap mq1275:pl-[43px] mq1275:pr-[49px] mq1275:box-border">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(2px)] rounded-11xl bg-color-5 z-[1]" />
              <div className="flex flex-col items-start justify-start gap-2 max-w-full mq1100:min-w-full mq1275:flex-1">
                <button className="cursor-pointer border-whitesmoke-200 border-[2px] border-solid py-[5px] px-[26px] bg-[transparent] rounded-xl [background:linear-gradient(0deg,_rgba(38,_169,_108,_0.01),_rgba(38,_169,_108,_0.18),_#26a96c)] flex flex-row items-start justify-start z-[2] hover:bg-gainsboro-400 hover:border-gainsboro-100 hover:border-[2px] hover:border-solid hover:box-border">
                  <div className="h-[38px] w-[164px] relative rounded-xl [background:linear-gradient(0deg,_rgba(38,_169,_108,_0.01),_rgba(38,_169,_108,_0.18),_#26a96c)] border-whitesmoke-200 border-[2px] border-solid box-border hidden" />
                  <div className="flex-1 relative text-xs leading-[24px] font-semibold font-heading-text-inter-semi-bold-24 text-color-5 text-center z-[1]">
                    Limited Time Offer
                  </div>
                </button>
                <div className="flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-2 max-w-full shrink-0">
                  <h1 className="m-0 relative text-inherit font-bold font-[inherit] z-[2] mq450:text-5xl mq750:text-13xl">
                    <p className="m-0">Get the Launch Cohort</p>
                    <p className="m-0">Special Promo</p>
                  </h1>
                  <div className="relative text-lg leading-[30px] inline-block max-w-full z-[2] text-color-6">
                    <p className="m-0">By Requesting Early Access today,</p>
                    <p className="m-0">
                      you'll get access to our limited-time Launch
                    </p>
                    <p className="m-0">
                      <span>{`Cohort Special - only `}</span>
                      <span className="font-medium font-heading-text-inter-semi-bold-24 text-color">
                        $49/month
                      </span>
                      <span className="font-heading-text-inter-semi-bold-24 text-color-6">{` or `}</span>
                      <span className="font-medium font-heading-text-inter-semi-bold-24 text-color">
                        $450/year
                      </span>
                    </p>
                    <p className="m-0">for any of our plans.</p>
                  </div>
                </div>
                <ButtonCTA requestAccessTextDecoration="unset" />
              </div>
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[17px] box-border min-w-[317px] max-w-full text-center text-45xl text-color">
                <div className="self-stretch flex flex-row items-start justify-between pt-[11.4px] pb-[205px] pl-[34px] pr-[19px] relative gap-5 mq450:pt-5 mq450:pb-[133px] mq450:box-border mq750:flex-wrap">
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[3]"
                    alt=""
                    src="/group.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-[50.8px] px-0 pb-0 mq750:flex-1">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch relative font-extrabold shrink-0 z-[4] mq450:text-19xl mq750:text-32xl">
                        <span>$49</span>
                        <span className="text-color-6">{` `}</span>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[21px] pr-5 mt-[-8.8px] text-lg text-color-6">
                        <div className="flex-1 relative leading-[16px] shrink-0 z-[5]">{`per month `}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="self-stretch relative font-extrabold shrink-0 z-[4] mq450:text-19xl mq750:text-32xl">
                      <span>$450</span>
                      <span className="text-color-6">{` `}</span>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[51px] mt-[-8.8px] text-lg text-color-6">
                      <div className="flex-1 relative leading-[16px] shrink-0 z-[5]">{`per year `}</div>
                    </div>
                  </div>
                  <div className="h-[248.5px] w-[279.9px] absolute !m-[0] right-[-50.7px] bottom-[-37.8px]">
                    <img
                      className="absolute top-[156px] left-[114.6px] w-[165.3px] h-[92.5px] z-[4]"
                      loading="lazy"
                      alt=""
                      src="/group-1.svg"
                    />
                    <img
                      className="absolute top-[0px] left-[0px] w-[242.7px] h-[234.7px] z-[5]"
                      alt=""
                      src="/group-2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5 box-border max-w-full text-center text-21xl text-color-2 font-heading-text-inter-semi-bold-24">
        <div className="flex flex-col items-start justify-start gap-2 max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit font-semibold font-[inherit] mq450:text-5xl mq750:text-13xl">
            Experience Search Assistant in Action
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[46px] pr-[47px] box-border max-w-full text-base text-color-6 mq750:pl-[23px] mq750:pr-[23px] mq750:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-6 max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-8 mq750:gap-4">
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-20 mq750:pl-10 mq750:pr-10 mq750:box-border">
                  <div className="flex-1 relative leading-[30px]">
                    Watch how our platform simplifies the business buying
                    process.
                  </div>
                </div>
                <img
                  className="self-stretch h-[362px] relative rounded-xl max-w-full overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/photo1460925895917afdab827c52f.svg"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[217px] pr-[218px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[108px] mq750:pr-[109px] mq750:box-border">
                <ButtonCTA requestAccessTextDecoration="unset" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start gap-12 max-w-full text-center text-21xl text-color-2 font-heading-text-inter-semi-bold-24 mq750:gap-6">
        <GroupComponent />
        <div className="w-[1412px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[1052px] flex flex-row items-start justify-between gap-5 max-w-full mq750:flex-wrap">
            <div className="flex flex-col items-start justify-start">
              <h1 className="m-0 w-[218px] relative text-inherit font-semibold font-[inherit] inline-block z-[1] mq450:text-5xl mq750:text-13xl">
                Contact Us
              </h1>
              <div className="self-stretch relative text-base leading-[30px] text-color-6">
                Our team is here to help you succeed
              </div>
            </div>
            <div className="h-[66px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border text-left text-lg text-color-6">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-6">
                <div className="self-stretch w-[54px] shadow-[0px_0px_10px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-center relative gap-2.5">
                  <div className="self-stretch flex-1 relative rounded-[50%] bg-color" />
                  <img
                    className="h-6 w-8 absolute !m-[0] top-[15px] left-[11px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/vector-9.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0">
                  <div className="relative leading-[30px] font-medium">
                    info@searchassistant.io
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GroupComponent1 sloganBackground="/-1@2x.png" divider="/divider.svg" />
      </section>
    </div>
  );
};

export default SAHome;
