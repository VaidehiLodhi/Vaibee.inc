import localFont from "next/font/local";
import Image from "next/image"

export const belmonte = localFont({
  src: "../../../public/fonts/belmonte_ballpoint.otf",
  variable: "--font-belmonte_ballpoint",
  display: "swap",
});

export const MobileDiary =()=> {
    return (
        <div className={`${belmonte.className} relative w-full text-xl`}>
            <Image
                src="/mobile/mobile_page.png"
                alt="mobile page"
                width={602}
                height={881}
                className="relative w-full"
            />
            <div className="flex flex-col item-center justify-center gap-y-20 absolute top-0 left-0 translate-x-15 translate-y-22">
                <p>
                    My name is Vaidehi Lodhi, <br/>
                    and I am a developer. <br/>

                    I love designing digital experiences <br/>
                    that blend different tech and <br/>
                    mediums.<br/>
                    I saw how powerful design could be <br/>
                    through cinema. How every design <br/>
                    choice contributed to crafting an <br/>
                    experience.<br/>
                </p>
                <p>
                    Then collaborating with peers, <br/>
                    ML and AI opened up a new territory <br/>
                    for me, which i love to tread.<br/>
                    Currently, focusing on going as deep <br/> 
                    into deep learning as i can get. <br/>

                    Trying to get it all into my <br/>
                    brain before it succumbs <br/>
                    to the rigidity of age hehe.<br/>
                </p>
            </div>
        </div>
    )
}