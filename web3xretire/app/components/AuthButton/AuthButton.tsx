"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useAccount } from "wagmi";
import { useClientRender, useAuth } from "@/app/_hooks";
import { BlackButton } from "../BlackButton/BlackButton";

export const AuthButton = () => {
  const isClientRender = useClientRender();
  const { isConnected } = useAccount();
  const { handleSignIn, handleSignOut } = useAuth();
  const pathname = usePathname();
  console.log("PATH NAME: ", pathname);
  if (!isClientRender) return <></>;
  if (isConnected)
    return (
      <button className="btn btn-outline btn-error" onClick={handleSignOut}>
        Sign Out
      </button>
    );
  return (
    <BlackButton hoverFontColor="orange" onClick={handleSignIn}>
      {pathname === "/" && `Start Investing`}
    </BlackButton>
  );
};
