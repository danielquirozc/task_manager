'use client'
import { getGroups } from "@/app/actions/getGroups";
import GroupItem from "./GroupItem";
import { useEffect, useState } from "react";
import { groups } from "@prisma/client";
import CreateGroupButton from "../ActionsButtons/CreateGroup";
import Link from "next/link";

export default function GroupList() {
  const [groups, setGroups] = useState<groups[]>([])
  useEffect(() => {
    const fetchGroups = async () => {
      const data = await getGroups()
      setGroups(data)
    }
    fetchGroups()
  }, [])
  const groupItemElements = groups.map((group) => {
    return <GroupItem key={group.id} {...group} />;
  });

  return (
    <ul className="flex-1 flex flex-col p-2 gap-2">
      {
        groups.length > 0 ?
          <>
            {groupItemElements}
            <CreateGroupButton />
          </> :
          <p className="text-center text-slate-500 h-full place-content-center">Ups, you don&apos;t have any groups, let&apos;s <Link className="text-blue-600" href="/group/create">create one!</Link></p>
      }
    </ul>
  )
}