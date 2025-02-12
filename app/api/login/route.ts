import { prisma } from '@/lib/db/prisma';
import { createHmac } from 'crypto';
import { SignJWT } from 'jose'
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const { username, password } = await request.json();
  const user = await prisma.users.findFirst({
    where: {
      username: username,
    },
    select: {
      id: true,
      username: true,
      password: true
    }
  });  
  const secret = process.env.JWT_SECRET as string
  const hashedPassword = createHmac("sha256", secret).update(password).digest("hex");
  if (!user || user.password !== hashedPassword) {
    return new Response("Invalid username or password", { status: 401 });
  }

  const token = await new SignJWT({ id: user.id })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(new TextEncoder().encode(secret));

  const cookie = await cookies();
  cookie.set("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
  return new Response(JSON.stringify({ message: "Login successful" }), { status: 200 });
}