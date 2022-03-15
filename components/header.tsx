import Link from "next/link"
import { useEffect } from "react"

export default function Header() {
  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme) {
      document.documentElement.className = theme
    }
  }, [])

  const onChangeSiteTheme = (theme: string) => {
    localStorage.setItem("theme", theme)
    document.documentElement.className = theme
  }

  return (
    <div className="flex justify-between items-center mb-11">
      <Link href="/">
        <a className="shadow-none text-5xl font-bold text-stone-900">inn.</a>
      </Link>
      <div>
        <span
          className="cursor-pointer"
          onClick={() => onChangeSiteTheme("light")}
        >
          light
        </span>{" "}
        or{" "}
        <span
          className="cursor-pointer"
          onClick={() => onChangeSiteTheme("dark")}
        >
          dark
        </span>{" "}
        ?
      </div>
    </div>
  )
}
