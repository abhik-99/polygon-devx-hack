import { publicKeyToAddress } from "@/lib/utils/publicKeyToAddress";
import prisma from "@/lib/utils/prisma";
import * as jose from "jose";
import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { signJwtAccessToken } from "@/lib/utils/jwt";

interface RequestBody {
  email: string;
  idToken: string;
  walletAddress: string;
}
export async function POST(req: NextRequest) {
  const body: RequestBody = await req.json();
  const { email, walletAddress, idToken } = body;

  const jwks = jose.createRemoteJWKSet(
    new URL("https://api-auth.web3auth.io/jwks")
  );

  const jwtDecoded = await jose.jwtVerify(idToken, jwks, {
    algorithms: ["ES256"],
  });
  const publicKeys = (jwtDecoded.payload as any).wallets.map(
    (wallet: { public_key: string }) => publicKeyToAddress(wallet.public_key)
  );
  if (publicKeys.includes(walletAddress)) {
    try {
      if (email && jwtDecoded.payload?.email === email) {
        const user = await prisma.user.findFirst({
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
          include: {
            walletAddresses: true,
          },
        });
        if (user) {
          const accessToken = signJwtAccessToken(user);
          return NextResponse.json({ ...user, accessToken });
        }
      }
      const user = await prisma.user.findFirst({
        where: {
          walletAddresses: {
            some: {
              walletAddress,
            },
          },
        },
        include: {
          walletAddresses: true,
        },
      });
      if (!user) {
        var data: Prisma.UserCreateInput = {};
        if (email && jwtDecoded.payload?.email === email)
          data = { ...data, email };
        data = { ...data, walletAddresses: { create: { walletAddress } } };
        const newUser = await prisma.user.create({
          data,
          include: {
            walletAddresses: true,
          },
        });

        const accessToken = signJwtAccessToken(newUser);
        return NextResponse.json({ ...newUser, accessToken });
      }

      const accessToken = signJwtAccessToken(user);
      return NextResponse.json({ ...user, accessToken });
    } catch (error) {
      console.log("[/api/signin] [POST] ERROR:", error);
      return NextResponse.json(null);
    }
  } else {
    return NextResponse.json(null);
  }
}
