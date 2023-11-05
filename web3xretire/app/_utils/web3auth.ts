import { Web3AuthConnector } from "@web3auth/web3auth-wagmi-connector";
import { Web3Auth } from "@web3auth/modal";
import { createConfig, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { polygonMumbai, sepolia } from "viem/chains";
import { CHAIN_NAMESPACES } from "@web3auth/base";

// Configure chains & providers with the Alchemy provider.
// Popular providers are Alchemy (alchemy.com), Infura (infura.io), Quicknode (quicknode.com) etc.
const { chains, publicClient, webSocketPublicClient } = configureChains([polygonMumbai, sepolia], [publicProvider()]);

// Instantiating Web3Auth
export const web3AuthInstance = new Web3Auth({
  clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID,
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: "0x" + chains[0].id.toString(16),
    rpcTarget: chains[0].rpcUrls.default.http[0], // This is the public RPC we have added, please pass on your own endpoint while creating an app
    displayName: chains[0].name,
    tickerName: chains[0].nativeCurrency?.name,
    ticker: chains[0].nativeCurrency?.symbol,
    blockExplorer: chains[0]?.blockExplorers.default?.url,
  },
  web3AuthNetwork: "sapphire_mainnet",
  uiConfig: {
    appName: "BlockSip",
  }
});

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new Web3AuthConnector({
      chains,
      options: {
        web3AuthInstance,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});