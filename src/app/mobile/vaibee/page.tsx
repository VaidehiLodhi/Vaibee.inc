import { MobileHamburger } from "@/components/layout/mobile-hamburger";
import { VaibeeTimelineMobile } from "@/components/overviews/mobile/vaibee-timeline-mobile";

export const metadata = {
    title: "Portfolio | vaibee.inc"
}

const VaibeeMobilePage =()=> {
    return (
        <div>
            <VaibeeTimelineMobile/>
        </div>
    )
};

export default VaibeeMobilePage;