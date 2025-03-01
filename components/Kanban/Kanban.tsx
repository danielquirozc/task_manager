'use client'
import { useKanban } from "@/app/hooks/useKanban";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { tags, tasks, taskstatus } from "@prisma/client";
import { toast } from "sonner";
import TaskList from "./TaskList";

export type TaskWithTags = tasks & {
  tagsOnTasks: {
    tags: tags 
  }[]
}

interface Props {
  taskCollection: TaskWithTags[]
}

export default function Kanban({ taskCollection }: Props) {
  const { tasks, moveTask } = useKanban({ taskCollection });

  const onDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!active || !over || active.data.current?.associatedGroup === over.data.current?.groupName) return
    const taskID = active.id as number;
    const newStatus = over.data.current?.groupName as taskstatus;
    const oldStatus = active.data.current?.associatedGroup as taskstatus;    
    const response = moveTask({ taskID, newStatus, oldStatus });
    toast.promise(response, {
      loading: 'Updating task status...',
      success: 'Task status updated successfully',
      error: 'Error updating task status'
    })
  }

  return (
    <DndContext onDragEnd={onDragEnd}>
      <div className="flex justify-center m-5 *:flex-1 *:h-full items-center h-full w-full flex-row gap-10">
        <TaskList status={taskstatus.Do} title="Todo List" tasks={tasks.Do} />
        <TaskList status={taskstatus.Pending} title="In Progress" tasks={tasks.Pending} />
        <TaskList status={taskstatus.Done} title="Done" tasks={tasks.Done} />
      </div>
    </DndContext>
  );
}