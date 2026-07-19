/* ============================================================
   Maintain Cockpit — Zugangs-Konfiguration
   ------------------------------------------------------------
   accessHash = SHA-256-Hash deines Zugangs-Tokens.
   Standard-Token: "maintain-2026"  (BITTE ÄNDERN!)

   Token ändern:
   1) set-token.html im Browser öffnen
   2) Wunsch-Token eingeben  →  neuen Hash kopieren
   3) unten bei accessHash einsetzen  →  speichern  →  committen

   accessHash leer ("") lassen = KEIN Token-Gate (frei zugänglich).
   ============================================================ */
window.MAINTAIN_CONFIG = {
  accessHash: "61e9ba2d547bba76799c48a11f0e82e0b9ff7a7b1f516a15e19180676d4d4100",
  appTitle: "Maintain GmbH — Management-Cockpit",
  appUrl: "Maintain_GmbH_Management_Tool.html"
};
