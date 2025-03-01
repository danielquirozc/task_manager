import { Plus } from "lucide-react";
import Link from "next/link";

export default function CreateGroupButton() {
  return (
    <Link href="/group/create" className="w-full border my-2 flex items-center bg-white p-3 rounded-2xl text-center place-content-center font-medium text-blue-600">
      <Plus size={20} color="#000" />
    </Link>
  );
}