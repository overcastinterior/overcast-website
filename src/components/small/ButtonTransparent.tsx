import Image from "next/image";
import Link from "next/link";
import arrowTop from "@/../public/images/icons/arrow-top.svg";

interface ButtonProps {
  text?: string;
  link?: string;
}

const ButtonTransparent = ({ text, link }: ButtonProps) => {
  return (
    <>
      <Link
        href={link || "#"}
        className="inline-flex items-center space-x-2 lg:space-x-2.5 rounded-full border border-white px-2.5 py-2 lg:py-2.5 text-white font-normal font-cal text-sm lg:text-base xl:pl-4"
      >
        {text}
        <span className="w-7 h-7 lg:w-[30px] lg:h-[30px] rounded-full bg-primary items-center justify-center flex ml-2 lg:ml-2.5 p-1">
          <Image src={arrowTop} alt="icon" />
        </span>
      </Link>
    </>
  );
};

export default ButtonTransparent;
