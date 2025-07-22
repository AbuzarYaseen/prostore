import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-amber-100 flex items-center justify-center">
      <p className="text-yellow-500 font-bold">
        this is testing <span className="text-red-500">successfull</span>
      </p>
    </div>
  );
}
