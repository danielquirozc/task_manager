import { TaskStatus } from "@/types/taskStatus";

export const statusColor: Record<TaskStatus, string> = {
  [TaskStatus.DO]: "bg-red-200",
  [TaskStatus.PENDING]: "bg-yellow-200",
  [TaskStatus.DONE]: "bg-green-200"
}