"use client"
import { createTag } from "@/app/actions/createTag";
import Input from "../Input";
import { toast } from "sonner";
import SubmitButton from "./SubmitButton";

export default function CreateTag() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    
    const response = createTag({ title: data.Tag as string });
    toast.promise(response, {
      success: "Tag created!",
      loading: "Creating tag...",
      error: (err) => err.message
    })
  }

  return (
    <form onSubmit={handleSubmit} method="post"
      className="flex w-full h-full font-geist items-center justify-center flex-col gap-4 p-8 bg-white rounded-xl"
    >
      <Input type="text" name="Tag" defaultValue="" />
      <SubmitButton text="Create a Tag" />
    </form>
  );
}