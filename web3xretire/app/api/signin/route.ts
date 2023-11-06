import prisma from "@/lib/prisma";
import * as jose from "jose";
import { NextRequest } from "next/server";

interface RequestBody {
  email: string;
  idToken: string;
  walletAddress: string;
}
export async function POST(req: NextRequest) {
  console.log("REQ RECEIVED:", req)
  const body: any = await req.json();
  console.log("BODY RECEIVED", body)
  const { email, walletAddress, idToken } = body;

  const jwks = jose.createRemoteJWKSet(
    new URL("https://api-auth.web3auth.io/jwks")
  );

  const jwtDecoded = await jose.jwtVerify(idToken, jwks, {
    algorithms: ["ES256"],
  });

  if ((jwtDecoded.payload as any).wallets[0].public_key === walletAddress) {
    try {
      if (email) {
        const user = await prisma.user.findFirstOrThrow({
          where: {
            AND: [
              {
                email,
              },
              {
                walletAddresses: {
                  some: {
                    walletAddress,
                  },
                },
              },
            ],
          },
        });
        return new Response(JSON.stringify(user));
      }
      const user = await prisma.user.findFirstOrThrow({
        where: {
          walletAddresses: {
            some: {
              walletAddress,
            },
          },
        },
      });
      if(!user) {
        const newUser = await prisma.user.create({
          data: {
            email,
            walletAddresses: {
              create: {
                walletAddress
              }
            }
          }
        })
        return new Response(JSON.stringify(newUser));
      }
      return new Response(JSON.stringify(user));
    } catch (error) {
      console.log("[/api/signin] [POST] ERROR:", error);
      return new Response(JSON.stringify(null));
    }
  } else {
    return new Response(JSON.stringify(null));
  }
}
