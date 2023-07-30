import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-full flex items-center justify-center w-full bg-gray-900">
      <SignUp />;
    </div>
  );
}
