import type React from "react";

interface PopoverProps extends React.PropsWithChildren {
  title: string;
}

export default function Popover(props: PopoverProps) {
  return <div>{props.children}</div>;
}
