import CreateTask from "@/components/Forms/CreateTask";
import Modal from "@/components/Modal/Modal";

export default async function CreateTaskPage({ params } : {
  params: Promise<{ groupID: number }>
}) {
  const groupID = (await params).groupID;
  return (
    <Modal>
      <CreateTask groupID={groupID} />
    </Modal>
  );
}