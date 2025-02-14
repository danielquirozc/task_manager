'use client'
import { useRouter } from "next/navigation";
import Input from "../Input";
import { useState } from "react";

export default function RegisterForm() {
  const router = useRouter();
  const [formState, setFormState] = useState({
      pending: false,
      error: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({
      pending: true,
      error: ''
    })
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(
        {
          username: data.Username,
          password: data.Password
        }
      )
    })

    if (response.ok) {
      router.push('/login');
      return
    }

    setFormState({
      pending: false,
      error: response.statusText
    })
  }

  return (
    <form onSubmit={handleSubmit} className="flex bg-white w-full mt-10 font-geist items-center justify-center flex-col gap-4 rounded-xl">
      <Input type="text" name="Username" defaultValue="" />
      <Input type="password" name="Password" defaultValue="" />
      {formState.error && <p className="text-red-500">{formState.error}</p>}
      <button disabled={formState.pending} className="btn-soft" type="submit">
        {formState.pending ? 'Registering...' : 'Register'}
      </button>
      <p>Already have an account? <a href="/login" className="text-blue-500 underline">Login</a></p>
    </form>
  );
}