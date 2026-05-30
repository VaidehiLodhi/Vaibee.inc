"use client";

import { hiveObject } from "@/components/project-page/project-texts/hive_object";
import { ragChatInterface } from "@/components/project-page/project-texts/rag_chat_object";
import { transformerObject } from "@/components/project-page/project-texts/transformer_object";
import { vaibeeIncObject } from "@/components/project-page/project-texts/vaibee_object";
import { blockType, metadataBlockType, providence_bold, SidebarCardContent } from "@/components/project-page/sidebat-content";
import { SidebarTabsTrigger, Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import Image from "next/image"
import { departure_mono } from "./vaibee-timeline-mobile";
import { CardContent, CardHeader, SidebarCard } from "@/components/ui/card";
import { TextScrollMarquee } from "@/components/project-page/text-scroll-marquee";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GithubMulticolorIcon } from "@/components/project-page/github-multicolor";
import { useState, useRef } from "react";
import { magnat_text_regular } from "@/components/page-components/text-reveal-3";
import { useRouter } from "next/navigation";
import { LinkIcon } from "lucide-react";

const projectContentMap: Record<string, blockType[]> = {
  hive: hiveObject,
  rag_chat_interface: ragChatInterface,
  transformer: transformerObject,
  vaibee_inc: vaibeeIncObject,
};

const HOLD_DURATION = 2000; // ms
const RADIUS = 24;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const SwipeHoldButton = ({ href, color }: { href: string; color: string }) => {
  const router = useRouter();
  const [progress, setProgress] = useState(0); // 0 to 1
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startYRef = useRef<number | null>(null);

  const startHold = () => {
    const startTime = Date.now();
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setProgress(Math.min(elapsed / HOLD_DURATION, 1));
    }, 16);

    timerRef.current = setTimeout(() => {
      cleanup();
      setProgress(0);
      router.push(href);
    }, HOLD_DURATION);
  };

  const cleanup = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    timerRef.current = null;
    intervalRef.current = null;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    startYRef.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const deltaY = startYRef.current! - e.touches[0].clientY;
    if (deltaY > 20 && !timerRef.current) {
      startHold();
    }
  };

  const handleTouchEnd = () => {
    cleanup();
    setProgress(0);
    startYRef.current = null;
  };

  return (
    <div
      className="flex flex-col items-center justify-center py-6 gap-2 cursor-pointer select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <svg width="60" height="60" viewBox="0 0 60 60">
        {/* background circle */}
        <circle
          cx="30" cy="30" r={RADIUS}
          fill="none"
          stroke="#00000020"
          strokeWidth="3"
        />
        {/* progress arc */}
        <circle
          cx="30" cy="30" r={RADIUS}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
          transform="rotate(-90 30 30)"
          style={{ transition: "stroke-dashoffset 16ms linear" }}
        />
        {/* arrow up icon */}
        <text x="30" y="35" textAnchor="middle" fontSize="16" fill={color}>↑</text>
      </svg>
      <p className={`${providence_bold.className} text-[16px] text-black/50`}>
        swipe up & hold
      </p>
      <p className={`${providence_bold.className} text-[16px] text-black/70`}>
        {`it'll take u the image caraousel (check it out <3)`}
      </p>
    </div>
  );
};

