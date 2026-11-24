import Link from "next/link";

export default function Header({ solid = false }: { solid?: boolean }) {
  return (
    <header className={`site-header${solid ? " scrolled" : ""}`} data-solid={solid || undefined}>
      <Link href="/" className="brand">
        <span className="brand-name">Trattoria Sempione</span>
      </Link>
      <nav className="nav" aria-label="Principale">
        <Link href="/#menu">Menu</Link>
        <Link href="/#orari">Orari</Link>
        <Link href="/#storia">Il locale</Link>
        <Link href="/#recensioni">Recensioni</Link>
      </nav>
      <Link className="btn btn-amber" href="/prenota">
        Prenota
      </Link>
    </header>
  );
}
