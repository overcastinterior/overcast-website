// nextjs import 

import Image from "next/image";
import Badge from "./Badge";
import commonCurve from "@/../public/images/common-title-curve.svg";

interface CommonTitleProps {
    feat: string;
    title: string;
    sTitle: string;
    description?: string;
}

const CommonTitle = ({feat,title, sTitle, description} : CommonTitleProps) => {
  return (
    <div className="w-full lg:relative lg:mt-16 xl:mt-20">
      {/* curve image */}
      <div className="hidden xl:block absolute -top-24 left-[5%] z-20">
        <Image src={commonCurve} alt="curve" className="max-w-[400px]" />
      </div>
         <div className="flex flex-col gap-y-2 xl:flex-row">
            <div className="left xl:min-w-[30%] xl:text-center">
                <Badge text={feat} options2="!text-black !capitalize" options="!border-[#CACACA]" />
            </div>
            <div className="right">
                <h2 className="font-cal font-normal text-[28px] lg:text-[40px] xl:text-[60px] text-black leading-[110%]">{title} <span className="inline-block text-primary">{sTitle}</span></h2>
                <p className="text-secondary font-normal font-golos text-xs lg:text-sm leading-[120%] xl:text-base mt-4 xl:mt-[25px] xl:max-w-[78%]">{description}</p>
            </div>
         </div>
    </div>
  );
};

export default CommonTitle;