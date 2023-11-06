declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      // NEXT_PUBLIC_W3C_PID: string;
      // NEXT_PUBLIC_SIGNIN_MESSAGE: string;
      NEXTAUTH_SECRET: string;
      NEXTAUTH_URL: string;
      NEXT_PUBLIC_WEB3AUTH_CLIENT_ID: string;
      DATABASE_URL: string;
      URL: string;
      // SIWE_DOMAIN: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
