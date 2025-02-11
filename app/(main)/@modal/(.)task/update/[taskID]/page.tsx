import UpdateTaskForm from "@/components/Forms/UpdateTask";
import Modal from "@/components/Modal/Modal";
import { prisma } from "@/lib/db/prisma";

export default async function UpdateTask({ params }: {
  params: Promise<{
    taskID: number
  }>
}) {
  const { taskID } = await params

  const task = await prisma.tasks.findUnique({
    where: {
      id: Number(taskID)
    },
  })
  if (task == null) return null
  const tags = await prisma.tags.findMany({
    where: {
      tagsOnTasks: {
        some: {
          task_id: Number(taskID)
        }
      }
    }
  })

  return (
    <Modal>
      <UpdateTaskForm {...task} tags={tags} />
    </Modal>
  );
}