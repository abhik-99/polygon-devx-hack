"use client";
import { useAccount } from "wagmi";
import jwt from "jsonwebtoken";
import AuthButton from "../components/AuthButton";
import { web3AuthInstance } from "../_utils/web3auth";
import { publicKeyToAddress } from "../_utils/publicKeyToAddress";
import HeroSection from "../sections/landing/HeroSection";
import AboutSection from "../sections/landing/AboutSection";
import TeamSection from "../sections/landing/TeamSection";
import TechStackSection from "../sections/landing/TechStackSection";

export default function Home() {
  const { isConnected } = useAccount();
  const handleUserInfo = async () => {
    const authInfo = await web3AuthInstance.authenticateUser();
    const decodedToken = jwt.decode(authInfo.idToken);
    console.log("USER INFO:", await web3AuthInstance.getUserInfo());
    console.log("AUTH INFO:", authInfo);
    console.log("DECODED TOKEN", decodedToken);
    console.log(
      "ETHEREUM ADDR:",
      publicKeyToAddress((decodedToken as any).wallets[0].public_key)
    );
  };
  return (
    <main className="min-h-screen min-w-full">
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <TechStackSection />
    </main>
  );
}
