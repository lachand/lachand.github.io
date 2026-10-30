# Design : Signature (fusion)

Ce projet suit Signature, le système de design de tous mes projets personnels. Les fichiers de référence sont dans `vendor/signature/` (version dans `VERSION`) : `tokens.css`, `signature-fusion-overlay.css` et, si le projet affiche une interface web, `bundle.css` et `bundle.js`. Ne jamais éditer ces fichiers dans ce dépôt : on les met à jour par `tools/sync_signature.sh`.

## Principes

1. **La mesure d'abord.** La valeur est la figure : police `--font-mono` (IBM Plex Mono), chiffres tabulaires, unité à droite en `--ink-muted`, libellé au-dessus.
2. **Jamais la couleur seule.** Un état se dit par une couleur, une icône de forme propre (cercle coché, triangle, octogone, cercle pointillé), un libellé et, dans un graphique, un trait ou un motif. Un flux se dit par une teinte, un trait (plein, tirets, points) et un marqueur.
3. **Posé, pas flottant.** Les composants sont des étiquettes de papier posées sur un plan : filets, filet d'ombre de 1 px, rayons de 2, 4 et 6 px. Les titres de section sont des cotes (`.cote-rule`), les états sont des tampons à double filet, la chaleur se dit par des hachures.
4. **Un seul accent.** `--accent` (brique) désigne la sélection, un repère de seuil et l'action principale. Il ne signifie jamais un état. `--cote` (bleu) est réservé aux cotes, au focus et aux dimensions dessinées.
5. **Se caler, jamais rebondir.** Aiguilles et barres décélèrent (`--ease-settle`, `--dur-settle`) sans dépassement. Sous `prefers-reduced-motion`, toutes les durées tombent à zéro.

## Jetons principaux

| Jeton | Clair | Sombre | Usage |
|---|---|---|---|
| `--bg` | `#EAE6D7` | `#1E1B18` | Fond de page |
| `--surface` | `#F6F2E7` | `#27231F` | Étiquettes, cartes, tuiles |
| `--surface-sunken` | `#DBD6C4` | `#171512` | Pistes, champs |
| `--surface-wood` | `#DDC9A0` | `#332D26` | Rubans, cartouches (petites surfaces) |
| `--ink` / `--ink-muted` | `#2A2118` / `#5A4D3E` | `#F3EBDC` / `#BDB1A0` | Texte |
| `--line` / `--line-subtle` | `#7A6C58` / `#CBC3AA` | `#948977` / `#3E372F` | Trait qui porte du sens / filets |
| `--accent` | `#A63D14` | `#E8895A` | Sélection, seuil, action principale |
| `--cote` | `#2A5A7C` | `#7DC3E0` | Cotes, focus |
| `--ok` `--attention` `--critique` `--inactif` | `#14654F` `#8A5A00` `#A3162B` `#6B6254` | `#55C4A8` `#E8B93E` `#FF8A80` `#9A9080` | États, chacun avec son `-fond` |
| `--production` `--consommation` `--stockage` | `#0B63A5` `#A85F00` `#8E3A78` | `#62B6F0` `#E8A33A` `#E091C2` | Flux d'énergie |

Trois thèmes : clair (par défaut), `data-theme="dark"`, `data-theme="contrast"` (contraste fort, AAA). Polices : Fraunces (titres), Inter Tight (interface), IBM Plex Mono (mesures).

## À faire, à ne pas faire

| À faire | À ne pas faire |
|---|---|
| Lire toute couleur et toute police par `var(--...)`. | Écrire une couleur hexadécimale ou une police en dur. |
| Écrire `68,4 °C` avec virgule et espace insécable avant l'unité. | Écrire `68.4°C` ou `68,4 C`. |
| Afficher un état par couleur, icône, libellé : « Attention ». | Peindre une valeur en rouge sans autre signe. |
| Ne créer une tuile que si le capteur existe ; sinon un état vide « Aucun capteur configuré ». | Afficher « 0 » ou « N/A » pour un capteur absent. |
| Distinguer deux séries par le trait et le marqueur, en plus de la teinte. | Se reposer sur bleu contre orange seuls. |
| Garder le focus clavier visible (2 px, `--cote`, décalé de 2 px). | Retirer l'outline sans le remplacer. |

## Langue et ton

Français, voix d'un instrument : factuelle, brève, sans exclamation. Libellés d'action à l'infinitif (« Configurer un capteur », « Réessayer »). Erreurs en deux temps, cause puis geste : « Aucune réponse depuis 30 s. Vérifier l'alimentation, puis réessayer. » États en un ou deux mots : « Normal », « Attention », « Critique », « Inactif ». Pas d'anglicisme dans l'interface. Format numérique français (virgule, espace fine insécable entre milliers et avant l'unité, unités SI), durées `3 h 42`, dates `29/10/2026`. Pas de tiret long dans les textes.

## Accessibilité

WCAG AA minimum partout, AAA en contraste fort. Cibles tactiles de 40 px au moins. Tout élément animé respecte `prefers-reduced-motion`. Les graphiques et schémas portent un `aria-label`, les états un rôle `status`, les erreurs un rôle `alert`.

## Vérification

```bash
python vendor/signature/tools/check_tokens.py vendor/signature/tokens.css
```

Le script échoue si un contraste passe sous le seuil. À lancer après toute mise à jour des jetons.
