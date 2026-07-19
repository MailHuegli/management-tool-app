# Maintain GmbH — Management-Cockpit (öffentliche App)

Web-App zum Steuern der Betriebs- & Finanzkennzahlen: **Ist-Zahlen erfassen · Finanz-Dashboard · Szenario/Ziele · Tourenplanung**. Diese App enthält **keine Daten** — deine echten Zahlen und Excel-Uploads werden per **GitHub-Token** in dein **privates** Repo gespeichert.

## Aufbau (gratis, Daten privat)

- **Dieses Repo = öffentlich** → liefert den kostenlosen Web-Link (GitHub Pages). Nur App-Code, keine Adressen, keine Zahlen.
- **Privates Repo `MailHuegli/Management-Tool`** = deine Daten. Das Tool liest/schreibt dort über einen **Personal Access Token (Contents: Read and Write)**, den du einmal einträgst; er bleibt nur lokal in deinem Browser.

```
Web-Link (öffentl. Pages)  ──►  App im Browser  ──(dein Token)──►  privates Repo (deine Daten)
```

---

## Einrichtung in 3 Teilen

### Teil 1 — App veröffentlichen (Web-Link)

1. Auf github.com **New repository** → Name z. B. `management-tool-app`, **Public**, Create.
2. **Add file → Upload files** → den **gesamten Inhalt dieses Ordners** hochladen (index.html, config.js, Maintain_GmbH_Management_Tool.html, set-token.html, README.md, LICENSE) → Commit.
3. **Settings → Pages** → Source „Deploy from a branch", Branch `main` / `/(root)` → Save.
4. Nach ~1 Min: **`https://<dein-benutzername>.github.io/management-tool-app/`** → das ist dein Web-Link.

> Der Link ist öffentlich erreichbar, zeigt aber nur die **leere** App. Ohne deinen Token sind keine Daten sichtbar.

### Teil 2 — GitHub-Token erstellen (Read & Write)

1. GitHub → dein Profilbild → **Settings**.
2. Ganz unten **Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**.
3. Einstellen:
   - **Token name:** z. B. „Maintain Cockpit"
   - **Expiration:** z. B. 90 Tage (Ablauf setzen!)
   - **Resource owner:** dein Konto
   - **Repository access:** „Only select repositories" → **`Management-Tool`** wählen
   - **Permissions → Repository permissions → Contents:** auf **Read and write** stellen
4. **Generate token** → Token **kopieren** (wird nur einmal angezeigt).

### Teil 3 — Verbinden & speichern

1. Web-Link öffnen → Tab **„GitHub-Sync"**.
2. Token einfügen (Owner/Repo/Branch sind schon auf `MailHuegli / Management-Tool / main` vorbelegt).
3. **🔌 Verbinden & Laden** → grüner Status „verbunden (privat)".
4. Im Tab **Eingaben** deine Ist-Zahlen/Excel eintragen, dann **☁ In GitHub speichern**.
   → Beim ersten Speichern wird `data/cockpit-data.json` im privaten Repo angelegt.
5. Auf einem anderen Gerät: Web-Link + Token → **Verbinden & Laden** → dein Stand ist da.

---

## Excel hochladen

- Toolbar **„⬆ Excel/CSV hochladen"** → `.xlsx`/`.xls`/`.csv`.
- Erkannte Spalten: Fläche innen (m²), Garten (m²), Frequenz/Takt, oder direkt „Aufwand Min/Std pro Monat". Daraus schätzt das Tool UR/GU/TH/SR-Stunden.
- Danach **☁ In GitHub speichern**, um den Stand zu sichern.
- (Excel-Verarbeitung nutzt die SheetJS-Bibliothek, die die Seite online lädt.)

---

## Sicherheit & Datenschutz

- Der **Token liegt nur in deinem Browser** (localStorage), wird nie ins Repo geschrieben und nie an Dritte gesendet — nur an die GitHub-API.
- Nutze bewusst einen **fine-grained Token, nur für dieses eine Repo, nur „Contents", mit Ablaufdatum**. So ist der mögliche Schaden minimal, falls das Gerät verloren geht. Token dann auf GitHub „Revoke".
- Im Tool: **„🗑 Token entfernen"** löscht ihn aus dem Browser.
- Optionaler Zusatz-Sichtschutz der öffentlichen Seite: in `config.js` einen `accessHash` setzen (via `set-token.html`) — dann fragt die Seite zusätzlich ein einfaches Token ab.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | Einstieg (leitet ins Tool; optionaler Token-Sichtschutz) |
| `config.js` | Ziel-Repo & Optionen (Owner/Repo/Pfade) |
| `Maintain_GmbH_Management_Tool.html` | die App (7 Tabs, inkl. GitHub-Sync) |
| `set-token.html` | Helfer für den optionalen Seiten-Sichtschutz |

*Erstellt mit Claude · proprietär (siehe LICENSE).*
