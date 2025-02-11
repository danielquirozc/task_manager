import RegisterForm from "@/components/Forms/Register";
import Image from "next/image";
import hands from "@/public/hands.png";

export default function RegisterPage() {
  return (
    <div className="font-geist rounded-xl shadow-md min-w-3/12 p-8 bg-white overflow-hidden">
      <div className="flex gap-3 max-w-80">
        <Image src={hands} className="aspect-square w-14" alt="salute" width={50} height={50} />
        <h1 className="text-2xl font-bold text-dark">Register in to your account to get started</h1>
      </div>
      <RegisterForm />
    </div>
  );
}