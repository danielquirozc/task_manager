"use client"
import Link from "next/link";
import { useParams } from "next/navigation";
import { actionButtonStyle } from "./actionButtonStyle";

export default function AddTaskButton() {
  const params = useParams()
  if (params.groupID == undefined) return null
  const groupID = Number(params?.groupID)
  
  return (
    <Link href={`/task/create/${groupID}`} 
      className={actionButtonStyle}
      >
      Create a Task
    </Link>
  );
}