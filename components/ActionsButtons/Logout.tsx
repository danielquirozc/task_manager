'use client'
import { logout } from "@/app/actions/logout";

export default function LogoutButton() {

  const handleClick = async () => {
    await logout()
  }

  return (
    <button  
      onClick={() => handleClick()}
      className={`text-red-500 action-btn`}
    >
      Logout
    </button>
  );
}