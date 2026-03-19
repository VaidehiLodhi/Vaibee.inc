import { MobileHamburger } from "@/components/layout/mobile-hamburger";
import { HiveTimelineMobile } from "@/components/overviews/mobile/hive-timeline-mobile";

export const metadata = {
    title: "Hive | vaibee.inc"
}

const HiveMobilePage =()=> {
    return (
        <div>
            <HiveTimelineMobile/>
        </div>
    )
};

export default HiveMobilePage;