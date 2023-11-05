import { AuthButton, BlackButton } from "@/app/components";
import React from "react";
import styles from "./HeroSection.module.css"
const HeroSection = () => {
  return (
    <div className={styles.container}>
      <p className="tracking-tighter text-3xl">
        with <b>BlockSip</b>
      </p>
      <h1 className="text-8xl font-extrabold leading-[100px]">
        Unleash the Untamed Potential of Cryptocurrency Investment
      </h1>
      <p className="w-2/3 my-8 text-2xl">
        Dive headfirst into the world of crypto investment with a platform that
        rejects the ordinary. We're here to disrupt the status quo and redefine
        how you invest. Welcome to the raw, unfiltered future of finance.
      </p>
      <div className="w-1/2 flex items-center justify-evenly">
        <BlackButton hoverFontColor="orange">Get Started</BlackButton>
        <AuthButton />
        <BlackButton hoverFontColor="orange">Create Fund</BlackButton>
      </div>
    </div>
  );
};

export default HeroSection;
