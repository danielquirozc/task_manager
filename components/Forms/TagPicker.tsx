"use client"

import { getTags } from "@/app/actions/getTags";
import { tags } from "@prisma/client";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function TagPicker({ selectedTags, handleTagChange } : {
  selectedTags: tags[],
  handleTagChange: (tag: tags) => void
}) {
  const [tags, setTags] = useState<tags[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const fetchTags = async () => {
      const data = await getTags()
      setTags(data);
    }
    fetchTags()
  },[])

  const selectedTagsList = selectedTags.map((tag,i) =>
    <li key={i} className="px-2 border border-gray-400 rounded-lg">{tag.title}</li>
  );

  const tagList = tags.map((tag,i) => (
    <label key={i} className="flex items-center p-2 gap-2 h-10 hover:bg-slate-100">
      <input
        className="checked:bg-blue-500"
        type="checkbox"
        checked={selectedTags.some((t) => t.id === tag.id)}
        value={tag.title}
        onChange={() => handleTagChange(tag)}
      />
      {tag.title}
    </label>
  ))

  return (
    <div className="relative z-10 group w-full h-full">
      <label>

      <div className="border cursor-pointer border-gray-400 rounded-lg min-h-10 flex justify-between flex-wrap items-center gap-2 p-2">
        <ul className="flex flex-wrap gap-2 max-w-72 flex-1">
          {selectedTagsList.length ? selectedTagsList : <p className="text-gray-400">No tags selected</p>}
        </ul>
        <button
          className="text-gray-400 hover:text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          <ChevronDown className={`duration-300 ${isOpen ? "rotate-180" : ""}`} size={20} />
        </button>
      </div>
      </label>
      <div className={`absolute flex-col overflow-hidden border hover:overflow-y-scroll max-h-52 my-2 rounded-lg bg-white w-full ${isOpen ? "block" : "hidden"}`}>
        {tagList}
      </div>
    </div>
  );
}