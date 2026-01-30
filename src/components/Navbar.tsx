import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="p-6 flex gap-6 border-b border-zinc-800">
      <Link href="/">Home</Link>
      <Link href="/servicos">Serviços</Link>
      <Link href="/agenda">Agenda</Link>
    </nav>
  )
}