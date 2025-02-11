import { tags, tasks } from "@prisma/client";
import { statusColor } from "../statusColor";
import { TaskStatus } from "@/types/taskStatus";
import DeleteTaskButton from "../ActionsButtons/DeleteTask";
import UpdateTaskButton from "../ActionsButtons/UpdateTask";

export interface TaskPageProps extends tasks {
  status: TaskStatus
  tags: tags[]
}

export default function TaskPage({ id, title, description, status, tags }: TaskPageProps) {
  return (
    <>
    <div className="p-8 max-w-96">
      <div className="flex items-center justify-between gap-2">
        <h1 className="font-bold text-2xl">{title}</h1>
        <span className={`px-2 font-medium text-sm rounded ${statusColor[status]}`}>{status}</span>
      </div>
      <p className="mt-2 text-gray-500">{description}</p>
      <h2 className="mt-10 font-semibold">{tags.length > 0 ? "Tags" : ""}</h2>
      <ul className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={tag.id} className="px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">{tag.title}</li>
        ))}
      </ul>
    </div>
      <div className="flex mt-10 *:p-3">
        <DeleteTaskButton id={id} />
        <UpdateTaskButton id={id} />
      </div>
    </>
  );
}