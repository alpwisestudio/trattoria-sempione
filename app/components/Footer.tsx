import { MAPS_LINK } from "../lib/site";

export default function Footer() {
  return (
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
  );
}
