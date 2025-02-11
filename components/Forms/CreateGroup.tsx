'use client'
import { createGroup } from "@/app/actions/createGroup";
import Input from "../Input";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function CreateGroup() {

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get('Title') as string;
    const response = createGroup({ title });
    toast.promise(response, {
      loading: "Creating a Group...",
      success: "Group created successfully.",
      error: "Failed to create a Group."
    });
    router.push('/');
  }

  return (
    <form onSubmit={handleSubmit} method="post"
      className="flex w-full h-full font-geist items-center justify-center flex-col gap-4 p-8 bg-white rounded-xl"
    >
      <Input type="text" name="Title" defaultValue="" />
      <button 
        className="bg-blue-300 w-full border border-gray-400 font-semibold text-slate-700 py-2 rounded-lg" 
        type="submit"
      >
        Create a Group
      </button>
    </form>
  );
}