import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const completedPaths = ["/photo", "/note"];

export default function useRoutePathname() {
  const pathname = usePathname();
  const [current, setCurrent] = useState<string>("");

  useEffect(() => {
    setCurrent(
      completedPaths.find((route) => pathname.startsWith(route)) ?? ""
    );
  }, [pathname]);

  return current;
}
