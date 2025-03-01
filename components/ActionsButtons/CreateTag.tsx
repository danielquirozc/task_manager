import Link from "next/link";

export default function CreateTagButton() {
  return (
    <Link href={`/create-tag`}
      className={`text-green-500 action-btn`}
    >
      Create a Tag
    </Link>
  );
}