# story-time

**Personalized picture books** where the main character looks like *your* kid—in a warm, cartoon style—and the adventure is shaped by what they love.

## What we’re building

**story-time** is an immersive kids’ book experience aimed at families: a parent uploads a photo, describes the child’s interests (dinosaurs, soccer, a new sibling, anything age-appropriate), and gets a **short, read-aloud–friendly story** with **full-page illustrations** starring a **consistent cartoon likeness** of that child—not a generic avatar.

The first version is a **web prototype** that exports a book as an **HTML “flip” experience** and/or **PDF**, so you can share or print it. Later we plan a **tablet app** (iPad and/or Android) with the same core pipeline: one book schema, native reader shell.

We care about **story rhythm** and **visual continuity** (one style per book, clear arc, age-appropriate voice)—closer to a real picture book than a slideshow of random panels.

## Who it’s for

| | |
|---|---|
| **Primary user** | Parent or caregiver—uploads photo, sets themes and tone, exports or reads with the child. |
| **Reader** | The kid—big type, tap or read-aloud; no account needed on the device in early versions if the parent drives the flow. |

## How it works (high level)

1. **Photo in** → generate a **highly cartoonified** character reference (illustration-style, not photoreal video).
2. **Interests in** → a **story engine** fills a fixed page structure (spreads with text + scene prompts).
3. **Layout** → templates place copy and art; **export** to HTML and/or PDF.

Original photos are handled under strict rules: see [GUARDRAILS.md](./GUARDRAILS.md).

## Roadmap (short)

- **Now / prototype:** Likeness + 6–8 spreads + HTML + PDF export.
- **Next:** Stronger consistency, reading levels, regenerate-one-page, saved projects.
- **Then:** Tablet app, optional offline; deeper “immersion” (motion, audio) only after the reading experience is solid.

## Docs

| Doc | Contents |
|-----|----------|
| [**PRODUCT.md**](./PRODUCT.md) | Vision, pillars, user journeys, technical sketch, MVP criteria, full roadmap |
| [**GUARDRAILS.md**](./GUARDRAILS.md) | Depiction standards, photo retention/destruction, privacy messaging, compliance notes |

---

*Private / early-stage project—docs may evolve with implementation.*
