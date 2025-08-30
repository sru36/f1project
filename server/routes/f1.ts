import { RequestHandler } from "express";

export const handleF1Updates: RequestHandler = (_req, res) => {
  // Static sample updates; replace with real data source if available
  res.json([
    { id: "u1", title: "Latest race results available — tap Teams to analyze form.", time: new Date().toISOString() },
    { id: "u2", title: "Pit stop strategy deep dive: Undercuts dominated mid‑stint.", time: new Date(Date.now() - 1000 * 60 * 12).toISOString() },
    { id: "u3", title: "Qualifying recap: front‑row decided by less than a tenth.", time: new Date(Date.now() - 1000 * 60 * 45).toISOString() },
  ]);
};
