import { BookMarked, ChartPie } from "lucide-react";
import React from "react";
import Footer from "./Footer";

export default async function Main({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex flex-col w-full h-screen overflow-hidden">
      <header className="flex flex-1 justify-center items-center w-full max-h-14 text-dark bg-white shadow-md">
        <button disabled={true} className="flex cursor-not-allowed text-blue-600 items-center px-2 py-1 gap-2 rounded-md bg-blue-200">
          <ChartPie size={16} />
          <h4 className="font-geist text-sm font-medium">Home</h4>
        </button>
      </header>
      <section className="flex w-full justify-center items-center flex-1 h-full ">
        {children}
      </section>
      <Footer />
    </main>
  );
}