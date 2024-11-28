import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const completedPaths = ["/photo"];

export default function useNavigator() {
  const pathname = usePathname();
  const [current, setCurrent] = useState<string>("");

  useEffect(() => {
    setCurrent(
      completedPaths.find((route) => pathname.startsWith(route)) ?? ""
    );
  }, [pathname]);

  return current;
}
