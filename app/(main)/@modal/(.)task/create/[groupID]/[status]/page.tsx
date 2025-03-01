import CreateTask from "@/components/Forms/CreateTask";
import Modal from "@/components/Modal/Modal";
import { TaskStatus } from "@/types/taskStatus";

export default async function CreateTaskPage({ params } : {
  params: Promise<{ groupID: number, status: TaskStatus }>
}) {
  const groupID = (await params).groupID;
  const status = (await params).status;
  return (
    <Modal>
      <CreateTask groupID={groupID} defaultStatus={status} />
    </Modal>
  );
}