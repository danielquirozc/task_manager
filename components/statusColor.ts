import { taskstatus } from "@prisma/client";

export const statusColor: Record<taskstatus, string> = {
  [taskstatus.Do]: "--do-color",
  [taskstatus.Pending]: "--pending-color",
  [taskstatus.Done]: "--done-color"
}