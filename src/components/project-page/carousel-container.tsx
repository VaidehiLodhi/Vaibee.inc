import Image from "next/image"
import Link from "next/link";

type CarouselContainerProp = {
    source_base: string;
    alt_base: string;
    source_overlay: string;
    alt_overlay: string;
    href: string;
}

export const CarouselContainer =({
    source_base,
    alt_base,
    source_overlay,
    alt_overlay,
    href,
} : CarouselContainerProp)=> {
    return (
        <Link
            href={href}
        >
            <div className="w-full h-full relative group">
                <Image
                    src={source_base}
                    alt={alt_base}
                    width={252}
                    height={168}
                    priority
                    className="object-contain rounded-[10px]"
                />
                <Image
                    src={source_overlay}
                    alt={alt_overlay}
                    width={252}
                    height={145}
                    priority
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[10px]"
                />
            </div>
        </Link>
    )
}