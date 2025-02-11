import { TaskStatus } from "@/types/taskStatus";
import { orderByStatus } from "@/utils/orderByStatus";
import { tasks } from "@prisma/client";
import { useState } from "react";
import { changeStatus } from "../actions/changeStatus";

type Props = {
  listOfTask: tasks[]
}

type updateTaskStatusProps = { taskID: number, newStatus: TaskStatus, oldStatus: TaskStatus }

type GroupedTasks = {
  [TaskStatus.DO]: tasks[]
  [TaskStatus.PENDING]: tasks[]
  [TaskStatus.DONE]: tasks[]
}

export function useKanban({ listOfTask }: Props) {
  const [tasks, setTasks] = useState<GroupedTasks>(orderByStatus(listOfTask))

  const updateTaskStatus = async ({ taskID, newStatus, oldStatus }: updateTaskStatusProps) => {
    const clonedTasks = structuredClone(tasks);
    const taskToUpdate = clonedTasks[oldStatus].find((task) => task.id === taskID);
    if (!taskToUpdate) return
    const taskToUpdateIndex = clonedTasks[oldStatus].indexOf(taskToUpdate);
    clonedTasks[oldStatus].splice(taskToUpdateIndex, 1);
    clonedTasks[newStatus].push(taskToUpdate);
    taskToUpdate.status = newStatus;
    await changeStatus({ id: taskID, newStatus });
    setTasks(clonedTasks);
  }

  return { tasks, setTasks, updateTaskStatus }
}