"use client";
import { useAccount } from "wagmi";
import jwt from "jsonwebtoken";
import { web3AuthInstance } from "../../lib/utils/web3auth";
import { publicKeyToAddress } from "../../lib/utils/publicKeyToAddress";
import HeroSection from "../sections/landing/HeroSection/HeroSection";
import AboutSection from "../sections/landing/AboutSection/AboutSection";
import TeamSection from "../sections/landing/TeamSection/TeamSection";
import TechStackSection from "../sections/landing/TechStackSection/TechStackSection";

export default function Home() {
  return (
    <main className="min-h-screen min-w-full">
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <TechStackSection />
    </main>
  );
}
