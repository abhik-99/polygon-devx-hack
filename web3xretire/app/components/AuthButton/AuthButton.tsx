"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useAccount } from "wagmi";
import { useClientRender, useAuth } from "@/lib/hooks";
import { BlackButton } from "../BlackButton/BlackButton";
import { useSession } from "next-auth/react";

export const AuthButton = () => {
  const isClientRender = useClientRender();
  const { isConnected } = useAccount();
  const { handleSignIn, handleSignOut } = useAuth();
  const pathname = usePathname();
  const {data: session} = useSession()
  console.log("SESSION:", session)
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
