"use client";
import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useClientRender } from "@/app/_hooks/useClientRender";

const AuthButton = () => {
  const isClientRender = useClientRender();
  const { isConnected } = useAccount();
  const { connectAsync, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const handleSignIn = async () => {
    const web3AuthConnector = connectors[0];
    const result = await connectAsync({ connector: web3AuthConnector });
    console.log(
      "USER AUTH INFO:",
      result
    );
  };
  const handleSignOut = () => {
    disconnect();
  };

  if (!isClientRender) return <></>;
  if (isConnected)
    return (
      <button className="btn btn-outline btn-error" onClick={handleSignOut}>
        Sign Out
      </button>
    );
  return (
    <button className="btn btn-outline rounded-lg" onClick={handleSignIn}>
      Sign In
    </button>
  );
};

export default AuthButton;
