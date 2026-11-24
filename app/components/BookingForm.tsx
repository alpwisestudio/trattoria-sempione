"use client";

import { useEffect, useMemo, useState } from "react";
import { WHATSAPP, PHONE_DISPLAY, PHONE_TEL } from "../lib/site";

function slots(day: number | null) {
  // day: 0=domenica ... 6=sabato. Lun–Ven 07:30–19:00, sabato 11:00–19:00.
  const start = day === 6 ? 11 * 60 : 7 * 60 + 30;
  const end = 18 * 60 + 30; // ultimo orario di arrivo
  const out: string[] = [];
  for (let m = start; m <= end; m += 30) {
    out.push(`${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`);
  }
  return out;
}

export default function BookingForm() {
  const [min, setMin] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    setMin(d.toISOString().slice(0, 10));
  }, []);

  const day = date ? new Date(`${date}T12:00:00`).getDay() : null;
  const closed = day === 0;
  const options = useMemo(() => (closed ? [] : slots(day)), [day, closed]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const [y, m, d] = String(f.get("date")).split("-");
    const notes = String(f.get("notes") ?? "").trim();
    const text =
      `Ciao! Vorrei prenotare un tavolo alla Trattoria Sempione 210.\n\n` +
      `Nome: ${f.get("name")}\n` +
      `Data: ${d}/${m}/${y}\n` +
      `Orario: ${f.get("time")}\n` +
      `Persone: ${f.get("people")}` +
      (notes ? `\nNote: ${notes}` : "");
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener");
  }

  return (
    <form className="book-card" onSubmit={onSubmit}>
      <label className="field">
        <span>Nome e cognome <b>*</b></span>
        <input name="name" type="text" required autoComplete="name" />
      </label>

      <div className="field-row">
        <label className="field">
          <span>Data <b>*</b></span>
          <input
            name="date"
            type="date"
            required
            min={min}
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              setTime("");
            }}
          />
          {closed && <em className="field-err">Domenica siamo chiusi: scegli un altro giorno.</em>}
        </label>
        <label className="field">
          <span>Orario <b>*</b></span>
          <select
            name="time"
            required
            value={time}
            disabled={!date || closed}
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="">{date ? "Seleziona" : "Scegli prima la data"}</option>
            {options.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="field">
        <span>Numero di persone <b>*</b></span>
        <select name="people" defaultValue="2" required>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </label>

      <label className="field">
        <span>Note</span>
        <textarea name="notes" rows={4} placeholder="Tavolo all'aperto, seggiolone, allergie…" />
      </label>

      <button className="btn btn-amber" type="submit" disabled={closed}>
        Invia su WhatsApp
      </button>
      <p className="book-alt">
        Oppure chiama il <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
      </p>
    </form>
  );
}
