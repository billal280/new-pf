import { CursorFollower } from "~/components/effects/CursorFollower";
import { Hero } from "~/components/sections/Hero";
import { About } from "~/components/sections/About";
import { TechStack } from "~/components/sections/TechStack";
import { Experience } from "~/components/sections/Experience";
import { Testimonials } from "~/components/sections/Testimonials";
import { ResumeCTA } from "~/components/sections/ResumeCTA";
import { Contact } from "~/components/sections/Contact";
import { getProfileImages } from "~/lib/profile";

export default function Home() {
  return (
    <>
      <CursorFollower />
      <Hero />
      <About profileImages={getProfileImages()} />
      <TechStack />
      <Experience />
      <Testimonials />
      <ResumeCTA />
      <Contact />
    </>
  );
}
