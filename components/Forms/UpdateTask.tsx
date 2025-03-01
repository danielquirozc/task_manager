'use client'
import { updateTask } from "@/app/actions/updateTask";
import Input from "../Input";
import { toast } from "sonner";
import { tags, tasks } from "@prisma/client";
import TagPicker from "./TagPicker";
import { useState } from "react";
import SubmitButton from "./SubmitButton";

export interface UpdateTaskFormProps extends tasks {
  tags: tags[]
}

export default function UpdateTaskForm({ id, title, description, tags }: UpdateTaskFormProps) {
  const [selectedTags, setSelectedTags] = useState<tags[]>(tags);

  const handleTagChange = (tag: tags) => {
    if (!selectedTags.some((t) => t.id === tag.id)) {
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
    const response = updateTask({
      id,
      title: data.Title as string,
      description: data.Description as string,
      tags: selectedTags
    });
    toast.promise(response, {
      loading: "Updating task...",
      success: "Task updated!",
      error: (err) => err,
    });
  };

  return (
    <form onSubmit={handleSubmit} method="post"
      className="flex w-full h-full font-geist items-center justify-center flex-col gap-4 p-8 bg-white rounded-xl"
    >
      <Input type="text" name="Title" defaultValue={title} />
      <Input type="text" name="Description" defaultValue={description} />
      <TagPicker selectedTags={selectedTags} handleTagChange={handleTagChange} />
      <SubmitButton text="Update Task" />
    </form>
  );
}