import Link from "next/link";

const CustomAnchorElement = function CustomAnchorElement(props: any) {
  const regex = /^((http|https):)?\/\//;
  if (regex.test(props.href)) {
    return (
      <a href={props.href} target="_blank" rel="noreferrer">
        {props.children}
      </a>
    );
  }
  return (
    <Link href={props.href}>
      <a>{props.children}</a>
    </Link>
  );
};

export { CustomAnchorElement }