export const WorksMobile = () => {
  const projects = [
    {
      id: "hive",
      name: "Hive",
      title: "HIVE * KANBAN COLLABORATION * HIVE * KANBAN COLLABORATION *",
      activeState: "#F5F4C7",
      fontActiveState: "#FAC206",
    },
    {
      id: "vaibee_inc",
      name: "Vaibee.inc",
      title: "VAIBEE.INC * A LABOUR OF LOVE * VAIBEE.INC * A LABOUR OF LOVE *",
      activeState: "#FFF1F1",
      fontActiveState: "#FF6464",
    },
    {
      id: "rag_chat_interface",
      name: "RAG Chat Pipeline",
      title: "CHAT PIPELINE * RAG * CHAT PIPELINE * RAG *",
      activeState: "#F8EAFF",
      fontActiveState: "#2B0C7D",
    },
    {
      id: "transformer",
      name: "Transformer",
      title: "TRANSFORMER * ARCHITECTURE * TRANSFORMER * ARCHITECTURE *",
      activeState: "#ECFDF8",
      fontActiveState: "#00CD95",
    },
  ];

  const [bookmarkOpen, setBookmarkOpen] = useState(true);

  return (
    <div className={`${magnat_text_regular.className} w-full min-h-screen bg-[#B7BED7] flex items-center justify-center`}>
      <Tabs defaultValue="hive" className="relative w-full px-4">
        <div className="relative z-0 pt-5 rounded-[10px] max-w-150">
          {projects.map((project) => (
            <TabsContent key={project.id} value={project.id} className="h-full">
              <SidebarCard
                style={{ backgroundColor: project.activeState }}
                className="h-full rounded-[10px] pt-5"
              >
                <CardHeader className="p-0 pt-2.5">
                  <TextScrollMarquee title={project.title} textColor={project.fontActiveState} />
                  <div className="flex items-center justify-start gap-x-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="sm"
                          className={`${magnat_text_regular.className} w-fit ml-7`}
                          style={{ backgroundColor: project.fontActiveState, color: project.activeState }}
                          asChild
                        >
                          <Link href={`${(projectContentMap[project.id][0] as metadataBlockType).mobileOverview}`}>
                            Project showcase
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent
                        arrowClassName="bg-transparent fill-transparent"
                        style={{ backgroundColor: project.fontActiveState }}
                      >
                        <p>All images & video demo in here, check it out!</p>
                      </TooltipContent>
                    </Tooltip>
                    <Link
                      href={`${(projectContentMap[project.id][0] as metadataBlockType).githublnk}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubMulticolorIcon fill={project.fontActiveState} size={30} />
                    </Link>
                    {(projectContentMap[project.id][0] as metadataBlockType).deployedlnk && (
                      <Link
                        href={`${(projectContentMap[project.id][0] as metadataBlockType).deployedlnk}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkIcon 
                          style={{ color: `${project.fontActiveState}` }}
                          size={30} 
                        />
                      </Link>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-8">
                    <SidebarCardContent blocks={projectContentMap[project.id]} />
                  </div>
                </CardContent>

                {/* swipe hold to visit project */}
                <SwipeHoldButton
                  href={(projectContentMap[project.id][0] as metadataBlockType).mobileOverview}
                  color={project.fontActiveState}
                />

              </SidebarCard>
            </TabsContent>
          ))}
        </div>

        {/* bookmark */}
        <div
          style={{
            transformOrigin: "top right",
            transform: bookmarkOpen ? "rotate(0deg)" : "rotate(-20deg)",
          }}
          className="absolute top-0 -right-4 z-10 rounded-[10px] h-[300px] w-[142px] overflow-visible"
          onClick={() => setBookmarkOpen((prev) => (!prev))}
        >
          <div className="absolute -top-8 right-0 z-20 pointer-events-none">
            <Image src="/imgs/footer/black_thread.svg" alt="pink_thread" height={67} width={50} />
          </div>
          <div className="absolute bottom-0 right-5 z-20 pointer-events-none">
            <Image src="/mobile/swoop.svg" alt="swoop" height={60} width={50} />
          </div>
          <TabsList
            className="relative w-full h-full z-10 flex flex-col p-0 items-start bg-[#F5E1CD] justify-center"
          >
            {projects.map((project) => (
              <SidebarTabsTrigger
                onClick={(e) => e.stopPropagation()}
                key={project.id}
                variant="sidebar"
                style={{ "--active-bg": project.activeState } as React.CSSProperties}
                value={project.id}
                className={`${departure_mono.className} text-left cursor-pointer w-full text-[12px]`}
              >
                {project.name}
              </SidebarTabsTrigger>
            ))}
          </TabsList>
        </div>
      </Tabs>
    </div>
  );
};