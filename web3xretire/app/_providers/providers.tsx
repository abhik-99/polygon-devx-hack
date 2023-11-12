"use client";
import React from "react";
import AuthContext from "./AuthContext";
import W3AuthContext from "./W3AuthContext";

type ProviderType = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProviderType) => {
  return <AuthContext><W3AuthContext>{children}</W3AuthContext></AuthContext>;
};

export default Providers;
