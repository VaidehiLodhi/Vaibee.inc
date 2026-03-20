import { MobileHamburger } from "@/components/layout/mobile-hamburger";
import { ScrollBg } from "@/components/layout/scroll-bg";
import { SkillsetMobile } from "@/components/overviews/mobile/skillset-mobile";
import { magnat_test_regular } from "@/components/punch-white/white-content";

export const metadata = {
    title: "Skill | vaibee.inc"
}

const SkillPage =()=> {
    return (
        <div className="relative w-screen min-h-screen bg-transparent overflow-x-hidden">
            <ScrollBg/>
            <div className="flex w-full items-center justify-between py-5">
                <MobileHamburger color="#f8f8f8"/>
            </div>
            <div className="translate-x-10 flex flex-col w-full items-start justify-center py-24">
                <div className={`${magnat_test_regular.className} text-[32px] text-[#f8f8f8] `}>Skillset</div>
                <div className="bg-white w-full py-2  pl-5 rounded-[10px]">
                    <div className="w-full rounded-[10px] pt-5">
                        <SkillsetMobile/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillPage;