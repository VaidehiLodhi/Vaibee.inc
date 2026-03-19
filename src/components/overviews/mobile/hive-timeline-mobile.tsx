import Image from "next/image"
import { bringbold, departure_mono } from "./vaibee-timeline-mobile"
import { MobileHamburger } from "@/components/layout/mobile-hamburger"

export const HiveTimelineMobile =()=> {
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
                        It's in the name <br/>
                        Hive provides a stage<br/>
                        to allow a community<br/>
                        of creatives, planners<br/>
                        to collaborate.<br/>
                    </p>
                </div>
                <div className="text-[12px] leading-5 flex flex-col">
                    <p>
                        A web based application that<br/>
                        aims to provide users a<br/>
                        kanban-like playing arena<br/>
                    </p>
                </div>
            </div>

            {/* second element */}
            <div className="w-[335px] h-[175px]">
                <Image
                    src="/imgs/mockups/hive_mockups/hive_mock_1.svg"
                    alt="hive mockup"
                    priority
                    height={363}
                    width={693.63}
                    className="w-full"
                />
            </div>

            {/* third element */}
             <div className="relative w-[335px] h-[225px] overflow-hidden">
                <Image
                    src="/imgs/mockups/hive_mockups/clay_banks_japan.jpg"
                    alt="clay_banks_japan"
                    priority
                    fill
                    className="object-cover parallax-img will-change-transform scale-120 parallax-display"
                />
                <p className="absolute bottom-2 left-2 text-[6px] text-[#816D6D]">
                    Photo by{" "}
                    <a
                    href="https://unsplash.com/photos/three-bicycles-parked-in-front-of-building-hwLAI5lRhdM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    className="underline"
                    >
                    Clay Banks
                    </a>{" "}
                    on{" "}
                    <a
                    href="https://unsplash.com/photos/three-bicycles-parked-in-front-of-building-hwLAI5lRhdM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    className="underline"
                    >
                    Unsplash
                    </a>
                </p>
                <video
                    className="rounded-lg px-8 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]"
                    autoPlay
                    muted
                    preload="auto"
                    loop
                    playsInline
                >
                    <source
                    src="/imgs/mockups/hive_mockups/videos/creating_board_rewrap_rewrap_noa.mp4"
                    type="video/mp4"
                    />
                </video>
            </div>

            {/* fourth element */}
            <div className="flex flex-col items-center justify-center gap-y-4 text-[12px]">
                <p>
                    As mentioned earlier, <br />
                    the aim of this is to mimic the freedom <br />
                    offered by brainstorming, <br />
                    scribbling down ideas. <br />
                    Watching ur teammates figure stuff <br />
                    around through a spectator interface. <br />
                    Pitching in when needed.
                </p>
            </div>

            {/* fifth element */}
            <div className="relative overflow-hidden w-[300px] h-[200px]">
                <Image
                src="/imgs/mockups/hive_mockups/isometric_perspective_hive.png"
                alt="isometric_perspective_hive"
                priority
                fill
                className="object-cover parallax-img will-change-transform scale-120 parallax-display"
                />
            </div>

            {/* sixth element */}
            <div className="flex flex-col items-center justify-center gap-y-4 text-[12px]">
                <p>
                sometimes all a team <br />
                desires can be provided <br />
                through serene partnership <br />
              </p>
              <p>
                [ORGANIZATION PANEL] <br />
                invite the members you want,
                <br />
                curate the team u aspire <br />
              </p>
              <p>
                [ACTIVITY PANEL] <br />
                keep tabs on changes made,
                <br />
                let the changes guide you;
                <br />
              </p>
            </div>

            {/* seventh element */}
             <div className="relative inline-block h-full">
                <Image
                    src="/imgs/mockups/hive_mockups/macbook_whitebase.svg"
                    alt="macbook_whitebase"
                    priority
                    width={357}
                    height={189}
                    className="relative h-full z-10"
                />

                <video
                    className="rounded-lg w-[77%] absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[55%]"
                    autoPlay
                    preload="auto"
                    muted
                    loop
                    playsInline
                >
                    <source
                    src="/imgs/mockups/hive_mockups/videos/draggable_rewrap_rewrap_noa.mp4"
                    type="video/mp4"
                    />
                </video>
            </div>
            
            {/* eight element */}
            <div className="flex flex-col items-center justify-center gap-y-4 text-[12px]">
                <p>
                  A fully draggable interface <br />
                  that supports real time <br />
                  action. <br />
                  Add lists, cards,
                  <br />
                  descriptions. <br />
                  Let your mates update them.
                  <br />
                </p>
                <p>
                  Utilise the kanban to <br />
                  full potential, <br />
                  drag all components until
                  <br />
                  they make sense to you.
                  <br />
                </p>
                <p>
                  The kanban way of doing things <br />
                  gets a lot done.
                  <br />
                </p>
            </div>
        </div>
    )
}