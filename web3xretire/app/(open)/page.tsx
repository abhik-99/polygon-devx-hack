"use client";
import { useAccount } from "wagmi";
import jwt from "jsonwebtoken";
import { web3AuthInstance } from "../_utils/web3auth";
import { publicKeyToAddress } from "../_utils/publicKeyToAddress";
import HeroSection from "../sections/landing/HeroSection/HeroSection";
import AboutSection from "../sections/landing/AboutSection";
import TeamSection from "../sections/landing/TeamSection";
import TechStackSection from "../sections/landing/TechStackSection";

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
