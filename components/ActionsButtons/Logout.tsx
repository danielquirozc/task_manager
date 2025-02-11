import Link from "next/link";
import { actionButtonStyle } from "./actionButtonStyle";

export default function LogoutButton() {
  return (
    <Link href="/api/logout" 
      className={`text-red-500 hover:border-red-500 ${actionButtonStyle}`}
    >
      Logout
    </Link>
  );
}