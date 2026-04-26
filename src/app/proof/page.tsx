import type { Metadata } from "next";
import PageBackground from "@/components/PageBackground";
import VoicesSection from "@/components/VoicesSection";
import WorkGrid from "@/components/WorkGrid";
import { siteCopy } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Leadership Proof | Dave Manning",
  description: siteCopy.proof.intro,
};

export default function ProofPage() {
  return (
    <>
      <PageBackground />
      <main id="top" className="site-main">
        <WorkGrid />
        <VoicesSection />
      </main>
    </>
  );
}
