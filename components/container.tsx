import React from "react"

export default function Container({ children }: React.Props<{}>) {
  return <div className="max-w-3xl mx-auto py-11 px-5">{children}</div>
}
