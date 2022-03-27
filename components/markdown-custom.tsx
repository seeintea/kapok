import Link from "next/link"
import Image from "next/image"

const CustomAnchorElement = (props: any) => {
  const regex = /^((http|https):)?\/\//
  if (regex.test(props.href)) {
    return (
      <a href={props.href} target="_blank" rel="noreferrer">
        {props.children}
      </a>
    )
  }
  return (
    <Link href={props.href}>
      <a>{props.children}</a>
    </Link>
  )
}

const CustomImageElement = (props: any) => {
  return (
    <div style={{ width: "100%", paddingBottom: "75%", position: "relative" }}>
      <Image
        src={props.src}
        alt={props.alt}
        loading="lazy"
        layout="fill"
        objectFit="contain"
      />
    </div>
  )
}

export { CustomAnchorElement, CustomImageElement }
