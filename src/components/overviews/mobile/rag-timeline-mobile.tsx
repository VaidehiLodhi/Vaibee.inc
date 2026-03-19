import Image from "next/image"
import { bringbold, departure_mono } from "./vaibee-timeline-mobile"
import { MobileHamburger } from "@/components/layout/mobile-hamburger"

export const RagTimelineMobile = () => {
    return (
        <div className={`${departure_mono.className} w-full bg-[#F5E1CD] flex flex-col items-center justify-center gap-y-10 py-20`}>
            <MobileHamburger color="#332525"/>

            {/* first element */}
            <div className="flex flex-col items-start justify-center gap-y-2 w-[335px]">
                <p className="text-[12px] uppercase">[OVERVIEW]</p>
                <div className={`${bringbold.className} text-2xl flex flex-col uppercase`}>
                    <p>
                        TODAY'S DIGITAL WORLD <br />
                        OFFERS CHAT INTERFACES <br />
                        SEEMINGLY EVERYWHERE, <br />
                        PLAGUED BY THE AMBIGUITY OF <br />
                        UNSUSTAINABLE BACKEND <br />
                        PROCESSING, <br />
                    </p>
                </div>
                <div className="text-[12px] leading-5 flex flex-col">
                    <p>
                        Aim is to build a RAG Chat <br />
                        Pipeline that is sustainable,
                        <br />
                        reliable and brings back to u <br />
                        the law related answers you seek.
                        <br />
                    </p>
                </div>
            </div>

            {/* second element — stacked instead of overlapping absolute */}
            <div className="flex flex-col items-center gap-y-4 w-[335px]">
                <Image
                    src="/imgs/mockups/rag_chat_mockups/inngest_perspective.png"
                    alt="inngest perspective mockup"
                    height={230}
                    width={335}
                    priority
                    className="w-full h-auto"
                />
                <Image
                    src="/imgs/mockups/rag_chat_mockups/chat_perspective.png"
                    alt="chat perspective mockup"
                    height={230}
                    width={335}
                    priority
                    className="w-full h-auto"
                />
            </div>

            {/* third element */}
            <div className="relative w-[335px] h-[225px] overflow-hidden">
                <Image
                    src="/imgs/mockups/rag_chat_mockups/lin_mei_unsplash.jpg"
                    alt="lin_mei_japan"
                    priority
                    fill
                    className="object-cover parallax-img will-change-transform scale-120 parallax-display rounded-[10px]"
                />
                <p className="absolute bottom-2 left-2 text-[6px] text-[#816D6D]">
                    Photo by{" "}
                    <a href="https://unsplash.com/@mytinyatlas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="underline">
                        Lin Mei
                    </a>{" "}
                    on{" "}
                    <a href="https://unsplash.com/@mytinyatlas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="underline">
                        Unsplash
                    </a>
                </p>
                <div className="flex flex-col w-full items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <p className={`${departure_mono.className} text-[12px] text-white`}>
                        [THE CHALLENGE]
                    </p>
                    <p className={`${bringbold.className} text-[14px] text-white text-left`}>
                        HAMPERED BY INCONSISTENCIES; <br />
                        IT'S EASY FOR LLMs & RAGs TO GET <br />
                        LOST IN THE WHIRLPOOL OF ISSUES. <br />
                    </p>
                    <div className={`${bringbold.className} text-[14px] text-white mt-4`}>
                        <p className="text-left">A THREE FOLD STACK was built for rescue:</p>
                        <ol className="list-decimal list-inside">
                            <li>INPUT VALIDATION & SANITIZATION</li>
                            <li>TRACEABILITY OF QUERIES</li>
                            <li>REFETCHING & QUEUEING</li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* fourth element */}
            <div className="flex flex-col items-center justify-center gap-y-4 text-[12px] w-[335px]">
                <p>
                    The Chat Interface is connected to a <br />
                    LangChain Backend. <br />
                    The LangChain is setup that way such that: <br />
                </p>
                <ul className="list-outside list-disc mt-4">
                    <li>
                        A Chroma Vector Database is stored <br />
                        with large amount of chunked and <br />
                        embedded ocean data. <br />
                    </li>
                    <li>
                        When a user query comes, it is sent <br />
                        to the same backend where the query <br />
                        is embedded and then similarity <br />
                        functions try finding the top K <br />
                        similar chunks that the query asks for. <br />
                    </li>
                    <li>
                        The Retrieved chunks are translated <br />
                        back into context and given back to <br />
                        the LLM model which uses it to answer <br />
                        the user query with backed up <br />
                        augmented knowlegde <br />
                    </li>
                </ul>
            </div>

            {/* fifth element — capped at 335px */}
            <div className="relative w-[335px] h-[250px] overflow-hidden">
                <Image
                    src="/imgs/mockups/rag_chat_mockups/soliman_cifuentes_tree.jpg"
                    alt="soliman_tree"
                    priority
                    fill
                    className="object-cover parallax-img will-change-transform scale-120 parallax-display rounded-[10px]"
                />
                <p className="absolute bottom-2 left-2 text-[6px] text-[#7e6d81]">
                    Photo by{" "}
                    <a href="https://unsplash.com/photos/the-branches-of-a-tree-with-purple-flowers-against-a-blue-sky-E0istEV9CV8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="underline">
                        Soliman Cifuentes
                    </a>{" "}
                    on{" "}
                    <a href="https://unsplash.com/photos/the-branches-of-a-tree-with-purple-flowers-against-a-blue-sky-E0istEV9CV8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="underline">
                        Unsplash
                    </a>
                </p>
                <div className="flex w-full h-full items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Image
                        src="/imgs/mockups/rag_chat_mockups/screen_side_1.svg"
                        alt="screen 1"
                        height={170}
                        width={140}
                        className="self-start w-35 h-auto z-10"
                    />
                    <Image
                        src="/imgs/mockups/rag_chat_mockups/screen_side_2.svg"
                        alt="screen 2"
                        height={170}
                        width={140}
                        className="translate-y-4 self-end w-35 h-auto z-10"
                    />
                </div>
            </div>

            {/* sixth element */}
            <div className="flex flex-col items-center justify-center gap-y-4 text-[12px]">
                <p>
                    [VISUAL DIRECTION] <br />
                    The utilisation of clean mono fonts,
                    <br />
                    and simple palette resolves the clutter <br />
                    Some designs need clarity and <br />
                    simplicity serves this purpose <br />
                </p>
            </div>

            {/* seventh element — capped at 335px */}
            <div className="w-[335px]">
                <Image
                    src="/imgs/mockups/rag_chat_mockups/rag_mockup_screen.png"
                    alt="rag mockup"
                    priority
                    width={335}
                    height={175}
                    className="w-full h-auto"
                />
            </div>
        </div>
    )
}