import localFont from "next/font/local";
import { LinkPanel } from "./link-panel";
import { CattoFigurine } from "./catto-figurine";
import Image from "next/image";

export const belmonte = localFont({
  src: "../../../public/fonts/belmonte_ballpoint.otf",
  variable: "--font-belmonte_ballpoint",
  display: "swap",
});

export const providence = localFont({
  src: "../../../public/fonts/providence-sans.ttf",
  variable: "--font-providence_sans",
  display: "swap",
});

export const DiaryPage = () => {
  return (
    <div
      className="relative w-screen md:w-full md:max-w-4xl overflow-hidden"
      style={{
        aspectRatio: "1084/780",
        backgroundImage: "url(/imgs/notebook-pimk.svg)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`${providence.className} p-8 grid grid-cols-4 h-full overflow-hidden`}
      >
        <div className="col-span-2 flex flex-col min-h-0 px-2 md:px-4 h-full">
          <p className="z-2 text-sm md:text-2xl pt-2 md:pt-8 pl-2 md:pl-6 pb-2 md:pb-5">
            Hello!
          </p>
          <div className="z-2 flex flex-col gap-3 min-h-0 text-xs md:text-[18px] tracking-normal pl-2 md:pl-4">
            <p>
              My name is Vaidehi Lodhi, and I am a developer.
            </p>
            <p>
              I love designing digital experiences that blend different tech and mediums.
              I saw how powerful design could be through cinema. How every design choice contributed to crafting an experience.
            </p>
            <p>
              Currently, focusing on going as deep into backend & systems as I
              can get.
            </p>
            <p>
              Trying to get it all into my brain before it succumbs to the
              rigidity of age hehe.
            </p>
          </div>
          <Image
            src="/imgs/cat_with_wool.svg"
            alt="cat with wool ofc"
            height={292}
            width={387}
            className="z-0 absolute left-0 bottom-0 max-w-full h-auto pl-2 py-3"
          />
        </div>
        <div className="col-span-2 flex flex-col min-h-0 h-full">
          <LinkPanel />
        </div>
      </div>
    </div>
  );
};
