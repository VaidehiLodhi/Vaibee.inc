import { belmonte } from "@/components/layout/mobile-diary";
import { MobileHamburger } from "@/components/layout/mobile-hamburger";
import { four_b_pencil } from "@/components/project-page/text-scroll-marquee";
import { magnat_test_regular } from "@/components/punch-white/white-content";
import localFont from "next/font/local";
import Image from "next/image";

export const departure_mono = localFont({
  src: "../../../../public/fonts/departure-mono.woff2",
  variable: "--font-departure-mono",
  display: "swap",
});

export const bringbold = localFont({
  src: "../../../../public/fonts/bringbold-nineties.ttf",
  variable: "--font-bringbold",
  display: "swap",
});

export const futura_bold = localFont({
  src: "../../../../public/fonts/futura_bold.ttf",
  variable: "--font-futura-bold",
  display: "swap",
});


export const VaibeeTimelineMobile =()=> {
    return (
        <div className={`${departure_mono.className} w-full bg-[#F5E1CD] flex flex-col items-center justify-center gap-y-10 py-20`}>
            <MobileHamburger color="#332525"/>
            {/* first element */}
            <div className="flex flex-col items-start justify-center gap-y-2">
                <p className="text-[12px] uppercase">[OVERVIEW]</p>
                <div
                    className={` ${bringbold.className} text-2xl flex flex-col uppercase`}
                >
                    <p>
                    VAIBEE.INC, <br/>
                    A LABOUR OF LOVE. <br/>
                    THESE PORTFOLIO PIXELS WERE <br/>
                    ALWAYS ENVISIONED AS A <br/>
                    MANIFESTATION OF GIRLHOOD<br/>
                    & ALL DAYS SPENT IN THE PURSUIT <br/>
                    OF CONSOLIDATING LIFE INTO A <br/>
                    DIARY<br/>
                    </p>
                </div>
                <div className="text-[12px] leading-5 flex flex-col">
                    <p>
                    Everything growing up became a <br/>
                    kaleidoscope of my love for books, <br/>
                    films, art and how I would try to <br/>
                    find or fit myself in these pieces.<br/>
                    Through it all, I landed here.<br/>
                    And now u r here too :p<br/>
                    </p>
                </div>
            </div>

            {/* second element */}
             <div className={`${futura_bold.className} relative bg-[#F9F0EE] rounded-[10px] isolate w-[350px] h-[250px] flex flex-col items-center text-[16px] text-[#332525] overflow-hidden`}>
                <div className="relative my-auto flex items-center justify-center gap-x-10 whitespace-nowrap text-transparent [-webkit-text-stroke:1px_#332525]">
                    <p>WHAT WILL YOUR VERSE BE?</p>
                    <p>WHAT WILL YOUR VERSE BE?</p>
                </div>
                <div className="relative flex items-center justify-center gap-x-6 translate-x-10 text-transparent whitespace-nowrap [-webkit-text-stroke:1px_#332525]">
                    <p>WHAT WILL YOUR VERSE BE?</p>
                    <p>WHAT WILL YOUR VERSE BE?</p>
                </div>
                <div className=" relative mt-auto flex items-center justify-center gap-x-6 whitespace-nowrap">
                    <p className="text-transparent [-webkit-text-stroke:1px_#332525]">WHAT WILL YOUR VERSE BE?</p>
                    <p>WHAT WILL YOUR VERSE BE?</p>
                    <p className="text-transparent [-webkit-text-stroke:1px_#332525]">WHAT WILL YOUR VERSE BE?</p>
                </div>
                <video
                    className="rounded-[10px] px-4 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source
                    src="/imgs/mockups/vaibee_mockups/videos/vaibee_interface_rewrap.mp4"
                    type="video/mp4"
                    />
                </video>
            </div>

            {/* third element */}
            <div className="relative overflow-hidden w-59.5 h-96">
                <Image
                src="/imgs/mockups/vaibee_mockups/preloader_book.png"
                alt="preloader_book"
                fill
                className="object-cover parallax-img will-change-transform scale-120 parallax-display rounded-[10px]"
                />
            </div>
            <div className="relative overflow-hidden w-59.5 h-96">
                <Image
                src="/imgs/mockups/vaibee_mockups/doodle_card.png"
                alt="doodle_card"
                fill
                className="object-cover parallax-img will-change-transform scale-120 parallax-display rounded-[10px]"
                />
            </div>

            {/* fourth element */}
            <div className="flex flex-col items-center justify-center gap-y-4 text-[12px]">
              <p>
                [VISUAL IDENTITY] <br />
              </p>
              <p>
                A room for a person sometimes <br/>
                serves everything from a diner, to a <br/> 
                workshop, to ur comfort nook. <br/>
                Similarly diaries & journals pull u in <br/>
                with their ability to suppress years into <br/>
                pages. <br/>

                The visuals were intended to offer the <br/>
                feel <br/>
                of stumbling onto ur friends room <br/>
                and explore their antics & possessions, <br/>
                allowing their personalities to <br/>
                slip in through them. <br/>
              </p>
              <p>
                The playthrough with fonts suggests, <br/>
                how different aspects of life can ask <br/>
                for different aesthetics. <br/>
                Bold when required, playful otherwise. <br/>
              </p>
              <p>
                The hand-drawn doodles, the stacked <br/>
                page system, the pixel art were built <br/>
                to make that vision palpable. <br/>
              </p>
            </div>

            {/* fifth element */}
            <div className="bg-[#FAB5C5] flex flex-col gap-y-5 px-10 py-10 rounded-[10px]">
                <p className={`${belmonte.className} text-4xl`}>Vaibee.inc</p>
                <p className={`${four_b_pencil.className} text-2xl `}>Vaibee.inc</p>
                <p className={`${departure_mono.className} text-2xl`}>Vaibee.inc</p>
                <p className={`${magnat_test_regular.className} text-2xl`}>Vaibee.inc</p>
                <p className={`${bringbold.className} text-[32px]`}>Vaibee.inc</p>
            </div>

            {/* sixth element */}
            <div className="w-[90%] px-8 flex flex-col items-center justify-center gap-y-8">
                <div className="rounded-[10px] overflow-hidden">
                    <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                        <source src="/imgs/mockups/vaibee_mockups/videos/vaibee_pixel_panels_rewrap.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="rounded-[10px] overflow-hidden">
                    <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                        <source src="/imgs/mockups/vaibee_mockups/videos/vaibee_stack_animates_rewrap.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>

            {/* seventh element */}
            <div className="flex flex-col gap-y-4 text-[12px] mb-20">
                <p>
                    Thus, marks the phase 1 of <br/>
                    my first portfolio entry. <br/>
                    This has still a long way to go, <br/>
                    in terms of responsiveness. <br/>
                    And I'll be working on it <br/>
                    throughout, but i wanted to <br/>
                    put this out, because someone special said <br/>
                    "just make it exist", <br/>
                    "u can make it good later!" <br/>
                </p>
            </div>
        </div>
    )
}