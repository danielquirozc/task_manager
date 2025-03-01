'use client'
import GroupList from "./GroupList";
import Image from "next/image";
import { PanelLeftClose } from "lucide-react";
import {  useState } from "react";
import UserCard from "./UserCard";

export default function SideBar() {  
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <aside className={`flex group ${open ? 'w-72' : 'w-24 close'} duration-150 font-geist bg-gradient-to-r from-blue-100 to-slate-100 flex-col h-screen border-r-2`}>
      <header className="flex justify-between px-3 items-center w-full h-14 text-dark">
        <div className="flex items-center gap-3 ">
          <Image className="w-8 h-8 rounded-md" src="/logo.png" alt="Logo" width={100} height={100} />
          <h2 className="text-xl font-bold group-[.close]:hidden">ByteTask</h2>
        </div>
        <PanelLeftClose onClick={() => handleClick()} className="text-gray-500 cursor-pointer group-[.close]:rotate-180" />
      </header>
      <GroupList />
      <footer className="flex justify-center bg-gradient-to-t from-orange-100 to-transparent items-center place-content-center w-full">
        <UserCard />
      </footer>
    </aside>
  );
}