import Modal from "@/components/Modal/Modal";
import { prisma } from "@/lib/db/prisma";
import TaskPage from "@/components/Modal/TaskPage";
import { TaskStatus } from "@/types/taskStatus";
import { getTagsByTask } from "@/app/actions/getTagsByTask";

export default async function TaskDetailView({ params } : {
  params: Promise<{ 
    taskID: number
    groupID: number
   }>
}) {
  const { taskID, groupID } = await params;
  if (taskID == undefined || groupID == undefined) return null;

  const task = await prisma.tasks.findUnique({
    where: {
      id: Number(taskID),
      group_id: Number(groupID)
    }
  });

  const tags = await getTagsByTask(Number(taskID));

  if (task == null) return null;
  return (
    <Modal>
      <TaskPage {...task} tags={tags} status={task.status as TaskStatus} />
    </Modal>
  );
}