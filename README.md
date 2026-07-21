# Maintain GmbH — Management-Cockpit (öffentliche App)

Dies ist der **App-Code** des Management-Cockpits — **ohne echte Daten**.
Deine Betriebs- und Finanzkennzahlen sowie die Tourenplanung liegen in einem
**separaten, privaten** Repository und werden zur Laufzeit per GitHub-Token geladen.

## Dateien in diesem Repo (öffentlich)

| Datei | Zweck |
|-------|-------|
| `index.html` | Einstieg / Login |
| `config.js` | Konfiguration: zeigt auf dein privates Daten-Repo |
| `Maintain_GmbH_Management_Tool.html` | das eigentliche Cockpit (Übersicht, Eingaben, Finanz-Dashboard, Szenario, Tourenplanung, Benchmark, GitHub-Sync) |
| `set-token.html` | optionaler Helfer, um ein Zugangs-Token zu setzen |

## Nutzung

1. Über den GitHub-Pages-Link öffnen.
2. Im Tab **GitHub-Sync** deinen Personal Access Token (fine-grained, *Contents: Read and write* auf das private Repo) eintragen → **Verbinden & Laden**.
3. Zahlen eintragen oder die Excel-Vorlage `Vorlage_Monatszahlen_Import.xlsx` hochladen → **In GitHub speichern**.

Der Token bleibt nur im Browser (localStorage) und wird nie ins Repo geschrieben.

## Privates Daten-Repo

Enthält `WSG_Tourenplanung.html`, `_kennzahlen_v2.json` und den (automatisch
angelegten) Ordner `data/` mit `cockpit-data.json` und `WSG_manual_overrides.json`.
