import { useAccount, useConnect, useDisconnect } from "wagmi";
import { web3AuthInstance } from "../utils/web3auth";
import { signIn, signOut, useSession } from "next-auth/react";

export function useAuth() {
  const { connectAsync, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: session } = useSession();
  const { isConnected } = useAccount();
  
  const handleSignIn = async () => {
    const web3AuthConnector = connectors[0];
    const userInfo = await connectAsync({ connector: web3AuthConnector });
    const profile = await web3AuthInstance.getUserInfo();
    const authInfo = await web3AuthInstance.authenticateUser();

    await signIn("w3a-signin", {
      w3aIdToken: authInfo.idToken,
      email: profile.email,
      walletAddress: userInfo.account,
      redirect: true,
      callbackUrl: "/dashboard"
    });
  };
  const handleSignOut = () => {
    if (isConnected) disconnect();

    if (session && session.user) signOut();
  };

  return {
    handleSignIn,
    handleSignOut,
  };
}
