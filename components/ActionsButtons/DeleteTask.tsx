'use client'
import { deleteTask } from "@/app/actions/deleteTask";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function DeleteTaskButton({ id }: { id: number }) {

  const handleClick = () => {
    const response = deleteTask(id);
    toast.promise(response, {
      loading: 'Deleting task...',
      success: 'Task deleted successfully',
      error: 'Error deleting task'
    })
  };

  return (
    <button onClick={() => handleClick()} className={`text-black/30 cursor-pointer`}>
      <Trash2 size={20} />
    </button>
  );
}