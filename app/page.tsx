const ADDRESS = "Corso Sempione, 210, 21052 Busto Arsizio VA";
const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Trattoria+Sempione+210+Busto+Arsizio";
const MAP_EMBED =
  "https://www.openstreetmap.org/export/embed.html?bbox=8.8350%2C45.6050%2C8.8700%2C45.6250&layer=mapnik";

const hours = [
  ["Lunedì", "07:30 – 19:00"],
  ["Martedì", "07:30 – 19:00"],
  ["Mercoledì", "07:30 – 19:00"],
  ["Giovedì", "07:30 – 19:00"],
  ["Venerdì", "07:30 – 19:00"],
  ["Sabato", "11:00 – 19:00"],
  ["Domenica", "Chiuso"],
];

const dishes = [
  { name: "Pappardelle al ragù", note: "Pasta all'uovo con ragù cotto lentamente.", tag: "Primo", img: "pappardelle.jpg" },
  { name: "Polenta e ragù", note: "Polenta fumante con sugo di carne.", tag: "Primo", img: "polenta.jpg" },
  { name: "Brioches", note: "Fragranti e dorate, ottime a ogni ora.", tag: "Colazione", img: "brioches.jpg" },
  { name: "Brioche e caffellatte", note: "La pausa perfetta, dal mattino presto.", tag: "Colazione", img: "colazione.jpg" },
];

const reviews = [
  { q: "Personale efficiente e un servizio davvero fichissimo.", a: "Ospite" },
  { q: "Ambiente eccitante e prezzi ragionevoli. Si sta benissimo.", a: "Ospite" },
  { q: "Le brioches sono ottime, il ragù ancora meglio.", a: "Utente Google" },
];

import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      <Reveal />
      <header className="site-header">
        <a href="#top" className="brand">
          <span className="brand-name">Trattoria Sempione</span>
        </a>
        <nav className="nav" aria-label="Principale">
          <a href="#menu">Menu</a>
          <a href="#orari">Orari</a>
          <a href="#storia">Il locale</a>
          <a href="#recensioni">Recensioni</a>
        </nav>
        <a className="btn btn-amber" href="#orari">
          Ordina da asporto
        </a>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <span className="leaf leaf-a" aria-hidden />
          <span className="leaf leaf-b" aria-hidden />
          <div className="hero-copy">
            <h1>
              Ragù, polenta e pappardelle <span>come a casa</span>
            </h1>
            <p className="lead">
              Cucina genuina, porzioni generose e prezzi onesti (€10–€20). Siediti ai tavoli
              all&apos;aperto o porta tutto via con l&apos;asporto.
            </p>
            <div className="actions">
              <a className="btn btn-amber" href="#menu">Scopri il menu</a>
              <a className="btn btn-white" href="#orari">Orari</a>
            </div>
          </div>
          <div className="hero-art">
            <img src="/images/hero.jpg" alt="Pappardelle al ragù" className="hero-img" />
          </div>
        </section>
        {/* MENU */}
        <section className="menu" id="menu">
          <h2 className="title">I nostri piatti</h2>
          <p className="sub">
            Ragù, polenta e pappardelle sono la nostra firma. Non perderti le brioches e, già
            che ci sei, ordina un delizioso cordiale.
          </p>
          <div className="cards">
            {dishes.map((d) => (
              <article className="card" key={d.name}>
                <div className="card-img">
                  <img src={`/images/${d.img}`} alt={d.name} />
                  <span className="tag">{d.tag}</span>
                </div>
                <div className="card-body">
                  <h3>{d.name}</h3>
                  <p>{d.note}</p>
                  <a className="btn btn-outline" href="#orari">Ordina</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* STORY */}
        <section className="story" id="storia">
          <span className="leaf leaf-c" aria-hidden />
          <div className="story-copy">
            <h2 className="title left">
              Un posto dove <br />
              tornare volentieri
            </h2>
            <span className="rule" />
            <p>
              Il personale è efficiente, l&apos;ambiente è vivace e i prezzi sono ragionevoli.
              Qui si mangia bene senza fretta, tra ragù di una volta, polenta calda e
              brioches appena sfornate.
            </p>
            <p>
              Hai poco tempo? Il servizio da asporto ti porta il sapore della trattoria
              ovunque tu sia.
            </p>
            <div className="facts">
              <div><strong>4.2</strong><span>stelle su Google</span></div>
              <div><strong>€10–20</strong><span>a persona</span></div>
              <div><strong>6/7</strong><span>giorni aperti</span></div>
            </div>
          </div>
          <div className="story-panel">
            <img src="/images/ragu.jpg" alt="Tagliatelle al ragù" />
            <span className="panel-tag">Tavoli all&apos;aperto</span>
          </div>
        </section>

        {/* VISIT */}
        <section className="visit" id="orari">
          <h2 className="title">Vieni a trovarci</h2>
          <div className="visit-grid">
            <div className="hours-card">
              <h3>Orari di apertura</h3>
              <ul>
                {hours.map(([d, h]) => (
                  <li key={d} className={h === "Chiuso" ? "closed" : ""}>
                    <span>{d}</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <p className="addr">{ADDRESS}</p>
              <a className="btn btn-amber" href={MAPS_LINK} target="_blank" rel="noreferrer">
                Indicazioni stradali
              </a>
            </div>
            <div className="map">
              <iframe title="Mappa Trattoria Sempione 210" src={MAP_EMBED} loading="lazy" />
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="reviews" id="recensioni">
          <h2 className="title">Dicono di noi</h2>
          <div className="review-grid">
            {reviews.map((r) => (
              <blockquote key={r.q}>
                <span className="stars">★★★★☆</span>
                <p>“{r.q}”</p>
                <footer>— {r.a}</footer>
              </blockquote>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="foot-grid">
          <div>
            <p className="foot-brand">Trattoria Sempione</p>
            <p className="foot-text">
              Ragù, polenta e pappardelle come a casa. Posti all&apos;aperto e cibo da asporto.
            </p>
          </div>
          <div>
            <h4>Dove siamo</h4>
            <p className="foot-text">Corso Sempione, 210</p>
            <p className="foot-text">21052 Busto Arsizio (VA)</p>
            <a className="foot-link" href={MAPS_LINK} target="_blank" rel="noreferrer">
              Indicazioni stradali →
            </a>
          </div>
          <div>
            <h4>Orari</h4>
            <p className="foot-text">Lun – Ven · 07:30 – 19:00</p>
            <p className="foot-text">Sabato · 11:00 – 19:00</p>
            <p className="foot-text">Domenica · Chiuso</p>
          </div>
        </div>
        <p className="credits">
          © 2026 Trattoria Sempione 210 · Foto illustrative da Wikimedia Commons (CC BY, CC BY-SA,
          pubblico dominio): Babbo e Osteria Epoca (pappardelle), Polenta tradicional con ragú de
          carne, Brioche aux pépites de chocolat, Chocolate brioche and latte, Tagliatelle al ragù
          Trattoria Tony.
        </p>
      </footer>
    </>
  );
}
