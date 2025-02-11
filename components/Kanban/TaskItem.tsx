import { useDraggable } from "@dnd-kit/core";
import { GripVertical, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { statusColor } from "../statusColor";
import { TaskStatus } from "@/types/taskStatus";

export default function TaskItem({ id, title, status, group_id }: {
  id: number
  title: string
  status: TaskStatus
  group_id: number
}) {
  const { listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: { 
      associatedGroup: status 
    },
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    opacity: '0.8',
    scale: '1.1',
    zIndex: 100
  } : undefined;
  return (
    <li ref={setNodeRef} style={style}
      className={`${statusColor[status]} flex relative justify-between items-center duration-300 overflow-hidden transition-[scale] my-2 p-2 rounded-xl`}
    >
      <div className="flex items-center gap-2">
        <h3 className="peer">{title}</h3>
        <Link href={`/task/${id}/${group_id}`}>
          <SquareArrowOutUpRight
            size={16}
            className="text-dark"
          />
        </Link>
      </div>
      <GripVertical {...listeners} size={16} className="text-dark cursor-grab active:cursor-grabbing" />
    </li>
  );
}