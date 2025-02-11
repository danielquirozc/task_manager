'use client'
import { useRouter } from "next/navigation";
import Input from "../Input";
import { toast } from "sonner";

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(
        {
          username: data.Username,
          password: data.Password
        }
      )
    })
    if (response.ok) {
      toast.success("Login successful")  
      router.push('/');    
    } else {
      toast.error("Error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex bg-white w-full mt-10 font-geist items-center justify-center flex-col gap-4 rounded-xl">
      <Input type="text" name="Username" defaultValue="" />
      <Input type="password" name="Password" defaultValue="" />
      <button className="btn-soft" type="submit">
        Login
      </button>
      <p>Don&apos;t have an account? <a href="/register" className="text-blue-500 underline">Register</a></p>
    </form>
  );
}