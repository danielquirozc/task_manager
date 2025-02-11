import { Component } from "lucide-react";
import GroupList from "./GroupList";
import CreateGroupButton from "../ActionsButtons/CreateGroup";

export default function SideBar() {  
  return (
    <aside className="flex font-geist flex-col h-screen w-1/4 border-r border-gray-300">
      <header className="flex justify-center items-center w-full h-14 gap-1 text-dark bg-white shadow-md">
        <h2 className="text-sm font-semibold">GROUPS</h2>
        <Component size={18} />
      </header>
      <GroupList />
      <footer className="flex justify-center items-center hover:border-blue-400 hover:border place-content-center border-t border-gray-300 w-full h-14 bg-white">
        <CreateGroupButton />
      </footer>
    </aside>
  );
}