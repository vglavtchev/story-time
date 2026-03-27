# Guardrails

Operational and product rules for **story-time**. These apply to generated content, photo handling, and messaging to parents.

## Appropriate depiction

- Generated story and art must **never** show children **under-dressed** or in **sexualized** contexts.
- Costumes, swimwear, sleepwear, and similar situations must follow **modest, age-appropriate** norms for a mainstream kids’ picture book.
- When in doubt, **cover up** or **choose a different scene** (e.g. pajamas for bedtime, rash guard for pool).

## Photo handling

- The **original** uploaded photo(s) are used **only** to produce a **highly cartoonified** likeness (illustration-style reference, not photorealistic retention of the child’s image).
- **Immediately after** that generation step completes successfully, the **original image bytes are destroyed**—deleted from application storage, caches, and temporary processing buffers as implemented for the product.
- What may persist is the **derived cartoon/stylized assets** and minimal **non-image** metadata needed to run the product (e.g. project id, parent preferences)—**not** the source photo.
- If generation **fails**, originals should still be **purged** on a short TTL or immediately after the user dismisses or abandons the flow, with the same “no lingering copies” expectation.

## Privacy copy

- Tell parents clearly: **what** is deleted, **when**, and that **only** stylized outputs—not source photos—are kept (subject to the retention rules above).

## Broader safety & compliance

- **Photos of children:** Minimize retention, encrypt data in transit and at rest where originals briefly exist, clear parent consent, and follow applicable regulations (e.g. COPPA-style practices where relevant).
- **Content safety:** Block unsafe themes; age-band filters; consider human review for premium tiers at scale.
- **Likeness:** Avoid photoreal video of real kids; stay in **illustration/cartoon** space; label as “inspired by” if legal/product requires.
