import { groups } from "@prisma/client";
import { ChevronRight, CircleCheck, CircleCheckBig } from "lucide-react";
import Link from "next/link";

interface GroupItemProps {
  id: groups["id"]
  title: groups["title"]
  pendingTask?: number
}

export default function GroupItem({ id, title }: GroupItemProps) {
  
  return (
    <li className="group bg-white border rounded-2xl border-gray-300">
      <Link className="flex items-center justify-center h-full p-3" href={`/group/${id}/`}>
        <div className="flex gap-2 items-center justify-center">
          <CircleCheck className="" size={20} color="#6a7282" />
          <h2 className="font-semibold group-[.close]:hidden starting:ml-5 duration-300">{title}</h2>
        </div>
        <ChevronRight className="ml-auto duration-200 group-hover:scale-125 group-[.close]:hidden" size={20} color="gray" />
      </Link>
    </li>
  );
}