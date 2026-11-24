import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import BookingForm from "../components/BookingForm";
import "./prenota.css";
import ScrollToTop from "../components/ScrollToTop";

export const metadata: Metadata = {
  title: "Prenota un tavolo · Trattoria Sempione 210",
  description: "Prenota il tuo tavolo alla Trattoria Sempione 210 di Busto Arsizio: la richiesta arriva su WhatsApp.",
};

export default function Prenota() {
  return (
    <>
      <ScrollToTop />
      <Reveal />
      <Header solid />
      <main className="book-page">
        <section className="book">
          <span className="leaf leaf-a" aria-hidden />
          <span className="leaf leaf-b" aria-hidden />
          <div className="book-head">
            <p className="book-eyebrow">Prenotazioni</p>
            <h1>Prenota il tuo tavolo</h1>
            <p>
              Compila il modulo: la richiesta arriva su WhatsApp e ti confermiamo la
              disponibilità in breve tempo.
            </p>
          </div>
          <BookingForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
