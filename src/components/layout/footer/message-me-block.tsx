import localFont from "next/font/local";
import { FormFields } from "./form-fields";
import { SocialBadges } from "./social-badges";

export const magnat_text_regular = localFont({
  src: "../../../../public/fonts/magnat_family/text_test/magnat_text_test_regular.woff",
  variable: "--font-magnat_text_regular",
  display: "swap",
});

export const departure_mono = localFont({
  src: "../../../../public/fonts/departure-mono.woff2",
  variable: "--font-departure-mono",
  display: "swap",
});

export const MessageMeBlock =()=> {
    return (
      <div className="flex flex-col items-center w-full justify-center pt-9 md:pt-12 text-[#DF4346]">
        <div className="flex flex-col w-full gap-0 items-center justify-center md:pb-5 md:pl-15">
          <div
            className={`${magnat_text_regular.className} leading-none text-left text-[22px] md:text-[34px]`}
          >
            Yup, that's me, Vaidehi.
          </div>
          <div
            className={`${magnat_text_regular.className} text-center md:text-left text-[22px] md:text-[30px]`}
          >
            (Vaibee on the internet, hehe)
          </div>
        </div>
        <div className={`${departure_mono.className} md:pl-20 pt-4 w-full flex flex-col gap-0 items-center justify-center text-[12px] md:text-[14px]`}>
          I'm always up for opportunities to work<br/>
          on new projects, participate in <br/>
          a hackathon or anything fun <br/>
          So, feel free to reach out! <br/>
          If you have a fun idea, <br/>
          I'd love to hear it <br/>
        </div>
        <FormFields/>
        <div className="w-full flex items-center justify-center md:pl-20">
          <SocialBadges/>
        </div>
      </div>
    );
}