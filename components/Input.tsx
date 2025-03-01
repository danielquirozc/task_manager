import React from "react";

export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="relative leading-tight w-full bg-inherit flex mb-2 items-center">
    <input
      className="bg-transparent relative rounded-lg focus:border-blue-500 border p-2 border-slate-400 outline-none w-full h-full"
      placeholder=" "
      required
      {...props}
      autoComplete="off"
      aria-autocomplete="none"
    />
    <span className="absolute rounded-full px-1 bg-inherit text-slate-600 font-medium left-4 duration-300 scale-[0.9] -translate-y-4 peer-focus:-translate-y-5 peer-focus:scale-[0.9] peer-focus:text-blue-500 capitalize">
      {props.name}
    </span>
  </label>
  );
}