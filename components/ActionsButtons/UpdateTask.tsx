import { PencilLine } from "lucide-react";
import Link from "next/link";

export default function UpdateTaskButton({ id }: { id: number }) {
  return (
    <Link href={`/task/update/${id}`} className="cursor-pointer">
      <PencilLine size={20} className="text-black/30" />
    </Link>
  );
}