import Image from "next/image";
import Link from "next/link";

import "@/scss/not-found.scss";
import assetUrl from "@/public/images/404.png";

export default function NotFound() {
  return (
    <div className="not-fount">
      <Link href="/">
        <Image src={assetUrl} width={400} height={200} alt={"not fount ~"} />
      </Link>
    </div>
  );
}
