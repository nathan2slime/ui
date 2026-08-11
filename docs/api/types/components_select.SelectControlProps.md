# Type Alias: SelectControlProps

> **SelectControlProps** = `Omit`\<`ButtonHTMLAttributes`\<`HTMLButtonElement`\>, `"children"` \| `"color"` \| `"disabled"` \| `"id"` \| `"type"`\> & `Partial`\<\{ `endContent`: `ReactNode`; `placeholder`: `ReactNode`; `startContent`: `ReactNode`; \}\>

Props accepted by the button trigger compound part.

The root owns selection state and the native button type, while standard
button attributes and event handlers remain available for composition.
