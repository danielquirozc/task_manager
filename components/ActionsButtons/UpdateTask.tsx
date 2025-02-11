import Link from "next/link";
import { actionButtonStyle } from "./actionButtonStyle";

export default function UpdateTaskButton({ id }: { id: number }) {
  return (
    <Link href={`/task/update/${id}`} className={actionButtonStyle}>Update</Link>
  );
}