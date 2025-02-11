import '@/styles/globals.css'
import { Metadata } from 'next';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: "TaskManager - Authentication",
  description: "TaskManager es una aplicación para gestionar tareas.",
};

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='flex flex-col bg-light justify-center items-center h-screen'>
        <Toaster />
          {children}
      </body>
    </html>
  );
}