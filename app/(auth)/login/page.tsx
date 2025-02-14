import LoginForm from "@/components/Forms/Login";

export default function LoginPage() {
  return (
    <div className="w-full font-geist min-w-3/12 p-8 overflow-hidden">
    <div className="flex flex-col">
      <h1 className="text-2xl font-black text-dark">Log In</h1>
      <p className="text-gray-500">
        By logging in you agree to the ridiculously long terms that you didn{'\''}t bother to read
      </p>
    </div>
    <LoginForm />
  </div>
  );
}