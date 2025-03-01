import { orderByStatus } from "@/utils/orderByStatus";
import { tasks, taskstatus } from "@prisma/client";
import { useState } from "react";
import { changeStatus } from "../actions/changeStatus";
import { TaskWithTags } from "@/components/Kanban/Kanban";

type Props = {
  taskCollection: TaskWithTags[]
}

type updateTaskStatusProps = { taskID: number, newStatus: taskstatus, oldStatus: taskstatus }

type GroupedTasks = {
  [taskstatus.Do]: TaskWithTags[]
  [taskstatus.Pending]: TaskWithTags[]
  [taskstatus.Done]: TaskWithTags[]
}

export function useKanban({ taskCollection }: Props) {
  const [tasks, setTasks] = useState<GroupedTasks>(orderByStatus(taskCollection));

  const moveTask = async ({ taskID, newStatus, oldStatus }: updateTaskStatusProps) => {
    const clonedTasks = structuredClone(tasks);
    const taskToUpdate = clonedTasks[oldStatus].find((task) => task.id === taskID);
    if (!taskToUpdate) return
    const taskToUpdateIndex = clonedTasks[oldStatus].indexOf(taskToUpdate);
    clonedTasks[oldStatus].splice(taskToUpdateIndex, 1);
    clonedTasks[newStatus].push(taskToUpdate);
    taskToUpdate.status = newStatus;
    console.log({ taskToUpdate, taskToUpdateIndex, clonedTasks });
    
    await changeStatus({ id: taskID, newStatus });
    setTasks(clonedTasks);
  }

  return { tasks, setTasks, moveTask }
}