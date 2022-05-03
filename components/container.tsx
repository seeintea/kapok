import { ReactNode } from "react"

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto py-11 px-5 text-primary">{children}</div>
  )
}
