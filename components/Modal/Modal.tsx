'use client'
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function Modal({ children }: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();
  const handleClose = () => {
    router.back()
  }
  return (
    <AnimatePresence>
      <motion.div layout initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{  opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
        <div className="absolute font-geist left-0 top-0 flex justify-center items-center w-full h-screen bg-slate-700/50">
          <div className="bg-white border shadow-2xl min-w-96 relative rounded-xl">
            <button onClick={handleClose} className="absolute top-2 right-2 text-dark">
              <X size={24} className="text-slate-600" />
            </button>
            {children}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}