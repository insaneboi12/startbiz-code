import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import About from '../components/About';
import Seo from '../components/Seo';
import { brand } from '../data/content';
import {
  BenefitsPreview,
  FaqSection,
  FinalCta,
  FinderSection,
  IndustrySection,
  JourneySection,
  KnowledgePreview,
  PackagesSection,
  ProblemPathways,
  ProcessSection,
  StructureSection,
  WhyDifferent,
} from '../components/HomeExtras';

export default function Home() {
  return (
    <>
      <Seo title={brand.seoTitle} description={brand.seoDescription} />
      <Hero />
      <TrustBar />
      <ProblemPathways />
      <FinderSection />
      <JourneySection />
      <Services />
      <BenefitsPreview />
      <StructureSection />
      <IndustrySection />
      <WhyDifferent />
      <WhyChooseUs />
      <ProcessSection />
      <PackagesSection />
      <KnowledgePreview />
      <FaqSection />
      <About />
      <FinalCta />
    </>
  );
}
