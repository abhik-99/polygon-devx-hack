"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { web3AuthInstance } from "./_utils/web3auth";

export default function Home() {
  const { isConnected } = useAccount();
  const { connect, connectors, error } = useConnect();
  const { disconnect } = useDisconnect();
  const handleSignIn = () => {
    const web3AuthConnector = connectors[0];
    connect({ connector: web3AuthConnector });
  };
  const getUserInfo = async () => {
    if (isConnected) {
      console.log("USER INFO:", await web3AuthInstance.getUserInfo());
      console.log(
        "AUTHENTICATE USER:",
        await web3AuthInstance.authenticateUser()
      );
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        <h2>Hello World!</h2>
        {isConnected && <h3>Connected MF!</h3>}

        <button className="btn m-2" onClick={handleSignIn}>
          Sign In
        </button>
        <button className="btn m-2" onClick={disconnect as any}>
          {" "}
          Sign Out
        </button>
        <button className="btn m-2" onClick={getUserInfo}>
          Get User Info
        </button>
      </div>
    </main>
  );
}
