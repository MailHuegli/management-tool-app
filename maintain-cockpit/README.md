# Maintain GmbH — Management-Cockpit

All-in-One-Steuerungstool: **Ist-Zahlen erfassen · Finanz-Dashboard · Szenario/Ziele · Tourenplanung** — in einer Web-App, ohne Installation. Zugang über ein Token, das sich lokal im Browser merkt.

---

## ⚠️ Wichtig zuerst: Datenschutz & Repo-Sichtbarkeit

- **Der Einsatzplan (`WSG_Einsatzplan_v2.html`) enthält die 120 Objekt-Adressen (mit Koordinaten) eingebettet.** In einem **öffentlichen** Repo wären diese für jeden im Quellcode lesbar — das Token schützt nur die veröffentlichte Seite, **nicht** den Repo-Quellcode.
  → **Empfehlung: Repo auf `Private` stellen.** (Für GitHub Pages aus privaten Repos braucht es einen bezahlten Plan — GitHub Pro/Team.)
  → Alternativ: den Einsatzplan / den Ordner `data/` vor dem Push entfernen, wenn das Repo öffentlich sein soll.
- **Deine eingegebenen Zahlen bleiben immer nur in deinem Browser** (localStorage). Sie landen **nie** im Repo oder auf GitHub. Das Repo enthält nur das leere Tool + die Beispiel-Planungsdaten.
- Das Token-Gate ist ein **Komfort-/Sichtschutz**, keine kryptografische Sicherheit. Es hält Gelegenheitsbesucher von der veröffentlichten URL fern — mehr nicht.

---

## Inhalt des Ordners

| Datei | Zweck |
|---|---|
| `index.html` | **Einstieg** — Token-Login, meldet automatisch an, wenn bereits angemeldet |
| `config.js` | Zugangs-Konfiguration (Token-Hash — **hier Token ändern**) |
| `set-token.html` | Helfer: eigenes Token → Hash für `config.js` erzeugen |
| `Maintain_GmbH_Management_Tool.html` | Das Hauptwerkzeug (6 Tabs) |
| `WSG_Einsatzplan_v2.html` | Tourenplanung (im Tool eingebettet + einzeln aufrufbar) |
| `_kennzahlen_v2.json` | Kennzahlen für „Ist-Werte aus Tourenplanung laden" |
| `data/` | Rohdaten (Objekte, Leistungen, Touren, Kosten) als CSV |

---

## Token (Zugang)

- **Standard-Token:** `maintain-2026`  ← **unbedingt ändern!**
- Ändern in 3 Schritten:
  1. `set-token.html` im Browser öffnen.
  2. Wunsch-Token eingeben → **Zeile kopieren**.
  3. In `config.js` die Zeile `accessHash: "…"` durch die kopierte ersetzen → speichern → committen.
- Beim ersten Öffnen fragt `index.html` nach dem Token. Mit „Auf diesem Gerät merken" wird es lokal gespeichert und du bist beim nächsten Mal **automatisch angemeldet**.
- Token entfernen/Gerät abmelden: Browser-Daten der Seite löschen, oder in der Konsole `localStorage.removeItem('maintain_access')`.
- Ganz ohne Gate: in `config.js` `accessHash: ""` setzen (frei zugänglich).

---

## A) Veröffentlichen auf GitHub Pages (Web, ohne Kommandozeile)

1. Auf **github.com** einloggen → **New repository**.
   - Name z. B. `maintain-cockpit`
   - Sichtbarkeit: **Private** empfohlen (siehe Warnung oben).
   - „Create repository".
2. Auf der Repo-Seite: **Add file → Upload files**.
   - **Den gesamten Inhalt dieses Ordners** hineinziehen (alle Dateien + den Ordner `data/`).
   - „Commit changes".
3. **Settings → Pages** (linke Leiste).
   - „Build and deployment" → Source: **Deploy from a branch**.
   - Branch: **main** / Ordner: **/(root)** → **Save**.
4. Nach ~1 Minute erscheint oben die URL:
   `https://<dein-benutzername>.github.io/maintain-cockpit/`
   → Diese Seite öffnet automatisch `index.html` (den Token-Login).

> Privates Repo + Pages benötigt GitHub Pro/Team. Ohne bezahlten Plan ist Pages nur bei öffentlichem Repo verfügbar — dann bitte die Datenschutz-Warnung beachten.

---

## B) Veröffentlichen per Git (Kommandozeile)

```bash
cd "C:/Users/andre/Desktop/maintain-cockpit"
git init
git add .
git commit -m "Maintain Cockpit — erste Version"
git branch -M main
git remote add origin https://github.com/<dein-benutzername>/maintain-cockpit.git
git push -u origin main
```
Danach in **Settings → Pages** wie unter A) Schritt 3–4 aktivieren.

---

## C) Ganz ohne GitHub (nur lokal)

- **Einfach:** `index.html` doppelklicken → Token eingeben → Tool öffnet sich. Alles funktioniert offline; deine Eingaben werden lokal gespeichert.
- **Mit Live-Sync** („Ist-Werte aus Tourenplanung laden"): Browser blockieren `fetch` bei `file://`. Dafür einen kleinen lokalen Server starten, z. B.:
  ```powershell
  cd "C:\Users\andre\Desktop\maintain-cockpit"
  python -m http.server 8778
  ```
  Dann `http://localhost:8778/` öffnen.
  (Auf GitHub Pages läuft der `fetch` automatisch — dort ist kein Server nötig.)

---

## Bedienung (Kurz)

1. **Login** mit Token.
2. Tab **Eingaben** → Datenquelle **„Ist-Zahlen (effektiv)"** wählen → echte Umsätze (nach Kategorie) und alle Kostenarten eintragen. Alternativ **„Kalkuliert"** für Planung aus Sätzen × Stunden.
3. Tab **Übersicht**: KPIs mit Ampel-Highlighting + Ergebnisrechnung.
4. Tab **Finanz-Dashboard**: Umsatz nach Kategorie, Marge-Gauge, Kostenstruktur, Wasserfall — mit **Ist/Ziel-Umschalter**.
5. Tab **Szenario & Ziele**: Ziel-Marge eintippen → **„⚡ Hebel-Empfehlung generieren"**.
6. Tab **Tourenplanung**: eingebetteter Einsatzplan (Routen, Takte UR/SR/GU/TH, Karte).

Alle Eingaben werden automatisch im Browser gespeichert (localStorage) und bleiben bis zum nächsten Besuch erhalten.

---

*Erstellt mit Claude · Benchmarks Schweizer Markt 2026 · proprietär (siehe LICENSE).*
