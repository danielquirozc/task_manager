'use client'
import { useRouter } from "next/navigation";
import Input from "../Input";
import { useState } from "react";

export default function LoginForm() {
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
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(
        {
          username: data.Username,
          password: data.Password
        }
      )
    })

    if (res.ok) {
      router.push('/');
      return
    }

    setFormState({
      pending: false,
      error: 'Invalid username or password'
    })
  }

  return (
    <form onSubmit={handleSubmit} className="flex bg-white w-full mt-10 font-geist items-center justify-center flex-col gap-4 rounded-xl">
      <Input type="text" name="Username" defaultValue="" />
      <Input type="password" name="Password" defaultValue="" />
      {formState.error && <p className="text-red-500">{formState.error}</p>}
      <button disabled={formState.pending} className={`btn-soft`} type="submit">
        {formState.pending ? 'Logging in...' : 'Login'}
      </button>
      <p>Don&apos;t have an account? <a href="/register" className="text-blue-500 underline">Register</a></p>
    </form>
  );
}