import { Navbar, Footer, Hero, VModels, KNStats } from "@/components";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#0C0E19] overflow-hidden">
      {/* Background gradient effects */}
      {/* Variant 2 (Green) */}
      <div className="blob blob-green" />

      {/* Variant 3 (Blue) */}
      <div className="blob blob-blue" />

      <Navbar />
      <Hero />
      <VModels />
      <KNStats />
      <Footer />
    </main>
  );
}
