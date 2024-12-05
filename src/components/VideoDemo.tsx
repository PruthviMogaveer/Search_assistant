import { FunctionComponent } from "react";
import ButtonCTA from "../components/buttons/ButtonCTA";

export type VideoDemoType = {
  className?: string;
};

const VideoDemo: FunctionComponent<VideoDemoType> = ({ className = "" }) => {
  return (
    <section
      className={`mq800:mt-14 mq800:mb-14 self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5 box-border max-w-full text-center text-21xl text-color-2 font-heading-text-inter-semi-bold-24 ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-2 max-w-full">
        <h1 className="m-0 self-stretch relative text-inherit font-semibold font-[inherit] mq450:text-5xl mq750:text-13xl">
          Experience Search Assistant in Action
        </h1>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[46px] pr-[47px] box-border max-w-full text-base text-color-6 mq750:pl-[23px] mq750:pr-[23px] mq750:box-border">
          <div className="flex-1 flex flex-col items-center justify-start gap-6  max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-8 mq1125:gap-5 ">
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-20 mq800:px-1 mq800:mt-4 mq750:box-border">
                <div className="flex-1 relative leading-[30px]">
                  Watch how our platform simplifies the business buying process.
                </div>
              </div>
              <img
                className="self-stretch w-full  relative rounded-xl max-w-full overflow-hidden shrink-0 "
                loading="lazy"
                alt=""
                src="/photo1460925895917afdab827c52f.svg"
              />
            </div>
            
              <ButtonCTA requestAccessTextDecoration="unset" className="" />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
