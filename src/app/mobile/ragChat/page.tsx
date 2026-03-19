import { MobileHamburger } from "@/components/layout/mobile-hamburger";
import { RagTimelineMobile } from "@/components/overviews/mobile/rag-timeline-mobile";

export const metadata = {
    title: "RagChat | vaibee.inc"
}

const RagMobilePage =()=> {
    return (
        <div>
            <RagTimelineMobile/>
        </div>
    )
};

export default RagMobilePage;