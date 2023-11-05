import { AuthButton, BlackButton } from "@/app/components";
import React from "react";

const HeroSection = () => {
  return (
    <div className="min-w-full bg-primary text-black rounded-lg rounded-t-none p-10 flex flex-col items-center  justify-center text-center">
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
        <BlackButton hoverFontColor="text-primary">Get Started</BlackButton>
        <AuthButton />
        <BlackButton hoverFontColor="text-primary">Create Fund</BlackButton>
      </div>
    </div>
  );
};

export default HeroSection;
