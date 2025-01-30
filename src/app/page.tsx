import { Footer } from "@/components/Footer";
import { SectionHero } from "@/components/SectionHero";
import { SectionPlus } from "@/components/SectionPlus";
import { SectionServices } from "@/components/SectionServices";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionServices />
      <SectionPlus />
      <Footer />
    </>
  );
}
