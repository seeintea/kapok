import Link from "next/link"

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-11">
      <Link href="/">
        <a className="shadow-none text-5xl font-bold text-stone-900">inn.</a>
      </Link>
      <div>light or dark ?</div>
    </div>
  )
}
