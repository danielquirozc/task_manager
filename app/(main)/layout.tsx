import type { Metadata } from "next";
import "@/styles/globals.css";
import SideBar from "@/components/Sidebar/Sidebar";
import Main from "@/components/Main/Main";
import { Toaster } from "sonner";
import { Geist } from "next/font/google"

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "TaskManager",
  description: "TaskManager es una aplicación para gestionar tareas.",
};

export default function Layout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`flex bg-light antialiased ${geist.className}`}
      >
        <SideBar />
        <Main>
          {children}
        </Main>
        <Toaster />
        {modal}
      </body>
    </html>
  );
}
