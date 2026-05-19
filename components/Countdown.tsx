"use client";

import { useEffect, useState } from "react";

/**
 * Conta regressiva fixa em 15 dias a partir do primeiro acesso do visitante
 * (persistida em localStorage). Quando expira, reinicia para manter urgência real.
 */
const KEY = "scv_promo_deadline_v1";
const FIFTEEN_DAYS_MS = 15 * 24 * 60 * 60 * 1000;

function getDeadline(): number {
  if (typeof window === "undefined") return Date.now() + FIFTEEN_DAYS_MS;
  const stored = window.localStorage.getItem(KEY);
  if (stored) {
    const ts = Number(stored);
    if (!Number.isNaN(ts) && ts > Date.now()) return ts;
  }
  const deadline = Date.now() + FIFTEEN_DAYS_MS;
  window.localStorage.setItem(KEY, String(deadline));
  return deadline;
}

interface TimeLeft {
  d: number;
  h: number;
  m: number;
  s: number;
}

function diff(target: number): TimeLeft {
  const ms = Math.max(target - Date.now(), 0);
  const d = Math.floor(ms / (1000 * 60 * 60 * 24));
  const h = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const m = Math.floor((ms / (1000 * 60)) % 60);
  const s = Math.floor((ms / 1000) % 60);
  return { d, h, m, s };
}

export function Countdown() {
  const [target, setTarget] = useState<number | null>(null);
  const [left, setLeft] = useState<TimeLeft>({ d: 15, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const t = getDeadline();
    setTarget(t);
    setLeft(diff(t));
    const id = setInterval(() => setLeft(diff(t)), 1000);
    return () => clearInterval(id);
  }, []);

  // Evita hydration mismatch
  const display = target ? left : { d: 15, h: 0, m: 0, s: 0 };

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4">
      <Cell label="Dias" value={display.d} />
      <Sep />
      <Cell label="Horas" value={display.h} />
      <Sep />
      <Cell label="Min" value={display.m} />
      <Sep />
      <Cell label="Seg" value={display.s} />
    </div>
  );
}

function Cell({ label, value }: { label: string; value: number }) {
  const v = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div className="border-glow flex h-16 w-14 items-center justify-center rounded-xl bg-ink-deep/80 shadow-glow-soft sm:h-20 sm:w-20">
        <span className="font-display text-3xl font-semibold text-gradient-gold tabular-nums sm:text-4xl">
          {v}
        </span>
      </div>
      <span className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/45">
        {label}
      </span>
    </div>
  );
}

function Sep() {
  return (
    <span className="-mt-5 font-display text-2xl font-semibold text-royal-200/40 sm:text-3xl">
      :
    </span>
  );
}
