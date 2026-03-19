import Image from "next/image"
import { bringbold, departure_mono } from "./vaibee-timeline-mobile"
import { MobileHamburger } from "@/components/layout/mobile-hamburger"

export const TransformerTimelineMobile = () => {
    return (
        <div className={`${departure_mono.className} w-full bg-[#F5E1CD] flex flex-col items-center justify-center gap-y-10 py-20`}>
            <MobileHamburger color="#332525"/>

            {/* first element */}
            <div className="flex flex-col items-start justify-center gap-y-2 w-[335px]">
                <p className="text-[12px] uppercase">[OVERVIEW]</p>
                <div className={`${bringbold.className} text-2xl flex flex-col uppercase`}>
                    <p>
                        A WALL IS HIT, WHILE <br />
                        EXPLORING TEXT GENERATION <br />
                        USING MULTI LAYERED NEURAL NETS. <br />
                        BUT A TRANSFORMER <br />
                        PUSHES THE WALL DOWN. <br />
                    </p>
                </div>
                <div className="text-[12px] leading-5 flex flex-col">
                    <p>
                        While playing around with text <br />
                        generation, I experimented with <br />
                        implementing a transformer <br />
                        architecture from scratch, <br />
                        simply to see cool <br />
                        shakespearian babble. <br />
                    </p>
                </div>
            </div>

            {/* second element — pulled OUT of first element, capped at 335px */}
            <div className="relative w-[335px] h-[250px] overflow-hidden">
                <Image
                    src="/imgs/mockups/transformer_mockups/monet.jpg"
                    priority
                    alt="monet"
                    fill
                    className="object-cover parallax-img will-change-transform scale-120 parallax-display"
                />
                <div className="flex flex-col w-full items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Image
                        src="/imgs/mockups/transformer_mockups/transformer_arch_greeb.png"
                        priority
                        alt="transformer architecture"
                        height={657}
                        width={462}
                        className="w-[200px] z-10"
                    />
                </div>
            </div>

            {/* third element — pulled OUT of first element */}
            <div className="flex flex-col items-center justify-center gap-y-4 text-[12px]">
                <p>[THE STAGE]</p>
                <div className="flex flex-col items-center justify-center gap-x-1">
                    <p>#1</p>
                    <p className="text-center">
                        When we scale up from a simple bigram model <br />
                        averaging past context with 'for' loops <br />
                        (the weakest form of aggregation) we <br />
                        form a baseline model. <br />
                        This is something we want to perform better <br />
                        than in all contexts.
                        <br />
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-x-1">
                    <p>#2</p>
                    <p className="text-center">
                        we r training on shakespeare data, <br />
                        hence, we aim for text generation, rather <br />
                        than text translation, so we shine light on <br />
                        the decoder block
                        <br />
                    </p>
                </div>
            </div>

            {/* fourth element — pulled OUT of first element */}
            <div className="flex flex-col items-center justify-center gap-y-4 text-[12px]">
                <p>[THE MAP]</p>
                <div className="flex flex-col items-center justify-center gap-x-1">
                    <p>#3</p>
                    <p className="text-center">
                        having developed a single self-attention <br />
                        block to out network, we were already on <br />
                        road to a better loss than previously achieved <br />
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-x-1">
                    <p>#4</p>
                    <p className="text-center">
                        Causal self attention : a lower triangular mask <br />
                        is applied to the attention scores before <br />
                        softmax, ensuring that each token can only <br />
                        attend to itself and preceding tokens. <br />
                        This preserves the autoregressive<br />
                        property during text generation. <br />
                        Lotsa words i know, but its fun :3 <br />
                    </p>
                </div>
            </div>

            {/* fifth element — capped at 335px */}
            <div className="relative w-[335px] h-[246px]">
                <Image
                    src="/imgs/mockups/transformer_mockups/transformer_layers.png"
                    alt="transformer_layers"
                    priority
                    fill
                    className="object-fill"
                />
            </div>

            {/* sixth element */}
            <div className="flex flex-col items-center justify-center gap-y-4 text-[12px]">
                <p>[THE MAP]</p>
                <div className="flex flex-col items-center justify-center gap-x-1">
                    <p>#5</p>
                    <p className="text-center">
                        For each attention head, the input is <br />
                        linearly projected into three separate <br />
                        spaces — queries, keys, and values — <br />
                        using weight matrices without bias terms, <br />
                        allowing the model to learn what to <br />
                        search for, what to expose, and what to aggregate. <br />
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-x-1">
                    <p>#6</p>
                    <p className="text-center">
                        Each Transformer block first applies <br />
                        multi-head self-attention (allowing tokens <br />
                        to communicate with each other), <br />
                        followed by a position-wise <br />
                        feedforward network (allowing each token to <br />
                        independently process the gathered information). <br />
                        AND WE R GOOD TO GO!! <br />
                    </p>
                </div>
            </div>

            {/* seventh element — capped at 335px */}
            <div className="relative w-[335px] h-[250px] overflow-hidden">
                <Image
                    src="/imgs/mockups/transformer_mockups/monet.jpg"
                    alt="monet"
                    fill
                    className="object-cover parallax-img will-change-transform scale-120 parallax-display"
                />
                <div className="flex flex-col w-full items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <p className={`${bringbold.className} text-[16px] text-white text-left`}>
                        THE IMAGE SHOWS THREE CHECKPOINTS <br />
                        THE GRADUALLY SIGNIFICANT <br />
                        CHANGES IN OUR ABILITY TO GENERATE <br />
                        SHAKESPEAREAN TEXT <br />
                        LEZZZ GO! <br />
                    </p>
                    <div className={`${bringbold.className} text-[16px] text-white mt-4`}>
                        <p className="text-left">
                            THE FINAL OUTPUT IS FRESH, <br />
                            THE MODEL IS ABLE TO GENERATE <br />
                            ENGLISH TEXT & THE DIALOGUE FORMAT <br />
                            OF DEAREST, SHAKESPEARE <br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}