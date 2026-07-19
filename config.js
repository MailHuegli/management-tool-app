/* ============================================================
   Maintain Cockpit — Konfiguration (öffentliche App)
   ------------------------------------------------------------
   Diese App enthält KEINE Daten. Deine echten Zahlen/Excel
   werden per GitHub-Token in DEIN PRIVATES Repo gespeichert.

   github.owner / github.repo  = Ziel deiner privaten Daten.
   github.dataPath             = Datei, in der das Tool speichert.

   accessHash: optionales Zusatz-Token als Sichtschutz der Seite.
   Leer ("") = kein Extra-Login; Zugang zu DATEN nur mit GitHub-Token.
   (Token setzen: set-token.html öffnen → Hash hier eintragen.)
   ============================================================ */
window.MAINTAIN_CONFIG = {
  accessHash: "",
  appTitle: "Maintain GmbH — Management-Cockpit",
  appUrl: "Maintain_GmbH_Management_Tool.html",
  github: {
    owner:  "MailHuegli",
    repo:   "Management-Tool",
    branch: "main",
    dataPath:      "data/cockpit-data.json",     // hier speichert das Tool deine Zahlen
    kennzahlenPath:"_kennzahlen_v2.json",         // Planungs-Kennzahlen (privat)
    einsatzplanPath:"WSG_Touren_Dashboard.html",  // interaktiver Touren-Editor (privat)
    jahresplanPath:"WSG_Jahresplan.html"          // 52-Wochen-Jahresplan (privat)
  }
};
