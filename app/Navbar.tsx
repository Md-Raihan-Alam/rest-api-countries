"use client";
import Image from "next/image";
import moonLight from "./assets/moon-light.svg";
import moonDark from "./assets/moon-dark.svg";
import { backgroundUpdate } from "./functions/backgroundUpdate";
import { useEffect } from "react";
import Link from "next/link";
export default function Navbar() {
  useEffect(() => {
    const button = document.getElementById("my-bg") as HTMLDivElement;
    button.addEventListener("click", backgroundUpdate);
    return () => {
      button.removeEventListener("click", backgroundUpdate);
    };
  }, []);
  return (
    <nav className=" bg-white lightNavShadow lightModeNav">
      <div className="max-w-screen h-fit-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          <div className="md:font-big font-high">Where in the world?</div>
        </Link>
        <div className="flex w-auto cursor-pointer" id="my-bg">
          <Image
            id="moonDark"
            src={moonLight}
            alt="moon dark"
            className="block"
            width={20}
            height={20}
          ></Image>
          <Image
            id="moonLight"
            src={moonDark}
            alt="moon light"
            className="hidden"
            width={20}
            height={20}
          ></Image>
          <span className="pl-3 font-mid">Dark Mode</span>
        </div>
      </div>
    </nav>
  );
}
