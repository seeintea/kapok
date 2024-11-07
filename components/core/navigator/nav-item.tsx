"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

interface NavItemProps {
  name: string;
  path: string;
  icon: React.ReactNode;
}

export default function NavItem({ name, path, icon }: NavItemProps) {
  const pathname = usePathname();

  let spanKlass = "py-1 px-2";
  let aKlass = "nav-item-text";

  if (pathname === path) {
    spanKlass = "py-1 px-2 shadow bg-white rounded-lg";
    aKlass = "font-medium";
  }

  return (
    <span className={spanKlass}>
      <Link
        className="h-full flex justify-center items-center gap-1.5 cursor-pointer"
        href={path}
      >
        {icon}
        <span className={aKlass}>{name}</span>
      </Link>
    </span>
  );
}
