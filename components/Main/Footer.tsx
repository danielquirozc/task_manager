import AddTaskButton from "../ActionsButtons/AddTask";
import CreateTagButton from "../ActionsButtons/CreateTag";
import LogoutButton from "../ActionsButtons/Logout";

export default function Footer() {
  return (
    <footer className="flex font-geist font-medium items-center h-14 bg-white">
      <AddTaskButton />
      <CreateTagButton />
      <LogoutButton />
    </footer>
  );
}