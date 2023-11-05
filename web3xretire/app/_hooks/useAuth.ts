import { useConnect, useDisconnect } from "wagmi";

export function useAuth() {
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

  return {
    handleSignIn, handleSignOut
  }
}