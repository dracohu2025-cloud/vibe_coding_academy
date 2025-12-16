---
description: How to publish or update a Vibe Coach technical article
---

# Vibe Coach Content Protocol

When the user asks a technical question, follow this protocol to mentor them via the Vibe Coding app.

## 1. Plan Content

- **Style**: Vibe Coding style (metaphors, cyberpunk edge, simple language, no jargon without explanation).
- **Structure**:
  - **Metaphor**: Start with a non-technical analogy.
  - **Core Concept**: Explain the "what" and "why".
  - **Code**: Show simple, commented code.
  - **Vibe Check**: Concluding thought.

## 2. File Creation (Bilingual)

You must create TWO files for every topic.

### Chinese Content

Path: `src/content/cn/[topic_id].md`

```markdown
# [Title in Chinese]
... content ...
```

### English Content

Path: `src/content/en/[topic_id].md`

```markdown
# [Title in English]
... content ...
```

## 3. Registration

You must register the new topic in the system.

### A. Translation Keys

Edit `src/contexts/LanguageContext.tsx`. Add keys to both `cn` and `en` objects:

```typescript
// in cn object
'topic.[topic_id].title': '[Chinese Title]',
'topic.[topic_id].desc': '[Short Chinese Description]',

// in en object
'topic.[topic_id].title': '[English Title]',
'topic.[topic_id].desc': '[Short English Description]',
```

### B. Knowledge Graph

Edit `src/data/knowledge_data.ts`. Add a new `Topic` object:

```typescript
{
  id: '[topic_id]',
  translationKey: 'topic.[topic_id]',
  phase: 'gear', // or 'launch', 'build', 'expedition' based on difficulty
  colSpan: 1, // Optional, usually 1
  rowSpan: 1  // Optional, usually 1
}
```

## 4. Deploy

1. Run `git add .`
2. Run `git commit -m "docs: add [topic_id] content"`
3. Run `git push`

## 5. Delivery

Notify the user with the direct link:
`https://vibecoding.aigc.green/journey?topic=[topic_id]`

## 6. Updates

If updating an existing article:

1. Modify `src/content/cn/[topic_id].md` AND `src/content/en/[topic_id].md`.
2. Commit and push.
3. Return the same link.
