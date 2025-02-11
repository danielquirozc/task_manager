import { useDroppable } from "@dnd-kit/core"
import { tasks } from "@prisma/client"
import TaskItem from "./TaskItem"
import { Circle } from "lucide-react"
import { statusColor } from "../statusColor"
import { TaskStatus } from "@/types/taskStatus"

interface TaskListProps {
  title: TaskStatus
  taskCount: number
  tasks?: tasks[]
}

export default function TaskList({ title, taskCount, tasks }: TaskListProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: title,
    data: { groupName: title },
  })
  return (
    <ul
      ref={setNodeRef}
      className={`bg-white p-3 font-geist rounded-2xl max-h-[90%] ${taskCount > 10 ? "overflow-y-scroll" : null} border border-gray-300 ${isOver ? "border-blue-500" : ""}`}
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Circle size={17} color="gray" className={`rounded-full ${statusColor[title]}`}/>
          <h2 className="font-medium">
            {title}
          </h2>
        </div>
        <span>{taskCount}</span>
      </div>
      {tasks?.map((task) => (
        <TaskItem key={task.id} {...task} status={task.status as TaskStatus} />
      ))
      }
    </ul>
  );
}