'use client'
import { tasks } from "@prisma/client";
import { TaskStatus } from "@/types/taskStatus";
import TaskList from "./TaskList";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useKanban } from "@/app/hooks/useKanban";
import { toast } from "sonner";

interface Props {
  listOfTask: tasks[]
}

export default function Kanban({ listOfTask }: Props) {
  const { tasks,  updateTaskStatus } = useKanban({ listOfTask });
  
  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!active || !over || active.id === over.id) return
    const taskID = active.id as number;
    const newStatus = over.id as TaskStatus;
    const oldStatus = active.data.current?.associatedGroup as TaskStatus;
    const response = updateTaskStatus({ taskID, newStatus, oldStatus });
    toast.promise(response, {
      loading: 'Updating task status...',
      success: 'Task status updated successfully',
      error: 'Error updating task status'
    })
  }
  
  return (
    <DndContext onDragEnd={onDragEnd}>
      <div className="flex justify-center m-5 *:flex-1 *:h-full items-center h-full w-full flex-row gap-10">
        <TaskList title={TaskStatus.DO} taskCount={tasks.Do.length} tasks={tasks.Do} />
        <TaskList title={TaskStatus.PENDING} taskCount={tasks.Pending.length} tasks={tasks.Pending} />
        <TaskList title={TaskStatus.DONE} taskCount={tasks.Done.length} tasks={tasks.Done} />
      </div>
    </DndContext>
  );
}