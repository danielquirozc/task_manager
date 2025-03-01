"use client"
import { createTask } from "@/app/actions/createTask";
import Input from "../Input";
import { toast } from "sonner";
import TagPicker from "./TagPicker";
import { useState } from "react";
import { tags } from "@prisma/client";
import { TaskStatus } from "@/types/taskStatus";
import SubmitButton from "./SubmitButton";

export default function CreateTask({ groupID, defaultStatus }: { 
  groupID: number,
  defaultStatus?: TaskStatus
}) {
  const [selectedTags, setSelectedTags] = useState<tags[]>([]);

  
  const handleTagChange = (tag : tags) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
    else {
      setSelectedTags(selectedTags.filter((t) => t.id !== tag.id));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const response = createTask({ 
      title: data.Title as string, 
      description: data.Description as string, 
      groupID,
      defaultStatus,
      tags: selectedTags
    });

    toast.promise(response, {
      loading: "Creating task...",
      success: "Task created!",
      error: (err) => err
    })
  }

  return (
    <form onSubmit={handleSubmit} method="post"
      className="flex w-full h-full font-geist items-center justify-center flex-col gap-4 p-8 bg-white rounded-xl"
    >
      <Input type="text" name="Title" defaultValue="" />
      <Input type="text" name="Description" defaultValue="" />
      <TagPicker selectedTags={selectedTags} handleTagChange={handleTagChange} />
      <SubmitButton text="Create a Task" />
    </form>
  );
}