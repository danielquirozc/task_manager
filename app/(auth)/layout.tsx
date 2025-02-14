import '@/styles/globals.css'
import { Metadata } from 'next';
import Image from 'next/image';
import { Toaster } from 'sonner';
import logo from '@/public/logo.png';

export const metadata: Metadata = {
  title: "TaskManager - Authentication",
  description: "TaskManager es una aplicación para gestionar tareas.",
};

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='flex font-geist flex-row bg-light h-screen'>
        <Toaster />
          <div className="w-4/6 bg-cover bg-no-repeat h-full" style={{ backgroundImage: 'url(/loginImage.jpg)' }}>
            <h1 className='text-5xl font-geist m-4 font-black text-black'>BYTETASK</h1>
          </div>
          <div className="flex flex-col items-center justify-center bg-white flex-1">
            <Image className='rounded-xl w-28 h-28' src={logo} alt="Logo" width={100} height={100} />
            {children}
          </div>
      </body>
    </html>
  );
}