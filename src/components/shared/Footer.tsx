import Image from "next/image";
import Link from "next/link";
import logoWhite from "@/../public/images/logo-white.svg";
import xSocial from "@/../public/images/icons/X-social.svg";
import instagram from "@/../public/images/icons/instagram.svg";
import facebook from "@/../public/images/icons/facebook.svg";
import linkedin from "@/../public/images/icons/linkedin.svg";

export default function Footer() {
    return (
        <footer
            className="w-full"
            style={{
                backgroundImage: "url('/images/hero-circle.webp')",
                backgroundPosition: "bottom center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div className="bg-black/50 w-full h-full py-10 lg:py-20 relative lg:min-h-[900px]">
                <div className="bg-[#1A1A1A]/80 absolute left-0 top-0 w-full h-[90%] lg:h-[65%]"></div>
                <div className="container">
                    <div className="w-full grid grid-cols-2 gap-y-8 relative z-30 md:grid-cols-2 lg:grid-cols-12 md:gap-x-12 lg:gap-x-16 lg:gap-y-0">
                        {/* Brand Section */}
                        <div className="w-fulll col-span-2 lg:col-span-4">
                            <Link href="/">
                                <Image
                                    src={logoWhite}
                                    alt="Logo white"
                                    className="max-w-[200px] md:max-w-[280px] lg:max-w-[350px] xl:max-w-[400px]"
                                />
                            </Link>
                            <p className="font-inter font-normal text-base lg:text-xl text-white mt-4 md:mt-6 lg:mt-8 xl:mt-9">
                                Elevating Brands with Smart Marketing & Premier Services
                            </p>
                            <p className="font-inter font-semibold text-lg lg:text-[22px] text-white mt-8 md:mt-12 lg:mt-16 xl:mt-18">
                                Follow Us on
                            </p>
                            <ul className="flex items-center space-x-4 mt-4 md:gap-x-6 lg:gap-x-7">
                                <li>
                                    <Link href="https://www.facebook.com/overcastinterior" target="_blank">
                                        <Image
                                            src={facebook}
                                            alt="facebook"
                                            className="w-5 md:w-7 lg:w-9"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image
                                            src={xSocial}
                                            alt="xSocial"
                                            className="w-5 md:w-7 lg:w-9"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image
                                            src={instagram}
                                            alt="instagram"
                                            className="w-5 md:w-7 lg:w-9"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image
                                            src={linkedin}
                                            alt="linkedin"
                                            className="w-5 md:w-7 lg:w-9"
                                        />
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div className="w-full lg:col-span-2">
                            <h5 className="font-inter font-semibold text-lg md:text-xl lg:text-2xl text-white/50">
                                Quick Link
                            </h5>
                            <ul className="mt-3 md:mt-4 lg:mt-6 flex flex-col gap-y-5 md:gap-y-6 lg:gap-y-8 font-inter">
                                <li>
                                    <Link
                                        href="/"
                                        className="font-normal text-white text-sm lg:text-base block"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about"
                                        className="font-normal text-white text-sm lg:text-base block"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="font-normal text-white text-sm lg:text-base block"
                                    >
                                        Our Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="font-normal text-white text-sm lg:text-base block"
                                    >
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="font-normal text-white text-sm lg:text-base block"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="w-full lg:col-span-3">
                            <h5 className="font-inter font-semibold text-lg md:text-xl lg:text-2xl text-white/50">
                                Services
                            </h5>
                            <ul className="mt-3 md:mt-4 lg:mt-6 flex flex-col gap-y-5 md:gap-y-6 lg:gap-y-8 font-inter">
                                <li>
                                    <Link
                                        href="#"
                                        className="font-normal text-white text-sm lg:text-base block"
                                    >
                                        Residential Interior Design
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="font-normal text-white text-sm lg:text-base block"
                                    >
                                        Commercial &amp; Office Design
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="font-normal text-white text-sm lg:text-base block"
                                    >
                                        Custom Furniture & Fit-Outs
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="font-normal text-white text-sm lg:text-base block"
                                    >
                                        3D Design &amp; Visualization
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="font-normal text-white text-sm lg:text-base block"
                                    >
                                        Renovation & Makeovers
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="w-full lg:col-span-2">
                            <h5 className="font-inter font-semibold text-lg md:text-xl lg:text-2xl text-white/50">
                                Contact
                            </h5>
                            <ul className="mt-3 md:mt-4 lg:mt-6 flex flex-col gap-y-5 md:gap-y-6 lg:gap-y-8 font-inter">
                                <li>
                                    <Link
                                        href="mailto:websiteovercastinterior@gmail.com"
                                        className="font-normal text-white text-sm lg:text-base flex items-center gap-x-2"
                                    >
                                        <svg
                                            width="25"
                                            height="19"
                                            viewBox="0 0 25 19"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M22.0343 1.01853C22.4228 1.0942 22.8568 1.26047 23.2327 1.47763C23.6235 1.70337 24.2163 2.29027 24.4568 2.68942C24.6865 3.07099 24.9363 3.7442 24.8715 3.80753C24.8481 3.83041 22.0566 5.50135 18.6682 7.52069C13.0111 10.8922 12.4992 11.1871 12.4063 11.129C12.3506 11.0941 9.59674 9.45035 6.28655 7.47614C2.97636 5.50187 0.237963 3.85967 0.201168 3.82678C0.144882 3.77641 0.154434 3.70855 0.261646 3.39675C0.445808 2.86103 0.740789 2.4044 1.1671 1.99491C1.72505 1.45904 2.31257 1.15368 3.05205 1.01534C3.57573 0.917359 21.5304 0.920361 22.0343 1.01853ZM25 10.9266C25 15.6774 24.9967 15.86 24.9032 16.224C24.7095 16.9784 24.2541 17.6668 23.6166 18.1691C23.2846 18.4307 22.583 18.772 22.1735 18.8711C21.7752 18.9674 3.27354 18.9674 2.87524 18.8711C2.46569 18.772 1.76408 18.4307 1.43211 18.1691C0.812281 17.6807 0.351072 17.0005 0.174902 16.315C0.127728 16.1315 0.0691013 15.9442 0.04459 15.8987C0.0184689 15.8502 0 13.7705 0 10.8757C0 6.17456 0.00414276 5.93896 0.0852833 6.00868C0.212378 6.1178 11.7859 13.003 12.0127 13.1044C12.2488 13.21 12.7973 13.2232 13.0254 13.1288C13.1117 13.0931 15.8412 11.4759 19.0911 9.53503L25 6.00615V10.9266ZM24.9765 10.9539C24.9765 13.6928 24.9707 14.8132 24.9635 13.4438C24.9563 12.0743 24.9563 9.8334 24.9635 8.46396C24.9707 7.09447 24.9765 8.21497 24.9765 10.9539Z"
                                                fill="white"
                                            />
                                        </svg>
                                        websiteovercastinterior@gmail.com
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="font-normal text-white text-sm lg:text-base flex items-center gap-x-2"
                                    >
                                        <svg
                                            width="24"
                                            height="25"
                                            viewBox="0 0 24 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12.3699 0.958869C12.3526 1.00645 12.1033 2.80146 12.1127 2.81089C12.1193 2.8175 12.3486 2.86405 12.6223 2.91435C16.6402 3.65268 20.0573 6.49369 21.5102 10.304C21.7313 10.8835 21.963 11.6825 22.0768 12.2571C22.1138 12.4441 22.1521 12.5267 22.2016 12.5267C22.311 12.5267 23.9694 12.2431 23.9919 12.2206C24.0606 12.1519 23.6771 10.654 23.3801 9.83102C22.008 6.02896 18.8553 2.90399 15.0578 1.58191C14.1302 1.259 12.4061 0.859341 12.3699 0.958869ZM3.46852 3.32268C3.0769 3.46318 2.79253 3.70326 1.6355 4.8703C0.582383 5.93257 0.467594 6.06426 0.314791 6.3853C0.0922438 6.85289 0 7.33219 0 8.02073C0 8.93574 0.129835 9.63136 0.508466 10.7452C1.23348 12.8781 2.46672 15.0421 4.14188 17.121C4.99766 18.1829 6.44657 19.6622 7.47606 20.5248C9.99387 22.6347 13.1002 24.2995 15.4304 24.788C15.8384 24.8735 16.2202 24.9167 16.7373 24.9358C17.6145 24.9683 17.9868 24.9026 18.5747 24.6118C18.9341 24.434 19.0396 24.3416 20.1637 23.2207C21.2524 22.135 21.3824 21.9886 21.5217 21.6918C21.7839 21.133 21.7533 20.5759 21.4315 20.051C21.3683 19.9479 20.5754 19.1211 19.6694 18.2138C18.1546 16.6967 17.9959 16.5516 17.6941 16.4089C17.4027 16.271 17.3214 16.2537 16.9666 16.2537C16.6076 16.2537 16.5341 16.2698 16.2401 16.4133C15.9514 16.5542 15.7888 16.6986 14.8546 17.6439C13.9694 18.5396 13.7744 18.7149 13.6633 18.7149C13.5897 18.7149 13.2473 18.5667 12.8949 18.3823C11.6777 17.7453 10.691 16.9872 9.39448 15.6928C8.45723 14.757 8.03388 14.2768 7.43477 13.4698C6.83509 12.662 6.23396 11.5653 6.23396 11.2789C6.23396 11.174 6.42716 10.9553 7.28253 10.0921C7.85924 9.51017 8.38711 8.94395 8.45559 8.83378C8.63281 8.5486 8.73532 8.11107 8.69932 7.7934C8.68315 7.65065 8.60398 7.39675 8.52341 7.22915C8.394 6.96001 8.1819 6.72893 6.70778 5.25088C5.16579 3.70476 5.01374 3.56562 4.71062 3.42324C4.31446 3.23722 3.81874 3.19709 3.46852 3.32268ZM11.9856 6.65322C11.9165 7.16155 11.8755 7.59065 11.8944 7.60673C11.9134 7.62281 12.0765 7.66172 12.257 7.69322C12.7141 7.77306 13.3363 7.98838 13.8408 8.24139C15.498 9.07245 16.7337 10.6163 17.1581 12.386C17.2169 12.631 17.2704 12.8387 17.2771 12.8477C17.2907 12.866 19.0827 12.5731 19.1308 12.5448C19.1794 12.5162 19.0006 11.7658 18.8152 11.2212C17.9823 8.77312 15.9713 6.81294 13.4987 6.03904C13.0369 5.89451 12.3227 5.72902 12.1607 5.72897C12.132 5.72897 12.0587 6.11597 11.9856 6.65322Z"
                                                fill="white"
                                            />
                                        </svg>
                                        +88 01315 999944
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="font-normal text-white text-sm lg:text-base flex items-center gap-x-2"
                                    >
                                        <svg
                                            className="shrink-0"
                                            width="20"
                                            height="27"
                                            viewBox="0 0 20 27"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M8.43878 1.04078C6.23127 1.39682 4.44785 2.25845 2.91609 3.70894C1.11591 5.41361 0.150166 7.49724 0.0102786 9.97834C-0.142531 12.6889 1.4105 16.4089 4.53599 20.8192C5.38371 22.0153 5.94854 22.7475 7.10172 24.145C8.23293 25.516 9.27191 26.6707 9.51017 26.8217C9.76593 26.9839 10.2346 26.9839 10.4903 26.8217C10.8366 26.6022 12.9446 24.1595 14.2902 22.4186C16.1075 20.0674 17.8443 17.2741 18.7732 15.2083C19.6404 13.2801 20.0718 11.4259 19.9902 9.97834C19.8503 7.49724 18.8846 5.41361 17.0844 3.70894C15.5238 2.23113 13.6696 1.35092 11.4207 1.02021C10.6694 0.909722 9.18786 0.919928 8.43878 1.04078ZM9.03715 5.73767C7.74548 6.01344 6.75388 6.60885 6.00685 7.5573C4.52511 9.43838 4.72094 12.0051 6.47255 13.6615C8.91513 15.9714 12.9772 15.3153 14.4998 12.365C15.2981 10.818 15.1032 8.9658 13.9937 7.5573C13.3297 6.71426 12.4575 6.14317 11.3624 5.8343C10.7681 5.66674 9.59739 5.61809 9.03715 5.73767Z"
                                                fill="white"
                                            />
                                        </svg>
                                        House no #02 Road no #05
                                    </Link>
                                </li>
                                <li>
                                    <p className="font-normal text-white text-sm">
                                        Jan-E-Saba Housing Complex - Jamil Nagar, Bogura - 5870, Bangladesh
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Links */}
                    <div className="w-full border-t border-white/20 relative z-30 mt-8 md:mt-12 pt-2 lg:mt-16 lg:pt-3">
                        <ul className="flex items-center justify-around gap-x-4 py-4">
                            <li>
                                <Link
                                    href="#"
                                    className="font-normal text-sm lg:text-base text-white block"
                                >
                                    &copy; Overcast Interior 2025
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="font-normal text-sm lg:text-base text-white block"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="font-normal text-sm lg:text-base text-white block"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Large Text Background */}
                <div className="text-center absolute left-0 bottom-0 w-full flex justify-center">
                    <h2 className="font-cal font-normal text-[90px] leading-[60%] md:text-[300px] xl:text-[350px] text-[#F0F0F0]/25 xl:leading-[70%] text-end mt-6 xl:mt-0">
                        overcast
                    </h2>
                </div>
            </div>
        </footer>
    );
}
