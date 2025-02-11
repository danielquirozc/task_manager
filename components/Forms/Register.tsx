'use client'
import { useRouter } from "next/navigation";
import Input from "../Input";
import { toast } from "sonner";

export default function RegisterForm() {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const response = fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(
        {
          username: data.Username,
          password: data.Password
        }
      )
    })
    toast.promise(response, {
      loading: 'Registering...',
      success: 'Registered successfully',
      error: 'Error registering'
    })
    router.push('/login');
  }

  return (
    <form onSubmit={handleSubmit} className="flex bg-white w-full mt-10 font-geist items-center justify-center flex-col gap-4 rounded-xl">
      <Input type="text" name="Username" defaultValue="" />
      <Input type="password" name="Password" defaultValue="" />
      <button className="btn-soft" type="submit">
        Register
      </button>
      <p>Already have an account? <a href="/login" className="text-blue-500 underline">Login</a></p>
    </form>
  );
}