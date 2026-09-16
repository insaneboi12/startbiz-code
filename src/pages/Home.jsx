import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import About from '../components/About';
import Seo from '../components/Seo';
import { brand } from '../data/content';
import {
  AskStartbizSection,
  FaqSection,
  FinalCta,
  FinderSection,
  IndustrySection,
  JourneySection,
  KnowledgePreview,
  ProblemPathways,
  SolutionFinderSection,
  StructureSection,
} from '../components/HomeExtras';

export default function Home() {
  return (
    <>
      <Seo title={brand.seoTitle} description={brand.seoDescription} />
      <Hero />
      <TrustBar />
      <ProblemPathways />
      <SolutionFinderSection />
      <Services />
      <JourneySection />
      <WhyChooseUs />
      <AskStartbizSection />
      <StructureSection />
      <IndustrySection />
      <FinderSection />
      <KnowledgePreview />
      <FaqSection />
      <About />
      <FinalCta />
    </>
  );
}
