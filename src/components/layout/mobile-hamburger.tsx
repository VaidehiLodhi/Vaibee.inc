"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { magnat_text_regular } from "./footer/message-me-block";
import Link from "next/link";
import { HamburgerIcon } from "./mobile-hamburger-color";
import { usePathname } from "next/navigation";
import { Check, Copy } from "lucide-react";

type hamburgerProp = {
    color ?: string,
}

const socials = [
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/vaidehi-lodhi/",
    },
    {
      name: "x",
      link: "https://x.com/vaibee_on_tulip",
    },
    {
      name: "github",
      link: "https://github.com/VaidehiLodhi",
    },
    {
      name: "mail",
      link: "mailto:vaidehixoxo@gmail.com",
    },
];

export const MobileHamburger =({color,} : hamburgerProp)=> {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    //close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    //prevent bg scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    const [copied, setCopied] = useState(false);

    const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <div className="fixed top-0 right-0 w-full flex  justify-end items-center z-300 pt-10 px-5">
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                    className=""
                    >
                    {isOpen ? 
                    <Image
                        src="/mobile/cross.svg"
                        alt="cross"
                        width={25}
                        height={18}
                    />
                    : 
                    <HamburgerIcon
                        color={color}
                    />}
                </button>
            </div>
            {/* overlay */}
            <div
                className={`${magnat_text_regular.className} fixed inset-0 bg-[#DF4346] flex flex-col items-center pt-30 justify-start gap-8 z-250 p-5 transition-opacity duration-300 ${
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            >
                <div className="w-full">
                    <p className="text-[10px] w-full pb-1">
                        Tabs  
                    </p>
                    <Link 
                        href="/mobile/works"
                        className="w-full">
                        <div className=" bg-amber-100 w-full cursor-pointer relative py-4 pl-10 pr-5 overflow-y-clip flex items-center justify-between border-black border rounded-[10px]">
                            <Image
                                src="/mobile/cracker_doodle.png"
                                alt="cracker_1"
                                width={165}
                                height={68}
                                className="w-[50%] absolute left-1/2 top-1/2 translate-x-0 -translate-y-1/2"
                            />
                            <p className="text-2xl text-black">
                                Work
                            </p>
                            <Image
                                src="/mobile/arrow_right.svg"
                                alt="cross"
                                width={7}
                                height={11}
                            />
                        </div>
                    </Link>
                </div>

                <Link
                    className="w-full" 
                    href="/">
                    <div className=" bg-amber-100 w-full relative cursor-pointer py-4 pl-10 pr-5 overflow-y-clip flex items-center justify-between border-black border rounded-[10px]">
                        <Image
                            src="/mobile/cracker_filled.png"
                            alt="cracker_1"
                            width={165}
                            height={68}
                            className="w-[50%] absolute left-1/2 top-1/2 translate-x-0 -translate-y-20"
                        />
                        <p className="text-2xl text-black">
                            Profile
                        </p>
                        <Image
                            src="/mobile/arrow_right.svg"
                            alt="cross"
                            width={7}
                            height={11}
                        />
                    </div>
                </Link>

                <Link
                    className="w-full" 
                    href="/mobile/skill">
                    <div className=" bg-amber-100 w-full relative cursor-pointer py-4 pl-10 pr-5 overflow-y-clip flex items-center justify-between border-black border rounded-[10px]">
                        <Image
                            src="/mobile/cracker_doodle_2.png"
                            alt="cracker_1"
                            width={165}
                            height={68}
                            className="w-[50%] absolute left-1/2 top-1/2 translate-x-0 -translate-y-1/2"
                        />
                        <p className="text-2xl text-black">
                            Skillset
                        </p>
                        <Image
                            src="/mobile/arrow_right.svg"
                            alt="cross"
                            width={7}
                            height={11}
                        />
                    </div>
                </Link>

                <div className="flex flex-col w-full items-start justify-start gap-x-2">
                    <p className="text-[10px]">Find me on</p>
                    <div className="text-[16px] flex items-center justify-center gap-x-1">
                        {socials.map((social) => (
                                <Link
                                  key={social.name}
                                  href={social.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="cursor-pointer underline"
                                >
                                  {`${social.name},`}
                                </Link>
                              ))}
                    </div>

                    <div className="flex items-center justify-center gap-x-1 pt-2">
                    {`vaidehixoxo@gmail.com`}
                    <button
                      onClick={() => handleCopy("vaidehixoxo@gmail.com")}
                      className="text-[#332525]/60 hover:text-[#332525] transition-colors duration-200 cursor-pointer"
                    >
                      {copied ? <Check color="#332525" size={14} /> : <Copy color="#332525" size={14} />}
                    </button>
                  </div>
                </div>
            </div>
        </>
    )
}