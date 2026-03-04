

## Plan: Expand Grade 11 Biology Question Bank

### Current State
The `grade11Biology.ts` file already contains all 6 units matching the new curriculum, with **30 questions per unit** (10 Easy, 10 Medium, 10 Hard) — **180 total questions**. The subjects file also already lists the correct 6 units.

### What Will Change

**File: `src/data/grade11Biology.ts`**

Add 15 more questions per unit (5 Easy, 5 Medium, 5 Hard), bringing each unit to **45 questions** and the total to **270 questions**.

New questions per unit:
- **Unit 1: Biology and Technology** — 15 new questions on biotech applications, genetic engineering, bioinformatics
- **Unit 2: Characteristics of Animals** — 15 new questions on animal classification, body plans, phyla comparisons
- **Unit 3: Enzymes** — 15 new questions on enzyme kinetics, inhibition types, cofactors/coenzymes
- **Unit 4: Genetics** — 15 new questions on Mendelian genetics, DNA structure, mutations, inheritance patterns
- **Unit 5: The Human Body Systems** — 15 new questions on organ systems, homeostasis, immune/nervous system details
- **Unit 6: Population and Natural Resources** — 15 new questions on population dynamics, conservation, sustainability, biodiversity

All questions will follow the existing format with `id`, `question`, `options`, `correct`, `explanation`, `difficulty`, `chapter`, and `subject` fields.

No changes needed to `grade11Subjects.ts` or any other files — the data structure and helper functions remain compatible.

