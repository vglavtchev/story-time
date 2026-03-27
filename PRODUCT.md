# story-time

An immersive kids’ book customized to a child’s likeness (cartoon style) and interests—prototype as HTML/PDF, then tablet apps.

## Vision

**One sentence:** A personalized, read-aloud–friendly picture story where the hero looks like *this* child, in a world built around *their* interests—safe, delightful, and easy for a parent to steer.

## Pillars

| Pillar | What it means |
|--------|----------------|
| **Likeness** | Recognizable “them” in a gentle cartoon style—not uncanny, not a generic avatar. |
| **Co-creation** | Parent picks themes, tone, and reading level; the story reflects that. |
| **Immersion** | Strong page rhythm, visual continuity, optional motion later—not gimmicks. |
| **Trust** | Clear data use, no dark patterns, age-appropriate content. |

## User journeys

### Parent (primary)

1. Upload 1–3 clear photos (guidance: face visible, good light, no filters).
2. Choose or describe interests (e.g. dinosaurs + baking + little sister) and optional constraints (reading level, length, mood).
3. Preview the **character design** (cartoon) and a **short story beat** before committing to a full book.
4. Receive **prototype**: single HTML “flipbook” or a **PDF** with illustrations + text.
5. Later: save projects, reorder pages, swap a scene, regenerate one spread.

### Kid

- Experience is **read-aloud or tap-through** with big type and full-bleed art. No account required on device in v1 if parent owns the flow.

## Creative system

- **Story structure:** Classic picture-book arc—setup → small problem → try/fail → heart moment → satisfying resolution—in **8–12 spreads** for the prototype.
- **Voice:** Warm, specific verbs; humor that lands for the age band; avoid moralizing unless the parent asks for a lesson.
- **Visual continuity:** One **style bible** per book: palette, line weight, how eyes/faces work—so every page feels like one film, not random panels.
- **Likeness pipeline (conceptual):** Photo → **reference sheet** (same kid: front/3/4, expression notes) → **locked character model** for that book → illustrations generated from that reference so the hero stays consistent across spreads.

## Technical sketch

| Layer | Role |
|-------|------|
| **Ingestion** | Photos + consent metadata; resize/crop server-side; optional face crop for model input. |
| **Likeness** | Image-to-stylized illustration (cartoon)—output is **illustration assets**, not a live deepfake video in v1. “Animated” in the prototype can mean **subtle CSS/page-turn** or **short loops per spread** in a later build. |
| **Story engine** | Structured prompts or templates + slots for interests; outputs **spread-by-spread** JSON (text + scene description + optional dialogue). |
| **Layout** | Template fills text boxes, drops art into frames; exports **HTML** (responsive) or **PDF** (print-safe margins). |
| **Future app** | Same backend + offline cache + native reader; optional on-device generation only if product/legal strategy allows. |

**Prototype stack (flexible):** A small web app that calls image and text APIs, then renders spreads to HTML/PDF. Keep **one repo**, **one “book” schema** (pages array with `text`, `imageUrl`, `layout`) so mobile is a new shell, not a rewrite.

## Prototype: PDF vs HTML

| | **HTML first** | **PDF first** |
|---|----------------|---------------|
| **Pros** | Fast iteration, “flip” feel, easy sharing link, can add motion/CSS | Familiar for parents, printable, “feels like a book” |
| **Cons** | Printing varies | Less interactive; layout is fiddlier |

**Recommendation:** Build **HTML as source of truth** with **Export PDF** using the same layout (e.g. print CSS or headless PDF). One pipeline for web and future in-app WebView or native renderer.

### MVP acceptance criteria

- One child likeness in cartoon style, **consistent across N spreads** (start with **6** if budget is tight).
- Story driven by **parent-supplied interests** in plain language.
- Single-device flow: upload → customize → view book → export PDF/HTML file.

## Roadmap

1. **Phase 0 – Plan & schema:** Story + page model, safety notes, legal checklist for photos of minors.
2. **Phase 1 – Prototype:** Likeness + 6–8 spreads + HTML + PDF export; no accounts if possible.
3. **Phase 2 – Polish:** Style consistency pass, regenerate-one-page, reading levels, basic library of themes.
4. **Phase 3 – Tablet app:** iPad first or cross-platform; wrapping the same APIs; optional offline packs.
5. **Phase 4 – Deeper immersion:** Per-spread micro-animation, professional VO, or AR—only after core reading experience is solid.

## Related docs

- [GUARDRAILS.md](./GUARDRAILS.md) — safety, privacy, and depiction rules.
