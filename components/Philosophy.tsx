"use client";
import { ScrollReveal } from "./ScrollReveal";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const capabilities = [
  {
    title: "Simplifying Complexity",
    description: "I specialize in making large, interconnected systems understandable - whether that’s technology, process, or organizational structure. Clarity is the fastest path to momentum."
  },
  {
    title: "Technical Judgment",
    description: "My background allows me to ask better questions, challenge assumptions, and make informed decisions without over-engineering. I value practicality over perfection."
  },
  {
    title: "Operational Stability",
    description: "Strong systems don’t draw attention to themselves. I focus on reliability, predictability, and removing chronic sources of disruption so teams can focus on meaningful work."
  },
  {
    title: "People-Centered Leadership",
    description: "I lead with empathy and accountability. Teams perform best when expectations are clear, trust is mutual, and leadership stays present."
  },
  {
    title: "Strategic Alignment",
    description: "I bridge the gap between vision and execution - translating business goals into actionable direction and ensuring technology investments actually deliver value."
  }
];

const variants = {
  enter: (props: { direction: number, isMobile: boolean }) => ({
    x: props.isMobile ? 20 : (props.direction > 0 ? 50 : -50),
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (props: { direction: number, isMobile: boolean }) => ({
    zIndex: 0,
    x: props.isMobile ? -20 : (props.direction < 0 ? 50 : -50),
    opacity: 0
  })
};

export const Philosophy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [lastInteraction, setLastInteraction] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerPage = isMobile ? 1 : 3;
  const intervalTime = isMobile ? 4300 : 6500;

  const handleNext = useCallback((manual = false) => {
    if (manual) setLastInteraction(Date.now());
    setDirection(1);
    setCurrentIndex((prev) => {
        if (isMobile) {
            return (prev + 1) % capabilities.length;
        } else {
            const nextIndex = prev + 3;
            return nextIndex >= capabilities.length ? 0 : nextIndex;
        }
    });
  }, [isMobile]);

  const handlePrev = useCallback((manual = false) => {
    if (manual) setLastInteraction(Date.now());
    setDirection(-1);
    setCurrentIndex((prev) => {
        if (isMobile) {
             return (prev - 1 + capabilities.length) % capabilities.length;
        } else {
             const desktopStep = 3;
             const maxStartIndex = Math.floor((capabilities.length - 1) / desktopStep) * desktopStep;
             return prev - desktopStep < 0 ? maxStartIndex : prev - desktopStep;
        }
    });
  }, [isMobile]);

  const onDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    const swipeConfidenceThreshold = 10000;
    const swipePower = Math.abs(offset.x) * velocity.x;

    if (swipePower < -swipeConfidenceThreshold) {
      handleNext(true);
    } else if (swipePower > swipeConfidenceThreshold) {
      handlePrev(true);
    }
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPaused, intervalTime, handleNext, lastInteraction]);

  const visibleCapabilities = [];
  for (let i = 0; i < itemsPerPage; i++) {
      visibleCapabilities.push(capabilities[(currentIndex + i) % capabilities.length]);
  }

  return (
    <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto bg-slate-900/50 rounded-3xl my-10">
      <ScrollReveal>
         <h2 className="font-serif text-3xl md:text-4xl text-slate-100 mb-12 text-center">Core Capabilities</h2>
      </ScrollReveal>

      <div
        className="relative group pb-16 md:pb-0"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
          {/* Navigation Buttons */}
          {!isMobile && (
             <>
                <button
                    onClick={() => handlePrev(true)}
                    className="absolute z-10 p-2 bg-slate-800/80 rounded-full text-slate-300 hover:text-white hover:bg-slate-700 transition-all border border-slate-700 hover:border-slate-500 cursor-pointer bottom-auto left-0 top-1/2 -translate-y-1/2 -translate-x-12"
                    aria-label="Previous capability"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={() => handleNext(true)}
                    className="absolute z-10 p-2 bg-slate-800/80 rounded-full text-slate-300 hover:text-white hover:bg-slate-700 transition-all border border-slate-700 hover:border-slate-500 cursor-pointer bottom-auto right-0 top-1/2 -translate-y-1/2 translate-x-12"
                    aria-label="Next capability"
                >
                    <ChevronRight size={24} />
                </button>
             </>
          )}

          <div className={`grid gap-12 overflow-hidden min-h-[300px] ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'}`}>
            <AnimatePresence initial={false} custom={{ direction, isMobile }} mode="popLayout">
                {visibleCapabilities.map((capability, index) => (
                   <motion.div
                      key={`${currentIndex}-${index}`}
                      custom={{ direction, isMobile }}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: isMobile ? 200 : 300, damping: 30 },
                        opacity: { duration: 0.2 }
                      }}
                      drag={isMobile ? "x" : false}
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={onDragEnd}
                      className="h-full touch-pan-y"
                   >
                      <div className="p-8 border border-slate-700/50 rounded-2xl bg-slate-900 hover:border-blue-500/30 transition-colors duration-300 h-full select-none cursor-grab active:cursor-grabbing">
                          <h3 className="text-2xl font-serif text-slate-100 mb-4">{capability.title}</h3>
                          <p className="text-slate-400 text-lg mb-6 font-sans">
                              {capability.description}
                          </p>
                      </div>
                   </motion.div>
                ))}
            </AnimatePresence>
          </div>
      </div>
    </section>
  )
}
