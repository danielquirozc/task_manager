export default function SubmitButton({ text }: {
  text: string;
}) {
  return (
    <button
      className="btn-soft font-medium"
      type="submit"
    >
      {text}
    </button>
  );
}