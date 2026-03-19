import { MobileHamburger } from "@/components/layout/mobile-hamburger";
import { WorksMobile } from "@/components/overviews/mobile/works-mobile";
import Image from "next/image";

export const metadata = {
    title: "Works | vaibee.inc"
}

const WorkMobilePage =()=> {
    return (
        <div className="w-screen min-h-screen bg-[#B7BED7] overflow-x-hidden">
            <div className="flex w-full items-center justify-between py-5 pl-5">
                <Image
                    src="/imgs/star-doodle.svg"
                    width={36.88}
                    height={34.4}
                    alt="star-doodle-img"
                />
                <MobileHamburger color="#332525"/>
            </div>
            <WorksMobile/>
        </div>
    )
};

export default WorkMobilePage;