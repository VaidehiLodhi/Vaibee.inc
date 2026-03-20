import { four_b_pencil } from "@/components/project-page/punch-paper-red";
import Image from "next/image";

export const metadata = {
  title: "404 (new error era)"
}

export default function NotFound() {
  return (
    <div className=" fixed inset-0 w-screen h-screen bg-[#FAB5C5] flex items-center justify-center overflow-hidden">
      {/* 404 text */}
      <Image
        src="/imgs/logos/logo_kato.png"
        alt="logo"
        width={364}
        height={312}
        className="w-[200px] md:w-[300px] translate-x-15"
      />
      <h1 className={`${four_b_pencil.className} text-center relative z-10 text-3xl md:text-9xl font-black text-white select-none`}>
        404
      </h1>
    </div>
  );
}