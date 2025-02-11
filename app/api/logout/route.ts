import { cookies } from "next/headers";

export async function GET(req: Request) {
  const storedCookies = await cookies()
  if (storedCookies.has('token')) {
    storedCookies.delete('token')
    return Response.redirect(new URL('/login', req.url))
  }
  
  return Response.redirect(new URL('/login', req.url))
}