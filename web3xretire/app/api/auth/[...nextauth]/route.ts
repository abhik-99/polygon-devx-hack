import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "w3a-signin",
      name: "web3-signin",
      credentials: {
        w3aIdToken: { label: "ID Token", type: "text" },
        email: { label: "Email", type: "text" },
        walletAddress: { label: "Wallet Address", type: "text" },
      },
      async authorize(credentials, req) {
        try {
          console.log("THIS", `${process.env.URL}/api/login`, JSON.stringify({
            idToken: credentials?.w3aIdToken,
            email: credentials?.email,
            walletAddress: credentials?.walletAddress,
          }))
          const res = await fetch(`${process.env.URL}/api/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              idToken: credentials?.w3aIdToken,
              email: credentials?.email,
              walletAddress: credentials?.walletAddress,
            }),
          });
          console.log("THIS 2")
          const user = await res.json();
          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  session: { strategy: "jwt" },

  debug: process.env.NODE_ENV === "development",

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      session.user.address = token.sub;
      session.user.token = token;
      return session;
    },
  },
  pages: {
    signIn: "/",
    signOut: "/",
    error: "/",
    verifyRequest: "/e",
    newUser: "/r",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
