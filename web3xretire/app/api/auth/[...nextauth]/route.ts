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
          const res = await fetch(`${process.env.URL}/api/signin`, {
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

  debug: process.env.NODE_ENV === "development",

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user }) {

      return {...token, ...user};
    },
    async session({ session, token }) {
      session.user = token as any;

      return session;
    },
  },
  pages: {
    signIn: "/",
    signOut: "/",
    error: "/",
    verifyRequest: "/",
    newUser: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
