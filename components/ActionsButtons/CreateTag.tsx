import Link from "next/link";
import { actionButtonStyle } from "./actionButtonStyle";

export default function CreateTagButton() {
  return (
    <Link href={`/create-tag`}
      className={`text-green-500 ${actionButtonStyle}`}
    >
      Create a Tag
    </Link>
  );
}