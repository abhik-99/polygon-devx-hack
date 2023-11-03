"use client";
import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useClientRender } from "@/app/_hooks/useClientRender";

const AuthButton = () => {
  const isClientRender = useClientRender();
  const { isConnected } = useAccount();
  const { connect, connectors, error } = useConnect();
  const { disconnect } = useDisconnect();
  const handleSignIn = () => {
    const web3AuthConnector = connectors[0];
    connect({ connector: web3AuthConnector });
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
