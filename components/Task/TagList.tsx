import { tags, taskstatus } from "@prisma/client";
import { statusColor } from "../statusColor";

export default function TagList({ tags, status }: {
  tags: tags[],
  status: taskstatus
}) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li style={{ color: `var(${statusColor[status]}-secundary)` }} key={tag.id} className="px-2 py-1 border text-xs font-medium text-inherit bg-white/70 rounded-md">#{tag.title}</li>
      ))}
    </ul>
  );
}