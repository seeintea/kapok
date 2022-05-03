import { memo, useEffect } from "react"
import Link from "next/link"
import config from "@/kapok.config"

const changeWebThemeMode = (mode: string) => {
  localStorage.setItem("theme", mode)
  document.documentElement.className = mode
}

type custom = {
  size?: "small" | "default"
}

export default memo(function Header(customProps: custom) {
  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme) {
      document.documentElement.className = theme
    }
  }, [])

  return (
    <div className="flex justify-between items-center mb-11">
      <Link href="/">
        <a
          className={
            customProps.size === "small"
              ? "shadow-none text-3xl font-bold text-link"
              : "shadow-none text-5xl font-bold text-primary"
          }
        >
          {config.name}
        </a>
      </Link>
      <div>
        <span
          role={"button"}
          className="cursor-pointer"
          onClick={() => changeWebThemeMode("light")}
        >
          light
        </span>{" "}
        or{" "}
        <span
          role={"button"}
          className="cursor-pointer"
          onClick={() => changeWebThemeMode("dark")}
        >
          dark
        </span>{" "}
        ?
      </div>
    </div>
  )
})
