import React from 'react'

const Banner = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-12  box-border max-w-full text-center text-29xl text-color-5 font-heading-text-inter-semi-bold-24 mq450:pb-[31px] mq450:box-border">
      <div className="h-[390px] flex-1 bg-[#03012C] flex flex-col items-center justify-center pt-12 px-[70px] pb-[54px] box-border gap-5 max-w-full mq450:pt-[31px] mq450:pb-[35px] mq450:box-border mq750:pl-[35px] mq750:pr-[35px] mq750:box-border">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[216px] pr-[215px] mq1125:pl-0 mq1125:pr-0 mq450:box-border mq750:box-border mq1275:pl-[108px] mq1275:pr-[107px] mq1275:box-border">
          <h1 className="m-0 flex-1 relative text-inherit font-semibold font-[inherit] mq450:text-10xl mq750:text-15xl ">
            <p className="m-0 mb-4 mq800:mb-0">Supercharge your acquisition journey</p>
            <p className="m-0">with Search Assistant</p>
          </h1>
        </div>
        <div className="relative self-stretch flex flex-row items-start justify-center mq800:mt-3">
          <img
            className="h-3 w-9 relative"
            loading="lazy"
            alt=""
            src="/group-1171274691.svg"
          />
      <div className="absolute h-[130rem] w-screen bg-gradient-to-b from-[#03012C] to-[#FFFFFF] mq1125:hidden"></div>

        </div>
        <img
          className="self-stretch h-[120px] relative max-w-full overflow-hidden shrink-0 mq800:hidden"
          loading="lazy"
          alt=""
          src="/group-1171274690.svg"
        />
         <img
          className="self-stretch h-[120px] w-full relative max-w-full overflow-hidden shrink-0 mq800:block hidden"
          loading="lazy"
          alt=""
          src="/Banner.svg"
        />
      </div>
    </section>
  )
}

export default Banner