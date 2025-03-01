import { getTaskByGroup } from "@/app/actions/getTaskByGroup";
import Kanban from "@/components/Kanban/Kanban";

export default async function Page({ params }: {
  params: Promise<{
    groupID: number
  }>
}) {
  const { groupID } = await params;
  const { tasks, error } = await getTaskByGroup(groupID);
  
  return (
    <>
      {
        error || !tasks ? (
          <p className="text-center text-slate-500 h-full place-content-center text-lg">{error}</p>
        ) : (
          <Kanban taskCollection={tasks} />
        )
      }
    </>
  );
}