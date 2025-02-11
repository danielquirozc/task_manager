import { groups } from "@prisma/client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface GroupItemProps {
  id: groups["id"]
  title: groups["title"]
  pendingTask?: number
}

export default function GroupItem({ id, title, pendingTask }: GroupItemProps) {
  
  return (
    <li className="group bg-white border h-24 rounded-2xl border-gray-300">
      <Link className="flex items-center h-full p-3" href={`/group/${id}/`}>
        <div>
          <h2 className="font-semibold">{title}</h2>
          <p className="text-sm text-gray-400">{pendingTask} Pending Task</p>
        </div>
        <ChevronRight className="ml-auto duration-200 group-hover:scale-125" size={20} color="gray" />
      </Link>
    </li>
  );
}