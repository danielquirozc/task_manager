'use client'
import { actionButtonStyle } from "./actionButtonStyle";
import { logout } from "@/app/actions/logout";

export default function LogoutButton() {

  const handleClick = async () => {
    await logout()
  }

  return (
    <button  
      onClick={() => handleClick()}
      className={`text-red-500 hover:border-red-500 ${actionButtonStyle}`}
    >
      Logout
    </button>
  );
}