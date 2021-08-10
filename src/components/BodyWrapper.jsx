import { BodySection } from "./const";
import AboutMe from "./about-me/AboutMe";
import Skills from "./skills/Skills";

export default function BodyWrapper() {
  return (
    <BodySection className="body-background w-full h-auto mx-auto py-10 md:py-16 px-10 md:px-16">
      <AboutMe />
      <Skills />
    </BodySection>
  );
}
