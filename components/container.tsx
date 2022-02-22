import React from "react"

export default function Container({ children }: React.Props<{}>) {
  return <div className="container mx-auto px-5">{children}</div>
}
