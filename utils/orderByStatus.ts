import { TaskStatus } from "@/types/taskStatus";
import { tasks } from "@prisma/client";

export function orderByStatus(taskList : tasks[]) {
  const ordererTasks = {
    [TaskStatus.DO]: [],
    [TaskStatus.PENDING]: [],
    [TaskStatus.DONE]: [],
    ...Object.groupBy(taskList, (task) => task.status)
  }
  return ordererTasks
}