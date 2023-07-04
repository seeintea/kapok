import Image from "next/image";
import { author, description } from "@/config/website";

export default function CustomHeader() {
  return (
    <header className="py-6 sm:py-10">
      <div className="flex items-center gap-x-2 text-gray-600">
        <div className="overflow-hidden rounded-md">
          <a href="/">
            <Image
              src="/images/logo.jpeg"
              alt="logo"
              width={60}
              height={60}
              loading="lazy"
            />
          </a>
        </div>
        <div className="flex flex-col gap-y-1">
          <span className="font-bold">{author}</span>
          <span className="text-sm">{description}</span>
        </div>
      </div>
    </header>
  );
}
