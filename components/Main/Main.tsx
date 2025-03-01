import React from "react";
import Footer from "./Footer";

export default async function Main({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex flex-col w-full h-screen overflow-hidden">
      <section className="flex w-full justify-center items-center flex-1 h-full ">
        {children}
      </section>
      <Footer />
    </main>
  );
}