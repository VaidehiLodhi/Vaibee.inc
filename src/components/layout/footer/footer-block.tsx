import { TextMarquee } from "@/components/text-marquee"
import { BookmarkStack } from "./bookmark-stack"
import { GuestCheck } from "./guest-check"
import { MessageMeBlock } from "./message-me-block"

export const FooterBlock =()=> {
    return (
        <div className="grid grid-cols-2 w-full min-h-screen bg-[#FAB5C5] pt-10">
           {/* hide on mobile */}
            <div className="hidden md:flex col-start-1 items-center justify-center gap-x-20 relative">
                <div className="-translate-y-20 rotate-[-13.55deg]">
                    <GuestCheck/>
                </div>
                <div className="translate-x-3 translate-y-10">
                    <BookmarkStack/>
                </div>
            </div>

            {/* full width on mobile, col-2 on desktop */}
            <div className="col-start-1 col-span-2 md:col-start-2">
                <MessageMeBlock/>
            </div>

            <div className="hidden md:block col-start-1 col-span-2">
                <TextMarquee outline={true} bgColor="#FAB5C5" />
            </div>
        </div>
    )
}