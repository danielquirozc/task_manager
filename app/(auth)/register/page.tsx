import RegisterForm from "@/components/Forms/Register";

export default function RegisterPage() {
  return (
    <div className="w-full min-w-3/12 p-8 bg-white overflow-hidden">
      <div className="flex flex-col">
      <h1 className="text-2xl font-black text-dark">Sign Up</h1>
      <p className="text-gray-500">
        By signing up, you agree to the terms and conditions.
      </p>
      </div>
      <RegisterForm />
    </div>
  );
}