import { TaskWithTags } from "@/components/Kanban/Kanban";
import { taskstatus } from "@prisma/client";

export function orderByStatus(taskList : TaskWithTags[]) {
  const ordererTasks = {
    [taskstatus.Do]: [],
    [taskstatus.Pending]: [],
    [taskstatus.Done]: [],
    ...Object.groupBy(taskList, (task) => task.status)
  }
  return ordererTasks
}