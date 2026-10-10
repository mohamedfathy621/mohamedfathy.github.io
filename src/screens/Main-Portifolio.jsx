import AboutSection from "../profile-sections/About-section";
import EducationSection from "../profile-sections/education-section";
import ExperinceSection from "../profile-sections/Experince-Section";
import FloaterIcon from "../profile-sections/Floater-icon";
import ProfileFloaterSection from "../profile-sections/Profile-Floater-Section";
import ProjectSection from "../profile-sections/project-section";
import TechStackSection from "../profile-sections/Tech-Stack-section";

import { useRef, useEffect, useCallback, useState } from "react";

function MainPortifolio() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const projectRef = useRef(null);
  const techStackRef = useRef(null);
  const glossary = [
    { name: "About", ref: aboutRef },
    { name: "Experience", ref: experienceRef },
    { name: "Education", ref: educationRef },
    { name: "Projects", ref: projectRef },
    { name: "TechStack", ref: techStackRef },
  ];
  const [currentSection, setCurrentSection] = useState("About");

  const handleSectionTop = useCallback((sections) => {
    const focusedSection = sections.sort(
      (a, b) => a.currentPosition - b.currentPosition,
    )[0];

    setCurrentSection((prevSection) =>
      prevSection !== focusedSection.name ? focusedSection.name : prevSection,
    );
  }, []);
  const handleSectionSelection = (ref) => {
    if (!ref) return;
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  useEffect(() => {
    const sections = [
      { name: "About", ref: aboutRef, currentPosition: 0 },
      { name: "Experience", ref: experienceRef, currentPosition: 0 },
      { name: "Education", ref: educationRef, currentPosition: 0 },
      { name: "Projects", ref: projectRef, currentPosition: 0 },
      { name: "TechStack", ref: techStackRef, currentPosition: 0 },
    ];

    const onScroll = () => {
      sections.forEach(({ ref }) => {
        const element = ref.current;
        if (!element) return;

        handleSectionTop(
          sections.map((section) => {
            return {
              ...section,
              currentPosition: Math.abs(
                section.ref.current.getBoundingClientRect().top,
              ),
            };
          }),
        );
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [handleSectionTop]);

  return (
    <div className="grid grid-cols-2 gap-5 md:gap-40 px-[5%] py-[5%]">
      <ProfileFloaterSection>
        <div className="flex flex-col gap-4 mb-10">
          {glossary.map((section) => {
            return (
              <div
                className="group flex flex-row gap-4 items-center cursor-pointer"
                key={section.name}
                onClick={() => handleSectionSelection(section.ref)}
              >
                <div
                  className={`h-0 p-0 ${section.name === currentSection ? " w-8 md:w-16 border-gray-700" : " w-4 md:w-8 border-gray-400"}  transition-all duration-100 border group-hover:w-16 group-hover:border-gray-700`}
                ></div>
                <h1
                  className={`${section.name === currentSection ? "text-base md:text-xl font-semibold" : "text-xs md:text-lg font-normal"} transition-colors duration-100 group-hover:text-xl group-hover:font-semibold`}
                >
                  {section.name}
                </h1>
              </div>
            );
          })}
        </div>
        <FloaterIcon currentSection={currentSection}></FloaterIcon>
      </ProfileFloaterSection>
      <div className="flex flex-col gap-20 md:gap-35 col-start-2">
        <div ref={aboutRef} className="scroll-mt-20">
          <AboutSection />
        </div>

        <div ref={experienceRef} className="scroll-mt-20">
          <ExperinceSection />
        </div>

        <div ref={educationRef} className="scroll-mt-20">
          <EducationSection />
        </div>

        <div ref={projectRef} className="scroll-mt-20">
          <ProjectSection />
        </div>

        <div ref={techStackRef} className="scroll-mt-20 md:scroll-mt-0">
          <TechStackSection />
        </div>
      </div>
    </div>
  );
}

export default MainPortifolio;
