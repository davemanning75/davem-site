import type { Metadata } from "next";
import CareerPanels from "@/components/CareerPanels";
import PageBackground from "@/components/PageBackground";

export const metadata: Metadata = {
  title: "Career | Dave Manning",
  description:
    "Leadership progression across AI, cloud, and enterprise architecture — from technical lead to Director of Architecture.",
};

export default function CareerPage() {
  return (
    <>
      <PageBackground />
      <main id="top" className="site-main">
        <CareerPanels />
      </main>
    </>
  );
}
