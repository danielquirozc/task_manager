import { TaskStatus } from "@/types/taskStatus"
import { useDroppable } from "@dnd-kit/core"
import { taskstatus } from "@prisma/client"
import Link from "next/link"
import { useParams } from "next/navigation"
import TaskItem from "../Task/TaskItem"
import { TaskWithTags } from "./Kanban"

interface TaskListProps {
  title: string
  tasks: TaskWithTags[]
  status: taskstatus
}

export default function TaskList({ title, tasks, status }: TaskListProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: title,
    data: { groupName: status },
  })


  const params = useParams()
  if (params.groupID == undefined) return null
  const groupID = Number(params?.groupID)
  return (
    <ul
      ref={setNodeRef}
      className={`${isOver ? "border-blue-400" : ""} p-3 font-geist rounded-2xl max-h-[90%] border-2`}
    >
      <div className="flex justify-between border-b-2 p-1">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-dark">
            {title}
          </h2>
        </div>
        <Link className="text-bold text-lg" href={`/task/create/${groupID}/${status}`}>+</Link>
      </div>
      {tasks?.map((task) => (
        <TaskItem key={task.id} {...task} status={task.status as TaskStatus} />
      ))
      }
    </ul>
  );
}