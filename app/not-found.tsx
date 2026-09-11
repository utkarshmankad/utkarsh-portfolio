import Link from "next/link";

export default function NotFound() {
  return <main className="not-found">
    <div>
      <p>404 · Page not found</p>
      <h1>This path doesn’t lead anywhere.</h1>
      <p>The portfolio is still here. Start again, or jump directly to the work.</p>
      <nav aria-label="Page not found options"><Link href="/">Return home</Link><Link href="/#work">View my experience</Link></nav>
    </div>
  </main>;
}
