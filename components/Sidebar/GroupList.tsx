import { getGroups } from "@/app/actions/getGroups";
import GroupItem from "./GroupItem";

export default async function GroupList() {
  const groups = await getGroups();
  const groupItemElements = groups.map((group) => {
    return <GroupItem key={group.id} {...group} />;
  });

  return (
    <ul className="flex-1 flex flex-col p-2 gap-2">
      {
        groupItemElements.length > 0 ? 
        groupItemElements :
        <p className="text-center text-slate-500 h-full place-content-center">Ups, you don&apos;t have any groups, let&apos;s create one!</p> 
      }
    </ul>
  );
}