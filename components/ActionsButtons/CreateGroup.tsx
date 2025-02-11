import Link from "next/link";

export default function CreateGroupButton() {
  return (
    <Link href="/group/create" className="w-full h-full text-center place-content-center font-medium text-blue-600">
      Create a Group
    </Link>
  );
}