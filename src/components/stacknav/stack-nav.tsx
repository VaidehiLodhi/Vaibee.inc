"use client";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import Image from "next/image";
import { useRef, useCallback, forwardRef, useImperativeHandle, useState } from "react";

gsap.registerPlugin(Draggable);

const SLOT_DIARY = 0;    // diary always lives here, static
const SLOT_A = 230;      // first draggable spot
const SLOT_B = 460;      // second draggable spot

type StackNavProp = {
  onStackChange : (top : "projectPage" | "skillSetPage") => void;
  onDiaryClick ?: () => void;
  isOpen ?: boolean;
}

export type StackNavHandle = {
  swap: () => void;
}

export const StackNav = forwardRef<StackNavHandle, StackNavProp> (({onStackChange, onDiaryClick, isOpen}, ref) => {

  // expose swap to parent
  useImperativeHandle(ref, ()=> ({
    swap() {
      //exchange slots
      const tmp = slotOf.current[0];
      slotOf.current[0] = slotOf.current[1];
      slotOf.current[1] = tmp;

      const topCard = slotOf.current[0] === SLOT_A ? "projectPage" : "skillSetPage";
      setTopCard(topCard)

      //kill, animate, reinit - same as onDragEnd
      Draggable.get(projectRef.current!)?.kill();
      Draggable.get(skillSetRef.current!)?.kill();

      gsap.to(projectRef.current!, {
        y: slotOf.current[0],
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => initDraggables(),
      });

      gsap.to(skillSetRef.current!, {
        y: slotOf.current[1],
        duration: 0.3,
        ease: "power2.out",
      });

    }
  }))
  const containerRef = useRef<HTMLDivElement>(null);
  const projectRef   = useRef<HTMLDivElement>(null);
  const skillSetRef  = useRef<HTMLDivElement>(null);
  const slotOf       = useRef<[number, number]>([SLOT_A, SLOT_B]);
  const previewing   = useRef(false);
  const [top, setTopCard] = useState<"projectPage" | "skillSetPage">("projectPage");

  const initDraggables = useCallback(() => {
    if (!projectRef.current || !skillSetRef.current) return;

    // kill stale instances so origin resets
    Draggable.get(projectRef.current)?.kill();
    Draggable.get(skillSetRef.current)?.kill();

    Draggable.create([projectRef.current, skillSetRef.current], {
      type: "y",

      onDragStart(this: Draggable) {
        previewing.current = false;
        gsap.set(this.target, { zIndex: 1001 });
      },

      onDrag(this: Draggable) {
        const isProject  = this.target === projectRef.current;
        const selfIdx    = isProject ? 0 : 1;
        const otherIdx   = isProject ? 1 : 0;
        const other      = isProject ? skillSetRef.current! : projectRef.current!;

        const selfSlotY  = slotOf.current[selfIdx];
        const otherSlotY = slotOf.current[otherIdx];
        const midpoint   = (selfSlotY + otherSlotY) / 2;

        // read actual GSAP y — not this.y which drifts after reinit
        const currentY   = gsap.getProperty(this.target, "y") as number;

        // self is on top  → dragging down  → crosses when currentY > midpoint
        // self is on bottom → dragging up  → crosses when currentY < midpoint
        const selfIsOnTop    = selfSlotY < otherSlotY;
        const crossedMidpoint = selfIsOnTop
          ? currentY > midpoint
          : currentY < midpoint;

        if (crossedMidpoint && !previewing.current) {
          gsap.to(other, { y: selfSlotY, duration: 0.2, ease: "power2.out" });
          previewing.current = true;
        } else if (!crossedMidpoint && previewing.current) {
          gsap.to(other, { y: otherSlotY, duration: 0.2, ease: "power2.out" });
          previewing.current = false;
        }
      },

      onDragEnd(this: Draggable) {
        const isProject  = this.target === projectRef.current;
        const selfIdx    = isProject ? 0 : 1;
        const otherIdx   = isProject ? 1 : 0;
        const other      = isProject ? skillSetRef.current! : projectRef.current!;

        if (previewing.current) {
          const tmp                    = slotOf.current[selfIdx];
          slotOf.current[selfIdx]      = slotOf.current[otherIdx];
          slotOf.current[otherIdx]     = tmp;
          previewing.current           = false;
        }

        const topCard = slotOf.current[0] === SLOT_A ? "projectPage" : "skillSetPage";
        setTopCard(topCard);
        onStackChange?.(topCard);


        const targetSnap = slotOf.current[selfIdx];
        const otherSnap  = slotOf.current[otherIdx];

        // kill before snap so no stale drag state lingers
        Draggable.get(this.target)?.kill();
        Draggable.get(other)?.kill();

        gsap.to(this.target, {
          y: targetSnap,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => initDraggables(), // reinit after both have landed
        });

        gsap.to(other, {
          y: otherSnap,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.set(this.target, { zIndex: 1000 });
      },
    });
  }, []);

  useGSAP(() => {
    if (!projectRef.current || !skillSetRef.current) return;
    gsap.set(projectRef.current,  { y: slotOf.current[0] });
    gsap.set(skillSetRef.current, { y: slotOf.current[1] });
    initDraggables();
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="absolute left-0 ml-10 top-[100px] md:px-20 w-[560px]"
      style={{
        height: 610,
        translate: "none",
        rotate: "none",
        scale: "none",
        transform: "translate(0px)",
        pointerEvents: "auto",
      }}
    >
       <div
        onClick={onDiaryClick}
        style={{
          position: "absolute",
          top: 0, left: 0,
          touchAction: "none",
          cursor: "point",
          userSelect: "none",
          zIndex: 3000,
        }}
      >
        <div className="relative w-[100px] h-[150px] mt-5">
          <Image
            width={100} height={100}
            alt="/diaryPage"
            src="/imgs/draggable/diaryPage.png"
            className={cn("absolute top-0 left-0", isOpen ? "opacity-100" : "opacity-70")}
          />
         <Image 
            width={45} 
            height={45}
            alt={isOpen ? "open" : "closed"}
            src={isOpen ? "/imgs/draggable/eyes-open.svg" : "/imgs/draggable/eyes-closed.svg"}
            className="absolute top-14 left-6"  // position over the diary image
          />
        </div>
        <Image
          width={30} height={30}
          alt="bottom"
          src="/imgs/draggable/bottom-single.svg"
          style={{ touchAction: "none", cursor: "point" }}
          className="ml-8 mt-5"
        />
      </div>

      {/* project page */}
      <div
        ref={projectRef}
        style={{
          position: "absolute",
          top: 0, left: 0,
          touchAction: "none",
          cursor: "grab",
          userSelect: "none",
          zIndex: 1000,
          opacity: top === "projectPage" ? 1 : 0.7,
          transition: "opacity 0.3s ease",
        }}
      >
        <Image
          width={100} height={100}
          alt="/projectPage"
          src="/imgs/draggable/projectPage.png"
          style={{ touchAction: "none", cursor: "grab" }}
          className="mt-5"
        />
        <Image
          width={30} height={30}
          alt="bottom"
          src="/imgs/draggable/bottom.svg"
          style={{ touchAction: "none", cursor: "grab" }}
          className="ml-8 mt-5"
        />
      </div>

      {/* skill set page */}
      <div
        ref={skillSetRef}
        style={{
          position: "absolute",
          top: 0, left: 0,
          touchAction: "none",
          cursor: "grab",
          userSelect: "none",
          zIndex: 1000,
          opacity: top === "skillSetPage" ? 1 : 0.7,
          transition: "opacity 0.3s ease"
        }}
      >
        <Image
          width={100} height={100}
          alt="/skillSetPage"
          src="/imgs/draggable/skillSet.png"
          style={{ touchAction: "none", cursor: "grab" }}
          className="mt-5"
        />
        <Image
          width={30} height={30}
          alt="bottom"
          src="/imgs/draggable/bottom.svg"
          style={{ touchAction: "none", cursor: "grab" }}
          className="ml-8 mt-5"
        />
      </div>
    </div>
  );
});