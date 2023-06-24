"use client";
import { useRouter } from "next/navigation";
import leftArrowBlack from "../assets/left-arrow-icon.svg";
import leftArrowWhite from "../assets/left-arrow-icon-white.svg";
import Image from "next/image";
import Link from "next/link";
const BackToHomePage = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full h-[200px] flex flex-col justify-center items-start">
        <button
          onClick={() => router.back()}
          id="backBtn"
          className="ml-10 countryBtnShadowLight flex items-center justify-center px-4 py-2 font-mid w-[150px]  tracking-wide text-white lightModeNav lightNavShadow rounded-lg focus:outline-none"
        >
          <Image
            src={leftArrowBlack}
            alt="left-arrow-black"
            id="left_arrow_black"
            width={15}
            height={15}
            className="block mr-2"
          />
          <Image
            src={leftArrowWhite}
            alt="left-arrow-black"
            id="left_arrow_white"
            width={15}
            height={15}
            className="hidden mr-2"
          />
          <span className="mx-1">Back</span>
        </button>
      </div>
    </>
  );
};
export default BackToHomePage;
