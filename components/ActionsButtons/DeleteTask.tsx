'use client'
import { deleteTask } from "@/app/actions/deleteTask";
import { actionButtonStyle } from "./actionButtonStyle";
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
    <button onClick={() => handleClick()} className={`text-red-500 hover:border-red-500 ${actionButtonStyle}`}>Delete</button>
  );
}