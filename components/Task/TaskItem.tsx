import { useDraggable } from "@dnd-kit/core";
import { GripVertical } from "lucide-react";
import { TaskWithTags } from "../Kanban/Kanban";
import { statusColor } from "../statusColor";
import TagList from "./TagList";
import UpdateTaskButton from "../ActionsButtons/UpdateTask";
import DeleteTaskButton from "../ActionsButtons/DeleteTask";

export default function TaskItem({ id, title, status, description, tagsOnTasks }: TaskWithTags) {
  const { listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: {
      associatedGroup: status
    },
  });

  const tagsArray = Object.values(tagsOnTasks).map(item => item.tags);
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    opacity: '0.8',
    scale: '1.1',
    zIndex: 100,
  } : undefined;

  return (
    <li ref={setNodeRef}
      style={{ ...style, backgroundColor: `var(${statusColor[status]})` }}
      className={`flex flex-col relative justify-between duration-300 overflow-hidden transition-[scale] my-2 p-2 rounded-xl`}
    >
      <TagList tags={tagsArray} status={status} />
      <div className="flex mt-3 justify-between items-center gap-2">
        <div className="flex flex-col gap-2">
          <h2 style={{ color: `var(${statusColor[status]}-secundary)` }} className="font-semibold">{title}</h2>
          <p style={{ color: `var(${statusColor[status]}-secundary)` } } className="text-sm">Note: {description}</p>
        </div>
        <div className="flex">
      <GripVertical {...listeners} size={16} className="text-black/50 absolute top-1/2 right-1 cursor-grab active:cursor-grabbing" />
        </div>
      </div>
      <div className="flex justify-end gap-4 mt-2">
        <DeleteTaskButton id={id} />
        <UpdateTaskButton id={id} />
      </div>
    </li>
  );
}