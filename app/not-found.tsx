import Image from "next/image";

import notFountImageUrl from "@/public/images/404.png";

export default function NotFound() {
  return (
    <a className={"cursor-pointer"} href="/">
      <Image
        src={notFountImageUrl}
        width={400}
        height={200}
        alt={"not fount ~"}
      />
    </a>
  );
}
