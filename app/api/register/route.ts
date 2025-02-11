import { prisma } from "@/lib/db/prisma";
import { createHmac } from "crypto";
export async function POST(request: Request) {
  const { username, password } = await request.json();
  if (!username || !password) {
    return new Response("Missing username or password", { status: 400 });
  }
  const secret = process.env.JWT_SECRET as string;
  const hash = createHmac("sha256", secret).update(password).digest("hex");
  await prisma.users.create({
    data: {
      username,
      password: hash,
    },
  });
  return new Response(JSON.stringify({ message: "User created" }), {status: 201});
}