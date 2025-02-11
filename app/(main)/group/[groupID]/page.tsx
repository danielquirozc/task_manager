import Kanban from "@/components/Kanban/Kanban";
import { getTaskByGroup } from "@/app/actions/getTaskByGroup";

export default async function Page({ params }: {
  params: Promise<{
    groupID: number
  }>
}) {
  const { groupID } = await params;
  const fetchedTasks = await getTaskByGroup(groupID);
  return (
    <>
      <Kanban listOfTask={fetchedTasks} />
    </>
  );
}