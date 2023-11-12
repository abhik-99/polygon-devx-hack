"use client"
import React, { useEffect } from "react";
import { WagmiConfig } from "wagmi";
import { wagmiConfig, web3AuthInstance } from "../../lib/utils/web3auth";

export interface W3AuthContextProps {
  children: React.ReactNode;
}

const W3AuthContext = ({ children }: W3AuthContextProps) => {
  useEffect(() => {
    async function init() {
      await web3AuthInstance.init()
    }
    init()
  }, [])
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
};

export default W3AuthContext;
